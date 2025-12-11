<template><div><h1 id="📝-98签到" tabindex="-1"><a class="header-anchor" href="#📝-98签到"><span>📝 98签到</span></a></h1>
<p><strong>98签到</strong> 是一个支持98论坛自动签到和回帖的插件，具备AI评论润色功能，可以自动从指定版块获取帖子进行智能回复，提升论坛活跃度。</p>
<h2 id="⚙️-功能特点" tabindex="-1"><a class="header-anchor" href="#⚙️-功能特点"><span>⚙️ 功能特点</span></a></h2>
<h3 id="🎯-自动签到" tabindex="-1"><a class="header-anchor" href="#🎯-自动签到"><span>🎯 自动签到</span></a></h3>
<ul>
<li><strong>定时签到</strong>：支持每天2次签到，第一次失败后自动补签</li>
<li><strong>流程跳过</strong>：智能跳过重复签到，避免重复操作</li>
<li><strong>代理支持</strong>：支持代理访问，适应不同网络环境</li>
<li><strong>通知推送</strong>：签到结果实时通知</li>
</ul>
<h3 id="🤖-智能回帖" tabindex="-1"><a class="header-anchor" href="#🤖-智能回帖"><span>🤖 智能回帖</span></a></h3>
<ul>
<li><strong>AI润色</strong>：使用AI对回帖内容进行智能润色</li>
<li><strong>版块定制</strong>：支持指定版块ID进行回帖</li>
<li><strong>内容过滤</strong>：通过标题黑名单过滤不当帖子</li>
<li><strong>随机回复</strong>：从预设内容中随机选择回复</li>
</ul>
<h2 id="🚀-配置指南" tabindex="-1"><a class="header-anchor" href="#🚀-配置指南"><span>🚀 配置指南</span></a></h2>
<h3 id="基础配置" tabindex="-1"><a class="header-anchor" href="#基础配置"><span>基础配置</span></a></h3>
<p>插件配置包含以下参数：</p>
<h3 id="📋-必填参数" tabindex="-1"><a class="header-anchor" href="#📋-必填参数"><span>📋 必填参数</span></a></h3>
<ol>
<li>
<p><strong>域名 (domain)</strong>：</p>
<ul>
<li>98论坛的域名地址</li>
<li>不要包含<code v-pre>https://</code>前缀</li>
<li>例如：<code v-pre>example.net</code></li>
</ul>
</li>
<li>
<p><strong>Cookie (cookie)</strong>：</p>
<ul>
<li>从98论坛获取的完整Cookie信息</li>
<li>格式：<code v-pre>cPNj_2332_saltkey=xxx; cPNj_2382_auth=xxx; cPNj_22454_sid=xxx; ...</code></li>
</ul>
</li>
<li>
<p><strong>回帖内容 (replays)</strong>：</p>
<ul>
<li>自动回帖的内容模板</li>
<li>多个回复用换行分隔</li>
<li>系统会随机选择其中一条进行回复</li>
</ul>
</li>
</ol>
<h3 id="⚙️-可选参数" tabindex="-1"><a class="header-anchor" href="#⚙️-可选参数"><span>⚙️ 可选参数</span></a></h3>
<h4 id="功能开关" tabindex="-1"><a class="header-anchor" href="#功能开关"><span>功能开关</span></a></h4>
<ol>
<li>
<p><strong>通知 (notice)</strong>：</p>
<ul>
<li>开启后发送签到结果通知</li>
<li>需要在消息通知渠道中勾选本插件</li>
</ul>
</li>
<li>
<p><strong>代理 (useProxy)</strong>：</p>
<ul>
<li>域名需要代理访问时开启</li>
<li>需要提前配置系统代理设置</li>
</ul>
</li>
<li>
<p><strong>AI评论润色 (useAI)</strong>：</p>
<ul>
<li>开启后调用系统AI进行评论润色</li>
<li>需要确保已完成AI服务配置</li>
<li><strong>注意</strong>：AI润色失败会导致评论失败</li>
</ul>
</li>
</ol>
<p><strong>💡 推荐服务</strong></p>
<p><strong>硅基流动推荐</strong></p>
<p>推荐用户使用硅基流动AI服务。现在点击链接填写邀请码注册，可立即获得2000万Tokens。</p>
<p>邀请链接：<a href="https://cloud.siliconflow.cn/i/LUTcWF0b" target="_blank" rel="noopener noreferrer">https://cloud.siliconflow.cn/i/LUTcWF0b</a></p>
<p>邀请码：LUTcWF0b</p>
<p>注册时请填写邀请码以获得奖励。</p>
<ol start="4">
<li><strong>通知隐藏评论内容 (hideCommentInNotification)</strong>：
<ul>
<li>开启后通知中不显示评论详细内容</li>
<li>包括标题、原内容、实际评论等</li>
</ul>
</li>
</ol>
<h4 id="定时设置" tabindex="-1"><a class="header-anchor" href="#定时设置"><span>定时设置</span></a></h4>
<ol start="5">
<li><strong>定时任务 (cron)</strong>：
<ul>
<li>定时执行的Cron表达式</li>
<li>默认：<code v-pre>30 8 * * *</code>（每天早上8:30）</li>
<li>系统会在设定时间后半小时内随机延时执行</li>
</ul>
</li>
</ol>
<h4 id="版块设置" tabindex="-1"><a class="header-anchor" href="#版块设置"><span>版块设置</span></a></h4>
<ol start="6">
<li><strong>版块ID (forumIds)</strong>：
<ul>
<li>指定回帖的版块ID，多个用英文逗号分隔</li>
<li>例如：<code v-pre>41,42,43</code></li>
<li>配置后从指定版块获取帖子，否则从瀑布流获取</li>
<li>多个版块时每天随机选择其中一个</li>
</ul>
</li>
</ol>
<h4 id="ai设置" tabindex="-1"><a class="header-anchor" href="#ai设置"><span>AI设置</span></a></h4>
<ol start="7">
<li>
<p><strong>自定义AI模型 (customModel)</strong>：</p>
<ul>
<li>自定义AI润色使用的模型</li>
<li>留空则使用系统默认模型</li>
<li>例如：<code v-pre>gpt-4o</code>、<code v-pre>claude-3-sonnet</code></li>
</ul>
</li>
<li>
<p><strong>AI补充提示词 (customPrompt)</strong>：</p>
<ul>
<li>添加额外的AI提示词定制回复风格</li>
<li>例如：要求使用中文、更幽默、更正式等</li>
<li>留空则使用默认提示词</li>
<li><strong>注意</strong>：额外提示词会增加token消耗</li>
</ul>
</li>
</ol>
<h4 id="过滤设置" tabindex="-1"><a class="header-anchor" href="#过滤设置"><span>过滤设置</span></a></h4>
<ol start="9">
<li><strong>帖子标题黑名单 (titleBlacklist)</strong>：
<ul>
<li>帖子标题包含这些关键词将被过滤</li>
<li>每行一个关键词</li>
<li>用于避免回复不当内容的帖子</li>
</ul>
</li>
</ol>
<h2 id="📖-使用说明" tabindex="-1"><a class="header-anchor" href="#📖-使用说明"><span>📖 使用说明</span></a></h2>
<h3 id="配置流程" tabindex="-1"><a class="header-anchor" href="#配置流程"><span>配置流程</span></a></h3>
<ol>
<li>
<p><strong>基础信息设置</strong>：</p>
<ul>
<li>填写论坛域名（不包含https://）</li>
<li>获取并配置Cookie信息</li>
<li>设置回帖内容模板</li>
</ul>
</li>
<li>
<p><strong>功能开关配置</strong>：</p>
<ul>
<li>根据需要开启通知、代理、AI润色等功能</li>
<li>如需代理访问，确保系统代理配置正确</li>
</ul>
</li>
<li>
<p><strong>高级设置</strong>（可选）：</p>
<ul>
<li>配置版块ID实现定向回帖</li>
<li>设置AI模型和提示词</li>
<li>配置标题黑名单过滤</li>
</ul>
</li>
</ol>
<h3 id="cookie获取方法" tabindex="-1"><a class="header-anchor" href="#cookie获取方法"><span>Cookie获取方法</span></a></h3>
<ol>
<li>
<p><strong>浏览器获取</strong>：</p>
<ul>
<li>登录98论坛后按F12打开开发者工具</li>
<li>切换到Network标签，刷新页面</li>
<li>找到论坛的请求，复制Cookie头信息</li>
</ul>
</li>
<li>
<p><strong>插件辅助获取</strong>：</p>
<ul>
<li>点击&quot;获取Cookie&quot;按钮</li>
<li>在弹出的页面中登录论坛</li>
<li>插件会自动获取Cookie信息</li>
</ul>
</li>
</ol>
<h3 id="定时任务配置" tabindex="-1"><a class="header-anchor" href="#定时任务配置"><span>定时任务配置</span></a></h3>
<h4 id="cron表达式示例" tabindex="-1"><a class="header-anchor" href="#cron表达式示例"><span>Cron表达式示例</span></a></h4>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code class="language-bash"><span class="line"><span class="token comment"># 每天早上8:30执行</span></span>
<span class="line"><span class="token number">30</span> <span class="token number">8</span> * * *</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 每天早上9点和晚上21点执行</span></span>
<span class="line"><span class="token number">0</span> <span class="token number">9,21</span> * * *</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 仅工作日早上执行</span></span>
<span class="line"><span class="token number">30</span> <span class="token number">8</span> * * <span class="token number">1</span>-5</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>📖 <strong>详细说明</strong>：关于Cron表达式的完整语法和更多示例，请参考：<a href="/docs/other/cron_rule">Cron表达式说明文档</a></p>
</blockquote>
<h3 id="操作功能" tabindex="-1"><a class="header-anchor" href="#操作功能"><span>操作功能</span></a></h3>
<h4 id="签到" tabindex="-1"><a class="header-anchor" href="#签到"><span>签到</span></a></h4>
<ul>
<li>立即执行一次签到和回帖</li>
<li>可用于测试配置或手动签到</li>
</ul>
<h4 id="ai润色测试" tabindex="-1"><a class="header-anchor" href="#ai润色测试"><span>AI润色测试</span></a></h4>
<ul>
<li>测试AI润色功能是否正常工作</li>
<li><strong>强烈建议</strong>开启AI润色前先进行测试</li>
</ul>
<h4 id="获取cookie" tabindex="-1"><a class="header-anchor" href="#获取cookie"><span>获取Cookie</span></a></h4>
<ul>
<li>辅助获取论坛Cookie信息</li>
<li>简化Cookie配置过程</li>
</ul>
<h2 id="⚠️-注意事项" tabindex="-1"><a class="header-anchor" href="#⚠️-注意事项"><span>⚠️ 注意事项</span></a></h2>
<h3 id="重要提醒" tabindex="-1"><a class="header-anchor" href="#重要提醒"><span>重要提醒</span></a></h3>
<ol>
<li>
<p><strong>签到机制</strong>：</p>
<ul>
<li>支持每天2次签到，第一次失败后自动补签</li>
<li>系统智能跳过重复签到，不会重复操作</li>
</ul>
</li>
<li>
<p><strong>AI润色风险</strong>：</p>
<ul>
<li><strong>开启AI评论润色前请务必进行润色测试</strong></li>
<li>避免AI乱回复导致账号风险</li>
<li>AI润色失败会导致整个评论过程失败</li>
</ul>
</li>
<li>
<p><strong>系统配置</strong>：</p>
<ul>
<li>系统UA一定不要使用手机UA，否则签到会失败</li>
<li>确保AI服务配置正确（如使用AI润色功能）</li>
</ul>
</li>
</ol>
<h3 id="使用建议" tabindex="-1"><a class="header-anchor" href="#使用建议"><span>使用建议</span></a></h3>
<ol>
<li>
<p><strong>安全策略</strong>：</p>
<ul>
<li>回帖内容要真实有意义，避免灌水</li>
<li>合理设置标题黑名单，避免回复敏感内容</li>
<li>定期检查和更新Cookie信息</li>
</ul>
</li>
<li>
<p><strong>性能优化</strong>：</p>
<ul>
<li>自定义AI模型为空时使用系统默认模型</li>
<li>谨慎使用AI补充提示词，避免不必要的token消耗</li>
<li>合理设置定时频率，避免过于频繁</li>
</ul>
</li>
<li>
<p><strong>功能测试</strong>：</p>
<ul>
<li>首次使用前先手动测试签到功能</li>
<li>使用AI润色前务必进行润色测试</li>
<li>验证通知功能是否正常工作</li>
</ul>
</li>
</ol>
<h3 id="故障排除" tabindex="-1"><a class="header-anchor" href="#故障排除"><span>故障排除</span></a></h3>
<ol>
<li>
<p><strong>签到失败</strong>：</p>
<ul>
<li>检查Cookie是否过期或无效</li>
<li>确认域名配置是否正确</li>
<li>验证网络连接和代理设置</li>
</ul>
</li>
<li>
<p><strong>AI润色失败</strong>：</p>
<ul>
<li>检查AI服务配置是否正确</li>
<li>验证API密钥和模型设置</li>
<li>尝试使用默认模型</li>
</ul>
</li>
<li>
<p><strong>回帖无效</strong>：</p>
<ul>
<li>检查版块ID是否正确</li>
<li>确认回帖内容是否合规</li>
<li>验证标题黑名单设置</li>
</ul>
</li>
</ol>
<h2 id="📊-使用效果" tabindex="-1"><a class="header-anchor" href="#📊-使用效果"><span>📊 使用效果</span></a></h2>
<h3 id="功能统计" tabindex="-1"><a class="header-anchor" href="#功能统计"><span>功能统计</span></a></h3>
<ul>
<li><strong>签到成功率</strong>：自动签到的成功率</li>
<li><strong>回帖数量</strong>：自动回帖的条数</li>
<li><strong>AI润色率</strong>：AI成功润色的比例</li>
<li><strong>过滤效果</strong>：黑名单过滤的帖子数量</li>
</ul>
<h3 id="安全保护" tabindex="-1"><a class="header-anchor" href="#安全保护"><span>安全保护</span></a></h3>
<ul>
<li><strong>重复签到防护</strong>：避免重复签到操作</li>
<li><strong>内容安全过滤</strong>：通过黑名单过滤不当内容</li>
<li><strong>智能延时</strong>：随机延时避免检测</li>
</ul>
<h2 id="🔗-相关链接" tabindex="-1"><a class="header-anchor" href="#🔗-相关链接"><span>🔗 相关链接</span></a></h2>
<ul>
<li><RouteLink to="/docs/cultivation_secrets/main/">修仙秘籍主页</RouteLink></li>
<li><a href="/docs/other/cron_rule">Cron表达式说明</a></li>
<li><RouteLink to="/docs/cultivation_secrets/sign_jjwxc/">晋江文学签到</RouteLink></li>
<li><RouteLink to="/docs/cultivation_secrets/sign_smzdm/">什么值得买签到</RouteLink></li>
</ul>
<hr>
<p>⚠️ <strong>免责声明</strong>：本插件仅供测试使用，不对签到结果、稳定性和账号安全性负责。请遵守相关论坛的使用条款。</p>
</div></template>


