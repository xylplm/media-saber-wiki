<template><div><h1 id="🌐-站点管理" tabindex="-1"><a class="header-anchor" href="#🌐-站点管理"><span>🌐 站点管理</span></a></h1>
<p>站点管理功能负责配置和管理系统支持的各种站点，包括BT站点、搜索站点等，是系统获取资源的核心模块。</p>
<h2 id="📋-功能模块" tabindex="-1"><a class="header-anchor" href="#📋-功能模块"><span>📋 功能模块</span></a></h2>
<p>站点管理包含以下主要功能模块：</p>
<h3 id="🛠️-站点维护" tabindex="-1"><a class="header-anchor" href="#🛠️-站点维护"><span>🛠️ <RouteLink to="/docs/sites/site/">站点维护</RouteLink></span></a></h3>
<p>添加、配置和管理各种站点，设置站点的基本信息和访问参数。</p>
<h3 id="📊-站点数据" tabindex="-1"><a class="header-anchor" href="#📊-站点数据"><span>📊 <RouteLink to="/docs/sites/site_data/">站点数据</RouteLink></span></a></h3>
<p>查看和分析各站点的数据统计信息，包括流量、发布数量等。</p>
<h3 id="📅-签到任务" tabindex="-1"><a class="header-anchor" href="#📅-签到任务"><span>📅 <RouteLink to="/docs/sites/check_in/">签到任务</RouteLink></span></a></h3>
<p>配置和管理站点自动签到任务，维持站点活跃度。</p>
<h3 id="💎-站点资源" tabindex="-1"><a class="header-anchor" href="#💎-站点资源"><span>💎 <RouteLink to="/docs/sites/site_resources/">站点资源</RouteLink></span></a></h3>
<p>浏览和管理站点提供的资源信息。</p>
<h3 id="📢-站点公告" tabindex="-1"><a class="header-anchor" href="#📢-站点公告"><span>📢 <RouteLink to="/docs/sites/site_announcements/">站点公告</RouteLink></span></a></h3>
<p>查看各站点的公告信息。</p>
<h3 id="📩-站点消息" tabindex="-1"><a class="header-anchor" href="#📩-站点消息"><span>📩 <RouteLink to="/docs/sites/site_messages/">站点消息</RouteLink></span></a></h3>
<p>管理和回复站点的站内消息。</p>
<h3 id="📋-站点请求" tabindex="-1"><a class="header-anchor" href="#📋-站点请求"><span>📋 <RouteLink to="/docs/sites/site_requests/">站点请求</RouteLink></span></a></h3>
<p>查看和管理站点的求种请求。</p>
<h3 id="🔧-站点适配" tabindex="-1"><a class="header-anchor" href="#🔧-站点适配"><span>🔧 <RouteLink to="/docs/sites/site_adaptation/">站点适配</RouteLink></span></a></h3>
<p>配置站点的适配规则，确保系统能正确解析站点内容。</p>
<h2 id="📘-核心概念" tabindex="-1"><a class="header-anchor" href="#📘-核心概念"><span>📘 核心概念</span></a></h2>
<h3 id="站点类型" tabindex="-1"><a class="header-anchor" href="#站点类型"><span>站点类型</span></a></h3>
<p>系统支持多种类型的站点：</p>
<ul>
<li><strong>BT站点</strong>：提供BT种子下载的私有或公共站点</li>
<li><strong>搜索站点</strong>：提供资源搜索功能的站点</li>
<li><strong>资源站点</strong>：提供直接下载链接的站点</li>
<li><strong>信息站点</strong>：提供媒体信息和推荐的站点</li>
</ul>
<h3 id="站点用途" tabindex="-1"><a class="header-anchor" href="#站点用途"><span>站点用途</span></a></h3>
<p>每个站点可以配置不同的用途：</p>
<ul>
<li><strong>订阅</strong>：用于RSS订阅获取新资源</li>
<li><strong>搜索</strong>：用于主动搜索资源</li>
<li><strong>下载</strong>：作为下载源</li>
<li><strong>信息发布</strong>：用于发布求种请求</li>
</ul>
<h3 id="站点状态" tabindex="-1"><a class="header-anchor" href="#站点状态"><span>站点状态</span></a></h3>
<p>站点可能处于以下状态：</p>
<ul>
<li><strong>正常</strong>：站点可正常访问和使用</li>
<li><strong>错误</strong>：站点连接或解析出错</li>
<li><strong>禁用</strong>：站点被手动禁用</li>
<li><strong>未连接</strong>：尚未测试连接</li>
</ul>
<h3 id="站点功能" tabindex="-1"><a class="header-anchor" href="#站点功能"><span>站点功能</span></a></h3>
<p>站点支持多种功能：</p>
<ul>
<li><strong>RSS订阅</strong>：通过RSS获取站点最新资源</li>
<li><strong>搜索</strong>：支持关键词搜索资源</li>
<li><strong>签到</strong>：支持自动签到功能</li>
<li><strong>消息</strong>：支持站内消息功能</li>
<li><strong>请求</strong>：支持发布和响应求种请求</li>
</ul>
<h2 id="⚙️-工作流程" tabindex="-1"><a class="header-anchor" href="#⚙️-工作流程"><span>⚙️ 工作流程</span></a></h2>
<p>站点管理的基本工作流程如下：</p>
<ol>
<li><strong>添加站点</strong>：在站点维护中添加新的站点配置</li>
<li><strong>配置参数</strong>：设置站点的访问参数和功能配置</li>
<li><strong>测试连接</strong>：验证站点连接和功能是否正常</li>
<li><strong>设置用途</strong>：为站点分配适当的用途标签</li>
<li><strong>日常维护</strong>：通过签到、消息等功能维护站点关系</li>
<li><strong>数据分析</strong>：通过站点数据了解站点使用情况</li>
</ol>
<h2 id="📝-注意事项" tabindex="-1"><a class="header-anchor" href="#📝-注意事项"><span>📝 注意事项</span></a></h2>
<ul>
<li>正确配置站点访问参数，确保能正常连接站点</li>
<li>遵守各站点的使用规则和配额限制</li>
<li>定期检查站点状态，及时处理连接问题</li>
<li>合理设置站点用途，避免对站点造成过大压力</li>
<li>注意保护站点账号安全，避免泄露认证信息</li>
</ul>
</div></template>


