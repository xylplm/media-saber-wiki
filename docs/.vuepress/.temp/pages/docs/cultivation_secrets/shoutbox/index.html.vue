<template><div><h1 id="📢-发群聊消息" tabindex="-1"><a class="header-anchor" href="#📢-发群聊消息"><span>📢 发群聊消息</span></a></h1>
<p><strong>发群聊消息</strong> 插件用于自动向站点的群聊（Shoutbox / Chatbox）区域发送消息，可用于定时公告、自动提示、气氛活跃等场景。</p>
<h2 id="⚙️-功能特点" tabindex="-1"><a class="header-anchor" href="#⚙️-功能特点"><span>⚙️ 功能特点</span></a></h2>
<ul>
<li>自动向站点群聊区发送文本消息</li>
<li>支持定时发送</li>
<li>可配置消息内容与发送频率</li>
</ul>
<h2 id="🚀-配置指南" tabindex="-1"><a class="header-anchor" href="#🚀-配置指南"><span>🚀 配置指南</span></a></h2>
<p>在插件配置页面中可以看到所有字段，这里按常见用法简单说明：</p>
<h3 id="📋-基础配置" tabindex="-1"><a class="header-anchor" href="#📋-基础配置"><span>📋 基础配置</span></a></h3>
<ol>
<li>
<p><strong>站点选择 / 认证信息</strong></p>
<ul>
<li>指定要发送群聊消息的站点</li>
<li>需要确保该站点账号已配置且有权限在群聊区发言</li>
</ul>
</li>
<li>
<p><strong>消息内容</strong></p>
<ul>
<li>支持纯文本（如表单支持，也可能支持简单格式）</li>
<li>建议避免包含容易被视为垃圾信息的内容</li>
</ul>
</li>
<li>
<p><strong>周期 (cron)</strong></p>
<ul>
<li>选填</li>
<li>使用 Cron 表达式配置发送频率</li>
<li>示例：
<ul>
<li><code v-pre>0 9 * * *</code>：每天 9 点发一次早安消息</li>
<li><code v-pre>0 */3 * * *</code>：每 3 小时发一次提示（不推荐太频繁）</li>
</ul>
</li>
</ul>
</li>
<li>
<p><strong>消息推送 (notice)</strong>（如表单中提供）</p>
<ul>
<li>选填</li>
<li>开启后，在发送失败或异常时可通过通知提醒你检查配置。</li>
</ul>
</li>
</ol>
<h3 id="🔧-工具栏操作" tabindex="-1"><a class="header-anchor" href="#🔧-工具栏操作"><span>🔧 工具栏操作</span></a></h3>
<ul>
<li><strong>运行一次 (run)</strong>：立即向指定站点的群聊区发送一次消息，用于测试配置是否正确。</li>
</ul>
<h2 id="📖-使用说明" tabindex="-1"><a class="header-anchor" href="#📖-使用说明"><span>📖 使用说明</span></a></h2>
<ol>
<li>确认站点账号有群聊发言权限，且未被禁言。</li>
<li>在插件中选择目标站点并填写消息内容。</li>
<li>根据需求设置 <code v-pre>cron</code>，避免高频打扰其他用户。</li>
<li>可先通过「运行一次」进行测试，确认消息能正常发送并显示。</li>
</ol>
<h2 id="⚠️-注意事项" tabindex="-1"><a class="header-anchor" href="#⚠️-注意事项"><span>⚠️ 注意事项</span></a></h2>
<ul>
<li>请勿将本插件用于刷屏或骚扰行为，以免导致账号被封禁或影响站点声誉。</li>
<li>如站点对群聊有防刷机制（例如限频、人机校验等），本插件可能无法绕过。</li>
<li>建议仅在合适的场景中使用（如公告、维护通知、活动提示等）。</li>
</ul>
<h2 id="🔗-相关链接" tabindex="-1"><a class="header-anchor" href="#🔗-相关链接"><span>🔗 相关链接</span></a></h2>
<ul>
<li><RouteLink to="/docs/cultivation_secrets/main/">修仙秘籍主页</RouteLink></li>
<li><RouteLink to="/docs/other/cron_rule/">Cron 表达式说明</RouteLink></li>
</ul>
</div></template>


