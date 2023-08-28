import{_ as t,r as o,o as i,c as l,d as n,e as a,a as p,b as e}from"./app-e9249a1b.js";const c={},r=e(`<h2 id="路由配置" tabindex="-1"><a class="header-anchor" href="#路由配置" aria-hidden="true">#</a> 路由配置</h2><h3 id="navbar" tabindex="-1"><a class="header-anchor" href="#navbar" aria-hidden="true">#</a> navbar</h3><p>改配置决定导航栏显示内容</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token literal-property property">navbar</span><span class="token operator">:</span> NavbarConfig <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
        <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;指南&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">link</span><span class="token operator">:</span> <span class="token string">&#39;/guide/&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">children</span><span class="token operator">:</span><span class="token punctuation">[</span>
            <span class="token string">&#39;/guide/getting-started.md&#39;</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
        <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;插件&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token punctuation">{</span>
                <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;常用功能&#39;</span><span class="token punctuation">,</span>
                <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                    <span class="token string">&#39;/reference/plugin/back-to-top.md&#39;</span><span class="token punctuation">,</span>
                <span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>

        <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
        <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;了解更多&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token punctuation">{</span>
                <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;深入&#39;</span><span class="token punctuation">,</span>
                <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                    <span class="token string">&#39;/advanced/architecture.md&#39;</span><span class="token punctuation">,</span>
                    <span class="token punctuation">{</span>
                        <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;Cookbook&#39;</span><span class="token punctuation">,</span>
                        <span class="token literal-property property">link</span><span class="token operator">:</span> <span class="token string">&#39;/advanced/1/&#39;</span><span class="token punctuation">,</span>
                    <span class="token punctuation">}</span><span class="token punctuation">,</span>
                    <span class="token string">&#39;/advanced/architecture.md&#39;</span><span class="token punctuation">,</span>
                    <span class="token punctuation">{</span>
                        <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;Cookbook&#39;</span><span class="token punctuation">,</span>
                        <span class="token literal-property property">link</span><span class="token operator">:</span> <span class="token string">&#39;/advanced/2/&#39;</span><span class="token punctuation">,</span>
                    <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>

        <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>

<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="sidebar" tabindex="-1"><a class="header-anchor" href="#sidebar" aria-hidden="true">#</a> sidebar</h3><p>该配置决定显示左侧内容</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token literal-property property">sidebar</span><span class="token operator">:</span> SidebarConfig <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token string-property property">&#39;/guide/&#39;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
            <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;指南&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                <span class="token string">&#39;/guide/getting-started.md&#39;</span><span class="token punctuation">,</span>
                <span class="token string">&#39;/guide/configuration.md&#39;</span><span class="token punctuation">,</span>
                <span class="token string">&#39;/guide/deployment.md&#39;</span><span class="token punctuation">,</span>
            <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token string-property property">&#39;/advanced/&#39;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
            <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;菜单演示&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                <span class="token string">&#39;/advanced/architecture.md&#39;</span><span class="token punctuation">,</span>
                <span class="token string">&#39;/advanced/02-test.md&#39;</span><span class="token punctuation">,</span>
            <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>

    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token string-property property">&#39;/reference/&#39;</span><span class="token operator">:</span> <span class="token punctuation">[</span>

        <span class="token punctuation">{</span>
            <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;二级菜单演示&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">collapsible</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
            <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                <span class="token punctuation">{</span>
                    <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;常用功能&#39;</span><span class="token punctuation">,</span>
                    <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                        <span class="token string">&#39;/reference/plugin/back-to-top.md&#39;</span><span class="token punctuation">,</span>
                    <span class="token punctuation">]</span><span class="token punctuation">,</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="评论配置" tabindex="-1"><a class="header-anchor" href="#评论配置" aria-hidden="true">#</a> 评论配置</h2><p>评论采用 <code>github giscus </code></p>`,9),u={href:"https://plugin-comment2.vuejs.press/",target:"_blank",rel:"noopener noreferrer"},d={href:"https://giscus.app/zh-CN",target:"_blank",rel:"noopener noreferrer"},k=e(`<p>申请完毕之后，在 <code>.vuepress/config.ts</code> 中配置</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token function">commentPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">provider</span><span class="token operator">:</span> <span class="token string">&quot;Giscus&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">repo</span><span class="token operator">:</span> <span class="token string">&#39;HokageYeah/blog-giscus-comment&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">repoId</span><span class="token operator">:</span> <span class="token string">&#39;R_kgDOJADaHw&#39;</span><span class="token punctuation">,</span> <span class="token comment">// id</span>
    <span class="token literal-property property">category</span><span class="token operator">:</span> <span class="token string">&#39;Announcements&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">categoryId</span><span class="token operator">:</span> <span class="token string">&#39;DIC_kwDOJADaH84CUUwQ&#39;</span><span class="token punctuation">,</span> <span class="token comment">// id</span>
    <span class="token literal-property property">mapping</span><span class="token operator">:</span> <span class="token string">&#39;pathname&#39;</span><span class="token punctuation">,</span> <span class="token comment">// url</span>
    <span class="token literal-property property">lazyLoading</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token literal-property property">reactionsEnabled</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token literal-property property">inputPosition</span><span class="token operator">:</span> <span class="token string">&#39;bottom&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2);function v(m,b){const s=o("ExternalLinkIcon");return i(),l("div",null,[r,n("ul",null,[n("li",null,[n("a",u,[a("插件地址"),p(s)])]),n("li",null,[n("a",d,[a("申请 giscus 配置"),p(s)])])]),k])}const g=t(c,[["render",v],["__file","01.configuration.html.vue"]]);export{g as default};
