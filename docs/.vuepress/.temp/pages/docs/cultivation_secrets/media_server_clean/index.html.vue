<template><div><h1 id="📹-媒体服务清理" tabindex="-1"><a class="header-anchor" href="#📹-媒体服务清理"><span>📹 媒体服务清理</span></a></h1>
<p><strong>媒体服务清理</strong> 是一个用于自动清理媒体服务器中大文件的插件，专门针对电影类型，可以按照文件大小阈值自动清理超大的媒体文件，释放存储空间。</p>
<h2 id="⚙️-功能特点" tabindex="-1"><a class="header-anchor" href="#⚙️-功能特点"><span>⚙️ 功能特点</span></a></h2>
<h3 id="🧹-大文件清理" tabindex="-1"><a class="header-anchor" href="#🧹-大文件清理"><span>🧹 大文件清理</span></a></h3>
<ul>
<li><strong>Emby支持</strong>：目前仅支持Emby媒体服务器</li>
<li><strong>电影清理</strong>：专门清理电影类型的大文件</li>
<li><strong>体积控制</strong>：按设定的GB阈值清理超大文件</li>
<li><strong>定时执行</strong>：支持定时自动清理</li>
</ul>
<h3 id="🎯-适用场景" tabindex="-1"><a class="header-anchor" href="#🎯-适用场景"><span>🎯 适用场景</span></a></h3>
<ul>
<li><strong>存储空间紧张</strong>：自动清理超大电影文件释放空间</li>
<li><strong>质量管理</strong>：移除过大的低效率编码文件</li>
<li><strong>自动维护</strong>：定期清理维持媒体库整洁</li>
</ul>
<h2 id="🚀-配置指南" tabindex="-1"><a class="header-anchor" href="#🚀-配置指南"><span>🚀 配置指南</span></a></h2>
<h3 id="📋-配置参数" tabindex="-1"><a class="header-anchor" href="#📋-配置参数"><span>📋 配置参数</span></a></h3>
<p>插件提供以下配置选项：</p>
<h3 id="⚙️-基础设置" tabindex="-1"><a class="header-anchor" href="#⚙️-基础设置"><span>⚙️ 基础设置</span></a></h3>
<ol>
<li>
<p><strong>周期 (cron)</strong>：</p>
<ul>
<li>设置定时清理的执行周期</li>
<li>使用Cron表达式格式</li>
<li>示例：<code v-pre>30 8 * * *</code> 每天上午8:30执行</li>
<li>可留空仅使用手动清理</li>
</ul>
</li>
<li>
<p><strong>媒体库 (mediaServerId)</strong>：</p>
<ul>
<li>选择要清理的媒体服务器</li>
<li><strong>重要</strong>：目前仅支持Emby</li>
<li>从已配置的媒体服务器列表中选择</li>
</ul>
</li>
<li>
<p><strong>最大体积(GB) (maxSize)</strong>：</p>
<ul>
<li>设置文件大小阈值</li>
<li>超过此大小的媒体文件将被清理</li>
<li><strong>仅适用于电影类型</strong></li>
<li>示例：设置20表示清理超过20GB的电影文件</li>
</ul>
</li>
</ol>
<h3 id="🔧-操作功能" tabindex="-1"><a class="header-anchor" href="#🔧-操作功能"><span>🔧 操作功能</span></a></h3>
<ol start="4">
<li><strong>运行一次</strong>：
<ul>
<li>手动触发一次清理操作</li>
<li>立即执行清理任务</li>
<li>不受定时任务设置影响</li>
</ul>
</li>
</ol>
<h2 id="📖-使用说明" tabindex="-1"><a class="header-anchor" href="#📖-使用说明"><span>📖 使用说明</span></a></h2>
<h3 id="清理范围" tabindex="-1"><a class="header-anchor" href="#清理范围"><span>清理范围</span></a></h3>
<h4 id="支持的媒体服务器" tabindex="-1"><a class="header-anchor" href="#支持的媒体服务器"><span>支持的媒体服务器</span></a></h4>
<ul>
<li><strong>Emby</strong>：完全支持</li>
<li><strong>其他服务器</strong>：暂不支持</li>
</ul>
<h4 id="清理类型" tabindex="-1"><a class="header-anchor" href="#清理类型"><span>清理类型</span></a></h4>
<ul>
<li><strong>电影文件</strong>：仅清理电影类型的媒体文件</li>
<li><strong>剧集文件</strong>：暂不支持清理剧集</li>
</ul>
<h4 id="文件大小判断" tabindex="-1"><a class="header-anchor" href="#文件大小判断"><span>文件大小判断</span></a></h4>
<ul>
<li>按单个媒体文件的实际大小计算</li>
<li>以GB为单位设置阈值</li>
<li>超过阈值的文件将被清理</li>
</ul>
<h3 id="定时任务配置" tabindex="-1"><a class="header-anchor" href="#定时任务配置"><span>定时任务配置</span></a></h3>
<h4 id="cron表达式示例" tabindex="-1"><a class="header-anchor" href="#cron表达式示例"><span>Cron表达式示例</span></a></h4>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code class="language-bash"><span class="line"><span class="token comment"># 每天凌晨3点清理</span></span>
<span class="line"><span class="token number">0</span> <span class="token number">3</span> * * *</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 每周日上午8点清理</span></span>
<span class="line"><span class="token number">0</span> <span class="token number">8</span> * * <span class="token number">0</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 每月1日凌晨2点清理</span></span>
<span class="line"><span class="token number">0</span> <span class="token number">2</span> <span class="token number">1</span> * *</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 每周三和周六上午10点清理</span></span>
<span class="line"><span class="token number">0</span> <span class="token number">10</span> * * <span class="token number">3,6</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>📖 <strong>详细说明</strong>：关于Cron表达式的完整语法和更多示例，请参考：<a href="/docs/other/cron_rule">Cron表达式说明文档</a></p>
</blockquote>
<h3 id="使用步骤" tabindex="-1"><a class="header-anchor" href="#使用步骤"><span>使用步骤</span></a></h3>
<h4 id="配置流程" tabindex="-1"><a class="header-anchor" href="#配置流程"><span>配置流程</span></a></h4>
<ol>
<li>
<p><strong>选择媒体库</strong>：</p>
<ul>
<li>从下拉列表选择Emby服务器</li>
<li>确保媒体库连接正常</li>
</ul>
</li>
<li>
<p><strong>设置大小阈值</strong>：</p>
<ul>
<li>根据存储情况设置合理的GB阈值</li>
<li>建议先设置较大的值测试效果</li>
</ul>
</li>
<li>
<p><strong>配置定时任务</strong>：</p>
<ul>
<li>设置合适的清理周期</li>
<li>避免在高峰时段执行</li>
</ul>
</li>
<li>
<p><strong>测试运行</strong>：</p>
<ul>
<li>先使用&quot;运行一次&quot;功能测试</li>
<li>确认清理效果后再启用定时任务</li>
</ul>
</li>
</ol>
<h4 id="清理过程" tabindex="-1"><a class="header-anchor" href="#清理过程"><span>清理过程</span></a></h4>
<ol>
<li>
<p><strong>文件扫描</strong>：</p>
<ul>
<li>扫描Emby媒体库中的电影文件</li>
<li>获取每个文件的实际大小</li>
</ul>
</li>
<li>
<p><strong>大小比较</strong>：</p>
<ul>
<li>将文件大小与设定阈值比较</li>
<li>标记超过阈值的文件</li>
</ul>
</li>
<li>
<p><strong>执行清理</strong>：</p>
<ul>
<li>删除标记的超大文件</li>
<li>更新媒体库索引</li>
</ul>
</li>
</ol>
<h2 id="⚠️-注意事项" tabindex="-1"><a class="header-anchor" href="#⚠️-注意事项"><span>⚠️ 注意事项</span></a></h2>
<h3 id="重要警告" tabindex="-1"><a class="header-anchor" href="#重要警告"><span>重要警告</span></a></h3>
<ol>
<li>
<p><strong>功能限制</strong>：</p>
<ul>
<li><strong>仅支持Emby媒体服务器</strong></li>
<li><strong>仅清理电影类型文件</strong></li>
<li>不支持其他媒体服务器或剧集文件</li>
</ul>
</li>
<li>
<p><strong>数据风险</strong>：</p>
<ul>
<li><strong>清理操作不可恢复</strong></li>
<li>被清理的文件将被永久删除</li>
<li>请确保有重要文件的备份</li>
</ul>
</li>
<li>
<p><strong>阈值设置</strong>：</p>
<ul>
<li>合理设置文件大小阈值</li>
<li>避免误删重要的高质量文件</li>
<li>建议从较大的值开始逐步调整</li>
</ul>
</li>
</ol>
<h3 id="使用建议" tabindex="-1"><a class="header-anchor" href="#使用建议"><span>使用建议</span></a></h3>
<ol>
<li>
<p><strong>测试先行</strong>：</p>
<ul>
<li>首次使用先手动测试</li>
<li>从较大的阈值开始设置</li>
<li>观察清理结果后再调整</li>
</ul>
</li>
<li>
<p><strong>定期检查</strong>：</p>
<ul>
<li>定期检查清理日志</li>
<li>确认清理的文件符合预期</li>
<li>及时调整清理策略</li>
</ul>
</li>
<li>
<p><strong>备份重要文件</strong>：</p>
<ul>
<li>对重要的媒体文件做好备份</li>
<li>设置合理的清理阈值避免误删</li>
<li>考虑使用回收站功能</li>
</ul>
</li>
</ol>
<h3 id="故障排除" tabindex="-1"><a class="header-anchor" href="#故障排除"><span>故障排除</span></a></h3>
<ol>
<li>
<p><strong>清理无效果</strong>：</p>
<ul>
<li>检查媒体库连接状态</li>
<li>确认文件大小阈值设置</li>
<li>验证权限配置是否正确</li>
</ul>
</li>
<li>
<p><strong>清理失败</strong>：</p>
<ul>
<li>检查Emby服务器状态</li>
<li>确认文件访问权限</li>
<li>查看系统日志获取详细错误</li>
</ul>
</li>
<li>
<p><strong>误删文件</strong>：</p>
<ul>
<li>检查回收站是否有文件</li>
<li>从备份中恢复重要文件</li>
<li>调整阈值避免类似问题</li>
</ul>
</li>
</ol>
<h2 id="📊-使用效果" tabindex="-1"><a class="header-anchor" href="#📊-使用效果"><span>📊 使用效果</span></a></h2>
<h3 id="清理统计" tabindex="-1"><a class="header-anchor" href="#清理统计"><span>清理统计</span></a></h3>
<ul>
<li><strong>已清理文件数量</strong>：清理的电影文件数量</li>
<li><strong>释放空间大小</strong>：总共释放的存储空间</li>
<li><strong>最后清理时间</strong>：最近一次清理的执行时间</li>
<li><strong>平均文件大小</strong>：被清理文件的平均大小</li>
</ul>
<h3 id="存储优化" tabindex="-1"><a class="header-anchor" href="#存储优化"><span>存储优化</span></a></h3>
<ul>
<li><strong>空间释放</strong>：有效释放存储空间</li>
<li><strong>库整理</strong>：保持媒体库文件大小合理</li>
<li><strong>性能提升</strong>：减少大文件对系统性能的影响</li>
</ul>
<h2 id="🔗-相关链接" tabindex="-1"><a class="header-anchor" href="#🔗-相关链接"><span>🔗 相关链接</span></a></h2>
<ul>
<li><RouteLink to="/docs/cultivation_secrets/main/">修仙秘籍主页</RouteLink></li>
<li><a href="/docs/other/cron_rule">Cron表达式说明</a></li>
</ul>
<hr>
<p>🎯 <strong>提示</strong>：此功能仅支持Emby媒体服务器清理电影文件，清理操作不可恢复，请谨慎设置文件大小阈值。</p>
</div></template>


