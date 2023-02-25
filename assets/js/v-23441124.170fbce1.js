"use strict";(self.webpackChunknode_docs=self.webpackChunknode_docs||[]).push([[232],{9159:(n,s,e)=>{e.r(s),e.d(s,{data:()=>a});const a=JSON.parse('{"key":"v-23441124","path":"/node-lessons/lesson3.html","title":"3.学习使用外部模块","lang":"zh-CN","frontmatter":{"order":3,"description":"目标 建立一个 lesson3 项目，在其中编写代码。 当在浏览器中访问 http://localhost:3000/?q=alsotang 时，输出 alsotang 的 md5 值，即 bdd5e57b5c0040f9dc23d430846e68a3。 挑战 访问 http://localhost:3000/?q=alsotang 时，输出 als...","head":[["meta",{"property":"og:url","content":"https://yzqdev.github.io/node-docs/node-docs/node-lessons/lesson3.html"}],["meta",{"property":"og:site_name","content":"node-docs"}],["meta",{"property":"og:title","content":"3.学习使用外部模块"}],["meta",{"property":"og:description","content":"目标 建立一个 lesson3 项目，在其中编写代码。 当在浏览器中访问 http://localhost:3000/?q=alsotang 时，输出 alsotang 的 md5 值，即 bdd5e57b5c0040f9dc23d430846e68a3。 挑战 访问 http://localhost:3000/?q=alsotang 时，输出 als..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2022-03-26T15:48:25.000Z"}],["meta",{"property":"article:modified_time","content":"2022-03-26T15:48:25.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"3.学习使用外部模块\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2022-03-26T15:48:25.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"目标","slug":"目标","link":"#目标","children":[]},{"level":2,"title":"挑战","slug":"挑战","link":"#挑战","children":[]},{"level":2,"title":"知识点","slug":"知识点","link":"#知识点","children":[]},{"level":2,"title":"课程内容","slug":"课程内容","link":"#课程内容","children":[]},{"level":2,"title":"题外话","slug":"题外话","link":"#题外话","children":[]}],"git":{"createdTime":1648309705000,"updatedTime":1648309705000,"contributors":[{"name":"yzqdev","email":"yzqdev@outlook.com","commits":1}]},"readingTime":{"minutes":3.29,"words":986},"filePathRelative":"node-lessons/lesson3.md","localizedDate":"2022年3月26日","autoDesc":true,"excerpt":""}')},9758:(n,s,e)=>{e.r(s),e.d(s,{default:()=>p});var a=e(6808);const t=[(0,a.uE)('<h1 id="_3-学习使用外部模块" tabindex="-1"><a class="header-anchor" href="#_3-学习使用外部模块" aria-hidden="true">#</a> 3.学习使用外部模块</h1><h2 id="目标" tabindex="-1"><a class="header-anchor" href="#目标" aria-hidden="true">#</a> 目标</h2><p>建立一个 lesson3 项目，在其中编写代码。</p><p>当在浏览器中访问 <code>http://localhost:3000/?q=alsotang</code> 时，输出 <code>alsotang</code> 的 md5 值，即 <code>bdd5e57b5c0040f9dc23d430846e68a3</code>。</p><h2 id="挑战" tabindex="-1"><a class="header-anchor" href="#挑战" aria-hidden="true">#</a> 挑战</h2><p>访问 <code>http://localhost:3000/?q=alsotang</code> 时，输出 <code>alsotang</code> 的 sha1 值，即 <code>e3c766d71667567e18f77869c65cd62f6a1b9ab9</code>。</p><h2 id="知识点" tabindex="-1"><a class="header-anchor" href="#知识点" aria-hidden="true">#</a> 知识点</h2><ol><li>学习 req.query 的用法</li><li>学习建立 package.json 来管理 Node.js 项目。</li></ol><h2 id="课程内容" tabindex="-1"><a class="header-anchor" href="#课程内容" aria-hidden="true">#</a> 课程内容</h2><p>卧槽，不写 package.json 就写项目我觉得好不爽啊，所以这个 lesson2 我就得跟大家介绍一下 package.json 这个文件的用法了。</p><p>简单说来呢，这个 package.json 文件就是定义了项目的各种元信息，包括项目的名称，git repo 的地址，作者等等。最重要的是，其中定义了我们项目的依赖，这样这个项目在部署时，我们就不必将 <code>node_modules</code> 目录也上传到服务器，服务器在拿到我们的项目时，只需要执行 <code>npm install</code>，则 npm 会自动读取 package.json 中的依赖并安装在项目的 <code>node_modules</code> 下面，然后程序就可以在服务器上跑起来了。</p><p>本课程的每个 lesson 里面的示例代码都会带上一份 package.json，大家可以去看看它的大概样子。</p><p>我们来新建一个 lesson2 项目，并生成一份它的 package.json。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>mkdir lesson2 &amp;&amp; cd lesson2\nnpm init\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>OK，这时会要求我们输入一些信息，乱填就好了，反正这个地方也不用填依赖关系。</p><p><code>npm init</code> 这个命令的作用就是帮我们互动式地生成一份最简单的 package.json 文件，<code>init</code> 是 <code>initialize</code> 的意思，初始化。</p><p>当乱填信息完毕之后，我们的目录下就会有个 package.json 文件了。</p><p>这时我们来安装依赖，这次的应用，我们依赖 <code>express</code> 和 <code>utility</code> 两个模块。</p><p><code>$ npm install express utility --save</code></p><p>这次的安装命令与上节课的命令有两点不同，一是没有指定 registry，没有指定的情况下，默认从 npm 官方安装，上次我们是从淘宝的源安装的。二是多了个 <code>--save</code> 参数，这个参数的作用，就是会在你安装依赖的同时，自动把这些依赖写入 package.json。命令执行完成之后，查看 package.json，会发现多了一个 <code>dependencies</code> 字段，如下图：</p><p><img src="https://raw.githubusercontent.com/alsotang/node-lessons/master/lesson2/1.png" alt=""></p><p>这时查看 <code>node_modules</code> 目录，会发现有两个文件夹，分别是 express 和 utility</p><p><img src="https://raw.githubusercontent.com/alsotang/node-lessons/master/lesson2/2.png" alt=""></p><p>我们开始写应用层的代码，建立一个 <code>app.js</code> 文件，复制以下代码进去：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 引入依赖</span>\n<span class="token keyword">import</span> express <span class="token keyword">from</span><span class="token string">&#39;express&#39;</span>\n<span class="token keyword">import</span> utility <span class="token keyword">from</span> <span class="token string">&#39;utility&#39;</span>\n\n<span class="token comment">// 建立 express 实例</span>\n<span class="token keyword">let</span> app <span class="token operator">=</span> <span class="token function">express</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\napp<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;/&#39;</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token comment">// 从 req.query 中取出我们的 q 参数。</span>\n  <span class="token comment">// 如果是 post 传来的 body 数据，则是在 req.body 里面，不过 express 默认不处理 body 中的信息，需要引入 https://github.com/expressjs/body-parser 这个中间件才会处理，这个后面会讲到。</span>\n  <span class="token comment">// 如果分不清什么是 query，什么是 body 的话，那就需要补一下 http 的知识了</span>\n  <span class="token keyword">let</span> q <span class="token operator">=</span> req<span class="token punctuation">.</span>query<span class="token punctuation">.</span>q<span class="token punctuation">;</span>\n\n  <span class="token comment">// 调用 utility.md5 方法，得到 md5 之后的值</span>\n  <span class="token comment">// 之所以使用 utility 这个库来生成 md5 值，其实只是习惯问题。每个人都有自己习惯的技术堆栈，</span>\n  <span class="token comment">// 我刚入职阿里的时候跟着苏千和朴灵混，所以也混到了不少他们的技术堆栈，仅此而已。</span>\n  <span class="token comment">// utility 的 github 地址：https://github.com/node-modules/utility</span>\n  <span class="token comment">// 里面定义了很多常用且比较杂的辅助方法，可以去看看</span>\n  <span class="token keyword">let</span> md5Value <span class="token operator">=</span> utility<span class="token punctuation">.</span><span class="token function">md5</span><span class="token punctuation">(</span>q<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n  res<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span>md5Value<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\napp<span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span><span class="token number">3000</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;app is running at port 3000&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>OK，运行我们的程序</p><p><code>$ node app.js</code></p><p>访问 <code>http://localhost:3000/?q=alsotang</code>，完成。</p><h2 id="题外话" tabindex="-1"><a class="header-anchor" href="#题外话" aria-hidden="true">#</a> 题外话</h2><p>如果直接访问 <code>http://localhost:3000/</code> 会抛错</p><p><img src="https://raw.githubusercontent.com/alsotang/node-lessons/master/lesson2/3.png" alt=""></p><p>可以看到，这个错误是从 <code>crypto.js</code> 中抛出的。</p><p>这是因为，当我们不传入 <code>q</code> 参数时，<code>req.query.q</code> 取到的值是 <code>undefined</code>，<code>utility.md5</code> 直接使用了这个空值，导致下层的 <code>crypto</code> 抛错。</p>',33)],o={},p=(0,e(8580).Z)(o,[["render",function(n,s){return(0,a.wg)(),(0,a.iD)("div",null,t)}]])},8580:(n,s)=>{s.Z=(n,s)=>{const e=n.__vccOpts||n;for(const[n,a]of s)e[n]=a;return e}}}]);