<template><div><h1 id="📥-下载管理" tabindex="-1"><a class="header-anchor" href="#📥-下载管理"><span>📥 下载管理</span></a></h1>
<p>下载管理功能负责配置和管理系统的下载任务，包括下载器配置、下载参数设置、下载任务监控等核心功能。</p>
<h2 id="📋-功能模块" tabindex="-1"><a class="header-anchor" href="#📋-功能模块"><span>📋 功能模块</span></a></h2>
<p>下载管理包含以下主要功能模块：</p>
<h3 id="🚧-正在下载" tabindex="-1"><a class="header-anchor" href="#🚧-正在下载"><span>🚧 <RouteLink to="/docs/download_management/downloading/">正在下载</RouteLink></span></a></h3>
<p>监控当前正在进行的下载任务，查看下载进度和状态。</p>
<h3 id="📚-近期下载" tabindex="-1"><a class="header-anchor" href="#📚-近期下载"><span>📚 <RouteLink to="/docs/download_management/recent_downloads/">近期下载</RouteLink></span></a></h3>
<p>查看最近完成或失败的下载任务记录。</p>
<h3 id="⚙️-下载参数" tabindex="-1"><a class="header-anchor" href="#⚙️-下载参数"><span>⚙️ <RouteLink to="/docs/download_management/download_parameters/">下载参数</RouteLink></span></a></h3>
<p>配置和管理下载任务的参数模板，用于统一设置下载选项。</p>
<h3 id="🖥️-下载器管理" tabindex="-1"><a class="header-anchor" href="#🖥️-下载器管理"><span>🖥️ <RouteLink to="/docs/download_management/downloader_management/">下载器管理</RouteLink></span></a></h3>
<p>配置和管理各种下载器，支持多种下载协议和客户端。</p>
<h2 id="📘-核心概念" tabindex="-1"><a class="header-anchor" href="#📘-核心概念"><span>📘 核心概念</span></a></h2>
<h3 id="下载器" tabindex="-1"><a class="header-anchor" href="#下载器"><span>下载器</span></a></h3>
<p>下载器是系统与下载客户端之间的桥梁，支持多种下载客户端：</p>
<ul>
<li><strong>qBittorrent</strong>：流行的BT下载客户端</li>
<li><strong>Transmission</strong>：轻量级BT下载客户端</li>
<li><strong>Deluge</strong>：功能丰富的BT下载客户端</li>
<li><strong>Aria2</strong>：轻量级多协议命令行下载工具</li>
<li><strong>Motrix</strong>：现代化的下载工具</li>
</ul>
<p>每种下载器都有其特定的配置参数和功能特点。</p>
<h3 id="下载参数" tabindex="-1"><a class="header-anchor" href="#下载参数"><span>下载参数</span></a></h3>
<p>下载参数是应用于下载任务的一组配置选项，包括：</p>
<ul>
<li>分类标签：用于在下载器中标识和分类任务</li>
<li>保存路径：指定下载文件的存储位置</li>
<li>带宽限制：限制下载和上传速度</li>
<li>连接数设置：控制同时连接数和连接数限制</li>
<li>做种设置：设置做种时间和分享率限制</li>
</ul>
<h3 id="下载状态" tabindex="-1"><a class="header-anchor" href="#下载状态"><span>下载状态</span></a></h3>
<p>下载任务可能处于以下状态：</p>
<ul>
<li><strong>正在下载</strong>：文件正在下载中</li>
<li><strong>正在做种</strong>：下载完成，正在分享文件</li>
<li><strong>暂停</strong>：任务被暂停</li>
<li><strong>错误</strong>：任务执行出错</li>
<li><strong>完成</strong>：任务成功完成</li>
<li><strong>移除</strong>：任务已被移除</li>
</ul>
<h2 id="⚙️-工作流程" tabindex="-1"><a class="header-anchor" href="#⚙️-工作流程"><span>⚙️ 工作流程</span></a></h2>
<p>下载管理的基本工作流程如下：</p>
<ol>
<li><strong>配置下载器</strong>：在下载器管理中添加和配置下载客户端</li>
<li><strong>设置下载参数</strong>：创建和管理下载参数模板</li>
<li><strong>发起下载</strong>：通过订阅、搜索等方式发起下载任务</li>
<li><strong>监控进度</strong>：在正在下载页面监控任务执行状态</li>
<li><strong>查看记录</strong>：在近期下载中查看历史任务记录</li>
</ol>
<h2 id="📝-注意事项" tabindex="-1"><a class="header-anchor" href="#📝-注意事项"><span>📝 注意事项</span></a></h2>
<ul>
<li>正确配置下载器连接参数，确保系统能正常控制下载客户端</li>
<li>合理设置下载参数，平衡下载速度和系统资源使用</li>
<li>定期清理已完成的下载任务，保持下载器整洁</li>
<li>注意下载器的带宽限制，避免影响其他网络应用</li>
<li>合理设置做种参数，遵守站点规则</li>
</ul>
</div></template>


