async function H(M){const u=document.querySelector("main"),d=u.querySelector("article"),v=u.querySelector("svg"),p=await w(f());p!==void 0&&(d.innerHTML=p);const s=[];Promise.all([...d.querySelectorAll("a")].map(L)).then(C);function O(e){let t=0;for(const n of[...e]){const o=n.charCodeAt(0);t=(t<<5)-t+o,t|=0}return t}async function L(e){const t=new URL(e.href),n=f();if(B(t)){if(t.origin===n.origin&&t.pathname===n.pathname&&t.hash!==""){e.classList.add("hash");return}}else{e.target="_blank",e.rel="noopener noreferrer",e.classList.add("external");return}const o=Math.abs(O(e.href))%360;e.style.background=`hsl(${o}, 100%, 40%)`,e.classList.add("local")}d.addEventListener("scroll",()=>a()),d.parentElement.addEventListener("scroll",()=>a()),window.addEventListener("resize",()=>a());const $=new ResizeObserver(()=>a());function a(){s.forEach(e=>{const t=e.svgPath,n=e.sourceParentElement.getBoundingClientRect(),o=e.sourceLink.getBoundingClientRect(),r=document.body.scrollLeft,c=document.body.scrollTop;let i=o.x-1+o.width+r,l=o.y+o.height/2+c;const k=e.element.getBoundingClientRect(),h=k.x+r,g=k.y+10+c;if(l<n.y)i=n.right+r,l=n.top+8+c;else if(l>n.bottom){const P=n.bottom;i+=(P-l)*(h-i)/(g-l),l=P}t.classList.toggle("out",l===n.bottom);const x=20;t.setAttribute("d",`
            M ${i},${l}
            C ${i+x},${l} ${h-x},${g} ${h},${g}
        `)})}function f(){return new URL(document.location.href)}async function w(e){if(e.origin!==f().origin)return;const t=await fetch(e);if(!t.ok)throw new Error(t.statusText);const n=await t.text();return new DOMParser().parseFromString(n,"text/html").querySelector(".content-viewer > *").innerHTML}function R(e){return e.closest(".content-viewer")??void 0}function y(){E(s)}function E(e){sessionStorage.setItem("sideViewers",JSON.stringify(e.map(t=>{const n=t.sourceLink.href,o=S(t.sourceParentElement,n).indexOf(t.sourceLink);return{href:n,linkIndex:o}})))}function C(){V().forEach(({href:t,linkIndex:n})=>{var i;const o=((i=s[s.length-1])==null?void 0:i.element)??d,r=S(o,t);if(r.length===0)throw E([]),new Error(`Link not found: ${t}`);(r.length>1?r[n]:r[0]).click()})}function S(e,t){return[...e.querySelectorAll("a")].filter(n=>new URL(n.href).toString()===t)}function V(){const e=sessionStorage.getItem("sideViewers")??"[]";return JSON.parse(e)}function b(e,t){const n=R(e),o=s.find(i=>i.sourceParentElement===n);o&&m(o);const r=document.createElement("article");r.className="content-viewer",r.replaceChildren(t),$.observe(r);const c=document.createElementNS("http://www.w3.org/2000/svg","path");c.style.stroke=e.style.background,v.append(c),N({element:r,sourceLink:e,sourceParentElement:n,svgPath:c})}async function I(e){const t=new URL(e.href),n=await w(t);n===void 0?b(e,T(t)):b(e,q(n))}function T(e){const t=document.createElement("iframe");return t.src=e.toString(),t.classList.add("loading"),t.onload=()=>t.classList.remove("loading"),t}function q(e){const t=document.createElement("div");return t.style.display="contents",t.innerHTML=e,t.querySelectorAll("a").forEach(L),t.querySelectorAll("iframe").forEach(n=>{n.addEventListener("load",()=>{var r;const o=n.contentDocument||((r=n.contentWindow)==null?void 0:r.document);o!==void 0&&new ResizeObserver(([c])=>{n.style.height=`${c.target.scrollHeight}px`}).observe(o.documentElement)})}),t}function N(e){s.push(e),u.style.setProperty("--number-of-columns",String(s.length+1)),u.insertBefore(e.element,v),a(),e.element.addEventListener("scroll",()=>a()),e.element.scrollIntoView({behavior:"smooth",block:"nearest",inline:"center"}),y()}function m(e){e.svgPath.remove(),e.element.remove(),e.sourceLink.classList.remove("active");const t=s.indexOf(e),n=s.at(t+1);n&&m(n),s.splice(t,1),u.style.setProperty("--number-of-columns",String(s.length+1)),y()}function B(e){return e.hostname==="javiergelatti.xyz"||e.hostname==="localhost"||/^\d+\.\d+\.\d+\.\d+$/.test(e.hostname)}document.documentElement.addEventListener("click",e=>{var n;if(!(e.target instanceof HTMLElement))return;const t=(n=e.target)==null?void 0:n.closest("a");if(t&&t.classList.contains("local"))if(e.preventDefault(),e.stopImmediatePropagation(),t.classList.contains("active")){const o=s.find(r=>r.sourceLink===t);m(o)}else t.classList.add("active"),I(t)},{capture:!0})}H();
