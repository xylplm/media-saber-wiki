<template><div><h1 id="📊-业务日志" tabindex="-1"><a class="header-anchor" href="#📊-业务日志"><span>📊 业务日志</span></a></h1>
<p>业务日志是 MediaSaber 系统中记录业务操作和事件的重要工具。与系统日志不同，业务日志专注于记录用户操作、业务流程和业务相关事件，帮助管理员了解系统业务运行情况和用户行为。</p>
<h2 id="🚪-功能入口" tabindex="-1"><a class="header-anchor" href="#🚪-功能入口"><span>🚪 功能入口</span></a></h2>
<p>业务日志位于系统首页顶部导航栏右侧，通过点击带有搜索图标的文档图标可以进入业务日志页面：</p>
<p>点击图标后，系统会跳转到业务日志页面。</p>
<h2 id="🖥️-界面布局" tabindex="-1"><a class="header-anchor" href="#🖥️-界面布局"><span>🖥️ 界面布局</span></a></h2>
<p>业务日志页面采用列表形式展示，包含筛选、操作和详情查看功能：</p>
<h3 id="🔧-顶部操作栏" tabindex="-1"><a class="header-anchor" href="#🔧-顶部操作栏"><span>🔧 顶部操作栏</span></a></h3>
<p>页面顶部包含各种操作和筛选功能：</p>
<h4 id="✅-全选功能" tabindex="-1"><a class="header-anchor" href="#✅-全选功能"><span>✅ 全选功能</span></a></h4>
<ul>
<li>勾选全选框可以选择当前页面显示的所有日志</li>
<li>支持批量操作</li>
<li>当部分日志被选中时显示为中间状态</li>
</ul>
<h4 id="🔍-日志筛选" tabindex="-1"><a class="header-anchor" href="#🔍-日志筛选"><span>🔍 日志筛选</span></a></h4>
<p>提供两种筛选方式：</p>
<ol>
<li>
<p><strong>标题搜索</strong>：</p>
<ul>
<li>根据日志标题关键字进行搜索</li>
<li>支持模糊匹配</li>
<li>实时搜索，输入即筛选</li>
</ul>
</li>
<li>
<p><strong>类型筛选</strong>：</p>
<ul>
<li>根据日志类型进行筛选</li>
<li>下拉选择需要查看的日志类型</li>
<li>支持多选</li>
</ul>
</li>
</ol>
<h4 id="🗑️-批量删除" tabindex="-1"><a class="header-anchor" href="#🗑️-批量删除"><span>🗑️ 批量删除</span></a></h4>
<ul>
<li>选择多个日志后，点击删除按钮可以批量删除</li>
<li>删除前会弹出确认对话框</li>
<li>提高日志管理效率</li>
</ul>
<h4 id="🔄-刷新按钮" tabindex="-1"><a class="header-anchor" href="#🔄-刷新按钮"><span>🔄 刷新按钮</span></a></h4>
<ul>
<li>点击刷新按钮可以重新加载日志列表</li>
<li>获取最新的日志信息</li>
<li>更新显示内容</li>
</ul>
<h3 id="📋-日志列表区域" tabindex="-1"><a class="header-anchor" href="#📋-日志列表区域"><span>📋 日志列表区域</span></a></h3>
<p>页面中部是日志列表展示区域：</p>
<h4 id="📝-日志项结构" tabindex="-1"><a class="header-anchor" href="#📝-日志项结构"><span>📝 日志项结构</span></a></h4>
<p>每个日志项包含以下信息：</p>
<ul>
<li><strong>复选框</strong>：用于选择该条日志</li>
<li><strong>类型描述</strong>：显示日志的业务类型</li>
<li><strong>标题</strong>：日志的简要描述</li>
<li><strong>创建时间</strong>：日志记录的时间</li>
<li><strong>删除按钮</strong>：删除该条日志</li>
</ul>
<h4 id="📂-日志详情查看" tabindex="-1"><a class="header-anchor" href="#📂-日志详情查看"><span>📂 日志详情查看</span></a></h4>
<ul>
<li>点击日志项可以展开查看详细信息</li>
<li>展开后显示日志的完整内容</li>
<li>支持折叠操作</li>
</ul>
<h3 id="📄-分页控件" tabindex="-1"><a class="header-anchor" href="#📄-分页控件"><span>📄 分页控件</span></a></h3>
<p>页面底部包含分页控件：</p>
<ul>
<li>显示当前页码和总页数</li>
<li>支持跳转到首页、末页、上一页、下一页</li>
<li>可以选择每页显示的日志数量</li>
</ul>
<h2 id="📋-日志操作" tabindex="-1"><a class="header-anchor" href="#📋-日志操作"><span>📋 日志操作</span></a></h2>
<h3 id="📂-查看日志详情" tabindex="-1"><a class="header-anchor" href="#📂-查看日志详情"><span>📂 查看日志详情</span></a></h3>
<ol>
<li>点击任意日志项</li>
<li>日志项会展开显示详细内容</li>
<li>再次点击可折叠详情内容</li>
</ol>
<h3 id="🗑️-删除单条日志" tabindex="-1"><a class="header-anchor" href="#🗑️-删除单条日志"><span>🗑️ 删除单条日志</span></a></h3>
<ol>
<li>点击日志项右侧的删除按钮（垃圾桶图标）</li>
<li>系统会弹出确认对话框</li>
<li>确认后该条日志会被删除</li>
</ol>
<h3 id="✅-批量操作" tabindex="-1"><a class="header-anchor" href="#✅-批量操作"><span>✅ 批量操作</span></a></h3>
<h4 id="批量选择" tabindex="-1"><a class="header-anchor" href="#批量选择"><span>批量选择</span></a></h4>
<ol>
<li>勾选需要操作的日志项前的复选框</li>
<li>或者勾选顶部全选框选择所有日志</li>
</ol>
<h4 id="批量删除" tabindex="-1"><a class="header-anchor" href="#批量删除"><span>批量删除</span></a></h4>
<ol>
<li>选择多个日志项</li>
<li>点击顶部的批量删除按钮</li>
<li>确认删除操作</li>
<li>选中的日志将被批量删除</li>
</ol>
<h3 id="🔍-日志筛选-1" tabindex="-1"><a class="header-anchor" href="#🔍-日志筛选-1"><span>🔍 日志筛选</span></a></h3>
<h4 id="标题筛选" tabindex="-1"><a class="header-anchor" href="#标题筛选"><span>标题筛选</span></a></h4>
<ol>
<li>在标题搜索框中输入关键字</li>
<li>系统会自动筛选匹配的日志</li>
<li>清空搜索框可重置筛选</li>
</ol>
<h4 id="类型筛选" tabindex="-1"><a class="header-anchor" href="#类型筛选"><span>类型筛选</span></a></h4>
<ol>
<li>点击类型筛选下拉框</li>
<li>选择需要查看的日志类型</li>
<li>系统会筛选出相应类型的日志</li>
</ol>
<h3 id="🔄-刷新日志" tabindex="-1"><a class="header-anchor" href="#🔄-刷新日志"><span>🔄 刷新日志</span></a></h3>
<ol>
<li>点击刷新按钮</li>
<li>系统会重新加载最新的日志列表</li>
<li>更新显示内容</li>
</ol>
<h2 id="📊-日志类型" tabindex="-1"><a class="header-anchor" href="#📊-日志类型"><span>📊 日志类型</span></a></h2>
<p>业务日志支持多种类型，便于分类管理：</p>
<h3 id="🎬-媒体相关" tabindex="-1"><a class="header-anchor" href="#🎬-媒体相关"><span>🎬 媒体相关</span></a></h3>
<ul>
<li>媒体搜索日志</li>
<li>媒体下载日志</li>
<li>媒体整理日志</li>
</ul>
<h3 id="🌐-站点相关" tabindex="-1"><a class="header-anchor" href="#🌐-站点相关"><span>🌐 站点相关</span></a></h3>
<ul>
<li>站点签到日志</li>
<li>站点数据同步日志</li>
<li>站点连接测试日志</li>
</ul>
<h3 id="📺-订阅相关" tabindex="-1"><a class="header-anchor" href="#📺-订阅相关"><span>📺 订阅相关</span></a></h3>
<ul>
<li>订阅创建日志</li>
<li>订阅更新日志</li>
<li>订阅删除日志</li>
</ul>
<h3 id="⚙️-系统操作" tabindex="-1"><a class="header-anchor" href="#⚙️-系统操作"><span>⚙️ 系统操作</span></a></h3>
<ul>
<li>配置更新日志</li>
<li>系统维护日志</li>
<li>用户操作日志</li>
</ul>
<h2 id="📋-日志详情页面" tabindex="-1"><a class="header-anchor" href="#📋-日志详情页面"><span>📋 日志详情页面</span></a></h2>
<p>点击日志项可以进入日志详情页面，查看更多详细信息：</p>
<h3 id="🎯-页面功能" tabindex="-1"><a class="header-anchor" href="#🎯-页面功能"><span>🎯 页面功能</span></a></h3>
<h4 id="📋-日志基本信息" tabindex="-1"><a class="header-anchor" href="#📋-日志基本信息"><span>📋 日志基本信息</span></a></h4>
<ul>
<li>显示日志标题</li>
<li>显示日志类型</li>
<li>显示创建时间</li>
</ul>
<h4 id="🔍-详细内容搜索" tabindex="-1"><a class="header-anchor" href="#🔍-详细内容搜索"><span>🔍 详细内容搜索</span></a></h4>
<ul>
<li>提供关键字搜索功能</li>
<li>在当前日志详细内容中搜索</li>
<li>快速定位关键信息</li>
</ul>
<h4 id="🏷️-日志级别筛选" tabindex="-1"><a class="header-anchor" href="#🏷️-日志级别筛选"><span>🏷️ 日志级别筛选</span></a></h4>
<p>支持按日志级别筛选：</p>
<table>
<thead>
<tr>
<th>级别</th>
<th>说明</th>
<th>按钮颜色</th>
</tr>
</thead>
<tbody>
<tr>
<td>Info</td>
<td>一般信息</td>
<td>蓝色</td>
</tr>
<tr>
<td>Debug</td>
<td>调试信息</td>
<td>紫色</td>
</tr>
<tr>
<td>Error</td>
<td>错误信息</td>
<td>红色</td>
</tr>
</tbody>
</table>
<h3 id="📜-日志内容显示" tabindex="-1"><a class="header-anchor" href="#📜-日志内容显示"><span>📜 日志内容显示</span></a></h3>
<ul>
<li>以滚动列表形式展示日志详细内容</li>
<li>显示每条日志的时间戳</li>
<li>根据日志级别使用不同颜色标识</li>
</ul>
<h3 id="📄-分页功能" tabindex="-1"><a class="header-anchor" href="#📄-分页功能"><span>📄 分页功能</span></a></h3>
<ul>
<li>支持大量日志内容的分页显示</li>
<li>可以选择每页显示的条目数</li>
<li>支持跳转到指定页面</li>
</ul>
<h3 id="🔙-返回功能" tabindex="-1"><a class="header-anchor" href="#🔙-返回功能"><span>🔙 返回功能</span></a></h3>
<ul>
<li>点击返回按钮可返回业务日志列表页面</li>
<li>保持操作连贯性</li>
</ul>
<h2 id="🎯-使用技巧" tabindex="-1"><a class="header-anchor" href="#🎯-使用技巧"><span>🎯 使用技巧</span></a></h2>
<h3 id="高效日志管理" tabindex="-1"><a class="header-anchor" href="#高效日志管理"><span>高效日志管理</span></a></h3>
<ol>
<li><strong>定期清理</strong>：定期删除过期或不必要的日志</li>
<li><strong>分类查看</strong>：使用类型筛选功能查看特定业务日志</li>
<li><strong>批量操作</strong>：使用批量删除功能提高管理效率</li>
</ol>
<h3 id="问题诊断" tabindex="-1"><a class="header-anchor" href="#问题诊断"><span>问题诊断</span></a></h3>
<ol>
<li><strong>时间定位</strong>：根据问题发生时间筛选相关日志</li>
<li><strong>关键字搜索</strong>：使用关键字快速定位问题信息</li>
<li><strong>级别筛选</strong>：重点关注Error级别日志</li>
</ol>
<h3 id="日志分析" tabindex="-1"><a class="header-anchor" href="#日志分析"><span>日志分析</span></a></h3>
<ol>
<li><strong>趋势分析</strong>：通过日志时间分布分析业务趋势</li>
<li><strong>频率统计</strong>：统计各类操作的执行频率</li>
<li><strong>异常检测</strong>：通过日志模式识别异常行为</li>
</ol>
<p>通过业务日志功能，管理员可以全面了解系统业务运行情况，追踪用户操作，诊断业务问题，为系统优化和业务决策提供数据支持。</p>
</div></template>


