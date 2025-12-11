<template><div><h1 id="🏢-企业微信可信-ip" tabindex="-1"><a class="header-anchor" href="#🏢-企业微信可信-ip"><span>🏢 企业微信可信 IP</span></a></h1>
<p><strong>企业微信可信 IP</strong> 插件用于定期将当前公网 IP 同步到企业微信管理后台的「可信 IP 列表」，解决没有固定公网 IP 时，频繁变更导致的接口调用失败问题。</p>
<h2 id="⚙️-功能特点" tabindex="-1"><a class="header-anchor" href="#⚙️-功能特点"><span>⚙️ 功能特点</span></a></h2>
<ul>
<li>自动获取当前服务器公网 IP</li>
<li>通过企业微信开放接口更新企业可信 IP 列表</li>
<li>支持定时执行，保持 IP 白名单始终最新</li>
<li>支持消息推送，便于查看更新结果</li>
</ul>
<h2 id="🚀-配置指南" tabindex="-1"><a class="header-anchor" href="#🚀-配置指南"><span>🚀 配置指南</span></a></h2>
<p>在插件配置页面中可以看到所有企业微信相关字段，一般包括：</p>
<h3 id="📋-企业微信配置" tabindex="-1"><a class="header-anchor" href="#📋-企业微信配置"><span>📋 企业微信配置</span></a></h3>
<ol>
<li><strong>企业 ID / CorpID</strong></li>
<li><strong>应用凭证（Secret 等）</strong></li>
<li><strong>目标应用或安全设置项 ID</strong></li>
</ol>
<blockquote>
<p>请参照企业微信后台的实际配置项填写，确保有权限修改可信 IP。</p>
</blockquote>
<h3 id="⚙️-调度与通知" tabindex="-1"><a class="header-anchor" href="#⚙️-调度与通知"><span>⚙️ 调度与通知</span></a></h3>
<ol>
<li>
<p><strong>周期 (cron)</strong></p>
<ul>
<li>选填</li>
<li>使用 Cron 表达式设置执行周期，例如：
<ul>
<li><code v-pre>*/30 * * * *</code>：每 30 分钟更新一次</li>
<li><code v-pre>0 * * * *</code>：每小时更新一次</li>
</ul>
</li>
</ul>
</li>
<li>
<p><strong>消息推送 (notice)</strong></p>
<ul>
<li>选填</li>
<li>开启后，每次更新结果会通过通知渠道推送（成功 / 失败、更新的 IP 等）</li>
</ul>
</li>
</ol>
<h3 id="🔧-工具栏操作" tabindex="-1"><a class="header-anchor" href="#🔧-工具栏操作"><span>🔧 工具栏操作</span></a></h3>
<ul>
<li><strong>运行一次 (run)</strong>：立刻执行一次 IP 获取与白名单同步操作。</li>
</ul>
<h2 id="📖-使用说明" tabindex="-1"><a class="header-anchor" href="#📖-使用说明"><span>📖 使用说明</span></a></h2>
<ol>
<li>在企业微信管理后台开启并配置好可写可信 IP 的相关应用或接口权限。</li>
<li>在插件配置中填入企业 ID、Secret 等必要信息。</li>
<li>设置合理的 <code v-pre>cron</code> 周期，根据公网 IP 变动频率决定更新频率。</li>
<li>建议开启「消息推送」，方便第一时间知道 IP 是否同步成功。</li>
<li>点击「运行一次」测试是否能正确写入企业微信可信 IP 列表。</li>
</ol>
<h2 id="⚠️-注意事项" tabindex="-1"><a class="header-anchor" href="#⚠️-注意事项"><span>⚠️ 注意事项</span></a></h2>
<ul>
<li>频繁修改可信 IP 可能受到企业微信接口频率限制，请合理设置执行周期。</li>
<li>若服务器处于多层代理之后，请确认获取到的是对外真实出口 IP。</li>
<li>如企业微信接口或权限策略变更，请根据官方文档及时调整配置。</li>
</ul>
<h2 id="🔗-相关链接" tabindex="-1"><a class="header-anchor" href="#🔗-相关链接"><span>🔗 相关链接</span></a></h2>
<ul>
<li><RouteLink to="/docs/cultivation_secrets/main/">修仙秘籍主页</RouteLink></li>
<li><RouteLink to="/docs/other/cron_rule/">Cron 表达式说明</RouteLink></li>
</ul>
</div></template>


