const f=new Map,u=document.querySelector("main"),h=u.querySelector("article"),y=u.querySelector("svg"),i=[],k=O().origin;h.addEventListener("scroll",()=>a());h.parentElement.addEventListener("scroll",()=>a());window.addEventListener("resize",()=>a());const x=new ResizeObserver(()=>a());document.documentElement.addEventListener("click",e=>{var n;if(!(e.target instanceof HTMLElement))return;const t=(n=e.target)==null?void 0:n.closest("a");if(t&&t.classList.contains("local"))if(e.preventDefault(),t.classList.contains("active")){const r=i.find(o=>o.sourceLink===t);p(r)}else t.classList.add("active"),C(t)});S();function a(){i.forEach(e=>{const t=e.svgPath,n=e.sourceParentElement.getBoundingClientRect(),r=e.sourceLink.getBoundingClientRect(),o=document.body.scrollLeft,s=document.body.scrollTop;let l=r.x-1+r.width+o,c=r.y+r.height/2+s;const v=e.element.getBoundingClientRect(),m=v.x+o,d=v.y+10+s;if(c<n.y)l=n.right+o,c=n.top+8+s;else if(c>n.bottom){const L=n.bottom;l+=(L-c)*(m-l)/(d-c),c=L}t.classList.toggle("out",c===n.bottom);const w=20;t.setAttribute("d",`
        M ${l},${c}
        C ${l+w},${c} ${m-w},${d} ${m},${d}
    `)})}function O(){return new URL(document.location.href)}async function P(e){if(f.has(e.pathname))return f.get(e.pathname);const t=await fetch(e);if(!t.ok)throw new Error(t.statusText);const n=await t.text(),o=new DOMParser().parseFromString(n,"text/html").querySelector(".content-viewer").innerHTML;return f.set(e.pathname,o),o}function R(e){return e.closest(".content-viewer")??void 0}function g(){V(i)}function V(e){sessionStorage.setItem("sideViewers",JSON.stringify(e.map(t=>{const n=t.sourceLink.href,r=b(t.sourceParentElement,n).indexOf(t.sourceLink);return{href:n,linkIndex:r}})))}function S(e=$()){var c;if(e.length===0)return;const[{href:t,linkIndex:n},...r]=e,o=((c=i[i.length-1])==null?void 0:c.element)??h,s=b(o,t);if(s.length===0)throw g(),new Error(`Link not found: ${t}`);(s.length>1?s[n]:s[0]).click(),setTimeout(()=>S(r),100)}function b(e,t){return[...e.querySelectorAll("a")].filter(n=>new URL(n.href).toString()===t)}function $(){const e=sessionStorage.getItem("sideViewers")??"[]";return JSON.parse(e)}function E(e,t){const n=R(e),r=i.find(l=>l.sourceParentElement===n);r&&p(r);const o=document.createElement("article");o.className="content-viewer",o.replaceChildren(t),x.observe(o);const s=document.createElementNS("http://www.w3.org/2000/svg","path");s.style.stroke=e.style.background,y.append(s),B({element:o,sourceLink:e,sourceParentElement:n,svgPath:s})}function C(e){const t=new URL(e.href);I(t)?E(e,N(t)):E(e,T(t))}function T(e){const t=document.createElement("iframe");return t.src=e.toString(),t.classList.add("loading"),t.onload=()=>t.classList.remove("loading"),t}function N(e){const t=document.createElement("div");return t.classList.add("loading"),P(e).then(n=>{const r=document.createElement("template");r.innerHTML=n,r.querySelectorAll("iframe").forEach(o=>{o.addEventListener("load",()=>{var l;const s=o.contentDocument||((l=o.contentWindow)==null?void 0:l.document);s!==void 0&&new ResizeObserver(([c])=>{o.style.height=`${c.target.scrollHeight}px`}).observe(s.documentElement)})}),t.replaceWith(r.content)}).catch(n=>{console.error(n)}),t}function B(e){i.push(e),u.style.setProperty("--number-of-columns",String(i.length+1)),u.insertBefore(e.element,y),a(),e.element.addEventListener("scroll",()=>a()),e.element.scrollIntoView({behavior:"smooth",block:"nearest",inline:"center"}),g()}function p(e){e.svgPath.remove(),e.element.remove(),e.sourceLink.classList.remove("active");const t=i.indexOf(e),n=i.at(t+1);n&&p(n),i.splice(t,1),u.style.setProperty("--number-of-columns",String(i.length+1)),g()}function I(e){return e.origin===k&&e.pathname.endsWith(".html")}
