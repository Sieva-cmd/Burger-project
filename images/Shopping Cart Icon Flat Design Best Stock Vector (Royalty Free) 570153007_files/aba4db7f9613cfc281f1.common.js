/*!
 * Genesys Predictive Engagement v0.0.0 - 1072
 * Copyright (c) 2014-2021 Genesys. All rights reserved.
 * 
 * https://all.docs.genesys.com/ATC/Current/Developers
 */
(window.altcldjsonp=window.altcldjsonp||[]).push([[5],{216:function(n,l,o){"use strict";o.r(l);var r=o(16),e=new r.UrlTracker;e.start(),l.default=function(n,l,o,i){var t=(null==o?void 0:o.delay)||100,u=(null==o?void 0:o.onUrlChange)||function(){l("pageview")},a=(null==o?void 0:o.isUrlChange)||function(n,l){return n!==l},c=Object(r.debounce)(u,t),d=function(n){var l=n.oldUrl,o=n.newUrl;a(l,o)&&c(o)};d({oldUrl:"",newUrl:window.location.href}),e.subscribe(d),i&&i()}}}]);