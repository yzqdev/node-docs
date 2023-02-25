"use strict";(self.webpackChunknode_docs=self.webpackChunknode_docs||[]).push([[6770],{2951:(n,s,a)=>{a.r(s),a.d(s,{data:()=>t});const t=JSON.parse('{"key":"v-0fd01842","path":"/node-snippets/show-badge.html","title":"控制台显示badge","lang":"zh-CN","frontmatter":{"description":"见简书的控制台 然后就可以打印了","head":[["meta",{"property":"og:url","content":"https://yzqdev.github.io/node-docs/node-docs/node-snippets/show-badge.html"}],["meta",{"property":"og:site_name","content":"node-docs"}],["meta",{"property":"og:title","content":"控制台显示badge"}],["meta",{"property":"og:description","content":"见简书的控制台 然后就可以打印了"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2022-03-26T15:48:25.000Z"}],["meta",{"property":"article:modified_time","content":"2022-03-26T15:48:25.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"控制台显示badge\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2022-03-26T15:48:25.000Z\\",\\"author\\":[]}"]]},"headers":[],"git":{"createdTime":1648309705000,"updatedTime":1648309705000,"contributors":[{"name":"yzqdev","email":"yzqdev@outlook.com","commits":1}]},"readingTime":{"minutes":0.35,"words":105},"filePathRelative":"node-snippets/show-badge.md","localizedDate":"2022年3月26日","autoDesc":true,"excerpt":""}')},4802:(n,s,a)=>{a.r(s),a.d(s,{default:()=>p});var t=a(6808);const e=[(0,t.uE)('<h1 id="控制台显示badge" tabindex="-1"><a class="header-anchor" href="#控制台显示badge" aria-hidden="true">#</a> 控制台显示badge</h1><p>见简书的控制台</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">showBadge</span><span class="token punctuation">(</span><span class="token parameter">name<span class="token punctuation">,</span> version<span class="token punctuation">,</span> nameStyle<span class="token punctuation">,</span> versionStyle</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>\n    <span class="token string">&quot;%c &quot;</span><span class="token punctuation">.</span><span class="token function">concat</span><span class="token punctuation">(</span>name<span class="token punctuation">,</span> <span class="token string">&quot; %c &quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">concat</span><span class="token punctuation">(</span>version<span class="token punctuation">,</span> <span class="token string">&quot; &quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n    <span class="token string">&quot;padding: 1px; border-radius: 3px 0 0 3px; color: #fff; background: &quot;</span><span class="token punctuation">.</span><span class="token function">concat</span><span class="token punctuation">(</span>\n      nameStyle<span class="token punctuation">,</span>\n      <span class="token string">&quot;;&quot;</span>\n    <span class="token punctuation">)</span><span class="token punctuation">,</span>\n    <span class="token string">&quot;padding: 1px; border-radius: 0 3px 3px 0; color: #fff; background: &quot;</span><span class="token punctuation">.</span><span class="token function">concat</span><span class="token punctuation">(</span>\n      versionStyle<span class="token punctuation">,</span>\n      <span class="token string">&quot;;&quot;</span>\n    <span class="token punctuation">)</span>\n  <span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n\n\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后就可以打印了</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code> <span class="token function">showBadge</span><span class="token punctuation">(</span><span class="token string">&quot;Environment&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;production&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;#606060&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;RGB(66,192,46)&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token function">showBadge</span><span class="token punctuation">(</span><span class="token string">&quot;Platform&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;shakespeare&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;#606060&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;RGB(20,117,178)&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token function">showBadge</span><span class="token punctuation">(</span><span class="token string">&quot;Version &quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;1.1.0&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;#606060&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;RGB(20,117,178)&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token function">showBadge</span><span class="token punctuation">(</span>\n    <span class="token string">&quot;Build Date&quot;</span><span class="token punctuation">,</span>\n    <span class="token string">&quot;2020-08-26T02:44:50.105Z&quot;</span><span class="token punctuation">,</span>\n    <span class="token string">&quot;#606060&quot;</span><span class="token punctuation">,</span>\n    <span class="token string">&quot;RGB(20,117,178)&quot;</span>\n  <span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>',5)],o={},p=(0,a(8580).Z)(o,[["render",function(n,s){return(0,t.wg)(),(0,t.iD)("div",null,e)}]])},8580:(n,s)=>{s.Z=(n,s)=>{const a=n.__vccOpts||n;for(const[n,t]of s)a[n]=t;return a}}}]);