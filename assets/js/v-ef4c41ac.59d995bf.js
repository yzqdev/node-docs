"use strict";(self.webpackChunknode_docs=self.webpackChunknode_docs||[]).push([[8477],{7864:(n,s,a)=>{a.r(s),a.d(s,{data:()=>t});const t=JSON.parse('{"key":"v-ef4c41ac","path":"/apis/child_process.html","title":"child_process","lang":"zh-CN","frontmatter":{"description":"exec execFile 等同于 execSync 上面代码中，execSync方法的第二个参数是一个对象。该对象的cwd属性指定脚本的当前目录，env属性指定环境变量。上面代码将./nodemodules/.bin目录，存入$PATH变量。这样就可以不加路径，引用项目内部的模块命令了，比如eslint命令实际执行的是./nodemodules/.b...","head":[["meta",{"property":"og:url","content":"https://yzqdev.github.io/node-docs/node-docs/apis/child_process.html"}],["meta",{"property":"og:site_name","content":"node-docs"}],["meta",{"property":"og:title","content":"child_process"}],["meta",{"property":"og:description","content":"exec execFile 等同于 execSync 上面代码中，execSync方法的第二个参数是一个对象。该对象的cwd属性指定脚本的当前目录，env属性指定环境变量。上面代码将./nodemodules/.bin目录，存入$PATH变量。这样就可以不加路径，引用项目内部的模块命令了，比如eslint命令实际执行的是./nodemodules/.b..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2022-08-01T04:27:43.000Z"}],["meta",{"property":"article:modified_time","content":"2022-08-01T04:27:43.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"child_process\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2022-08-01T04:27:43.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"exec","slug":"exec","link":"#exec","children":[]},{"level":2,"title":"execFile","slug":"execfile","link":"#execfile","children":[]},{"level":2,"title":"execSync","slug":"execsync","link":"#execsync","children":[]},{"level":2,"title":"spawn","slug":"spawn","link":"#spawn","children":[]},{"level":2,"title":"fork()","slug":"fork","link":"#fork","children":[]},{"level":2,"title":"send()","slug":"send","link":"#send","children":[]}],"git":{"createdTime":1659265828000,"updatedTime":1659328063000,"contributors":[{"name":"yzqdev","email":"yzqdev@outlook.com","commits":2}]},"readingTime":{"minutes":2.09,"words":626},"filePathRelative":"apis/child_process.md","localizedDate":"2022年7月31日","autoDesc":true,"excerpt":""}')},6500:(n,s,a)=>{a.r(s),a.d(s,{default:()=>o});var t=a(6808);const p=[(0,t.uE)('<h1 id="child-process" tabindex="-1"><a class="header-anchor" href="#child-process" aria-hidden="true">#</a> child_process</h1><h2 id="exec" tabindex="-1"><a class="header-anchor" href="#exec" aria-hidden="true">#</a> exec</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> exec<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;child_process&#39;</span>\n\n<span class="token keyword">let</span> ls <span class="token operator">=</span> <span class="token function">exec</span><span class="token punctuation">(</span><span class="token string">&#39;ls -l&#39;</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">error<span class="token punctuation">,</span> stdout<span class="token punctuation">,</span> stderr</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">if</span> <span class="token punctuation">(</span>error<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>error<span class="token punctuation">.</span>stack<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;Error code: &#39;</span> <span class="token operator">+</span> error<span class="token punctuation">.</span>code<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;Child Process STDOUT: &#39;</span> <span class="token operator">+</span> stdout<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="execfile" tabindex="-1"><a class="header-anchor" href="#execfile" aria-hidden="true">#</a> execFile</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> child_process <span class="token keyword">from</span> <span class="token string">&#39;child_process&#39;</span>\n\n<span class="token keyword">let</span> path <span class="token operator">=</span> <span class="token string">&quot;.&quot;</span><span class="token punctuation">;</span>\nchild_process<span class="token punctuation">.</span><span class="token function">execFile</span><span class="token punctuation">(</span><span class="token string">&#39;/bin/ls&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">&#39;-l&#39;</span><span class="token punctuation">,</span> path<span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">err<span class="token punctuation">,</span> result</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>等同于</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> child <span class="token operator">=</span> <span class="token function">exec</span><span class="token punctuation">(</span><span class="token string">&#39;ls -l&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nchild<span class="token punctuation">.</span>stdout<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&#39;data&#39;</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;stdout: &#39;</span> <span class="token operator">+</span> data<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\nchild<span class="token punctuation">.</span>stderr<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&#39;data&#39;</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;stdout: &#39;</span> <span class="token operator">+</span> data<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\nchild<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&#39;close&#39;</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">code</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;closing code: &#39;</span> <span class="token operator">+</span> code<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="execsync" tabindex="-1"><a class="header-anchor" href="#execsync" aria-hidden="true">#</a> execSync</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> execSync <span class="token keyword">from</span> <span class="token string">&quot;child_process&quot;</span> \n\n<span class="token keyword">let</span> <span class="token constant">SEPARATOR</span> <span class="token operator">=</span> process<span class="token punctuation">.</span>platform <span class="token operator">===</span> <span class="token string">&#39;win32&#39;</span> <span class="token operator">?</span> <span class="token string">&#39;;&#39;</span> <span class="token operator">:</span> <span class="token string">&#39;:&#39;</span><span class="token punctuation">;</span>\n<span class="token keyword">let</span> env <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">assign</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> process<span class="token punctuation">.</span>env<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nenv<span class="token punctuation">.</span><span class="token constant">PATH</span> <span class="token operator">=</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token string">&#39;./node_modules/.bin&#39;</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token constant">SEPARATOR</span> <span class="token operator">+</span> env<span class="token punctuation">.</span><span class="token constant">PATH</span><span class="token punctuation">;</span>\n\n<span class="token keyword">function</span> <span class="token function">myExecSync</span><span class="token punctuation">(</span><span class="token parameter">cmd</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">let</span> output <span class="token operator">=</span> <span class="token function">execSync</span><span class="token punctuation">(</span>cmd<span class="token punctuation">,</span> <span class="token punctuation">{</span>\n    <span class="token literal-property property">cwd</span><span class="token operator">:</span> process<span class="token punctuation">.</span><span class="token function">cwd</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n    <span class="token literal-property property">env</span><span class="token operator">:</span> env\n  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>output<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token function">myExecSync</span><span class="token punctuation">(</span><span class="token string">&#39;eslint .&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码中，<code>execSync</code>方法的第二个参数是一个对象。该对象的cwd属性指定脚本的当前目录，env属性指定环境变量。上面代码将<code>./node_modules/.bin</code>目录，存入<code>$PATH</code>变量。这样就可以不加路径，引用项目内部的模块命令了，比如eslint命令实际执行的是<code>./node_modules/.bin/eslint</code>。</p><h2 id="spawn" tabindex="-1"><a class="header-anchor" href="#spawn" aria-hidden="true">#</a> spawn</h2><p>spawn方法创建一个子进程来执行特定命令，用法与execFile方法类似，但是没有回调函数，只能通过监听事件，来获取运行结果。它属于异步执行，适用于子进程长时间运行的情况。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> child_process <span class="token keyword">from</span> <span class="token string">&#39;child_process&#39;</span>\n\n<span class="token keyword">let</span> path <span class="token operator">=</span> <span class="token string">&#39;.&#39;</span><span class="token punctuation">;</span>\n<span class="token keyword">let</span> ls <span class="token operator">=</span> child_process<span class="token punctuation">.</span><span class="token function">spawn</span><span class="token punctuation">(</span><span class="token string">&#39;/bin/ls&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">&#39;-l&#39;</span><span class="token punctuation">,</span> path<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\nls<span class="token punctuation">.</span>stdout<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&#39;data&#39;</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;stdout: &#39;</span> <span class="token operator">+</span> data<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nls<span class="token punctuation">.</span>stderr<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&#39;data&#39;</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;stderr: &#39;</span> <span class="token operator">+</span> data<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nls<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&#39;close&#39;</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">code</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;child process exited with code &#39;</span> <span class="token operator">+</span> code<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="fork" tabindex="-1"><a class="header-anchor" href="#fork" aria-hidden="true">#</a> fork()</h2><p>fork方法直接创建一个子进程，执行Node脚本，<code>fork(&#39;./child.js&#39;)</code> 相当于 <code>spawn(&#39;node&#39;, [&#39;./child.js&#39;])</code> 。与spawn方法不同的是，fork会在父进程与子进程之间，建立一个通信管道，用于进程之间的通信。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> n <span class="token operator">=</span> child_process<span class="token punctuation">.</span><span class="token function">fork</span><span class="token punctuation">(</span><span class="token string">&#39;./child.js&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\nn<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&#39;message&#39;</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">m</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;PARENT got message:&#39;</span><span class="token punctuation">,</span> m<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\nn<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">hello</span><span class="token operator">:</span> <span class="token string">&#39;world&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码中，fork方法返回一个代表进程间通信管道的对象，对该对象可以监听message事件，用来获取子进程返回的信息，也可以向子进程发送信息。</p><p>child.js脚本的内容如下。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>process<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&#39;message&#39;</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">m</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;CHILD got message:&#39;</span><span class="token punctuation">,</span> m<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\nprocess<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">foo</span><span class="token operator">:</span> <span class="token string">&#39;bar&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码中，子进程监听message事件，并向父进程发送信息。</p><h2 id="send" tabindex="-1"><a class="header-anchor" href="#send" aria-hidden="true">#</a> send()</h2><p>使用 child_process.fork() 生成新进程之后，就可以用 <code>child.send(message, [sendHandle])</code> 向新进程发送消息。新进程中通过监听message事件，来获取消息。</p><p>下面的例子是主进程的代码。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> cp <span class="token keyword">from</span> <span class="token string">&#39;child_process&#39;</span>\n\n<span class="token keyword">let</span> n <span class="token operator">=</span> cp<span class="token punctuation">.</span><span class="token function">fork</span><span class="token punctuation">(</span>__dirname <span class="token operator">+</span> <span class="token string">&#39;/sub.js&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nn<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&#39;message&#39;</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">m</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;PARENT got message:&#39;</span><span class="token punctuation">,</span> m<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nn<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">hello</span><span class="token operator">:</span> <span class="token string">&#39;world&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>下面是子进程sub.js代码。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>process<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&#39;message&#39;</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">m</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;CHILD got message:&#39;</span><span class="token punctuation">,</span> m<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nprocess<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">foo</span><span class="token operator">:</span> <span class="token string">&#39;bar&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>',26)],e={},o=(0,a(8580).Z)(e,[["render",function(n,s){return(0,t.wg)(),(0,t.iD)("div",null,p)}]])},8580:(n,s)=>{s.Z=(n,s)=>{const a=n.__vccOpts||n;for(const[n,t]of s)a[n]=t;return a}}}]);