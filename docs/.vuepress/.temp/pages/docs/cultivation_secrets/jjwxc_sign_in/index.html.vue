<template><div><h1 id="📚-晋江文学城签到" tabindex="-1"><a class="header-anchor" href="#📚-晋江文学城签到"><span>📚 晋江文学城签到</span></a></h1>
<p><strong>晋江文学城签到</strong> 是一个自动完成晋江文学城每日签到的插件，可以帮助用户自动获取签到奖励，包括积分、营养液等。</p>
<h2 id="⚙️-功能特点" tabindex="-1"><a class="header-anchor" href="#⚙️-功能特点"><span>⚙️ 功能特点</span></a></h2>
<h3 id="🎯-自动签到" tabindex="-1"><a class="header-anchor" href="#🎯-自动签到"><span>🎯 自动签到</span></a></h3>
<ul>
<li><strong>每日签到</strong>：自动完成晋江文学城的每日签到</li>
<li><strong>奖励获取</strong>：自动领取签到积分和营养液</li>
<li><strong>状态检测</strong>：智能检测登录状态和签到结果</li>
<li><strong>防重复签到</strong>：避免重复签到操作</li>
</ul>
<h3 id="🔧-配置选项" tabindex="-1"><a class="header-anchor" href="#🔧-配置选项"><span>🔧 配置选项</span></a></h3>
<ul>
<li><strong>定时执行</strong>：设置每日自动签到时间</li>
<li><strong>通知推送</strong>：签到结果通知推送</li>
<li><strong>Cookie管理</strong>：便捷的Cookie获取和配置</li>
<li><strong>手动签到</strong>：支持手动触发签到操作</li>
</ul>
<h2 id="🚀-配置指南" tabindex="-1"><a class="header-anchor" href="#🚀-配置指南"><span>🚀 配置指南</span></a></h2>
<h3 id="基础配置" tabindex="-1"><a class="header-anchor" href="#基础配置"><span>基础配置</span></a></h3>
<ol>
<li>
<p><strong>Cookie配置</strong>：</p>
<ul>
<li>访问晋江文学城手机版：https://m.jjwxc.net/</li>
<li>登录晋江文学城账户</li>
<li>获取有效的Cookie信息</li>
</ul>
</li>
<li>
<p><strong>定时任务设置</strong>：</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code class="language-text"><span class="line">30 8 * * *    # 每天上午8点30分签到（推荐）</span>
<span class="line">0 9 * * *     # 每天上午9点签到</span>
<span class="line">0 22 * * *    # 每天晚上10点签到</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p><strong>通知设置</strong>：</p>
<ul>
<li>启用签到结果通知</li>
<li>配置通知渠道</li>
<li>设置通知内容</li>
</ul>
</li>
</ol>
<h3 id="cookie获取方法" tabindex="-1"><a class="header-anchor" href="#cookie获取方法"><span>Cookie获取方法</span></a></h3>
<ol>
<li>
<p><strong>自动获取（推荐）</strong>：</p>
<ul>
<li>在插件配置页面点击&quot;获取Cookie&quot;按钮</li>
<li>系统会自动打开晋江文学城手机版</li>
<li>登录成功后自动获取Cookie信息</li>
</ul>
</li>
<li>
<p><strong>手动获取</strong>：</p>
<ul>
<li>访问：https://m.jjwxc.net/</li>
<li>登录晋江文学城账户</li>
<li>按F12打开开发者工具</li>
<li>在Network标签页找到请求头中的Cookie</li>
<li>复制完整Cookie信息到插件配置</li>
</ul>
</li>
</ol>
<h2 id="📖-使用说明" tabindex="-1"><a class="header-anchor" href="#📖-使用说明"><span>📖 使用说明</span></a></h2>
<h3 id="签到流程" tabindex="-1"><a class="header-anchor" href="#签到流程"><span>签到流程</span></a></h3>
<ol>
<li>
<p><strong>状态检查</strong>：</p>
<ul>
<li>检查Cookie有效性</li>
<li>确认登录状态</li>
<li>验证是否已签到</li>
</ul>
</li>
<li>
<p><strong>执行签到</strong>：</p>
<ul>
<li>访问晋江文学城签到页面</li>
<li>提交签到请求</li>
<li>获取签到奖励</li>
</ul>
</li>
<li>
<p><strong>结果处理</strong>：</p>
<ul>
<li>解析签到结果</li>
<li>记录奖励信息</li>
<li>发送通知消息</li>
</ul>
</li>
</ol>
<h3 id="定时任务配置" tabindex="-1"><a class="header-anchor" href="#定时任务配置"><span>定时任务配置</span></a></h3>
<p>建议的签到时间设置：</p>
<blockquote>
<p>📖 <strong>详细说明</strong>：关于Cron表达式的完整语法和更多示例，请参考：<a href="/docs/other/cron_rule">Cron表达式说明文档</a></p>
</blockquote>
<p><strong>推荐时间</strong>：</p>
<ul>
<li><strong>上午签到</strong>：<code v-pre>30 8 * * *</code> - 每天上午8点30分</li>
<li><strong>标准时间</strong>：<code v-pre>0 9 * * *</code> - 每天上午9点</li>
<li><strong>晚上签到</strong>：<code v-pre>0 22 * * *</code> - 每天晚上10点</li>
</ul>
<h3 id="手动操作" tabindex="-1"><a class="header-anchor" href="#手动操作"><span>手动操作</span></a></h3>
<p><strong>立即签到</strong>：</p>
<ul>
<li>点击配置页面的&quot;签到&quot;按钮</li>
<li>手动触发一次签到操作</li>
<li>查看签到结果和获得奖励</li>
</ul>
<p><strong>获取Cookie</strong>：</p>
<ul>
<li>点击&quot;获取Cookie&quot;按钮</li>
<li>自动跳转到晋江文学城手机版</li>
<li>登录后自动填充Cookie信息</li>
</ul>
<h2 id="⚠️-注意事项" tabindex="-1"><a class="header-anchor" href="#⚠️-注意事项"><span>⚠️ 注意事项</span></a></h2>
<h3 id="cookie管理" tabindex="-1"><a class="header-anchor" href="#cookie管理"><span>Cookie管理</span></a></h3>
<ol>
<li>
<p><strong>有效期限制</strong>：</p>
<ul>
<li>Cookie通常有效期较长但会过期</li>
<li>定期检查Cookie状态</li>
<li>及时更新过期的Cookie</li>
</ul>
</li>
<li>
<p><strong>安全性</strong>：</p>
<ul>
<li>不要分享Cookie信息给他人</li>
<li>定期更换账户密码</li>
<li>注意账户异常登录提醒</li>
</ul>
</li>
<li>
<p><strong>手机版要求</strong>：</p>
<ul>
<li>必须使用手机版网站获取Cookie</li>
<li>电脑版Cookie可能不兼容</li>
<li>确保访问的是https://m.jjwxc.net/</li>
</ul>
</li>
</ol>
<h3 id="使用建议" tabindex="-1"><a class="header-anchor" href="#使用建议"><span>使用建议</span></a></h3>
<ol>
<li>
<p><strong>签到时间</strong>：</p>
<ul>
<li>选择固定的签到时间</li>
<li>避免在网站维护时段签到</li>
<li>确保网络连接稳定</li>
</ul>
</li>
<li>
<p><strong>频率控制</strong>：</p>
<ul>
<li>每天只签到一次</li>
<li>避免重复签到操作</li>
<li>遵守网站使用规则</li>
</ul>
</li>
<li>
<p><strong>结果监控</strong>：</p>
<ul>
<li>定期检查签到结果</li>
<li>关注奖励获取情况</li>
<li>及时处理签到异常</li>
</ul>
</li>
</ol>
<h3 id="故障排除" tabindex="-1"><a class="header-anchor" href="#故障排除"><span>故障排除</span></a></h3>
<ol>
<li>
<p><strong>签到失败</strong>：</p>
<ul>
<li>检查Cookie是否过期</li>
<li>确认账户状态正常</li>
<li>验证网络连接状态</li>
</ul>
</li>
<li>
<p><strong>Cookie无效</strong>：</p>
<ul>
<li>重新获取Cookie</li>
<li>确认使用手机版网站</li>
<li>检查登录状态</li>
</ul>
</li>
<li>
<p><strong>重复签到</strong>：</p>
<ul>
<li>插件会自动检测已签到状态</li>
<li>避免手动重复操作</li>
<li>查看签到记录确认</li>
</ul>
</li>
</ol>
<h2 id="🎁-奖励说明" tabindex="-1"><a class="header-anchor" href="#🎁-奖励说明"><span>🎁 奖励说明</span></a></h2>
<h3 id="签到奖励" tabindex="-1"><a class="header-anchor" href="#签到奖励"><span>签到奖励</span></a></h3>
<ul>
<li><strong>每日积分</strong>：签到获得积分奖励</li>
<li><strong>营养液</strong>：获得营养液可用于支持作者</li>
<li><strong>连续奖励</strong>：连续签到获得额外奖励</li>
<li><strong>特殊活动</strong>：参与网站特殊签到活动</li>
</ul>
<h3 id="积分用途" tabindex="-1"><a class="header-anchor" href="#积分用途"><span>积分用途</span></a></h3>
<ul>
<li><strong>购买章节</strong>：使用积分购买付费章节</li>
<li><strong>支持作者</strong>：给喜欢的作者打赏</li>
<li><strong>参与活动</strong>：参与网站各种活动</li>
<li><strong>兑换道具</strong>：兑换网站虚拟道具</li>
</ul>
<h2 id="🔗-相关链接" tabindex="-1"><a class="header-anchor" href="#🔗-相关链接"><span>🔗 相关链接</span></a></h2>
<ul>
<li><RouteLink to="/docs/cultivation_secrets/main/">修仙秘籍主页</RouteLink></li>
<li><a href="/docs/other/cron_rule">Cron表达式说明</a></li>
<li><RouteLink to="/docs/cultivation_secrets/smzdm/">什么值得买签到</RouteLink></li>
</ul>
<hr>
<p>🎯 <strong>提示</strong>：晋江文学城签到需要使用手机版网站的Cookie，请确保从正确的地址获取。</p>
</div></template>


