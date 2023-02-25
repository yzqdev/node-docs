"use strict";(self.webpackChunknode_docs=self.webpackChunknode_docs||[]).push([[9940],{8787:(n,a,t)=>{t.r(a),t.d(a,{data:()=>e});const e=JSON.parse('{"key":"v-12bdda80","path":"/nestjs/proxy.html","title":"使用反向代理","lang":"zh-CN","frontmatter":{"description":"安装http-proxy-middleware","head":[["meta",{"property":"og:url","content":"https://yzqdev.github.io/node-docs/node-docs/nestjs/proxy.html"}],["meta",{"property":"og:site_name","content":"node-docs"}],["meta",{"property":"og:title","content":"使用反向代理"}],["meta",{"property":"og:description","content":"安装http-proxy-middleware"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2022-03-26T15:48:25.000Z"}],["meta",{"property":"article:modified_time","content":"2022-03-26T15:48:25.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"使用反向代理\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2022-03-26T15:48:25.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"安装http-proxy-middleware","slug":"安装http-proxy-middleware","link":"#安装http-proxy-middleware","children":[]}],"git":{"createdTime":1648309705000,"updatedTime":1648309705000,"contributors":[{"name":"yzqdev","email":"yzqdev@outlook.com","commits":1}]},"readingTime":{"minutes":0.17,"words":50},"filePathRelative":"nestjs/proxy.md","localizedDate":"2022年3月26日","autoDesc":true,"excerpt":""}')},2391:(n,a,t)=>{t.r(a),t.d(a,{default:()=>o});var e=t(6808);const s=[(0,e.uE)('<h1 id="使用反向代理" tabindex="-1"><a class="header-anchor" href="#使用反向代理" aria-hidden="true">#</a> 使用反向代理</h1><h2 id="安装http-proxy-middleware" tabindex="-1"><a class="header-anchor" href="#安装http-proxy-middleware" aria-hidden="true">#</a> 安装http-proxy-middleware</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span>  <span class="token punctuation">{</span> createProxyMiddleware<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;http-proxy-middleware&#39;</span><span class="token punctuation">;</span>\n\n<span class="token comment">// 然后在bootstrap方法加上</span>\n<span class="token comment">//跟vite,vue-cli用法一样</span>\napp<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token string">&#39;/mihoyo&#39;</span><span class="token punctuation">,</span> <span class="token function">createProxyMiddleware</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">target</span><span class="token operator">:</span> <span class="token string">&#39;https://bbs-api.mihoyo.com&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">changeOrigin</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">,</span><span class="token literal-property property">pathRewrite</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token string-property property">&#39;^/mihoyo&#39;</span><span class="token operator">:</span> <span class="token string">&#39;/&#39;</span><span class="token punctuation">,</span> <span class="token comment">// rewrite path</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>',3)],p={},o=(0,t(8580).Z)(p,[["render",function(n,a){return(0,e.wg)(),(0,e.iD)("div",null,s)}]])},8580:(n,a)=>{a.Z=(n,a)=>{const t=n.__vccOpts||n;for(const[n,e]of a)t[n]=e;return t}}}]);