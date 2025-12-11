<template><div><h1 id="☁️-云端存储" tabindex="-1"><a class="header-anchor" href="#☁️-云端存储"><span>☁️ 云端存储</span></a></h1>
<p>云端存储功能允许用户连接和管理各种云存储服务，实现文件的在线浏览、传输和媒体整理。</p>
<h2 id="📋-功能模块" tabindex="-1"><a class="header-anchor" href="#📋-功能模块"><span>📋 功能模块</span></a></h2>
<p>云端存储包含以下主要功能模块：</p>
<h3 id="🗃️-存储管理" tabindex="-1"><a class="header-anchor" href="#🗃️-存储管理"><span>🗃️ <RouteLink to="/docs/cloud_storage/storage/">存储管理</RouteLink></span></a></h3>
<p>管理和配置云存储服务连接，包括各种云盘服务的认证和设置。</p>
<h3 id="📁-云端文件" tabindex="-1"><a class="header-anchor" href="#📁-云端文件"><span>📁 <RouteLink to="/docs/cloud_storage/home/">云端文件</RouteLink></span></a></h3>
<p>浏览和管理云存储中的文件和文件夹，支持基本的文件操作。</p>
<h3 id="🔄-文件整理" tabindex="-1"><a class="header-anchor" href="#🔄-文件整理"><span>🔄 <RouteLink to="/docs/cloud_storage/strm_transfer/">文件整理</RouteLink></span></a></h3>
<p>将云存储中的文件整理到本地媒体库，支持多种整理方式。</p>
<h3 id="🔗-strm生成" tabindex="-1"><a class="header-anchor" href="#🔗-strm生成"><span>🔗 <RouteLink to="/docs/cloud_storage/strm_generate/">Strm生成</RouteLink></span></a></h3>
<p>创建和管理STRM文件生成任务，用于流媒体播放。</p>
<h3 id="🚧-进行中任务" tabindex="-1"><a class="header-anchor" href="#🚧-进行中任务"><span>🚧 <RouteLink to="/docs/cloud_storage/task_undone/">进行中任务</RouteLink></span></a></h3>
<p>监控当前正在执行的云存储相关任务，包括上传、下载、复制、移动等。</p>
<h3 id="✅-已完成任务" tabindex="-1"><a class="header-anchor" href="#✅-已完成任务"><span>✅ <RouteLink to="/docs/cloud_storage/task_done/">已完成任务</RouteLink></span></a></h3>
<p>查看历史完成的云存储任务记录。</p>
<h3 id="📦-网盘配置指南" tabindex="-1"><a class="header-anchor" href="#📦-网盘配置指南"><span>📦 <RouteLink to="/docs/cloud_storage/storage_config/">网盘配置指南</RouteLink></span></a></h3>
<p>各种网盘的详细配置说明和参数获取方法。</p>
<h2 id="⚙️-核心概念" tabindex="-1"><a class="header-anchor" href="#⚙️-核心概念"><span>⚙️ 核心概念</span></a></h2>
<h3 id="什么是strm文件" tabindex="-1"><a class="header-anchor" href="#什么是strm文件"><span>什么是STRM文件？</span></a></h3>
<p>STRM文件是一种流媒体播放列表文件，它不包含实际的媒体内容，而是包含指向网络上媒体文件的链接。通过STRM文件，用户可以在本地媒体播放器中直接播放存储在云盘中的媒体内容，而无需将文件下载到本地。</p>
<h3 id="云存储支持的协议" tabindex="-1"><a class="header-anchor" href="#云存储支持的协议"><span>云存储支持的协议</span></a></h3>
<p>系统支持多种云存储协议，包括但不限于：</p>
<p><strong>国内云盘</strong></p>
<ul>
<li><RouteLink to="/docs/cloud_storage/storage_config/#%E9%98%BF%E9%87%8C%E4%BA%91%E7%9B%98-oauth2">阿里云盘（Oauth2）</RouteLink></li>
<li><RouteLink to="/docs/cloud_storage/storage_config/#%E7%99%BE%E5%BA%A6%E7%BD%91%E7%9B%98">百度网盘</RouteLink></li>
<li><RouteLink to="/docs/cloud_storage/storage_config/#%E5%A4%B8%E5%85%8B%E7%BD%91%E7%9B%98-open">夸克网盘 Open</RouteLink></li>
<li><RouteLink to="/docs/cloud_storage/storage_config/#%E5%A4%A9%E7%BF%BC%E4%BA%91%E7%9B%98">天翼云盘</RouteLink></li>
<li><RouteLink to="/docs/cloud_storage/storage_config/#%E4%B8%AD%E5%9B%BD%E7%A7%BB%E5%8A%A8%E4%BA%91%E7%9B%98">中国移动云盘</RouteLink></li>
<li><RouteLink to="/docs/cloud_storage/storage_config/#_115-%E7%BD%91%E7%9B%98%E5%BC%80%E6%94%BE%E5%B9%B3%E5%8F%B0">115 网盘开放平台</RouteLink></li>
<li><RouteLink to="/docs/cloud_storage/storage_config/#_123-%E4%BA%91%E7%9B%98%E5%BC%80%E6%94%BE%E5%B9%B3%E5%8F%B0">123 云盘开放平台</RouteLink></li>
</ul>
<p><strong>国际云盘</strong></p>
<ul>
<li><RouteLink to="/docs/cloud_storage/storage_config/#onedrive">OneDrive</RouteLink></li>
</ul>
<h2 id="🔄-工作流程" tabindex="-1"><a class="header-anchor" href="#🔄-工作流程"><span>🔄 工作流程</span></a></h2>
<p>云端存储的基本工作流程如下：</p>
<ol>
<li><strong>配置存储</strong>：在存储管理中添加和配置云存储服务</li>
<li><strong>浏览文件</strong>：在云端文件中浏览和管理云存储中的文件</li>
<li><strong>创建任务</strong>：通过文件整理或STRM生成创建处理任务</li>
<li><strong>监控进度</strong>：在进行中任务中监控任务执行状态</li>
<li><strong>查看历史</strong>：在已完成任务中查看历史记录</li>
</ol>
<h2 id="📝-注意事项" tabindex="-1"><a class="header-anchor" href="#📝-注意事项"><span>📝 注意事项</span></a></h2>
<ul>
<li>确保云存储服务的认证信息正确配置</li>
<li>定期检查任务执行状态，确保文件整理和STRM生成正常进行</li>
<li>合理设置缓存过期时间以平衡性能和数据新鲜度</li>
<li>注意云存储服务的使用限制和配额</li>
</ul>
</div></template>


