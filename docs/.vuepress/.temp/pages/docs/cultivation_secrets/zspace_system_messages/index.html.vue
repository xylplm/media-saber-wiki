<template><div><h1 id="📱-极空间系统消息" tabindex="-1"><a class="header-anchor" href="#📱-极空间系统消息"><span>📱 极空间系统消息</span></a></h1>
<p><strong>极空间系统消息</strong> 是一个用于获取极空间（ZSpace）系统消息并通过Media Saber推送渠道转发的插件。可以定期获取极空间的系统通知、警告等消息，并通过配置的推送渠道及时通知用户。</p>
<h2 id="⚙️-功能特点" tabindex="-1"><a class="header-anchor" href="#⚙️-功能特点"><span>⚙️ 功能特点</span></a></h2>
<h3 id="📨-消息推送" tabindex="-1"><a class="header-anchor" href="#📨-消息推送"><span>📨 消息推送</span></a></h3>
<ul>
<li><strong>系统消息获取</strong>：定期获取极空间的系统消息</li>
<li><strong>多渠道推送</strong>：通过Media Saber的推送渠道转发消息</li>
<li><strong>定时检查</strong>：支持定时自动获取消息</li>
<li><strong>一键执行</strong>：支持手动立即获取消息</li>
</ul>
<h3 id="🔧-适用场景" tabindex="-1"><a class="header-anchor" href="#🔧-适用场景"><span>🔧 适用场景</span></a></h3>
<ul>
<li><strong>系统监控</strong>：及时了解极空间系统状态</li>
<li><strong>异常通知</strong>：快速获取系统异常和警告信息</li>
<li><strong>更新提醒</strong>：及时收到系统更新通知</li>
<li><strong>统一管理</strong>：在Media Saber中集中管理多种消息</li>
</ul>
<h2 id="🚀-配置指南" tabindex="-1"><a class="header-anchor" href="#🚀-配置指南"><span>🚀 配置指南</span></a></h2>
<h3 id="📋-配置参数" tabindex="-1"><a class="header-anchor" href="#📋-配置参数"><span>📋 配置参数</span></a></h3>
<p>插件提供以下配置选项：</p>
<h3 id="⚙️-基础设置" tabindex="-1"><a class="header-anchor" href="#⚙️-基础设置"><span>⚙️ 基础设置</span></a></h3>
<ol>
<li>
<p><strong>服务器地址 (host)</strong>：</p>
<ul>
<li><strong>必填参数</strong>：极空间的完整服务器地址</li>
<li>格式：<code v-pre>http://IP地址:端口</code></li>
<li>示例：<code v-pre>http://192.168.31.88:5055</code></li>
<li>必须包含协议（http://或https://）</li>
</ul>
</li>
<li>
<p><strong>定时任务 (cron)</strong>：</p>
<ul>
<li>设置消息获取的执行频率</li>
<li>使用Cron表达式格式</li>
<li><strong>推荐10分钟以上</strong>，如：<code v-pre>*/10 * * * *</code></li>
<li>可留空仅使用手动获取</li>
</ul>
</li>
<li>
<p><strong>Cookie (cookie)</strong>：</p>
<ul>
<li><strong>必填参数</strong>：极空间的登录Cookie</li>
<li>用于身份验证和API访问</li>
<li>需要从浏览器中获取有效的Cookie</li>
</ul>
</li>
</ol>
<h3 id="🔧-操作功能" tabindex="-1"><a class="header-anchor" href="#🔧-操作功能"><span>🔧 操作功能</span></a></h3>
<ol start="4">
<li><strong>立即执行一次 (runOnce)</strong>：
<ul>
<li>手动触发一次消息获取</li>
<li>立即执行消息检查和推送</li>
<li>不受定时任务设置影响</li>
</ul>
</li>
</ol>
<h2 id="📖-使用说明" tabindex="-1"><a class="header-anchor" href="#📖-使用说明"><span>📖 使用说明</span></a></h2>
<h3 id="cookie获取方法" tabindex="-1"><a class="header-anchor" href="#cookie获取方法"><span>Cookie获取方法</span></a></h3>
<h4 id="浏览器获取" tabindex="-1"><a class="header-anchor" href="#浏览器获取"><span>浏览器获取</span></a></h4>
<ol>
<li>
<p><strong>登录极空间Web界面</strong>：</p>
<ul>
<li>使用浏览器访问极空间Web管理界面</li>
<li>输入用户名和密码完成登录</li>
</ul>
</li>
<li>
<p><strong>获取Cookie</strong>：</p>
<ul>
<li>登录成功后按F12打开开发者工具</li>
<li>切换到Application（应用程序）标签页</li>
<li>在左侧Storage下找到Cookies</li>
<li>选择对应的极空间域名</li>
<li>复制所需的Cookie值</li>
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
<h3 id="服务器地址配置" tabindex="-1"><a class="header-anchor" href="#服务器地址配置"><span>服务器地址配置</span></a></h3>
<h4 id="地址格式要求" tabindex="-1"><a class="header-anchor" href="#地址格式要求"><span>地址格式要求</span></a></h4>
<ul>
<li><strong>完整格式</strong>：<code v-pre>http://IP地址:端口</code></li>
<li><strong>协议必须</strong>：必须包含http://或https://</li>
<li><strong>使用IP</strong>：建议使用IP地址而非域名</li>
<li><strong>端口号</strong>：通常极空间使用5055端口</li>
</ul>
<h4 id="配置示例" tabindex="-1"><a class="header-anchor" href="#配置示例"><span>配置示例</span></a></h4>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code class="language-bash"><span class="line"><span class="token comment"># 正确格式</span></span>
<span class="line">http://192.168.31.88:5055</span>
<span class="line">http://192.168.1.100:5055</span>
<span class="line">https://192.168.1.100:5055</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 错误格式</span></span>
<span class="line"><span class="token number">192.168</span>.31.88:5055          <span class="token comment"># 缺少协议</span></span>
<span class="line">http://zspace.local:5055    <span class="token comment"># 域名可能不稳定</span></span>
<span class="line">http://192.168.31.88        <span class="token comment"># 缺少端口</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="定时任务配置" tabindex="-1"><a class="header-anchor" href="#定时任务配置"><span>定时任务配置</span></a></h3>
<h4 id="cron表达式示例" tabindex="-1"><a class="header-anchor" href="#cron表达式示例"><span>Cron表达式示例</span></a></h4>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code class="language-bash"><span class="line"><span class="token comment"># 每10分钟检查一次（推荐）</span></span>
<span class="line">*/10 * * * *</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 每5分钟检查一次</span></span>
<span class="line">*/5 * * * *</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 每30分钟检查一次</span></span>
<span class="line">*/30 * * * *</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 每小时检查一次</span></span>
<span class="line"><span class="token number">0</span> */1 * * *</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>📖 <strong>详细说明</strong>：关于Cron表达式的完整语法和更多示例，请参考：<a href="/docs/other/cron_rule">Cron表达式说明文档</a></p>
</blockquote>
<h3 id="使用步骤" tabindex="-1"><a class="header-anchor" href="#使用步骤"><span>使用步骤</span></a></h3>
<h4 id="首次配置" tabindex="-1"><a class="header-anchor" href="#首次配置"><span>首次配置</span></a></h4>
<ol>
<li>
<p><strong>获取服务器信息</strong>：</p>
<ul>
<li>确认极空间的IP地址和端口</li>
<li>确保网络连通性正常</li>
</ul>
</li>
<li>
<p><strong>获取Cookie</strong>：</p>
<ul>
<li>登录极空间Web界面</li>
<li>按上述方法获取Cookie</li>
</ul>
</li>
<li>
<p><strong>配置插件</strong>：</p>
<ul>
<li>填入服务器地址</li>
<li>粘贴Cookie信息</li>
<li>设置合适的检查频率</li>
</ul>
</li>
<li>
<p><strong>测试运行</strong>：</p>
<ul>
<li>使用&quot;立即执行一次&quot;功能测试</li>
<li>确认消息获取和推送正常</li>
</ul>
</li>
</ol>
<h4 id="日常使用" tabindex="-1"><a class="header-anchor" href="#日常使用"><span>日常使用</span></a></h4>
<ol>
<li>
<p><strong>监控消息</strong>：</p>
<ul>
<li>系统会按设定频率自动获取消息</li>
<li>新消息会通过推送渠道发送</li>
</ul>
</li>
<li>
<p><strong>维护配置</strong>：</p>
<ul>
<li>定期检查Cookie有效性</li>
<li>确认服务器地址变化</li>
<li>调整检查频率</li>
</ul>
</li>
</ol>
<h3 id="消息类型" tabindex="-1"><a class="header-anchor" href="#消息类型"><span>消息类型</span></a></h3>
<p>插件可以获取的极空间消息包括：</p>
<ul>
<li><strong>系统更新</strong>：软件版本更新通知</li>
<li><strong>异常警告</strong>：系统异常和错误信息</li>
<li><strong>状态变更</strong>：服务状态变化通知</li>
<li><strong>安全提醒</strong>：登录异常等安全信息</li>
<li><strong>存储警告</strong>：磁盘空间不足等存储相关警告</li>
</ul>
<h2 id="⚠️-注意事项" tabindex="-1"><a class="header-anchor" href="#⚠️-注意事项"><span>⚠️ 注意事项</span></a></h2>
<h3 id="重要提醒" tabindex="-1"><a class="header-anchor" href="#重要提醒"><span>重要提醒</span></a></h3>
<ol>
<li>
<p><strong>网络连通性</strong>：</p>
<ul>
<li>确保Media Saber能够访问极空间</li>
<li>检查防火墙和网络设置</li>
<li>验证端口是否开放</li>
</ul>
</li>
<li>
<p><strong>Cookie有效性</strong>：</p>
<ul>
<li><strong>Cookie会过期</strong>，需要定期更新</li>
<li>重新登录极空间后需要更新Cookie</li>
<li>Cookie失效会导致消息获取失败</li>
</ul>
</li>
<li>
<p><strong>频率控制</strong>：</p>
<ul>
<li><strong>推荐10分钟以上的检查频率</strong></li>
<li>避免过于频繁的请求</li>
<li>尊重极空间的API访问限制</li>
</ul>
</li>
</ol>
<h3 id="使用建议" tabindex="-1"><a class="header-anchor" href="#使用建议"><span>使用建议</span></a></h3>
<ol>
<li>
<p><strong>合理设置频率</strong>：</p>
<ul>
<li>根据实际需求设置检查频率</li>
<li>重要系统建议10-30分钟检查一次</li>
<li>测试环境可适当降低频率</li>
</ul>
</li>
<li>
<p><strong>推送渠道配置</strong>：</p>
<ul>
<li>确保已配置合适的推送渠道</li>
<li>测试推送功能是否正常</li>
<li>考虑消息重要性设置不同渠道</li>
</ul>
</li>
<li>
<p><strong>监控配置状态</strong>：</p>
<ul>
<li>定期检查插件运行状态</li>
<li>关注日志中的错误信息</li>
<li>及时处理配置问题</li>
</ul>
</li>
</ol>
<h3 id="故障排除" tabindex="-1"><a class="header-anchor" href="#故障排除"><span>故障排除</span></a></h3>
<ol>
<li>
<p><strong>连接失败</strong>：</p>
<ul>
<li>检查服务器地址格式是否正确</li>
<li>确认极空间服务是否正常运行</li>
<li>验证网络连通性</li>
</ul>
</li>
<li>
<p><strong>认证失败</strong>：</p>
<ul>
<li>检查Cookie是否有效</li>
<li>重新登录极空间获取新Cookie</li>
<li>确认Cookie格式完整</li>
</ul>
</li>
<li>
<p><strong>消息推送失败</strong>：</p>
<ul>
<li>检查推送渠道配置</li>
<li>确认消息通知功能已启用</li>
<li>测试推送服务是否正常</li>
</ul>
</li>
<li>
<p><strong>无新消息</strong>：</p>
<ul>
<li>确认极空间确实有新消息</li>
<li>检查消息获取逻辑</li>
<li>查看详细日志信息</li>
</ul>
</li>
</ol>
<h2 id="📊-使用效果" tabindex="-1"><a class="header-anchor" href="#📊-使用效果"><span>📊 使用效果</span></a></h2>
<h3 id="消息监控" tabindex="-1"><a class="header-anchor" href="#消息监控"><span>消息监控</span></a></h3>
<ul>
<li><strong>实时获取</strong>：及时获取极空间系统消息</li>
<li><strong>统一推送</strong>：通过Media Saber统一推送渠道</li>
<li><strong>状态了解</strong>：随时了解极空间运行状态</li>
<li><strong>异常预警</strong>：快速响应系统异常</li>
</ul>
<h3 id="管理便利" tabindex="-1"><a class="header-anchor" href="#管理便利"><span>管理便利</span></a></h3>
<ul>
<li><strong>集中管理</strong>：在Media Saber中统一管理消息</li>
<li><strong>自动化</strong>：无需手动检查极空间状态</li>
<li><strong>多渠道</strong>：支持多种推送方式</li>
<li><strong>历史记录</strong>：保留消息获取历史</li>
</ul>
<h2 id="🔗-相关链接" tabindex="-1"><a class="header-anchor" href="#🔗-相关链接"><span>🔗 相关链接</span></a></h2>
<ul>
<li><RouteLink to="/docs/cultivation_secrets/main/">修仙秘籍主页</RouteLink></li>
<li><a href="/docs/other/cron_rule">Cron表达式说明</a></li>
<li><RouteLink to="/docs/advanced/notification_channels/">推送渠道配置</RouteLink></li>
</ul>
<hr>
<p>🎯 <strong>提示</strong>：极空间系统消息插件需要有效的Cookie和正确的服务器地址，建议设置10分钟以上的检查频率。</p>
</div></template>


