<template><div><h1 id="⏰-定时任务" tabindex="-1"><a class="header-anchor" href="#⏰-定时任务"><span>⏰ 定时任务</span></a></h1>
<p>定时任务是 MediaSaber 系统中用于自动化执行各种后台任务的功能模块。通过定时任务，系统可以按照预设的时间计划自动执行诸如数据同步、资源更新、状态检查等操作，减少人工干预，提高系统运行效率。</p>
<h2 id="🚪-功能入口" tabindex="-1"><a class="header-anchor" href="#🚪-功能入口"><span>🚪 功能入口</span></a></h2>
<p>定时任务功能位于系统首页顶部导航栏右侧，通过点击用户头像可以打开下拉菜单：</p>
<p>在下拉菜单中点击&quot;定时任务&quot;选项，即可进入定时任务列表页面。</p>
<h2 id="🖥️-界面布局" tabindex="-1"><a class="header-anchor" href="#🖥️-界面布局"><span>🖥️ 界面布局</span></a></h2>
<p>定时任务页面采用简洁的表格形式展示所有定时任务信息：</p>
<h3 id="📋-任务列表" tabindex="-1"><a class="header-anchor" href="#📋-任务列表"><span>📋 任务列表</span></a></h3>
<p>页面核心区域为任务列表，以表格形式展示所有定时任务的详细信息：</p>
<h4 id="📊-任务信息字段" tabindex="-1"><a class="header-anchor" href="#📊-任务信息字段"><span>📊 任务信息字段</span></a></h4>
<table>
<thead>
<tr>
<th>字段名称</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>任务名称</td>
<td>定时任务的描述性名称</td>
</tr>
<tr>
<td>任务cron</td>
<td>任务执行的时间表达式（<a href="/docs/other/cron_rule">cron格式</a>）</td>
</tr>
<tr>
<td>上次执行时间</td>
<td>任务最近一次执行的时间</td>
</tr>
<tr>
<td>下次执行时间</td>
<td>任务下次计划执行的时间</td>
</tr>
</tbody>
</table>
<h4 id="📝-任务列表特点" tabindex="-1"><a class="header-anchor" href="#📝-任务列表特点"><span>📝 任务列表特点</span></a></h4>
<ul>
<li>以表格形式清晰展示所有定时任务</li>
<li>按照系统预设的执行计划排列任务</li>
<li>显示任务的执行状态和时间信息</li>
<li>支持点击选择特定任务查看详情</li>
</ul>
<h3 id="📄-分页控件" tabindex="-1"><a class="header-anchor" href="#📄-分页控件"><span>📄 分页控件</span></a></h3>
<p>页面底部包含分页控件：</p>
<ul>
<li>显示当前页码和总页数</li>
<li>支持跳转到首页、末页、上一页、下一页</li>
<li>可以选择每页显示的任务数量</li>
</ul>
<h2 id="📋-任务信息详解" tabindex="-1"><a class="header-anchor" href="#📋-任务信息详解"><span>📋 任务信息详解</span></a></h2>
<h3 id="📋-任务名称" tabindex="-1"><a class="header-anchor" href="#📋-任务名称"><span>📋 任务名称</span></a></h3>
<p>任务名称是对定时任务功能的简要描述，帮助用户快速了解任务的作用：</p>
<ul>
<li>媒体库同步任务</li>
<li>站点签到任务</li>
<li>数据备份任务</li>
<li>系统健康检查任务</li>
<li>日志清理任务</li>
</ul>
<h3 id="⏱️-任务cron" tabindex="-1"><a class="header-anchor" href="#⏱️-任务cron"><span>⏱️ 任务cron</span></a></h3>
<p>任务cron是使用cron表达式定义的任务执行时间计划：</p>
<p>关于cron表达式的详细说明，请参考：<a href="/docs/other/cron_rule">cron表达式文档</a></p>
<h4 id="cron表达式格式" tabindex="-1"><a class="header-anchor" href="#cron表达式格式"><span>Cron表达式格式</span></a></h4>
<p>Cron表达式由6个字段组成，分别表示：</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code class="language-text"><span class="line">秒 分 时 日 月 周</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h4 id="常见cron示例" tabindex="-1"><a class="header-anchor" href="#常见cron示例"><span>常见cron示例</span></a></h4>
<table>
<thead>
<tr>
<th>表达式</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>0 0 2 * * *</code></td>
<td>每天凌晨2点执行</td>
</tr>
<tr>
<td><code v-pre>0 0 0 * * 1</code></td>
<td>每周一凌晨执行</td>
</tr>
<tr>
<td><code v-pre>0 0 */6 * * *</code></td>
<td>每6小时执行一次</td>
</tr>
<tr>
<td><code v-pre>0 30 9 * * 1-5</code></td>
<td>工作日早上9:30执行</td>
</tr>
</tbody>
</table>
<h3 id="🕐-上次执行时间" tabindex="-1"><a class="header-anchor" href="#🕐-上次执行时间"><span>🕐 上次执行时间</span></a></h3>
<p>显示任务最近一次执行的具体时间：</p>
<ul>
<li>格式为：YYYY-MM-DD HH:mm:ss</li>
<li>如果任务从未执行过，显示为空</li>
<li>帮助用户了解任务的执行历史</li>
</ul>
<h3 id="⏭️-下次执行时间" tabindex="-1"><a class="header-anchor" href="#⏭️-下次执行时间"><span>⏭️ 下次执行时间</span></a></h3>
<p>显示任务下次计划执行的具体时间：</p>
<ul>
<li>根据cron表达式计算得出</li>
<li>格式为：YYYY-MM-DD HH:mm:ss</li>
<li>帮助用户预测任务执行时间</li>
</ul>
<h2 id="📋-任务操作" tabindex="-1"><a class="header-anchor" href="#📋-任务操作"><span>📋 任务操作</span></a></h2>
<h3 id="👁️-查看任务详情" tabindex="-1"><a class="header-anchor" href="#👁️-查看任务详情"><span>👁️ 查看任务详情</span></a></h3>
<ol>
<li>在任务列表中点击任意任务行</li>
<li>系统会选中该任务并高亮显示</li>
<li>当前版本暂不支持查看详细配置信息</li>
</ol>
<h3 id="🔄-刷新任务列表" tabindex="-1"><a class="header-anchor" href="#🔄-刷新任务列表"><span>🔄 刷新任务列表</span></a></h3>
<ol>
<li>页面加载时会自动获取最新的任务列表</li>
<li>如需手动刷新，可重新进入页面</li>
<li>任务信息会实时更新</li>
</ol>
<h2 id="📊-任务类型" tabindex="-1"><a class="header-anchor" href="#📊-任务类型"><span>📊 任务类型</span></a></h2>
<p>MediaSaber 系统包含多种类型的定时任务：</p>
<h3 id="🎬-媒体相关任务" tabindex="-1"><a class="header-anchor" href="#🎬-媒体相关任务"><span>🎬 媒体相关任务</span></a></h3>
<ul>
<li><strong>媒体库同步</strong>：定期同步媒体库信息</li>
<li><strong>订阅刷新</strong>：定期刷新订阅内容</li>
<li><strong>查漏补缺</strong>：检查并补充缺失的媒体内容</li>
</ul>
<h3 id="🌐-站点相关任务" tabindex="-1"><a class="header-anchor" href="#🌐-站点相关任务"><span>🌐 站点相关任务</span></a></h3>
<ul>
<li><strong>站点签到</strong>：定期在配置的站点执行签到操作</li>
<li><strong>连通性测试</strong>：检查站点连接状态</li>
<li><strong>数据同步</strong>：同步站点数据到本地</li>
</ul>
<h3 id="📊-系统维护任务" tabindex="-1"><a class="header-anchor" href="#📊-系统维护任务"><span>📊 系统维护任务</span></a></h3>
<ul>
<li><strong>数据备份</strong>：定期备份系统数据</li>
<li><strong>日志清理</strong>：清理过期系统日志</li>
<li><strong>健康检查</strong>：检查系统运行状态</li>
</ul>
<h3 id="📈-数据处理任务" tabindex="-1"><a class="header-anchor" href="#📈-数据处理任务"><span>📈 数据处理任务</span></a></h3>
<ul>
<li><strong>统计信息更新</strong>：更新系统统计信息</li>
<li><strong>缓存清理</strong>：清理过期缓存数据</li>
<li><strong>索引重建</strong>：重建搜索索引</li>
</ul>
<h2 id="📋-任务状态说明" tabindex="-1"><a class="header-anchor" href="#📋-任务状态说明"><span>📋 任务状态说明</span></a></h2>
<h3 id="🟢-正常状态" tabindex="-1"><a class="header-anchor" href="#🟢-正常状态"><span>🟢 正常状态</span></a></h3>
<ul>
<li>任务按照cron表达式正常执行</li>
<li>上次执行时间和下次执行时间均正常显示</li>
<li>系统会自动调度任务执行</li>
</ul>
<h3 id="🟡-异常状态" tabindex="-1"><a class="header-anchor" href="#🟡-异常状态"><span>🟡 异常状态</span></a></h3>
<ul>
<li>任务执行出现错误</li>
<li>可能需要管理员干预</li>
<li>系统会记录错误日志</li>
</ul>
<h3 id="⚫-停止状态" tabindex="-1"><a class="header-anchor" href="#⚫-停止状态"><span>⚫ 停止状态</span></a></h3>
<ul>
<li>任务被系统或管理员停止</li>
<li>不会按照计划执行</li>
<li>需要手动恢复</li>
</ul>
<h2 id="⚙️-任务管理-待开发" tabindex="-1"><a class="header-anchor" href="#⚙️-任务管理-待开发"><span>⚙️ 任务管理（待开发）</span></a></h2>
<p>当前版本的定时任务页面主要用于查看任务信息，后续版本将支持以下功能：</p>
<h3 id="✅-任务控制" tabindex="-1"><a class="header-anchor" href="#✅-任务控制"><span>✅ 任务控制</span></a></h3>
<ul>
<li>启用/停用特定任务</li>
<li>手动触发任务执行</li>
<li>调整任务执行计划</li>
</ul>
<h3 id="📝-任务配置" tabindex="-1"><a class="header-anchor" href="#📝-任务配置"><span>📝 任务配置</span></a></h3>
<ul>
<li>修改任务cron表达式</li>
<li>配置任务执行参数</li>
<li>设置任务依赖关系</li>
</ul>
<h3 id="📊-任务监控" tabindex="-1"><a class="header-anchor" href="#📊-任务监控"><span>📊 任务监控</span></a></h3>
<ul>
<li>查看任务执行历史</li>
<li>监控任务执行状态</li>
<li>接收任务异常通知</li>
</ul>
<h2 id="🎯-使用技巧" tabindex="-1"><a class="header-anchor" href="#🎯-使用技巧"><span>🎯 使用技巧</span></a></h2>
<h3 id="🕐-时间规划" tabindex="-1"><a class="header-anchor" href="#🕐-时间规划"><span>🕐 时间规划</span></a></h3>
<ol>
<li><strong>合理安排执行时间</strong>：避免在系统高峰期执行资源密集型任务</li>
<li><strong>错峰执行</strong>：将不同任务安排在不同时间执行，避免资源竞争</li>
<li><strong>周期评估</strong>：定期评估任务执行频率是否合理</li>
</ol>
<h3 id="📊-状态监控" tabindex="-1"><a class="header-anchor" href="#📊-状态监控"><span>📊 状态监控</span></a></h3>
<ol>
<li><strong>定期检查</strong>：定期查看任务执行状态</li>
<li><strong>关注异常</strong>：及时处理执行失败的任务</li>
<li><strong>性能观察</strong>：观察任务对系统性能的影响</li>
</ol>
<h3 id="📋-任务分析" tabindex="-1"><a class="header-anchor" href="#📋-任务分析"><span>📋 任务分析</span></a></h3>
<ol>
<li><strong>执行频率</strong>：根据实际需求调整任务执行频率</li>
<li><strong>依赖关系</strong>：注意任务间的依赖关系</li>
<li><strong>资源消耗</strong>：评估任务对系统资源的消耗情况</li>
</ol>
<p>通过定时任务功能，MediaSaber 系统可以自动化执行各种后台操作，提高系统运行效率，减少人工干预，确保系统稳定运行。</p>
</div></template>


