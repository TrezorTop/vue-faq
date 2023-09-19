import{_ as e,o as t,c as o,Q as s}from"./chunks/framework.477046d0.js";const f=JSON.parse('{"title":"Protocols. To REST or not to REST?","description":"","frontmatter":{},"headers":[],"relativePath":"en/backend/protocols.md","filePath":"en/backend/protocols.md"}'),a={name:"en/backend/protocols.md"},r=s('<h1 id="protocols-to-rest-or-not-to-rest" tabindex="-1">Protocols. To REST or not to REST? <a class="header-anchor" href="#protocols-to-rest-or-not-to-rest" aria-label="Permalink to &quot;Protocols. To REST or not to REST?&quot;">​</a></h1><details class="details custom-block"><summary>REST, WebSockets, JSON-RPC</summary><p>For a beginner, of course, it&#39;s more convenient to start with <code>REST</code> - requests to the server in any way.</p><p>For the more experienced, especially fullstackers, I suggest to take a look at <code>JSON-RPC</code>.</p><p><code>WebSockets</code> is convenient because it gives bidirectional communication (the server can send messages to the client), but requires special software on the backend.</p></details><details class="details custom-block"><summary>Why JSON-RPC?</summary><p>After an experience with JSON-RPC, communication with back end is usually never the same again.</p><p>It gives order, clarity, rigor and at the same time flexibility. It greatly simplifies and makes code understandable both on the frontend and backend.</p><p>A variant of TypeScript implementation of frontend api service on JSON-RPC - <a href="https://github.com/vuesence/utilities/blob/main/src/services/json-rpc/jsonrpc.ts" target="_blank" rel="noreferrer">here</a>.</p><p>When using <code>JSON-RPC</code>, switching to <code>WebSockets</code> or other transport protocols will not cause any difficulties due to the unification of the message format.</p></details><details class="details custom-block"><summary>How to organize reconnection of WebSocket connection on the front?</summary><p>You need an <code>Event bus</code>, which will work as a proxy for incoming messages.</p><p>You can use <a href="https://github.com/developit/mitt" target="_blank" rel="noreferrer">mitt</a>.</p></details><details class="details custom-block"><summary>What is GraphGL?</summary><p>A complex thing, an attempt to translate SQL query language for client-server queries on the web.</p><p>It has a rather specific use, mostly with third-party data providers via APIs.</p><p>For your own fullstack application - 99% unnecessary solution.</p></details>',5),n=[r];function i(c,l,p,d,m,u){return t(),o("div",null,n)}const b=e(a,[["render",i]]);export{f as __pageData,b as default};