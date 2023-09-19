import{_ as e,o as t,c as o,Q as a}from"./chunks/framework.477046d0.js";const f=JSON.parse('{"title":"Frontend application architecture","description":"","frontmatter":{},"headers":[],"relativePath":"en/frontend/architecture.md","filePath":"en/frontend/architecture.md"}'),i={name:"en/frontend/architecture.md"},r=a('<h1 id="frontend-application-architecture" tabindex="-1">Frontend application architecture <a class="header-anchor" href="#frontend-application-architecture" aria-label="Permalink to &quot;Frontend application architecture&quot;">​</a></h1><details class="details custom-block"><summary>What is a good web application architecture</summary><p>There are different theoretical definitions and justifications for this concept, but roughly speaking it is the following.</p><p>Let&#39;s say you are developing a project, already at the final stage. A customer comes to you and says something like: I want to add a shadow to all buttons, I want to change the UI library, we decided to support multiple languages, we decided to replace this module with another, we need to make more detailed adaptability for different resolutions, we decided to add themes, we are changing the provider of payment processing services, we have an increasing number of users / the site is slowing down / need to speed it up, need to increase the level of security of the site, we took a middle programmer, bring him up to speed quickly, and let him add functionality or fix the b</p><p>A good frontend application architecture allows you to accomplish all of this most efficiently with the least amount of effort.</p></details><details class="details custom-block"><summary>OOP on the frontend</summary><p>Many people coming from development in object-oriented languages try to use OOP concepts on the frontend and program with classes, inheritance, polymorphism and other things.</p><p>This is a mistake. The main computations on the front end are related to UI - displaying data, handling user interaction. Class systems and microservices are simply not needed on them. Of course, you can create a basic button, wrap it in two custom components and consider it inheritance, but you can&#39;t do it in code. That&#39;s why you have to learn to think in other categories - components, compozables, js modules. And use your JavaScript power, not trying to stretch it on OOP.</p><p>At the same time, a good analogy of an object with a global (&quot;static&quot;) and local (&quot;object&quot;) state is a compsable function. It can be used in certain situations.</p></details><details class="details custom-block"><summary>Suitable architecture for Vue 3 web application</summary><p>The most suitable architecture for a Vue 3 application is modular.</p><p>Initially, the application is divided into logical modules that are loosely related to each other. For example, for an online store, it can be a product catalog module, a module of a single product, a module of a personal cabinet / user account.</p><p>In addition, there is a shell module - what is sometimes called an <code>app shell</code>. A template with a header, footer, side menu and main window. It is wise to put utilities and resources used throughout the application into this module - for example, <code>api</code>, <code>useI18n</code>, <code>BaseButton</code>and<code>stringHelpers</code>.</p><p>Each module has its own <code>components</code>, <code>composables</code>, <code>assets</code>, <code>utils</code>; perhaps <code>api</code>, <code>routes</code>, <code>views</code>, <code>layouts</code>.</p><p>Loose coupling allows each module to be developed fairly independently, which greatly increases the likelihood of project success.</p></details><details class="details custom-block"><summary>Useful tips</summary><h6 id="avoid-addictions" tabindex="-1">Avoid addictions <a class="header-anchor" href="#avoid-addictions" aria-label="Permalink to &quot;Avoid addictions&quot;">​</a></h6><p>If there is a possibility not to introduce a new dependency (not to plug in a new npm package) - don&#39;t do it. It may save you a bit of time, but a third-party library will sooner or later become obsolete, no longer supported, and may have a vulnerability. Besides, it increases the size of your bundle, which directly affects the performance of your application. Tree shaking is good in advertising, but it doesn&#39;t always work in reality.</p><p>If you need, for example, the <code>debounce</code> function, don&#39;t hurry to plug it together with some library. Google its implementation and copy 15 lines of code and make your own function.</p><hr><h6 id="use-wrappers-over-components-of-ui-libraries-and-third-party-utilities" tabindex="-1">Use wrappers over components of UI libraries and third-party utilities <a class="header-anchor" href="#use-wrappers-over-components-of-ui-libraries-and-third-party-utilities" aria-label="Permalink to &quot;Use wrappers over components of UI libraries and third-party utilities&quot;">​</a></h6><p>If you use components of some UI library, don&#39;t use them directly - make wrappers for them. For example, <code>BaseButton</code> or <code>BaseInput</code>. This will make styling the components much easier, and will also make it much easier to switch to another library, or replace them with your own components.</p><p>The same goes for utilities.</p><hr><h6 id="regular-refactoring" tabindex="-1">Regular refactoring <a class="header-anchor" href="#regular-refactoring" aria-label="Permalink to &quot;Regular refactoring&quot;">​</a></h6><p>Do code refactoring from time to time, moving components and modules to where they should logically be, renaming them, and structuring and improving the code itself. This is good for both the code and your professional growth.</p><hr><h6 id="use-css3" tabindex="-1">Use CSS3 <a class="header-anchor" href="#use-css3" aria-label="Permalink to &quot;Use CSS3&quot;">​</a></h6><p>Try to use pure CSS3 for adaptability. Do not be tied to columnar models of CSS and UI libraries, unless it is a &quot;done and forgotten, let the customer continue to suffer with it&quot; project.</p><p>Spend a couple of days to learn Flexbox and you will be able to layout on it faster and better than on any Tailwind.</p><hr><h6 id="use-modern-standards-and-language-features" tabindex="-1">Use modern standards and language features <a class="header-anchor" href="#use-modern-standards-and-language-features" aria-label="Permalink to &quot;Use modern standards and language features&quot;">​</a></h6><p>For example, HTML5 semantic elements - aside, header, section, article, details, etc.</p><p>CSS3 - Flexbox and Grid, Container query</p><hr><h6 id="document-the-project" tabindex="-1">Document the project <a class="header-anchor" href="#document-the-project" aria-label="Permalink to &quot;Document the project&quot;">​</a></h6><p>Draw use-case and other diagrams, describe the main functionality of the project and important details of its implementation - this will at least raise your level as a software developer.</p><p>VitePress is a very handy tool for technical documentation.</p></details>',5),n=[r];function s(d,c,l,u,p,h){return t(),o("div",null,n)}const y=e(i,[["render",s]]);export{f as __pageData,y as default};