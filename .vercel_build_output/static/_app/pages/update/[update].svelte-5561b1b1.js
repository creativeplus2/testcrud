import{S as N,i as P,s as g,e as h,k as y,c as f,a as T,n as b,d as v,b as c,f as U,E as d,K as m,L as _,M as k,I,N as w}from"../../chunks/vendor-cfa7df36.js";function S(i){let t,e,n,s,r,u,l,p;return{c(){t=h("form"),e=h("input"),n=y(),s=h("input"),r=y(),u=h("input"),this.h()},l(o){t=f(o,"FORM",{});var a=T(t);e=f(a,"INPUT",{type:!0,placeholder:!0}),n=b(a),s=f(a,"INPUT",{type:!0,placeholder:!0}),r=b(a),u=f(a,"INPUT",{type:!0}),a.forEach(v),this.h()},h(){c(e,"type","text"),c(e,"placeholder","book description"),c(s,"type","text"),c(s,"placeholder","book description"),c(u,"type","submit")},m(o,a){U(o,t,a),d(t,e),m(e,i[0].title),d(t,n),d(t,s),m(s,i[0].content),d(t,r),d(t,u),l||(p=[_(e,"input",i[3]),_(s,"input",i[4]),_(t,"submit",k(i[1]))],l=!0)},p(o,[a]){a&1&&e.value!==o[0].title&&m(e,o[0].title),a&1&&s.value!==o[0].content&&m(s,o[0].content)},i:I,o:I,d(o){o&&v(t),l=!1,w(p)}}}const K=async({page:i,fetch:t})=>{const e=i.params.update;return{props:{post:await(await t(`https://creativeplusplus.com/api.php/records/posts/${e}`,{method:"GET",headers:{"X-API-Key":"123456789abc"}})).json(),id:e}}};function j(i,t,e){let{post:n,id:s}=t;async function r(){const p=await fetch(`https://creativeplusplus.com/api.php/records/posts/${s}`,{method:"PUT",headers:{"X-API-Key":"123456789abc"},body:JSON.stringify(n)});console.log(JSON.stringify(n));const o=await p.json();console.log(o)}function u(){n.title=this.value,e(0,n)}function l(){n.content=this.value,e(0,n)}return i.$$set=p=>{"post"in p&&e(0,n=p.post),"id"in p&&e(2,s=p.id)},[n,r,s,u,l]}class O extends N{constructor(t){super();P(this,t,j,S,g,{post:0,id:2})}}export{O as default,K as load};
