<template><div><h1 id="⏱️-时刻" tabindex="-1"><a class="header-anchor" href="#⏱️-时刻"><span>⏱️ 时刻</span></a></h1>
<p><strong>时刻</strong> 插件用于在特定时间点提醒你那些值得被记住的瞬间，可以视作一个轻量级「纪念日 / 倒计时 / 提醒」工具。</p>
<h2 id="⚙️-功能特点" tabindex="-1"><a class="header-anchor" href="#⚙️-功能特点"><span>⚙️ 功能特点</span></a></h2>
<ul>
<li>可配置多个「时刻」事件</li>
<li>支持按时间点或周期提醒</li>
<li>支持通过通知渠道发送提醒内容</li>
</ul>
<h2 id="🚀-配置指南" tabindex="-1"><a class="header-anchor" href="#🚀-配置指南"><span>🚀 配置指南</span></a></h2>
<p>在插件配置页面中可以看到所有「时刻」相关字段，这里从使用角度给出通用说明：</p>
<h3 id="📋-事件配置" tabindex="-1"><a class="header-anchor" href="#📋-事件配置"><span>📋 事件配置</span></a></h3>
<ol>
<li>
<p><strong>事件标题 / 名称</strong></p>
<ul>
<li>必填</li>
<li>用于描述这个时刻，例如「纪念日」「服务器续费日」等</li>
</ul>
</li>
<li>
<p><strong>时间 / 日期配置</strong></p>
<ul>
<li>必填</li>
<li>可配置为具体日期时间，或按 cron 表达式周期触发（视实现而定）</li>
</ul>
</li>
<li>
<p><strong>提醒内容</strong></p>
<ul>
<li>选填</li>
<li>支持自定义提醒文案，例如：
<blockquote>
<p>又是新的一年，记得看看你的媒体库啦~</p>
</blockquote>
</li>
</ul>
</li>
</ol>
<h3 id="⏰-调度与通知" tabindex="-1"><a class="header-anchor" href="#⏰-调度与通知"><span>⏰ 调度与通知</span></a></h3>
<ol start="4">
<li>
<p><strong>周期 (cron)</strong>（如采用 cron 方式）</p>
<ul>
<li>使用 Cron 表达式设置提醒频率</li>
<li>示例：<code v-pre>0 9 * * *</code> 每天 9 点提醒一次</li>
</ul>
</li>
<li>
<p><strong>消息推送 (notice)</strong></p>
<ul>
<li>选填</li>
<li>开启后会通过通知渠道发送提醒内容，适合与手机 / IM 集成</li>
</ul>
</li>
</ol>
<h3 id="🔧-工具栏操作" tabindex="-1"><a class="header-anchor" href="#🔧-工具栏操作"><span>🔧 工具栏操作</span></a></h3>
<ul>
<li><strong>运行一次 (run)</strong>：立即触发一次提醒（若实现支持），用于测试通知渠道是否配置正确。</li>
</ul>
<h2 id="📖-使用场景示例" tabindex="-1"><a class="header-anchor" href="#📖-使用场景示例"><span>📖 使用场景示例</span></a></h2>
<ul>
<li>重要纪念日提醒（生日、纪念日等）</li>
<li>服务器 / 域名 / 会员到期提醒</li>
<li>定期回顾 / 总结提示（每周/每月）</li>
</ul>
<h2 id="⚠️-注意事项" tabindex="-1"><a class="header-anchor" href="#⚠️-注意事项"><span>⚠️ 注意事项</span></a></h2>
<ul>
<li>建议搭配通知渠道使用，否则只能在系统内看到提醒日志。</li>
<li>如设置了非常密集的 cron 周期，可能导致频繁提醒，注意控制频率。</li>
</ul>
<h2 id="🔗-相关链接" tabindex="-1"><a class="header-anchor" href="#🔗-相关链接"><span>🔗 相关链接</span></a></h2>
<ul>
<li><RouteLink to="/docs/cultivation_secrets/main/">修仙秘籍主页</RouteLink></li>
<li><RouteLink to="/docs/other/cron_rule/">Cron 表达式说明</RouteLink></li>
</ul>
</div></template>


