"use strict";function e(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var t,r=e(require("react")),n={exports:{}};
/*!
  Copyright (c) 2018 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
t=n,function(){var e={}.hasOwnProperty;function r(){for(var t=[],n=0;n<arguments.length;n++){var a=arguments[n];if(a){var o=typeof a;if("string"===o||"number"===o)t.push(a);else if(Array.isArray(a)){if(a.length){var s=r.apply(null,a);s&&t.push(s)}}else if("object"===o)if(a.toString===Object.prototype.toString)for(var l in a)e.call(a,l)&&a[l]&&t.push(l);else t.push(a.toString())}}return t.join(" ")}t.exports?(r.default=r,t.exports=r):window.classNames=r}();var a=n.exports,o=function(e){var t=e.className,n=e.style,o=e.onClick,s=e.children,l=e.round,u=e.type,i=e.href,c=e.disabled,d=a({"br-button":!0,"br-button-primary":"primary"===u,"br-button-secondary":"secondary"===u,"br-button-text-secondary":"secondary"===u,"br-button-round":l,"br-button-disabled":c},t);return i?r.default.createElement("a",{className:d,style:n,onClick:o,href:i},s):r.default.createElement("button",{type:"button",className:d,style:n,onClick:o,disabled:c},r.default.createElement("span",{className:"pony-button__content"},s))};o.defaultProps={size:"medium",type:"primary",round:!1,disabled:!1,href:"",className:"",style:{},children:null},exports.Button=o;
//# sourceMappingURL=index.js.map
