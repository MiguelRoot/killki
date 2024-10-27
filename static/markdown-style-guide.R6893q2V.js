const n="markdown-style-guide.md",r="blog",e="markdown-style-guide",t=`\r
Here is a sample of some basic Markdown syntax that can be used when writing Markdown content in Astro.\r
\r
## Headings\r
\r
The following HTML \`<h1>\`—\`<h6>\` elements represent six levels of section headings. \`<h1>\` is the highest section level while \`<h6>\` is the lowest.\r
\r
# H1\r
\r
## H2\r
\r
### H3\r
\r
#### H4\r
\r
##### H5\r
\r
###### H6\r
\r
## Paragraph\r
\r
Xerum, quo qui aut unt expliquam qui dolut labo. Aque venitatiusda cum, voluptionse latur sitiae dolessi aut parist aut dollo enim qui voluptate ma dolestendit peritin re plis aut quas inctum laceat est volestemque commosa as cus endigna tectur, offic to cor sequas etum rerum idem sintibus eiur? Quianimin porecus evelectur, cum que nis nust voloribus ratem aut omnimi, sitatur? Quiatem. Nam, omnis sum am facea corem alique molestrunt et eos evelece arcillit ut aut eos eos nus, sin conecerem erum fuga. Ri oditatquam, ad quibus unda veliamenimin cusam et facea ipsamus es exerum sitate dolores editium rerore eost, temped molorro ratiae volorro te reribus dolorer sperchicium faceata tiustia prat.\r
\r
Itatur? Quiatae cullecum rem ent aut odis in re eossequodi nonsequ idebis ne sapicia is sinveli squiatum, core et que aut hariosam ex eat.\r
\r
## Images\r
\r
#### Syntax\r
\r
\`\`\`markdown\r
![Alt text](./full/or/relative/path/of/image)\r
\`\`\`\r
\r
#### Output\r
\r
![blog placeholder](/blog-placeholder-about.jpg)\r
\r
## Blockquotes\r
\r
The blockquote element represents content that is quoted from another source, optionally with a citation which must be within a \`footer\` or \`cite\` element, and optionally with in-line changes such as annotations and abbreviations.\r
\r
### Blockquote without attribution\r
\r
#### Syntax\r
\r
\`\`\`markdown\r
> Tiam, ad mint andaepu dandae nostion secatur sequo quae.  \r
> **Note** that you can use _Markdown syntax_ within a blockquote.\r
\`\`\`\r
\r
#### Output\r
\r
> Tiam, ad mint andaepu dandae nostion secatur sequo quae.  \r
> **Note** that you can use _Markdown syntax_ within a blockquote.\r
\r
### Blockquote with attribution\r
\r
#### Syntax\r
\r
\`\`\`markdown\r
> Don't communicate by sharing memory, share memory by communicating.<br>\r
> — <cite>Rob Pike[^1]</cite>\r
\`\`\`\r
\r
#### Output\r
\r
> Don't communicate by sharing memory, share memory by communicating.<br>\r
> — <cite>Rob Pike[^1]</cite>\r
\r
[^1]: The above quote is excerpted from Rob Pike's [talk](https://www.youtube.com/watch?v=PAAkCSZUG1c) during Gopherfest, November 18, 2015.\r
\r
## Tables\r
\r
#### Syntax\r
\r
\`\`\`markdown\r
| Italics   | Bold     | Code   |\r
| --------- | -------- | ------ |\r
| _italics_ | **bold** | \`code\` |\r
\`\`\`\r
\r
#### Output\r
\r
| Italics   | Bold     | Code   |\r
| --------- | -------- | ------ |\r
| _italics_ | **bold** | \`code\` |\r
\r
## Code Blocks\r
\r
#### Syntax\r
\r
we can use 3 backticks \`\`\` in new line and write snippet and close with 3 backticks on new line and to highlight language specific syntac, write one word of language name after first 3 backticks, for eg. html, javascript, css, markdown, typescript, txt, bash\r
\r
\`\`\`\`markdown\r
\`\`\`html\r
<!doctype html>\r
<html lang="en">\r
  <head>\r
    <meta charset="utf-8" />\r
    <title>Example HTML5 Document</title>\r
  </head>\r
  <body>\r
    <p>Test</p>\r
  </body>\r
</html>\r
\`\`\`\r
\`\`\`\`\r
\r
Output\r
\r
\`\`\`html\r
<!doctype html>\r
<html lang="en">\r
  <head>\r
    <meta charset="utf-8" />\r
    <title>Example HTML5 Document</title>\r
  </head>\r
  <body>\r
    <p>Test</p>\r
  </body>\r
</html>\r
\`\`\`\r
\r
## List Types\r
\r
### Ordered List\r
\r
#### Syntax\r
\r
\`\`\`markdown\r
1. First item\r
2. Second item\r
3. Third item\r
\`\`\`\r
\r
#### Output\r
\r
1. First item\r
2. Second item\r
3. Third item\r
\r
### Unordered List\r
\r
#### Syntax\r
\r
\`\`\`markdown\r
- List item\r
- Another item\r
- And another item\r
\`\`\`\r
\r
#### Output\r
\r
- List item\r
- Another item\r
- And another item\r
\r
### Nested list\r
\r
#### Syntax\r
\r
\`\`\`markdown\r
- Fruit\r
  - Apple\r
  - Orange\r
  - Banana\r
- Dairy\r
  - Milk\r
  - Cheese\r
\`\`\`\r
\r
#### Output\r
\r
- Fruit\r
  - Apple\r
  - Orange\r
  - Banana\r
- Dairy\r
  - Milk\r
  - Cheese\r
\r
## Other Elements — abbr, sub, sup, kbd, mark\r
\r
#### Syntax\r
\r
\`\`\`markdown\r
<abbr title="Graphics Interchange Format">GIF</abbr> is a bitmap image format.\r
\r
H<sub>2</sub>O\r
\r
X<sup>n</sup> + Y<sup>n</sup> = Z<sup>n</sup>\r
\r
Press <kbd><kbd>CTRL</kbd>+<kbd>ALT</kbd>+<kbd>Delete</kbd></kbd> to end the session.\r
\r
Most <mark>salamanders</mark> are nocturnal, and hunt for insects, worms, and other small creatures.\r
\`\`\`\r
\r
#### Output\r
\r
<abbr title="Graphics Interchange Format">GIF</abbr> is a bitmap image format.\r
\r
H<sub>2</sub>O\r
\r
X<sup>n</sup> + Y<sup>n</sup> = Z<sup>n</sup>\r
\r
Press <kbd><kbd>CTRL</kbd>+<kbd>ALT</kbd>+<kbd>Delete</kbd></kbd> to end the session.\r
\r
Most <mark>salamanders</mark> are nocturnal, and hunt for insects, worms, and other small creatures.\r
`,a={title:"Markdown Style Guide",description:"Here is a sample of some basic Markdown syntax that can be used when writing Markdown content in Astro.",pubDate:new Date(16566516e5),heroImage:"/blog-placeholder-1.jpg"},o={type:"content",filePath:"C:/Users/BySna/Documents/killki/work/mypage/src/content/blog/markdown-style-guide.md",rawData:`\r
title: 'Markdown Style Guide'\r
description: 'Here is a sample of some basic Markdown syntax that can be used when writing Markdown content in Astro.'\r
pubDate: 'Jul 01 2022'\r
heroImage: '/blog-placeholder-1.jpg'\r`};export{o as _internal,t as body,r as collection,a as data,n as id,e as slug};
