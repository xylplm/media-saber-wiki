<template><div><h1 id="🧩-绿联nas社区助手" tabindex="-1"><a class="header-anchor" href="#🧩-绿联nas社区助手"><span>🧩 绿联NAS社区助手</span></a></h1>
<p><strong>绿联NAS社区助手</strong> 插件用于自动在绿联 NAS 社区完成登录活跃、回帖等日常操作，帮助维持账号活跃度与等级。</p>
<blockquote>
<p>⚠️ <strong>重要提示</strong>：请勿滥用本插件，避免对社区造成刷屏/骚扰行为，遵守社区规则。</p>
</blockquote>
<h2 id="⚙️-功能特点" tabindex="-1"><a class="header-anchor" href="#⚙️-功能特点"><span>⚙️ 功能特点</span></a></h2>
<ul>
<li>自动登录绿联 NAS 社区</li>
<li>按策略自动执行简单的活跃动作（如签到、回帖等，以实际实现为准）</li>
<li>支持定时执行</li>
<li>支持消息推送查看运行结果</li>
</ul>
<h2 id="🚀-配置指南" tabindex="-1"><a class="header-anchor" href="#🚀-配置指南"><span>🚀 配置指南</span></a></h2>
<p>在插件页面中可以看到所有可配置项，下面结合界面字段说明如何填写：</p>
<h3 id="📋-基础配置" tabindex="-1"><a class="header-anchor" href="#📋-基础配置"><span>📋 基础配置</span></a></h3>
<ol>
<li>
<p><strong>账号信息</strong></p>
<ul>
<li>一般为绿联社区的登录方式（如账号+密码或 Cookie，具体以表单为准）；</li>
<li>建议先在浏览器中确认可以正常登录社区，再按提示填入对应字段。</li>
</ul>
</li>
<li>
<p><strong>行为策略</strong>（如表单中存在相关字段）</p>
<ul>
<li>部分版本可能提供「是否启用自动回帖」「是否仅保持登录」等选项；</li>
<li>推荐：
<ul>
<li>初始只开启“保持登录 / 基础活跃”，观察几天效果；</li>
<li>如需自动回帖，可选择更保守的频率或数量上限，避免刷屏。</li>
</ul>
</li>
</ul>
</li>
<li>
<p><strong>周期 (cron)</strong></p>
<ul>
<li>选填；使用 Cron 表达式设置每天什么时候去“活跃一下”；</li>
<li>示例：<code v-pre>0 10 * * *</code> 表示每天早上 10 点执行一次；</li>
<li>通常每天 1 次或 2 次即可，不建议设置为高频。</li>
</ul>
</li>
<li>
<p><strong>消息推送 (notice)</strong></p>
<ul>
<li>选填；开启后每次执行任务会推送一条结果摘要；</li>
<li>包含是否登录成功、有无执行发言等关键信息，便于排查问题。</li>
</ul>
</li>
</ol>
<h3 id="🔧-工具栏操作" tabindex="-1"><a class="header-anchor" href="#🔧-工具栏操作"><span>🔧 工具栏操作</span></a></h3>
<ul>
<li><strong>运行一次 (active / run)</strong>：
<ul>
<li>具体按钮名称以 UI 为准（当前 Actions 中包含 <code v-pre>active</code>、<code v-pre>testAI</code> 等动作）；</li>
<li>建议首次配置完成后，先用「运行一次」查看是否能成功登录、是否会自动发言；</li>
<li>若提供 <code v-pre>testAI</code> 之类测试按钮，可用于单独测试「回帖内容生成」是否符合预期，而不真正执行日常任务。</li>
</ul>
</li>
</ul>
<h2 id="📖-使用说明" tabindex="-1"><a class="header-anchor" href="#📖-使用说明"><span>📖 使用说明</span></a></h2>
<ol>
<li>先在浏览器中确认可以正常登录绿联 NAS 社区。</li>
<li>在插件配置中填写账号信息及行为策略。</li>
<li>根据需求设置 <code v-pre>cron</code> 周期；若仅偶尔使用，也可以仅通过「运行一次」手动触发。</li>
<li>建议开启消息推送，并在通知渠道中勾选本插件，方便观察执行结果。</li>
<li>初次使用时多观察几次日志，确认行为符合预期且未对社区造成干扰。</li>
</ol>
<h2 id="⚠️-注意事项" tabindex="-1"><a class="header-anchor" href="#⚠️-注意事项"><span>⚠️ 注意事项</span></a></h2>
<ul>
<li>请遵守社区规则，不要设置高频率发帖或类似「刷子」行为。</li>
<li>若社区风控规则收紧，可能会要求图形验证码、人机验证等，本插件可能无法绕过。</li>
<li>若账号出现异常（封禁、风控警告），请立刻停用该插件并检查配置。</li>
</ul>
<h2 id="🔗-相关链接" tabindex="-1"><a class="header-anchor" href="#🔗-相关链接"><span>🔗 相关链接</span></a></h2>
<ul>
<li><RouteLink to="/docs/cultivation_secrets/main/">修仙秘籍主页</RouteLink></li>
<li><RouteLink to="/docs/other/cron_rule/">Cron 表达式说明</RouteLink></li>
</ul>
</div></template>


