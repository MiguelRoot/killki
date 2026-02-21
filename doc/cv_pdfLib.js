import { PDFDocument, StandardFonts, rgb } from 'pdf-lib';
import fs from 'fs';

async function crearCV_pdfLib() {
  const pdfDoc = await PDFDocument.create();

  // 🔵 XMP + metadata extendida
  pdfDoc.setTitle('CV Profesional - Luis Ramírez (Versión PDF-LIB Optimizada)');
  pdfDoc.setAuthor('Luis Ramírez');
  pdfDoc.setSubject('Currículum Vitae — Optimizado para comprensión estructural');
  pdfDoc.setKeywords([
    'CV', 'Curriculum Vitae',
    'Ingeniero de Software Senior',
    'Backend', 'Microservicios',
    'Node.js', 'Go', 'Arquitectura',
    'IA', 'Analisis Automatico'
  ]);
  pdfDoc.setProducer('pdf-lib (Optimized)');
  pdfDoc.setCreator('Sistema de Generación de Documentos Avanzado');

  // 🔵 Página y fuentes
  const page = pdfDoc.addPage();
  const { height } = page.getSize();

  const fontBold = await pdfDoc.embedFont(StandardFonts.HelveticaBold);
  const fontRegular = await pdfDoc.embedFont(StandardFonts.Helvetica);

  let y = height - 60;

  const write = (text, size, font, spacing) => {
    page.drawText(text, { x: 60, y, size, font, color: rgb(0, 0, 0) });
    y -= spacing;
  };

  // 🔵 Estructura jerárquica simulada
  write('Luis Ramírez', 28, fontBold, 35);
  write('Ingeniero de Software Senior', 18, fontBold, 40);

  write('RESUMEN PROFESIONAL', 18, fontBold, 26);
  write(
    'Profesional con 8 años de experiencia en desarrollo backend, arquitecturas escalables y sistemas distribuidos.',
    12,
    fontRegular,
    20
  );

  write('EXPERIENCIA', 18, fontBold, 26);

  write('ApexCore Technologies (2021–2025) — Senior Software Engineer', 14, fontBold, 22);
  write('• Microservicios y APIs de alto rendimiento', 12, fontRegular, 18);
  write('• Supervisión, métricas y observabilidad', 12, fontRegular, 25);

  write('CloudMatrix Labs (2017–2021) — Backend Engineer', 14, fontBold, 22);
  write('• Orquestación Docker/Kubernetes', 12, fontRegular, 18);
  write('• CI/CD y bases de datos distribuidas', 12, fontRegular, 25);

  write('EDUCACIÓN', 18, fontBold, 26);
  write('Ingeniería de Sistemas — Universidad Metropolitana (2013–2017)', 12, fontRegular, 25);

  write('HABILIDADES', 18, fontBold, 26);
  write(
    'Go, Node.js, AWS, Docker, Kubernetes, SQL, Redis, Microservicios, Observabilidad',
    12,
    fontRegular,
    25
  );

  const pdfBytes = await pdfDoc.save();
  fs.writeFileSync('CV-LuisRamirez-pdfLib-Optimizado.pdf', pdfBytes);
}

crearCV_pdfLib();
