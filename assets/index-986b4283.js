import{d as x,o as u,a as y,e as m,t as f,u as s,h as R,H as w,z as H,M as O,_ as C,r as v,c as D,f as V,g as L,p as $,N as A,B as E,C as P,E as k,O as B,w as T,b as S,L as z,l as F,D as U,P as W}from"./index-89374393.js";import{f as j}from"./formatDate-8ee1ee0b.js";import{R as q,a as I,p as G,b as J}from"./blog-f64ed5e5.js";import{u as M}from"./useFetchData-4d762871.js";import{M as K}from"./index-9aca4a97.js";import{u as Q}from"./useMainScroll-baefc7ec.js";const X={class:"blog-detail-container"},Y={class:"aside"},Z={href:"#Dataform"},ee=["innerHTML"],te=x({__name:"BlogDetail",props:{blog:null},setup(o){return(r,d)=>{const l=O("Router-link");return u(),y("div",X,[m("h2",null,f(o.blog.title),1),m("div",Y,[m("span",null,"日期："+f(s(j)(o.blog.createDate)),1),m("span",null,"浏览量："+f(o.blog.scanNumber),1),m("a",Z,"评论："+f(o.blog.commentNumber),1),R(l,{to:{name:"BlogCategory",params:{categoryId:o.blog.category.id}}},{default:w(()=>[H(f(o.blog.category.name),1)]),_:1},8,["to"])]),m("div",{class:"markdown-body",innerHTML:o.blog.htmlContent},null,8,ee)])}}});const oe=C(te,[["__scopeId","data-v-b3cfcdd7"]]),ae=o=>(E("data-v-d5a0015e"),o=o(),P(),o),ne={class:"blog-toc-container"},se=ae(()=>m("h2",null,"目录",-1)),le=x({__name:"BlogTOC",props:{toc:null},setup(o){const r=o,{proxy:d}=$(),l=v(""),c=A(()=>{l.value="";for(const e of _.value){if(!e)continue;let t=e.getBoundingClientRect().top,a=100;if(t>=0&&t<=a)l.value=e.id;else{if(t>a)return;l.value=e.id}}},50);d.$eventBus.on("mainScroll",c);const _=D(()=>{let e=[],t=(a=[])=>{for(const h of a){let n=document.getElementById(h.anchor);n&&e.push(n),h.children&&h.children.length&&t(h.children)}};return t(r.toc),e});V(()=>{const e=location.hash;location.hash="",setTimeout(()=>{location.hash=e},50)}),L(()=>{d.$eventBus.off("mainScroll",c)});const i=D(()=>{let e=(t=[])=>t.map(a=>({...a,isSelected:a.anchor===l.value,children:e(a.children)}));return e(r.toc)}),g=e=>{location.hash=e.anchor};return(e,t)=>(u(),y("div",ne,[se,R(q,{list:s(i),onSelect:g},null,8,["list"])]))}});const ce=C(le,[["__scopeId","data-v-d5a0015e"]]),ie={class:"blog-comment-container"},re=x({__name:"BlogComment",setup(o){const r=k(),d=n=>{if(a.value||!n)return;let p=100;Math.abs(n.scrollTop+n.clientHeight-n.scrollHeight)<=p&&b()},l=D(()=>t.value.rows.length>=t.value.total),b=async()=>{if(t.value.rows.length===0){g.value="-------博主很菜，请大佬们给点建议------";return}if(l.value){g.value="------我也是有底线的------";return}a.value=!0,i.value++;const n=await e();t.value.rows=t.value.rows.concat(n.rows),a.value=!1},{proxy:c}=$();c.$eventBus.on("mainScroll",d),L(()=>{c.$eventBus.off("mainScroll",d)});let _=v(10),i=v(1),g=v("");const e=async()=>await I(r.params.id,i.value,_.value);let{dataRef:t,isLoadingRef:a}=M(e,{});const h=async(n,p)=>{await G({blogId:r.params.id,...n})?(t.value.total++,t.value=await I(r.params.id,i.value,t.value.total),p("评论成功")):p("您的操作过于频繁，请稍后再试","info")};return(n,p)=>(u(),y("div",ie,[R(K,{title:"评论列表",total:s(t).total,list:s(t).rows,onSubmit:h,isListLoading:s(a),text:g.value},null,8,["total","list","isListLoading","text"])]))}});const ue=C(re,[["__scopeId","data-v-8a0e3ad1"]]),de={class:"right-container"},_e=x({__name:"index",setup(o){const r=k(),d=U(),l=v(null),b=async()=>{let i=await J(r.params.id);if(!i){d.push("/404");return}return W.setRouterTitle(i.title),i},{dataRef:c,isLoadingRef:_}=M(b);return Q(l),(i,g)=>{const e=F("loading");return u(),B(z,null,{right:w(()=>[T((u(),y("div",de,[s(c)?(u(),B(ce,{key:0,toc:s(c).toc},null,8,["toc"])):S("",!0)])),[[e,s(_)]])]),default:w(()=>[T((u(),y("div",{ref_key:"mainContainer",ref:l,class:"main-container"},[s(c)?(u(),B(oe,{key:0,blog:s(c)},null,8,["blog"])):S("",!0),s(_)?S("",!0):(u(),B(ue,{key:1}))])),[[e,s(_)]])]),_:1})}}});const ye=C(_e,[["__scopeId","data-v-9a14ec8e"]]);export{ye as default};
