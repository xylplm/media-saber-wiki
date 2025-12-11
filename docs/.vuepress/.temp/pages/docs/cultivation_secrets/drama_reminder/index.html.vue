<template><div><h3 id="追剧提醒插件" tabindex="-1"><a class="header-anchor" href="#追剧提醒插件"><span>追剧提醒插件</span></a></h3>
<p>追剧提醒插件可以自动监控您订阅的电视剧更新情况，并及时推送更新通知，让您不错过任何精彩内容。</p>
<div align="center"><img src="@source/02.使用文档/12.修仙秘籍/images/xxmj/xx07.jpg" width="800"/></div>
<h4 id="插件功能" tabindex="-1"><a class="header-anchor" href="#插件功能"><span>插件功能</span></a></h4>
<ul>
<li><strong>自动监控</strong>：定时检查订阅剧集的更新状态</li>
<li><strong>智能提醒</strong>：新集更新时自动发送通知</li>
<li><strong>图片支持</strong>：可在通知中包含剧集海报图片</li>
<li><strong>灵活订阅</strong>：支持选择特定订阅或监控全部订阅</li>
</ul>
<h4 id="配置选项" tabindex="-1"><a class="header-anchor" href="#配置选项"><span>配置选项</span></a></h4>
<div align="center"><img src="@source/02.使用文档/12.修仙秘籍/images/xxmj/xx08.jpg" width="800"/></div>
<h5 id="基础设置" tabindex="-1"><a class="header-anchor" href="#基础设置"><span>基础设置</span></a></h5>
<ul>
<li><strong>插件开关</strong>：启用或禁用追剧提醒功能</li>
<li><strong>定时任务</strong>：设置检查更新的时间间隔
<blockquote>
<p>📖 <strong>Cron表达式</strong>：详细语法请参考 <a href="/docs/other/cron_rule">Cron表达式说明文档</a></p>
</blockquote>
</li>
</ul>
<h5 id="图片设置" tabindex="-1"><a class="header-anchor" href="#图片设置"><span>图片设置</span></a></h5>
<ul>
<li><strong>启用图片</strong>：在通知中显示剧集海报图片</li>
<li><strong>图片代理</strong>：使用代理服务加载图片（适用于网络受限环境）</li>
<li><strong>图片地址</strong>：自定义图片链接地址</li>
</ul>
<h5 id="订阅选择" tabindex="-1"><a class="header-anchor" href="#订阅选择"><span>订阅选择</span></a></h5>
<ul>
<li><strong>订阅列表</strong>：选择需要提醒的特定订阅</li>
<li><strong>全部监控</strong>：留空则监控所有已启用的订阅</li>
</ul>
<h4 id="使用方法" tabindex="-1"><a class="header-anchor" href="#使用方法"><span>使用方法</span></a></h4>
<ol>
<li>
<p><strong>启用插件</strong>：</p>
<ul>
<li>打开插件开关</li>
<li>设置合适的检查频率</li>
</ul>
</li>
<li>
<p><strong>配置图片</strong>：</p>
<ul>
<li>根据需要启用图片功能</li>
<li>网络环境不佳时可启用图片代理</li>
</ul>
</li>
<li>
<p><strong>选择订阅</strong>：</p>
<ul>
<li>在订阅列表中勾选需要提醒的剧集</li>
<li>不选择任何订阅则默认监控全部</li>
</ul>
</li>
<li>
<p><strong>手动执行</strong>：</p>
<ul>
<li>点击&quot;运行&quot;按钮可立即执行一次检查</li>
<li>用于测试配置是否正确</li>
</ul>
</li>
</ol>
<h4 id="通知内容" tabindex="-1"><a class="header-anchor" href="#通知内容"><span>通知内容</span></a></h4>
<p>追剧提醒会发送包含以下信息的通知：</p>
<ul>
<li>剧集名称和季数</li>
<li>新更新的集数信息</li>
<li>更新时间</li>
<li>剧集海报图片（如启用）</li>
</ul>
<h4 id="注意事项" tabindex="-1"><a class="header-anchor" href="#注意事项"><span>注意事项</span></a></h4>
<ul>
<li>建议设置合理的检查频率，避免过于频繁的请求</li>
<li>图片代理功能适用于无法直接访问图片源的环境</li>
<li>确保订阅源正常运行，否则可能影响检查结果</li>
<li>通知渠道需要预先配置在系统设置中</li>
</ul>
<h4 id="常见问题" tabindex="-1"><a class="header-anchor" href="#常见问题"><span>常见问题</span></a></h4>
<p><strong>Q: 为什么没有收到更新通知？</strong>
A: 检查插件是否启用、订阅是否正常、通知渠道是否配置正确。</p>
<p><strong>Q: 图片无法显示怎么办？</strong>
A: 可以尝试启用图片代理功能，或检查网络连接。</p>
<p><strong>Q: 如何调整检查频率？</strong>
A: 在定时任务中修改Cron表达式，建议不要设置过于频繁。</p>
<hr>
</div></template>


