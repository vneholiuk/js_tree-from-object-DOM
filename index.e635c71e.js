!function e(t,n){var r=document.createElement("ul");t.appendChild(r);var a=!0,l=!1,i=void 0;try{for(var o,c=Object.entries(n)[Symbol.iterator]();!(a=(o=c.next()).done);a=!0){var d=o.value,u=document.createElement("li");if(u.textContent=d[0],r.appendChild(u),d[1]&&"object"==typeof d[1]&Object.keys(d[1]).length>0){var p=document.createElement("ul");t.appendChild(p),e(u,d[1])}}}catch(e){l=!0,i=e}finally{try{a||null==c.return||c.return()}finally{if(l)throw i}}}(document.querySelector("#tree"),{Drink:{Wine:{},Schnaps:{}},Fruit:{Red:{Cherry:{},Strawberry:{}},Yellow:{Banana:{},Pineapple:{}}}});
//# sourceMappingURL=index.e635c71e.js.map