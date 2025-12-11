<template><div><h1 id="🗑️-自动删种" tabindex="-1"><a class="header-anchor" href="#🗑️-自动删种"><span>🗑️ 自动删种</span></a></h1>
<p><strong>自动删种</strong> 是一个基于多种条件自动删除下载器中种子的插件，支持按大小、分享率、时间、标签、路径、Tracker等条件灵活配置删种规则，帮助管理存储空间和保持下载器整洁。</p>
<h2 id="⚙️-功能特点" tabindex="-1"><a class="header-anchor" href="#⚙️-功能特点"><span>⚙️ 功能特点</span></a></h2>
<h3 id="🎯-多条件删种" tabindex="-1"><a class="header-anchor" href="#🎯-多条件删种"><span>🎯 多条件删种</span></a></h3>
<ul>
<li><strong>大小条件</strong>：按文件大小范围删除种子</li>
<li><strong>分享率条件</strong>：基于上传下载比例删除</li>
<li><strong>时间条件</strong>：按下载时间或做种时间删除</li>
<li><strong>标签条件</strong>：根据种子标签删除</li>
<li><strong>路径条件</strong>：按保存路径匹配删除</li>
<li><strong>Tracker条件</strong>：根据Tracker地址删除</li>
<li><strong>错误条件</strong>：删除包含错误信息的种子</li>
</ul>
<h3 id="📊-灵活操作" tabindex="-1"><a class="header-anchor" href="#📊-灵活操作"><span>📊 灵活操作</span></a></h3>
<ul>
<li><strong>删除种子</strong>：仅删除种子文件，保留数据</li>
<li><strong>删除种子和数据</strong>：同时删除种子和下载的文件</li>
<li><strong>正则表达式支持</strong>：路径和Tracker支持正则匹配</li>
<li><strong>组合条件</strong>：支持多个条件同时满足</li>
</ul>
<h2 id="🚀-配置指南" tabindex="-1"><a class="header-anchor" href="#🚀-配置指南"><span>🚀 配置指南</span></a></h2>
<h3 id="基础配置" tabindex="-1"><a class="header-anchor" href="#基础配置"><span>基础配置</span></a></h3>
<p>插件配置包含以下参数：</p>
<h3 id="📋-必填参数" tabindex="-1"><a class="header-anchor" href="#📋-必填参数"><span>📋 必填参数</span></a></h3>
<ol>
<li>
<p><strong>下载器 (downloaderId)</strong>：</p>
<ul>
<li>选择要管理的下载器</li>
<li>支持qBittorrent和Transmission</li>
</ul>
</li>
<li>
<p><strong>动作 (action)</strong>：</p>
<ul>
<li><strong>删除种子</strong>：仅删除.torrent文件，保留下载数据</li>
<li><strong>删除种子和数据</strong>：同时删除种子文件和下载的数据</li>
</ul>
</li>
</ol>
<h3 id="⚙️-可选参数" tabindex="-1"><a class="header-anchor" href="#⚙️-可选参数"><span>⚙️ 可选参数</span></a></h3>
<h4 id="大小条件" tabindex="-1"><a class="header-anchor" href="#大小条件"><span>大小条件</span></a></h4>
<ol>
<li>
<p><strong>最小体积(GB) (minSize)</strong>：</p>
<ul>
<li>种子体积大于等于该值才满足条件</li>
<li>与最大体积同时设置才生效</li>
</ul>
</li>
<li>
<p><strong>最大体积(GB) (maxSize)</strong>：</p>
<ul>
<li>种子体积小于等于该值才满足条件</li>
<li>与最小体积同时设置才生效</li>
</ul>
</li>
</ol>
<h4 id="分享率条件" tabindex="-1"><a class="header-anchor" href="#分享率条件"><span>分享率条件</span></a></h4>
<ol start="3">
<li><strong>最低分享率 (minRatio)</strong>：
<ul>
<li>分享率大于等于该值才满足条件</li>
<li>例如：设置为1.0表示上传量≥下载量</li>
</ul>
</li>
</ol>
<h4 id="时间条件" tabindex="-1"><a class="header-anchor" href="#时间条件"><span>时间条件</span></a></h4>
<ol start="4">
<li>
<p><strong>最少下载时间(分钟) (leastDownloadTime)</strong>：</p>
<ul>
<li>下载时间大于等于该值才满足条件</li>
<li>从种子添加到下载器开始计算</li>
</ul>
</li>
<li>
<p><strong>最少做种时间(小时) (leastSeedTime)</strong>：</p>
<ul>
<li>做种时间大于等于该值才满足条件</li>
<li>未完成种子从添加时间开始计算</li>
<li>完成种子从完成时间开始计算</li>
</ul>
</li>
</ol>
<h4 id="速度条件" tabindex="-1"><a class="header-anchor" href="#速度条件"><span>速度条件</span></a></h4>
<ol start="6">
<li><strong>最大平均上传速度(KB/s) (maxAvgUploadSpeed)</strong>：
<ul>
<li>平均上传速度小于等于该值才满足条件</li>
<li>用于删除上传速度过慢的种子</li>
</ul>
</li>
</ol>
<h4 id="过滤条件" tabindex="-1"><a class="header-anchor" href="#过滤条件"><span>过滤条件</span></a></h4>
<ol start="7">
<li>
<p><strong>包含标签 (includeTags)</strong>：</p>
<ul>
<li>包含所有指定标签的种子才满足条件</li>
<li>多个标签用英文逗号分隔</li>
<li>例如：<code v-pre>tag1,tag2,tag3</code></li>
</ul>
</li>
<li>
<p><strong>包含保存路径 (includeSavePath)</strong>：</p>
<ul>
<li>保存路径匹配成功的种子才满足条件</li>
<li>支持正则表达式</li>
<li>例如：<code v-pre>/downloads/movies/.*</code></li>
</ul>
</li>
<li>
<p><strong>包含Tracker (includeTracker)</strong>：</p>
<ul>
<li>Tracker地址匹配成功的种子才满足条件</li>
<li>支持正则表达式</li>
<li>例如：<code v-pre>tracker\.example\.com</code></li>
</ul>
</li>
<li>
<p><strong>排除Tracker (excludeTracker)</strong>：</p>
<ul>
<li>Tracker地址匹配成功的种子<strong>不满足</strong>条件</li>
<li>支持正则表达式，用于保护特定站点的种子</li>
</ul>
</li>
<li>
<p><strong>包含错误信息 (includeErrorMessage)</strong>：</p>
<ul>
<li>包含错误信息的种子才满足条件</li>
<li>支持正则表达式</li>
<li>用于清理有问题的种子</li>
</ul>
</li>
</ol>
<h4 id="定时任务" tabindex="-1"><a class="header-anchor" href="#定时任务"><span>定时任务</span></a></h4>
<ol start="12">
<li><strong>周期 (cron)</strong>：
<ul>
<li>定时执行的Cron表达式</li>
<li>默认：<code v-pre>0 * * * *</code>（每小时执行一次）</li>
<li>留空则仅支持手动执行</li>
</ul>
</li>
</ol>
<h2 id="📖-使用说明" tabindex="-1"><a class="header-anchor" href="#📖-使用说明"><span>📖 使用说明</span></a></h2>
<h3 id="条件逻辑" tabindex="-1"><a class="header-anchor" href="#条件逻辑"><span>条件逻辑</span></a></h3>
<h4 id="组合条件" tabindex="-1"><a class="header-anchor" href="#组合条件"><span>组合条件</span></a></h4>
<ul>
<li><strong>AND逻辑</strong>：所有设置的条件都必须满足</li>
<li><strong>条件优先级</strong>：所有条件平等，无优先级</li>
<li><strong>空值忽略</strong>：未设置的条件会被忽略</li>
</ul>
<h4 id="条件示例" tabindex="-1"><a class="header-anchor" href="#条件示例"><span>条件示例</span></a></h4>
<p><strong>删除大文件旧种子</strong>：</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code class="language-text"><span class="line">最小体积: 10 GB</span>
<span class="line">最少做种时间: 168 小时 (7天)</span>
<span class="line">最低分享率: 2.0</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>清理错误种子</strong>：</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code class="language-text"><span class="line">包含错误信息: .*error.*|.*timeout.*|.*不存在.*</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p><strong>按站点删除</strong>：</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code class="language-text"><span class="line">包含Tracker: tracker\.oldsite\.com</span>
<span class="line">最少做种时间: 72 小时 (3天)</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="执行流程" tabindex="-1"><a class="header-anchor" href="#执行流程"><span>执行流程</span></a></h3>
<ol>
<li>
<p><strong>种子扫描</strong>：</p>
<ul>
<li>连接指定的下载器</li>
<li>获取所有种子的详细信息</li>
<li>包括大小、状态、标签、路径等</li>
</ul>
</li>
<li>
<p><strong>条件匹配</strong>：</p>
<ul>
<li>逐个检查每个种子是否满足所有条件</li>
<li>应用正则表达式匹配（如设置）</li>
<li>生成符合条件的种子列表</li>
</ul>
</li>
<li>
<p><strong>执行删除</strong>：</p>
<ul>
<li>根据选择的动作删除种子</li>
<li>记录删除操作到日志</li>
<li>统计删除结果</li>
</ul>
</li>
</ol>
<h3 id="定时任务配置" tabindex="-1"><a class="header-anchor" href="#定时任务配置"><span>定时任务配置</span></a></h3>
<h4 id="cron表达式示例" tabindex="-1"><a class="header-anchor" href="#cron表达式示例"><span>Cron表达式示例</span></a></h4>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code class="language-bash"><span class="line"><span class="token comment"># 每小时执行一次</span></span>
<span class="line"><span class="token number">0</span> * * * *</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 每天凌晨3点执行</span></span>
<span class="line"><span class="token number">0</span> <span class="token number">3</span> * * *</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 每周日凌晨2点执行</span></span>
<span class="line"><span class="token number">0</span> <span class="token number">2</span> * * <span class="token number">0</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 每月1日凌晨4点执行</span></span>
<span class="line"><span class="token number">0</span> <span class="token number">4</span> <span class="token number">1</span> * *</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>📖 <strong>详细说明</strong>：关于Cron表达式的完整语法和更多示例，请参考：<a href="/docs/other/cron_rule">Cron表达式说明文档</a></p>
</blockquote>
<h3 id="操作功能" tabindex="-1"><a class="header-anchor" href="#操作功能"><span>操作功能</span></a></h3>
<h4 id="运行一次" tabindex="-1"><a class="header-anchor" href="#运行一次"><span>运行一次</span></a></h4>
<ul>
<li>立即执行一次删种检查</li>
<li>不受定时任务设置影响</li>
<li>可用于测试删种规则或手动清理</li>
</ul>
<h2 id="⚠️-注意事项" tabindex="-1"><a class="header-anchor" href="#⚠️-注意事项"><span>⚠️ 注意事项</span></a></h2>
<h3 id="使用建议" tabindex="-1"><a class="header-anchor" href="#使用建议"><span>使用建议</span></a></h3>
<ol>
<li>
<p><strong>谨慎设置规则</strong>：</p>
<ul>
<li>首次使用建议设置宽松的条件</li>
<li>先使用&quot;删除种子&quot;动作测试规则</li>
<li>确认规则正确后再使用&quot;删除种子和数据&quot;</li>
</ul>
</li>
<li>
<p><strong>重要数据保护</strong>：</p>
<ul>
<li>使用&quot;排除Tracker&quot;保护重要站点种子</li>
<li>通过标签管理重要种子</li>
<li>定期备份重要的种子文件</li>
</ul>
</li>
<li>
<p><strong>合理设置时间</strong>：</p>
<ul>
<li>做种时间不宜设置过短</li>
<li>考虑不同站点的做种要求</li>
<li>平衡存储空间和做种义务</li>
</ul>
</li>
</ol>
<h3 id="安全提醒" tabindex="-1"><a class="header-anchor" href="#安全提醒"><span>安全提醒</span></a></h3>
<ol>
<li>
<p><strong>数据不可恢复</strong>：</p>
<ul>
<li>&quot;删除种子和数据&quot;操作不可逆</li>
<li>重要数据请提前备份</li>
<li>建议先用&quot;删除种子&quot;测试</li>
</ul>
</li>
<li>
<p><strong>正则表达式</strong>：</p>
<ul>
<li>测试正则表达式的正确性</li>
<li>避免过于宽泛的匹配模式</li>
<li>使用在线工具验证正则语法</li>
</ul>
</li>
<li>
<p><strong>下载器负载</strong>：</p>
<ul>
<li>大量种子删除可能影响下载器性能</li>
<li>避免在下载器繁忙时执行</li>
<li>合理设置执行频率</li>
</ul>
</li>
</ol>
<h3 id="故障排除" tabindex="-1"><a class="header-anchor" href="#故障排除"><span>故障排除</span></a></h3>
<ol>
<li>
<p><strong>删除失败</strong>：</p>
<ul>
<li>检查下载器连接状态</li>
<li>确认下载器API权限</li>
<li>查看错误日志获取详细信息</li>
</ul>
</li>
<li>
<p><strong>条件不生效</strong>：</p>
<ul>
<li>确认所有条件都正确设置</li>
<li>检查单位换算（GB、小时、分钟）</li>
<li>验证正则表达式语法</li>
</ul>
</li>
<li>
<p><strong>误删种子</strong>：</p>
<ul>
<li>立即停止自动删种</li>
<li>检查删种日志</li>
<li>从备份恢复种子文件</li>
</ul>
</li>
</ol>
<h2 id="📊-使用效果" tabindex="-1"><a class="header-anchor" href="#📊-使用效果"><span>📊 使用效果</span></a></h2>
<h3 id="操作统计" tabindex="-1"><a class="header-anchor" href="#操作统计"><span>操作统计</span></a></h3>
<ul>
<li><strong>扫描种子数</strong>：检查的种子总数</li>
<li><strong>符合条件数</strong>：满足删除条件的种子数</li>
<li><strong>删除成功数</strong>：实际删除成功的种子数</li>
<li><strong>释放空间</strong>：删除数据释放的存储空间</li>
</ul>
<h3 id="管理效果" tabindex="-1"><a class="header-anchor" href="#管理效果"><span>管理效果</span></a></h3>
<ul>
<li><strong>存储优化</strong>：自动释放存储空间</li>
<li><strong>性能提升</strong>：减少下载器负载</li>
<li><strong>规范管理</strong>：保持种子库整洁</li>
</ul>
<h2 id="🔗-相关链接" tabindex="-1"><a class="header-anchor" href="#🔗-相关链接"><span>🔗 相关链接</span></a></h2>
<ul>
<li><RouteLink to="/docs/cultivation_secrets/main/">修仙秘籍主页</RouteLink></li>
<li><a href="/docs/other/cron_rule">Cron表达式说明</a></li>
<li><RouteLink to="/docs/cultivation_secrets/downloader_site_tag/">下载器站点标签</RouteLink></li>
</ul>
<hr>
<p>🎯 <strong>提示</strong>：自动删种功能具有不可逆性，建议先使用&quot;删除种子&quot;模式测试规则，确认无误后再使用&quot;删除种子和数据&quot;。</p>
</div></template>


