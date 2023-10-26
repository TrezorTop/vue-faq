import{_ as l,o as t,c as e,k as s,a as n,r as p,Q as a}from"./chunks/framework.477046d0.js";const r="/assets/Figure_4.01_B18602.2e9e9570.jpg",c="/assets/Figure_4.02_B18602.61eb815b.jpg",E="/assets/Figure_4.03_B18602.8f2bfd23.jpg",y="/assets/Figure_4.04_B18602.2769c38e.jpg",i="/assets/Figure_4.05_B18602.21f836d6.jpg",u="/assets/Figure_4.06_B18602.bcea7119.jpg",g="/assets/Figure_4.07_B18602.a339b45d.jpg",j=JSON.parse('{"title":"Композиция пользовательского интерфейса с помощью компонентов","description":"","frontmatter":{"head":[["meta",{"name":"og:site_name","content":"Vue.js 3 Design Patterns and Best Practices"}],["meta",{"name":"og:image","content":"/images/book-face.jpg"}],["meta",{"name":"twitter:image","content":"/images/book-face.jpg"}]]},"headers":[],"relativePath":"book/ru/Chapter 4_ User Interface Composition with Components.md","filePath":"book/ru/Chapter 4_ User Interface Composition with Components.md"}'),d={name:"book/ru/Chapter 4_ User Interface Composition with Components.md"},m=a("",141),F=s("strong",null,"W3.css",-1),h=a("",8),v=s("li",null,"Если имя не совпадает ни с одним доступным слотом, содержимое не выводится.",-1),C=s("li",null,[n("Если имя не указано или используется имя "),s("strong",null,"default"),n(", то содержимое отображается в безымянном слоте по умолчанию.")],-1),q=a("",107);function A(o,b,D,B,k,f){return t(),e("div",null,[m,s("p",null,[n("Применяемая логика достаточно проста. Слот "),s("strong",null,[p(o.$slots,"default")]),n(" во время выполнения программы будет заменен на содержимое, предоставленное родительским компонентом внутри дочерних тегов. В предыдущем примере, если проанализировать конечный HTML, можно обнаружить примерно следующее (учитывая, что мы используем классы "),F,n("):")]),h,s("ul",null,[v,C,s("li",null,[n("Если для шаблона не указано содержимое, то будут показаны элементы по умолчанию внутри определения слота. Содержимое по умолчанию помещается между тегами слотов: "),s("strong",null,[p(o.$slots,"default",{},()=>[n("...содержимое по умолчанию здесь...")])]),n(".")])]),q])}const P=l(d,[["render",A]]);export{j as __pageData,P as default};
