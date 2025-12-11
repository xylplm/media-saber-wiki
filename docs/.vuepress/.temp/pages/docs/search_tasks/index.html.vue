<template><div><h1 id="🔍-搜索任务" tabindex="-1"><a class="header-anchor" href="#🔍-搜索任务"><span>🔍 搜索任务</span></a></h1>
<p>搜索任务功能允许用户主动搜索感兴趣的媒体资源，支持手动搜索和自动搜索任务。</p>
<h2 id="📋-功能模块" tabindex="-1"><a class="header-anchor" href="#📋-功能模块"><span>📋 功能模块</span></a></h2>
<p>搜索任务包含以下主要功能模块：</p>
<h3 id="🔎-搜索" tabindex="-1"><a class="header-anchor" href="#🔎-搜索"><span>🔎 <RouteLink to="/docs/search_tasks/search/">搜索</RouteLink></span></a></h3>
<p>手动执行资源搜索，即时获取搜索结果。</p>
<h3 id="📅-搜索任务" tabindex="-1"><a class="header-anchor" href="#📅-搜索任务"><span>📅 <RouteLink to="/docs/search_tasks/search_tasks/">搜索任务</RouteLink></span></a></h3>
<p>创建和管理自动搜索任务，按计划定期执行搜索。</p>
<h2 id="📘-核心概念" tabindex="-1"><a class="header-anchor" href="#📘-核心概念"><span>📘 核心概念</span></a></h2>
<h3 id="搜索方式" tabindex="-1"><a class="header-anchor" href="#搜索方式"><span>搜索方式</span></a></h3>
<p>系统支持多种搜索方式：</p>
<ul>
<li><strong>手动搜索</strong>：用户主动发起的即时搜索</li>
<li><strong>自动搜索</strong>：按计划定期执行的搜索任务</li>
<li><strong>订阅触发搜索</strong>：由订阅功能触发的资源搜索</li>
</ul>
<h3 id="搜索站点" tabindex="-1"><a class="header-anchor" href="#搜索站点"><span>搜索站点</span></a></h3>
<p>搜索可以针对特定站点进行：</p>
<ul>
<li>单站点搜索：只在指定站点搜索</li>
<li>多站点搜索：同时在多个站点搜索</li>
<li>全站点搜索：在所有启用搜索功能的站点搜索</li>
</ul>
<h3 id="搜索参数" tabindex="-1"><a class="header-anchor" href="#搜索参数"><span>搜索参数</span></a></h3>
<p>搜索任务可以配置详细的参数：</p>
<ul>
<li><strong>搜索关键词</strong>：指定搜索的关键字</li>
<li><strong>媒体类型</strong>：限定搜索的媒体类型（电影、电视剧等）</li>
<li><strong>筛选条件</strong>：设置时间范围、大小限制等筛选条件</li>
<li><strong>站点选择</strong>：指定参与搜索的站点</li>
<li><strong>执行计划</strong>：设置自动搜索的执行时间</li>
</ul>
<h3 id="搜索结果处理" tabindex="-1"><a class="header-anchor" href="#搜索结果处理"><span>搜索结果处理</span></a></h3>
<p>搜索结果可以进行以下处理：</p>
<ul>
<li><strong>直接下载</strong>：将结果发送到下载器</li>
<li><strong>查看详情</strong>：查看资源详细信息</li>
<li><strong>过滤筛选</strong>：根据规则进一步筛选结果</li>
<li><strong>批量操作</strong>：对多个结果进行批量处理</li>
</ul>
<h2 id="⚙️-工作流程" tabindex="-1"><a class="header-anchor" href="#⚙️-工作流程"><span>⚙️ 工作流程</span></a></h2>
<p>搜索任务的基本工作流程如下：</p>
<ol>
<li><strong>发起搜索</strong>：通过手动搜索或自动任务发起搜索请求</li>
<li><strong>站点查询</strong>：在指定站点执行搜索查询</li>
<li><strong>结果聚合</strong>：收集和聚合各站点的搜索结果</li>
<li><strong>结果展示</strong>：在界面中展示搜索结果</li>
<li><strong>结果处理</strong>：对感兴趣的资源进行下载或其他操作</li>
</ol>
<h2 id="📝-注意事项" tabindex="-1"><a class="header-anchor" href="#📝-注意事项"><span>📝 注意事项</span></a></h2>
<ul>
<li>合理设置搜索关键词，避免过于宽泛或过于狭窄</li>
<li>控制搜索频率，避免对站点造成过大压力</li>
<li>定期检查自动搜索任务，确保按预期执行</li>
<li>根据网络和下载情况调整同时搜索的站点数量</li>
<li>注意各站点的搜索规则和限制</li>
</ul>
</div></template>


