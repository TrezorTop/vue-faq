import{_ as s,o as a,c as e,Q as l}from"./chunks/framework.477046d0.js";const u=JSON.parse('{"title":"Полезные советы","description":"","frontmatter":{},"headers":[],"relativePath":"development/misc.md","filePath":"development/misc.md"}'),n={name:"development/misc.md"},p=l(`<h1 id="полезные-советы" tabindex="-1">Полезные советы <a class="header-anchor" href="#полезные-советы" aria-label="Permalink to &quot;Полезные советы&quot;">​</a></h1><details class="details custom-block"><summary>Какие есть хорошие библиотеки для работы с ...?</summary><h3 id="карусель-или-слаидер" tabindex="-1">Карусель или слайдер <a class="header-anchor" href="#карусель-или-слаидер" aria-label="Permalink to &quot;Карусель или слайдер&quot;">​</a></h3><p><a href="https://keen-slider.io/" target="_blank" rel="noreferrer">Keen-Slider</a>, <a href="https://www.embla-carousel.com/" target="_blank" rel="noreferrer">Embla Carousel</a>, <a href="https://splidejs.com/" target="_blank" rel="noreferrer">Splide</a></p><p>Хорошо известный <a href="https://swiperjs.com/" target="_blank" rel="noreferrer">Swiper</a> не очень подходит для Vue.js</p><h3 id="дата-и-время" tabindex="-1">Дата и время <a class="header-anchor" href="#дата-и-время" aria-label="Permalink to &quot;Дата и время&quot;">​</a></h3><p><a href="https://day.js.org/" target="_blank" rel="noreferrer">day.js</a>, <a href="https://date-fns.org/" target="_blank" rel="noreferrer">day-fnc.js</a></p><p>Известный <a href="https://momentjs.com/" target="_blank" rel="noreferrer">moment.js</a> безвозвратно устарел.</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>Современный JavaScript - это гораздо больше, чем было 10 лет назад. В 95% случаев для операций с датой достаточно возможностей стандартного пакета JavaScript <code>Intl</code></p></div></details><details class="details custom-block"><summary>Как поймать момент когда пользователь доскролил до определенного места?</summary><p>Intersection Observer</p></details><details class="details custom-block"><summary>i18n - интернационализация приложения</summary><p>NPM библиотека для интернационализации и локализации i18n очень популярна, однако за последние годы она сильно располнела. В ней много возможностей для локализации дат, чисел, установки нужных склонений, поддержки RTL языков, загрузки локалей с сервера и кучи еще чего. На сайте i18next она называется уже даже &quot;интернационализационным фреймворком&quot;.</p><p>В то же время часто для локализации сайта в большинстве случаев требуются очень простые вещи, занимающие всего пару процентов от всего функционала тяжеловеса i18n.</p><p>По сути обычно нужна реактивная функция, по ключу и текущей локали возвращающая строку.</p><p>Вариант реализации через композабл - в <a href="https://habr.com/ru/articles/736530/" target="_blank" rel="noreferrer">этой статье</a></p><p>Ваш бандл &quot;похудеет&quot; на 50Кб.</p></details><details class="details custom-block"><summary>Options API или Composition API?</summary><p>Советуется Composition API (script setup) как более логичный и удобный, в котором программист контролирует поток выполнения программы средствами JavaScript, а не просто задает какие-то магические опции.</p></details><details class="details custom-block"><summary>Ref или Reactive?</summary><p>Отличие в плане использования - Reactive работает только с объектами и не отслеживает замену объекта. Ref работает со всем и отслеживает замену переменной:</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">a</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Ref</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">b</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Reactive</span><span style="color:#E1E4E8;">({ x: </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;"> });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// is OK</span></span>
<span class="line"><span style="color:#E1E4E8;">a.value </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// is NOT OK</span></span>
<span class="line"><span style="color:#E1E4E8;">b </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> { x: </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;"> };</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">a</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Ref</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">b</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Reactive</span><span style="color:#24292E;">({ x: </span><span style="color:#005CC5;">1</span><span style="color:#24292E;"> });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// is OK</span></span>
<span class="line"><span style="color:#24292E;">a.value </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">2</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// is NOT OK</span></span>
<span class="line"><span style="color:#24292E;">b </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> { x: </span><span style="color:#005CC5;">2</span><span style="color:#24292E;"> };</span></span></code></pre></div><p>Реализации реактивных переменных в Vue 2 и Vue 3 отличаются. Во Vue 2 была своя (фреймворка) реализация отслеживания изменений. Во Vue 3 для этого используется объект Proxy, введенный в ES6. Из-за поддержки данного функционала на уровне языка (JavaScript engine), соответствующий код фреймворка получается эффективней и проще.</p><p>Reactive непосредственно использует Proxy объект.</p><p>Ref на объекте использует напрямую Reactive для отслеживания изменения внутри объекта, и создает и хранит массив зависимостей переменной для примитивов и объектов в случае их замены.</p><p>Если хотите претенциозной эффективности - используйте на объектах Reactive, на примитивах - Ref. В ином случае можно все делать через Ref.</p></details><details class="details custom-block"><summary>ShallowRef</summary><p>Когда у вас массив с большим количеством элементов, но данные внутри элементов массива не меняются, а может меняться только сам массив (добавление элементов, удаление, замена массива) - используйте <code>ShallowRef</code>.</p><p>Он работает как <code>Ref</code>, но не отслеживает изменения внутри элементов массива, что дает значительное улучшение производительности.</p></details><details class="details custom-block"><summary>Миксины</summary><p>Нужно забыть о них как о страшном сне. Миксины как паттерн множественного наследования являются очень плохой архитектурной практикой и должны быть избегаемы. Во Vue 2 в самом фреймворке не было возможности сделать для компонент общей часть стейта и методов, поэтому использовались миксины. Во Vue 3 появилось Composition API и миксины стали не нужны.</p></details>`,8),o=[p];function t(r,c,i,y,d,m){return a(),e("div",null,o)}const h=s(n,[["render",t]]);export{u as __pageData,h as default};