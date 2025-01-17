import { defineConfig } from "vitepress";
import nav_en from "./nav.en";
import nav_ru from "./nav.ru";
import sidebar_en from "./sidebar.en";
import sidebar_ru from "./sidebar.ru";
import sidebar_book_ru from "./sidebar.book.ru";
import sidebar_vue_webapp_ru from "./sidebar.vue-webapp.ru";
import sidebar_vue_webapp_en from "./sidebar.vue-webapp.en";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  // base: "/ru/",
  locales: {
    ru: {
      lang: "ru",
      label: "Русский",
      themeConfig: {
        nav: nav_ru,
        sidebar: {
          "/ru/": sidebar_ru,
          "/ru/book/": sidebar_book_ru,
          "/ru/vue-webapp/": sidebar_vue_webapp_ru,
        },
        lastUpdated: {
          text: 'Последнее обновление',
        },
        outline: {
          label: "Содержание"
        },
        returnToTopLabel: "Наверх",
        socialLinks: [      
          { icon: {svg: '<svg id="Livello_1" data-name="Livello 1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 240 240"><defs><linearGradient id="linear-gradient" x1="120" y1="240" x2="120" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#1d93d2"/><stop offset="1" stop-color="#38b0e3"/></linearGradient></defs><title>Telegram_logo</title><circle cx="120" cy="120" r="120" fill="url(#linear-gradient)"/><path d="M81.229,128.772l14.237,39.406s1.78,3.687,3.686,3.687,30.255-29.492,30.255-29.492l31.525-60.89L81.737,118.6Z" fill="#c8daea"/><path d="M100.106,138.878l-2.733,29.046s-1.144,8.9,7.754,0,17.415-15.763,17.415-15.763" fill="#a9c6d8"/><path d="M81.486,130.178,52.2,120.636s-3.5-1.42-2.373-4.64c.232-.664.7-1.229,2.1-2.2,6.489-4.523,120.106-45.36,120.106-45.36s3.208-1.081,5.1-.362a2.766,2.766,0,0,1,1.885,2.055,9.357,9.357,0,0,1,.254,2.585c-.009.752-.1,1.449-.169,2.542-.692,11.165-21.4,94.493-21.4,94.493s-1.239,4.876-5.678,5.043A8.13,8.13,0,0,1,146.1,172.5c-8.711-7.493-38.819-27.727-45.472-32.177a1.27,1.27,0,0,1-.546-.9c-.093-.469.417-1.05.417-1.05s52.426-46.6,53.821-51.492c.108-.379-.3-.566-.848-.4-3.482,1.281-63.844,39.4-70.506,43.607A3.21,3.21,0,0,1,81.486,130.178Z" fill="#fff"/></svg>'}, link: "https://t.me/vuefaq" },
          { icon: "github", link: "https://github.com/vuesence/vue-faq" },
          { icon: {svg: '<svg xmlns="http://www.w3.org/2000/svg"><g><text font-weight="bold" xml:space="preserve" font-size="18" id="svg_1" y="16" x="8" fill="currentColor">Star it!</text></g></svg>'}, link: "https://github.com/vuesence/vue-faq" },
        ],    
      },
      head: [        
        ["script", { async: "", src: "https://www.googletagmanager.com/gtag/js?id=G-JL65GWRNZZ" }],
        [
          "script",
          {},
          `window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-JL65GWRNZZ');`,
        ],
      ],
    },
    en: {
      lang: "en",
      label: "English",
      themeConfig: {
        nav: nav_en,
        sidebar: {
          "/en/": sidebar_en,
          "/en/vue-webapp/": sidebar_vue_webapp_en,
        },
        socialLinks: [      
          { icon: {svg: '<svg id="Livello_1" data-name="Livello 1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 240 240"><defs><linearGradient id="linear-gradient" x1="120" y1="240" x2="120" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#1d93d2"/><stop offset="1" stop-color="#38b0e3"/></linearGradient></defs><title>Telegram_logo</title><circle cx="120" cy="120" r="120" fill="url(#linear-gradient)"/><path d="M81.229,128.772l14.237,39.406s1.78,3.687,3.686,3.687,30.255-29.492,30.255-29.492l31.525-60.89L81.737,118.6Z" fill="#c8daea"/><path d="M100.106,138.878l-2.733,29.046s-1.144,8.9,7.754,0,17.415-15.763,17.415-15.763" fill="#a9c6d8"/><path d="M81.486,130.178,52.2,120.636s-3.5-1.42-2.373-4.64c.232-.664.7-1.229,2.1-2.2,6.489-4.523,120.106-45.36,120.106-45.36s3.208-1.081,5.1-.362a2.766,2.766,0,0,1,1.885,2.055,9.357,9.357,0,0,1,.254,2.585c-.009.752-.1,1.449-.169,2.542-.692,11.165-21.4,94.493-21.4,94.493s-1.239,4.876-5.678,5.043A8.13,8.13,0,0,1,146.1,172.5c-8.711-7.493-38.819-27.727-45.472-32.177a1.27,1.27,0,0,1-.546-.9c-.093-.469.417-1.05.417-1.05s52.426-46.6,53.821-51.492c.108-.379-.3-.566-.848-.4-3.482,1.281-63.844,39.4-70.506,43.607A3.21,3.21,0,0,1,81.486,130.178Z" fill="#fff"/></svg>'}, link: "https://t.me/vuefaq_en" },
          { icon: "github", link: "https://github.com/vuesence/vue-faq" },
          { icon: {svg: '<svg xmlns="http://www.w3.org/2000/svg"><g><text font-weight="bold" xml:space="preserve" font-size="18" id="svg_1" y="16" x="8" fill="currentColor">Star it!</text></g></svg>'}, link: "https://github.com/vuesence/vue-faq" },
        ], 
      },
      head: [
        ["script", { async: "", src: "https://www.googletagmanager.com/gtag/js?id=G-JCCRGKJ88B" }],
        [
          "script",
          {},
          `window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-JCCRGKJ88B');`,
        ],
      ],
    },
  },
  lang: "en",
  title: "Vue FAQ",
  description: "Vue JavaScript framework FAQ",
  head: [
    // ["meta", { name: "og:type", content: "article" }],
    ["meta", { property: "og:type", content: "website" }],
    ["meta", { property: "og:site_name", content: "Vue FAQ" }],
    ["meta", { property: "og:image", content: "/images/vue-faq-logo.webp" }],
    ["meta", { name: "twitter:image", content: "/images/vue-faq-logo.webp" }],
    ["link", { rel: "apple-touch-icon", sizes: "180x180", href: "/images/apple-touch-icon.png" }],
    ["link", { rel: "icon", type: "image/png", sizes: "32x32", href: "/images/favicon-32x32.png" }],
    ["link", { rel: "shortcut icon", href: "/favicon.ico" }],
    ["script", { async: "", src: "https://www.googletagmanager.com/gtag/js?id=G-JL65GWRNZZ" }],
    [
      "script",
      {},
      `window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-JL65GWRNZZ');`,
    ],
  ],
  themeConfig: {    
    logo: "/images/vue-faq-logo.webp",
    search: {
      provider: "local",
    },
    // https://vitepress.dev/reference/default-theme-config            
    socialLinks: [      
      { icon: "github", link: "https://github.com/vuesence/vue-faq" },
      { icon: {svg: '<svg xmlns="http://www.w3.org/2000/svg"><g><text font-weight="bold" xml:space="preserve" font-size="18" id="svg_1" y="16" x="8" fill="currentColor">Star it!</text></g></svg>'}, link: "https://github.com/vuesence/vue-faq" },
    ],
  },
  lastUpdated: true,
  sitemap: {
    hostname: "https://vue-faq.org"
  }
});
