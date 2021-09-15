import{o as n,c as s,d as a}from"./app.e800a447.js";const t='{"title":"项目配置","description":"","frontmatter":{},"headers":[{"level":2,"title":"项目基础配置","slug":"项目基础配置"},{"level":2,"title":"项目主题配置","slug":"项目主题配置"}],"relativePath":"main/config.md","lastUpdated":1631692784900}',p={},o=[a('<h1 id="项目配置" tabindex="-1">项目配置 <a class="header-anchor" href="#项目配置" aria-hidden="true">#</a></h1><p>在 <code>.vitepress</code> 目录下创建 <code>config.js</code> 文件,该文件为全局配置,与 <code>vue-press</code> 很相似,很多官方文档没有提到的配置建议去翻阅 <code>vue-press</code> 文档查找配置.</p><h2 id="项目基础配置" tabindex="-1">项目基础配置 <a class="header-anchor" href="#项目基础配置" aria-hidden="true">#</a></h2><p>直接上代码</p><div class="language-JavaScript"><pre><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  title<span class="token operator">:</span> <span class="token string">&#39;vite-press入门使用&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 网站标题</span>\n  description<span class="token operator">:</span> <span class="token string">&#39;vite-press&#39;</span><span class="token punctuation">,</span> <span class="token comment">//网站描述</span>\n  base<span class="token operator">:</span> <span class="token string">&#39;/&#39;</span><span class="token punctuation">,</span> <span class="token comment">//  部署时的路径 默认 /  可以使用二级地址 /base/</span>\n  lang<span class="token operator">:</span> <span class="token string">&#39;en-US&#39;</span><span class="token punctuation">,</span> <span class="token comment">//语言</span>\n  <span class="token comment">// 相当于html中&lt;head&gt;标签</span>\n  head<span class="token operator">:</span> <span class="token punctuation">[</span>\n    <span class="token punctuation">[</span>\n      <span class="token string">&#39;link&#39;</span><span class="token punctuation">,</span>\n      <span class="token punctuation">{</span>\n        rel<span class="token operator">:</span> <span class="token string">&#39;icon&#39;</span><span class="token punctuation">,</span>\n        href<span class="token operator">:</span> <span class="token string">&#39;favicon.ico&#39;</span> <span class="token comment">// 图片放在public文件夹下</span>\n      <span class="token punctuation">}</span>\n    <span class="token punctuation">]</span>\n  <span class="token punctuation">]</span>\n<span class="token punctuation">}</span>\n</code></pre></div><div class="tip custom-block"><p class="custom-block-title">这是绿色</p><p>需要手动配置的很少,更多需求自行百度.</p></div><h2 id="项目主题配置" tabindex="-1">项目主题配置 <a class="header-anchor" href="#项目主题配置" aria-hidden="true">#</a></h2><div class="language-JavaScript"><pre><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  <span class="token operator">...</span>\n  <span class="token comment">// 主题配置</span>\n  themeConfig<span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token comment">// nav 左侧logo</span>\n    logo<span class="token operator">:</span> <span class="token string">&#39;/favicon.ico&#39;</span><span class="token punctuation">,</span>\n    <span class="token comment">//   头部导航</span>\n    nav<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span> text<span class="token operator">:</span> <span class="token string">&#39;关于&#39;</span><span class="token punctuation">,</span> link<span class="token operator">:</span> <span class="token string">&#39;/about/&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre></div>',8)];p.render=function(a,t,p,e,c,l){return n(),s("div",null,o)};export{t as __pageData,p as default};
