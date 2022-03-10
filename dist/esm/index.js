import e from"react";var t,r={exports:{}};
/*!
  Copyright (c) 2018 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/t=r,function(){var e={}.hasOwnProperty;function r(){for(var t=[],n=0;n<arguments.length;n++){var a=arguments[n];if(a){var o=typeof a;if("string"===o||"number"===o)t.push(a);else if(Array.isArray(a)){if(a.length){var s=r.apply(null,a);s&&t.push(s)}}else if("object"===o)if(a.toString===Object.prototype.toString)for(var l in a)e.call(a,l)&&a[l]&&t.push(l);else t.push(a.toString())}}return t.join(" ")}t.exports?(r.default=r,t.exports=r):window.classNames=r}();var n=r.exports,a=function(t){var r=t.className,a=t.style,o=t.onClick,s=t.children,l=t.round,i=t.type,u=t.href,c=t.disabled,p=n({"br-button":!0,"br-button-primary":"primary"===i,"br-button-secondary":"secondary"===i,"br-button-text-secondary":"secondary"===i,"br-button-round":l,"br-button-disabled":c},r);return u?e.createElement("a",{className:p,style:a,onClick:o,href:u},s):e.createElement("button",{type:"button",className:p,style:a,onClick:o,disabled:c},e.createElement("span",{className:"pony-button__content"},s))};a.defaultProps={size:"medium",type:"primary",round:!1,disabled:!1,href:"",className:"",style:{},children:null};export{a as Button};
//# sourceMappingURL=index.js.map
