import{S as Ee,i as be,s as Te,v as ue,k as p,a as N,q as W,w as ne,K as we,l as h,h as u,c as O,m as D,r as X,x as ve,n as o,C as m,b as le,y as oe,u as se,f as C,d as fe,t as H,J as ye,z as re,g as _e}from"../../../chunks/index-c7ab206d.js";import{d as de,t as j,k as pe,b as Q,B as Ae}from"../../../chunks/meta-355aaa72.js";function he(s,l,i){const a=s.slice();return a[1]=l[i],a}function ke(s){let l=s[1]+"",i;return{c(){i=W(l)},l(a){i=X(a,l)},m(a,f){le(a,i,f)},p(a,f){f&1&&l!==(l=a[1]+"")&&se(i,l)},d(a){a&&u(i)}}}function ge(s){let l,i;return l=new Ae({props:{$$slots:{default:[ke]},$$scope:{ctx:s}}}),{c(){ne(l.$$.fragment)},l(a){ve(l.$$.fragment,a)},m(a,f){oe(l,a,f),i=!0},p(a,f){const g={};f&17&&(g.$$scope={dirty:f,ctx:a}),l.$set(g)},i(a){i||(C(l.$$.fragment,a),i=!0)},o(a){H(l.$$.fragment,a),i=!1},d(a){re(l,a)}}}function Me(s){let l,i,a,f,g,I,v,S,z,$,F,E,J,b,K,T,L,R,d,k,B=s[0].title+"",V,Y,w,Z,P,U=de(s[0].date,"UTC:dd mmmm yyyy")+"",G,x,y,ee,c,_;document.title=z=s[0].title+" - "+j;let A=s[0].tags,r=[];for(let e=0;e<A.length;e+=1)r[e]=ge(he(s,A,e));const $e=e=>H(r[e],1,1,()=>{r[e]=null});var M=s[0].page;function ce(e){return{}}return M&&(c=ue(M,ce())),{c(){l=p("meta"),a=p("meta"),g=p("meta"),v=p("meta"),$=p("meta"),E=p("meta"),b=p("meta"),T=p("meta"),R=N(),d=p("article"),k=p("h1"),V=W(B),Y=N(),w=p("h2"),Z=W("Published on "),P=p("date"),G=W(U),x=N(),y=p("div");for(let e=0;e<r.length;e+=1)r[e].c();ee=N(),c&&ne(c.$$.fragment),this.h()},l(e){const t=we("svelte-2a5eik",document.head);l=h(t,"META",{name:!0,content:!0}),a=h(t,"META",{name:!0,content:!0}),g=h(t,"META",{property:!0,content:!0}),v=h(t,"META",{name:!0,content:!0}),$=h(t,"META",{property:!0,content:!0}),E=h(t,"META",{name:!0,content:!0}),b=h(t,"META",{property:!0,content:!0}),T=h(t,"META",{name:!0,content:!0}),t.forEach(u),R=O(e),d=h(e,"ARTICLE",{class:!0});var n=D(d);k=h(n,"H1",{class:!0});var q=D(k);V=X(q,B),q.forEach(u),Y=O(n),w=h(n,"H2",{class:!0});var te=D(w);Z=X(te,"Published on "),P=h(te,"DATE",{});var ie=D(P);G=X(ie,U),ie.forEach(u),te.forEach(u),x=O(n),y=h(n,"DIV",{class:!0});var me=D(y);for(let ae=0;ae<r.length;ae+=1)r[ae].l(me);me.forEach(u),ee=O(n),c&&ve(c.$$.fragment,n),n.forEach(u),this.h()},h(){o(l,"name","keywords"),o(l,"content",i=s[0].tags.concat(pe).join(", ")),o(a,"name","description"),o(a,"content",f=s[0].excerpt),o(g,"property","og:description"),o(g,"content",I=s[0].excerpt),o(v,"name","twitter:description"),o(v,"content",S=s[0].excerpt),o($,"property","og:title"),o($,"content",F=s[0].title+" - "+j),o(E,"name","twitter:title"),o(E,"content",J=s[0].title+" - "+j),o(b,"property","og:image"),o(b,"content",K=Q+"/images/posts/"+s[0].slug+".jpg"),o(T,"name","twitter:image"),o(T,"content",L=Q+"/images/posts/"+s[0].slug+".jpg"),o(k,"class","title svelte-bd1rpv"),o(w,"class","date svelte-bd1rpv"),o(y,"class","tags svelte-bd1rpv"),o(d,"class","svelte-bd1rpv")},m(e,t){m(document.head,l),m(document.head,a),m(document.head,g),m(document.head,v),m(document.head,$),m(document.head,E),m(document.head,b),m(document.head,T),le(e,R,t),le(e,d,t),m(d,k),m(k,V),m(d,Y),m(d,w),m(w,Z),m(w,P),m(P,G),m(d,x),m(d,y);for(let n=0;n<r.length;n+=1)r[n].m(y,null);m(d,ee),c&&oe(c,d,null),_=!0},p(e,[t]){if((!_||t&1&&i!==(i=e[0].tags.concat(pe).join(", ")))&&o(l,"content",i),(!_||t&1&&f!==(f=e[0].excerpt))&&o(a,"content",f),(!_||t&1&&I!==(I=e[0].excerpt))&&o(g,"content",I),(!_||t&1&&S!==(S=e[0].excerpt))&&o(v,"content",S),(!_||t&1)&&z!==(z=e[0].title+" - "+j)&&(document.title=z),(!_||t&1&&F!==(F=e[0].title+" - "+j))&&o($,"content",F),(!_||t&1&&J!==(J=e[0].title+" - "+j))&&o(E,"content",J),(!_||t&1&&K!==(K=Q+"/images/posts/"+e[0].slug+".jpg"))&&o(b,"content",K),(!_||t&1&&L!==(L=Q+"/images/posts/"+e[0].slug+".jpg"))&&o(T,"content",L),(!_||t&1)&&B!==(B=e[0].title+"")&&se(V,B),(!_||t&1)&&U!==(U=de(e[0].date,"UTC:dd mmmm yyyy")+"")&&se(G,U),t&1){A=e[0].tags;let n;for(n=0;n<A.length;n+=1){const q=he(e,A,n);r[n]?(r[n].p(q,t),C(r[n],1)):(r[n]=ge(q),r[n].c(),C(r[n],1),r[n].m(y,null))}for(_e(),n=A.length;n<r.length;n+=1)$e(n);fe()}if(M!==(M=e[0].page)){if(c){_e();const n=c;H(n.$$.fragment,1,0,()=>{re(n,1)}),fe()}M?(c=ue(M,ce()),ne(c.$$.fragment),C(c.$$.fragment,1),oe(c,d,null)):c=null}},i(e){if(!_){for(let t=0;t<A.length;t+=1)C(r[t]);c&&C(c.$$.fragment,e),_=!0}},o(e){r=r.filter(Boolean);for(let t=0;t<r.length;t+=1)H(r[t]);c&&H(c.$$.fragment,e),_=!1},d(e){u(l),u(a),u(g),u(v),u($),u(E),u(b),u(T),e&&u(R),e&&u(d),ye(r,e),c&&re(c)}}}function je(s,l,i){let{data:a}=l;return s.$$set=f=>{"data"in f&&i(0,a=f.data)},[a]}class Pe extends Ee{constructor(l){super(),be(this,l,je,Me,Te,{data:0})}}export{Pe as default};
