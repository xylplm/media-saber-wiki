<template><div><h1 id="🎬-电影订阅" tabindex="-1"><a class="header-anchor" href="#🎬-电影订阅"><span>🎬 电影订阅</span></a></h1>
<blockquote>
<p>电影订阅功能允许用户通过RSS订阅和主动搜索自动获取感兴趣的电影资源。支持智能过滤、排序规则和多站点订阅，实现全自动化的电影获取。</p>
</blockquote>
<hr>
<h2 id="📋-订阅列表" tabindex="-1"><a class="header-anchor" href="#📋-订阅列表"><span>📋 订阅列表</span></a></h2>
<p>电影订阅页面展示了所有已添加的电影订阅，以卡片形式展示每个订阅的详细信息。</p>
<h3 id="🎯-功能操作" tabindex="-1"><a class="header-anchor" href="#🎯-功能操作"><span>🎯 功能操作</span></a></h3>
<ul>
<li>➕ <strong>新增订阅</strong>：添加新的电影订阅</li>
<li>🔄 <strong>刷新全部订阅</strong>：立即刷新所有电影订阅，触发搜索</li>
<li>⚙️ <strong>默认设置</strong>：设置电影订阅的默认配置参数</li>
<li>🔄 <strong>刷新列表</strong>：重新加载订阅列表数据</li>
<li>📚 <strong>订阅历史</strong>：查看已完成的订阅历史记录</li>
</ul>
<h3 id="📊-订阅状态显示" tabindex="-1"><a class="header-anchor" href="#📊-订阅状态显示"><span>📊 订阅状态显示</span></a></h3>
<p>每个订阅卡片上会显示以下信息：</p>
<ul>
<li>🎥 <strong>电影海报</strong>：显示电影的背景图或海报图片</li>
<li>📝 <strong>电影名称和年份</strong>：显示电影标题和发布年份</li>
<li>� <strong>订阅状态指示器</strong>：
<ul>
<li><strong>正在订阅</strong>（绿色点）：订阅已启用，正在等待新资源</li>
<li><strong>搜索中</strong>（蓝色点）：系统正在搜索该订阅相关的资源</li>
<li><strong>已完成订阅</strong>（红色点）：订阅的目标已达成，电影已下载完成</li>
</ul>
</li>
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
<h2 id="➕-新增电影订阅" tabindex="-1"><a class="header-anchor" href="#➕-新增电影订阅"><span>➕ 新增电影订阅</span></a></h2>
<p>新增电影订阅支持通过搜索添加或手动创建，配置完成后点击保存即可开始订阅。</p>
<h3 id="📝-基本信息配置" tabindex="-1"><a class="header-anchor" href="#📝-基本信息配置"><span>📝 基本信息配置</span></a></h3>
<h4 id="标题" tabindex="-1"><a class="header-anchor" href="#标题"><span>标题</span></a></h4>
<p><strong>说明：</strong> 电影的标题名称，需要与TMDB中的名称保持一致</p>
<p><strong>要求：</strong> 必填项</p>
<p><strong>操作建议：</strong></p>
<ul>
<li>填写TMDB中已维护的准确名称，确保媒体信息识别正确</li>
<li>可以点击搜索按钮查询TMDB获取准确信息</li>
<li>标题不准确会导致无法正确识别媒体信息</li>
</ul>
<h4 id="年份" tabindex="-1"><a class="header-anchor" href="#年份"><span>年份</span></a></h4>
<p><strong>说明：</strong> 电影的发布年份，需要与TMDB中的年份一致</p>
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
<p><strong>示例：</strong> TMDB中为&quot;流浪地球2&quot;，站点发布为&quot;The Wandering Earth II&quot;</p>
<h3 id="⚙️-智能配置" tabindex="-1"><a class="header-anchor" href="#⚙️-智能配置"><span>⚙️ 智能配置</span></a></h3>
<h4 id="过滤规则" tabindex="-1"><a class="header-anchor" href="#过滤规则"><span>过滤规则</span></a></h4>
<p><strong>说明：</strong> 指定搜索资源时使用的过滤规则组</p>
<p><strong>选项：</strong> 系统中已创建的过滤规则组列表</p>
<p><strong>默认行为：</strong> 不选择则使用系统默认过滤规则</p>
<p><strong>作用机制：</strong></p>
<ul>
<li>规则组内的所有规则用于匹配搜索出的每个资源</li>
<li>匹配命中的规则优先级将作为资源的优先级</li>
<li>所有规则都不匹配的资源会被过滤掉</li>
<li>根据优先级进行排序择优下载</li>
</ul>
<p><strong>操作建议：</strong> 可在 <RouteLink to="/docs/system_settings/filter_rules/">过滤规则</RouteLink> 页面创建专用规则组</p>
<h4 id="排序规则" tabindex="-1"><a class="header-anchor" href="#排序规则"><span>排序规则</span></a></h4>
<p><strong>说明：</strong> 指定搜索资源时使用的排序规则</p>
<p><strong>选项：</strong> 系统中已创建的排序规则列表</p>
<p><strong>默认行为：</strong> 不选择则使用系统默认排序规则</p>
<p><strong>作用机制：</strong></p>
<ul>
<li>根据配置的权重对资源进行综合评分</li>
<li>评分越高的资源排序越靠前</li>
<li>优先下载排序靠前的高质量资源</li>
</ul>
<p><strong>操作建议：</strong> 可在 <RouteLink to="/docs/system_settings/torrent_sort/">种子排序</RouteLink> 页面创建个性化排序规则</p>
<h3 id="📥-下载配置" tabindex="-1"><a class="header-anchor" href="#📥-下载配置"><span>📥 下载配置</span></a></h3>
<h4 id="下载器" tabindex="-1"><a class="header-anchor" href="#下载器"><span>下载器</span></a></h4>
<p><strong>说明：</strong> 指定该订阅资源下载时使用的下载器</p>
<p><strong>选项：</strong> 系统中已配置的下载器列表</p>
<p><strong>默认行为：</strong> 不选择则使用系统默认下载器</p>
<p><strong>操作建议：</strong> 可根据不同类型资源选择不同下载器</p>
<h4 id="下载参数" tabindex="-1"><a class="header-anchor" href="#下载参数"><span>下载参数</span></a></h4>
<p><strong>说明：</strong> 指定该订阅资源下载时使用的下载参数</p>
<p><strong>选项：</strong> 系统中已配置的下载参数列表</p>
<p><strong>默认行为：</strong> 不选择则使用默认下载参数</p>
<p><strong>作用：</strong> 控制下载器的具体行为，如分类、标签等</p>
<h4 id="保存路径" tabindex="-1"><a class="header-anchor" href="#保存路径"><span>保存路径</span></a></h4>
<p><strong>说明：</strong> 指定资源的下载保存路径</p>
<p><strong>选项：</strong> 系统中已配置的保存路径列表</p>
<p><strong>默认行为：</strong> 不选择则根据资源类型自动匹配目录管理中的设置</p>
<p><strong>注意事项：</strong></p>
<ul>
<li>手工输入保存路径时，QB下载器会自动关闭种子自动管理</li>
<li>推荐使用目录管理中的预设路径</li>
</ul>
<h3 id="🌐-站点配置" tabindex="-1"><a class="header-anchor" href="#🌐-站点配置"><span>🌐 站点配置</span></a></h3>
<h4 id="订阅站点" tabindex="-1"><a class="header-anchor" href="#订阅站点"><span>订阅站点</span></a></h4>
<p><strong>说明：</strong> 选择通过RSS订阅方式获取资源的站点</p>
<p><strong>显示条件：</strong> 站点维护中选中了&quot;订阅&quot;用途的站点</p>
<p><strong>默认行为：</strong> 不选择则默认使用所有订阅站点</p>
<p><strong>工作机制：</strong> 系统会定期检查这些站点的RSS源，发现匹配的新资源后自动下载</p>
<h4 id="搜索站点" tabindex="-1"><a class="header-anchor" href="#搜索站点"><span>搜索站点</span></a></h4>
<p><strong>说明：</strong> 选择通过主动搜索方式获取资源的站点</p>
<p><strong>显示条件：</strong> 站点维护中选中了&quot;搜索&quot;用途的站点</p>
<p><strong>默认行为：</strong> 不选择则默认使用所有搜索站点</p>
<p><strong>触发时机：</strong></p>
<ul>
<li>订阅详情中点击刷新按钮</li>
<li>系统设置的订阅搜索周期时间到达时自动搜索</li>
<li>订阅添加后自动执行一次搜索</li>
</ul>
<blockquote>
<p>💡 <strong>推荐添加方式</strong></p>
</blockquote>
<p>推荐使用搜索功能先搜索电影，然后点击搜索结果中的订阅按钮添加订阅，这种方式更加直观和便捷：</p>
<ol>
<li>在搜索页面输入电影名称进行搜索</li>
<li>在搜索结果中找到目标电影</li>
<li>点击电影卡片上的订阅按钮</li>
<li>系统会自动填充标题、年份等基本信息</li>
<li>根据需要调整其他配置参数</li>
<li>保存完成订阅添加</li>
</ol>
<hr>
<h2 id="🔧-订阅编辑与管理" tabindex="-1"><a class="header-anchor" href="#🔧-订阅编辑与管理"><span>🔧 订阅编辑与管理</span></a></h2>
<h3 id="编辑订阅" tabindex="-1"><a class="header-anchor" href="#编辑订阅"><span>编辑订阅</span></a></h3>
<p>点击订阅卡片可以打开订阅编辑窗口，支持修改所有配置参数：</p>
<ul>
<li><strong>基本信息</strong>：标题、年份、自定义搜索词</li>
<li><strong>过滤和排序</strong>：过滤规则、排序规则</li>
<li><strong>下载设置</strong>：下载器、下载参数、保存路径</li>
<li><strong>站点配置</strong>：订阅站点、搜索站点</li>
</ul>
<h3 id="订阅操作" tabindex="-1"><a class="header-anchor" href="#订阅操作"><span>订阅操作</span></a></h3>
<h4 id="立即搜索" tabindex="-1"><a class="header-anchor" href="#立即搜索"><span>立即搜索</span></a></h4>
<p>点击订阅卡片进入编辑页面后，可以点击刷新按钮立即搜索所有搜索站点的资源并添加下载。</p>
<h4 id="取消订阅" tabindex="-1"><a class="header-anchor" href="#取消订阅"><span>取消订阅</span></a></h4>
<p>在编辑页面点击&quot;取消订阅&quot;按钮可以删除该订阅，已下载的资源不会被删除。</p>
<h4 id="复制订阅" tabindex="-1"><a class="header-anchor" href="#复制订阅"><span>复制订阅</span></a></h4>
<p>可以基于现有订阅创建副本，便于快速创建相似的订阅。</p>
<hr>
<h2 id="⚙️-默认设置" tabindex="-1"><a class="header-anchor" href="#⚙️-默认设置"><span>⚙️ 默认设置</span></a></h2>
<p>通过&quot;默认设置&quot;功能可以预先配置订阅的默认参数，这些默认设置会在以下场景中自动应用：</p>
<h3 id="适用场景" tabindex="-1"><a class="header-anchor" href="#适用场景"><span>适用场景</span></a></h3>
<ul>
<li><strong>消息远程订阅</strong>：通过Telegram等消息渠道远程添加订阅</li>
<li><strong>Overseerr/Jellyseerr联动</strong>：通过媒体请求系统添加订阅</li>
<li><strong>豆瓣榜单同步</strong>：从豆瓣榜单自动添加订阅</li>
<li><strong>其他插件订阅</strong>：具有订阅功能的插件自动添加订阅</li>
</ul>
<h3 id="可配置项" tabindex="-1"><a class="header-anchor" href="#可配置项"><span>可配置项</span></a></h3>
<ul>
<li><strong>过滤规则</strong>：默认使用的过滤规则组</li>
<li><strong>排序规则</strong>：默认使用的排序规则</li>
<li><strong>下载器</strong>：默认使用的下载器</li>
<li><strong>下载参数</strong>：默认使用的下载参数</li>
<li><strong>保存路径</strong>：默认保存目录</li>
<li><strong>订阅站点</strong>：默认的RSS订阅站点</li>
<li><strong>搜索站点</strong>：默认的主动搜索站点</li>
</ul>
<hr>
<h2 id="📚-订阅历史" tabindex="-1"><a class="header-anchor" href="#📚-订阅历史"><span>📚 订阅历史</span></a></h2>
<p>订阅历史页面显示所有已完成的电影订阅记录，提供以下功能：</p>
<h3 id="历史记录管理" tabindex="-1"><a class="header-anchor" href="#历史记录管理"><span>历史记录管理</span></a></h3>
<ul>
<li><strong>查看详情</strong>：查看已完成订阅的详细信息</li>
<li><strong>删除记录</strong>：删除历史记录（避免无法重复添加相同订阅）</li>
<li><strong>重新订阅</strong>：基于历史记录重新创建订阅</li>
</ul>
<h3 id="使用场景" tabindex="-1"><a class="header-anchor" href="#使用场景"><span>使用场景</span></a></h3>
<ul>
<li><strong>重复订阅</strong>：删除历史记录后可以重新添加相同的订阅</li>
<li><strong>质量升级</strong>：重新订阅已完成的电影获取更高质量版本</li>
<li><strong>配置调整</strong>：基于历史记录使用新的配置重新订阅</li>
</ul>
<hr>
<h2 id="🔍-高级功能" tabindex="-1"><a class="header-anchor" href="#🔍-高级功能"><span>🔍 高级功能</span></a></h2>
<h3 id="智能筛选" tabindex="-1"><a class="header-anchor" href="#智能筛选"><span>智能筛选</span></a></h3>
<p>系统通过多层筛选机制确保获取最优资源：</p>
<ol>
<li><strong>过滤规则筛选</strong>：根据配置的过滤规则过滤掉不符合条件的资源</li>
<li><strong>排序规则排序</strong>：对通过筛选的资源按照权重进行排序</li>
<li><strong>择优下载</strong>：优先下载排序靠前的高质量资源</li>
</ol>
<hr>
<h2 id="注意事项" tabindex="-1"><a class="header-anchor" href="#注意事项"><span>注意事项</span></a></h2>
<ol>
<li><strong>标题准确性</strong>：确保电影标题与TMDB中的名称一致，否则无法正确识别媒体信息</li>
<li><strong>规则配置</strong>：合理配置过滤和排序规则，避免过于严格导致无法找到资源</li>
<li><strong>站点选择</strong>：根据资源分布情况选择合适的订阅和搜索站点</li>
<li><strong>存储空间</strong>：注意监控存储空间，避免下载过多资源导致空间不足</li>
<li><strong>网络环境</strong>：根据网络情况调整搜索频率，避免对站点造成过大压力</li>
</ol>
<hr>
<h2 id="相关文档" tabindex="-1"><a class="header-anchor" href="#相关文档"><span>相关文档</span></a></h2>
<ul>
<li><RouteLink to="/docs/system_settings/filter_rules/">过滤规则</RouteLink> - 配置资源过滤条件</li>
<li><RouteLink to="/docs/system_settings/torrent_sort/">种子排序</RouteLink> - 配置资源排序规则</li>
<li><RouteLink to="/docs/system_settings/torrent_match/">种子匹配</RouteLink> - 配置精确匹配条件</li>
<li><RouteLink to="/docs/system_settings/basic_settings/">基础设置</RouteLink> - 配置订阅基础参数</li>
<li><RouteLink to="/docs/sites/site/">站点管理</RouteLink> - 管理订阅和搜索站点</li>
<li><RouteLink to="/docs/download_management/">下载管理</RouteLink> - 配置下载器和参数</li>
</ul>
<hr>
</div></template>


