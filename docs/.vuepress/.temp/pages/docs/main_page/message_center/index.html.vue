<template><div><h1 id="📢-消息中心" tabindex="-1"><a class="header-anchor" href="#📢-消息中心"><span>📢 消息中心</span></a></h1>
<p>消息中心是 MediaSaber 系统的重要组成部分，用于集中展示系统通知、操作结果和各类消息。通过消息中心，您可以及时了解系统状态、操作反馈和其他重要信息。</p>
<h2 id="🚪-功能入口" tabindex="-1"><a class="header-anchor" href="#🚪-功能入口"><span>🚪 功能入口</span></a></h2>
<p>消息中心位于系统首页顶部导航栏右侧，通过点击铃铛图标可以打开消息中心侧边栏：</p>
<p>点击铃铛图标后，系统会在右侧展开消息中心面板。</p>
<h2 id="🖥️-界面布局" tabindex="-1"><a class="header-anchor" href="#🖥️-界面布局"><span>🖥️ 界面布局</span></a></h2>
<p>消息中心界面主要分为三个部分：</p>
<h3 id="📰-消息列表区域" tabindex="-1"><a class="header-anchor" href="#📰-消息列表区域"><span>📰 消息列表区域</span></a></h3>
<p>这是消息中心的核心区域，用于展示各类消息通知。消息按照时间倒序排列，最新的消息显示在最上方。</p>
<h4 id="消息类型" tabindex="-1"><a class="header-anchor" href="#消息类型"><span>消息类型</span></a></h4>
<p>消息中心支持多种消息类型：</p>
<ul>
<li>📢 <strong>系统通知</strong>：系统级别的通知消息</li>
<li>⚙️ <strong>操作反馈</strong>：用户操作的执行结果</li>
<li>🎯 <strong>任务状态</strong>：后台任务的执行状态</li>
<li>📊 <strong>数据更新</strong>：系统数据的更新通知</li>
</ul>
<h4 id="消息格式" tabindex="-1"><a class="header-anchor" href="#消息格式"><span>消息格式</span></a></h4>
<p>消息中心支持多种消息格式：</p>
<ol>
<li>
<p><strong>纯文本消息</strong>：</p>
<ul>
<li>包含标题和内容</li>
<li>显示消息类型和时间</li>
</ul>
</li>
<li>
<p><strong>图文消息</strong>：</p>
<ul>
<li>包含图片、标题和内容</li>
<li>更直观地展示信息</li>
</ul>
</li>
<li>
<p><strong>列表消息</strong>：</p>
<ul>
<li>以列表形式展示多个相关内容</li>
<li>支持图片和标题的组合展示</li>
</ul>
</li>
</ol>
<h3 id="🔧-操作工具栏" tabindex="-1"><a class="header-anchor" href="#🔧-操作工具栏"><span>🔧 操作工具栏</span></a></h3>
<p>界面顶部包含操作工具栏，提供以下功能：</p>
<h4 id="🎯-类型过滤" tabindex="-1"><a class="header-anchor" href="#🎯-类型过滤"><span>🎯 类型过滤</span></a></h4>
<p>通过类型过滤功能，可以筛选显示特定类型的消息：</p>
<ul>
<li>点击过滤按钮（漏斗图标）</li>
<li>从下拉菜单中选择需要显示的消息类型</li>
<li>支持&quot;所有&quot;选项显示全部消息</li>
</ul>
<h4 id="❌-关闭面板" tabindex="-1"><a class="header-anchor" href="#❌-关闭面板"><span>❌ 关闭面板</span></a></h4>
<p>点击关闭按钮（×图标）可以关闭消息中心面板。</p>
<h3 id="💬-消息发送区域" tabindex="-1"><a class="header-anchor" href="#💬-消息发送区域"><span>💬 消息发送区域</span></a></h3>
<p>界面底部是消息发送区域，允许用户与系统进行交互：</p>
<h4 id="📝-消息输入框" tabindex="-1"><a class="header-anchor" href="#📝-消息输入框"><span>📝 消息输入框</span></a></h4>
<p>在输入框中可以输入消息或指令：</p>
<ul>
<li>支持普通文本消息</li>
<li>支持快捷指令（通过菜单选择）</li>
</ul>
<h4 id="🚀-快捷指令菜单" tabindex="-1"><a class="header-anchor" href="#🚀-快捷指令菜单"><span>🚀 快捷指令菜单</span></a></h4>
<p>点击输入框左侧的菜单按钮可以打开快捷指令菜单：</p>
<table>
<thead>
<tr>
<th>指令</th>
<th>功能说明</th>
<th>图标</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>/suc</code></td>
<td>更新配置</td>
<td>⚙️</td>
</tr>
<tr>
<td><code v-pre>/ssi</code></td>
<td>签到</td>
<td>✏️</td>
</tr>
<tr>
<td><code v-pre>/ssn</code></td>
<td>同步公告</td>
<td>🔔</td>
</tr>
<tr>
<td><code v-pre>/ssm</code></td>
<td>同步消息</td>
<td>💬</td>
</tr>
<tr>
<td><code v-pre>/ssd</code></td>
<td>同步数据</td>
<td>📊</td>
</tr>
<tr>
<td><code v-pre>/stn</code></td>
<td>站点连通测试</td>
<td>📡</td>
</tr>
<tr>
<td><code v-pre>/dsr</code></td>
<td>订阅-刷新</td>
<td>🔄</td>
</tr>
<tr>
<td><code v-pre>/dme</code></td>
<td>查漏集</td>
<td>🔍</td>
</tr>
<tr>
<td><code v-pre>/dse</code></td>
<td>补漏集</td>
<td>🔍</td>
</tr>
<tr>
<td><code v-pre>/115s</code></td>
<td>115转存</td>
<td>🔄</td>
</tr>
<tr>
<td><code v-pre>/csl</code></td>
<td>网盘云下载</td>
<td>☁️</td>
</tr>
</tbody>
</table>
<h2 id="📨-消息操作" tabindex="-1"><a class="header-anchor" href="#📨-消息操作"><span>📨 消息操作</span></a></h2>
<h3 id="👀-查看消息详情" tabindex="-1"><a class="header-anchor" href="#👀-查看消息详情"><span>👀 查看消息详情</span></a></h3>
<p>点击消息可以查看详细内容：</p>
<ul>
<li>点击纯文本消息可查看完整内容</li>
<li>点击图文消息可查看大图和详细信息</li>
<li>点击列表消息可查看相关项目的详细信息</li>
</ul>
<h3 id="🗑️-删除消息" tabindex="-1"><a class="header-anchor" href="#🗑️-删除消息"><span>🗑️ 删除消息</span></a></h3>
<p>通过右键菜单可以删除单条消息：</p>
<ol>
<li>右键点击需要删除的消息</li>
<li>在弹出菜单中选择&quot;删除当前消息&quot;</li>
<li>确认删除操作</li>
</ol>
<h3 id="🔗-跳转链接" tabindex="-1"><a class="header-anchor" href="#🔗-跳转链接"><span>🔗 跳转链接</span></a></h3>
<p>部分消息包含跳转链接，可以快速跳转到相关页面：</p>
<ul>
<li>点击消息中的链接可以直接跳转到指定页面</li>
<li>外部链接会在新窗口中打开</li>
<li>内部链接会在当前窗口中跳转</li>
</ul>
<h2 id="📥-消息接收" tabindex="-1"><a class="header-anchor" href="#📥-消息接收"><span>📥 消息接收</span></a></h2>
<p>消息中心支持实时接收新消息：</p>
<ul>
<li>系统会自动推送新消息到消息中心</li>
<li>新消息会显示在列表顶部</li>
<li>消息列表会自动滚动到最新消息</li>
</ul>
<h2 id="📋-消息管理" tabindex="-1"><a class="header-anchor" href="#📋-消息管理"><span>📋 消息管理</span></a></h2>
<h3 id="🔄-加载更多" tabindex="-1"><a class="header-anchor" href="#🔄-加载更多"><span>🔄 加载更多</span></a></h3>
<p>当消息数量较多时，可以通过&quot;加载更多&quot;按钮查看更多历史消息：</p>
<ul>
<li>自动加载20条消息每页</li>
<li>点击&quot;加载更多&quot;按钮加载下一页</li>
<li>当没有更多消息时会显示提示信息</li>
</ul>
<h3 id="🗂️-消息分类" tabindex="-1"><a class="header-anchor" href="#🗂️-消息分类"><span>🗂️ 消息分类</span></a></h3>
<p>消息按照类型进行分类管理：</p>
<ul>
<li>系统通知</li>
<li>操作反馈</li>
<li>任务状态</li>
<li>数据更新</li>
</ul>
<h3 id="📅-时间排序" tabindex="-1"><a class="header-anchor" href="#📅-时间排序"><span>📅 时间排序</span></a></h3>
<p>所有消息按照时间倒序排列：</p>
<ul>
<li>最新消息显示在列表顶部</li>
<li>显示消息的精确时间</li>
<li>方便追踪消息的先后顺序</li>
</ul>
<h2 id="🎯-使用技巧" tabindex="-1"><a class="header-anchor" href="#🎯-使用技巧"><span>🎯 使用技巧</span></a></h2>
<h3 id="快速操作" tabindex="-1"><a class="header-anchor" href="#快速操作"><span>快速操作</span></a></h3>
<ol>
<li><strong>快捷键</strong>：可以通过快捷键快速打开消息中心</li>
<li><strong>右键菜单</strong>：使用右键菜单快速删除消息</li>
<li><strong>过滤功能</strong>：使用类型过滤快速查看特定类型消息</li>
</ol>
<h3 id="消息交互" tabindex="-1"><a class="header-anchor" href="#消息交互"><span>消息交互</span></a></h3>
<ol>
<li><strong>指令操作</strong>：使用快捷指令快速执行系统功能</li>
<li><strong>链接跳转</strong>：通过消息中的链接快速跳转到相关页面</li>
<li><strong>实时更新</strong>：消息中心会实时显示最新消息</li>
</ol>
<p>通过消息中心，您可以及时了解系统状态和操作结果，提高使用 MediaSaber 的效率和体验。</p>
</div></template>


