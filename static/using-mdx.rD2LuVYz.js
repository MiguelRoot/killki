const e="using-mdx.mdx",n="blog",t="using-mdx",o=`\r
This theme comes with the [@astrojs/mdx](https://docs.astro.build/en/guides/integrations-guide/mdx/) integration installed and configured in your \`astro.config.mjs\` config file. If you prefer not to use MDX, you can disable support by removing the integration from your config file.\r
\r
## Why MDX?\r
\r
MDX is a special flavor of Markdown that supports embedded JavaScript & JSX syntax. This unlocks the ability to [mix JavaScript and UI Components into your Markdown content](https://docs.astro.build/en/guides/markdown-content/#mdx-features) for things like interactive charts or alerts.\r
\r
If you have existing content authored in MDX, this integration will hopefully make migrating to Astro a breeze.\r
\r
## Example\r
\r
Here is how you import and use a UI component inside of MDX.  \r
When you open this page in the browser, you should see the clickable button below.\r
\r
import HeaderLink from '../../components/HeaderLink.astro';\r
\r
<HeaderLink href="#" onclick="alert('clicked!')">\r
	Embedded component in MDX\r
</HeaderLink>\r
\r
## More Links\r
\r
- [MDX Syntax Documentation](https://mdxjs.com/docs/what-is-mdx)\r
- [Astro Usage Documentation](https://docs.astro.build/en/guides/markdown-content/#markdown-and-mdx-pages)\r
- **Note:** [Client Directives](https://docs.astro.build/en/reference/directives-reference/#client-directives) are still required to create interactive components. Otherwise, all components in your MDX will render as static HTML (no JavaScript) by default.\r
`,r={title:"Using MDX",description:"Lorem ipsum dolor sit amet",pubDate:new Date(1656738e6),heroImage:"/blog-placeholder-5.jpg"},i={type:"content",filePath:"C:/Users/BySna/Documents/killki/work/mypage/src/content/blog/using-mdx.mdx",rawData:`\r
title: 'Using MDX'\r
description: 'Lorem ipsum dolor sit amet'\r
pubDate: 'Jul 02 2022'\r
heroImage: '/blog-placeholder-5.jpg'\r`};export{i as _internal,o as body,n as collection,r as data,e as id,t as slug};
