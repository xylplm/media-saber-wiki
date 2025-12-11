<template><div><h1 id="📺-订阅管理" tabindex="-1"><a class="header-anchor" href="#📺-订阅管理"><span>📺 订阅管理</span></a></h1>
<blockquote>
<p>订阅管理功能允许用户通过RSS订阅和主动搜索的方式自动获取感兴趣的媒体内容，包括电影、电视剧等。系统支持智能过滤、排序规则和多站点订阅，实现全自动化的媒体获取。</p>
</blockquote>
<hr>
<h2 id="📋-功能模块" tabindex="-1"><a class="header-anchor" href="#📋-功能模块"><span>📋 功能模块</span></a></h2>
<p>订阅管理包含以下主要功能模块：</p>
<h3 id="🎬-电影订阅" tabindex="-1"><a class="header-anchor" href="#🎬-电影订阅"><span>🎬 <RouteLink to="/docs/subscription_management/movie_subscription/">电影订阅</RouteLink></span></a></h3>
<p>管理和配置电影订阅，通过RSS订阅和主动搜索自动获取感兴趣的电影。</p>
<h3 id="📺-电视剧订阅" tabindex="-1"><a class="header-anchor" href="#📺-电视剧订阅"><span>📺 <RouteLink to="/docs/subscription_management/tv_subscription/">电视剧订阅</RouteLink></span></a></h3>
<p>管理和配置电视剧订阅，支持按季或按集订阅，自动跟踪更新。</p>
<h3 id="🛠️-自定义订阅" tabindex="-1"><a class="header-anchor" href="#🛠️-自定义订阅"><span>🛠️ <RouteLink to="/docs/subscription_management/custom_subscription/">自定义订阅</RouteLink></span></a></h3>
<p>创建和管理自定义订阅规则，满足特殊订阅需求。</p>
<h3 id="📅-订阅日历" tabindex="-1"><a class="header-anchor" href="#📅-订阅日历"><span>📅 <RouteLink to="/docs/subscription_management/subscription_calendar/">订阅日历</RouteLink></span></a></h3>
<p>以日历形式展示订阅内容的更新时间，方便用户了解订阅内容的更新计划。</p>
<h2 id="🔑-核心概念" tabindex="-1"><a class="header-anchor" href="#🔑-核心概念"><span>🔑 核心概念</span></a></h2>
<h3 id="rss订阅" tabindex="-1"><a class="header-anchor" href="#rss订阅"><span>RSS订阅</span></a></h3>
<p>RSS订阅是通过站点提供的RSS订阅源自动获取资源信息的方式。系统会定期检查订阅源，发现新资源后自动下载。</p>
<h3 id="主动搜索" tabindex="-1"><a class="header-anchor" href="#主动搜索"><span>主动搜索</span></a></h3>
<p>主动搜索是系统按照设定的时间间隔，使用用户配置的关键词在指定站点搜索资源的方式。相比RSS订阅，主动搜索能发现更多资源。</p>
<h3 id="订阅状态" tabindex="-1"><a class="header-anchor" href="#订阅状态"><span>订阅状态</span></a></h3>
<p>订阅内容可能处于以下状态：</p>
<ul>
<li><strong>正在订阅</strong>：订阅已启用，正在等待新资源</li>
<li><strong>搜索中</strong>：系统正在搜索该订阅相关的资源</li>
<li><strong>已完成</strong>：订阅的目标已达成（如电影已下载，或电视剧已完结）</li>
</ul>
<h3 id="过滤规则" tabindex="-1"><a class="header-anchor" href="#过滤规则"><span>过滤规则</span></a></h3>
<p>过滤规则用于筛选符合要求的资源，可以根据分辨率、制作组、文件大小等条件过滤资源。详细配置请参考 <RouteLink to="/docs/system_settings/filter_rules/">过滤规则</RouteLink>。</p>
<h3 id="排序规则" tabindex="-1"><a class="header-anchor" href="#排序规则"><span>排序规则</span></a></h3>
<p>排序规则用于对搜索到的资源进行智能排序，通过配置不同维度的权重来确定资源的优先级。详细配置请参考 <RouteLink to="/docs/system_settings/torrent_sort/">种子排序</RouteLink>。</p>
<h3 id="种子匹配" tabindex="-1"><a class="header-anchor" href="#种子匹配"><span>种子匹配</span></a></h3>
<p>种子匹配规则用于精确控制种子的筛选条件，可以被过滤规则和排序规则引用。详细配置请参考 <RouteLink to="/docs/system_settings/torrent_match/">种子匹配</RouteLink>。</p>
<h2 id="🔄-工作流程" tabindex="-1"><a class="header-anchor" href="#🔄-工作流程"><span>🔄 工作流程</span></a></h2>
<p>订阅管理的基本工作流程如下：</p>
<ol>
<li><strong>添加订阅</strong>：通过搜索或直接添加的方式创建订阅</li>
<li><strong>配置参数</strong>：设置订阅的筛选条件、下载设置等参数</li>
<li><strong>自动检索</strong>：系统通过RSS订阅和主动搜索发现资源</li>
<li><strong>资源筛选</strong>：根据过滤规则筛选符合条件的资源</li>
<li><strong>自动下载</strong>：将符合条件的资源添加到下载器进行下载</li>
<li><strong>文件整理</strong>：下载完成后自动进行文件整理和媒体库更新</li>
</ol>
<h2 id="⚙️-相关设置" tabindex="-1"><a class="header-anchor" href="#⚙️-相关设置"><span>⚙️ 相关设置</span></a></h2>
<p>订阅管理功能的相关设置可以在以下位置找到：</p>
<ul>
<li><strong><RouteLink to="/docs/system_settings/basic_settings/">基础设置</RouteLink></strong>：配置订阅的基本参数，如搜索周期、默认过滤和排序规则等</li>
<li><strong><RouteLink to="/docs/system_settings/filter_rules/">过滤规则</RouteLink></strong>：配置种子过滤规则，支持导入导出和分享</li>
<li><strong><RouteLink to="/docs/system_settings/torrent_match/">种子匹配</RouteLink></strong>：配置种子匹配条件，可被过滤和排序规则引用</li>
<li><strong><RouteLink to="/docs/system_settings/torrent_sort/">种子排序</RouteLink></strong>：配置基于权重的智能排序规则</li>
<li><strong><RouteLink to="/docs/sites/site/">站点管理</RouteLink></strong>：配置用于订阅和搜索的站点</li>
<li><strong><RouteLink to="/docs/download_management/">下载管理</RouteLink></strong>：配置下载器和下载参数</li>
<li><strong><RouteLink to="/docs/directory_management/directory_management/">目录管理</RouteLink></strong>：配置资源保存目录</li>
</ul>
<h2 id="📝-注意事项" tabindex="-1"><a class="header-anchor" href="#📝-注意事项"><span>📝 注意事项</span></a></h2>
<ul>
<li>合理设置订阅参数，避免订阅过多导致系统资源占用过高</li>
<li>定期检查订阅状态，及时更新已失效的订阅</li>
<li>根据网络环境和存储空间选择合适的过滤规则</li>
<li>注意站点的使用规则，避免过于频繁的搜索影响站点稳定性</li>
</ul>
</div></template>


