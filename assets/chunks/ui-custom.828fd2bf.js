import{e as r,g as i,i as d,r as l,h as u,w as _,o as p,c as f}from"../app.790ae75a.js";const h=r({name:"VPCarbonAds",setup(m){const{theme:o}=i(),n=o.value.carbonAds,{isAsideEnabled:a}=d(),s=l();let t=!1;function c(){if(!t){t=!0;const e=document.createElement("script");e.id="_carbonads_js",e.src=`//cdn.carbonads.com/carbon.js?serve=${n.code}&placement=${n.placement}`,e.async=!0,s.value.appendChild(e)}}return n&&u(()=>{a.value?c():_(a,e=>e&&c())}),(e,b)=>(p(),f("div",{class:"VPCarbonAds",ref_key:"container",ref:s},null,512))}});export{h as default};
