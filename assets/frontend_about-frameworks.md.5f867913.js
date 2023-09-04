import{_ as e,o,c as a,X as t}from"./chunks/framework.049a4bb5.js";const f=JSON.parse('{"title":"О фронтенд фреймворках","description":"","frontmatter":{},"headers":[],"relativePath":"frontend/about-frameworks.md","filePath":"frontend/about-frameworks.md"}'),s={name:"frontend/about-frameworks.md"},c=t('<h1 id="о-фронтенд-фреимворках" tabindex="-1">О фронтенд фреймворках <a class="header-anchor" href="#о-фронтенд-фреимворках" aria-label="Permalink to &quot;О фронтенд фреймворках&quot;">​</a></h1><details class="details custom-block"><summary>Что такое &quot;реактивность&quot;</summary><p>Наверное, самое фундаментальное отличие программы для фронта от программы для бэка, микросервиса и даже отдельного приложения с GUI, это понятие &quot;<strong>реактивности</strong>&quot;.</p><p>При работе на бэке программист имеет хорошие возможности управлять потоком данных. Он контролирует откуда их брать, куда передавать, кто их может изменить, всё это хоть в одном потоке, хоть в многопоточной системе.</p><p>На фронте большую роль играет фактор интерактивности UI - данные надо динамично показывать пользователю, пользователь может изменять данные, данные могут изменяться различными контрагентами (пользователь, бэкенд, внутренние вычисления). В принципе, возможно использовать обычные программистские подходы как и на бэке, - то есть, самому следить за изменениями данных в каждом месте, и проводить обновление все зависимостей. Это даст очень много бойлерплейта - рутинного повторяющегося кода. Реактивные фреймворки сильно облегчили жизнь программистам, взяв на себя заботу об этом обновлении зависимостей переменной при её изменении.</p><p>В реактивном фреймворке достаточно задать реактивную переменную и указать, что она является, например, значением input поля. При вводе пользователем в это поле значения переменная автоматически обновится, и все другие переменные, зависящие от нее, тоже. Кода писать для этого не надо.</p><p>Упрощенно, под капотом реактивная переменная это прокси-обертка над обычной, которая следит за её изменениями и регистрирует всех слушателей, которых надо оповестить об изменении переменной, чтобы они себя пересчитали.</p></details><details class="details custom-block"><summary>Какие реактивные фронтенд фреймворки существуют</summary><p>React, Vue, Angular - самые распространенные. Есть множество других, не взлетевших.</p><p>Angular используется обычно для больших проектов (больших команд разного уровня разработчиков)</p><p>React и Vue схожи, но есть существенные отличия.</p><p>Vue быстрей, меньше, эффективней, не смешивает HTML и JS, меньший порог входа. Активно развивается.</p><p>За React-ом Цукерберг и бОльшая распространенность. Больше предложений о работе, но и больше кандидатов на одно место.</p></details><details class="details custom-block"><summary>Почему Vue?</summary><p>Чтобы можно было разрабатывать и управлять большими сложными программными системами, было изобретено ООП - объектно-ориентированное программирование, где для иерархичного разбиения сложности вводились новые сущности - объекты. Они инкапсулировали в себе данные и поведение (логику).</p><p>На фронтенде немного иная ситуация из-за наличия кода на нескольких языках программирования - HTML, CSS, JavaScript. Однако SFC компоненты во Vue так же служат для разбиения сложности системы. Каждый компонент инкапсулирует шаблон, его стилизацию и логику.</p><p>И Vue делает это намного лучше, чем тот же React, который сваливает всё в одну кучу. В этом аспекте Vue однозначно является флагманом компонентно-ориентированного программирования (КОП) на фронтэнде.</p><p>Кроме того, во Vue 3 появилась реактивность за пределами компонент - <code>ref</code> и <code>reactive</code> переменные можно задать в простом <code>js</code> модуле. Это используется в composable функциях. Стало возможно отделить от представления не только реактивный сервис (<code>useI18n</code>, <code>useScreenSize</code> например), но и бизнес-логику (<code>useShoppingCart</code>, <code>useNewsWidget</code>). Это позволяет использовать на фронтенде MVC шаблон, где роль <code>View</code> выполняют компоненты, отвечающие преимущественно за визуализацию, а логика и модель (<code>Controller</code> &amp; <code>Model</code>) приходятся на композабл функции и их реактивный стейт.</p><p>Это даёт возможность сделать, например, смену дизайна сайта или UI библиотеки намного более легкой задачей.</p><p>Данный функционал также сильно выделяет Vue на фоне других реактивных фреймворков.</p></details>',4),r=[c];function d(p,u,n,l,i,m){return o(),a("div",null,r)}const V=e(s,[["render",d]]);export{f as __pageData,V as default};
