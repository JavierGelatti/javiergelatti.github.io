const f=new Map,a=document.querySelector("main"),h=a.querySelector("article"),E=a.querySelector("svg"),i=[],x=O().origin;h.addEventListener("scroll",()=>u());h.parentElement.addEventListener("scroll",()=>u());const S=new ResizeObserver(()=>u());S.observe(document.documentElement);document.documentElement.addEventListener("click",e=>{var n;if(!(e.target instanceof HTMLElement))return;const t=(n=e.target)==null?void 0:n.closest("a");if(t&&t.classList.contains("local"))if(e.preventDefault(),t.classList.contains("active")){const r=i.find(o=>o.sourceLink===t);p(r)}else t.classList.add("active"),$(t)});b();function u(){i.forEach(e=>{const t=e.svgPath,n=e.sourceParentElement.getBoundingClientRect(),r=e.sourceLink.getBoundingClientRect(),o=document.body.scrollLeft,s=document.body.scrollTop;let l=r.x-1+r.width+o,c=r.y+r.height/2+s;const v=e.element.getBoundingClientRect(),d=v.x+o,m=v.y+10+s;if(c<n.y)l=n.right+o,c=n.top+8+s;else if(c>n.bottom){const w=n.bottom;l+=(w-c)*(d-l)/(m-c),c=w}t.classList.toggle("out",c===n.bottom);const L=20;t.setAttribute("d",`
        M ${l},${c}
        C ${l+L},${c} ${d-L},${m} ${d},${m}
    `)})}function O(){return new URL(document.location.href)}async function P(e){if(f.has(e.pathname))return f.get(e.pathname);const t=await fetch(e);if(!t.ok)throw new Error(t.statusText);const n=await t.text(),o=new DOMParser().parseFromString(n,"text/html").querySelector(".content-viewer").innerHTML;return f.set(e.pathname,o),o}function T(e){return e.closest(".content-viewer")??void 0}function g(){sessionStorage.setItem("sideViewers",JSON.stringify(i.map(e=>{const t=e.sourceLink.href,n=k(e.sourceParentElement,t).indexOf(e.sourceLink);return{href:t,linkIndex:n}})))}function b(e=R()){var c;if(e.length===0)return;const[{href:t,linkIndex:n},...r]=e,o=((c=i[i.length-1])==null?void 0:c.element)??h,s=k(o,t);if(s.length===0)throw g(),new Error(`Link not found: ${t}`);(s.length>1?s[n]:s[0]).click(),setTimeout(()=>b(r),100)}function k(e,t){return[...e.querySelectorAll("a")].filter(n=>new URL(n.href).toString()===t)}function R(){const e=sessionStorage.getItem("sideViewers")??"[]";return JSON.parse(e)}function y(e,t){const n=T(e),r=i.find(l=>l.sourceParentElement===n);r&&p(r);const o=document.createElement("article");o.className="content-viewer",o.replaceChildren(t),S.observe(o);const s=document.createElementNS("http://www.w3.org/2000/svg","path");s.style.stroke=e.style.background,E.append(s),N({element:o,sourceLink:e,sourceParentElement:n,svgPath:s})}function $(e){const t=new URL(e.href);B(t)?y(e,V(t)):y(e,C(t))}function C(e){const t=document.createElement("iframe");return t.src=e.toString(),t.classList.add("loading"),t.onload=()=>t.classList.remove("loading"),t}function V(e){const t=document.createElement("div");return t.classList.add("loading"),P(e).then(n=>{const r=document.createElement("template");r.innerHTML=n,r.querySelectorAll("iframe").forEach(o=>{o.addEventListener("load",()=>{var l;const s=o.contentDocument||((l=o.contentWindow)==null?void 0:l.document);s!==void 0&&new ResizeObserver(([c])=>{o.style.height=`${c.target.scrollHeight}px`}).observe(s.documentElement)})}),t.replaceWith(r.content)}).catch(n=>{console.error(n)}),t}function N(e){i.push(e),a.style.setProperty("--number-of-columns",String(i.length+1)),a.insertBefore(e.element,E),u(),e.element.addEventListener("scroll",()=>u()),e.element.scrollIntoView({behavior:"smooth",block:"nearest",inline:"center"}),window.onscrollend!==void 0&&(document.body.style.scrollSnapType="none",document.body.addEventListener("scrollend",()=>{document.body.style.scrollSnapType=""},{once:!0})),g()}function p(e){e.svgPath.remove(),e.element.remove(),e.sourceLink.classList.remove("active");const t=i.indexOf(e),n=i.at(t+1);n&&p(n),i.splice(t,1),a.style.setProperty("--number-of-columns",String(i.length+1)),g()}function B(e){return e.origin===x&&(e.pathname.endsWith(".html")||e.pathname==="/")}
