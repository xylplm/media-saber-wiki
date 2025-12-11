<template><div><h1 id="📦-115-签到" tabindex="-1"><a class="header-anchor" href="#📦-115-签到"><span>📦 115 签到</span></a></h1>
<p><strong>115 签到</strong> 插件用于自动完成 115 网盘的每日签到任务，获取积分/空间等奖励，避免漏签。</p>
<h2 id="⚙️-功能特点" tabindex="-1"><a class="header-anchor" href="#⚙️-功能特点"><span>⚙️ 功能特点</span></a></h2>
<ul>
<li>自动登录并完成 115 每日签到</li>
<li>支持定时执行签到任务</li>
<li>可选开启消息推送，查看签到结果</li>
</ul>
<h2 id="🚀-配置指南" tabindex="-1"><a class="header-anchor" href="#🚀-配置指南"><span>🚀 配置指南</span></a></h2>
<p>插件配置字段与 115 网盘的登录态相关，这里从“界面怎么填”的角度做简要说明：</p>
<h3 id="📋-基础配置" tabindex="-1"><a class="header-anchor" href="#📋-基础配置"><span>📋 基础配置</span></a></h3>
<ol>
<li>
<p><strong>115 Cookie / 登录信息</strong></p>
<ul>
<li>一般为从浏览器中导出的 115 网盘登录 Cookie（字段名称以表单为准，如 <code v-pre>cookie</code> 等）；</li>
<li>要求：在同一浏览器中使用该 Cookie 访问 115 官方网站，应当已经处于登录状态；</li>
<li>建议：在浏览器登录 115 后，使用开发者工具复制整段 Cookie 粘贴到表单中。</li>
</ul>
</li>
<li>
<p><strong>周期 (cron)</strong></p>
<ul>
<li>选填；使用 Cron 表达式设置每日签到时间；</li>
<li>示例：
<ul>
<li><code v-pre>0 9 * * *</code>：每天 09:00 执行一次签到；</li>
<li>留空：不自动执行，只能通过「运行一次」手动触发。</li>
</ul>
</li>
</ul>
</li>
<li>
<p><strong>消息推送 (notice)</strong></p>
<ul>
<li>选填；开启后，每次签到都会推送一条结果通知；</li>
<li>通常会包含：是否已经签到过、签到是否成功等信息，便于你确认状态。</li>
</ul>
</li>
</ol>
<h3 id="🔧-工具栏操作" tabindex="-1"><a class="header-anchor" href="#🔧-工具栏操作"><span>🔧 工具栏操作</span></a></h3>
<ul>
<li><strong>运行一次 (run)</strong>：立即执行一次签到任务，用于验证配置是否正确。</li>
</ul>
<h2 id="📖-使用说明" tabindex="-1"><a class="header-anchor" href="#📖-使用说明"><span>📖 使用说明</span></a></h2>
<ol>
<li>在浏览器中登录 115 网盘，确认账号状态正常；</li>
<li>在插件配置页中，按照字段提示复制并填写 115 的 Cookie（或当前版本要求的登录字段，如有单独的 cookie 文本框等）；</li>
<li>建议先不设置 <code v-pre>cron</code>，直接点击「运行一次」做一次手动测试：
<ul>
<li>若配置正确，会返回“今天已签到”或“签到成功”的结果；</li>
<li>若登录失效或 Cookie 错误，会在日志/通知中提示；</li>
</ul>
</li>
<li>测试成功后，根据需求设置 <code v-pre>cron</code>，例如每天早上固定时间执行；</li>
<li>如希望随时了解签到情况，开启「消息推送」，并在通知渠道中勾选本插件。</li>
</ol>
<h2 id="⚠️-注意事项" tabindex="-1"><a class="header-anchor" href="#⚠️-注意事项"><span>⚠️ 注意事项</span></a></h2>
<ul>
<li>不要设置过于频繁的签到周期，通常每天一次即可；</li>
<li>如果更换了登录设备、修改了密码或清理了浏览器，会导致原有 Cookie 失效，需要重新抓取并更新配置；</li>
<li>如 115 官方登录/签到规则有调整，短期内可能出现签到失败的情况，可留意插件更新说明；</li>
<li>建议定期打开日志或查看最近通知，确认签到仍然稳定执行。</li>
</ul>
<h2 id="🔗-相关链接" tabindex="-1"><a class="header-anchor" href="#🔗-相关链接"><span>🔗 相关链接</span></a></h2>
<ul>
<li><RouteLink to="/docs/cultivation_secrets/main/">修仙秘籍主页</RouteLink></li>
<li><RouteLink to="/docs/other/cron_rule/">Cron 表达式说明</RouteLink></li>
</ul>
</div></template>


