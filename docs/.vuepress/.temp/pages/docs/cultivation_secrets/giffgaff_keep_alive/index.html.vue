<template><div><h1 id="📱-giffgaff-保号提醒" tabindex="-1"><a class="header-anchor" href="#📱-giffgaff-保号提醒"><span>📱 Giffgaff 保号提醒</span></a></h1>
<p><strong>Giffgaff 保号提醒</strong> 插件用于监控 Giffgaff 手机卡的活跃情况，在临近 180 天不使用即回收的阈值前，提前通过消息通知提醒你进行保号操作。</p>
<h2 id="⚙️-功能特点" tabindex="-1"><a class="header-anchor" href="#⚙️-功能特点"><span>⚙️ 功能特点</span></a></h2>
<ul>
<li>定期检查 Giffgaff 账号/手机号的活跃状态</li>
<li>根据 180 天保号规则，提前发出提醒</li>
<li>支持定时任务与消息推送</li>
</ul>
<h2 id="🚀-配置指南" tabindex="-1"><a class="header-anchor" href="#🚀-配置指南"><span>🚀 配置指南</span></a></h2>
<p>插件主要围绕「提前多少天提醒」来工作，常见字段说明如下：</p>
<h3 id="📋-基础配置" tabindex="-1"><a class="header-anchor" href="#📋-基础配置"><span>📋 基础配置</span></a></h3>
<ol>
<li>
<p><strong>卡片标识 / 备注</strong></p>
<ul>
<li>用于在提醒消息中区分不同的 Giffgaff 卡，通常为手机号或自定义名称；</li>
<li>建议填写能一眼识别的标识，例如：<code v-pre>英国卡 A（尾号 1234）</code>。</li>
</ul>
</li>
<li>
<p><strong>提醒天数 (remindDays)</strong></p>
<ul>
<li>表示“还剩多少天到 180 天期限时开始提醒”；</li>
<li>例如填写 <code v-pre>10</code>：
<ul>
<li>从最后一次付费使用后的第 170 天开始，插件会每天提醒一次；</li>
</ul>
</li>
<li>数值越大，提前量越多，可根据自己习惯调整。</li>
</ul>
</li>
<li>
<p><strong>周期 (cron)</strong></p>
<ul>
<li>选填；控制每天在什么时间检查一次是否需要提醒；</li>
<li>示例：<code v-pre>0 8 * * *</code> 表示每天早上 8 点检查；</li>
<li>一般每天检查一次即可，无需更高频率。</li>
</ul>
</li>
<li>
<p><strong>消息推送 (notice)</strong></p>
<ul>
<li>选填；开启后，在接近保号期限时会通过通知渠道推送消息；</li>
<li>提醒内容通常包括：卡片标识、距离 180 天还剩多少天、以及建议立刻进行一次付费使用等。</li>
</ul>
</li>
</ol>
<h2 id="🔧-工具栏操作" tabindex="-1"><a class="header-anchor" href="#🔧-工具栏操作"><span>🔧 工具栏操作</span></a></h2>
<ul>
<li><strong>运行一次 (run)</strong>：立即执行一次检查任务，验证配置与提醒逻辑是否正常。</li>
</ul>
<h2 id="📖-使用说明" tabindex="-1"><a class="header-anchor" href="#📖-使用说明"><span>📖 使用说明</span></a></h2>
<ol>
<li>确认当前 Giffgaff 官方的保号规则（通常为 180 天内需有一次付费使用行为）；</li>
<li>为每张需要保号的卡片配置一个清晰的标识，填写到插件配置中；</li>
<li>设置合适的 <code v-pre>提醒天数</code>，例如 10～30 天，保证有充足时间补一次付费使用；</li>
<li>配置 <code v-pre>cron</code>，建议每日早晨固定时间检查一次即可；</li>
<li>在通知通道中勾选本插件，确保能收到提醒消息；</li>
<li>点击「运行一次」，若当前距离 180 天不足你设置的提醒天数，将立刻收到一条测试提醒，可用来验证通知是否通畅。</li>
</ol>
<h2 id="⚠️-注意事项" tabindex="-1"><a class="header-anchor" href="#⚠️-注意事项"><span>⚠️ 注意事项</span></a></h2>
<ul>
<li>插件只会发出提醒，不会帮你自动充值或产生付费使用；</li>
<li>时区设置会影响“距离 180 天还有多少天”的计算，请确认系统时间正确；</li>
<li>若你中途主动产生了一次付费使用，建议在系统记录中更新或重置对应卡片的“最近一次使用日期”（以当前实施方式为准），确保提醒逻辑准确；</li>
<li>保号规则以 Giffgaff 官方说明为准，如发现提醒时间明显不符，建议先核对官方规则是否有更新。</li>
</ul>
<h2 id="🔗-相关链接" tabindex="-1"><a class="header-anchor" href="#🔗-相关链接"><span>🔗 相关链接</span></a></h2>
<ul>
<li><RouteLink to="/docs/cultivation_secrets/main/">修仙秘籍主页</RouteLink></li>
<li><RouteLink to="/docs/other/cron_rule/">Cron 表达式说明</RouteLink></li>
</ul>
</div></template>


