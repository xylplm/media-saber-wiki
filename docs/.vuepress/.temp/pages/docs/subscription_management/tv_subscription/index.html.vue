<template><div><h1 id="📺-电视剧订阅" tabindex="-1"><a class="header-anchor" href="#📺-电视剧订阅"><span>📺 电视剧订阅</span></a></h1>
<blockquote>
<p>电视剧订阅功能允许用户通过RSS订阅和主动搜索自动获取感兴趣的电视剧资源。支持按季按集订阅、智能过滤排序和自动更新总集数等功能，实现全自动化的电视剧跟更。</p>
</blockquote>
<hr>
<h2 id="📋-订阅列表" tabindex="-1"><a class="header-anchor" href="#📋-订阅列表"><span>📋 订阅列表</span></a></h2>
<p>电视剧订阅页面展示了所有已添加的电视剧订阅，以卡片形式展示每个订阅的详细信息。</p>
<h3 id="🎯-功能操作" tabindex="-1"><a class="header-anchor" href="#🎯-功能操作"><span>🎯 功能操作</span></a></h3>
<p>页面顶部提供以下操作按钮：</p>
<ul>
<li>➕ <strong>新增订阅</strong>：添加新的电视剧订阅</li>
<li>🔄 <strong>刷新全部订阅</strong>：立即刷新所有电视剧订阅，触发搜索</li>
<li>⚙️ <strong>默认设置</strong>：设置电视剧订阅的默认配置参数</li>
<li>🔄 <strong>刷新列表</strong>：重新加载订阅列表数据</li>
<li>📚 <strong>订阅历史</strong>：查看已完成的订阅历史记录</li>
</ul>
<h3 id="📊-订阅状态显示" tabindex="-1"><a class="header-anchor" href="#📊-订阅状态显示"><span>📊 订阅状态显示</span></a></h3>
<p>每个订阅卡片上会显示以下信息：</p>
<ul>
<li>🎬 <strong>电视剧海报</strong>：显示电视剧的背景图或海报图片</li>
<li>📝 <strong>标题信息</strong>：显示电视剧名称(年份) 第X季的格式</li>
<li>🔵 <strong>订阅状态指示器</strong>：
<ul>
<li><strong>正在订阅</strong>（绿色点）：订阅已启用，正在等待新资源</li>
<li><strong>搜索中</strong>（蓝色点）：系统正在搜索该订阅相关的资源</li>
<li><strong>已完成订阅</strong>（红色点）：订阅的目标已达成，所有集数已下载完成</li>
</ul>
</li>
</ul>
<h3 id="📈-进度显示" tabindex="-1"><a class="header-anchor" href="#📈-进度显示"><span>📈 进度显示</span></a></h3>
<p>电视剧订阅会显示详细的进度信息：</p>
<ul>
<li><strong>指定集数模式</strong>：显示&quot;正在订阅 (指定集数/总集数)&quot;</li>
<li><strong>开始集数模式</strong>：显示&quot;正在订阅 (开始集数/总集数)&quot;</li>
<li><strong>进度跟踪</strong>：实时显示已下载集数和剩余集数</li>
</ul>
<h3 id="📋-订阅配置标签" tabindex="-1"><a class="header-anchor" href="#📋-订阅配置标签"><span>📋 订阅配置标签</span></a></h3>
<p>每个订阅卡片会以彩色标签形式显示配置信息：</p>
<h4 id="🔍-搜索条件标签" tabindex="-1"><a class="header-anchor" href="#🔍-搜索条件标签"><span>🔍 搜索条件标签</span></a></h4>
<ul>
<li><strong>包含关键字</strong>（绿色标签）：必须包含的关键字</li>
<li><strong>排除关键字</strong>（红色标签）：必须排除的关键字</li>
<li><strong>做种人数</strong>（黄色标签）：最少做种人数要求</li>
</ul>
<h4 id="⚙️-下载配置标签" tabindex="-1"><a class="header-anchor" href="#⚙️-下载配置标签"><span>⚙️ 下载配置标签</span></a></h4>
<ul>
<li><strong>过滤规则</strong>（蓝色标签）：使用的过滤规则组名称</li>
<li><strong>下载器</strong>（蓝色标签）：指定的下载器名称</li>
<li><strong>下载参数</strong>（蓝色标签）：使用的下载参数配置</li>
<li><strong>保存路径</strong>（蓝色标签）：资源保存目录</li>
</ul>
<h4 id="🌐-站点配置标签" tabindex="-1"><a class="header-anchor" href="#🌐-站点配置标签"><span>🌐 站点配置标签</span></a></h4>
<ul>
<li><strong>订阅站点</strong>（红色标签）：通过RSS订阅的站点列表</li>
<li><strong>搜索站点</strong>（黄色标签）：主动搜索使用的站点列表</li>
</ul>
<hr>
<h2 id="➕-新增电视剧订阅" tabindex="-1"><a class="header-anchor" href="#➕-新增电视剧订阅"><span>➕ 新增电视剧订阅</span></a></h2>
<p>新增电视剧订阅支持更精细的集数控制和自动更新功能，配置完成后点击保存即可开始订阅。</p>
<h3 id="📝-基本信息配置" tabindex="-1"><a class="header-anchor" href="#📝-基本信息配置"><span>📝 基本信息配置</span></a></h3>
<h4 id="标题" tabindex="-1"><a class="header-anchor" href="#标题"><span>标题</span></a></h4>
<p><strong>说明：</strong> 电视剧的标题名称，需要与TMDB中的名称保持一致</p>
<p><strong>要求：</strong> 必填项</p>
<p><strong>操作建议：</strong></p>
<ul>
<li>填写TMDB中已维护的准确名称，确保媒体信息识别正确</li>
<li>可以点击搜索按钮查询TMDB获取准确信息</li>
<li>标题不准确会导致无法正确识别媒体信息</li>
</ul>
<h4 id="年份" tabindex="-1"><a class="header-anchor" href="#年份"><span>年份</span></a></h4>
<p><strong>说明：</strong> 电视剧的首播年份，需要与TMDB中的年份一致</p>
<p><strong>要求：</strong> 必填项</p>
<p><strong>格式：</strong> 四位数字年份，如2023</p>
<h4 id="自定义搜索词" tabindex="-1"><a class="header-anchor" href="#自定义搜索词"><span>自定义搜索词</span></a></h4>
<p><strong>说明：</strong> 当TMDB中的名称与站点实际发布的资源名称不一致时使用</p>
<p><strong>要求：</strong> 可选项</p>
<p><strong>使用场景：</strong></p>
<ul>
<li>TMDB标题与站点发布名称存在差异</li>
<li>需要使用特定关键字搜索资源</li>
<li>提高搜索匹配准确率</li>
</ul>
<h3 id="📺-季集配置" tabindex="-1"><a class="header-anchor" href="#📺-季集配置"><span>📺 季集配置</span></a></h3>
<h4 id="季" tabindex="-1"><a class="header-anchor" href="#季"><span>季</span></a></h4>
<p><strong>说明：</strong> 指定要订阅的季数</p>
<p><strong>选项：</strong> 从可用的季数列表中选择</p>
<p><strong>格式：</strong> 第1季、第2季等</p>
<h4 id="总集数" tabindex="-1"><a class="header-anchor" href="#总集数"><span>总集数</span></a></h4>
<p><strong>说明：</strong> 该季的总集数</p>
<p><strong>要求：</strong> 数字类型</p>
<p><strong>操作建议：</strong></p>
<ul>
<li>可以先填写已知的集数，后续通过自动更新功能更新</li>
<li>如果不确定总集数，建议开启自动更新总集数功能</li>
</ul>
<h4 id="开始订阅集数" tabindex="-1"><a class="header-anchor" href="#开始订阅集数"><span>开始订阅集数</span></a></h4>
<p><strong>说明：</strong> 从第几集开始订阅</p>
<p><strong>默认值：</strong> 1（从第一集开始）</p>
<p><strong>使用场景：</strong></p>
<ul>
<li>只订阅后续更新的集数</li>
<li>跳过已经下载的前面几集</li>
<li>从中间某集开始追剧</li>
</ul>
<h4 id="指定订阅集数" tabindex="-1"><a class="header-anchor" href="#指定订阅集数"><span>指定订阅集数</span></a></h4>
<p><strong>说明：</strong> 精确指定要订阅的集数列表</p>
<p><strong>格式：</strong> 多个集数用英文逗号分隔，如：1,3,5,7-10</p>
<p><strong>优先级：</strong> 比&quot;开始订阅集数&quot;优先级更高，两者只能选其一</p>
<p><strong>使用场景：</strong></p>
<ul>
<li>只订阅特定的几集</li>
<li>跳过某些集数的订阅</li>
<li>补齐缺失的集数</li>
</ul>
<p><strong>示例：</strong></p>
<ul>
<li><code v-pre>1,2,3</code>：只订阅第1、2、3集</li>
<li><code v-pre>5,7,9</code>：只订阅第5、7、9集</li>
<li><code v-pre>1-5,10</code>：订阅第1到5集和第10集</li>
</ul>
<h4 id="自动更新总集数" tabindex="-1"><a class="header-anchor" href="#自动更新总集数"><span>自动更新总集数</span></a></h4>
<p><strong>说明：</strong> 定时自动更新电视剧订阅的总集数</p>
<p><strong>默认值：</strong> 关闭</p>
<p><strong>工作机制：</strong></p>
<ul>
<li>系统会定期检查TMDB数据库中的总集数信息</li>
<li>发现集数增加时自动更新订阅配置</li>
<li>确保不会错过新更新的集数</li>
</ul>
<p><strong>适用场景：</strong></p>
<ul>
<li>正在播出的剧集，集数可能随时更新</li>
<li>不确定确切总集数的情况</li>
<li>需要自动跟踪剧集更新</li>
</ul>
<h3 id="⚙️-智能配置" tabindex="-1"><a class="header-anchor" href="#⚙️-智能配置"><span>⚙️ 智能配置</span></a></h3>
<h4 id="过滤规则" tabindex="-1"><a class="header-anchor" href="#过滤规则"><span>过滤规则</span></a></h4>
<p><strong>说明：</strong> 指定搜索资源时使用的过滤规则组</p>
<p><strong>选项：</strong> 系统中已创建的过滤规则组列表</p>
<p><strong>默认行为：</strong> 不选择则使用系统默认过滤规则</p>
<p><strong>操作建议：</strong> 可在 <RouteLink to="/docs/system_settings/filter_rules/">过滤规则</RouteLink> 页面创建专用规则组</p>
<h4 id="排序规则" tabindex="-1"><a class="header-anchor" href="#排序规则"><span>排序规则</span></a></h4>
<p><strong>说明：</strong> 指定搜索资源时使用的排序规则</p>
<p><strong>选项：</strong> 系统中已创建的排序规则列表</p>
<p><strong>默认行为：</strong> 不选择则使用系统默认排序规则</p>
<p><strong>特殊优化：</strong> 电视剧排序通常会考虑季集顺序权重，确保按集数顺序下载</p>
<p><strong>操作建议：</strong> 可在 <RouteLink to="/docs/system_settings/torrent_sort/">种子排序</RouteLink> 页面创建电视剧专用排序规则</p>
<h3 id="📥-下载配置" tabindex="-1"><a class="header-anchor" href="#📥-下载配置"><span>📥 下载配置</span></a></h3>
<h4 id="下载器" tabindex="-1"><a class="header-anchor" href="#下载器"><span>下载器</span></a></h4>
<p><strong>说明：</strong> 指定该订阅资源下载时使用的下载器</p>
<p><strong>选项：</strong> 系统中已配置的下载器列表</p>
<p><strong>默认行为：</strong> 不选择则使用系统默认下载器</p>
<h4 id="下载参数" tabindex="-1"><a class="header-anchor" href="#下载参数"><span>下载参数</span></a></h4>
<p><strong>说明：</strong> 指定该订阅资源下载时使用的下载参数</p>
<p><strong>选项：</strong> 系统中已配置的下载参数列表</p>
<p><strong>默认行为：</strong> 不选择则使用默认下载参数</p>
<h4 id="保存路径" tabindex="-1"><a class="header-anchor" href="#保存路径"><span>保存路径</span></a></h4>
<p><strong>说明：</strong> 指定资源的下载保存路径</p>
<p><strong>选项：</strong> 系统中已配置的保存路径列表</p>
<p><strong>默认行为：</strong> 不选择则根据资源类型自动匹配目录管理中的设置</p>
<h3 id="🌐-站点配置" tabindex="-1"><a class="header-anchor" href="#🌐-站点配置"><span>🌐 站点配置</span></a></h3>
<h4 id="订阅站点" tabindex="-1"><a class="header-anchor" href="#订阅站点"><span>订阅站点</span></a></h4>
<p><strong>说明：</strong> 选择通过RSS订阅方式获取资源的站点</p>
<p><strong>显示条件：</strong> 站点维护中选中了&quot;订阅&quot;用途的站点</p>
<p><strong>默认行为：</strong> 不选择则默认使用所有订阅站点</p>
<h4 id="搜索站点" tabindex="-1"><a class="header-anchor" href="#搜索站点"><span>搜索站点</span></a></h4>
<p><strong>说明：</strong> 选择通过主动搜索方式获取资源的站点</p>
<p><strong>显示条件：</strong> 站点维护中选中了&quot;搜索&quot;用途的站点</p>
<p><strong>默认行为：</strong> 不选择则默认使用所有搜索站点</p>
<p>💡 <strong>推荐添加方式</strong></p>
<p>推荐使用搜索功能先搜索电视剧，然后点击搜索结果中的订阅按钮添加订阅：</p>
<ol>
<li>在搜索页面输入电视剧名称进行搜索</li>
<li>在搜索结果中找到目标电视剧</li>
<li>点击电视剧卡片上的订阅按钮</li>
<li>系统会自动填充标题、年份、季数等基本信息</li>
<li>根据需要调整集数配置和其他参数</li>
<li>保存完成订阅添加</li>
</ol>
<hr>
<h2 id="🔧-订阅编辑与管理" tabindex="-1"><a class="header-anchor" href="#🔧-订阅编辑与管理"><span>🔧 订阅编辑与管理</span></a></h2>
<h3 id="编辑订阅" tabindex="-1"><a class="header-anchor" href="#编辑订阅"><span>编辑订阅</span></a></h3>
<p>点击订阅卡片可以打开订阅编辑窗口，支持修改所有配置参数：</p>
<ul>
<li><strong>基本信息</strong>：标题、年份、自定义搜索词</li>
<li><strong>季集配置</strong>：季数、总集数、开始集数、指定集数</li>
<li><strong>自动更新</strong>：自动更新总集数开关</li>
<li><strong>智能配置</strong>：过滤规则、排序规则</li>
<li><strong>下载设置</strong>：下载器、下载参数、保存路径</li>
<li><strong>站点配置</strong>：订阅站点、搜索站点</li>
</ul>
<h3 id="订阅操作" tabindex="-1"><a class="header-anchor" href="#订阅操作"><span>订阅操作</span></a></h3>
<h4 id="立即搜索" tabindex="-1"><a class="header-anchor" href="#立即搜索"><span>立即搜索</span></a></h4>
<p>在编辑页面可以点击刷新按钮立即搜索所有搜索站点的资源并添加下载。</p>
<h4 id="取消订阅" tabindex="-1"><a class="header-anchor" href="#取消订阅"><span>取消订阅</span></a></h4>
<p>在编辑页面点击&quot;取消订阅&quot;按钮可以删除该订阅，已下载的资源不会被删除。</p>
<h4 id="进度调整" tabindex="-1"><a class="header-anchor" href="#进度调整"><span>进度调整</span></a></h4>
<p>可以随时调整开始集数或指定集数，适应订阅进度的变化。</p>
<hr>
<h2 id="⚙️-默认设置" tabindex="-1"><a class="header-anchor" href="#⚙️-默认设置"><span>⚙️ 默认设置</span></a></h2>
<p>电视剧订阅的默认设置包含电影订阅的所有配置项，还新增了电视剧特有的配置：</p>
<h3 id="电视剧专有配置" tabindex="-1"><a class="header-anchor" href="#电视剧专有配置"><span>电视剧专有配置</span></a></h3>
<h4 id="自动更新总集数-1" tabindex="-1"><a class="header-anchor" href="#自动更新总集数-1"><span>自动更新总集数</span></a></h4>
<p><strong>说明：</strong> 设置新增电视剧订阅时是否默认开启自动更新总集数功能</p>
<p><strong>默认值：</strong> 建议开启</p>
<p><strong>适用场景：</strong> 自动添加订阅时默认开启，确保不错过新集数</p>
<h3 id="其他配置项" tabindex="-1"><a class="header-anchor" href="#其他配置项"><span>其他配置项</span></a></h3>
<ul>
<li><strong>过滤规则</strong>：默认使用的过滤规则组</li>
<li><strong>排序规则</strong>：默认使用的排序规则（建议配置季集顺序权重）</li>
<li><strong>下载器</strong>：默认使用的下载器</li>
<li><strong>下载参数</strong>：默认使用的下载参数</li>
<li><strong>保存路径</strong>：默认保存目录</li>
<li><strong>订阅站点</strong>：默认的RSS订阅站点</li>
<li><strong>搜索站点</strong>：默认的主动搜索站点</li>
</ul>
<hr>
<h2 id="📚-订阅历史" tabindex="-1"><a class="header-anchor" href="#📚-订阅历史"><span>📚 订阅历史</span></a></h2>
<p>电视剧订阅历史页面显示所有已完成的电视剧订阅记录，包括：</p>
<h3 id="历史信息显示" tabindex="-1"><a class="header-anchor" href="#历史信息显示"><span>历史信息显示</span></a></h3>
<ul>
<li><strong>完成时间</strong>：订阅完成的时间</li>
<li><strong>季集信息</strong>：完成的季数和集数范围</li>
<li><strong>下载统计</strong>：实际下载的集数和总集数</li>
</ul>
<h3 id="历史记录管理" tabindex="-1"><a class="header-anchor" href="#历史记录管理"><span>历史记录管理</span></a></h3>
<ul>
<li><strong>查看详情</strong>：查看已完成订阅的详细配置</li>
<li><strong>删除记录</strong>：删除历史记录（允许重新添加相同订阅）</li>
<li><strong>重新订阅</strong>：基于历史记录重新创建订阅（可调整集数范围）</li>
</ul>
<hr>
<h2 id="🔍-高级功能" tabindex="-1"><a class="header-anchor" href="#🔍-高级功能"><span>🔍 高级功能</span></a></h2>
<h3 id="集数精确控制" tabindex="-1"><a class="header-anchor" href="#集数精确控制"><span>集数精确控制</span></a></h3>
<p>电视剧订阅提供了灵活的集数控制机制：</p>
<h4 id="连续订阅模式" tabindex="-1"><a class="header-anchor" href="#连续订阅模式"><span>连续订阅模式</span></a></h4>
<p>使用&quot;开始订阅集数&quot;设置，从指定集数开始连续订阅后续所有集数。</p>
<h4 id="精确订阅模式" tabindex="-1"><a class="header-anchor" href="#精确订阅模式"><span>精确订阅模式</span></a></h4>
<p>使用&quot;指定订阅集数&quot;设置，精确控制要订阅的集数列表，支持范围表达式。</p>
<h4 id="补齐模式" tabindex="-1"><a class="header-anchor" href="#补齐模式"><span>补齐模式</span></a></h4>
<p>通过指定集数功能，可以精确补齐缺失的特定集数。</p>
<h3 id="自动更新机制" tabindex="-1"><a class="header-anchor" href="#自动更新机制"><span>自动更新机制</span></a></h3>
<h4 id="总集数自动更新" tabindex="-1"><a class="header-anchor" href="#总集数自动更新"><span>总集数自动更新</span></a></h4>
<ul>
<li>定期检查TMDB数据库中的最新集数信息</li>
<li>自动更新订阅配置中的总集数</li>
<li>确保能够订阅到新更新的集数</li>
</ul>
<h4 id="进度自动跟踪" tabindex="-1"><a class="header-anchor" href="#进度自动跟踪"><span>进度自动跟踪</span></a></h4>
<ul>
<li>实时跟踪已下载的集数</li>
<li>自动更新订阅进度显示</li>
<li>达到总集数时自动完成订阅</li>
</ul>
<h3 id="智能排序优化" tabindex="-1"><a class="header-anchor" href="#智能排序优化"><span>智能排序优化</span></a></h3>
<p>电视剧订阅在排序时会特别考虑：</p>
<ul>
<li><strong>季集顺序权重</strong>：确保按正确的集数顺序下载</li>
<li><strong>发布时间权重</strong>：优先下载最新发布的集数</li>
<li><strong>质量权重</strong>：在保证顺序的前提下选择最佳质量</li>
</ul>
<hr>
<h2 id="💡-使用技巧" tabindex="-1"><a class="header-anchor" href="#💡-使用技巧"><span>💡 使用技巧</span></a></h2>
<h3 id="订阅策略建议" tabindex="-1"><a class="header-anchor" href="#订阅策略建议"><span>订阅策略建议</span></a></h3>
<h4 id="正在更新的剧集" tabindex="-1"><a class="header-anchor" href="#正在更新的剧集"><span>正在更新的剧集</span></a></h4>
<ul>
<li>开启自动更新总集数</li>
<li>设置合适的开始集数</li>
<li>使用RSS订阅获得最快更新</li>
</ul>
<h4 id="已完结的剧集" tabindex="-1"><a class="header-anchor" href="#已完结的剧集"><span>已完结的剧集</span></a></h4>
<ul>
<li>精确设置总集数</li>
<li>使用指定集数补齐缺失内容</li>
<li>关闭自动更新总集数</li>
</ul>
<h4 id="特殊需求场景" tabindex="-1"><a class="header-anchor" href="#特殊需求场景"><span>特殊需求场景</span></a></h4>
<ul>
<li>只要特定集数：使用指定订阅集数功能</li>
<li>跳过特定集数：使用排除关键字或过滤规则</li>
<li>高质量版本：配置专门的过滤和排序规则</li>
</ul>
<h3 id="性能优化建议" tabindex="-1"><a class="header-anchor" href="#性能优化建议"><span>性能优化建议</span></a></h3>
<ol>
<li><strong>合理设置搜索站点</strong>：避免选择过多站点导致搜索压力过大</li>
<li><strong>使用过滤规则</strong>：通过过滤规则减少无效资源的处理</li>
<li><strong>配置排序权重</strong>：合理配置季集顺序权重确保正确下载顺序</li>
<li><strong>定期清理历史</strong>：定期清理不需要的订阅历史记录</li>
</ol>
<hr>
<h2 id="注意事项" tabindex="-1"><a class="header-anchor" href="#注意事项"><span>注意事项</span></a></h2>
<ol>
<li><strong>集数准确性</strong>：确保总集数设置准确，避免订阅无法正常完成</li>
<li><strong>指定集数格式</strong>：使用正确的格式指定集数，支持范围表达式</li>
<li><strong>自动更新设置</strong>：正在播出的剧集建议开启自动更新总集数</li>
<li><strong>存储空间管理</strong>：电视剧通常占用较大存储空间，注意空间监控</li>
<li><strong>网络流量控制</strong>：合理设置搜索频率，避免过度消耗网络流量</li>
</ol>
<hr>
<h2 id="相关文档" tabindex="-1"><a class="header-anchor" href="#相关文档"><span>相关文档</span></a></h2>
<ul>
<li><RouteLink to="/docs/system_settings/filter_rules/">过滤规则</RouteLink> - 配置资源过滤条件</li>
<li><RouteLink to="/docs/system_settings/torrent_sort/">种子排序</RouteLink> - 配置资源排序规则，注意季集顺序权重</li>
<li><RouteLink to="/docs/system_settings/torrent_match/">种子匹配</RouteLink> - 配置精确匹配条件</li>
<li><RouteLink to="/docs/system_settings/basic_settings/">基础设置</RouteLink> - 配置订阅基础参数</li>
<li><RouteLink to="/docs/sites/site/">站点管理</RouteLink> - 管理订阅和搜索站点</li>
<li><RouteLink to="/docs/download_management/">下载管理</RouteLink> - 配置下载器和参数</li>
</ul>
<hr>
<h2 id="📋-订阅列表-1" tabindex="-1"><a class="header-anchor" href="#📋-订阅列表-1"><span>📋 订阅列表</span></a></h2>
<p>电视剧订阅页面展示了所有已添加的电视剧订阅，以卡片形式展示每个订阅的详细信息。</p>
<h3 id="🎯-功能操作-1" tabindex="-1"><a class="header-anchor" href="#🎯-功能操作-1"><span>🎯 功能操作</span></a></h3>
<ul>
<li>➕ <strong>新增订阅</strong>：添加新的电视剧订阅</li>
<li>🔄 <strong>刷新全部订阅</strong>：立即刷新所有电视剧订阅，触发搜索</li>
<li>⚙️ <strong>默认设置</strong>：设置电视剧订阅的默认配置参数</li>
<li>🔄 <strong>刷新列表</strong>：重新加载订阅列表数据</li>
<li>📚 <strong>订阅历史</strong>：查看已完成的订阅历史记录</li>
</ul>
<h3 id="📊-订阅状态显示-1" tabindex="-1"><a class="header-anchor" href="#📊-订阅状态显示-1"><span>📊 订阅状态显示</span></a></h3>
<p>每个订阅卡片上会显示以下信息：</p>
<ul>
<li>🎥 <strong>电视剧海报</strong>：显示电视剧的海报图片</li>
<li>📝 <strong>电视剧名称、年份和季数</strong>：显示电视剧标题、发布年份和季数</li>
<li>🟢 <strong>订阅状态</strong>：显示当前订阅状态和进度（已订阅集数/总集数）</li>
<li>🏷️ <strong>订阅参数</strong>：
<ul>
<li>媒体介质、清晰度、制作组、附加信息</li>
<li>包含和排除关键字</li>
<li>做种人数要求</li>
<li>过滤规则、下载器、下载参数、保存路径</li>
<li>订阅站点和搜索站点</li>
</ul>
</li>
</ul>
<hr>
<h2 id="➕-新增电视剧订阅-1" tabindex="-1"><a class="header-anchor" href="#➕-新增电视剧订阅-1"><span>➕ 新增电视剧订阅</span></a></h2>
<p>新增电视剧订阅需要填写以下内容，填写完成后点击添加即可：</p>
<h3 id="📝-基本信息字段" tabindex="-1"><a class="header-anchor" href="#📝-基本信息字段"><span>📝 基本信息字段</span></a></h3>
<ul>
<li><strong>标题</strong>：填写 themoviedb 中已维护的名称，否则无法识别媒体信息。</li>
<li><strong>年份</strong>：填写 themoviedb 中名称对应的年份。</li>
<li><strong>自定义搜索词</strong>：当 themoviedb 中的名称与站点实际发布的资源名称不一致时，可通过<code v-pre>自定义搜索词</code>指定搜索站点资源时使用的关键字，避免无法搜索到资源。</li>
</ul>
<h3 id="🎬-电视剧特有字段" tabindex="-1"><a class="header-anchor" href="#🎬-电视剧特有字段"><span>🎬 电视剧特有字段</span></a></h3>
<ul>
<li><strong>季</strong>：选择要订阅的季数，默认为第1季</li>
<li><strong>总集数</strong>：设置该季的总集数</li>
<li><strong>开始订阅集数</strong>：设置从哪一集开始订阅</li>
<li><strong>指定订阅集数</strong>：指定要订阅的集数，多个以英文逗号隔开，比开始订阅集数优先级高且只能二选一</li>
<li><strong>自动更新总集数</strong>：定时对电视剧订阅的总集数进行更新</li>
<li><strong>洗版</strong>：开启洗版后不会检查本地是否已存在，满足订阅条件即会下载；除非匹配了对应的过滤规则中最高优先级的那条规则否则不会删除订阅（未明确过滤规则时使用默认规则），同一优先级的资源只下载一次；多个资源下载后如命名一致，则只会保留文件体积较大的，如需都保留则需要在文件重命名规则中增加相关要素以做区分。</li>
</ul>
<h3 id="🎬-媒体筛选字段" tabindex="-1"><a class="header-anchor" href="#🎬-媒体筛选字段"><span>🎬 媒体筛选字段</span></a></h3>
<ul>
<li><strong>媒体介质</strong>：可选媒体介质类型，支持多选</li>
<li><strong>清晰度</strong>：可选分辨率，支持多选</li>
<li><strong>制作组</strong>：填写制作组/字幕组，支持多选</li>
<li><strong>附加规则</strong>：其他附加筛选条件，支持多选</li>
</ul>
<h3 id="⚙️-下载设置字段" tabindex="-1"><a class="header-anchor" href="#⚙️-下载设置字段"><span>⚙️ 下载设置字段</span></a></h3>
<ul>
<li><strong>过滤规则</strong>：指定搜索站点资源时使用的<RouteLink to="/docs/system_settings/filter_rules/">过滤规则组</RouteLink>，规则组内的所有规则将用于对搜索出的每一个资源的标题和副标题进行匹配，匹配命中的<code v-pre>过滤规则优先级</code>将做为当前资源的优先级，并在下载时进行排序择优；如过滤规则组内的所有规则都不匹配，则该资源会被过滤。</li>
<li><strong>下载器</strong>：指定该订阅的资源下载时使用的<RouteLink to="/docs/download_management/downloader_management/">下载器</RouteLink></li>
<li><strong>下载参数</strong>：指定该订阅的资源下载时使用的<RouteLink to="/docs/download_management/download_parameters/">下载参数</RouteLink></li>
<li><strong>做种人数</strong>：设置资源所需的最小做种人数</li>
<li><strong>保存路径</strong>：如为<code v-pre>自动</code>则会根据资源的类型、二级分类匹配<RouteLink to="/docs/directory_management/directory_management/">目录管理</RouteLink>中设置的下载目录；可手工输入保存路径，此时如为 QB 下载器会自关闭种子自动管理。</li>
</ul>
<h3 id="🔤-关键字过滤字段" tabindex="-1"><a class="header-anchor" href="#🔤-关键字过滤字段"><span>🔤 关键字过滤字段</span></a></h3>
<ul>
<li><strong>包含</strong>：设置关键字或者正则表达式，对站点资源的标题和副标题进行包含匹配。</li>
<li><strong>排除</strong>：设置关键字或者正则表达式，对站点资源的标题和副标题进行排除匹配。</li>
</ul>
<h3 id="🌐-站点设置字段" tabindex="-1"><a class="header-anchor" href="#🌐-站点设置字段"><span>🌐 站点设置字段</span></a></h3>
<ul>
<li><strong>订阅站点</strong>：在<RouteLink to="/docs/sites/site/">站点维护</RouteLink>中选中了<code v-pre>订阅</code>用途的站点将在此处显示，选中则代表当前订阅会使用该站点的 RSS 进行匹配；<strong>不选默认全选</strong>。</li>
<li><strong>搜索站点</strong>：在<RouteLink to="/docs/sites/site/">站点维护</RouteLink>中选中的<code v-pre>搜索</code>用途的站点会在此处显示，选中则代表当前订阅会使用这些站点进行资源搜索，资源搜索有三种触发方式：1. 订阅详情中的刷新按钮、2. <RouteLink to="/docs/setting/base/#%E8%AE%A2%E9%98%85%E6%90%9C%E7%B4%A2%E5%91%A8%E6%9C%9F">基础设置</RouteLink>中维护的<code v-pre>订阅搜索周期</code>时间到达时自动搜索、3. 订阅添加后自动执行一次搜索。<strong>不选默认全选</strong>。</li>
</ul>
<hr>
<h2 id="🔧-订阅详情" tabindex="-1"><a class="header-anchor" href="#🔧-订阅详情"><span>🔧 订阅详情</span></a></h2>
<p>点击订阅的卡片可以对订阅进行编辑、取消、搜索、刷新等操作。其中点击刷新按钮，将立即搜索一次所有搜索站点的资源并添加下载。</p>
<hr>
<h2 id="⚙️-默认设置-1" tabindex="-1"><a class="header-anchor" href="#⚙️-默认设置-1"><span>⚙️ 默认设置</span></a></h2>
<p>预先设置好默认的电视剧订阅设置，在自动添加订阅的场景默认使用。</p>
<hr>
<h2 id="📚-订阅历史-1" tabindex="-1"><a class="header-anchor" href="#📚-订阅历史-1"><span>📚 订阅历史</span></a></h2>
<p>可查看已完成的电视剧订阅历史，可以对历史进行删除（避免无法重复添加订阅）或重新订阅。</p>
</div></template>


