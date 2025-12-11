<template><div><h1 id="🐝-hdhive-签到" tabindex="-1"><a class="header-anchor" href="#🐝-hdhive-签到"><span>🐝 HDHive 签到</span></a></h1>
<p><strong>HDHive 签到</strong> 插件用于自动登录并完成 HDHive 站点的每日签到任务，避免漏签。</p>
<h2 id="⚙️-功能特点" tabindex="-1"><a class="header-anchor" href="#⚙️-功能特点"><span>⚙️ 功能特点</span></a></h2>
<ul>
<li>自动完成 HDHive 每日签到</li>
<li>支持定时执行签到任务</li>
<li>可选开启消息推送，查看签到结果</li>
</ul>
<h2 id="🚀-配置指南" tabindex="-1"><a class="header-anchor" href="#🚀-配置指南"><span>🚀 配置指南</span></a></h2>
<p>插件配置字段与 HDHive 登录方式直接相关，按界面提示填写即可：</p>
<h3 id="📋-基础配置" tabindex="-1"><a class="header-anchor" href="#📋-基础配置"><span>📋 基础配置</span></a></h3>
<ol>
<li>
<p><strong>用户名 (username)</strong></p>
<ul>
<li>必填；你的 HDHive 登录用户名；</li>
<li>建议与网页端登录保持一致，避免填错大小写或带多余空格。</li>
</ul>
</li>
<li>
<p><strong>密码 (password)</strong></p>
<ul>
<li>必填；你的 HDHive 登录密码；</li>
<li>如启用了二步验证或额外验证方式，以站点实际要求为准。</li>
</ul>
</li>
<li>
<p><strong>周期 (cron)</strong></p>
<ul>
<li>选填；使用 Cron 表达式设置签到执行时间；</li>
<li>示例：<code v-pre>0 8 * * *</code> 表示每天早上 8 点自动签到；</li>
<li>若留空，则不会自动运行，只能通过「运行一次」手动执行。</li>
</ul>
</li>
<li>
<p><strong>消息推送 (notice)</strong></p>
<ul>
<li>选填；开启后，每次签到都会推送一条消息；</li>
<li>内容通常包括：签到是否成功、错误原因等，便于你快速确认状态。</li>
</ul>
</li>
</ol>
<h3 id="🔧-工具栏操作" tabindex="-1"><a class="header-anchor" href="#🔧-工具栏操作"><span>🔧 工具栏操作</span></a></h3>
<ul>
<li><strong>运行一次 (run)</strong>：立即执行一次签到任务，用于测试配置是否正确。</li>
</ul>
<h2 id="📖-使用说明" tabindex="-1"><a class="header-anchor" href="#📖-使用说明"><span>📖 使用说明</span></a></h2>
<ol>
<li>在浏览器中确认可以正常登录 HDHive，确保账号状态正常；</li>
<li>在本插件配置中填写与网页一致的用户名与密码；</li>
<li>先不设置 <code v-pre>cron</code>，直接点击「运行一次」做一次手动测试：
<ul>
<li>成功时，会提示今日签到成功或已签到；</li>
<li>失败时，请检查用户名/密码是否正确，或是否存在验证码等额外验证；</li>
</ul>
</li>
<li>测试通过后，再设置每天固定时间的 <code v-pre>cron</code> 表达式，交给系统自动执行；</li>
<li>如希望随时收到签到结果，开启「消息推送」，并在消息通道中勾选本插件。</li>
</ol>
<h2 id="⚠️-注意事项" tabindex="-1"><a class="header-anchor" href="#⚠️-注意事项"><span>⚠️ 注意事项</span></a></h2>
<ul>
<li>不要设置过于频繁的签到周期，每天一次即可；</li>
<li>连续多次失败可能会触发站点风控，建议先暂停任务排查原因；</li>
<li>若站点登录方式或签到入口有调整，请关注插件更新或社区公告；</li>
<li>如你启用了多重验证（如二步验证），本插件可能无法完成登录，此时建议改用站点支持的其他自动化方式。</li>
</ul>
<h2 id="🔗-相关链接" tabindex="-1"><a class="header-anchor" href="#🔗-相关链接"><span>🔗 相关链接</span></a></h2>
<ul>
<li><RouteLink to="/docs/cultivation_secrets/main/">修仙秘籍主页</RouteLink></li>
<li><RouteLink to="/docs/other/cron_rule/">Cron 表达式说明</RouteLink></li>
</ul>
</div></template>


