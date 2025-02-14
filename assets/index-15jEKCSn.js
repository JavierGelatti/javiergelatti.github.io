(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const n of t)if(n.type==="childList")for(const o of n.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function e(t){const n={};return t.integrity&&(n.integrity=t.integrity),t.referrerPolicy&&(n.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?n.credentials="include":t.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(t){if(t.ep)return;t.ep=!0;const n=e(t);fetch(t.href,n)}})();const T=`<h1>Recreating Engelbart’s Chorded Keyset</h1>
<p>In 1968, Douglas Engelbart demonstrated a revolutionary computer system that included, among other innovations, a <em>chorded keyset</em> —a five-key device that allowed one-handed text input through combinations of keypresses<sup class="footnote-ref"><a href="#fn1" id="fnref1">[1]</a></sup>. The keyset is an input method that never gained widespread adoption, and remain commercially unavailable.</p>
<iframe width="534" height="400" src="https://www.youtube.com/embed/hRYnloqYKGY?start=67" title="Part 4 of 10: Engelbart and the Dawn of Interactive Computing: SRI&#39;s 1968 Demo (Highlights)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
<p>Fascinated by this historical interface, I embarked on a journey to recreate and experience Engelbart’s chorded keyset firsthand. The project evolved through multiple prototypes, each iteration bringing me closer to understanding the unique affordances of this input method.</p>
<hr>
<p>My first attempt used basic electronic components on a protoboard, using simple push buttons wired into an Arduino pro micro:</p>
<p><img src="\${mdLink0}" alt="A protoboard prototype showing five push buttons arranged for one-handed operation, with basic wiring visible"></p>
<p>The next iterations improved the buttons, by using ice cream sticks and microswitches. It also included LED light indicators for different modes:
<img src="\${mdLink1}" alt="keyset-prototype2b.jpg">
<img src="\${mdLink2}" alt="keyset-prototype2a.jpg"></p>
<p>Then I built a simple enclosure and painted it:
<img src="\${mdLink3}" alt="keyset-prototype3a.jpg">
<img src="\${mdLink4}" alt="keyset-prototype3b.jpg"></p>
<h2>The final design</h2>
<p>While researching about the keyset, I learned that the XEROX Alto computer —developed years after Engelbart’s demo— also had a keyset<sup class="footnote-ref"><a href="#fn2" id="fnref2">[2]</a></sup>:</p>
<p><a
    title="Michael Hicks from Saint Paul, MN, USA, CC BY 2.0 &lt;https://creativecommons.org/licenses/by/2.0&gt;, via Wikimedia Commons"
    href="https://commons.wikimedia.org/wiki/File:Xerox_Alto_with_mouse_and_chorded_keyset_-_Computer_History_Museum.jpg" >
<img
        width="512"
        alt="Xerox Alto with mouse and chorded keyset - Computer History Museum"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Xerox_Alto_with_mouse_and_chorded_keyset_-_Computer_History_Museum.jpg/512px-Xerox_Alto_with_mouse_and_chorded_keyset_-_Computer_History_Museum.jpg?20140515121120" />
</a></p>
<p>So, I based my designs on that one. For the next prototype, I took the measurements of that version of the keyset and made a 3D model in FreeCAD:</p>
<table>
<thead>
<tr>
<th><img src="\${mdLink5}" alt="keyset-3d-2.jpg"></th>
<th><img src="\${mdLink6}" alt="keyset-3d-1.jpg"></th>
</tr>
</thead>
</table>
<p>Then, I printed it (using a 3D printer), and assembled it:</p>
<p><img src="\${mdLink7}" alt="keyset-final.jpg"></p>
<iframe width="800" height="450" src="https://www.youtube.com/embed/_-VbE1OzzVM" title="Keyset demo" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
<h2>Closing Thoughts</h2>
<p>The code and circuit diagram can be found <a href="https://github.com/JavierGelatti/chorded-keyset">on GitHub</a>. I  developed it using C++ and Ruby, with automated tests for the character entry logic.</p>
<p>I’ve found that recreating historical interfaces can give us the ability to <em>experience</em> them in a way documentation or videos can’t convey.
While the chorded keyset may not have become the standard input device Engelbart envisioned, experiencing it firsthand provides valuable insights into alternative interaction patterns, and makes us think about the complex factors that influence technology adoption.</p>
<hr class="footnotes-sep">
<section class="footnotes">
<ol class="footnotes-list">
<li id="fn1" class="footnote-item"><p>The keyset was mainly used to trigger commands while navigating with the mouse. You could also use it for one-hand text entry, although the keyboard was the preferred input device to write text.</p>
<p>For more information about the chorded keyset, you can visit the Doug Engelbart Institute <a href="https://dougengelbart.org/content/view/273/">website</a>. <a href="#fnref1" class="footnote-backref">↩︎</a></p>
</li>
<li id="fn2" class="footnote-item"><p>Some images and specifications are provided by the Computer History Museum <a href="https://www.computerhistory.org/collections/catalog/102635868">here</a>. <a href="#fnref2" class="footnote-backref">↩︎</a></p>
</li>
</ol>
</section>
`,A=`<h1>UML object collaboration diagrams</h1>
<p>When I was studying software engineering, some courses I attended used UML for object-oriented modelling. During those university years, I frequently found myself drawing those diagrams. A particular pain point was maintaining consistency: whenever something needed to be changed (like renaming a message), the changes had to be manually propagated across the diagrams in the documentation.</p>
<p>This motivated me to develop an interactive tool that connects different views of an object-oriented program, making it easier to link the different diagrams together with the code.</p>
<p>The system provides three synchronized views of the program: an UML object collaboration diagram showing runtime interactions, an UML class diagram displaying the static structure, and a code panel showing the actual implementation.</p>
<p><img src="\${mdLink0}" alt="Animation showing the linked views of the tool: collaboration diagram at the left, class diagram at top right, and code panel below. The views update in sync as the user interacts with them."></p>
<p>The views are integrated — objects can be rearranged with automatic connection routing, clicking elements in one view highlights related elements in others through animated indicators, and changes like renaming are automatically propagated across all views.</p>
<p>I started developing the tool using JavaScript for the browser, but I never actually finished its implementation. Nonetheless, I decided to write a bit about it here anyway because I believe <em>seeing the idea</em> might make you think about the possibility of having tools like this one.</p>
<hr>
<h2>Aside: why “collaboration diagrams”?</h2>
<p><em>Class diagrams</em> are the most widely used UML diagrams, but they only capture the static high-level structure of a program. Collaboration diagrams (called “communication diagrams” in UML 2.0) show the dynamic interactions between objects, making them particularly valuable for understanding object-oriented systems in action.</p>
<p>I prefer the term “collaboration diagram” over “communication diagram” for describing object interactions, because I think it’s a more appropriate metaphor to show how objects <em>work together</em> to fulfill their responsibilities<sup class="footnote-ref"><a href="#fn1" id="fnref1">[1]</a></sup>.</p>
<hr class="footnotes-sep">
<section class="footnotes">
<ol class="footnotes-list">
<li id="fn1" class="footnote-item"><p>This use of the word “collaboration” also aligns with Rebecca Wirfs-Brock’s books on object-oriented programming. <a href="#fnref1" class="footnote-backref">↩︎</a></p>
</li>
</ol>
</section>
`,I=`<h1>Game of life inspector</h1>
<h2>Self-documenting code: how?</h2>
<p>In many of the courses I’ve taught, we talked about the importance of self-documenting code<sup class="footnote-ref"><a href="#fn1" id="fnref1">[1]</a></sup>.
Developers are often tempted to introduce explaining comments in their code, when they could have made the code more readable, eliminating the need to put the comments in.</p>
<p>The problem with comments is that they’re not fully <em>connected</em> into the software we are making.
A consequence of this is that the program implementation can diverge away from the comments that refer to it, leaving them outdated.
There are large-scale studies<sup class="footnote-ref"><a href="#fn2" id="fnref2">[2]</a></sup> that confirmed that, in most cases, <em>code and comments do not co-evolve</em>.</p>
<p>The usual advice given in these cases is to refactor the code by extracting some variables or methods, and improving names.
While this is often enough, there are situations where something else might be needed.</p>
<hr>
<p>On one occasion, we were implementing Conway’s Game of Life as a Test-Driven Development exercise, using Python.
A typical test can look like this:</p>
<pre><code class="hljs language-python">game = GameOfLife({
    Position(<span class="hljs-number">1</span>, <span class="hljs-number">3</span>), Position(<span class="hljs-number">1</span>, <span class="hljs-number">2</span>), Position(<span class="hljs-number">2</span>, <span class="hljs-number">1</span>)
})

game.advance_generation()

<span class="hljs-variable language_">self</span>.assertEquals(game.alive_cells(), {
    Position(<span class="hljs-number">1</span>, <span class="hljs-number">2</span>), Position(<span class="hljs-number">2</span>, <span class="hljs-number">2</span>)
})
</code></pre>
<p>The problem is that the starting and expected end state of the board are not obvious only by reading the code.
One must look at the coordinates and imagine the board, acting like an interpreter of the program.
Of course, this is problematic because parsing the board state by hand is not the problem we’re trying to solve whenever we look at the tests… and having to do it manually is both tiring and error-prone.</p>
<p>So, how could the code be written so that it’s self-documenting, with the same expressiveness that we could have by looking at a diagram? Is it even possible to do it?</p>
<p>Well, one option could be to write a comment describing the state of the board in each case:</p>
<pre><code class="hljs language-python">game = GameOfLife({
    <span class="hljs-comment"># - - - -</span>
    <span class="hljs-comment"># - - * -</span>
    <span class="hljs-comment"># - * - -</span>
    <span class="hljs-comment"># - * - -</span>
    <span class="hljs-comment"># - - - -</span>
    Position(<span class="hljs-number">1</span>, <span class="hljs-number">3</span>), Position(<span class="hljs-number">1</span>, <span class="hljs-number">2</span>), Position(<span class="hljs-number">2</span>, <span class="hljs-number">1</span>)
})

game.advance_generation()

<span class="hljs-variable language_">self</span>.assertEquals(game.alive_cells(), {
    <span class="hljs-comment"># - - - -</span>
    <span class="hljs-comment"># - - - -</span>
    <span class="hljs-comment"># - * * -</span>
    <span class="hljs-comment"># - - - -</span>
    <span class="hljs-comment"># - - - -</span>
    Position(<span class="hljs-number">1</span>, <span class="hljs-number">2</span>), Position(<span class="hljs-number">2</span>, <span class="hljs-number">2</span>)
})
</code></pre>
<p>However, despite this being easy to do, we obviously have the main inconvenience of comments we’ve discussed before: nothing prevents them to expressing something different from what the code does.</p>
<blockquote>
<p>💭 You can think about this problem before reading on.</p>
</blockquote>
<h2>A possible tool</h2>
<p>As I was thinking about this, fantasizing about what the best solution could be, I thought about the possibility of making an integrated tool to inspect code that defines a set of positions. So, I got to work and made a series of prototypes; here I’ll show you the last one.</p>
<p>When your cursor is inside a set literal that has <code>Position</code>s as elements, you can inspect the expression to see a representation of the board:
<img src="\${mdLink0}" alt="An animated GIF showing a usage example of the tool. When selecting an expression and choosing to inspect it, the tool depicts a grid with alive cells at specific positions, such as (1, 3), (1, 2), and (2, 1), based on the inspected expression."></p>
<p>You can also interactively change the alive cells —i.e. the positions that are elements of the set:
<img src="\${mdLink1}" alt="An animated GIF that shows that if you click on the shown cells, their state is toggled between alive and dead (by adding or removing them from the set)."></p>
<p>As a result, this provides the best of both worlds: a visual representation of the board that’s based on the actual code (and therefore cannot diverge and become outdated), and a back and forth connection between the graphical view and the textual view.</p>
<p>The tool works for Python in the JetBrains’ IDEs (like IntelliJ).
I programmed it in Kotlin, using the <a href="https://github.com/dkandalov/live-plugin">LivePlugin plugin</a> to be able to develop it interactively.
The source is available <a href="https://gist.github.com/JavierGelatti/99fc50921c71b78c05c12908ff69c240">here</a>.</p>
<h2>A different way to tackle the problem</h2>
<p>Another option to solve our original problem could be to make a test-specific mini-DSL<sup class="footnote-ref"><a href="#fn3" id="fnref3">[3]</a></sup> to express the board states:</p>
<pre><code class="hljs language-python">game = <span class="hljs-variable language_">self</span>.game_with_alive_cells(<span class="hljs-string">&quot;&quot;&quot;
    - - - -
    - - * -
    - * - -
    - * - -
    - - - -
&quot;&quot;&quot;</span>)

game.advance_generation()

<span class="hljs-variable language_">self</span>.assert_alive_cells_in(game, <span class="hljs-string">&quot;&quot;&quot;
    - - - -
    - - - -
    - * * -
    - - - -
    - - - -
&quot;&quot;&quot;</span>)
</code></pre>
<p>In this case, we’d have to implement methods for <code>game_with_alive_cells</code> and <code>assert_alive_cells_in</code> so that they parse the provided string and create the necessary <code>set</code>s of positions. With this, we’ve also created a view so that the result of the code is not independent of the representation (therefore preventing inconsistencies). Of course, the parsing logic should be tested separately.</p>
<p>One characteristic of this approach is that the interface that we’ve defined to see the board state is text-based. This gives us an advantage in terms of easiness of implementation: the tools we have and are accustomed to are text-based, and the APIs offered by programming languages implement lots of useful text-manipulation functions. However, this also constraints us: we cannot interact with the view except through text-manipulation commands, and cannot implement more complex views that don’t map well to a text representation.</p>
<h2>Closing remarks</h2>
<p>We started by exploring some considerations regarding a specific case where the popular advice of “writing self-documenting code” and “avoid code comments” is not immediate to implement. One interesting aspect of this exploration was the possibility to think about better integrated tools, that are tailor-made to tackle a specific problem. The contrast of the two presented solutions gives us material to think about the bias we have for text-based tools.</p>
<hr class="footnotes-sep">
<section class="footnotes">
<ol class="footnotes-list">
<li id="fn1" class="footnote-item"><p>A definition of self-documenting code can be found in the <a href="https://wiki.c2.com/?SelfDocumentingCode">C2 Wiki</a>:</p>
<blockquote>
<p>Code that allegedly explains itself without the need for extraneous documentation, like flowcharts, UML diagrams, process-flow state diagrams, etc.</p>
</blockquote>
 <a href="#fnref1" class="footnote-backref">↩︎</a></li>
<li id="fn2" class="footnote-item"><p>Such as the article from F. Wen, C. Nagy, G. Bavota and M. Lanza, “A Large-Scale Empirical Study on Code-Comment Inconsistencies,” 2019 IEEE/ACM 27th International Conference on Program Comprehension (ICPC), Montreal, QC, Canada, 2019.
<a href="https://csnagy.github.io/research/pdfs/2019/Wen2019-preprint.pdf">PDF</a>. <a href="#fnref2" class="footnote-backref">↩︎</a></p>
</li>
<li id="fn3" class="footnote-item"><p>DSL means Domain-Specific Language. In this context, I’m referring to a text-based representation of the state of the board (using specific —albeit very simple— syntax inside a string literal), in order to make it easily readable. <a href="#fnref3" class="footnote-backref">↩︎</a></p>
</li>
</ol>
</section>
`,L=`<h1>Automated refactorings for Godot</h1>
<p>A couple of friends (<a href="https://github.com/JuanFdS">@JuanFdS</a> and <a href="https://github.com/calvogenerico">@calvogenerico</a>) and me started to implement automated refactorings for the Godot IDE.</p>
<p>The work is in progress, and it isn’t production-ready yet. Nonetheless, the code is available <a href="https://github.com/JuanFdS/godot-refactors">on GitHub</a>. The backend (i.e., the parser and the code transformations) is written in Rust using pest, and the frontend (i.e., the user interface) is in GDScript.</p>
<h2>Some refactorings examples</h2>
<p>Extracting a variable:
<img src="\${mdLink0}" alt="godot-extract-variable.gif"></p>
<p>Inlining a variable:
<img src="\${mdLink1}" alt="godot-inline-variable.gif"></p>
<p>Toggling the <code>@export</code> annotation:
<img src="\${mdLink2}" alt="godot-toggle-export.gif"></p>
<p>Toggling exposing a function with the <code>@export_tool_button</code> annotation + variable:
<img src="\${mdLink3}" alt="godot-toggle-tool-button.gif"></p>
`,S=`<h1>Facundo Javier Gelatti</h1>
<figure class="float-left">
    <img
        alt="Profile photo of Facundo Javier Gelatti, which displays him in a home study, standing before a blurred bookshelf. He wears a black t-shirt and glasses, and is gazing directly ahead."
        src="/images/profile.jpg"
    />
</figure>
<h2>About me</h2>
<p>I’m a software developer and computer science educator based in Buenos Aires, Argentina. Welcome to <a href="./index.md">my website</a>.</p>
<p>I’m passionate about creating tools that make programming more accessible, enjoyable, and humane. With over 7 years of professional experience, I combine rigorous software engineering practices with thoughtful reflection on how developers interact with their programming environments.
I’m particularly interested in creating interactive systems that augment rather than replace human capabilities, helping developers think through problems while preserving their autonomy and creativity.</p>
<p>I’m also a computer science professor at Universidad Nacional de Quilmes (UNQ) in Buenos Aires, where I teach an advanced object-oriented programming course with an emphasis on hands-on learning and critical thinking.
My teaching approach explores the intersection of practical software development skills with broader perspectives from social sciences, including computer science history, programming as theory-building, and the evolution of the development tools and computing environments we use.</p>
<p>Through my open source projects, I investigate ways to make programming more expressive and delightful.
They range from experimental programming environments and educational systems for exploring theoretical concepts, to practical development tools: my research interests span from industrial software engineering to theoretical computer science, with a particular focus on how different programming paradigms and interactive environments can enhance our ability to understand and modify the systems we build and use.
I hope my work reflects my commitment to both the craft of software development and the art of teaching it to others.</p>
<p>You can find me on:</p>
<ul>
<li><a href="https://www.linkedin.com/in/facundo-javier-gelatti-0b6668162/">LinkedIn</a></li>
<li><a href="https://github.com/javiergelatti/">GitHub</a></li>
<li><a href="https://bsky.app/profile/javiergelatti.bsky.social">Bluesky</a></li>
</ul>
<p>There’s more information about my recent projects and talks below 👇</p>
<h2>Projects &amp; explorations</h2>
<section class="projects">
  <a href="./logica-combinatoria.md">
    <img src="\${mdLink0}" alt="Combinatory logic formulae" />
    <h3>Combinatory logic interactive proofs</h3>
  </a>
  <a href="./self-js.md">
    <img src="\${mdLink1}" alt="JavaScript objects as boxes with arrows" />
    <h3>A dynamic JavaScript environment</h3>
  </a>
  <a href="./ruby-refactorings.md">
    <img src="\${mdLink2}" alt="Automated refactorings for Ruby" />
    <h3>Automated refactorings for Ruby</h3>
  </a>
  <a href="./game-of-life.md">
    <img src="\${mdLink3}" alt="Game of life board IDE-integrated inspector" />
    <h3>Game of life inspector</h3>
  </a>
</section>
<hr>
<ul>
<li><a href="./chorded-keyset.md">Engelbart’s chorded keyset</a></li>
<li><a href="./lambda-calculus-editor.md">Lambda calculus expressions editor</a></li>
<li><a href="./ruby-live-typing.md">Ruby live typing</a></li>
<li><a href="./mini-alto.md">Mini Alto computer</a></li>
<li><a href="./godot-refactorings.md">Godot refactorings (WIP)</a></li>
<li><a href="./diagramas-colaboracion.md">UML object collaboration diagrams</a></li>
<li><a href="https://javiergelatti.github.io/graficador-fractales-complejos/">Mandelbrot/Julia set fractal visualizer</a></li>
<li>…</li>
</ul>
<hr>
<h2>Talks</h2>
<h3>Static Typing: TypeScript, Java, and other mysteries — DevSummit AR, July 2024</h3>
<p><em>Original title</em>: “Tipado estático: Typescript, Java y otros misterios”</p>
<p>An exploration of static typing fundamentals through TypeScript and Java, discussing type systems and their different approaches (nominal and structural typing), with concrete examples. Watch it <a href="https://youtu.be/gHZspMygw54?t=726">on YouTube</a></p>
<h3>The History of JavaScript — 10Pines Technical Talks, 2024</h3>
<p><em>Original title</em>: “Comentarios sobre la Historia de Javascript”</p>
<p>A journey through JavaScript’s history, focusing on its creation and early years, exploring the socio-historical aspects of technology development. Available <a href="https://youtu.be/-V3p84ne3zk">on YouTube</a></p>
<h3>Values and Objects: Welcome to the Tower of Babel — Smalltalks 2023</h3>
<p><em>Original title</em>: “Valores y Objetos: bienvenidos a la Torre de Babel”</p>
<p>With Máximo Prieto. A critical analysis of programming terms such as Value Object, exploring their conceptual foundations and usage. Watch <a href="https://youtu.be/tH2ruvogNXg">on YouTube</a></p>
<h3>Adding TCR to Smalltalk — Smalltalks 2022</h3>
<p>An exploration of implementing the “Test &amp;&amp; Commit || Revert” (TCR) workflow in Smalltalk, discussing challenges and implications. Available <a href="https://youtu.be/SqKv89e9PUc">on YouTube</a></p>
<h3>Understanding React Constructively — 10PinesConf, September 2022</h3>
<p><em>Original title</em>: “Entendiendo React constructivamente”</p>
<p>A deep dive into React’s internals by building a subset of its functionality using TypeScript with Test-Driven development, focusing on precise definitions and common questions.</p>
<h3><code>wollokVM = run . compile . parse</code> — 10PinesConf, September 2021</h3>
<p>An exploration of implementing a virtual machine for an object-oriented language (Wollok) using functional programming in Haskell. Watch <a href="https://youtu.be/dsefMhmwhdo">on YouTube</a></p>
<h3>Prolog, Metacircular Interpreters and this Talk itself — 10PinesConf, September 2021</h3>
<p><em>Original title</em>: “Prolog, intérpretes metacirculares y esta charla”</p>
<p>We discuss what does it mean for an interpreter to be meta-circular, and implement one in/for the Prolog language.</p>
<h3>Implementing a Debugger in Ruby — 10PinesConf, September 2020</h3>
<p><em>Original title</em>: “Implementando un debugger en Ruby”</p>
<p>We build a Ruby debugger from scratch, using Test-Driven Development.</p>
<h3>Demystifying Code Manipulation Tools — Smalltalks 2019</h3>
<p><em>Original title</em>: “Desmitificando la creación de herramientas para manipular código”</p>
<p>An exploration of building tools for code manipulation in Smalltalk, covering abstract syntax trees and practical metaprogramming examples. Available <a href="https://youtu.be/k6ETxNOZNbE">on YouTube</a></p>
<h3>Ruby Live Typing — 10PinesConf, September 2019</h3>
<p>Discussing implications and implementation details of Live Typing in Ruby, the system described <a href="./ruby-live-typing.md">here</a>.</p>
<h3>The Y Combinator in Smalltalk — Smalltalks 2018</h3>
<p>A practical approach to understanding and implementing the Y combinator using Smalltalk, based on applying a sequence of automated refactorings to a recursive block. Watch <a href="https://youtu.be/Ov8dVvoGiPY">on YouTube</a></p>
<h3>Compiler Hacking: Revisiting “Reflections on Trusting Trust” — Tucumán Hack Weekend, 2018</h3>
<p><em>Original title</em>: Hacking en compiladores: Revisitando “Reflections on Trusting Trust”</p>
<p>We revisit Ken Thompson “Reflections on Trusting Trust” paper, hacking a C compiler live. <a href="https://github.com/javierGelatti/TrustingTrust">GitHub Repository</a></p>
<h3>Object-Oriented Programming Insights Through Booleans — St. John’s University, 2018</h3>
<p>Talk about implementing boolean values and operations using only objects, as part of the Friends of Fulbright scholarship in New York.</p>
<h3>Reflecting on the Object Paradigm — IEEE Tucumán Student Branch, 2018</h3>
<p><em>Original title</em>: “Reflexionando sobre el paradigma de objetos”</p>
<p>Implementing Booleans with objects and Test-Driven Development.</p>
<h3>Introduction to Lambda Calculus using Smalltalk — Smalltalks 2017</h3>
<p>An exploration of Lambda Calculus concepts implemented in Smalltalk, exploring its basic principles while live programming the encoding of different structures and operations. Watch it <a href="https://youtu.be/Sl78pEdLp-g">on YouTube</a></p>
<h3>Introduction to Code Refactoring — IEEE Tucumán Student Branch, 2017</h3>
<p><em>Original title</em>: “Introducción a la refactorización de código”</p>
<p>An introduction to the agile practice for improving design, with practical examples using IntelliJ IDEA.</p>
<h3>C-Test Simulator with Pharo and Amber Smalltalk — Smalltalks 2016</h3>
<p>An implementation of a C-Test simulator —a tool to simulate exams for the german language— in Smalltalk, using Amber and Pharo. Available <a href="https://youtu.be/YmU3ybnnPOE?list=PLCGAAdUizzH06AkHg6_UxZ6QZBgz84yAc">on YouTube</a></p>
<h3>Introduction to Git — IEEE Tucumán Student Branch, 2016</h3>
<p><em>Original title</em>: “Curso introductorio de Git”</p>
<p>A mini-course on the version control system for software development.</p>
`,C=`<h1>Mini Interactive λ-Calculus Expression Editor</h1>
<p>I developed an interactive editor that makes lambda calculus more tangible by treating expressions as manipulable structures.
The editor, available <a href="https://javiergelatti.github.io/LambdaJS">here</a>, provides direct manipulation capabilities that respect the structure of valid terms. The tool was developed using JavaScript, and the code is available <a href="https://github.com/javiergelatti/LambdaJS">on GitHub</a>.</p>
<hr>
<p>To build an expression, you use placeholders for not-yet-determined subexpressions, called “holes”. When interacting with a hole, users are presented with the three fundamental building blocks of lambda calculus to fill it:</p>
<ul>
<li>Variables (e.g. <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>x</mi></mrow><annotation encoding="application/x-tex">x</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.4306em;"></span><span class="mord mathnormal">x</span></span></span></span> or <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>y</mi></mrow><annotation encoding="application/x-tex">y</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.625em;vertical-align:-0.1944em;"></span><span class="mord mathnormal" style="margin-right:0.03588em;">y</span></span></span></span>)</li>
<li>Abstractions (i.e., lambda expressions, e.g. <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>λ</mi><mi>x</mi><mi mathvariant="normal">.</mi><mi>x</mi></mrow><annotation encoding="application/x-tex">\\lambda x. x</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6944em;"></span><span class="mord mathnormal">λ</span><span class="mord mathnormal">x</span><span class="mord">.</span><span class="mord mathnormal">x</span></span></span></span>)</li>
<li>Function application (e.g. <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mo stretchy="false">(</mo><mi>f</mi><mtext>  </mtext><mi>x</mi><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">(f\\;x)</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mopen">(</span><span class="mord mathnormal" style="margin-right:0.10764em;">f</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mord mathnormal">x</span><span class="mclose">)</span></span></span></span>)</li>
</ul>
<p><img src="\${mdLink0}" alt="lambda-filling-holes.gif"></p>
<p>The user interface only presents valid expression transformations, while still allowing to build any possible term; so an expression can be constructed iff it is syntactically valid.</p>
<hr>
<p>Clicking any part of a non-hole expression presents operations to:</p>
<ul>
<li>Remove the expression (replacing it with a hole)</li>
<li>Wrap it in a lambda abstraction</li>
<li>Wrap it in an application (as either function or argument)</li>
</ul>
<p><img src="\${mdLink1}" alt="lambda-transforming-expressions.gif"></p>
<p>Additionally, bound variables can be renamed by clicking their binding occurrence (next to the <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>λ</mi></mrow><annotation encoding="application/x-tex">\\lambda</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6944em;"></span><span class="mord mathnormal">λ</span></span></span></span> symbol), automatically updating all corresponding references. It does not avoid variable capturing, so this implementation cannot be considered as a refactoring in general.</p>
<p><img src="\${mdLink2}" alt="lambda-renaming.gif"></p>
<p>The editor can also perform a transitive beta-reduction of the current expression. The result remains in the editor, so the reduced form can be further manipulated.</p>
<p><img src="\${mdLink3}" alt="lambda-evaluation.gif"></p>
`,P=`<h1>Combinatory logic interactive proof system</h1>
<h2>Background &amp; motivation</h2>
<figure class="float-right">
    <img
        alt="Cover of the book 'To Mock a Mockingbird', by Raymond Smullyan. The cover reads 'to mock a Mockingbird and other logic puzzles' and has, among other things, a picture of a bird"
        src="/images/to-mock-a-mockingbird-cover.jpg"
    />
    <figcaption>Book cover of "To Mock a Mockingbird"</figcaption>
</figure>
<p>Recently, I’ve been diving into <em>To Mock a Mockingbird</em> by Raymond Smullyan, a playful yet rigorous puzzle book that introduces combinatory logic<sup class="footnote-ref"><a href="#fn1" id="fnref1">[1]</a></sup> through different scenarios involving birds in a forest. The book challenges readers to solve increasingly complex logical problems, blending humor with abstract mathematical concepts.</p>
<p>While working through the puzzles, I found myself repeatedly writing out similar lines of equations on paper, making small changes by substituting terms and expanding definitions as I progressed. This manual process of iterative steps is characteristic of math exercises done in high school and college coursework, such as solving equations or factorizing polynomials.
<br />
This is an example from my notebook:
<img src="\${mdLink0}" alt="A sheet of paper with some annotations, that illustrates a step-by-step process of iteratively modifying equations. Each line builds on the previous with small changes, reflecting the incremental reasoning. For example: C x = A(B x); C x = A(M x); C x = A(x x); C C = A(C C)"></p>
<p>Although this step-by-step process helps us recognize patterns and is necessary to solve the problem, I wondered if there might be a less tedious way to work through such deductions.</p>
<h2>An “automated” system?</h2>
<p>Many theorems of combinatory logic can be proven automatically using existing theorem provers. Similarly, automated tools can solve any system of linear equations through linear algebra and instantly factorize polynomials.</p>
<p>The thing is, I didn’t want to <em>fully automate</em> the process, as I still wanted to solve the puzzles myself.
Instead, I wanted a tool that would help me go through <em>my</em> process, only handling the tedious aspects —such as variable substitution— rather than solving the problem for me.</p>
<p>So, I went through and decomposed the proofs I had made into atomic steps which can be combined to form the proof. While choosing these steps requires thought, executing them is a mechanical process.</p>
<blockquote>
<p>For the following sections, some basic knowledge of first-order logic is required, particularly understanding the meaning of universal (<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi mathvariant="normal">∀</mi></mrow><annotation encoding="application/x-tex">\\forall</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6944em;"></span><span class="mord">∀</span></span></span></span>) and existential (<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi mathvariant="normal">∃</mi></mrow><annotation encoding="application/x-tex">\\exists</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6944em;"></span><span class="mord">∃</span></span></span></span>) quantifiers.</p>
</blockquote>
<h2>Steps &amp; transformations</h2>
<p>For example, consider this axiom that states that something holds for every <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>x</mi></mrow><annotation encoding="application/x-tex">x</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.4306em;"></span><span class="mord mathnormal">x</span></span></span></span>:</p>
<p class='katex-block'><span class="katex-display"><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><semantics><mrow><mo stretchy="false">(</mo><mi mathvariant="normal">∀</mi><mi>x</mi><mo stretchy="false">)</mo><mtext>  </mtext><mi>M</mi><mtext> </mtext><mi>x</mi><mo>=</mo><mi>x</mi><mtext> </mtext><mi>x</mi></mrow><annotation encoding="application/x-tex">(\\forall x)\\; M\\,x = x\\,x
</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mopen">(</span><span class="mord">∀</span><span class="mord mathnormal">x</span><span class="mclose">)</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mord mathnormal" style="margin-right:0.10903em;">M</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord mathnormal">x</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.4306em;"></span><span class="mord mathnormal">x</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord mathnormal">x</span></span></span></span></span></p>
<p>Then, this must hold for any arbitrary value —or <em>bird</em><sup class="footnote-ref"><a href="#fn2" id="fnref2">[2]</a></sup>— we substitute for <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>x</mi></mrow><annotation encoding="application/x-tex">x</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.4306em;"></span><span class="mord mathnormal">x</span></span></span></span>, let’s say <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mo stretchy="false">(</mo><mi>A</mi><mtext> </mtext><mi>B</mi><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">(A\\,B)</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mopen">(</span><span class="mord mathnormal">A</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord mathnormal" style="margin-right:0.05017em;">B</span><span class="mclose">)</span></span></span></span>. So, we can perform the following transformation:</p>
<p class='katex-block'><span class="katex-display"><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><semantics><mtable rowspacing="0.25em" columnalign="right left" columnspacing="0em"><mtr><mtd><mstyle scriptlevel="0" displaystyle="true"><mrow><mo stretchy="false">(</mo><mi mathvariant="normal">∀</mi><mi>x</mi></mrow></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="true"><mrow><mrow></mrow><mo stretchy="false">)</mo><mtext>  </mtext><mi>M</mi><mtext> </mtext><mi>x</mi><mo>=</mo><mi>x</mi><mtext> </mtext><mi>x</mi></mrow></mstyle></mtd></mtr><mtr><mtd><mstyle scriptlevel="0" displaystyle="true"><mo fence="false" stretchy="true" minsize="1.2em" maxsize="1.2em" lspace="0em" rspace="0em">↓</mo></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="true"><mrow><mrow></mrow><mstyle mathsize="0.7em"><mspace width="0.3253em"/><mi>x</mi><mo><mi mathvariant="normal">≔</mi></mo><mo stretchy="false">(</mo><mi>A</mi><mspace width="0.1952em"/><mi>B</mi><mo stretchy="false">)</mo></mstyle></mrow></mstyle></mtd></mtr><mtr><mtd><mstyle scriptlevel="0" displaystyle="true"><mrow><mi>M</mi><mtext> </mtext><mo stretchy="false">(</mo></mrow></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="true"><mrow><mrow></mrow><mi>A</mi><mtext> </mtext><mi>B</mi><mo stretchy="false">)</mo><mo>=</mo><mo stretchy="false">(</mo><mi>A</mi><mtext> </mtext><mi>B</mi><mo stretchy="false">)</mo><mtext> </mtext><mo stretchy="false">(</mo><mi>A</mi><mtext> </mtext><mi>B</mi><mo stretchy="false">)</mo></mrow></mstyle></mtd></mtr></mtable><annotation encoding="application/x-tex">\\begin{align*}
(\\forall x&amp;)\\; M\\,x = x\\,x \\\\
\\big\\darr&amp;\\scriptsize\\; x \\coloneqq (A\\,B) \\\\
M\\,(&amp;A\\,B) = (A\\,B)\\,(A\\,B)
\\end{align*}
</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:4.511em;vertical-align:-2.0055em;"></span><span class="mord"><span class="mtable"><span class="col-align-r"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:2.5055em;"><span style="top:-4.6655em;"><span class="pstrut" style="height:3em;"></span><span class="mord"><span class="mopen">(</span><span class="mord">∀</span><span class="mord mathnormal">x</span></span></span><span style="top:-3.1545em;"><span class="pstrut" style="height:3em;"></span><span class="mord"><span class="mord"><span class="delimsizing mult"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.851em;"><span style="top:-2.251em;"><span class="pstrut" style="height:2.601em;"></span><span class="delimsizinginner delim-size1"><span>↓</span></span></span><span style="top:-2.843em;"><span class="pstrut" style="height:2.601em;"></span><span style="height:0.016em;width:0.6667em;"><svg xmlns="http://www.w3.org/2000/svg" width="0.6667em" height="0.016em" style="width:0.6667em" viewBox="0 0 666.67 16" preserveAspectRatio="xMinYMin"><path d="M312 0 H355 V16 H312z M312 0 H355 V16 H312z"/></svg></span></span><span style="top:-2.851em;"><span class="pstrut" style="height:2.601em;"></span><span class="delimsizinginner delim-size1"><span>⏐</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.35em;"><span></span></span></span></span></span></span></span></span><span style="top:-1.6545em;"><span class="pstrut" style="height:3em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.10903em;">M</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mopen">(</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:2.0055em;"><span></span></span></span></span></span><span class="col-align-l"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:2.5055em;"><span style="top:-4.6655em;"><span class="pstrut" style="height:3em;"></span><span class="mord"><span class="mord"></span><span class="mclose">)</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mord mathnormal" style="margin-right:0.10903em;">M</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord mathnormal">x</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mord mathnormal">x</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord mathnormal">x</span></span></span><span style="top:-3.1545em;"><span class="pstrut" style="height:3em;"></span><span class="mord"><span class="mord"></span><span class="mspace sizing reset-size6 size3" style="margin-right:0.3253em;"></span><span class="mord mathnormal sizing reset-size6 size3">x</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel sizing reset-size6 size3"><span class="mrel"><span class="mop" style="position:relative;top:-0.0347em;">:</span></span><span class="mrel"><span class="mspace" style="margin-right:-0.0781em;"></span></span><span class="mrel">=</span></span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mopen sizing reset-size6 size3">(</span><span class="mord mathnormal sizing reset-size6 size3">A</span><span class="mspace sizing reset-size6 size3" style="margin-right:0.1952em;"></span><span class="mord mathnormal sizing reset-size6 size3" style="margin-right:0.05017em;">B</span><span class="mclose sizing reset-size6 size3">)</span></span></span><span style="top:-1.6545em;"><span class="pstrut" style="height:3em;"></span><span class="mord"><span class="mord"></span><span class="mord mathnormal">A</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord mathnormal" style="margin-right:0.05017em;">B</span><span class="mclose">)</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mopen">(</span><span class="mord mathnormal">A</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord mathnormal" style="margin-right:0.05017em;">B</span><span class="mclose">)</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mopen">(</span><span class="mord mathnormal">A</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord mathnormal" style="margin-right:0.05017em;">B</span><span class="mclose">)</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:2.0055em;"><span></span></span></span></span></span></span></span></span></span></span></span></p>
<p>This step is tedious and mechanical, making it ideal for automation. We can generalize it and call it a “for-all elimination”.</p>
<p>Here are the basic types of steps/transformations I first identified<sup class="footnote-ref"><a href="#fn3" id="fnref3">[3]</a></sup>:</p>
<ul>
<li>For-all elimination: <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mo stretchy="false">(</mo><mi mathvariant="normal">∀</mi><mi>x</mi><mo stretchy="false">)</mo><mtext>  </mtext><mtext mathvariant="bold-sans-serif">P</mtext><mo stretchy="false">(</mo><mi>x</mi><mo stretchy="false">)</mo><mo>⟶</mo><mtext mathvariant="bold-sans-serif">P</mtext><mo stretchy="false">(</mo><mtext mathvariant="bold-sans-serif">x</mtext><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">(\\forall x)\\;\\textsf{\\textbf{P}}(x) \\longrightarrow \\textsf{\\textbf{P}}(\\textsf{\\textbf{x}})</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mopen">(</span><span class="mord">∀</span><span class="mord mathnormal">x</span><span class="mclose">)</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mord text"><span class="mord text"><span class="mord textsf textbf">P</span></span></span><span class="mopen">(</span><span class="mord mathnormal">x</span><span class="mclose">)</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">⟶</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord text"><span class="mord text"><span class="mord textsf textbf">P</span></span></span><span class="mopen">(</span><span class="mord text"><span class="mord text"><span class="mord textsf textbf">x</span></span></span><span class="mclose">)</span></span></span></span>.</li>
<li>For-all introduction: arbitrary <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>A</mi></mrow><annotation encoding="application/x-tex">A</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal">A</span></span></span></span>, <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mtext mathvariant="bold-sans-serif">P</mtext><mo stretchy="false">(</mo><mi>A</mi><mo stretchy="false">)</mo><mo>⟶</mo><mo stretchy="false">(</mo><mi mathvariant="normal">∀</mi><mi>x</mi><mo stretchy="false">)</mo><mtext>  </mtext><mtext mathvariant="bold-sans-serif">P</mtext><mo stretchy="false">(</mo><mi>x</mi><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">\\textsf{\\textbf{P}}(A) \\longrightarrow (\\forall x)\\;\\textsf{\\textbf{P}}(x)</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord text"><span class="mord text"><span class="mord textsf textbf">P</span></span></span><span class="mopen">(</span><span class="mord mathnormal">A</span><span class="mclose">)</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">⟶</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mopen">(</span><span class="mord">∀</span><span class="mord mathnormal">x</span><span class="mclose">)</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mord text"><span class="mord text"><span class="mord textsf textbf">P</span></span></span><span class="mopen">(</span><span class="mord mathnormal">x</span><span class="mclose">)</span></span></span></span>.</li>
<li>Exists elimination: <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mo stretchy="false">(</mo><mi mathvariant="normal">∃</mi><mi>x</mi><mo stretchy="false">)</mo><mtext>  </mtext><mtext mathvariant="bold-sans-serif">P</mtext><mo stretchy="false">(</mo><mi>x</mi><mo stretchy="false">)</mo><mo>⟶</mo></mrow><annotation encoding="application/x-tex">(\\exists x)\\;\\textsf{\\textbf{P}}(x) \\longrightarrow</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mopen">(</span><span class="mord">∃</span><span class="mord mathnormal">x</span><span class="mclose">)</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mord text"><span class="mord text"><span class="mord textsf textbf">P</span></span></span><span class="mopen">(</span><span class="mord mathnormal">x</span><span class="mclose">)</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">⟶</span></span></span></span> let <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>A</mi></mrow><annotation encoding="application/x-tex">A</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal">A</span></span></span></span> such that <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mtext mathvariant="bold-sans-serif">P</mtext><mo stretchy="false">(</mo><mi>A</mi><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">\\textsf{\\textbf{P}}(A)</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord text"><span class="mord text"><span class="mord textsf textbf">P</span></span></span><span class="mopen">(</span><span class="mord mathnormal">A</span><span class="mclose">)</span></span></span></span>.</li>
<li>Exists introduction: <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>P</mi><mo stretchy="false">(</mo><mtext mathvariant="bold-sans-serif">x</mtext><mo stretchy="false">)</mo><mo>⟶</mo><mo stretchy="false">(</mo><mi mathvariant="normal">∃</mi><mi>x</mi><mo stretchy="false">)</mo><mtext>  </mtext><mtext mathvariant="bold-sans-serif">P</mtext><mo stretchy="false">(</mo><mi>x</mi><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">P(\\textsf{\\textbf{x}}) \\longrightarrow (\\exists x)\\;\\textsf{\\textbf{P}}(x)</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.13889em;">P</span><span class="mopen">(</span><span class="mord text"><span class="mord text"><span class="mord textsf textbf">x</span></span></span><span class="mclose">)</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">⟶</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mopen">(</span><span class="mord">∃</span><span class="mord mathnormal">x</span><span class="mclose">)</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mord text"><span class="mord text"><span class="mord textsf textbf">P</span></span></span><span class="mopen">(</span><span class="mord mathnormal">x</span><span class="mclose">)</span></span></span></span>.</li>
<li>Rewriting: given <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mtext mathvariant="bold-sans-serif">x</mtext><mo>=</mo><mtext mathvariant="bold-sans-serif">y</mtext></mrow><annotation encoding="application/x-tex">\\textsf{\\textbf{x}} = \\textsf{\\textbf{y}}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.4583em;"></span><span class="mord text"><span class="mord text"><span class="mord textsf textbf">x</span></span></span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.6528em;vertical-align:-0.1944em;"></span><span class="mord text"><span class="mord text"><span class="mord textsf textbf">y</span></span></span></span></span></span>, then <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mtext mathvariant="bold-sans-serif">x</mtext><mo>→</mo><mtext mathvariant="bold-sans-serif">y</mtext></mrow><annotation encoding="application/x-tex">\\textsf{\\textbf{x}} \\rightarrow \\textsf{\\textbf{y}}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.4583em;"></span><span class="mord text"><span class="mord text"><span class="mord textsf textbf">x</span></span></span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">→</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.6528em;vertical-align:-0.1944em;"></span><span class="mord text"><span class="mord text"><span class="mord textsf textbf">y</span></span></span></span></span></span> and <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mtext mathvariant="bold-sans-serif">y</mtext><mo>→</mo><mtext mathvariant="bold-sans-serif">x</mtext></mrow><annotation encoding="application/x-tex">\\textsf{\\textbf{y}} \\rightarrow \\textsf{\\textbf{x}}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6528em;vertical-align:-0.1944em;"></span><span class="mord text"><span class="mord text"><span class="mord textsf textbf">y</span></span></span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">→</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.4583em;"></span><span class="mord text"><span class="mord text"><span class="mord textsf textbf">x</span></span></span></span></span></span>.</li>
<li>Bound variable renaming: <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mo stretchy="false">(</mo><mi mathvariant="normal">∀</mi><mi>x</mi><mo stretchy="false">)</mo><mtext>  </mtext><mtext mathvariant="bold-sans-serif">P</mtext><mo stretchy="false">(</mo><mi>x</mi><mo stretchy="false">)</mo><mo>⟶</mo><mo stretchy="false">(</mo><mi mathvariant="normal">∀</mi><mi>y</mi><mo stretchy="false">)</mo><mtext>  </mtext><mtext mathvariant="bold-sans-serif">P</mtext><mo stretchy="false">(</mo><mi>y</mi><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">(\\forall x)\\;\\textsf{\\textbf{P}}(x) \\longrightarrow (\\forall y)\\;\\textsf{\\textbf{P}}(y)</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mopen">(</span><span class="mord">∀</span><span class="mord mathnormal">x</span><span class="mclose">)</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mord text"><span class="mord text"><span class="mord textsf textbf">P</span></span></span><span class="mopen">(</span><span class="mord mathnormal">x</span><span class="mclose">)</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">⟶</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mopen">(</span><span class="mord">∀</span><span class="mord mathnormal" style="margin-right:0.03588em;">y</span><span class="mclose">)</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mord text"><span class="mord text"><span class="mord textsf textbf">P</span></span></span><span class="mopen">(</span><span class="mord mathnormal" style="margin-right:0.03588em;">y</span><span class="mclose">)</span></span></span></span>; <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mo stretchy="false">(</mo><mi mathvariant="normal">∃</mi><mi>x</mi><mo stretchy="false">)</mo><mtext>  </mtext><mtext mathvariant="bold-sans-serif">P</mtext><mo stretchy="false">(</mo><mi>x</mi><mo stretchy="false">)</mo><mo>⟶</mo><mo stretchy="false">(</mo><mi mathvariant="normal">∃</mi><mi>y</mi><mo stretchy="false">)</mo><mtext>  </mtext><mtext mathvariant="bold-sans-serif">P</mtext><mo stretchy="false">(</mo><mi>y</mi><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">(\\exists x)\\;\\textsf{\\textbf{P}}(x) \\longrightarrow (\\exists y)\\;\\textsf{\\textbf{P}}(y)</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mopen">(</span><span class="mord">∃</span><span class="mord mathnormal">x</span><span class="mclose">)</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mord text"><span class="mord text"><span class="mord textsf textbf">P</span></span></span><span class="mopen">(</span><span class="mord mathnormal">x</span><span class="mclose">)</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">⟶</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mopen">(</span><span class="mord">∃</span><span class="mord mathnormal" style="margin-right:0.03588em;">y</span><span class="mclose">)</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mord text"><span class="mord text"><span class="mord textsf textbf">P</span></span></span><span class="mopen">(</span><span class="mord mathnormal" style="margin-right:0.03588em;">y</span><span class="mclose">)</span></span></span></span>.</li>
</ul>
<h2>The system</h2>
<p>I then implemented an interactive system that can be used to carry out proofs.
Here are some examples of the possible interactions.</p>
<h3>For-all elimination</h3>
<p>To eliminate a universal quantifier (that is, to apply it to a particular expression), you have to drop the expression over the binder.
While you make this interaction, all occurrences of the variable are highlighted. When the quantifier is applied, a new theorem is created, referencing the proposition it depends upon:
<img src="\${mdLink1}" alt="Animation showing a line labeled A1: &quot;(∀x) M x = x x&quot;. The user drags &quot;M&quot; onto &quot;(∀x)&quot;, all &quot;x&quot;s are highlighted. When the &quot;M&quot; is dropped, a new line appears below, labeled T1: &quot;M M = M M ... A1&quot;. "></p>
<p>If the expression we wish to use as an argument is not already present, it can be manually built using an expression editor:
<img src="\${mdLink2}" alt="Animation starting with the same line as before: &quot;A1. (∀x) M x = x x&quot;. The user opens a &quot;Create new expression&quot; pane, drags a template &quot;(hole hole)&quot; to the canvas, fills both holes with &quot;M&quot;, then drags the resulting &quot;(M M)&quot; onto the &quot;(∀x)&quot; in A1 and a new line appears below: &quot;T1. M (M M) = (M M) (M M)&quot;."></p>
<h3>Rewriting</h3>
<p>To rewrite a term using an equation, you can drag and drop the equation member over the expression it matches with. The target expression is unified with the dropped equality member and then replaced by the other side of the equality.</p>
<p>Here’s an example combining a “for-all elimination” with two rewritings (one left-to-right, and the other right-to-left):
<img src="\${mdLink3}" alt="Animation starting with A1: &quot;I x = x&quot; and A2: &quot;(∀x) M x = x x&quot;. Applying A2 to I yields T1: &quot;M I = I I&quot;. Next, the user drags the &quot;I x&quot; side of the equality from A1 onto &quot;I I&quot; in T1, so the system rewrites it using A1’s rule (I x = x) to produce T2: &quot;M I = I&quot;. Finally, dragging the &quot;x&quot; side of the equation from A1 onto &quot;M I&quot; in T2 generates T3: &quot;I (M I) = I&quot;."></p>
<h3>Exists introduction</h3>
<p>If a condition holds for a value, then there exists a value for which that condition holds. So, to introduce an existential quantifier, you have to drop a free variable at the start of the expression:
<img src="\${mdLink4}" alt="Animation starting with the expression &quot;(∀x) M x = x x&quot;. Grabbing &quot;M&quot; makes a &quot;(∃M)&quot; indicator appear next to &quot;(∀x)&quot;. When dropping &quot;M&quot; over the indicator, the system generates a new theorem T1: &quot;(∃M) (∀x) M x = x x&quot;."></p>
<h3>For-all introduction</h3>
<p>Both for-all introduction and exists elimination require the concept of a “context” in which new variables are considered. In the case of the former, we first consider a new arbitrary combinator —ahem, <em>bird</em>—, and prove things about it. The resulting theorem will be valid for any bird, since we proved it for an arbitrary one without making any assumptions about it.</p>
<p>We begin by considering a new arbitrary bird, which becomes available in our context. We can use it to prove “sub-theorems”, until we reach a final expression. Then, we finish the proof, and a new universal quantifier will be added to the proven expression if it references the arbitrary bird:
<img src="\${mdLink5}" alt="Animation starting with axioms A1 and A2. The user clicks &quot;New variable&quot;, inputs &quot;A&quot;, and a header appears: &quot;Let A be an arbitrary bird&quot;. Applying A2 to A generates an indented sub-theorem T1.1: &quot;M A = A A&quot;. The user continues by making other previously described steps, generating more intermediate steps until the last line is &quot;M A = M (I A)&quot;. Finally, after clicking &quot;Finish proof&quot;, the system collapses the intermediate steps and adds a new theorem T1: &quot;(∀A) M A = M (I A)&quot;."></p>
<h3>Bound variable renaming</h3>
<p>The bound variable of any quantifier can be renamed by double-clicking on its binding occurrence, and all its occurrences will be automatically updated. For instance, following the last example, we can rename <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>A</mi></mrow><annotation encoding="application/x-tex">A</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal">A</span></span></span></span> to <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>x</mi></mrow><annotation encoding="application/x-tex">x</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.4306em;"></span><span class="mord mathnormal">x</span></span></span></span>:
<img src="\${mdLink6}" alt="Animation showing double-clicking the &quot;(∀A)&quot; in theorem T1 &quot;(∀A) M A = M (I A)&quot;, prompting a variable rename. The user inputs &quot;x&quot;, updating T1 in place to &quot;(∀x) M x = M (I x)&quot;."></p>
<p>If the new variable name would cause an unwanted variable capture, the inner conflicting variable is also automatically renamed by changing its subscript:
<img src="\${mdLink7}" alt="Animation showing double-clicking the &quot;(∀A)&quot; in theorem T1 &quot;(∀A) M A = M (I A)&quot;, prompting a variable rename. The user inputs &quot;x&quot;, updating T1 in place to &quot;(∀x) M x = M (I x)&quot;."></p>
<h3>Exists elimination</h3>
<p>When eliminating an existential quantifier, we introduce a new variable in the context such that the body of the existential holds. This is done by dropping an unused variable onto the binder:
<img src="\${mdLink8}" alt="Animation showing the theorem &quot;(∃C) (∀x) C x = A (M x)&quot;. Dragging &quot;C&quot;, an unused variable in the context, onto &quot;(∃C)&quot; adds a new line: &quot;Let C such that (∀x) C x = A (M x)&quot;"></p>
<h3>Expression naming</h3>
<p>Sometimes we need to introduce a new variable to name an expression. This is especially useful when preparing to introduce an existential quantifier for a complex expression.</p>
<p>To name an expression, we have to select it and click on “Name expression”. The resulting equality can then be used for rewriting other expressions.</p>
<p><img src="\${mdLink9}" alt="Animation showing selecting &quot;C C&quot; in the equation &quot;C C = A (C C)&quot;, then clicking on &quot;Name expression&quot; and inputting &quot;X&quot;. The system creates the equation &quot;X = C C&quot;, which is then used by the user to rewrite the original equation as &quot;X = A (C C)&quot;."></p>
<h2>Conclusions &amp; future work</h2>
<p>We’ve developed an interactive system for dynamically manipulating logical expressions to make deductions. The system can already be used to solve some puzzles from the book; for example, this is a proof of the first one<sup class="footnote-ref"><a href="#fn4" id="fnref4">[4]</a></sup>:</p>
<p><img src="\${mdLink10}" alt="Screenshot of the proof system showing axioms A1: (∀A)(∀B)(∃C)(∀x) C x = A (B x) (composition rule) and A2: (M x = x x), with derived theorem T1: (∀A)(∃X) X = A X. Sub-steps demonstrate for-all and exists eliminations, rewriting, and expression naming."></p>
<p>The system was developed in TypeScript using Test-Driven Development for the prover model.
You can find the code <a href="https://github.com/javiergelatti/logica-combinatoria">on GitHub</a> and try the system <a href="https://javiergelatti.github.io/logica-combinatoria">here</a>.</p>
<p>For me, one of the most interesting aspects of this project was creating a tool that helps users in their own journey exploring combinatory logic puzzles, instead of solving the problem for them by automatically generating solutions. I think this exemplifies a broader philosophy in tool design: creating systems that augment —rather than attempting to replace— human capabilities, where the right balance of challenge and support can provide meaningful assistance while respecting the autonomy of the user.</p>
<p>Future work includes implementing additional domain features:</p>
<ul>
<li>Conditionals (<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mtext>  </mtext><mo>⟹</mo><mtext>  </mtext></mrow><annotation encoding="application/x-tex">\\implies</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.549em;vertical-align:-0.024em;"></span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">⟹</span><span class="mspace" style="margin-right:0.2778em;"></span></span></span></span>).</li>
<li>Conjunction (<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mo>∧</mo></mrow><annotation encoding="application/x-tex">\\land</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.5556em;"></span><span class="mord">∧</span></span></span></span>).</li>
<li>Disjunction (<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mo>∨</mo></mrow><annotation encoding="application/x-tex">\\lor</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.5556em;"></span><span class="mord">∨</span></span></span></span>).</li>
<li>Negation (<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi mathvariant="normal">¬</mi></mrow><annotation encoding="application/x-tex">\\neg</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.4306em;"></span><span class="mord">¬</span></span></span></span>).</li>
</ul>
<p>But also (and maybe more importantly) “interaction” features to allow for a better iterative use of the tool:</p>
<ul>
<li>Undo/redo functionality.</li>
<li>Removing proof steps or theorems.</li>
<li>Support for building parallel theorems/proofs.</li>
</ul>
<p>If you’re interested in exploring combinatory logic or contributing to the project, visit the GitHub repository or try out the interactive system, feedback is welcomed!</p>
<hr class="footnotes-sep">
<section class="footnotes">
<ol class="footnotes-list">
<li id="fn1" class="footnote-item"><p>Combinatory logic is a formal system that lets us express any computable function in terms of combinators — special higher-order functions that contain no free variables.</p>
<p>For example, a function <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>M</mi></mrow><annotation encoding="application/x-tex">M</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal" style="margin-right:0.10903em;">M</span></span></span></span> defined as <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>M</mi><mo stretchy="false">(</mo><mi>x</mi><mo stretchy="false">)</mo><mo>=</mo><mi>x</mi><mo stretchy="false">(</mo><mi>x</mi><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">M(x)=x(x)</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.10903em;">M</span><span class="mopen">(</span><span class="mord mathnormal">x</span><span class="mclose">)</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal">x</span><span class="mopen">(</span><span class="mord mathnormal">x</span><span class="mclose">)</span></span></span></span> is a combinator, since <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>x</mi></mrow><annotation encoding="application/x-tex">x</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.4306em;"></span><span class="mord mathnormal">x</span></span></span></span> is both its parameter and the only variable in its definition.</p>
<p>In combinatory logic, putting one combinator after another denotes function application, so <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>F</mi><mo stretchy="false">(</mo><mi>x</mi><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">F(x)</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.13889em;">F</span><span class="mopen">(</span><span class="mord mathnormal">x</span><span class="mclose">)</span></span></span></span> would be written as <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>F</mi><mtext>  </mtext><mi>x</mi></mrow><annotation encoding="application/x-tex">F\\;x</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal" style="margin-right:0.13889em;">F</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mord mathnormal">x</span></span></span></span>. Similarly, the function <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>M</mi></mrow><annotation encoding="application/x-tex">M</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal" style="margin-right:0.10903em;">M</span></span></span></span> described above would be written as <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>M</mi><mtext>  </mtext><mi>x</mi><mo>=</mo><mi>x</mi><mtext>  </mtext><mi>x</mi></mrow><annotation encoding="application/x-tex">M\\;x = x\\;x</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal" style="margin-right:0.10903em;">M</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mord mathnormal">x</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.4306em;"></span><span class="mord mathnormal">x</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mord mathnormal">x</span></span></span></span>. <a href="#fnref1" class="footnote-backref">↩︎</a></p>
</li>
<li id="fn2" class="footnote-item"><p>Following the metaphor presented in the book, where every value is a combinator, and combinators are called <em>birds</em>. Also in this example, <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>M</mi></mrow><annotation encoding="application/x-tex">M</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal" style="margin-right:0.10903em;">M</span></span></span></span> would be the <em>mockingbird</em>. <a href="#fnref2" class="footnote-backref">↩︎</a></p>
</li>
<li id="fn3" class="footnote-item"><p>The different typefaces have different meanings: <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>x</mi></mrow><annotation encoding="application/x-tex">x</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.4306em;"></span><span class="mord mathnormal">x</span></span></span></span> denotes a variable named “x”, while <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mtext mathvariant="bold-sans-serif">x</mtext></mrow><annotation encoding="application/x-tex">\\textsf{\\textbf{x}}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.4583em;"></span><span class="mord text"><span class="mord text"><span class="mord textsf textbf">x</span></span></span></span></span></span> represents a meta-variable that could stand for any variable or expression, such as <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>x</mi></mrow><annotation encoding="application/x-tex">x</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.4306em;"></span><span class="mord mathnormal">x</span></span></span></span>, <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>y</mi></mrow><annotation encoding="application/x-tex">y</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.625em;vertical-align:-0.1944em;"></span><span class="mord mathnormal" style="margin-right:0.03588em;">y</span></span></span></span>, or more complex terms. The variable <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>A</mi></mrow><annotation encoding="application/x-tex">A</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal">A</span></span></span></span> is used as a placeholder for any <em>variable</em> (excluding other expression types).</p>
<p>For the structure of the rules (the pairs introduction/elimination), I was inspired by the paper “An intuitionistic theory of types”, by Per Martin-Löf (p. 12,  <a href="https://archive-pml.github.io/martin-lof/pdfs/An-Intuitionistic-Theory-of-Types-1972.pdf">pdf</a>). He was, in turn, based on Gerhard Gentzen.
Just as a reference, here are the symbolic rules introduced by Gentzen in 1934, taken from <a href="https://archive.org/details/collectedpaperso0000gent/page/76/mode/2up">here</a>:</p>
<p class='katex-block'><span class="katex-display"><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><semantics><mrow><menclose notation="box"><mstyle scriptlevel="0" displaystyle="false"><mstyle scriptlevel="0" displaystyle="false"><mstyle scriptlevel="0" displaystyle="true"><mtable rowspacing="0.16em" columnalign="center center" columnspacing="1em"><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mi mathvariant="normal">∀</mi><mtext>-Intro.</mtext></mrow></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mi mathvariant="normal">∀</mi><mtext>-Elim.</mtext></mrow></mstyle></mtd></mtr><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mstyle scriptlevel="0" displaystyle="true"><mfrac><mrow><mi mathvariant="fraktur">F</mi><mi>a</mi></mrow><mrow><mi mathvariant="normal">∀</mi><mi>x</mi><mtext> </mtext><mi mathvariant="fraktur">F</mi><mi>x</mi></mrow></mfrac></mstyle></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mstyle scriptlevel="0" displaystyle="true"><mfrac><mrow><mi mathvariant="normal">∀</mi><mi>x</mi><mtext> </mtext><mi mathvariant="fraktur">F</mi><mi>x</mi></mrow><mrow><mi mathvariant="fraktur">F</mi><mi>a</mi></mrow></mfrac></mstyle></mstyle></mtd></mtr><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mi mathvariant="normal">∃</mi><mtext>-Intro.</mtext></mrow></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mi mathvariant="normal">∃</mi><mtext>-Elim.</mtext></mrow></mstyle></mtd></mtr><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mstyle scriptlevel="0" displaystyle="true"><mfrac><mrow><mi mathvariant="fraktur">F</mi><mi>a</mi></mrow><mrow><mi mathvariant="normal">∃</mi><mi>x</mi><mtext> </mtext><mi mathvariant="fraktur">F</mi><mi>x</mi></mrow></mfrac></mstyle></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mstyle scriptlevel="0" displaystyle="true"><mfrac><mtable rowspacing="0.16em" columnalign="center center" columnspacing="1em"><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow></mrow></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mo stretchy="false">[</mo><mi mathvariant="fraktur">F</mi><mi>a</mi><mo stretchy="false">]</mo></mrow></mstyle></mtd></mtr><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mi mathvariant="normal">∃</mi><mi>x</mi><mtext> </mtext><mi mathvariant="fraktur">F</mi><mi>x</mi></mrow></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mi mathvariant="fraktur">C</mi></mstyle></mtd></mtr></mtable><mi mathvariant="fraktur">C</mi></mfrac></mstyle></mstyle></mtd></mtr></mtable></mstyle></mstyle></mstyle></menclose></mrow><annotation encoding="application/x-tex">\\boxed{
\\begin{array}{c c}
\\forall\\text{-Intro.}                                       &amp; \\forall\\text{-Elim.} \\\\[.5em]
\\displaystyle\\frac{\\mathfrak{F}a}{\\forall x\\,\\mathfrak{F}x} &amp; \\displaystyle\\frac{\\forall x\\,\\mathfrak{F}x}{\\mathfrak{F}a} \\\\[3em]
\\exists\\text{-Intro.}                                            &amp; \\exists\\text{-Elim.} \\\\[.5em]
\\displaystyle\\frac{\\mathfrak{F}a}{\\exists x\\,\\mathfrak{F}x} &amp; \\displaystyle\\frac{\\begin{array}{cc} &amp;[\\mathfrak{F}a] \\\\ \\exists x\\,\\mathfrak{F}x &amp;\\mathfrak{C} \\end{array}}{\\mathfrak{C}}
\\end{array}
}
</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:12.4135em;vertical-align:-5.9567em;"></span><span class="mord"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:6.4567em;"><span style="top:-14.4135em;"><span class="pstrut" style="height:14.4135em;"></span><span class="boxpad"><span class="mord"><span class="mord"><span class="mord"><span class="mtable"><span class="arraycolsep" style="width:0.5em;"></span><span class="col-align-c"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:6.1167em;"><span style="top:-10.0667em;"><span class="pstrut" style="height:4.79em;"></span><span class="mord"><span class="mord">∀</span><span class="mord text"><span class="mord">-Intro.</span></span></span></span><span style="top:-7.8353em;"><span class="pstrut" style="height:4.79em;"></span><span class="mord"><span class="mord"><span class="mopen nulldelimiter"></span><span class="mfrac"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:1.3684em;"><span style="top:-2.314em;"><span class="pstrut" style="height:3em;"></span><span class="mord"><span class="mord">∀</span><span class="mord mathnormal">x</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord mathfrak">F</span><span class="mord mathnormal">x</span></span></span><span style="top:-3.23em;"><span class="pstrut" style="height:3em;"></span><span class="frac-line" style="border-bottom-width:0.04em;"></span></span><span style="top:-3.677em;"><span class="pstrut" style="height:3em;"></span><span class="mord"><span class="mord mathfrak">F</span><span class="mord mathnormal">a</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.812em;"><span></span></span></span></span></span><span class="mclose nulldelimiter"></span></span></span></span><span style="top:-3.6353em;"><span class="pstrut" style="height:4.79em;"></span><span class="mord"><span class="mord">∃</span><span class="mord text"><span class="mord">-Intro.</span></span></span></span><span style="top:0.0147em;"><span class="pstrut" style="height:4.79em;"></span><span class="mord"><span class="mord"><span class="mopen nulldelimiter"></span><span class="mfrac"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:1.3684em;"><span style="top:-2.314em;"><span class="pstrut" style="height:3em;"></span><span class="mord"><span class="mord">∃</span><span class="mord mathnormal">x</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord mathfrak">F</span><span class="mord mathnormal">x</span></span></span><span style="top:-3.23em;"><span class="pstrut" style="height:3em;"></span><span class="frac-line" style="border-bottom-width:0.04em;"></span></span><span style="top:-3.677em;"><span class="pstrut" style="height:3em;"></span><span class="mord"><span class="mord mathfrak">F</span><span class="mord mathnormal">a</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.812em;"><span></span></span></span></span></span><span class="mclose nulldelimiter"></span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:5.6167em;"><span></span></span></span></span></span><span class="arraycolsep" style="width:0.5em;"></span><span class="arraycolsep" style="width:0.5em;"></span><span class="col-align-c"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:6.1167em;"><span style="top:-10.0667em;"><span class="pstrut" style="height:4.79em;"></span><span class="mord"><span class="mord">∀</span><span class="mord text"><span class="mord">-Elim.</span></span></span></span><span style="top:-7.8353em;"><span class="pstrut" style="height:4.79em;"></span><span class="mord"><span class="mord"><span class="mopen nulldelimiter"></span><span class="mfrac"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:1.3714em;"><span style="top:-2.314em;"><span class="pstrut" style="height:3em;"></span><span class="mord"><span class="mord mathfrak">F</span><span class="mord mathnormal">a</span></span></span><span style="top:-3.23em;"><span class="pstrut" style="height:3em;"></span><span class="frac-line" style="border-bottom-width:0.04em;"></span></span><span style="top:-3.677em;"><span class="pstrut" style="height:3em;"></span><span class="mord"><span class="mord">∀</span><span class="mord mathnormal">x</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord mathfrak">F</span><span class="mord mathnormal">x</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.812em;"><span></span></span></span></span></span><span class="mclose nulldelimiter"></span></span></span></span><span style="top:-3.6353em;"><span class="pstrut" style="height:4.79em;"></span><span class="mord"><span class="mord">∃</span><span class="mord text"><span class="mord">-Elim.</span></span></span></span><span style="top:0.0147em;"><span class="pstrut" style="height:4.79em;"></span><span class="mord"><span class="mord"><span class="mopen nulldelimiter"></span><span class="mfrac"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:2.79em;"><span style="top:-2.764em;"><span class="pstrut" style="height:3.45em;"></span><span class="mord"><span class="mord mathfrak">C</span></span></span><span style="top:-3.68em;"><span class="pstrut" style="height:3.45em;"></span><span class="frac-line" style="border-bottom-width:0.04em;"></span></span><span style="top:-4.79em;"><span class="pstrut" style="height:3.45em;"></span><span class="mord"><span class="mord"><span class="mtable"><span class="arraycolsep" style="width:0.5em;"></span><span class="col-align-c"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:1.45em;"><span style="top:-3.61em;"><span class="pstrut" style="height:3em;"></span><span class="mord"></span></span><span style="top:-2.41em;"><span class="pstrut" style="height:3em;"></span><span class="mord"><span class="mord">∃</span><span class="mord mathnormal">x</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord mathfrak">F</span><span class="mord mathnormal">x</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.95em;"><span></span></span></span></span></span><span class="arraycolsep" style="width:0.5em;"></span><span class="arraycolsep" style="width:0.5em;"></span><span class="col-align-c"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:1.45em;"><span style="top:-3.61em;"><span class="pstrut" style="height:3em;"></span><span class="mord"><span class="mopen">[</span><span class="mord mathfrak">F</span><span class="mord mathnormal">a</span><span class="mclose">]</span></span></span><span style="top:-2.41em;"><span class="pstrut" style="height:3em;"></span><span class="mord"><span class="mord mathfrak">C</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.95em;"><span></span></span></span></span></span><span class="arraycolsep" style="width:0.5em;"></span></span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.686em;"><span></span></span></span></span></span><span class="mclose nulldelimiter"></span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:5.6167em;"><span></span></span></span></span></span><span class="arraycolsep" style="width:0.5em;"></span></span></span></span></span></span></span><span style="top:-8.4567em;"><span class="pstrut" style="height:14.4135em;"></span><span class="stretchy fbox" style="height:12.4135em;border-style:solid;border-width:0.04em;"></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:5.9567em;"><span></span></span></span></span></span></span></span></span></span></p>
 <a href="#fnref3" class="footnote-backref">↩︎</a></li>
<li id="fn4" class="footnote-item"><p>The puzzle is called “The Significance of the Mockingbird”. It asks us to prove (or deny) that every bird of the forest is <em>fond</em> of at least one bird; i.e. <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mo stretchy="false">(</mo><mi mathvariant="normal">∀</mi><mi>A</mi><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mi mathvariant="normal">∃</mi><mi>B</mi><mo stretchy="false">)</mo><mtext> </mtext><mi>A</mi><mtext>  </mtext><mi>B</mi><mo>=</mo><mi>B</mi></mrow><annotation encoding="application/x-tex">(\\forall A)(\\exists B)\\,A\\;B = B</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mopen">(</span><span class="mord">∀</span><span class="mord mathnormal">A</span><span class="mclose">)</span><span class="mopen">(</span><span class="mord">∃</span><span class="mord mathnormal" style="margin-right:0.05017em;">B</span><span class="mclose">)</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord mathnormal">A</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mord mathnormal" style="margin-right:0.05017em;">B</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal" style="margin-right:0.05017em;">B</span></span></span></span>. <a href="#fnref4" class="footnote-backref">↩︎</a></p>
</li>
</ol>
</section>
`,E=`<h1>Mini Alto computer</h1>
<p>A fun little project I did as a gift to a friend: a mini XEROX Alto computer, that can serve as a decorative item:</p>
<p><img src="\${mdLink0}" alt="mini-alto.jpg"></p>
<p>The screen is functional, and displays adapted images from the original user interface.
You can also interact with it by clicking the mouse button.</p>
<iframe width="800" height="450" src="https://www.youtube.com/embed/8tM-Ne5mQ3Q" title="Mini-alto video" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
<hr>
<p><img src="\${mdLink1}" alt="mini-alto-dark.jpg"></p>
<hr>
<p>It uses a TFT display and a Nodemcu Wemos D1 Mini board (which also includes WiFi support, but I’m not using it). Some photos of its internal components:</p>
<table>
<thead>
<tr>
<th><img src="\${mdLink2}" alt="mini-alto-screen.jpg"></th>
<th><img src="\${mdLink3}" alt="mini-alto-inside.jpg"></th>
</tr>
</thead>
</table>
<p>The external structured was 3D modelled using FreeCAD. The board was programmed in C++ using the Arduino API and the TFT_eSPI library. The displayed images were edited in Gimp and converted to X BitMap format (XBM) before being transferred to the device.</p>
<hr>
<p><img src="\${mdLink4}" alt="mini-alto-box.jpg"></p>
`,z=`<h1>Live Typing for Ruby</h1>
<h2>Bridging Dynamic and Static Types</h2>
<p>Inspired by Hernán Wilkinson’s work on <em>Live Typing</em> in Smalltalk<sup class="footnote-ref"><a href="#fn1" id="fnref1">[1]</a></sup>, I developed a system that brings type information to Ruby programs by observing their runtime behavior.</p>
<p>Here’s a description of <em>Live Typing</em>, from Hernán’s paper:</p>
<blockquote>
<p>Live Typing automatically annotates variable types based on the objects assigned to them, and method return types based on the returned objects.
IDEs can exploit this information to greatly improve the development tools and the programming experience, bringing some of the benefits of Static Typing tools to Dynamically Typed Languages.</p>
</blockquote>
<h2>How It Works</h2>
<p>The system consists of two main components:</p>
<ol>
<li>
<p><em>The <strong>runtime type information collector</strong></em></p>
<p>This component observes program execution and records the actual types of variables and method returns as the code runs. It is implemented in Ruby, and is run in the same virtual machine as the program code. The type information is serialized and stored in <code>json</code> format.</p>
<p>The structure of the saved type data is the following:
<img src="\${mdLink0}" alt="live-typing-structure.png"></p>
<p>Unlike the Smalltalk implementation, which required modifications to the VM, Ruby’s built-in <code>TracePoint</code> API<sup class="footnote-ref"><a href="#fn2" id="fnref2">[2]</a></sup> allowed for type collection without low-level modifications.</p>
</li>
<li>
<p><em>The <strong>static type processor</strong></em></p>
<p>This processes the collected information and presents it embedded on the program source code, through the IDE interface. It is implemented as a RubyMine plugin written in Java.</p>
</li>
</ol>
<h2>Usage examples</h2>
<p>In this example, we show type annotations for instance variables, methods (parameters + return), including methods defined on metaclasses:</p>
<iframe width="700" height="400" src="https://www.youtube.com/embed/LWuiZTnGW0I" title="Ruby Live Typing: Example 1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
<p>Here, we show type annotations for methods in an inheritance hierarchy, how the annotations chain when sending messages, and what happens if we try a message for which we don’t have any type information.</p>
<iframe width="700" height="400" src="https://www.youtube.com/embed/W1K9xYSfVvY" title="Ruby Live Typing: Example 2" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
<h2>Final Thoughts</h2>
<p>This project demonstrates how we can enhance development tools for dynamically typed languages without sacrificing their flexibility. By observing actual runtime behavior, we get type information that reflects how the code is really used, rather than relying on static analysis alone.</p>
<p>The approach could be extended to collect other kinds of runtime information that might be valuable during development, suggesting new possibilities for bridging the gap between development time and runtime in dynamic languages.</p>
<hr class="footnotes-sep">
<section class="footnotes">
<ol class="footnotes-list">
<li id="fn1" class="footnote-item"><p>You can find more information about this on the paper “VM support for live typing: automatic type annotation for dynamically typed languages” by Hernán Wilkinson, available <a href="https://dl.acm.org/doi/10.1145/3328433.3328443">here</a>. <a href="#fnref1" class="footnote-backref">↩︎</a></p>
</li>
<li id="fn2" class="footnote-item"><p>An object-oriented API provided by the Ruby language to trace different events while the program is running, such as method calls and returns. You can find more information about it in the <a href="https://docs.ruby-lang.org/en/master/TracePoint.html">Ruby documentation</a>. <a href="#fnref2" class="footnote-backref">↩︎</a></p>
</li>
</ol>
</section>
`,R=`<h1>Automated refactorings for Ruby</h1>
<h2>From development notes to a working implementation</h2>
<p>Refactoring —making small, systematic changes to improve program structure without altering its behavior<sup class="footnote-ref"><a href="#fn1" id="fnref1">[1]</a></sup>— is a fundamental part of the software development process, especially when practicing Test-Driven Development.
IDEs often offer automated refactoring tools, but their availability and sophistication vary significantly across different programming languages.</p>
<p>While working on a Ruby project, I frequently found myself wishing for more complete and robust refactoring support. Our team was using the RubyMine IDE by JetBrains, and the limitations of the automated refactoring tools were particularly noticeable, especially compared to those offered in IntelliJ IDEA —another JetBrains IDE, primarily used for Java development.</p>
<p>I didn’t want to just accept these limitations, so as an exercise, I started keeping a daily log of refactorings I would have used during my work, if only they were available<sup class="footnote-ref"><a href="#fn2" id="fnref2">[2]</a></sup>:</p>
<p><img src="\${mdLink0}" alt="A notebook page showing my handwritten notes with automated refactorings ideas."></p>
<p>Eventually, this led me to develop <em>RubyRefactorings</em>, a RubyMine plugin that would provide me with the automated refactorings I wanted to use while working on that project.
My development notes helped me ensure I was focusing on real-world use cases drawn from my own experience.</p>
<p>The plugin is available <a href="https://github.com/javiergelatti/RubyRefactorings">on GitHub</a>. It implements the refactoring transformations as <em>code intentions</em>, a term used on JetBrains IDEs to refer to contextual suggestions that appear when focusing on a particular expression in the code.</p>
<h2>Some of the implemented refactorings</h2>
<p>The plugin provides many refactorings (though several from my original list remain unimplemented). I’ll highlight some of them below.</p>
<h3>Introduce interpolation</h3>
<p>This is a simple refactoring that automates a transformation that’s very cumbersome to perform manually: interpolating parts of an existing string literal. This is especially useful as a preliminary step before extracting parts of the string as variables, or when adding new dynamic contents to a string.</p>
<p>The animation below demonstrates some examples and edge cases<sup class="footnote-ref"><a href="#fn3" id="fnref3">[3]</a></sup>:
<img src="\${mdLink1}" alt="Animation showing the &quot;introduce interpolation&quot; refactoring; the main example goes from &quot;hello, world&quot; to &quot;hello, #{&quot;world&quot;}&quot;."></p>
<h3>Replace conditional with guard clause</h3>
<p>This refactoring is useful when you want to separate error or special cases from the main flow of the program, while also reducing conditional nesting<sup class="footnote-ref"><a href="#fn4" id="fnref4">[4]</a></sup>:</p>
<p><img src="\${mdLink2}" alt="Animation showing an example of &quot;replace conditional with guard clause&quot;. One of the examples goes from 'if is_retired; retired_amount; else normal_pay_amount; end' to 'return retired_amount if is_retired; normal_pay_amount'"></p>
<p>Some cases require special handling, such as when working inside a block:
<img src="\${mdLink3}" alt="Animation showing a special case of &quot;replace conditional with guard clause&quot;: when the conditional is inside a block it uses 'next' instead of 'return' to preserve the behavior of the code"></p>
<h3>Extract method object</h3>
<p>This refactoring —also known in the literature as “replace function with command”— moves a method’s logic to a new object:</p>
<p><img src="\${mdLink4}" alt="Animation showing the &quot;extract method object&quot; refactoring. It is applied to a method and generates a new class, such that the original method parameters are received in the constructor, and the logic is delegated to a new instance of that class. It also allows the user to rename the new class and message"></p>
<h3>Introduce chained <code>map</code></h3>
<p>This refactoring splits a <code>map</code>, <code>collect</code>, or <code>each</code> by introducing a chained <code>map</code>. You can use it to separate different steps used to process a collection, and it’s usually followed by an application of the “extract method” refactoring.</p>
<p><img src="\${mdLink5}" alt="Animation showing an example of &quot;introduce chained map&quot;. The example converts a single '.map do', such that the result is obtained by first applying f and then g, to a chain of two '.map do's: one applying f and the other applying g; allowing the user to choose the split point. The title of the code intention item includes an aside: &quot;may change semantics&quot;."></p>
<p>It is important to note that this preserves the behavior of the program only when <code>f</code> and <code>g</code> have no side effects, or when the order of their side effects is not relevant. That is the reason why the intention has the additional “may change semantics” warning, following the conventions of the IDE.</p>
<h3>Other refactorings</h3>
<p>Some additional automated refactorings implemented by the tool are:</p>
<ul>
<li>Convert single-quoted string to double-quoted (remarkably not built into RubyMine).</li>
<li>Remove useless conditional statement.</li>
<li>Move statement into conditional above.</li>
<li>Use self-assignment.</li>
</ul>
<p>Ruby-specific refactorings include:</p>
<ul>
<li>Replace singleton method by opening singleton class.</li>
<li>Remove unnecessary braces from hash argument.</li>
<li>Convert string/symbol word list to use array syntax.</li>
</ul>
<h2>Some technical details</h2>
<p>The plugin is implemented in Scala using JetBrains’ Platform SDK. It was developed following strict Test-Driven Development practices. The test suite verifies both the detection of refactoring opportunities and the correctness of the transformations.</p>
<p>Much thought was given to make the tests readable by distilling their essential elements. As an example, here’s a test case for the “split map” refactoring:</p>
<pre><code class="hljs language-scala"><span class="hljs-meta">@Test</span>
<span class="hljs-function"><span class="hljs-keyword">def</span> <span class="hljs-title">splitsTheMapWhenThePartitionsShareMoreThanOneVariable</span></span>(): <span class="hljs-type">Unit</span> = {
  loadRubyFileWith(
    <span class="hljs-string">&quot;&quot;&quot;
      |[1, 2, 3].&lt;caret&gt;map do |n|
      |  x = n + 1
      |  y = n + 2
      |  z = x + y
      |end
    &quot;&quot;&quot;</span>)

  applySplitRefactor(splitPoint = <span class="hljs-string">&quot;y = n + 2&quot;</span>)

  expectResultingCodeToBe(
    <span class="hljs-string">&quot;&quot;&quot;
      |[1, 2, 3].map do |n|
      |  x = n + 1
      |  y = n + 2
      |  [x, y]
      |end.map do |x, y|
      |  z = x + y
      |end
    &quot;&quot;&quot;</span>)
}
</code></pre>
<h2>Conclusions</h2>
<p>Through this project, I’ve learned that developing even small improvements for the tools we use can significantly impact our experience: reflecting on our work improves our capacity to envision new tools, and creating new tools deepens our knowledge of the craft.
As a bonus, by making these refactorings available through intuitive interfaces, we help developers maintain cleaner, more maintainable code with less effort.</p>
<hr class="footnotes-sep">
<section class="footnotes">
<ol class="footnotes-list">
<li id="fn1" class="footnote-item"><p>The term “refactoring” was popularized by Martin Fowler. From <a href="https://refactoring.com/">refactoring.com</a>:</p>
<blockquote>
<p>Refactoring is a disciplined technique for restructuring an existing body of code, altering its internal structure without changing its external behavior.</p>
</blockquote>
 <a href="#fnref1" class="footnote-backref">↩︎</a></li>
<li id="fn2" class="footnote-item"><p>At the time, I was reading <em>The Reflective Practitioner</em> by Donald A. Schön. This was one of the sources of inspiration for that reflective practice made “in action”, which includes recognizing something <em>as it happens</em> and making tacit knowledge (e.g. identifying and isolating a transformation as a refactoring) explicit. <a href="#fnref2" class="footnote-backref">↩︎</a></p>
</li>
<li id="fn3" class="footnote-item"><p>Even a simple refactoring like this one has many edge cases.
I call it “simple” because it only requires local information to be performed. <a href="#fnref3" class="footnote-backref">↩︎</a></p>
</li>
<li id="fn4" class="footnote-item"><p>One could argue that it reduces the <em>explicit</em> nesting of conditionals, since in some way the conditions are still “nested”: the conditions below depend on the conditions above not having matched. <a href="#fnref4" class="footnote-backref">↩︎</a></p>
</li>
</ol>
</section>
`,_=`<h1>A live JavaScript environment</h1>
<h2>Static definitions vs. dynamic objects</h2>
<p>While studying object-oriented programming, I’ve frequently come across discussions about the pervasiveness of a “class-oriented” style: how our focus is on <em>classes</em> instead of <em>objects</em> while we are programming.</p>
<p>We can conjecture that one reason for this is that many languages provide syntax for classes, but not for objects. For example, if we program in Java, we’re always “writing classes”; the <em>objects</em> —i.e., the instances of those classes— exist only when the program is running.</p>
<p>Most of those discussions are centered on the effects of those ways of thinking on software design, generally associating the “class-oriented” style with bad design.
However, I’m more interested in thinking about that discussion from another perspective, analyzing the separation of a static “coding time” and a dynamic “run time”, which are mutually exclusive. Let me explain.</p>
<h3>Clarifying the vocabulary</h3>
<p>Going back to our conjecture, we could then say that languages providing “syntax for objects” will allow for “truly” object-oriented programming (as opposed to class-oriented programming). One example could be JavaScript, where we do have syntax for objects, not just classes:</p>
<pre><code class="hljs language-javascript"><span class="hljs-keyword">const</span> anObject = {
    <span class="hljs-attr">name</span>: <span class="hljs-string">&quot;Pepe&quot;</span>,
    <span class="hljs-title function_">sayHi</span>(<span class="hljs-params"></span>) {
        <span class="hljs-keyword">return</span> <span class="hljs-string">\`Hi, I&#x27;m <span class="hljs-subst">\${<span class="hljs-variable language_">this</span>.name}</span>\`</span>
    }
};
</code></pre>
<p>However, the validity of what we’re saying depends on what we mean when we say “object”.
If we dig deeper, we could say that what’s shown in the code is not <em>really</em> an object; that’s an <em>object literal</em>, which represents a static <em>definition</em> of an object but not the object itself (which will exist only when the program runs).</p>
<p>To make this distinction clearer, consider the following example:</p>
<pre><code class="hljs language-javascript"><span class="hljs-keyword">function</span> <span class="hljs-title function_">personNamed</span>(<span class="hljs-params">name</span>) {
    <span class="hljs-keyword">const</span> anObject = {
        name,
        <span class="hljs-title function_">sayHi</span>(<span class="hljs-params"></span>) {
            <span class="hljs-keyword">return</span> <span class="hljs-string">\`Hi, I&#x27;m <span class="hljs-subst">\${<span class="hljs-variable language_">this</span>.name}</span>\`</span>
        }
    };
    
    <span class="hljs-keyword">return</span> anObject;
}

<span class="hljs-keyword">const</span> pepe = <span class="hljs-title function_">personNamed</span>(<span class="hljs-string">&quot;Pepe&quot;</span>);
<span class="hljs-keyword">const</span> marta = <span class="hljs-title function_">personNamed</span>(<span class="hljs-string">&quot;Marta&quot;</span>);
</code></pre>
<p>In this case, there’s only <em>one</em> (1) object literal, but there will be <em>two</em> (2) objects created from it when we run the program.
So a static definition used to create objects (i.e., the object literal) is not the same as the objects themselves.</p>
<p>The same thing happens with classes, especially if we consider that in many languages classes are also objects!<sup class="footnote-ref"><a href="#fn1" id="fnref1">[1]</a></sup>
This distinction lets us refine the previous discussion, allowing us to frame it differently and be more nuanced about it.</p>
<h2>The direct manipulation of objects</h2>
<p>So, if we use the word <em>object</em> to describe the dynamic runtime entities, then the only way a programming system can let you manipulate objects while you program is if it does not make a separation between a static “coding time” and the system’s dynamic runtime.</p>
<p>In other words, the system <em>should not</em> force us to work in two separate stages:</p>
<ol>
<li>Changing the static definitions in the program<sup class="footnote-ref"><a href="#fn2" id="fnref2">[2]</a></sup>.</li>
<li>Running the program and seeing the objects, without being able to change them.</li>
</ol>
<p>This is because, if we want to be able to directly manipulate and modify the objects, then we need the capabilities of (1) but while we are in (2), where the objects exist.</p>
<p>Some programming environments, such as the Smalltalk language, operate exactly in this manner.
To describe the kind of direct access to the objects given by the live, integrated environment of Smalltalk, I like the following quote from Kent Beck<sup class="footnote-ref"><a href="#fn3" id="fnref3">[3]</a></sup>:</p>
<blockquote>
<p>In Smalltalk, the objects are right there, an inch under the glass.
You don’t have a text editor that works on a stream of characters that’s going to get interpreted, that’s going to eventually turn into objects; you are working with the objects. You point at them, you click at them, you edit them; they are right there.
You have no choice but to interact with the objects.</p>
</blockquote>
<p>This can also be experienced in a stronger way while using the Self language, a direct descendant of Smalltalk.
In Self, you can see the objects and their connection to other objects, grab them, move them, and also evaluate code in their context:</p>
<p><img src="\${mdLink0}" alt="A screenshot of the Self programming environment, showing three outliners: one displays a 'point' object with slots for x=1, y=2, and its parent slot; another for the 'traits point' object, with a parent slot and a 'plus' method; and the last one for the object '2'. The first outliner has visible lines connecting its parent slot to the second outliner, and the 'y' slot with the third outliner. Each outliner also has a text box with three buttons underneath: 'Get it', 'Do it' and 'Close'."></p>
<p>In a way, Smalltalk and Self put the objects right in front of you, reducing the distance between you —the programmer— and the running system: working with objects by directly “poking” at them on the screen highly contrasts with the more traditional process of <em>modifying a text file → compiling → running</em>, that inserts layers of indirection between you and the running program.</p>
<h2>An experiment with JavaScript</h2>
<p>JavaScript is a widely used language that was in part inspired by Self, sharing many of its characteristics (such as being dynamically-typed and prototype-based). This connection made me wonder if we could experience JavaScript in an environment that offers the kind of direct object manipulation that made Self so unique. So, I started working on an experiment to make it happen.</p>
<p>Using TypeScript and the web browser’s DOM, I developed an environment to visualize and manipulate JavaScript objects in real-time. The code is available <a href="https://github.com/javiergelatti/self-js">on GitHub</a>, and you can experience it firsthand <a href="https://javiergelatti.github.io/self-js">here</a>.</p>
<p>The environment provides several features that embody the direct object manipulation style of Self.
For example, you can visualize objects with their properties and connections to other objects, making the object graph tangible and explorable:</p>
<p><img src="\${mdLink1}" alt="A visualization of a JavaScript 'point' object with properties _x:1 and _y:2, showing connections with its prototype and the number 2, which are also being visualized. The interface mimics Self's outliner style but uses JavaScript terminology, with a prototype slot instead of a parent slot, and a text field with 'Do it' and 'Get it' buttons below."></p>
<p>Properties can be rewired in real-time by dragging the visible connection that connects them with their value:
<img src="\${mdLink2}" alt="Animation showing the following: an outliner for the 'point' object is displayed, its _x property being connected to a number value '1'. There's also an outliner of another number value '2' below. The user grabs the arrow point with the cursor, and drops it into the outliner for the number 2. As a consequence, the value of the _x property of the point is changed to 2, and the arrow stays pointing to '2' instead of '1', demonstrating the ability to modify property references in real-time."></p>
<p>Code can be evaluated in the context of any object, and its result can be inspected:</p>
<p><img src="\${mdLink3}" alt="An animation showing the following interaction: in the outliner for the point object, input 'this.plus(this)' and Get it; a new point object is displayed; then input &quot;this._x = 123&quot; and Do it; the value of the _x property of the point is changed to 123."></p>
<p>There are many other features of the system you can find by freely exploring it.
An interesting one are the object and property attributes indicators, you can see them if you freeze an object by running <code>Object.freeze(this)</code>.</p>
<p>The system was programmed using TypeScript and the web browser’s DOM. All the behavior was developed using Test-Driven Development, including comprehensive testing of view interactions (which is very uncommon). A special effort was done to be able to run the system in mobile devices with multitouch interfaces.</p>
<h2>Conclusions</h2>
<p>While developing this environment I learned a lot of things about both JavaScript and live programming tools.
Although there are many missing features, I feel it does let you experience some of the direct manipulation affordances given by the dynamic systems that inspired me, where the only thing between you and the objects is the glass of the screen.</p>
<p>This experiment also revealed both challenges and opportunities in modern programming environments: while today’s development tools often maintain a strict separation between coding and runtime, alternative approaches are possible even in contemporary, mainstream languages.
As we continue to evolve our programming tools and environments, it’s worth reconsidering the assumptions we make about our craft. There’s still much to learn from early systems like Smalltalk and Self, and their pioneering approaches to human-computer interaction in programming environments.</p>
<p>This project remains open for exploration and contribution, serving as both a practical tool and a reminder that the way we interact with our programming environments significantly impacts how we think about and work with objects in our code.</p>
<p><img src="\${mdLink4}" alt="An HTMLDivElement object's color property is shown being connected to string values 'red' and then changed to 'green' by dragging and dropping the arrow. Each time the property is re-routed the div element changes its color on the screen, demonstrating the live DOM manipulation."></p>
<hr class="footnotes-sep">
<section class="footnotes">
<ol class="footnotes-list">
<li id="fn1" class="footnote-item"><p>This is true in many languages, even in JavaScript. As a —perhaps unusual— example, we can adapt the previous code to define classes instead of using the object literal notation:</p>
<pre><code class="hljs language-javascript"><span class="hljs-keyword">function</span> <span class="hljs-title function_">personNamed</span>(<span class="hljs-params">name</span>) {
    <span class="hljs-keyword">const</span> aClass = <span class="hljs-keyword">class</span> {
        <span class="hljs-keyword">static</span> name = name;
        <span class="hljs-keyword">static</span> <span class="hljs-title function_">sayHi</span>(<span class="hljs-params"></span>) {
            <span class="hljs-keyword">return</span> <span class="hljs-string">\`Hi, I&#x27;m <span class="hljs-subst">\${<span class="hljs-variable language_">this</span>.name}</span>\`</span>
        }
    };

    <span class="hljs-keyword">return</span> aClass;
}

<span class="hljs-keyword">const</span> pepe = <span class="hljs-title function_">personNamed</span>(<span class="hljs-string">&quot;Pepe&quot;</span>);
<span class="hljs-keyword">const</span> marta = <span class="hljs-title function_">personNamed</span>(<span class="hljs-string">&quot;Marta&quot;</span>);
</code></pre>
<p>The resulting objects will understand the <code>sayHi()</code> message producing the same result as before, albeit now being functions and having additional properties. <a href="#fnref1" class="footnote-backref">↩︎</a></p>
</li>
<li id="fn2" class="footnote-item"><p>This is the process we earlier inaccurately called “writing classes”. We now understand that was really a particular case of creating <em>static</em> definitions <em>before running the program</em>, rather than working with (dynamic) objects while the program is running. <a href="#fnref2" class="footnote-backref">↩︎</a></p>
</li>
<li id="fn3" class="footnote-item"><p>This is from the Ruby Rogues podcast book club, episode 23, minute 53:41; where they talked about the book “Smalltalk Best Practice Patterns”.
You can listen to that episode <a href="https://podcasts.musixmatch.com/podcast/01hbps1dwrarm5ywrtwm9241x3/episode/01hqqv1m1teh4xcxrc8m2632e4">here</a>. <a href="#fnref3" class="footnote-backref">↩︎</a></p>
</li>
</ol>
</section>
`,F=new Map([["/chorded-keyset.md",T],["/diagramas-colaboracion.md",A],["/game-of-life.md",I],["/godot-refactorings.md",L],["/index.md",S],["/lambda-calculus-editor.md",C],["/logica-combinatoria.md",P],["/mini-alto.md",E],["/ruby-live-typing.md",z],["/ruby-refactorings.md",R],["/self-js.md",_]]),m=document.querySelector("main"),c=m.querySelector("article"),v=m.querySelector("svg"),x=M(g());x!==void 0&&(c.innerHTML=x);const l=[];Promise.all([...c.querySelectorAll("a")].map(k)).then(O);function $(a){let s=0;for(const e of[...a]){const i=e.charCodeAt(0);s=(s<<5)-s+i,s|=0}return s}async function k(a){const s=new URL(a.href),e=g();if(N(s)){if(s.origin===e.origin&&s.pathname===e.pathname&&s.hash!==""){a.classList.add("hash");return}}else{a.target="_blank",a.rel="noopener noreferrer",a.classList.add("external");return}const i=Math.abs($(a.href))%360;a.style.background=`hsl(${i}, 100%, 40%)`,a.classList.add("local")}c.addEventListener("scroll",()=>p());c.parentElement.addEventListener("scroll",()=>p());window.addEventListener("resize",()=>p());const B=new ResizeObserver(()=>p());function p(){l.forEach(a=>{const s=a.svgPath,e=a.sourceParentElement.getBoundingClientRect(),i=a.sourceLink.getBoundingClientRect(),t=document.body.scrollLeft,n=document.body.scrollTop;let o=i.x-1+i.width+t,r=i.y+i.height/2+n;const f=a.element.getBoundingClientRect(),h=f.x+t,d=f.y+10+n;if(r<e.y)o=e.right+t,r=e.top+8+n;else if(r>e.bottom){const b=e.bottom;o+=(b-r)*(h-o)/(d-r),r=b}s.classList.toggle("out",r===e.bottom);const y=20;s.setAttribute("d",`
            M ${o},${r}
            C ${o+y},${r} ${h-y},${d} ${h},${d}
        `)})}function g(){return new URL(document.location.href)}function M(a){if(a.origin===g().origin)return F.get(a.pathname)}function D(a){return a.closest(".content-viewer")??void 0}function j(){sessionStorage.setItem("sideViewers",JSON.stringify(l.map(a=>{const s=a.sourceLink.href,e=q(a.sourceParentElement,s).indexOf(a.sourceLink);return{href:s,linkIndex:e}})))}function q(a,s){return[...a.querySelectorAll("a")].filter(e=>new URL(e.href).toString()===s)}function O(){const a=sessionStorage.getItem("sideViewers")??"[]";JSON.parse(a).forEach(({href:e,linkIndex:i})=>{var r;const t=((r=l[l.length-1])==null?void 0:r.element)??c,n=q(t,e);if(n.length===0)throw new Error("Link not found");(n.length>1?n[i]:n[0]).click()})}function w(a,s){const e=D(a),i=l.find(o=>o.sourceParentElement===e);i&&u(i);const t=document.createElement("article");t.className="content-viewer",t.replaceChildren(s),B.observe(t);const n=document.createElementNS("http://www.w3.org/2000/svg","path");n.style.stroke=a.style.background,v.append(n),G({element:t,sourceLink:a,sourceParentElement:e,svgPath:n})}function W(a){const s=new URL(a.href),e=M(s);e===void 0?w(a,H(s)):w(a,J(e))}function H(a){const s=document.createElement("iframe");return s.src=a.toString(),s.classList.add("loading"),s.onload=()=>s.classList.remove("loading"),s}function J(a){const s=document.createElement("div");return s.style.display="contents",s.innerHTML=a,s.querySelectorAll("a").forEach(k),s.querySelectorAll("iframe").forEach(e=>{e.addEventListener("load",()=>{var t;const i=e.contentDocument||((t=e.contentWindow)==null?void 0:t.document);i!==void 0&&new ResizeObserver(([n])=>{e.style.height=`${n.target.scrollHeight}px`}).observe(i.documentElement)})}),s}function G(a){l.push(a),m.style.setProperty("--number-of-columns",String(l.length+1)),m.insertBefore(a.element,v),p(),a.element.addEventListener("scroll",()=>p()),a.element.scrollIntoView({behavior:"smooth",block:"nearest",inline:"center"}),j()}function u(a){a.svgPath.remove(),a.element.remove(),a.sourceLink.classList.remove("active");const s=l.indexOf(a),e=l.at(s+1);e&&u(e),l.splice(s,1),m.style.setProperty("--number-of-columns",String(l.length+1)),j()}function N(a){return a.hostname==="javiergelatti.xyz"||a.hostname==="localhost"||/^\d+\.\d+\.\d+\.\d+$/.test(a.hostname)}document.documentElement.addEventListener("click",a=>{var e;if(!(a.target instanceof HTMLElement))return;const s=(e=a.target)==null?void 0:e.closest("a");if(s&&s.classList.contains("local"))if(a.preventDefault(),s.classList.contains("active")){const i=l.find(t=>t.sourceLink===s);u(i)}else s.classList.add("active"),W(s)});
