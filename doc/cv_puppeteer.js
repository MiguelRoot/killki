import puppeteer from 'puppeteer';

const html = `
<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="UTF-8">
<title>CV Profesional - Luis Ramírez</title>

<!-- 🟢 Metadata semántica -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Luis Ramírez",
  "jobTitle": "Ingeniero de Software Senior",
  "skills": ["Go", "Node.js", "AWS", "Docker", "Kubernetes", "SQL", "Redis", "Microservicios"],
  "alumniOf": "Universidad Metropolitana",
  "workExperience": [
    { "name": "ApexCore Technologies", "role": "Senior Software Engineer" },
    { "name": "CloudMatrix Labs", "role": "Backend Engineer" }
  ]
}
</script>

<style>
  body { font-family: Helvetica, Arial, sans-serif; padding: 60px; }
  h1 { font-size: 28px; margin-bottom: 10px; }
  h2 { font-size: 18px; margin-top: 30px; }
  h3 { font-size: 14px; margin-bottom: 5px; }
  p, li { font-size: 12px; line-height: 1.4; }
  ul { margin: 5px 0 15px 0; }
</style>
</head>

<body>

<article role="article">

<header>
<h1>Luis Ramírez</h1>
<h2>Ingeniero de Software Senior</h2>
</header>

<section aria-labelledby="resumen">
<h2 id="resumen">Resumen Profesional</h2>
<p>Profesional con 8 años de experiencia en desarrollo backend, arquitecturas escalables y sistemas distribuidos.</p>
</section>

<section aria-labelledby="exp">
<h2 id="exp">Experiencia</h2>

<h3>ApexCore Technologies (2021–2025) — Senior Software Engineer</h3>
<ul>
  <li>Microservicios y APIs de alto rendimiento</li>
  <li>Supervisión, métricas y observabilidad</li>
</ul>

<h3>CloudMatrix Labs (2017–2021) — Backend Engineer</h3>
<ul>
  <li>Orquestación Docker/Kubernetes</li>
  <li>CI/CD y bases de datos distribuidas</li>
</ul>

</section>

<section aria-labelledby="edu">
<h2 id="edu">Educación</h2>
<p>Ingeniería de Sistemas — Universidad Metropolitana (2013–2017)</p>
</section>

<section aria-labelledby="hab">
<h2 id="hab">Habilidades</h2>
<ul>
  <li>Go</li><li>Node.js</li><li>AWS</li><li>Docker</li><li>Kubernetes</li><li>SQL</li><li>Redis</li><li>Microservicios</li><li>Observabilidad</li>
</ul>
</section>

</article>

</body>
</html>
`;

async function crearCV_puppeteer() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.setContent(html, { waitUntil: "networkidle0" });

  await page.pdf({
    path: "CV-LuisRamirez-Puppeteer-Semantico.pdf",
    format: "A4",
    printBackground: true
  });

  await browser.close();
}

crearCV_puppeteer();
