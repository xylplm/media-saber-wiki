<template><div><h1 id="📅-订阅日历" tabindex="-1"><a class="header-anchor" href="#📅-订阅日历"><span>📅 订阅日历</span></a></h1>
<blockquote>
<p>订阅日历功能以日历形式可视化展示您的电影和电视剧订阅的上映时间，帮助您更好地规划媒体订阅和观看计划。支持多种视图模式和外部日历同步。</p>
</blockquote>
<hr>
<h2 id="📋-功能概述" tabindex="-1"><a class="header-anchor" href="#📋-功能概述"><span>📋 功能概述</span></a></h2>
<p>订阅日历提供了直观的日历视图来管理和查看您的媒体订阅时间安排，主要功能包括：</p>
<ul>
<li><strong>可视化时间轴</strong>：以日历形式展示媒体的发布和上映时间</li>
<li><strong>多视图支持</strong>：支持月视图、周视图、日视图切换</li>
<li><strong>媒体信息展示</strong>：直接在日历上显示媒体海报和基本信息</li>
<li><strong>外部同步</strong>：支持导出到其他日历应用</li>
</ul>
<hr>
<h2 id="🗓️-日历视图" tabindex="-1"><a class="header-anchor" href="#🗓️-日历视图"><span>🗓️ 日历视图</span></a></h2>
<h3 id="📊-视图模式" tabindex="-1"><a class="header-anchor" href="#📊-视图模式"><span>📊 视图模式</span></a></h3>
<p>订阅日历支持多种视图模式，方便不同需求的查看：</p>
<h4 id="月视图" tabindex="-1"><a class="header-anchor" href="#月视图"><span>月视图</span></a></h4>
<ul>
<li><strong>概览模式</strong>：查看整月的媒体发布计划</li>
<li><strong>密度较高</strong>：适合查看长期安排</li>
<li><strong>快速导航</strong>：便于跨月份浏览</li>
</ul>
<h4 id="周视图" tabindex="-1"><a class="header-anchor" href="#周视图"><span>周视图</span></a></h4>
<ul>
<li><strong>详细模式</strong>：查看一周内的详细安排</li>
<li><strong>中等密度</strong>：平衡概览和细节</li>
<li><strong>便于规划</strong>：适合制定周度观影计划</li>
</ul>
<h4 id="日视图" tabindex="-1"><a class="header-anchor" href="#日视图"><span>日视图</span></a></h4>
<ul>
<li><strong>精细模式</strong>：查看单日的所有发布内容</li>
<li><strong>最高详度</strong>：显示完整的媒体信息</li>
<li><strong>当日聚焦</strong>：专注于当天的内容</li>
</ul>
<h3 id="🎬-媒体信息显示" tabindex="-1"><a class="header-anchor" href="#🎬-媒体信息显示"><span>🎬 媒体信息显示</span></a></h3>
<p>每个日历事件会显示以下信息：</p>
<h4 id="电影显示" tabindex="-1"><a class="header-anchor" href="#电影显示"><span>电影显示</span></a></h4>
<ul>
<li><strong>媒体海报</strong>：50x70像素的海报缩略图</li>
<li><strong>电影标题</strong>：完整的电影名称</li>
<li><strong>发布年份</strong>：电影的上映年份</li>
<li><strong>事件类型</strong>：标识为电影类型</li>
</ul>
<h4 id="电视剧显示" tabindex="-1"><a class="header-anchor" href="#电视剧显示"><span>电视剧显示</span></a></h4>
<ul>
<li><strong>媒体海报</strong>：50x70像素的海报缩略图</li>
<li><strong>剧集标题</strong>：完整的电视剧名称</li>
<li><strong>发布年份</strong>：电视剧的首播年份</li>
<li><strong>季集信息</strong>：显示具体的季和集数信息(如S01E01)</li>
<li><strong>事件类型</strong>：标识为电视剧类型</li>
</ul>
<h3 id="🎯-数据来源" tabindex="-1"><a class="header-anchor" href="#🎯-数据来源"><span>🎯 数据来源</span></a></h3>
<p>日历中的信息来源于：</p>
<ul>
<li><strong>已添加订阅</strong>：所有已添加的电影和电视剧订阅</li>
<li><strong>TMDB数据</strong>：媒体的发布时间和基本信息</li>
<li><strong>实时更新</strong>：订阅变更时自动更新日历显示</li>
</ul>
<hr>
<h2 id="�-外部日历同步" tabindex="-1"><a class="header-anchor" href="#�-外部日历同步"><span>� 外部日历同步</span></a></h2>
<p>订阅日历支持通过iCal格式导出到外部日历应用，实现跨平台同步。</p>
<h3 id="📱-ical链接配置" tabindex="-1"><a class="header-anchor" href="#📱-ical链接配置"><span>📱 iCal链接配置</span></a></h3>
<h4 id="基础链接" tabindex="-1"><a class="header-anchor" href="#基础链接"><span>基础链接</span></a></h4>
<p><strong>格式：</strong> <code v-pre>http(s)://[Media Saber外网地址]/ical</code></p>
<p><strong>示例：</strong> <code v-pre>https://your.domain:8443/ical</code></p>
<p><strong>用途：</strong> 获取基础的日历数据，无提醒功能</p>
<h4 id="提醒链接" tabindex="-1"><a class="header-anchor" href="#提醒链接"><span>提醒链接</span></a></h4>
<p><strong>格式：</strong> <code v-pre>http(s)://[Media Saber外网地址]/ical?remind=1</code></p>
<p><strong>示例：</strong> <code v-pre>https://your.domain:8443/ical?remind=1</code></p>
<p><strong>用途：</strong> 获取带提醒功能的日历数据</p>
<h3 id="📲-支持的日历应用" tabindex="-1"><a class="header-anchor" href="#📲-支持的日历应用"><span>📲 支持的日历应用</span></a></h3>
<h4 id="ios-日历" tabindex="-1"><a class="header-anchor" href="#ios-日历"><span>iOS 日历</span></a></h4>
<ol>
<li>打开iPhone/iPad的&quot;设置&quot;应用</li>
<li>选择&quot;日历&quot; &gt; &quot;账户&quot; &gt; &quot;添加账户&quot;</li>
<li>选择&quot;其他&quot; &gt; &quot;添加已订阅的日历&quot;</li>
<li>输入iCal链接地址</li>
<li>点击&quot;下一步&quot;完成添加</li>
</ol>
<h4 id="google-日历" tabindex="-1"><a class="header-anchor" href="#google-日历"><span>Google 日历</span></a></h4>
<ol>
<li>打开Google日历网页版</li>
<li>在左侧点击&quot;+&quot;号添加其他日历</li>
<li>选择&quot;通过URL&quot;</li>
<li>输入iCal链接地址</li>
<li>点击&quot;添加日历&quot;</li>
</ol>
<h4 id="outlook-日历" tabindex="-1"><a class="header-anchor" href="#outlook-日历"><span>Outlook 日历</span></a></h4>
<ol>
<li>打开Outlook网页版或桌面版</li>
<li>选择&quot;添加日历&quot; &gt; &quot;从Internet订阅&quot;</li>
<li>输入iCal链接地址</li>
<li>设置日历名称和颜色</li>
<li>点击&quot;导入&quot;</li>
</ol>
<h4 id="其他应用" tabindex="-1"><a class="header-anchor" href="#其他应用"><span>其他应用</span></a></h4>
<p>大部分日历应用都支持iCal格式的订阅链接，具体添加方法请参考各应用的帮助文档。</p>
<hr>
<h2 id="�️-使用说明" tabindex="-1"><a class="header-anchor" href="#�️-使用说明"><span>�️ 使用说明</span></a></h2>
<h3 id="基本操作" tabindex="-1"><a class="header-anchor" href="#基本操作"><span>基本操作</span></a></h3>
<h4 id="查看日历" tabindex="-1"><a class="header-anchor" href="#查看日历"><span>查看日历</span></a></h4>
<ol>
<li>进入&quot;订阅管理&quot; &gt; &quot;订阅日历&quot;页面</li>
<li>系统会自动加载所有订阅的媒体时间信息</li>
<li>使用顶部的视图切换按钮选择合适的查看模式</li>
</ol>
<h4 id="导航时间" tabindex="-1"><a class="header-anchor" href="#导航时间"><span>导航时间</span></a></h4>
<ul>
<li><strong>上一个/下一个</strong>：使用导航按钮切换时间段</li>
<li><strong>今天按钮</strong>：快速回到当前日期</li>
<li><strong>日期选择</strong>：点击日期标题进行快速跳转</li>
</ul>
<h4 id="查看详情" tabindex="-1"><a class="header-anchor" href="#查看详情"><span>查看详情</span></a></h4>
<ul>
<li><strong>悬停查看</strong>：鼠标悬停在事件上查看基本信息</li>
<li><strong>点击事件</strong>：点击日历事件查看详细信息</li>
<li><strong>海报显示</strong>：自动加载并显示媒体海报</li>
</ul>
<h3 id="高级功能" tabindex="-1"><a class="header-anchor" href="#高级功能"><span>高级功能</span></a></h3>
<h4 id="筛选显示" tabindex="-1"><a class="header-anchor" href="#筛选显示"><span>筛选显示</span></a></h4>
<ul>
<li><strong>类型筛选</strong>：可能支持按电影/电视剧类型筛选显示</li>
<li><strong>状态筛选</strong>：可能支持按订阅状态筛选显示</li>
<li><strong>时间范围</strong>：可能支持自定义时间范围显示</li>
</ul>
<h4 id="个性化设置" tabindex="-1"><a class="header-anchor" href="#个性化设置"><span>个性化设置</span></a></h4>
<ul>
<li><strong>主题配色</strong>：可能支持自定义日历主题</li>
<li><strong>信息密度</strong>：可能支持调整显示信息的详细程度</li>
<li><strong>时区设置</strong>：可能支持不同时区的时间显示</li>
</ul>
<hr>
<h2 id="⚙️-配置要求" tabindex="-1"><a class="header-anchor" href="#⚙️-配置要求"><span>⚙️ 配置要求</span></a></h2>
<h3 id="网络访问" tabindex="-1"><a class="header-anchor" href="#网络访问"><span>网络访问</span></a></h3>
<h4 id="内网访问" tabindex="-1"><a class="header-anchor" href="#内网访问"><span>内网访问</span></a></h4>
<ul>
<li>确保Media Saber系统正常运行</li>
<li>本地网络可正常访问系统地址</li>
</ul>
<h4 id="外网同步" tabindex="-1"><a class="header-anchor" href="#外网同步"><span>外网同步</span></a></h4>
<ul>
<li>需要配置<RouteLink to="/docs/system_settings/basic_settings/">基础设置</RouteLink>中的&quot;外网访问地址&quot;</li>
<li>确保外网可以正常访问Media Saber系统</li>
<li>防火墙需要开放相应端口</li>
</ul>
<h3 id="媒体数据" tabindex="-1"><a class="header-anchor" href="#媒体数据"><span>媒体数据</span></a></h3>
<h4 id="订阅要求" tabindex="-1"><a class="header-anchor" href="#订阅要求"><span>订阅要求</span></a></h4>
<ul>
<li>需要先添加电影或电视剧订阅</li>
<li>订阅的媒体需要有准确的TMDB信息</li>
<li>发布时间信息来源于TMDB数据库</li>
</ul>
<h4 id="数据同步" tabindex="-1"><a class="header-anchor" href="#数据同步"><span>数据同步</span></a></h4>
<ul>
<li>新增订阅会自动同步到日历</li>
<li>删除订阅也会从日历中移除</li>
<li>修改订阅信息会更新日历显示</li>
</ul>
<hr>
<h2 id="🎯-使用技巧" tabindex="-1"><a class="header-anchor" href="#🎯-使用技巧"><span>🎯 使用技巧</span></a></h2>
<h3 id="规划观影" tabindex="-1"><a class="header-anchor" href="#规划观影"><span>规划观影</span></a></h3>
<ol>
<li><strong>提前规划</strong>：通过月视图查看即将发布的内容</li>
<li><strong>周度安排</strong>：使用周视图制定具体的观影计划</li>
<li><strong>当日提醒</strong>：通过日视图确认当天的新内容</li>
</ol>
<h3 id="外部同步优化" tabindex="-1"><a class="header-anchor" href="#外部同步优化"><span>外部同步优化</span></a></h3>
<ol>
<li><strong>选择合适的提醒设置</strong>：根据个人习惯选择是否开启提醒</li>
<li><strong>定期检查同步</strong>：确保外部日历能正常获取更新</li>
<li><strong>网络稳定性</strong>：保证外网访问的稳定性</li>
</ol>
<h3 id="数据管理" tabindex="-1"><a class="header-anchor" href="#数据管理"><span>数据管理</span></a></h3>
<ol>
<li><strong>及时更新订阅</strong>：保持订阅列表的准确性</li>
<li><strong>清理历史数据</strong>：定期清理不需要的订阅历史</li>
<li><strong>关注发布变更</strong>：注意媒体发布时间的变化</li>
</ol>
<hr>
<h2 id="⚠️-注意事项" tabindex="-1"><a class="header-anchor" href="#⚠️-注意事项"><span>⚠️ 注意事项</span></a></h2>
<h3 id="技术限制" tabindex="-1"><a class="header-anchor" href="#技术限制"><span>技术限制</span></a></h3>
<ol>
<li><strong>网络依赖</strong>：外部日历同步需要稳定的网络连接</li>
<li><strong>数据准确性</strong>：日历信息依赖于TMDB数据的准确性</li>
<li><strong>同步延迟</strong>：外部日历应用可能存在数据同步延迟</li>
</ol>
<h3 id="使用建议" tabindex="-1"><a class="header-anchor" href="#使用建议"><span>使用建议</span></a></h3>
<ol>
<li><strong>合理设置</strong>：根据实际需求配置外网访问</li>
<li><strong>隐私保护</strong>：注意iCal链接的安全性，避免泄露给无关人员</li>
<li><strong>定期维护</strong>：定期检查日历同步状态和数据准确性</li>
</ol>
<h3 id="兼容性" tabindex="-1"><a class="header-anchor" href="#兼容性"><span>兼容性</span></a></h3>
<ol>
<li><strong>应用支持</strong>：确认目标日历应用支持iCal格式</li>
<li><strong>版本兼容</strong>：部分旧版本日历应用可能存在兼容性问题</li>
<li><strong>功能差异</strong>：不同日历应用对iCal的支持程度可能不同</li>
</ol>
<hr>
<h2 id="相关文档" tabindex="-1"><a class="header-anchor" href="#相关文档"><span>相关文档</span></a></h2>
<ul>
<li><RouteLink to="/docs/system_settings/basic_settings/">基础设置</RouteLink> - 配置外网访问地址</li>
<li><RouteLink to="/docs/subscription_management/movie_subscription/">电影订阅</RouteLink> - 了解电影订阅管理</li>
<li><RouteLink to="/docs/subscription_management/tv_subscription/">电视剧订阅</RouteLink> - 了解电视剧订阅管理</li>
<li><RouteLink to="/docs/subscription_management/">订阅管理概览</RouteLink> - 订阅功能总体介绍</li>
</ul>
<hr>
</div></template>


