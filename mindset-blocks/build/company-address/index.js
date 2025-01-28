(()=>{"use strict";var e,o={145:()=>{const e=window.wp.blocks,o=window.wp.i18n,s=window.wp.blockEditor,n=window.wp.coreData,r=window.wp.components,t=window.ReactJSXRuntime,i=JSON.parse('{"UU":"mindset-blocks/company-address"}');(0,e.registerBlockType)(i.UU,{edit:function({attributes:e,setAttributes:i}){const[a,c]=(0,n.useEntityProp)("postType","page","meta",10),{company_address:l}=a,{svgIcon:d}=e;return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)("address",{...(0,s.useBlockProps)(),children:[d&&(0,t.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",role:"img","aria-label":"Location Icon",children:(0,t.jsx)("path",{d:"M12 0c-3.148 0-6 2.553-6 5.702 0 3.148 2.602 6.907 6 12.298 3.398-5.391 6-9.15 6-12.298 0-3.149-2.851-5.702-6-5.702zm0 8c-1.105 0-2-.895-2-2s.895-2 2-2 2 .895 2 2-.895 2-2 2zm4 14.5c0 .828-1.79 1.5-4 1.5s-4-.672-4-1.5 1.79-1.5 4-1.5 4 .672 4 1.5z"})}),(0,t.jsx)(s.RichText,{placeholder:(0,o.__)("Enter address here...","mindset-blocks"),tagName:"p",value:l,onChange:e=>{return o="company_address",s=e,void c({...a,[o]:s});var o,s}})]}),(0,t.jsx)(s.InspectorControls,{children:(0,t.jsx)(r.PanelBody,{title:(0,o.__)("Settings","mindset-blocks"),children:(0,t.jsx)(r.PanelRow,{children:(0,t.jsx)(r.ToggleControl,{label:(0,o.__)("Show SVG Icon","mindset-blocks"),checked:d,onChange:e=>i({svgIcon:e}),help:(0,o.__)("Display an SVG icon next to the address.","mindset-blocks")})})})})]})}})}},s={};function n(e){var r=s[e];if(void 0!==r)return r.exports;var t=s[e]={exports:{}};return o[e](t,t.exports,n),t.exports}n.m=o,e=[],n.O=(o,s,r,t)=>{if(!s){var i=1/0;for(d=0;d<e.length;d++){for(var[s,r,t]=e[d],a=!0,c=0;c<s.length;c++)(!1&t||i>=t)&&Object.keys(n.O).every((e=>n.O[e](s[c])))?s.splice(c--,1):(a=!1,t<i&&(i=t));if(a){e.splice(d--,1);var l=r();void 0!==l&&(o=l)}}return o}t=t||0;for(var d=e.length;d>0&&e[d-1][2]>t;d--)e[d]=e[d-1];e[d]=[s,r,t]},n.o=(e,o)=>Object.prototype.hasOwnProperty.call(e,o),(()=>{var e={762:0,190:0};n.O.j=o=>0===e[o];var o=(o,s)=>{var r,t,[i,a,c]=s,l=0;if(i.some((o=>0!==e[o]))){for(r in a)n.o(a,r)&&(n.m[r]=a[r]);if(c)var d=c(n)}for(o&&o(s);l<i.length;l++)t=i[l],n.o(e,t)&&e[t]&&e[t][0](),e[t]=0;return n.O(d)},s=globalThis.webpackChunkmindset_blocks=globalThis.webpackChunkmindset_blocks||[];s.forEach(o.bind(null,0)),s.push=o.bind(null,s.push.bind(s))})();var r=n.O(void 0,[190],(()=>n(145)));r=n.O(r)})();