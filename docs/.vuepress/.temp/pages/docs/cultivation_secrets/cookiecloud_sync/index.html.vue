<template><div><h1 id="🍪-cookiecloud-同步" tabindex="-1"><a class="header-anchor" href="#🍪-cookiecloud-同步"><span>🍪 CookieCloud 同步</span></a></h1>
<p><strong>CookieCloud 同步</strong> 插件用于从 CookieCloud 服务器同步站点的 Cookie，支持自动新增或更新站点 Cookie，方便在多设备、多环境之间共享登录状态。</p>
<h2 id="⚙️-功能特点" tabindex="-1"><a class="header-anchor" href="#⚙️-功能特点"><span>⚙️ 功能特点</span></a></h2>
<ul>
<li>从 CookieCloud 服务端拉取最新 Cookie 数据</li>
<li>自动匹配 Media Saber 中已有站点并更新 Cookie</li>
<li>可选自动新增站点条目</li>
<li>支持定时同步与手动「立即同步」</li>
<li>支持域名黑名单过滤不需要同步的站点</li>
</ul>
<h2 id="🚀-配置指南" tabindex="-1"><a class="header-anchor" href="#🚀-配置指南"><span>🚀 配置指南</span></a></h2>
<p>在插件配置页面中可以看到所有字段，下面按界面顺序说明每一项如何填写：</p>
<h3 id="📋-必填参数" tabindex="-1"><a class="header-anchor" href="#📋-必填参数"><span>📋 必填参数</span></a></h3>
<ol>
<li>
<p><strong>服务地址 (server)</strong></p>
<ul>
<li>必填</li>
<li>CookieCloud 服务器的访问地址</li>
<li>示例：<code v-pre>http://localhost:8088</code> 或 <code v-pre>https://your-domain.com</code></li>
</ul>
</li>
<li>
<p><strong>用户 Key (userKey)</strong></p>
<ul>
<li>必填</li>
<li>在 CookieCloud 客户端中生成/查看的用户标识</li>
</ul>
</li>
<li>
<p><strong>端对端加密密码 (encryptKey)</strong></p>
<ul>
<li>必填</li>
<li>在 CookieCloud 客户端中设置的「端对端加密」密码；</li>
<li>必须与浏览器侧/客户端中填写的一致，否则无法解密远端数据。</li>
</ul>
</li>
</ol>
<h3 id="⚙️-可选参数" tabindex="-1"><a class="header-anchor" href="#⚙️-可选参数"><span>⚙️ 可选参数</span></a></h3>
<ol start="4">
<li>
<p><strong>执行周期 (cron)</strong></p>
<ul>
<li>选填</li>
<li>使用 Cron 表达式设置定时同步周期</li>
<li>默认示例：<code v-pre>0 2 * * *</code> （每天凌晨 2 点执行）</li>
</ul>
</li>
<li>
<p><strong>通知 (notice)</strong></p>
<ul>
<li>选填</li>
<li>开启后，每次同步完成会发送一条包含成功 / 失败数量等统计信息的通知</li>
</ul>
</li>
<li>
<p><strong>自动增加站点 (autoAddSite)</strong></p>
<ul>
<li>选填，默认可按实际表单为准；</li>
<li>开启：当 Cookie 数据中包含的站点在 Media Saber 中还不存在时，会自动创建站点条目并写入 Cookie；</li>
<li>关闭：只会更新当前已经存在的站点，不会自动新建，适合希望严格手动管理站点列表的用户。</li>
</ul>
</li>
<li>
<p><strong>域名黑名单 (domainBlacklist)</strong></p>
<ul>
<li>选填；每行一个域名/后缀，用于排除不希望同步的站点；</li>
<li>支持精确匹配和类似 <code v-pre>.example.com</code> 这样的后缀匹配；</li>
<li>示例：<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code class="language-text"><span class="line">example.com        # 精确匹配 example.com</span>
<span class="line">.tracker.com       # 匹配所有以 .tracker.com 结尾的域名</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
</li>
</ol>
<h3 id="🔧-工具栏操作" tabindex="-1"><a class="header-anchor" href="#🔧-工具栏操作"><span>🔧 工具栏操作</span></a></h3>
<ul>
<li><strong>立即同步 (run)</strong>：立刻发起一次 Cookie 同步，无视 <code v-pre>cron</code> 设置。</li>
</ul>
<h2 id="📖-使用说明" tabindex="-1"><a class="header-anchor" href="#📖-使用说明"><span>📖 使用说明</span></a></h2>
<ol>
<li>在浏览器或桌面端先配置并验证好 CookieCloud：
<ul>
<li>能看到浏览器端 Cookie 正常同步到 CookieCloud；</li>
<li>如开启了端对端加密，记住加密密码。</li>
</ul>
</li>
<li>在本插件中填写 <code v-pre>服务地址</code>、<code v-pre>用户 Key</code> 和 <code v-pre>端对端加密密码</code>（如有）；</li>
<li>根据自己的站点管理习惯，决定是否开启「自动增加站点」：
<ul>
<li>若希望“一处管理，处处生效”，可以开启；</li>
<li>若希望手动控制站点列表，则关闭。</li>
</ul>
</li>
<li>根据需要将不想同步的站点域名加入「域名黑名单」，例如公共 tracker、临时站点等；</li>
<li>先不设置 <code v-pre>执行周期 (cron)</code>，点击「立即同步」执行一次测试：
<ul>
<li>成功时，可在站点配置中看到 Cookie 被更新，通知中也会有成功/失败数量统计；</li>
<li>若失败，多数是因为服务地址/用户 Key/加密密码不匹配，请逐一排查；</li>
</ul>
</li>
<li>测试通过后，再设置合适的 <code v-pre>执行周期 (cron)</code>，让系统定期自动同步。</li>
</ol>
<h2 id="⚠️-注意事项" tabindex="-1"><a class="header-anchor" href="#⚠️-注意事项"><span>⚠️ 注意事项</span></a></h2>
<ul>
<li>仅同步 Media Saber 已支持的站点类型，其他 Cookie 会被忽略。</li>
<li>域名黑名单中的站点将完全跳过，不参与同步。</li>
<li>请确保 CookieCloud 服务处于可访问状态，且网络连通正常。</li>
<li>若端对端加密密码填写错误，将导致数据解密失败，无法同步。</li>
</ul>
<h2 id="🔗-相关链接" tabindex="-1"><a class="header-anchor" href="#🔗-相关链接"><span>🔗 相关链接</span></a></h2>
<ul>
<li><RouteLink to="/docs/cultivation_secrets/main/">修仙秘籍主页</RouteLink></li>
<li>CookieCloud 官方文档（根据你的部署情况填写）</li>
</ul>
</div></template>


