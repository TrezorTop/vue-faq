import{_ as s,o as a,c as n,Q as p}from"./chunks/framework.477046d0.js";const h=JSON.parse('{"title":"Create and build an application","description":"","frontmatter":{},"headers":[],"relativePath":"en/development/building.md","filePath":"en/development/building.md"}'),l={name:"en/development/building.md"},o=p(`<h1 id="create-and-build-an-application" tabindex="-1">Create and build an application <a class="header-anchor" href="#create-and-build-an-application" aria-label="Permalink to &quot;Create and build an application&quot;">​</a></h1><details class="details custom-block"><summary>Building an application</summary><p>To build a Vue project into browser-friendly files, you need a builder. The most popular ones are <code>Vite</code> and <code>Webpack</code>.</p><p>Vite is newer and uses modern technologies including <code>esbuild</code> for <code>dev</code> builds to transpile TypeScript to JavaScript, which is 20~30 times faster than regular tsc, making HMR dozens of times faster than on Webpack. The <code>Rollup</code> builder is used to build JavaScript for <code>production</code>.</p><p>Note that each builder collects application resources (icons, SVGs, etc.) in its own way, using its own plugins, and requires customization.</p><p>Both builders allow you to extend their capabilities with custom plugins.</p></details><details class="details custom-block"><summary>Vite or Webpack?</summary><p>Vite.</p><p>If you need Webpack, you&#39;ll know it yourself.</p></details><details class="details custom-block"><summary>npm, yarn or pnpm?</summary><p>We recommend <code>pnpm</code> as the most up-to-date one</p><p>Also, by using hard links instead of copying files, it saves a lot of disk space on your computer in case of multiple projects with <code>node_modules</code> and the same packages in them.</p></details><details class="details custom-block"><summary>Creating a Vue application</summary><p><code>Vue-cli</code> is an obsolete method</p><p>Create directly through Vite:</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">pnpm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">create</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">vite</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">pnpm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">create</span><span style="color:#24292E;"> </span><span style="color:#032F62;">vite</span></span></code></pre></div><p>Or in an online sandbox.</p><p>See <a href="https://vitejs.dev/guide/" target="_blank" rel="noreferrer">Vite&#39;s website</a> for more information.</p></details><details class="details custom-block"><summary>How to customize the @ alias?</summary><p>Alias is a builder setting, and is set differently for each builder.</p><p>To use the @ alias in paths in a project with Vite</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> BaseIcon </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;@/components/ui/BaseIcon.vue&quot;</span><span style="color:#E1E4E8;">;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> BaseIcon </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;@/components/ui/BaseIcon.vue&quot;</span><span style="color:#24292E;">;</span></span></code></pre></div><p>you need to configure it in <code>vite.config.j(t)s</code>:</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// vite.config.js</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> path </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;node:path&quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">defineConfig</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">  build: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    target: </span><span style="color:#9ECBFF;">&quot;esnext&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  plugins: [</span><span style="color:#F97583;">...</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">  resolve: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    alias: {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#9ECBFF;">&quot;@&quot;</span><span style="color:#E1E4E8;">: path.</span><span style="color:#B392F0;">resolve</span><span style="color:#E1E4E8;">(__dirname, </span><span style="color:#9ECBFF;">&quot;./src&quot;</span><span style="color:#E1E4E8;">),</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// package.json</span></span>
<span class="line"><span style="color:#9ECBFF;">&quot;devDependencies&quot;</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&quot;@types/node&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;^20.3.1&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">...</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// vite.config.js</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> path </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;node:path&quot;</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">default</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">defineConfig</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">  build: {</span></span>
<span class="line"><span style="color:#24292E;">    target: </span><span style="color:#032F62;">&quot;esnext&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  plugins: [</span><span style="color:#D73A49;">...</span><span style="color:#24292E;">],</span></span>
<span class="line"><span style="color:#24292E;">  resolve: {</span></span>
<span class="line"><span style="color:#24292E;">    alias: {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#032F62;">&quot;@&quot;</span><span style="color:#24292E;">: path.</span><span style="color:#6F42C1;">resolve</span><span style="color:#24292E;">(__dirname, </span><span style="color:#032F62;">&quot;./src&quot;</span><span style="color:#24292E;">),</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// package.json</span></span>
<span class="line"><span style="color:#032F62;">&quot;devDependencies&quot;</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&quot;@types/node&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;^20.3.1&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">...</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><p>If the project supports TypeScript, then also in <code>tsconfig.json</code>:</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// tsconfig.json</span></span>
<span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#9ECBFF;">&quot;compilerOptions&quot;</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&quot;paths&quot;</span><span style="color:#E1E4E8;">: { </span><span style="color:#9ECBFF;">&quot;@/*&quot;</span><span style="color:#E1E4E8;">: [</span><span style="color:#9ECBFF;">&quot;./src/*&quot;</span><span style="color:#E1E4E8;">] },</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">...</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// tsconfig.json</span></span>
<span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#032F62;">&quot;compilerOptions&quot;</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&quot;paths&quot;</span><span style="color:#24292E;">: { </span><span style="color:#032F62;">&quot;@/*&quot;</span><span style="color:#24292E;">: [</span><span style="color:#032F62;">&quot;./src/*&quot;</span><span style="color:#24292E;">] },</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">...</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><p>You may also need to set alias in ESLint config for plugins like <code>eslint-plugin-import</code> and <code>eslint-import-resolver-typescript</code> if they are used.</p></details><details class="details custom-block"><summary>How can I see how much my js bundle has different libraries?</summary><p><a href="https://github.com/btd/rollup-plugin-visualizer" target="_blank" rel="noreferrer">rollup-plugin-visualizer</a> is a great tool to do this</p><p>Generating statistics from the command line works like this (one of the options):</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">npx</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">vite-bundle-visualizer</span></span>
<span class="line"><span style="color:#B392F0;">npx</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">vite-bundle-visualizer</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-t</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">list</span></span>
<span class="line"><span style="color:#B392F0;">npx</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">vite-bundle-visualizer</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-t</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">raw-data</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">npx</span><span style="color:#24292E;"> </span><span style="color:#032F62;">vite-bundle-visualizer</span></span>
<span class="line"><span style="color:#6F42C1;">npx</span><span style="color:#24292E;"> </span><span style="color:#032F62;">vite-bundle-visualizer</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-t</span><span style="color:#24292E;"> </span><span style="color:#032F62;">list</span></span>
<span class="line"><span style="color:#6F42C1;">npx</span><span style="color:#24292E;"> </span><span style="color:#032F62;">vite-bundle-visualizer</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-t</span><span style="color:#24292E;"> </span><span style="color:#032F62;">raw-data</span></span></code></pre></div></details><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;"></span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;"></span></span></code></pre></div>`,8),e=[o];function t(c,i,r,y,d,E){return a(),n("div",null,e)}const m=s(l,[["render",t]]);export{h as __pageData,m as default};