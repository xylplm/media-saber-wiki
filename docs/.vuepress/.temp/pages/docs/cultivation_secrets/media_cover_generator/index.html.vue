<template><div><h1 id="🎨-媒体库封面生成" tabindex="-1"><a class="header-anchor" href="#🎨-媒体库封面生成"><span>🎨 媒体库封面生成</span></a></h1>
<p><strong>媒体库封面生成</strong> 插件用于为你的电影、剧集等媒体库自动生成美观的封面图片，支持多种样式和自定义配置，让你的媒体库更「好看」也更容易识别。</p>
<h2 id="⚙️-功能特点" tabindex="-1"><a class="header-anchor" href="#⚙️-功能特点"><span>⚙️ 功能特点</span></a></h2>
<ul>
<li>自动扫描指定媒体库目录</li>
<li>基于名称 / 元数据生成封面</li>
<li>提供多种封面样式与颜色风格（以实际实现为准）</li>
<li>支持定时批量生成 / 更新</li>
</ul>
<h2 id="🚀-配置指南" tabindex="-1"><a class="header-anchor" href="#🚀-配置指南"><span>🚀 配置指南</span></a></h2>
<p>在插件配置页面中可以看到所有相关字段，这里从使用角度给出通用说明：</p>
<h3 id="📂-媒体路径" tabindex="-1"><a class="header-anchor" href="#📂-媒体路径"><span>📂 媒体路径</span></a></h3>
<ol>
<li>
<p><strong>媒体库路径</strong></p>
<ul>
<li>必填</li>
<li>指向电影/剧集等媒体文件所在目录</li>
<li>支持本地路径或挂载路径</li>
</ul>
</li>
<li>
<p><strong>匹配规则 / 目录结构</strong>（如表单中有相关字段）</p>
<ul>
<li>根据个人目录组织方式配置，例如：
<ul>
<li><code v-pre>电影/片名 (年份)</code></li>
<li><code v-pre>剧集/剧名/Season 01</code> 等</li>
</ul>
</li>
</ul>
</li>
</ol>
<h3 id="🎭-风格与输出" tabindex="-1"><a class="header-anchor" href="#🎭-风格与输出"><span>🎭 风格与输出</span></a></h3>
<ol start="3">
<li>
<p><strong>封面模板 / 样式</strong></p>
<ul>
<li>选填</li>
<li>可选择不同风格（简约、海报感、信息密集等）</li>
</ul>
</li>
<li>
<p><strong>输出路径 / 覆盖策略</strong></p>
<ul>
<li>可以选择直接写入媒体目录（如 <code v-pre>folder.jpg</code> / <code v-pre>poster.jpg</code>）</li>
<li>或输出到独立目录</li>
</ul>
</li>
</ol>
<h3 id="⏰-调度与通知" tabindex="-1"><a class="header-anchor" href="#⏰-调度与通知"><span>⏰ 调度与通知</span></a></h3>
<ol start="5">
<li>
<p><strong>周期 (cron)</strong></p>
<ul>
<li>选填</li>
<li>使用 Cron 表达式配置刷新频率，例如：
<ul>
<li><code v-pre>0 4 * * *</code>：每天凌晨 4 点扫描更新</li>
</ul>
</li>
</ul>
</li>
<li>
<p><strong>消息推送 (notice)</strong>（如表单中提供）</p>
<ul>
<li>选填</li>
<li>批量生成完成后推送汇总统计（成功数量 / 失败条目等）</li>
</ul>
</li>
</ol>
<h3 id="🔧-工具栏操作" tabindex="-1"><a class="header-anchor" href="#🔧-工具栏操作"><span>🔧 工具栏操作</span></a></h3>
<ul>
<li><strong>运行一次 (run)</strong>：立刻扫描媒体库并生成/更新封面。</li>
</ul>
<h2 id="📖-使用说明" tabindex="-1"><a class="header-anchor" href="#📖-使用说明"><span>📖 使用说明</span></a></h2>
<ol>
<li>确认媒体库目录结构已基本稳定，避免频繁大规模变动。</li>
<li>在插件中配置媒体库路径及必要的匹配规则。</li>
<li>选择喜欢的封面样式与输出策略（覆盖原有封面或单独生成）。</li>
<li>可先通过「运行一次」在少量目录上测试效果，确认样式与命名符合预期。</li>
<li>根据媒体更新频率设置合适的 <code v-pre>cron</code>，如每日或每周批量刷新一次。</li>
</ol>
<h2 id="⚠️-注意事项" tabindex="-1"><a class="header-anchor" href="#⚠️-注意事项"><span>⚠️ 注意事项</span></a></h2>
<ul>
<li>若勾选覆盖模式，请确认旧封面已备份或不再需要。</li>
<li>大量媒体库首次生成可能耗时较长，建议安排在低峰时段执行。</li>
<li>如需个性化模板，可关注后续文档或插件配置说明的更新。</li>
</ul>
<h2 id="🔗-相关链接" tabindex="-1"><a class="header-anchor" href="#🔗-相关链接"><span>🔗 相关链接</span></a></h2>
<ul>
<li><RouteLink to="/docs/cultivation_secrets/main/">修仙秘籍主页</RouteLink></li>
<li><RouteLink to="/docs/other/cron_rule/">Cron 表达式说明</RouteLink></li>
</ul>
</div></template>


