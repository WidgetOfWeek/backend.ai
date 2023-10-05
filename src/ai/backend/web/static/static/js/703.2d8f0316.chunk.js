"use strict";(self.webpackChunkbackend_ai_webui_react=self.webpackChunkbackend_ai_webui_react||[]).push([[703],{37007:function(n,e,t){var o=t(99277),r=t(82548),i=t(32048),c=t.n(i),a=t(4519),l=t(2556);e.Z=function(n){var e,t=n.values,i=void 0===t?[]:t;return 0===i.length?null:(e=i[0]&&("string"===typeof i[0]||a.isValidElement(i[0]))?i.map((function(n){return{label:n,color:"blue"}})):i,(0,l.jsx)(o.Z,{direction:"row",children:c().map(e,(function(n,t){return(0,l.jsx)(r.Z,{style:c().last(e)===n?void 0:{margin:0,marginRight:-1,zIndex:1},children:n.label},t)}))}))}},41703:function(n,e,t){t.r(e),t.d(e,{default:function(){return Z}});var o=t(43255),r=t(87760),i=t(37007),c=t(99277),a=t(83861),l=t(43971),s=t(28499),u=t(44036),d=t(11718).Z,f=t(36038).Z,g=t(53066),p=t(93448),m=t(82548),v=t(39883),b=t(81748),h=t(87112),x=t(2556),y=function(n){var e=n.title,t=n.subtitle;return(0,x.jsxs)(c.Z,{direction:"column",align:"start",children:[(0,x.jsx)(s.Z.Text,{strong:!0,children:e}),t&&(0,x.jsx)(s.Z.Text,{type:"secondary",children:t})]})},Z=function(){var n=(0,b.$G)().t,e=u.Z.useToken().token,t=(0,r.Dj)(),s=(0,h.useQuery)("licenseInfo",(function(){return t.enterprise.getLicense()}),{suspense:!1}),Z=s.data,j=s.isLoading;Z||(Z={valid:!1,type:n("information.CannotRead"),licensee:n("information.CannotRead"),key:n("information.CannotRead"),expiration:n("information.CannotRead")});var C={xxl:4,xl:4,lg:2,md:1,sm:1,xs:1};return(0,x.jsxs)(c.Z,{direction:"column",align:"stretch",style:{margin:e.marginSM,gap:e.margin},children:[(0,x.jsxs)(d,{gutter:[e.margin,e.margin],children:[(0,x.jsx)(f,{xs:24,xxl:12,children:(0,x.jsx)(g.Z,{style:{height:"100%"},children:(0,x.jsxs)(p.Z,{title:n("information.Core"),bordered:!0,column:C,children:[(0,x.jsx)(p.Z.Item,{label:(0,x.jsx)(y,{title:n("information.ManagerVersion")}),children:(0,x.jsxs)(c.Z,{direction:"column",style:{gap:e.marginXXS},align:"start",children:["Backend.AI ",t.managerVersion,(0,x.jsx)(i.Z,{values:[n("information.Installation"),t.managerVersion]})]})}),(0,x.jsx)(p.Z.Item,{label:(0,x.jsx)(y,{title:n("information.APIVersion")}),children:t.apiVersion})]})})}),(0,x.jsx)(f,{xs:24,xxl:12,children:(0,x.jsx)(g.Z,{children:(0,x.jsxs)(p.Z,{title:n("information.Security"),bordered:!0,column:C,children:[(0,x.jsx)(p.Z.Item,{label:(0,x.jsx)(y,{title:n("information.DefaultAdministratorAccountChanged"),subtitle:n("information.DescDefaultAdministratorAccountChanged")}),children:(0,x.jsx)(a.Z,{title:"Yes"})}),(0,x.jsx)(p.Z.Item,{label:(0,x.jsx)(y,{title:n("information.UsesSSL"),subtitle:n("information.DescUsesSSL")}),children:null!==t&&void 0!==t&&t._config.endpoint.startsWith("https:")?(0,x.jsx)(a.Z,{title:"Yes"}):(0,x.jsx)(l.Z,{style:{color:"red"},title:"No"})})]})})})]}),(0,x.jsx)(g.Z,{children:(0,x.jsxs)(p.Z,{title:n("information.Component"),bordered:!0,column:{xxl:4,xl:2,lg:2,md:1,sm:1,xs:1},children:[(0,x.jsx)(p.Z.Item,{label:(0,x.jsx)(y,{title:n("information.DockerVersion"),subtitle:n("information.DescDockerVersion")}),children:(0,x.jsx)(m.Z,{children:n("information.Compatible")})}),(0,x.jsx)(p.Z.Item,{label:(0,x.jsx)(y,{title:n("information.PostgreSQLVersion"),subtitle:n("information.DescPostgreSQLVersion")}),children:(0,x.jsx)(m.Z,{children:n("information.Compatible")})}),(0,x.jsx)(p.Z.Item,{label:(0,x.jsx)(y,{title:n("information.ETCDVersion"),subtitle:n("information.DescETCDVersion")}),children:(0,x.jsx)(m.Z,{children:n("information.Compatible")})}),(0,x.jsx)(p.Z.Item,{label:(0,x.jsx)(y,{title:n("information.RedisVersion"),subtitle:(0,o.We)(n("information.DescRedisVersion"))}),children:(0,x.jsx)(m.Z,{children:n("information.Compatible")})})]})}),(0,x.jsx)(g.Z,{children:(0,x.jsx)(v.Z,{spinning:j,children:(0,x.jsxs)(p.Z,{title:n("information.License"),bordered:!0,column:{xxl:2,xl:2,lg:2,md:1,sm:1,xs:1},children:[(0,x.jsx)(p.Z.Item,{label:(0,x.jsx)(y,{title:n("information.IsLicenseValid"),subtitle:n("information.DescIsLicenseValid")}),children:Z.valid?(0,x.jsx)(a.Z,{}):(0,x.jsx)(l.Z,{style:{color:"red"}})}),(0,x.jsx)(p.Z.Item,{label:(0,x.jsx)(y,{title:n("information.LicenseType"),subtitle:(0,o.We)(n("information.DescLicenseType"))}),children:(0,x.jsx)(m.Z,{children:"fixed"===Z.type?n("information.FixedLicense"):n("information.DynamicLicense")})}),(0,x.jsx)(p.Z.Item,{label:(0,x.jsx)(y,{title:n("information.Licensee"),subtitle:n("information.DescLicensee")}),children:(0,x.jsx)(m.Z,{children:Z.licensee})}),(0,x.jsx)(p.Z.Item,{label:(0,x.jsx)(y,{title:n("information.LicenseKey"),subtitle:n("information.DescLicenseKey")}),children:(0,x.jsx)(m.Z,{children:Z.key})}),(0,x.jsx)(p.Z.Item,{label:(0,x.jsx)(y,{title:n("information.Expiration"),subtitle:n("information.DescExpiration")}),children:(0,x.jsx)(m.Z,{children:Z.expiration})})]})})})]})}},43255:function(n,e,t){t.d(e,{Cd:function(){return p},Hz:function(){return s},Lc:function(){return c},PZ:function(){return d},Uz:function(){return u},VQ:function(){return f},We:function(){return i},XG:function(){return l},lA:function(){return g},uU:function(){return m},y3:function(){return a}});var o=t(87760),r=t(2556),i=function(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:/(<br\s*\/?>|\n)/;return n.split(e).map((function(n,t){return n.match(e)?(0,r.jsx)("br",{},t):n}))},c=function(n){var e=n.method,t=n.url,o=n.body,r=void 0===o?null:o,i=n.client,c=null===i||void 0===i?void 0:i.newSignedRequest(e,t,r,null);return null===i||void 0===i?void 0:i._wrapWithPromise(c)},a=function(){var n=(0,o.Dj)();return function(e){var t=e.method,o=e.url,r=e.body;return c({method:t,url:o,body:void 0===r?null:r,client:n})}},l=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2;if(0===n)return"0 Bytes";var t=Math.pow(10,3);e=e<0?0:e;var o=Math.floor(Math.log(Math.round(n))/Math.log(t));return o=o<0?0:o,parseFloat((n/Math.pow(t,o)).toFixed(e))+" "+["Bytes","KB","MB","GB","TB","PB"][o]};var s=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=Math.pow(10,9);return Math.round(e*n)},u=function(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2;return null===n||void 0===n?arguments.length>2&&void 0!==arguments[2]?arguments[2]:"-":n?(n/Math.pow(10,9)).toFixed(e):n};function d(n,e){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:2,o=["B","K","M","G","T","P","E"],r=n.slice(-1).toUpperCase(),i=parseFloat(n.slice(0,-1)),c=o.indexOf(r);if(-1===c||isNaN(i))throw new Error("Invalid size format");var a=i*Math.pow(1024,c),l=e?o.indexOf(e.toUpperCase()):c,s=a/Math.pow(1024,l),u=s.toFixed(t);return{number:s,numberFixed:u,unit:o[l],numberUnit:"".concat(u).concat(o[l])}}var f=function(n,e){return""===e||void 0===e?"":e.startsWith("".concat(n,":"))?e:"".concat(n,":").concat(e)},g=function(n){return n<70?"rgba(58, 178, 97, 1)":n<90?"rgb(223, 179, 23)":"#ef5350"},p=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"*",t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0;return o=t+o>n.length?n.length:o,n.substring(0,t)+e.repeat(o)+n.substring(t+o,n.length)};function m(n){return null===n||void 0===n?[]:n.filter((function(n){return null!==n}))}},87760:function(n,e,t){t.d(e,{Dj:function(){return u},Kr:function(){return c},M:function(){return s},dS:function(){return d},qh:function(){return l},tQ:function(){return a}});var o=t(29439),r=t(4519),i=t(87112),c=function(n){return function(n){var e=(0,r.useState)(n||(new Date).toISOString()),t=(0,o.Z)(e,2),i=t[0],c=t[1];return[i,function(n){c(n||(new Date).toISOString())}]}(n)},a=function(){return u()._config.domainName},l=function(){var n=u(),e=(0,r.useState)({name:n.current_group,id:n.groupIds[n.current_group]}),t=(0,o.Z)(e,2),i=t[0],c=t[1];return(0,r.useEffect)((function(){var e=function(e){var t=e.detail;c({name:t,id:n.groupIds[t]})};return document.addEventListener("backend-ai-group-changed",e),function(){document.removeEventListener("backend-ai-group-changed",e)}})),i},s=function(n){var e=n.api_endpoint;return(0,r.useMemo)((function(){var n=new globalThis.BackendAIClientConfig("","",e,"SESSION");return new globalThis.BackendAIClient(n,"Backend.AI Console.")}),[e])},u=function(){return(0,i.useQuery)({queryKey:"backendai-client-for-suspense",queryFn:function(){return new Promise((function(n){if("undefined"!==typeof globalThis.backendaiclient&&null!==globalThis.backendaiclient&&!1!==globalThis.backendaiclient.ready)return n(globalThis.backendaiclient);document.addEventListener("backend-ai-connected",(function e(){n(globalThis.backendaiclient),document.removeEventListener("backend-ai-connected",e)}))}))},retry:!1,suspense:!0}).data},d=function(){var n=(0,i.useQuery)({queryKey:"backendai-metadata-for-suspense",queryFn:function(){return fetch("resources/image_metadata.json").then((function(n){return n.json()})).then((function(n){return n}))},suspense:!0,retry:!1}).data,e=function(n){if(!n)return{key:"",tags:[]};var e=n.split("/"),t=(e[2]||e[1]).split(":"),r=(0,o.Z)(t,2);return{key:r[0],tags:r[1].split("-")}};return[n,{getImageAliasName:function(t){var o=e(t).key;return(null===n||void 0===n?void 0:n.imageInfo[o].name)||o},getImageIcon:function(t){var o,r,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"resources/icons/";if(!t)return"default.png";var c=e(t).key;return i+(void 0!==(null===n||void 0===n||null===(o=n.imageInfo[c])||void 0===o?void 0:o.icon)?null===n||void 0===n||null===(r=n.imageInfo[c])||void 0===r?void 0:r.icon:"default.png")},getImageTags:function(n){},getBaseVersion:function(n){return e(n).tags[0]},getBaseImage:function(n){return e(n).tags[1]},getImageMeta:e}]}},43971:function(n,e,t){t.d(e,{Z:function(){return l}});var o=t(87462),r=t(4519),i={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M464 720a48 48 0 1096 0 48 48 0 10-96 0zm16-304v184c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V416c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8zm475.7 440l-416-720c-6.2-10.7-16.9-16-27.7-16s-21.6 5.3-27.7 16l-416 720C56 877.4 71.4 904 96 904h832c24.6 0 40-26.6 27.7-48zm-783.5-27.9L512 239.9l339.8 588.2H172.2z"}}]},name:"warning",theme:"outlined"},c=t(9491),a=function(n,e){return r.createElement(c.Z,(0,o.Z)({},n,{ref:e,icon:i}))};var l=r.forwardRef(a)},49869:function(n,e,t){t.d(e,{Z:function(){return i}});var o=t(31662),r=t(4519);function i(n,e,t){var i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:r.createElement(o.Z,null),c=function(n,e,t){return"boolean"===typeof n?n:void 0===e?!!t:!1!==e&&null!==e}(n,e,arguments.length>4&&void 0!==arguments[4]&&arguments[4]);if(!c)return[!1,null];var a="boolean"===typeof e||void 0===e||null===e?i:e;return[!0,t?t(a):a]}},98945:function(n,e,t){var o=(0,t(4519).createContext)({});e.Z=o},36038:function(n,e,t){var o=t(4942),r=t(29439),i=t(4519),c=t(43270),a=t.n(c),l=t(48698),s=t(98945),u=t(12861),d=function(n,e){var t={};for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&e.indexOf(o)<0&&(t[o]=n[o]);if(null!=n&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(o=Object.getOwnPropertySymbols(n);r<o.length;r++)e.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(n,o[r])&&(t[o[r]]=n[o[r]])}return t};var f=["xs","sm","md","lg","xl","xxl"],g=i.forwardRef((function(n,e){var t,c=i.useContext(l.E_),g=c.getPrefixCls,p=c.direction,m=i.useContext(s.Z),v=m.gutter,b=m.wrap,h=n.prefixCls,x=n.span,y=n.order,Z=n.offset,j=n.push,C=n.pull,k=n.className,I=n.children,O=n.flex,S=n.style,w=d(n,["prefixCls","span","order","offset","push","pull","className","children","flex","style"]),E=g("col",h),P=(0,u.c)(E),L=(0,r.Z)(P,2),T=L[0],M=L[1],D={};f.forEach((function(e){var t,r={},i=n[e];"number"===typeof i?r.span=i:"object"===typeof i&&(r=i||{}),delete w[e],D=Object.assign(Object.assign({},D),(t={},(0,o.Z)(t,"".concat(E,"-").concat(e,"-").concat(r.span),void 0!==r.span),(0,o.Z)(t,"".concat(E,"-").concat(e,"-order-").concat(r.order),r.order||0===r.order),(0,o.Z)(t,"".concat(E,"-").concat(e,"-offset-").concat(r.offset),r.offset||0===r.offset),(0,o.Z)(t,"".concat(E,"-").concat(e,"-push-").concat(r.push),r.push||0===r.push),(0,o.Z)(t,"".concat(E,"-").concat(e,"-pull-").concat(r.pull),r.pull||0===r.pull),(0,o.Z)(t,"".concat(E,"-").concat(e,"-flex-").concat(r.flex),r.flex||"auto"===r.flex),(0,o.Z)(t,"".concat(E,"-rtl"),"rtl"===p),t))}));var B=a()(E,(t={},(0,o.Z)(t,"".concat(E,"-").concat(x),void 0!==x),(0,o.Z)(t,"".concat(E,"-order-").concat(y),y),(0,o.Z)(t,"".concat(E,"-offset-").concat(Z),Z),(0,o.Z)(t,"".concat(E,"-push-").concat(j),j),(0,o.Z)(t,"".concat(E,"-pull-").concat(C),C),t),k,D,M),N={};if(v&&v[0]>0){var V=v[0]/2;N.paddingLeft=V,N.paddingRight=V}return O&&(N.flex=function(n){return"number"===typeof n?"".concat(n," ").concat(n," auto"):/^\d+(\.\d+)?(px|em|rem|%)$/.test(n)?"0 0 ".concat(n):n}(O),!1!==b||N.minWidth||(N.minWidth=0)),T(i.createElement("div",Object.assign({},w,{style:Object.assign(Object.assign({},N),S),className:B,ref:e}),I))}));e.Z=g},11718:function(n,e,t){var o=t(4942),r=t(29439),i=t(4519),c=t(43270),a=t.n(c),l=t(21971),s=t(48698),u=t(98945),d=t(12861),f=function(n,e){var t={};for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&e.indexOf(o)<0&&(t[o]=n[o]);if(null!=n&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(o=Object.getOwnPropertySymbols(n);r<o.length;r++)e.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(n,o[r])&&(t[o[r]]=n[o[r]])}return t};function g(n,e){var t=i.useState("string"===typeof n?n:""),o=(0,r.Z)(t,2),c=o[0],a=o[1];return i.useEffect((function(){!function(){if("string"===typeof n&&a(n),"object"===typeof n)for(var t=0;t<l.c4.length;t++){var o=l.c4[t];if(e[o]){var r=n[o];if(void 0!==r)return void a(r)}}}()}),[JSON.stringify(n),e]),c}var p=i.forwardRef((function(n,e){var t,c=n.prefixCls,p=n.justify,m=n.align,v=n.className,b=n.style,h=n.children,x=n.gutter,y=void 0===x?0:x,Z=n.wrap,j=f(n,["prefixCls","justify","align","className","style","children","gutter","wrap"]),C=i.useContext(s.E_),k=C.getPrefixCls,I=C.direction,O=i.useState({xs:!0,sm:!0,md:!0,lg:!0,xl:!0,xxl:!0}),S=(0,r.Z)(O,2),w=S[0],E=S[1],P=i.useState({xs:!1,sm:!1,md:!1,lg:!1,xl:!1,xxl:!1}),L=(0,r.Z)(P,2),T=L[0],M=L[1],D=g(m,T),B=g(p,T),N=i.useRef(y),V=(0,l.ZP)();i.useEffect((function(){var n=V.subscribe((function(n){M(n);var e=N.current||0;(!Array.isArray(e)&&"object"===typeof e||Array.isArray(e)&&("object"===typeof e[0]||"object"===typeof e[1]))&&E(n)}));return function(){return V.unsubscribe(n)}}),[]);var A=k("row",c),z=(0,d.V)(A),R=(0,r.Z)(z,2),W=R[0],_=R[1],F=function(){var n=[void 0,void 0];return(Array.isArray(y)?y:[y,void 0]).forEach((function(e,t){if("object"===typeof e)for(var o=0;o<l.c4.length;o++){var r=l.c4[o];if(w[r]&&void 0!==e[r]){n[t]=e[r];break}}else n[t]=e})),n}(),H=a()(A,(t={},(0,o.Z)(t,"".concat(A,"-no-wrap"),!1===Z),(0,o.Z)(t,"".concat(A,"-").concat(B),B),(0,o.Z)(t,"".concat(A,"-").concat(D),D),(0,o.Z)(t,"".concat(A,"-rtl"),"rtl"===I),t),v,_),X={},G=null!=F[0]&&F[0]>0?F[0]/-2:void 0;G&&(X.marginLeft=G,X.marginRight=G);var Q=(0,r.Z)(F,2);X.rowGap=Q[1];var U=(0,r.Z)(F,2),K=U[0],q=U[1],Y=i.useMemo((function(){return{gutter:[K,q],wrap:Z}}),[K,q,Z]);return W(i.createElement(u.Z.Provider,{value:Y},i.createElement("div",Object.assign({},j,{className:H,style:Object.assign(Object.assign({},X),b),ref:e}),h)))}));e.Z=p},12861:function(n,e,t){t.d(e,{V:function(){return s},c:function(){return u}});var o=t(4942),r=t(70111),i=t(41157),c=function(n){var e=n.componentCls;return(0,o.Z)({},e,{display:"flex",flexFlow:"row wrap",minWidth:0,"&::before, &::after":{display:"flex"},"&-no-wrap":{flexWrap:"nowrap"},"&-start":{justifyContent:"flex-start"},"&-center":{justifyContent:"center"},"&-end":{justifyContent:"flex-end"},"&-space-between":{justifyContent:"space-between"},"&-space-around":{justifyContent:"space-around"},"&-space-evenly":{justifyContent:"space-evenly"},"&-top":{alignItems:"flex-start"},"&-middle":{alignItems:"center"},"&-bottom":{alignItems:"flex-end"}})},a=function(n){var e=n.componentCls;return(0,o.Z)({},e,{position:"relative",maxWidth:"100%",minHeight:1})},l=function(n,e){return function(n,e){for(var t=n.componentCls,r=n.gridColumns,i={},c=r;c>=0;c--){var a;0===c?(i["".concat(t).concat(e,"-").concat(c)]={display:"none"},i["".concat(t,"-push-").concat(c)]={insetInlineStart:"auto"},i["".concat(t,"-pull-").concat(c)]={insetInlineEnd:"auto"},i["".concat(t).concat(e,"-push-").concat(c)]={insetInlineStart:"auto"},i["".concat(t).concat(e,"-pull-").concat(c)]={insetInlineEnd:"auto"},i["".concat(t).concat(e,"-offset-").concat(c)]={marginInlineStart:0},i["".concat(t).concat(e,"-order-").concat(c)]={order:0}):(i["".concat(t).concat(e,"-").concat(c)]=[(a={},(0,o.Z)(a,"--ant-display","block"),(0,o.Z)(a,"display","block"),a),{display:"var(--ant-display)",flex:"0 0 ".concat(c/r*100,"%"),maxWidth:"".concat(c/r*100,"%")}],i["".concat(t).concat(e,"-push-").concat(c)]={insetInlineStart:"".concat(c/r*100,"%")},i["".concat(t).concat(e,"-pull-").concat(c)]={insetInlineEnd:"".concat(c/r*100,"%")},i["".concat(t).concat(e,"-offset-").concat(c)]={marginInlineStart:"".concat(c/r*100,"%")},i["".concat(t).concat(e,"-order-").concat(c)]={order:c})}return i}(n,e)},s=(0,r.Z)("Grid",(function(n){return[c(n)]})),u=(0,r.Z)("Grid",(function(n){var e=(0,i.TS)(n,{gridColumns:24}),t={"-sm":e.screenSMMin,"-md":e.screenMDMin,"-lg":e.screenLGMin,"-xl":e.screenXLMin,"-xxl":e.screenXXLMin};return[a(e),l(e,""),l(e,"-xs"),Object.keys(t).map((function(n){return function(n,e,t){return(0,o.Z)({},"@media (min-width: ".concat(e,"px)"),Object.assign({},l(n,t)))}(e,t[n],n)})).reduce((function(n,e){return Object.assign(Object.assign({},n),e)}),{})]}))},82548:function(n,e,t){t.d(e,{Z:function(){return w}});var o=t(4942),r=t(29439),i=t(4519),c=t(31662),a=t(43270),l=t.n(a),s=t(71235),u=t(49869),d=t(99495),f=t(48698),g=t(21480),p=t(41157),m=t(70111),v=function(n){var e=n.lineWidth,t=n.fontSizeIcon,o=n.fontSizeSM,r="".concat(n.lineHeightSM*o,"px");return(0,p.TS)(n,{tagFontSize:o,tagLineHeight:r,tagIconSize:t-2*e,tagPaddingHorizontal:8,tagBorderlessBg:n.colorFillTertiary})},b=function(n){return{defaultBg:n.colorFillQuaternary,defaultColor:n.colorText}},h=(0,m.Z)("Tag",(function(n){return function(n){var e,t,r,i=n.paddingXXS,c=n.lineWidth,a=n.tagPaddingHorizontal,l=n.componentCls,s=a-c,u=i-c;return r={},(0,o.Z)(r,l,Object.assign(Object.assign({},(0,g.Wf)(n)),(t={display:"inline-block",height:"auto",marginInlineEnd:n.marginXS,paddingInline:s,fontSize:n.tagFontSize,lineHeight:n.tagLineHeight,whiteSpace:"nowrap",background:n.defaultBg,border:"".concat(n.lineWidth,"px ").concat(n.lineType," ").concat(n.colorBorder),borderRadius:n.borderRadiusSM,opacity:1,transition:"all ".concat(n.motionDurationMid),textAlign:"start",position:"relative"},(0,o.Z)(t,"&".concat(l,"-rtl"),{direction:"rtl"}),(0,o.Z)(t,"&, a, a:hover",{color:n.defaultColor}),(0,o.Z)(t,"".concat(l,"-close-icon"),{marginInlineStart:u,color:n.colorTextDescription,fontSize:n.tagIconSize,cursor:"pointer",transition:"all ".concat(n.motionDurationMid),"&:hover":{color:n.colorTextHeading}}),(0,o.Z)(t,"&".concat(l,"-has-color"),(0,o.Z)({borderColor:"transparent"},"&, a, a:hover, ".concat(n.iconCls,"-close, ").concat(n.iconCls,"-close:hover"),{color:n.colorTextLightSolid})),(0,o.Z)(t,"&-checkable",(e={backgroundColor:"transparent",borderColor:"transparent",cursor:"pointer"},(0,o.Z)(e,"&:not(".concat(l,"-checkable-checked):hover"),{color:n.colorPrimary,backgroundColor:n.colorFillSecondary}),(0,o.Z)(e,"&:active, &-checked",{color:n.colorTextLightSolid}),(0,o.Z)(e,"&-checked",{backgroundColor:n.colorPrimary,"&:hover":{backgroundColor:n.colorPrimaryHover}}),(0,o.Z)(e,"&:active",{backgroundColor:n.colorPrimaryActive}),e)),(0,o.Z)(t,"&-hidden",{display:"none"}),(0,o.Z)(t,"> ".concat(n.iconCls," + span, > span + ").concat(n.iconCls),{marginInlineStart:s}),t))),(0,o.Z)(r,"".concat(l,"-borderless"),{borderColor:"transparent",background:n.tagBorderlessBg}),r}(v(n))}),b),x=function(n,e){var t={};for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&e.indexOf(o)<0&&(t[o]=n[o]);if(null!=n&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(o=Object.getOwnPropertySymbols(n);r<o.length;r++)e.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(n,o[r])&&(t[o[r]]=n[o[r]])}return t},y=function(n){var e=n.prefixCls,t=n.style,c=n.className,a=n.checked,s=n.onChange,u=n.onClick,d=x(n,["prefixCls","style","className","checked","onChange","onClick"]),g=i.useContext(f.E_),p=g.getPrefixCls,m=g.tag,v=p("tag",e),b=h(v),y=(0,r.Z)(b,2),Z=y[0],j=y[1],C=l()(v,"".concat(v,"-checkable"),(0,o.Z)({},"".concat(v,"-checkable-checked"),a),null===m||void 0===m?void 0:m.className,c,j);return Z(i.createElement("span",Object.assign({},d,{style:Object.assign(Object.assign({},t),null===m||void 0===m?void 0:m.style),className:C,onClick:function(n){null===s||void 0===s||s(!a),null===u||void 0===u||u(n)}})))},Z=t(10150),j=(0,m.b)(["Tag","preset"],(function(n){return function(n){return(0,Z.Z)(n,(function(e,t){var r=t.textColor,i=t.lightBorderColor,c=t.lightColor,a=t.darkColor;return(0,o.Z)({},"".concat(n.componentCls,"-").concat(e),(0,o.Z)({color:r,background:c,borderColor:i,"&-inverse":{color:n.colorTextLightSolid,background:a,borderColor:a}},"&".concat(n.componentCls,"-borderless"),{borderColor:"transparent"}))}))}(v(n))}),b);var C=function(n,e,t){var r,i="string"!==typeof(r=t)?r:r.charAt(0).toUpperCase()+r.slice(1);return(0,o.Z)({},"".concat(n.componentCls,"-").concat(e),(0,o.Z)({color:n["color".concat(t)],background:n["color".concat(i,"Bg")],borderColor:n["color".concat(i,"Border")]},"&".concat(n.componentCls,"-borderless"),{borderColor:"transparent"}))},k=(0,m.b)(["Tag","status"],(function(n){var e=v(n);return[C(e,"success","Success"),C(e,"processing","Info"),C(e,"error","Error"),C(e,"warning","Warning")]}),b),I=function(n,e){var t={};for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&e.indexOf(o)<0&&(t[o]=n[o]);if(null!=n&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(o=Object.getOwnPropertySymbols(n);r<o.length;r++)e.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(n,o[r])&&(t[o[r]]=n[o[r]])}return t},O=function(n,e){var t,a=n.prefixCls,g=n.className,p=n.rootClassName,m=n.style,v=n.children,b=n.icon,x=n.color,y=n.onClose,Z=n.closeIcon,C=n.closable,O=n.bordered,S=void 0===O||O,w=I(n,["prefixCls","className","rootClassName","style","children","icon","color","onClose","closeIcon","closable","bordered"]),E=i.useContext(f.E_),P=E.getPrefixCls,L=E.direction,T=E.tag,M=i.useState(!0),D=(0,r.Z)(M,2),B=D[0],N=D[1];i.useEffect((function(){"visible"in w&&N(w.visible)}),[w.visible]);var V=(0,s.o2)(x),A=(0,s.yT)(x),z=V||A,R=Object.assign(Object.assign({backgroundColor:x&&!z?x:void 0},null===T||void 0===T?void 0:T.style),m),W=P("tag",a),_=h(W),F=(0,r.Z)(_,2),H=F[0],X=F[1],G=l()(W,null===T||void 0===T?void 0:T.className,(t={},(0,o.Z)(t,"".concat(W,"-").concat(x),z),(0,o.Z)(t,"".concat(W,"-has-color"),x&&!z),(0,o.Z)(t,"".concat(W,"-hidden"),!B),(0,o.Z)(t,"".concat(W,"-rtl"),"rtl"===L),(0,o.Z)(t,"".concat(W,"-borderless"),!S),t),g,p,X),Q=function(n){n.stopPropagation(),null===y||void 0===y||y(n),n.defaultPrevented||N(!1)},U=(0,u.Z)(C,Z,(function(n){return null===n?i.createElement(c.Z,{className:"".concat(W,"-close-icon"),onClick:Q}):i.createElement("span",{className:"".concat(W,"-close-icon"),onClick:Q},n)}),null,!1),K=(0,r.Z)(U,2)[1],q="function"===typeof w.onClick||v&&"a"===v.type,Y=b||null,$=Y?i.createElement(i.Fragment,null,Y,v&&i.createElement("span",null,v)):v,J=i.createElement("span",Object.assign({},w,{ref:e,className:G,style:R}),$,K,V&&i.createElement(j,{key:"preset",prefixCls:W}),A&&i.createElement(k,{key:"status",prefixCls:W}));return H(q?i.createElement(d.Z,{component:"Tag"},J):J)},S=i.forwardRef(O);S.CheckableTag=y;var w=S}}]);
//# sourceMappingURL=703.2d8f0316.chunk.js.map