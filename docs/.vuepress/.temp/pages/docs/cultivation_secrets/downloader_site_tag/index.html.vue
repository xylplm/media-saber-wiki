<template><div><h1 id="🏷️-下载器站点标签" tabindex="-1"><a class="header-anchor" href="#🏷️-下载器站点标签"><span>🏷️ 下载器站点标签</span></a></h1>
<p><strong>下载器站点标签</strong> 是一个自动为种子添加对应站点标签的插件，通过解析种子的Tracker地址自动识别站点名称并添加标签，方便统计和管理各站点的种子。</p>
<h2 id="⚙️-功能特点" tabindex="-1"><a class="header-anchor" href="#⚙️-功能特点"><span>⚙️ 功能特点</span></a></h2>
<h3 id="🎯-自动标签" tabindex="-1"><a class="header-anchor" href="#🎯-自动标签"><span>🎯 自动标签</span></a></h3>
<ul>
<li><strong>智能识别</strong>：通过Tracker地址自动识别站点名称</li>
<li><strong>批量处理</strong>：支持同时处理多个下载器的种子</li>
<li><strong>标签定制</strong>：支持自定义标签前缀</li>
<li><strong>状态过滤</strong>：可选择处理特定状态的种子</li>
</ul>
<h3 id="📊-灵活配置" tabindex="-1"><a class="header-anchor" href="#📊-灵活配置"><span>📊 灵活配置</span></a></h3>
<ul>
<li><strong>下载器选择</strong>：支持多选下载器同时处理</li>
<li><strong>条件过滤</strong>：支持多种过滤条件</li>
<li><strong>数量控制</strong>：可限制单次处理的种子数量</li>
<li><strong>覆盖控制</strong>：可选择是否覆盖已有标签</li>
</ul>
<h2 id="🚀-配置指南" tabindex="-1"><a class="header-anchor" href="#🚀-配置指南"><span>🚀 配置指南</span></a></h2>
<h3 id="基础配置" tabindex="-1"><a class="header-anchor" href="#基础配置"><span>基础配置</span></a></h3>
<p>插件配置包含以下参数：</p>
<h3 id="📋-必填参数" tabindex="-1"><a class="header-anchor" href="#📋-必填参数"><span>📋 必填参数</span></a></h3>
<ol>
<li><strong>下载器 (downloaders)</strong>：
<ul>
<li>选择要处理的下载器（可多选）</li>
<li>支持qBittorrent和Transmission</li>
</ul>
</li>
</ol>
<h3 id="⚙️-可选参数" tabindex="-1"><a class="header-anchor" href="#⚙️-可选参数"><span>⚙️ 可选参数</span></a></h3>
<h4 id="执行控制" tabindex="-1"><a class="header-anchor" href="#执行控制"><span>执行控制</span></a></h4>
<ol>
<li>
<p><strong>执行周期 (cron)</strong>：</p>
<ul>
<li>定时执行的Cron表达式</li>
<li>默认：<code v-pre>0 2 * * *</code>（每天凌晨2点）</li>
<li>留空则只能手动执行</li>
</ul>
</li>
<li>
<p><strong>消息推送 (notice)</strong>：</p>
<ul>
<li>任务执行完成后发送统计通知</li>
<li>默认关闭</li>
</ul>
</li>
</ol>
<h4 id="处理条件" tabindex="-1"><a class="header-anchor" href="#处理条件"><span>处理条件</span></a></h4>
<ol start="3">
<li>
<p><strong>仅处理已完成种子 (onlyCompleted)</strong>：</p>
<ul>
<li>开启：只为已完成下载的种子添加标签</li>
<li>关闭：为所有状态的种子添加标签</li>
<li>默认关闭</li>
</ul>
</li>
<li>
<p><strong>覆盖已有标签 (overwriteExist)</strong>：</p>
<ul>
<li>开启：重新添加站点标签，即使已存在</li>
<li>关闭：跳过已有相同站点标签的种子</li>
<li>默认关闭</li>
</ul>
</li>
</ol>
<h4 id="标签设置" tabindex="-1"><a class="header-anchor" href="#标签设置"><span>标签设置</span></a></h4>
<ol start="5">
<li><strong>标签前缀 (tagPrefix)</strong>：
<ul>
<li>添加到站点名称前的前缀</li>
<li>例如：<code v-pre>site_</code> + <code v-pre>hdsky</code> = <code v-pre>site_hdsky</code></li>
<li>留空则直接使用站点名称作为标签</li>
</ul>
</li>
</ol>
<h4 id="数量控制" tabindex="-1"><a class="header-anchor" href="#数量控制"><span>数量控制</span></a></h4>
<ol start="6">
<li><strong>单次最大处理数量 (maxProcessCount)</strong>：
<ul>
<li>单次任务最多处理的种子数量</li>
<li>设置为0表示不限制</li>
<li>默认：500</li>
</ul>
</li>
</ol>
<h4 id="过滤条件" tabindex="-1"><a class="header-anchor" href="#过滤条件"><span>过滤条件</span></a></h4>
<ol start="7">
<li>
<p><strong>排除的Tracker (excludeTrackers)</strong>：</p>
<ul>
<li>要排除的Tracker域名，多个用逗号分隔</li>
<li>包含这些域名的种子将被跳过</li>
<li>例如：<code v-pre>tracker1.com,tracker2.org</code></li>
</ul>
</li>
<li>
<p><strong>包含的种子状态 (includeStatuses)</strong>：</p>
<ul>
<li>只处理指定状态的种子，多个状态用逗号分隔</li>
<li>留空则处理所有状态的种子</li>
<li>例如：<code v-pre>seeding,completed,uploading</code></li>
</ul>
</li>
</ol>
<h2 id="📖-使用说明" tabindex="-1"><a class="header-anchor" href="#📖-使用说明"><span>📖 使用说明</span></a></h2>
<h3 id="执行流程" tabindex="-1"><a class="header-anchor" href="#执行流程"><span>执行流程</span></a></h3>
<ol>
<li>
<p><strong>种子扫描</strong>：</p>
<ul>
<li>连接到选定的下载器</li>
<li>获取所有种子的详细信息</li>
<li>包括Tracker列表、状态、标签等</li>
</ul>
</li>
<li>
<p><strong>站点识别</strong>：</p>
<ul>
<li>解析每个种子的Tracker地址</li>
<li>从Tracker域名中提取站点名称</li>
<li>生成对应的站点标签</li>
</ul>
</li>
<li>
<p><strong>条件过滤</strong>：</p>
<ul>
<li>应用状态过滤条件</li>
<li>排除指定的Tracker</li>
<li>检查数量限制</li>
</ul>
</li>
<li>
<p><strong>标签处理</strong>：</p>
<ul>
<li>检查是否已存在相同标签</li>
<li>根据覆盖设置决定是否添加</li>
<li>添加站点标签到种子</li>
</ul>
</li>
<li>
<p><strong>结果统计</strong>：</p>
<ul>
<li>统计处理结果</li>
<li>发送通知（如开启）</li>
</ul>
</li>
</ol>
<h3 id="标签规则" tabindex="-1"><a class="header-anchor" href="#标签规则"><span>标签规则</span></a></h3>
<h4 id="站点名称提取" tabindex="-1"><a class="header-anchor" href="#站点名称提取"><span>站点名称提取</span></a></h4>
<ul>
<li><strong>域名解析</strong>：从Tracker URL中提取域名</li>
<li><strong>站点识别</strong>：去除常见前缀（如www、tracker等）</li>
<li><strong>名称处理</strong>：使用核心域名作为站点名称</li>
</ul>
<h4 id="标签生成" tabindex="-1"><a class="header-anchor" href="#标签生成"><span>标签生成</span></a></h4>
<ul>
<li><strong>无前缀</strong>：直接使用站点名称（如<code v-pre>hdsky</code>）</li>
<li><strong>有前缀</strong>：前缀+站点名称（如<code v-pre>site_hdsky</code>）</li>
<li><strong>去重处理</strong>：避免重复添加相同标签</li>
</ul>
<h4 id="示例说明" tabindex="-1"><a class="header-anchor" href="#示例说明"><span>示例说明</span></a></h4>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code class="language-text"><span class="line">Tracker: https://tracker.hdsky.me/announce.php?passkey=xxx</span>
<span class="line">站点名称: hdsky</span>
<span class="line">标签前缀: site_</span>
<span class="line">最终标签: site_hdsky</span>
<span class="line"></span>
<span class="line">Tracker: http://announce.thddl.com:8080/announce.php</span>
<span class="line">站点名称: thddl  </span>
<span class="line">标签前缀: 无</span>
<span class="line">最终标签: thddl</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="定时任务配置" tabindex="-1"><a class="header-anchor" href="#定时任务配置"><span>定时任务配置</span></a></h3>
<h4 id="cron表达式示例" tabindex="-1"><a class="header-anchor" href="#cron表达式示例"><span>Cron表达式示例</span></a></h4>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code class="language-bash"><span class="line"><span class="token comment"># 每天凌晨2点执行</span></span>
<span class="line"><span class="token number">0</span> <span class="token number">2</span> * * *</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 每12小时执行一次</span></span>
<span class="line"><span class="token number">0</span> */12 * * *</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 每周日凌晨3点执行</span></span>
<span class="line"><span class="token number">0</span> <span class="token number">3</span> * * <span class="token number">0</span></span>
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
<li>立即执行一次站点标签任务</li>
<li>不受定时任务设置影响</li>
<li>可用于测试配置或手动处理</li>
</ul>
<h2 id="⚠️-注意事项" tabindex="-1"><a class="header-anchor" href="#⚠️-注意事项"><span>⚠️ 注意事项</span></a></h2>
<h3 id="使用建议" tabindex="-1"><a class="header-anchor" href="#使用建议"><span>使用建议</span></a></h3>
<ol>
<li>
<p><strong>首次使用</strong>：</p>
<ul>
<li>建议先手动执行一次，确认效果</li>
<li>检查生成的标签是否符合预期</li>
<li>确认无误后再设置定时任务</li>
</ul>
</li>
<li>
<p><strong>性能考虑</strong>：</p>
<ul>
<li>设置合理的处理数量限制</li>
<li>避免在下载器繁忙时执行</li>
<li>大量种子时可能需要较长处理时间</li>
</ul>
</li>
<li>
<p><strong>标签管理</strong>：</p>
<ul>
<li>合理设置标签前缀，便于区分</li>
<li>定期清理无用的标签</li>
<li>避免标签过多影响管理</li>
</ul>
</li>
</ol>
<h3 id="配置建议" tabindex="-1"><a class="header-anchor" href="#配置建议"><span>配置建议</span></a></h3>
<ol>
<li>
<p><strong>下载器选择</strong>：</p>
<ul>
<li>根据实际需要选择下载器</li>
<li>避免重复处理相同的种子</li>
<li>考虑不同下载器的负载情况</li>
</ul>
</li>
<li>
<p><strong>过滤条件</strong>：</p>
<ul>
<li>使用状态过滤提高处理效率</li>
<li>排除不需要的Tracker</li>
<li>合理设置处理数量限制</li>
</ul>
</li>
<li>
<p><strong>标签策略</strong>：</p>
<ul>
<li>统一的标签前缀便于管理</li>
<li>考虑是否需要覆盖已有标签</li>
<li>根据使用习惯调整标签格式</li>
</ul>
</li>
</ol>
<h3 id="故障排除" tabindex="-1"><a class="header-anchor" href="#故障排除"><span>故障排除</span></a></h3>
<ol>
<li>
<p><strong>标签未添加</strong>：</p>
<ul>
<li>检查下载器连接状态</li>
<li>确认种子状态符合过滤条件</li>
<li>验证Tracker地址格式</li>
</ul>
</li>
<li>
<p><strong>处理速度慢</strong>：</p>
<ul>
<li>减少单次处理数量</li>
<li>使用状态过滤减少处理范围</li>
<li>检查网络连接情况</li>
</ul>
</li>
<li>
<p><strong>标签重复</strong>：</p>
<ul>
<li>检查覆盖设置</li>
<li>确认标签前缀配置</li>
<li>手动清理重复标签</li>
</ul>
</li>
</ol>
<h2 id="📊-使用效果" tabindex="-1"><a class="header-anchor" href="#📊-使用效果"><span>📊 使用效果</span></a></h2>
<h3 id="处理统计" tabindex="-1"><a class="header-anchor" href="#处理统计"><span>处理统计</span></a></h3>
<ul>
<li><strong>扫描种子数</strong>：检查的种子总数</li>
<li><strong>符合条件数</strong>：满足处理条件的种子数</li>
<li><strong>添加标签数</strong>：成功添加标签的种子数</li>
<li><strong>跳过数量</strong>：因各种原因跳过的种子数</li>
</ul>
<h3 id="管理效果" tabindex="-1"><a class="header-anchor" href="#管理效果"><span>管理效果</span></a></h3>
<ul>
<li><strong>站点分类</strong>：通过标签快速识别种子来源</li>
<li><strong>统计便利</strong>：方便统计各站点种子数量</li>
<li><strong>管理优化</strong>：便于按站点进行种子管理</li>
</ul>
<h2 id="🔗-相关链接" tabindex="-1"><a class="header-anchor" href="#🔗-相关链接"><span>🔗 相关链接</span></a></h2>
<ul>
<li><RouteLink to="/docs/cultivation_secrets/main/">修仙秘籍主页</RouteLink></li>
<li><a href="/docs/other/cron_rule">Cron表达式说明</a></li>
<li><RouteLink to="/docs/cultivation_secrets/auto_delete_torrent/">自动删种</RouteLink></li>
<li><RouteLink to="/docs/cultivation_secrets/tracker_editor/">Tracker替换</RouteLink></li>
</ul>
<hr>
<p>🎯 <strong>提示</strong>：站点标签功能可以大大提升种子管理效率，建议首次使用时先手动执行确认效果。</p>
</div></template>


