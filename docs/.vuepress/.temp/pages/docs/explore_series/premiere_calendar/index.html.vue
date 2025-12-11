<template><div><h1 id="📅-开播日历" tabindex="-1"><a class="header-anchor" href="#📅-开播日历"><span>📅 开播日历</span></a></h1>
<p>开播日历是 MediaSaber 系统中用于查看影视作品开播时间的功能模块。通过该功能，用户可以了解即将上映或播出的影视作品时间安排，合理规划观影计划。</p>
<h2 id="🚪-功能入口" tabindex="-1"><a class="header-anchor" href="#🚪-功能入口"><span>🚪 功能入口</span></a></h2>
<p>开播日历功能位于系统左侧导航菜单中：</p>
<ol>
<li>在左侧导航菜单中找到&quot;寻影探剧&quot;选项</li>
<li>点击展开子菜单</li>
<li>选择&quot;开播日历&quot;选项进入功能页面</li>
</ol>
<p>或者直接访问路径：<code v-pre>/main/discovery/movie-calendar</code></p>
<h2 id="🖥️-界面布局" tabindex="-1"><a class="header-anchor" href="#🖥️-界面布局"><span>🖥️ 界面布局</span></a></h2>
<p>开播日历页面采用直观的日历布局，包含筛选区域和内容展示区域：</p>
<h3 id="🔍-筛选区域" tabindex="-1"><a class="header-anchor" href="#🔍-筛选区域"><span>🔍 筛选区域</span></a></h3>
<p>页面上部为筛选区域，包含多个筛选条件：</p>
<h4 id="📺-类型筛选" tabindex="-1"><a class="header-anchor" href="#📺-类型筛选"><span>📺 类型筛选</span></a></h4>
<ul>
<li>选择查看的媒体类型</li>
<li>包括电影、电视剧等类型</li>
<li>可快速切换查看不同类型作品的开播时间</li>
</ul>
<h4 id="🎬-平台筛选" tabindex="-1"><a class="header-anchor" href="#🎬-平台筛选"><span>🎬 平台筛选</span></a></h4>
<ul>
<li>选择不同的媒体平台来源</li>
<li>默认显示所有平台</li>
<li>可快速切换查看各平台的开播安排</li>
</ul>
<h3 id="📅-日历展示区域" tabindex="-1"><a class="header-anchor" href="#📅-日历展示区域"><span>📅 日历展示区域</span></a></h3>
<p>页面主体为日历展示区域，采用月视图展示开播信息：</p>
<h4 id="📆-日历视图" tabindex="-1"><a class="header-anchor" href="#📆-日历视图"><span>📆 日历视图</span></a></h4>
<ul>
<li>以标准月历形式展示日期</li>
<li>每个日期格子显示当天开播的作品数量</li>
<li>点击日期可查看当天详细开播信息</li>
</ul>
<h4 id="🎬-日期标记" tabindex="-1"><a class="header-anchor" href="#🎬-日期标记"><span>🎬 日期标记</span></a></h4>
<ul>
<li>有开播作品的日期会以特殊标记显示</li>
<li>不同类型的作品可能使用不同颜色标记</li>
<li>鼠标悬停可预览当天开播作品简要信息</li>
</ul>
<h3 id="📋-当日详情区域" tabindex="-1"><a class="header-anchor" href="#📋-当日详情区域"><span>📋 当日详情区域</span></a></h3>
<p>页面下部为当日详情区域，展示选中日期的开播作品详情：</p>
<h4 id="🎬-媒体项目卡片" tabindex="-1"><a class="header-anchor" href="#🎬-媒体项目卡片"><span>🎬 媒体项目卡片</span></a></h4>
<p>每个开播作品以卡片形式展示：</p>
<ul>
<li><strong>海报图片</strong>：影视作品的封面图片</li>
<li><strong>标题信息</strong>：影视作品的名称和年份</li>
<li><strong>简介内容</strong>：简短的内容概述</li>
<li><strong>详细信息</strong>：点击可查看完整信息</li>
</ul>
<h4 id="📊-展示方式" tabindex="-1"><a class="header-anchor" href="#📊-展示方式"><span>📊 展示方式</span></a></h4>
<ul>
<li>默认显示当前日期的开播作品</li>
<li>点击日历中的日期可切换显示内容</li>
<li>支持滚动浏览查看更多作品信息</li>
</ul>
<h2 id="📋-功能详解" tabindex="-1"><a class="header-anchor" href="#📋-功能详解"><span>📋 功能详解</span></a></h2>
<h3 id="📅-日历浏览" tabindex="-1"><a class="header-anchor" href="#📅-日历浏览"><span>📅 日历浏览</span></a></h3>
<p>通过日历视图查看影视作品开播时间：</p>
<h4 id="月份切换" tabindex="-1"><a class="header-anchor" href="#月份切换"><span>月份切换</span></a></h4>
<ul>
<li>提供上一月/下一月切换按钮</li>
<li>可快速浏览不同月份的开播安排</li>
<li>支持直接跳转到指定月份</li>
</ul>
<h4 id="日期选择" tabindex="-1"><a class="header-anchor" href="#日期选择"><span>日期选择</span></a></h4>
<ul>
<li>点击任意日期查看当天开播作品</li>
<li>选中日期会高亮显示</li>
<li>自动更新下方详情区域内容</li>
</ul>
<h3 id="🔍-筛选功能" tabindex="-1"><a class="header-anchor" href="#🔍-筛选功能"><span>🔍 筛选功能</span></a></h3>
<p>通过筛选条件精确查找感兴趣的开播作品：</p>
<h4 id="类型筛选" tabindex="-1"><a class="header-anchor" href="#类型筛选"><span>类型筛选</span></a></h4>
<ul>
<li>选择特定类型查看对应作品</li>
<li>支持电影、电视剧等类型筛选</li>
<li>实时更新筛选结果</li>
</ul>
<h4 id="平台筛选" tabindex="-1"><a class="header-anchor" href="#平台筛选"><span>平台筛选</span></a></h4>
<ul>
<li>选择特定平台查看其开播安排</li>
<li>支持多平台切换</li>
<li>实时更新筛选结果</li>
</ul>
<h3 id="📋-详情查看" tabindex="-1"><a class="header-anchor" href="#📋-详情查看"><span>📋 详情查看</span></a></h3>
<h4 id="作品详情" tabindex="-1"><a class="header-anchor" href="#作品详情"><span>作品详情</span></a></h4>
<ul>
<li>点击作品卡片查看详细信息</li>
<li>包括完整简介、演员列表等</li>
<li>支持跳转到作品详情页面</li>
</ul>
<h4 id="当日概览" tabindex="-1"><a class="header-anchor" href="#当日概览"><span>当日概览</span></a></h4>
<ul>
<li>展示选中日期所有开播作品</li>
<li>按时间顺序排列</li>
<li>支持快速浏览多部作品</li>
</ul>
<h2 id="⚙️-使用方法" tabindex="-1"><a class="header-anchor" href="#⚙️-使用方法"><span>⚙️ 使用方法</span></a></h2>
<h3 id="访问开播日历" tabindex="-1"><a class="header-anchor" href="#访问开播日历"><span>访问开播日历</span></a></h3>
<ol>
<li>打开 MediaSaber 系统</li>
<li>在左侧导航菜单中找到&quot;寻影探剧&quot;</li>
<li>点击&quot;开播日历&quot;进入页面</li>
</ol>
<h3 id="浏览开播安排" tabindex="-1"><a class="header-anchor" href="#浏览开播安排"><span>浏览开播安排</span></a></h3>
<ol>
<li>查看当前月份的日历视图</li>
<li>有标记的日期表示当天有作品开播</li>
<li>点击日期查看当天详细开播信息</li>
</ol>
<h3 id="使用筛选功能" tabindex="-1"><a class="header-anchor" href="#使用筛选功能"><span>使用筛选功能</span></a></h3>
<ol>
<li>根据需要选择媒体类型（电影/电视剧）</li>
<li>选择平台筛选条件</li>
<li>系统会自动更新日历和详情内容</li>
</ol>
<h2 id="🎯-使用技巧" tabindex="-1"><a class="header-anchor" href="#🎯-使用技巧"><span>🎯 使用技巧</span></a></h2>
<h3 id="规划观影计划" tabindex="-1"><a class="header-anchor" href="#规划观影计划"><span>规划观影计划</span></a></h3>
<ol>
<li><strong>定期查看</strong>：定期查看开播日历了解最新安排</li>
<li><strong>类型筛选</strong>：使用类型筛选关注感兴趣的影视类型</li>
<li><strong>平台限定</strong>：限定在熟悉的平台中查看开播信息</li>
</ol>
<h3 id="不错过重要作品" tabindex="-1"><a class="header-anchor" href="#不错过重要作品"><span>不错过重要作品</span></a></h3>
<ol>
<li><strong>标记关注</strong>：对感兴趣的作品进行标记或订阅</li>
<li><strong>提前准备</strong>：根据开播时间提前准备观看设备</li>
<li><strong>分享推荐</strong>：将开播信息分享给朋友</li>
</ol>
<h3 id="提高使用效率" tabindex="-1"><a class="header-anchor" href="#提高使用效率"><span>提高使用效率</span></a></h3>
<ol>
<li><strong>快捷切换</strong>：使用月份切换按钮快速浏览不同时间段</li>
<li><strong>组合筛选</strong>：同时使用类型和平台筛选精确定位</li>
<li><strong>重点关注</strong>：关注评分高或热度高的即将开播作品</li>
</ol>
<p>通过开播日历功能，用户可以清晰了解影视作品的开播时间安排，合理规划观影计划，确保不会错过感兴趣的影视作品。</p>
</div></template>


