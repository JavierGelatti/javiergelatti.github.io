const f=new Map,u=document.querySelector("main"),g=u.querySelector("article"),E=u.querySelector("svg"),c=[],k=O().origin;g.addEventListener("scroll",()=>a());g.parentElement.addEventListener("scroll",()=>a());window.addEventListener("resize",()=>a());const x=new ResizeObserver(()=>a());document.documentElement.addEventListener("click",e=>{var n;if(!(e.target instanceof HTMLElement))return;const t=(n=e.target)==null?void 0:n.closest("a");if(t&&t.classList.contains("local"))if(e.preventDefault(),t.classList.contains("active")){const r=c.find(o=>o.sourceLink===t);h(r)}else t.classList.add("active"),V(t)});$();function a(){c.forEach(e=>{const t=e.svgPath,n=e.sourceParentElement.getBoundingClientRect(),r=e.sourceLink.getBoundingClientRect(),o=document.body.scrollLeft,i=document.body.scrollTop;let s=r.x-1+r.width+o,l=r.y+r.height/2+i;const p=e.element.getBoundingClientRect(),m=p.x+o,d=p.y+10+i;if(l<n.y)s=n.right+o,l=n.top+8+i;else if(l>n.bottom){const w=n.bottom;s+=(w-l)*(m-s)/(d-l),l=w}t.classList.toggle("out",l===n.bottom);const v=20;t.setAttribute("d",`
        M ${s},${l}
        C ${s+v},${l} ${m-v},${d} ${m},${d}
    `)})}function O(){return new URL(document.location.href)}async function P(e){if(f.has(e.pathname))return f.get(e.pathname);const t=await fetch(e);if(!t.ok)throw new Error(t.statusText);const n=await t.text(),o=new DOMParser().parseFromString(n,"text/html").querySelector(".content-viewer").innerHTML;return f.set(e.pathname,o),o}function R(e){return e.closest(".content-viewer")??void 0}function y(){S(c)}function S(e){sessionStorage.setItem("sideViewers",JSON.stringify(e.map(t=>{const n=t.sourceLink.href,r=b(t.sourceParentElement,n).indexOf(t.sourceLink);return{href:n,linkIndex:r}})))}function $(){C().forEach(({href:t,linkIndex:n})=>{var s;const r=((s=c[c.length-1])==null?void 0:s.element)??g,o=b(r,t);if(o.length===0)throw S([]),new Error(`Link not found: ${t}`);(o.length>1?o[n]:o[0]).click()})}function b(e,t){return[...e.querySelectorAll("a")].filter(n=>new URL(n.href).toString()===t)}function C(){const e=sessionStorage.getItem("sideViewers")??"[]";return JSON.parse(e)}function L(e,t){const n=R(e),r=c.find(s=>s.sourceParentElement===n);r&&h(r);const o=document.createElement("article");o.className="content-viewer",o.replaceChildren(t),x.observe(o);const i=document.createElementNS("http://www.w3.org/2000/svg","path");i.style.stroke=e.style.background,E.append(i),B({element:o,sourceLink:e,sourceParentElement:n,svgPath:i})}function V(e){const t=new URL(e.href);q(t)?L(e,T(t)):L(e,N(t))}function N(e){const t=document.createElement("iframe");return t.src=e.toString(),t.classList.add("loading"),t.onload=()=>t.classList.remove("loading"),t}function T(e){const t=document.createElement("div");return t.classList.add("loading"),P(e).then(n=>{const r=document.createElement("template");r.innerHTML=n,r.querySelectorAll("iframe").forEach(o=>{o.addEventListener("load",()=>{var s;const i=o.contentDocument||((s=o.contentWindow)==null?void 0:s.document);i!==void 0&&new ResizeObserver(([l])=>{o.style.height=`${l.target.scrollHeight}px`}).observe(i.documentElement)})}),t.replaceWith(r.content)}).catch(n=>{console.error(n)}),t}function B(e){c.push(e),u.style.setProperty("--number-of-columns",String(c.length+1)),u.insertBefore(e.element,E),a(),e.element.addEventListener("scroll",()=>a()),e.element.scrollIntoView({behavior:"smooth",block:"nearest",inline:"center"}),y()}function h(e){e.svgPath.remove(),e.element.remove(),e.sourceLink.classList.remove("active");const t=c.indexOf(e),n=c.at(t+1);n&&h(n),c.splice(t,1),u.style.setProperty("--number-of-columns",String(c.length+1)),y()}function q(e){return e.origin===k&&e.pathname.endsWith(".html")}
