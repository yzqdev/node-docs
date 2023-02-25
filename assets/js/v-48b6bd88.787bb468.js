"use strict";(self.webpackChunknode_docs=self.webpackChunknode_docs||[]).push([[4907],{1093:(n,s,a)=>{a.r(s),a.d(s,{data:()=>e});const e=JSON.parse('{"key":"v-48b6bd88","path":"/node-lessons/lesson10.html","title":"10.正则表达式","lang":"zh-CN","frontmatter":{"order":10,"description":"目标 找出其中 包含 p 但不包含 ph 的所有单词，即 [ \'python\', \'javascript\', \'jsonp\' ] 知识点 1. 正则表达式的使用 2. js 中的正则表达式与 pcre( ) 的区别 课程内容 开始这门课之前，大家先去看两篇文章。 《正则表达式30分钟入门教程》： 好了。 在很久很久以前，有一门语言一度是字符串处理领域的...","head":[["meta",{"property":"og:url","content":"https://yzqdev.github.io/node-docs/node-docs/node-lessons/lesson10.html"}],["meta",{"property":"og:site_name","content":"node-docs"}],["meta",{"property":"og:title","content":"10.正则表达式"}],["meta",{"property":"og:description","content":"目标 找出其中 包含 p 但不包含 ph 的所有单词，即 [ \'python\', \'javascript\', \'jsonp\' ] 知识点 1. 正则表达式的使用 2. js 中的正则表达式与 pcre( ) 的区别 课程内容 开始这门课之前，大家先去看两篇文章。 《正则表达式30分钟入门教程》： 好了。 在很久很久以前，有一门语言一度是字符串处理领域的..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2022-03-26T15:48:25.000Z"}],["meta",{"property":"article:modified_time","content":"2022-03-26T15:48:25.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"10.正则表达式\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2022-03-26T15:48:25.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"目标","slug":"目标","link":"#目标","children":[]},{"level":2,"title":"知识点","slug":"知识点","link":"#知识点","children":[]},{"level":2,"title":"课程内容","slug":"课程内容","link":"#课程内容","children":[]}],"git":{"createdTime":1648309705000,"updatedTime":1648309705000,"contributors":[{"name":"yzqdev","email":"yzqdev@outlook.com","commits":1}]},"readingTime":{"minutes":2.86,"words":859},"filePathRelative":"node-lessons/lesson10.md","localizedDate":"2022年3月26日","autoDesc":true,"excerpt":""}')},7761:(n,s,a)=>{a.r(s),a.d(s,{default:()=>h});var e=a(6808);const p=(0,e.uE)('<h1 id="_10-正则表达式" tabindex="-1"><a class="header-anchor" href="#_10-正则表达式" aria-hidden="true">#</a> 10.正则表达式</h1><h2 id="目标" tabindex="-1"><a class="header-anchor" href="#目标" aria-hidden="true">#</a> 目标</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> web_development <span class="token operator">=</span> <span class="token string">&quot;python php ruby javascript jsonp perhapsphpisoutdated&quot;</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>找出其中 包含 <code>p</code> 但不包含 <code>ph</code> 的所有单词，即</p><p><code>[ &#39;python&#39;, &#39;javascript&#39;, &#39;jsonp&#39; ]</code></p><h2 id="知识点" tabindex="-1"><a class="header-anchor" href="#知识点" aria-hidden="true">#</a> 知识点</h2>',6),t=(0,e._)("li",null,"正则表达式的使用",-1),l={href:"http://en.wikipedia.org/wiki/Perl_Compatible_Regular_Expressions",target:"_blank",rel:"noopener noreferrer"},o=(0,e._)("h2",{id:"课程内容",tabindex:"-1"},[(0,e._)("a",{class:"header-anchor",href:"#课程内容","aria-hidden":"true"},"#"),(0,e.Uk)(" 课程内容")],-1),c=(0,e._)("p",null,"开始这门课之前，大家先去看两篇文章。",-1),i={href:"http://www.cnblogs.com/deerchao/archive/2006/08/24/zhengzhe30fengzhongjiaocheng.html",target:"_blank",rel:"noopener noreferrer"},r=(0,e._)("p",null,"好了。",-1),u=(0,e._)("p",null,"在很久很久以前，有一门语言一度是字符串处理领域的王者，叫 perl。",-1),d=(0,e._)("p",null,"伴随着 perl，有一个类似正则表达式的标准被实现了出来，叫 pcre：Perl Compatible Regular Expressions。",-1),k=(0,e._)("p",null,"不过遗憾的是，js 里面的正则与 pcre 不是兼容的。很多语言都这样。",-1),g={href:"http://refiddle.com/",target:"_blank",rel:"noopener noreferrer"},m=(0,e.uE)('<p>接下来我们主要讲讲 js 中需要注意的地方，至于正则表达式的内容，上面那两篇文章足够学习了。</p><p>第一，</p><p>js 中，对于四种零宽断言，只支持 零宽度正预测先行断言 和 零宽度负预测先行断言 这两种。</p><p>第二，</p><p>js 中，正则表达式后面可以跟三个 flag，比如 <code>/something/igm</code>。</p><p>他们的意义分别是，</p><ul><li>i 的意义是不区分大小写</li><li>g 的意义是，匹配多个</li><li>m 的意义是，是 <code>^</code> 和 <code>$</code> 可以匹配<strong>每</strong>一行的开头。</li></ul><p>分别举个例子：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">a</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span><span class="token string">&#39;A&#39;</span><span class="token punctuation">)</span> <span class="token comment">// =&gt; false</span>\n<span class="token operator">/</span>a<span class="token operator">/</span>i<span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span><span class="token string">&#39;A&#39;</span><span class="token punctuation">)</span> <span class="token comment">// =&gt; true</span>\n\n<span class="token string">&#39;hello hell hoo&#39;</span><span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">h.*?\\b</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">)</span> <span class="token comment">// =&gt; [ &#39;hello&#39;, index: 0, input: &#39;hello hell hoo&#39; ]</span>\n<span class="token string">&#39;hello hell hoo&#39;</span><span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">h.*?\\b</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span><span class="token punctuation">)</span> <span class="token comment">// =&gt; [ &#39;hello&#39;, &#39;hell&#39;, &#39;hoo&#39; ]</span>\n\n<span class="token string">&#39;aaa\\nbbb\\nccc&#39;</span><span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">^[\\s\\S]*?$</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span><span class="token punctuation">)</span> <span class="token comment">// =&gt; [ &#39;aaa\\nbbb\\nccc&#39; ]</span>\n<span class="token string">&#39;aaa\\nbbb\\nccc&#39;</span><span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">^[\\s\\S]*?$</span><span class="token regex-delimiter">/</span><span class="token regex-flags">gm</span></span><span class="token punctuation">)</span> <span class="token comment">// =&gt; [ &#39;aaa&#39;, &#39;bbb&#39;, &#39;ccc&#39; ]</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>与 m 意义相关的，还有 <code>\\A</code>, <code>\\Z</code> 和 <code>\\z</code></p><p>他们的意义分别是：</p><div class="language-txt line-numbers-mode" data-ext="txt"><pre class="language-txt"><code>\\A  字符串开头(类似^，但不受处理多行选项的影响)\n\\Z  字符串结尾或行尾(不受处理多行选项的影响)\n\\z  字符串结尾(类似$，但不受处理多行选项的影响)\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在 js 中，g flag 会影响 <code>String.prototype.match()</code> 和 <code>RegExp.prototype.exec()</code> 的行为</p><p><code>String.prototype.match()</code> 中，返回数据的格式会不一样，加 g 会返回数组，不加 g 则返回比较详细的信息</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token operator">&gt;</span> <span class="token string">&#39;hello hell&#39;</span><span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">h(.*?)\\b</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span><span class="token punctuation">)</span>\n<span class="token punctuation">[</span> <span class="token string">&#39;hello&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;hell&#39;</span> <span class="token punctuation">]</span>\n\n<span class="token operator">&gt;</span> <span class="token string">&#39;hello hell&#39;</span><span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">h(.*?)\\b</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">)</span>\n<span class="token punctuation">[</span> <span class="token string">&#39;hello&#39;</span><span class="token punctuation">,</span>\n  <span class="token string">&#39;ello&#39;</span><span class="token punctuation">,</span>\n  <span class="token literal-property property">index</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>\n  <span class="token literal-property property">input</span><span class="token operator">:</span> <span class="token string">&#39;hello hell&#39;</span> <span class="token punctuation">]</span>\n\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>RegExp.prototype.exec()</code> 中，加 g 之后，如果你的正则不是字面量的正则，而是存储在变量中的话，特么的这个变量就会变得有记忆！！</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token operator">&gt;</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">h(.*?)\\b</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span><span class="token punctuation">.</span><span class="token function">exec</span><span class="token punctuation">(</span><span class="token string">&#39;hello hell&#39;</span><span class="token punctuation">)</span>\n<span class="token punctuation">[</span> <span class="token string">&#39;hello&#39;</span><span class="token punctuation">,</span>\n  <span class="token string">&#39;ello&#39;</span><span class="token punctuation">,</span>\n  <span class="token literal-property property">index</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>\n  <span class="token literal-property property">input</span><span class="token operator">:</span> <span class="token string">&#39;hello hell&#39;</span> <span class="token punctuation">]</span>\n<span class="token operator">&gt;</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">h(.*?)\\b</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span><span class="token punctuation">.</span><span class="token function">exec</span><span class="token punctuation">(</span><span class="token string">&#39;hello hell&#39;</span><span class="token punctuation">)</span>\n<span class="token punctuation">[</span> <span class="token string">&#39;hello&#39;</span><span class="token punctuation">,</span>\n  <span class="token string">&#39;ello&#39;</span><span class="token punctuation">,</span>\n  <span class="token literal-property property">index</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>\n  <span class="token literal-property property">input</span><span class="token operator">:</span> <span class="token string">&#39;hello hell&#39;</span> <span class="token punctuation">]</span>\n\n\n<span class="token operator">&gt;</span> <span class="token keyword">let</span> re <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">h(.*?)\\b</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span><span class="token punctuation">;</span>\n<span class="token keyword">undefined</span>\n<span class="token operator">&gt;</span> re<span class="token punctuation">.</span><span class="token function">exec</span><span class="token punctuation">(</span><span class="token string">&#39;hello hell&#39;</span><span class="token punctuation">)</span>\n<span class="token punctuation">[</span> <span class="token string">&#39;hello&#39;</span><span class="token punctuation">,</span>\n  <span class="token string">&#39;ello&#39;</span><span class="token punctuation">,</span>\n  <span class="token literal-property property">index</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>\n  <span class="token literal-property property">input</span><span class="token operator">:</span> <span class="token string">&#39;hello hell&#39;</span> <span class="token punctuation">]</span>\n<span class="token operator">&gt;</span> re<span class="token punctuation">.</span><span class="token function">exec</span><span class="token punctuation">(</span><span class="token string">&#39;hello hell&#39;</span><span class="token punctuation">)</span>\n<span class="token punctuation">[</span> <span class="token string">&#39;hell&#39;</span><span class="token punctuation">,</span>\n  <span class="token string">&#39;ell&#39;</span><span class="token punctuation">,</span>\n  <span class="token literal-property property">index</span><span class="token operator">:</span> <span class="token number">6</span><span class="token punctuation">,</span>\n  <span class="token literal-property property">input</span><span class="token operator">:</span> <span class="token string">&#39;hello hell&#39;</span> <span class="token punctuation">]</span>\n<span class="token operator">&gt;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>第三，</p><p>大家知道，<code>.</code> 是不可以匹配 <code>\\n</code> 的。如果我们想匹配的数据涉及到了跨行，比如下面这样的。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> multiline <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;multiline&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">let</span> text <span class="token operator">=</span> multiline<span class="token punctuation">.</span><span class="token function">stripIndent</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n<span class="token comment">/*\n    head\n    ```\n    code code2 .code3```\n    ```\n    foot\n*/</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果我们想把两个 ``` 中包含的内容取出来，应该怎么办？</p><p>直接用 <code>.</code> 匹配不到 <code>\\n</code>，所以我们需要找到一个原子，能匹配包括 <code>\\n</code> 在内的所有字符。</p><p>这个原子的惯用写法就是 <code>[\\s\\S]</code></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> match1 <span class="token operator">=</span> text<span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">^```[\\s\\S]+?^```</span><span class="token regex-delimiter">/</span><span class="token regex-flags">gm</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>match1<span class="token punctuation">)</span> <span class="token comment">// =&gt; [ &#39;```\\ncode code2 code3```\\n```&#39; ]</span>\n\n<span class="token comment">// 这里有一种很骚的写法，[^] 与 [\\s\\S] 等价</span>\n<span class="token keyword">let</span> match2 <span class="token operator">=</span> text<span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">^```[^]+?^```</span><span class="token regex-delimiter">/</span><span class="token regex-flags">gm</span></span><span class="token punctuation">)</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>match2<span class="token punctuation">)</span> <span class="token comment">// =&gt; [ &#39;```\\ncode code2 .code3```\\n```&#39; ]</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>完。</p>',25),v={},h=(0,a(8580).Z)(v,[["render",function(n,s){const a=(0,e.up)("ExternalLinkIcon");return(0,e.wg)(),(0,e.iD)("div",null,[p,(0,e._)("ol",null,[t,(0,e._)("li",null,[(0,e.Uk)("js 中的正则表达式与 pcre("),(0,e._)("a",l,[(0,e.Uk)("http://en.wikipedia.org/wiki/Perl_Compatible_Regular_Expressions"),(0,e.Wm)(a)]),(0,e.Uk)(" ) 的区别")])]),o,c,(0,e._)("p",null,[(0,e.Uk)("《正则表达式30分钟入门教程》："),(0,e._)("a",i,[(0,e.Uk)("http://www.cnblogs.com/deerchao/archive/2006/08/24/zhengzhe30fengzhongjiaocheng.html"),(0,e.Wm)(a)])]),r,u,d,k,(0,e._)("p",null,[(0,e.Uk)("如果需要测试你自己写的正则表达式，建议上这里："),(0,e._)("a",g,[(0,e.Uk)("http://refiddle.com/"),(0,e.Wm)(a)]),(0,e.Uk)(" ，可以所见即所得地调试。")]),m])}]])},8580:(n,s)=>{s.Z=(n,s)=>{const a=n.__vccOpts||n;for(const[n,e]of s)a[n]=e;return a}}}]);