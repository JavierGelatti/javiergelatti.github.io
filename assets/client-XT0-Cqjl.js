const a=document.querySelector("main"),d=a.querySelector("article"),g=a.querySelector("svg"),w=b(h());w!==void 0&&(d.innerHTML=w);const s=[];Promise.all([...d.querySelectorAll("a")].map(S)).then(C);function O(e){let t=0;for(const n of[...e]){const o=n.charCodeAt(0);t=(t<<5)-t+o,t|=0}return t}async function S(e){const t=new URL(e.href),n=h();if(B(t)){if(t.origin===n.origin&&t.pathname===n.pathname&&t.hash!==""){e.classList.add("hash");return}}else{e.target="_blank",e.rel="noopener noreferrer",e.classList.add("external");return}const o=Math.abs(O(e.href))%360;e.style.background=`hsl(${o}, 100%, 40%)`,e.classList.add("local")}d.addEventListener("scroll",()=>u());d.parentElement.addEventListener("scroll",()=>u());window.addEventListener("resize",()=>u());const $=new ResizeObserver(()=>u());function u(){s.forEach(e=>{const t=e.svgPath,n=e.sourceParentElement.getBoundingClientRect(),o=e.sourceLink.getBoundingClientRect(),r=document.body.scrollLeft,c=document.body.scrollTop;let i=o.x-1+o.width+r,l=o.y+o.height/2+c;const L=e.element.getBoundingClientRect(),f=L.x+r,m=L.y+10+c;if(l<n.y)i=n.right+r,l=n.top+8+c;else if(l>n.bottom){const y=n.bottom;i+=(y-l)*(f-i)/(m-l),l=y}t.classList.toggle("out",l===n.bottom);const p=20;t.setAttribute("d",`
            M ${i},${l}
            C ${i+p},${l} ${f-p},${m} ${f},${m}
        `)})}function h(){return new URL(document.location.href)}function b(e){if(e.origin===h().origin)return console.log(e),pages.get(e.pathname)}function R(e){return e.closest(".content-viewer")??void 0}function k(){P(s)}function P(e){sessionStorage.setItem("sideViewers",JSON.stringify(e.map(t=>{const n=t.sourceLink.href,o=x(t.sourceParentElement,n).indexOf(t.sourceLink);return{href:n,linkIndex:o}})))}function C(){V().forEach(({href:t,linkIndex:n})=>{var i;const o=((i=s[s.length-1])==null?void 0:i.element)??d,r=x(o,t);if(r.length===0)throw P([]),new Error(`Link not found: ${t}`);(r.length>1?r[n]:r[0]).click()})}function x(e,t){return[...e.querySelectorAll("a")].filter(n=>new URL(n.href).toString()===t)}function V(){const e=sessionStorage.getItem("sideViewers")??"[]";return JSON.parse(e)}function E(e,t){const n=R(e),o=s.find(i=>i.sourceParentElement===n);o&&v(o);const r=document.createElement("article");r.className="content-viewer",r.replaceChildren(t),$.observe(r);const c=document.createElementNS("http://www.w3.org/2000/svg","path");c.style.stroke=e.style.background,g.append(c),A({element:r,sourceLink:e,sourceParentElement:n,svgPath:c})}function I(e){const t=new URL(e.href),n=b(t);n===void 0?E(e,N(t)):E(e,q(n))}function N(e){const t=document.createElement("iframe");return t.src=e.toString(),t.classList.add("loading"),t.onload=()=>t.classList.remove("loading"),t}function q(e){const t=document.createElement("div");return t.style.display="contents",t.innerHTML=e,t.querySelectorAll("a").forEach(S),t.querySelectorAll("iframe").forEach(n=>{n.addEventListener("load",()=>{var r;const o=n.contentDocument||((r=n.contentWindow)==null?void 0:r.document);o!==void 0&&new ResizeObserver(([c])=>{n.style.height=`${c.target.scrollHeight}px`}).observe(o.documentElement)})}),t}function A(e){s.push(e),a.style.setProperty("--number-of-columns",String(s.length+1)),console.log(a,e.element,g),a.insertBefore(e.element,g),u(),e.element.addEventListener("scroll",()=>u()),e.element.scrollIntoView({behavior:"smooth",block:"nearest",inline:"center"}),k()}function v(e){e.svgPath.remove(),e.element.remove(),e.sourceLink.classList.remove("active");const t=s.indexOf(e),n=s.at(t+1);n&&v(n),s.splice(t,1),a.style.setProperty("--number-of-columns",String(s.length+1)),k()}function B(e){return e.hostname==="javiergelatti.xyz"||e.hostname==="localhost"||/^\d+\.\d+\.\d+\.\d+$/.test(e.hostname)}document.documentElement.addEventListener("click",e=>{var n;if(!(e.target instanceof HTMLElement))return;const t=(n=e.target)==null?void 0:n.closest("a");if(t&&t.classList.contains("local"))if(e.preventDefault(),e.stopImmediatePropagation(),t.classList.contains("active")){const o=s.find(r=>r.sourceLink===t);v(o)}else t.classList.add("active"),I(t)},{capture:!0});console.log("ASDFG");
