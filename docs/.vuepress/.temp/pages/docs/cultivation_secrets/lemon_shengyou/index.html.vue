<template><div><h1 id="🍋-柠檬神游" tabindex="-1"><a class="header-anchor" href="#🍋-柠檬神游"><span>🍋 柠檬神游</span></a></h1>
<p><strong>柠檬神游</strong> 是一个用于自动完成LemonHD站点签到的插件，可以自动执行每日签到任务，获取站点积分和保持账户活跃度。</p>
<h2 id="⚙️-功能特点" tabindex="-1"><a class="header-anchor" href="#⚙️-功能特点"><span>⚙️ 功能特点</span></a></h2>
<h3 id="🎯-自动签到" tabindex="-1"><a class="header-anchor" href="#🎯-自动签到"><span>🎯 自动签到</span></a></h3>
<ul>
<li><strong>LemonHD支持</strong>：专门针对LemonHD站点的签到功能</li>
<li><strong>定时执行</strong>：支持定时自动签到</li>
<li><strong>简单配置</strong>：仅需Cookie即可完成配置</li>
<li><strong>一键操作</strong>：支持手动立即执行签到</li>
</ul>
<h3 id="🔧-站点兼容" tabindex="-1"><a class="header-anchor" href="#🔧-站点兼容"><span>🔧 站点兼容</span></a></h3>
<ul>
<li><strong>目标站点</strong>：https://lemonhd.club</li>
<li><strong>签到方式</strong>：基于Cookie的自动签到</li>
<li><strong>通知支持</strong>：签到结果可发送通知</li>
</ul>
<h2 id="🚀-配置指南" tabindex="-1"><a class="header-anchor" href="#🚀-配置指南"><span>🚀 配置指南</span></a></h2>
<h3 id="�-配置参数" tabindex="-1"><a class="header-anchor" href="#�-配置参数"><span>� 配置参数</span></a></h3>
<p>插件提供以下配置选项：</p>
<h3 id="⚙️-基础设置" tabindex="-1"><a class="header-anchor" href="#⚙️-基础设置"><span>⚙️ 基础设置</span></a></h3>
<ol>
<li>
<p><strong>通知 (notice)</strong>：</p>
<ul>
<li>开启后发送签到结果通知</li>
<li>需要在消息通知渠道中勾选本插件</li>
<li>可选择开启或关闭</li>
</ul>
</li>
<li>
<p><strong>定时任务 (cron)</strong>：</p>
<ul>
<li>设置自动签到的执行时间</li>
<li>使用Cron表达式格式</li>
<li>示例：<code v-pre>30 8 * * *</code> 每天上午8:30执行</li>
<li>可留空仅使用手动签到</li>
</ul>
</li>
<li>
<p><strong>Cookie (cookie)</strong>：</p>
<ul>
<li><strong>必填参数</strong>：LemonHD站点的登录Cookie</li>
<li>用于身份验证和签到操作</li>
<li>需要从浏览器中获取有效的Cookie</li>
</ul>
</li>
</ol>
<h3 id="🔧-操作功能" tabindex="-1"><a class="header-anchor" href="#🔧-操作功能"><span>🔧 操作功能</span></a></h3>
<ol start="4">
<li>
<p><strong>运行一次</strong>：</p>
<ul>
<li>手动触发一次签到操作</li>
<li>立即执行签到任务</li>
<li>不受定时任务设置影响</li>
</ul>
</li>
<li>
<p><strong>获取Cookie</strong>：</p>
<ul>
<li>便捷的Cookie获取功能</li>
<li>点击后会打开LemonHD站点</li>
<li>可以在登录后获取Cookie信息</li>
</ul>
</li>
</ol>
<h2 id="📖-使用说明" tabindex="-1"><a class="header-anchor" href="#📖-使用说明"><span>📖 使用说明</span></a></h2>
<h3 id="cookie获取方法" tabindex="-1"><a class="header-anchor" href="#cookie获取方法"><span>Cookie获取方法</span></a></h3>
<h4 id="自动获取-推荐" tabindex="-1"><a class="header-anchor" href="#自动获取-推荐"><span>自动获取（推荐）</span></a></h4>
<ol>
<li>
<p><strong>使用获取Cookie按钮</strong>：</p>
<ul>
<li>点击配置页面的&quot;获取Cookie&quot;按钮</li>
<li>系统会自动打开LemonHD站点</li>
<li>在站点中完成登录操作</li>
</ul>
</li>
<li>
<p><strong>复制Cookie信息</strong>：</p>
<ul>
<li>登录成功后按F12打开开发者工具</li>
<li>在Application/存储标签页找到Cookie</li>
<li>复制相关的Cookie值到配置中</li>
</ul>
</li>
</ol>
<h4 id="手动获取" tabindex="-1"><a class="header-anchor" href="#手动获取"><span>手动获取</span></a></h4>
<ol>
<li>
<p><strong>登录LemonHD站点</strong>：</p>
<ul>
<li>使用浏览器访问 https://lemonhd.club</li>
<li>正常登录您的账户</li>
</ul>
</li>
<li>
<p><strong>获取Cookie</strong>：</p>
<ul>
<li>按F12打开浏览器开发者工具</li>
<li>切换到Network（网络）标签页</li>
<li>刷新页面或点击任意链接</li>
<li>找到请求头中的Cookie信息</li>
</ul>
</li>
<li>
<p><strong>配置插件</strong>：</p>
<ul>
<li>将获取的Cookie完整复制到配置中</li>
<li>确保Cookie格式正确完整</li>
</ul>
</li>
</ol>
<h3 id="定时任务配置" tabindex="-1"><a class="header-anchor" href="#定时任务配置"><span>定时任务配置</span></a></h3>
<h4 id="cron表达式示例" tabindex="-1"><a class="header-anchor" href="#cron表达式示例"><span>Cron表达式示例</span></a></h4>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code class="language-bash"><span class="line"><span class="token comment"># 每天上午8:30签到</span></span>
<span class="line"><span class="token number">30</span> <span class="token number">8</span> * * *</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 每天上午9点签到</span></span>
<span class="line"><span class="token number">0</span> <span class="token number">9</span> * * *</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 每天晚上11点签到</span></span>
<span class="line"><span class="token number">0</span> <span class="token number">23</span> * * *</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 每天上午6点和晚上6点各签到一次</span></span>
<span class="line"><span class="token number">0</span> <span class="token number">6,18</span> * * *</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>📖 <strong>详细说明</strong>：关于Cron表达式的完整语法和更多示例，请参考：<a href="/docs/other/cron_rule">Cron表达式说明文档</a></p>
</blockquote>
<h3 id="使用步骤" tabindex="-1"><a class="header-anchor" href="#使用步骤"><span>使用步骤</span></a></h3>
<h4 id="首次配置" tabindex="-1"><a class="header-anchor" href="#首次配置"><span>首次配置</span></a></h4>
<ol>
<li>
<p><strong>获取Cookie</strong>：</p>
<ul>
<li>点击&quot;获取Cookie&quot;按钮或手动获取</li>
<li>确保Cookie信息完整有效</li>
</ul>
</li>
<li>
<p><strong>配置参数</strong>：</p>
<ul>
<li>填入获取的Cookie信息</li>
<li>设置合适的定时任务时间</li>
<li>根据需要开启通知功能</li>
</ul>
</li>
<li>
<p><strong>测试运行</strong>：</p>
<ul>
<li>使用&quot;运行一次&quot;功能测试</li>
<li>确认签到功能正常工作</li>
</ul>
</li>
<li>
<p><strong>启用定时任务</strong>：</p>
<ul>
<li>确认测试成功后启用定时任务</li>
<li>系统将按设定时间自动签到</li>
</ul>
</li>
</ol>
<h4 id="日常维护" tabindex="-1"><a class="header-anchor" href="#日常维护"><span>日常维护</span></a></h4>
<ol>
<li>
<p><strong>监控签到状态</strong>：</p>
<ul>
<li>定期检查签到是否成功</li>
<li>关注通知消息了解签到结果</li>
</ul>
</li>
<li>
<p><strong>更新Cookie</strong>：</p>
<ul>
<li>Cookie过期时及时更新</li>
<li>建议定期更新以确保稳定性</li>
</ul>
</li>
<li>
<p><strong>调整时间</strong>：</p>
<ul>
<li>根据站点规则调整签到时间</li>
<li>避免在站点维护时段执行</li>
</ul>
</li>
</ol>
<h2 id="⚠️-注意事项" tabindex="-1"><a class="header-anchor" href="#⚠️-注意事项"><span>⚠️ 注意事项</span></a></h2>
<h3 id="重要提醒" tabindex="-1"><a class="header-anchor" href="#重要提醒"><span>重要提醒</span></a></h3>
<ol>
<li>
<p><strong>Cookie安全</strong>：</p>
<ul>
<li><strong>Cookie信息敏感</strong>，请妥善保管</li>
<li>不要在不安全的环境中使用</li>
<li>定期更新Cookie确保安全</li>
</ul>
</li>
<li>
<p><strong>站点规则</strong>：</p>
<ul>
<li>遵守LemonHD站点的使用规则</li>
<li>避免过于频繁的签到请求</li>
<li>关注站点政策变化</li>
</ul>
</li>
<li>
<p><strong>账户安全</strong>：</p>
<ul>
<li>不要分享账户信息和Cookie</li>
<li>注意账户异常状态提醒</li>
<li>定期检查账户活动记录</li>
</ul>
</li>
</ol>
<h3 id="使用建议" tabindex="-1"><a class="header-anchor" href="#使用建议"><span>使用建议</span></a></h3>
<ol>
<li>
<p><strong>合理设置时间</strong>：</p>
<ul>
<li>选择合适的签到时间避开高峰期</li>
<li>建议设置固定时间养成习惯</li>
<li>避免与其他自动化任务冲突</li>
</ul>
</li>
<li>
<p><strong>监控结果</strong>：</p>
<ul>
<li>开启通知功能监控签到结果</li>
<li>定期检查签到是否成功</li>
<li>及时处理签到失败的情况</li>
</ul>
</li>
<li>
<p><strong>备用方案</strong>：</p>
<ul>
<li>保留手动签到的习惯</li>
<li>在自动签到失败时及时手动补签</li>
<li>定期验证自动签到的有效性</li>
</ul>
</li>
</ol>
<h3 id="故障排除" tabindex="-1"><a class="header-anchor" href="#故障排除"><span>故障排除</span></a></h3>
<ol>
<li>
<p><strong>签到失败</strong>：</p>
<ul>
<li>检查Cookie是否过期</li>
<li>确认网络连接是否正常</li>
<li>验证站点是否可以正常访问</li>
</ul>
</li>
<li>
<p><strong>Cookie无效</strong>：</p>
<ul>
<li>重新登录站点获取新Cookie</li>
<li>确认Cookie格式是否正确</li>
<li>检查Cookie是否完整复制</li>
</ul>
</li>
<li>
<p><strong>通知问题</strong>：</p>
<ul>
<li>检查通知渠道是否配置正确</li>
<li>确认插件通知开关是否开启</li>
<li>验证消息通知功能是否正常</li>
</ul>
</li>
</ol>
<h2 id="📊-使用效果" tabindex="-1"><a class="header-anchor" href="#📊-使用效果"><span>📊 使用效果</span></a></h2>
<h3 id="签到收益" tabindex="-1"><a class="header-anchor" href="#签到收益"><span>签到收益</span></a></h3>
<ul>
<li><strong>每日积分</strong>：通过签到获得站点积分</li>
<li><strong>账户活跃</strong>：保持账户活跃状态</li>
<li><strong>等级提升</strong>：累积签到有助于等级提升</li>
<li><strong>站点贡献</strong>：维持在站点的良好记录</li>
</ul>
<h3 id="自动化优势" tabindex="-1"><a class="header-anchor" href="#自动化优势"><span>自动化优势</span></a></h3>
<ul>
<li><strong>省时省力</strong>：无需手动每日签到</li>
<li><strong>稳定可靠</strong>：定时自动执行不遗忘</li>
<li><strong>结果可控</strong>：通知功能实时了解签到状态</li>
</ul>
<h2 id="🔗-相关链接" tabindex="-1"><a class="header-anchor" href="#🔗-相关链接"><span>🔗 相关链接</span></a></h2>
<ul>
<li><RouteLink to="/docs/cultivation_secrets/main/">修仙秘籍主页</RouteLink></li>
<li><a href="/docs/other/cron_rule">Cron表达式说明</a></li>
<li><RouteLink to="/docs/cultivation_secrets/smzdm/">其他签到插件</RouteLink></li>
</ul>
<hr>
<p>🎯 <strong>提示</strong>：使用前请确保已有LemonHD站点账户，并遵守站点使用规则。Cookie信息敏感，请妥善保管。</p>
</div></template>


