import{m as b,a6 as x,v as D,bM as _,r as o,cv as M,j as e,cw as T,cx as k,Z as j,cy as F,cz as L,cA as R,cB as B,h as p,a8 as E}from"./sanity-46aa66c6.js";const W=(t,n)=>({title:p("em",{children:["No schema found for type ",e("code",{children:n})]}),subtitle:p("em",{children:["Document: ",e("code",{children:t})]}),media:()=>e(E,{})});function z(t){const{layout:n,value:s}=t;return e(k,{...W(s._id,s._type),layout:n})}function P(t,n,s){return t===!1?!1:t||n&&n.icon||s||!1}function O(t){const{icon:n,id:s,layout:i="default",pressed:v,schemaType:a,selected:r,title:u,value:c}=t,y=b(),l=x(),{ChildLink:d}=D(),m=_(s),f=Boolean(a&&a.name&&y.get(a.name)),[I,h]=o.useState(!1),g=o.useMemo(()=>c&&M(c)?!a||!f?e(z,{value:c}):e(T,{documentPreviewStore:l,icon:P(n,a,R),layout:i,schemaType:a,value:c,presence:m}):e(k,{status:e(j,{muted:!0,children:e(F,{})}),icon:P(n,a,B),layout:i,title:u}),[l,f,n,i,a,u,c,m]),w=o.useMemo(()=>function(S){return e(d,{...S,childId:s})},[d,s]),C=o.useCallback(()=>h(!0),[]);return o.useEffect(()=>h(!1),[r]),e(L,{__unstable_focusRing:!0,as:w,"data-as":"a","data-ui":"PaneItem",padding:2,radius:2,onClick:C,pressed:v,selected:r||I,tone:"inherit",children:g})}export{O as P};