import { writeFile } from "fs/promises";
import {
  Document,
  Packer,
  Paragraph,
  TextRun,
  AlignmentType,
  TabStopType,
  TabStopPosition,
  TableCell,
  TableRow,
  ExternalHyperlink,
  Table,
  WidthType,
  HeightRule,
} from "docx";
import { translations } from "../src/i18n/translations";
import type { Education, Experience, II18n } from "../src/i18n/i18n.model";

function textBorderBottom(paragraph: any) {
  return new Table({
    rows: [
      new TableRow({
        children: [
          new TableCell({
            children: [paragraph],
            borders: {
              top: {
                color: "FFFFFF",
              },
              left: {
                color: "FFFFFF",
              },
              right: {
                color: "FFFFFF",
              },
            } as any,
          }),
        ],
      }),
      new TableRow({
        children: [
          new TableCell({
            children: [],
            borders: {
              top: {
                color: "FFFFFF",
              },
              left: {
                color: "FFFFFF",
              },
              right: {
                color: "FFFFFF",
              },
              bottom: {
                color: "FFFFFF",
              },
            } as any,
          }),
        ],
        height: {
          value: 100, // Altura en "twips" (1/20 de punto, 500 twips = 25 puntos)
          rule: HeightRule.EXACT, // La altura será exacta
        },
      }),
    ],
    width: {
      size: 100,
      type: WidthType.PERCENTAGE,
    },
  });
}

function laboralExperience(data: Experience): Paragraph[] {
  return [
    // Adevinta Experience (con tabulación)
    new Paragraph({
      tabStops: [
        {
          type: TabStopType.RIGHT,
          position: TabStopPosition.MAX,
        },
      ],
      children: [
        new TextRun({
          text: data.company,
          bold: true,
        }),
        new TextRun({
          text: `\t${data.city}`,
          bold: true,
        }),
      ],
    }),

    // Adevinta Experience (con tabulación)
    new Paragraph({
      tabStops: [
        {
          type: TabStopType.RIGHT,
          position: TabStopPosition.MAX,
        },
      ],
      children: [
        new TextRun({
          text: data.position,
        }),
        new TextRun({
          text: `\t${data.startDate}`,
          italics: true,
        }),
      ],
      spacing: { after: 160 },
    }),

    ...data.detalies.map((detail) => {
      return new Paragraph({
        text: detail,
        bullet: { level: 0 },
      });
    }),

    new Paragraph({
      spacing: { after: 160 },
    }),

    // new Paragraph({
    //   text: "Desarrollé una plataforma unificada de componentes y herramientas para los diferentes productos de la empresa para converger técnicamente y acelerar la entrega de producto.",
    //   bullet: { level: 0 },
    // }),
  ];
}

function studentExperience(data: Education): Paragraph[] {
  return [
    new Paragraph({
      tabStops: [
        {
          type: TabStopType.RIGHT,
          position: TabStopPosition.MAX,
        },
      ],
      children: [
        new TextRun({
          text: data.institution,
          bold: true,
        }),
        new TextRun({
          text: `\t${data.city}`,
          bold: true,
        }),
      ],
    }),
    new Paragraph({
      tabStops: [
        {
          type: TabStopType.RIGHT,
          position: TabStopPosition.MAX,
        },
      ],
      children: [
        new TextRun({
          text: data.career,
        }),
        new TextRun({
          text: `\t${data.startDate}`,
          italics: true,
        }),
      ],
      spacing: { after: 160 },
    }),
  ];
}

// Crear el documento
function createDocument(data: II18n) {
  const labotalList = data.experience.map((experience) => {
    return laboralExperience(experience);
  });

  const educationList = data.education.map((education) => {
    return studentExperience(education);
  });

  const skillsListNivel1 = data.skills.filter((skill) => skill.level === 1);
  const skillsListNivel2 = data.skills.filter((skill) => skill.level === 2);
  const skillsListNivel3 = data.skills.filter((skill) => skill.level === 3);

  return new Document({
    sections: [
      {
        children: [
          // Encabezado con nombre y contacto
          new Paragraph({
            alignment: AlignmentType.CENTER,
            children: [
              new TextRun({
                text: data.name,
                bold: true,
                size: 48, // Tamaño de letra grande
              }),
            ],
            spacing: { after: 200 }, // Espaciado después del párrafo
          }),

          textBorderBottom(
            new Paragraph({
              alignment: AlignmentType.CENTER,
              children: [
                new TextRun({
                  text: data.city + " - ",
                }),
                new ExternalHyperlink({
                  children: [
                    new TextRun({
                      text: "linkedin.com/in/miguelkillki",
                      style: "Hyperlink", // Aplica el estilo de hipervínculo
                    }),
                  ],
                  link: data.linkedin,
                }),
                new TextRun({
                  text: ` - ${data.phone} - ${data.email}`,
                }),
              ],
              spacing: { after: 40 }, // Espaciado después del párrafo
            })
          ),

          // Descripción personal
          new Paragraph({
            alignment: AlignmentType.JUSTIFIED,
            children: [new TextRun(data.profile)],
            spacing: { after: 300 },
          }),

          // Título de Experiencia Profesional
          textBorderBottom(
            new Paragraph({
              children: [
                new TextRun({
                  text: "EXPERIENCIA PROFESIONAL",
                  bold: true,
                }),
              ],
              spacing: { after: 20 },
            })
          ),

          ...labotalList.flat(),

          // Educación
          textBorderBottom(
            new Paragraph({
              children: [
                new TextRun({
                  text: "EDUCACIÓN",
                  bold: true,
                }),
              ],
              spacing: { after: 20 },
            })
          ),

          ...educationList.flat(),

          // Skills adicionales

          textBorderBottom(
            new Paragraph({
              children: [
                new TextRun({
                  text: "SKILLS",
                  bold: true,
                }),
              ],
              spacing: { after: 20 },
            })
          ),

          new Paragraph({
            children: [
              new TextRun(
                `Tecnologías: ${skillsListNivel1
                  .map((skill) => skill.title)
                  .join(", ")} ${skillsListNivel2
                  .map((skill) => skill.title)
                  .join(", ")} ${skillsListNivel3
                  .map((skill) => skill.title)
                  .join(", ")}`
              ),
            ],
          }),
        ],
      },
    ],
  });
}

// Guardar el documento
const saveDocument = async () => {
  const buffer: Buffer = await Packer.toBuffer(createDocument(translations.es));
  await writeFile("Curriculum_Miguel_Angel_Llacta_Flores.docx", buffer);
  console.log("Documento generado exitosamente.");
};

saveDocument();
