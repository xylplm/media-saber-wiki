<template><div><h1 id="⏰-cron-表达式" tabindex="-1"><a class="header-anchor" href="#⏰-cron-表达式"><span>⏰ cron 表达式</span></a></h1>
<p>cron 表达式是 MediaSaber 系统中用于定义任务执行时间计划的重要工具。在系统中涉及设置时间周期的功能都采用 cron 表达式进行配置，如定时任务、数据同步计划等。</p>
<h2 id="🎯-可视化生成工具" tabindex="-1"><a class="header-anchor" href="#🎯-可视化生成工具"><span>🎯 可视化生成工具</span></a></h2>
<p>MediaSaber WEB端在录入 Cron 表达式的输入框右侧带有 Cron 快速生成工具。这是一个可视化生成工具，可以快速生成常用表达式。即使不会编写 cron 表达式，也可以通过可视化工具轻松生成。</p>
<p><img src="@source/02.使用文档/20.其它/images/cron/01.png" alt="Cron可视化工具"></p>
<p>使用方法：</p>
<ol>
<li>点击输入框右侧的时钟图标</li>
<li>在弹出的工具中选择需要的时间计划</li>
<li>系统会自动生成对应的 cron 表达式</li>
</ol>
<h2 id="🧪-表达式测试" tabindex="-1"><a class="header-anchor" href="#🧪-表达式测试"><span>🧪 表达式测试</span></a></h2>
<p>如果您的表达式配置后任务没有正确执行，请先使用以下工具测试表达式：</p>
<p><a href="https://tool.lu/crontab/" target="_blank" rel="noopener noreferrer">Cron 表达式测试</a></p>
<p>将您的表达式复制粘贴到测试工具中，验证表达式的正确性。</p>
<h2 id="📚-表达式格式说明" tabindex="-1"><a class="header-anchor" href="#📚-表达式格式说明"><span>📚 表达式格式说明</span></a></h2>
<h3 id="标准格式" tabindex="-1"><a class="header-anchor" href="#标准格式"><span>标准格式</span></a></h3>
<p>MediaSaber 中的 cron 表达式是一个字符串，由 6 个字段组成，用空格分隔：</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code class="language-text"><span class="line">* * * * * *     ——————表达式内容</span>
<span class="line">秒 分 时 日 月 周    ——————表示的含义</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="字段含义详解" tabindex="-1"><a class="header-anchor" href="#字段含义详解"><span>字段含义详解</span></a></h3>
<table>
<thead>
<tr>
<th>字段</th>
<th>允许值</th>
<th>允许特殊字符</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>秒</td>
<td>0-59</td>
<td>* , - /</td>
<td>一小时中的第几秒</td>
</tr>
<tr>
<td>分</td>
<td>0-59</td>
<td>* , - /</td>
<td>一小时中的第几分</td>
</tr>
<tr>
<td>时</td>
<td>0-23</td>
<td>* , - /</td>
<td>一天中的第几小时</td>
</tr>
<tr>
<td>日</td>
<td>1-31</td>
<td>* , - / ? L W</td>
<td>一月中的第几天</td>
</tr>
<tr>
<td>月</td>
<td>1-12 或 JAN-DEC</td>
<td>* , - /</td>
<td>一年中的第几月</td>
</tr>
<tr>
<td>周</td>
<td>0-7 或 SUN-SAT</td>
<td>* , - / ? L #</td>
<td>一周中的星期几 (0=7=SUN)</td>
</tr>
</tbody>
</table>
<h3 id="特殊字符说明" tabindex="-1"><a class="header-anchor" href="#特殊字符说明"><span>特殊字符说明</span></a></h3>
<table>
<thead>
<tr>
<th>字符</th>
<th>说明</th>
<th>示例</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>*</code></td>
<td>匹配该字段的所有值</td>
<td><code v-pre>* * * * * *</code> 表示每秒执行</td>
</tr>
<tr>
<td><code v-pre>?</code></td>
<td>仅在日和周字段中使用，表示不指定值</td>
<td>用于日和周字段互斥的情况</td>
</tr>
<tr>
<td><code v-pre>-</code></td>
<td>指定值的范围</td>
<td><code v-pre>10-20</code> 表示从10到20</td>
</tr>
<tr>
<td><code v-pre>,</code></td>
<td>指定多个不连续的值</td>
<td><code v-pre>1,3,5</code> 表示第1、3、5</td>
</tr>
<tr>
<td><code v-pre>/</code></td>
<td>指定值的起始和增加幅度</td>
<td><code v-pre>0/15</code> 表示从0开始每15个单位</td>
</tr>
<tr>
<td><code v-pre>L</code></td>
<td>最后</td>
<td>在日字段中表示本月最后一天</td>
</tr>
<tr>
<td><code v-pre>W</code></td>
<td>工作日</td>
<td>靠近指定日期的最近工作日</td>
</tr>
<tr>
<td><code v-pre>#</code></td>
<td>第几个星期几</td>
<td><code v-pre>6#3</code> 表示每月第三个星期五</td>
</tr>
</tbody>
</table>
<h2 id="📋-常见示例" tabindex="-1"><a class="header-anchor" href="#📋-常见示例"><span>📋 常见示例</span></a></h2>
<h3 id="基础示例" tabindex="-1"><a class="header-anchor" href="#基础示例"><span>基础示例</span></a></h3>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code class="language-text"><span class="line">* * * * * *        每秒执行一次</span>
<span class="line"></span>
<span class="line">0 * * * * *        每分钟执行一次</span>
<span class="line"></span>
<span class="line">0 0 * * * *        每小时执行一次</span>
<span class="line"></span>
<span class="line">0 0 0 * * *        每天凌晨执行一次</span>
<span class="line"></span>
<span class="line">0 0 1 * * *        每天凌晨1点执行一次</span>
<span class="line"></span>
<span class="line">0 0 1 1 * *        每月1日1点执行一次</span>
<span class="line"></span>
<span class="line">0 0 1 1 1 *        每年1月1日凌晨1点执行一次</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="高级示例" tabindex="-1"><a class="header-anchor" href="#高级示例"><span>高级示例</span></a></h3>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code class="language-text"><span class="line">0 0 9-17 * * *     每天9点到17点每小时执行一次</span>
<span class="line"></span>
<span class="line">0 0/30 9-17 * * *  每天9点到17点每30分钟执行一次</span>
<span class="line"></span>
<span class="line">0 0 0 * * 1-5      工作日每天凌晨执行一次</span>
<span class="line"></span>
<span class="line">0 0 0 1 * *        每月1日凌晨执行一次</span>
<span class="line"></span>
<span class="line">0 0 0 1 1 *        每年1月1日凌晨执行一次</span>
<span class="line"></span>
<span class="line">0 0 0 L * *        每月最后一天执行一次</span>
<span class="line"></span>
<span class="line">0 0 0 LW * *       每月最后一个工作日执行一次</span>
<span class="line"></span>
<span class="line">0 0 0 * * 5L       每月最后一个星期五执行一次</span>
<span class="line"></span>
<span class="line">0 0 0 * * 6#3      每月第三个星期六执行一次</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="⚠️-注意事项" tabindex="-1"><a class="header-anchor" href="#⚠️-注意事项"><span>⚠️ 注意事项</span></a></h2>
<h3 id="时间设置建议" tabindex="-1"><a class="header-anchor" href="#时间设置建议"><span>时间设置建议</span></a></h3>
<ol>
<li><strong>避免高峰期</strong>：尽量避免在系统使用高峰期设置密集任务</li>
<li><strong>错峰执行</strong>：将不同任务安排在不同时间执行，避免资源竞争</li>
<li><strong>合理频率</strong>：根据实际需求设置执行频率，避免过于频繁</li>
</ol>
<h3 id="表达式编写要点" tabindex="-1"><a class="header-anchor" href="#表达式编写要点"><span>表达式编写要点</span></a></h3>
<ol>
<li><strong>字段数量</strong>：确保表达式包含6个字段</li>
<li><strong>数值范围</strong>：确保各字段的数值在允许范围内</li>
<li><strong>特殊字符</strong>：正确使用特殊字符，特别是日和周字段的互斥关系</li>
<li><strong>时区考虑</strong>：cron表达式基于系统时区执行</li>
</ol>
<h3 id="常见错误" tabindex="-1"><a class="header-anchor" href="#常见错误"><span>常见错误</span></a></h3>
<ol>
<li><strong>字段数量错误</strong>：缺少或多余字段</li>
<li><strong>数值越界</strong>：如分钟字段使用70</li>
<li><strong>日和周同时指定</strong>：应在其中一个字段使用?字符</li>
<li><strong>英文大小写</strong>：星期和月份应使用大写英文</li>
</ol>
<p>通过正确使用 cron 表达式，您可以精确控制 MediaSaber 系统中各种定时任务的执行时间，实现自动化管理。</p>
</div></template>


