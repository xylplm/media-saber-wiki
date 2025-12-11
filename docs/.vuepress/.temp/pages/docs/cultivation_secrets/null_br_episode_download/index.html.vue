<template><div><h1 id="📺-nullbr剧集下载器" tabindex="-1"><a class="header-anchor" href="#📺-nullbr剧集下载器"><span>📺 NullBr剧集下载器</span></a></h1>
<p><strong>NullBr剧集下载器</strong> 是一个通过NullBr API批量下载指定电视剧指定季数和集数范围的插件，支持离线下载到云存储，提供精确的剧集下载控制。</p>
<h2 id="⚙️-功能特点" tabindex="-1"><a class="header-anchor" href="#⚙️-功能特点"><span>⚙️ 功能特点</span></a></h2>
<h3 id="🎯-精确下载" tabindex="-1"><a class="header-anchor" href="#🎯-精确下载"><span>🎯 精确下载</span></a></h3>
<ul>
<li><strong>范围下载</strong>：指定开始和结束集数进行批量下载</li>
<li><strong>季数控制</strong>：精确下载指定季数的剧集</li>
<li><strong>连续控制</strong>：可选择是否在某集无资源时停止下载</li>
<li><strong>过滤规则</strong>：支持使用自定义过滤规则</li>
</ul>
<h3 id="📊-云端下载" tabindex="-1"><a class="header-anchor" href="#📊-云端下载"><span>📊 云端下载</span></a></h3>
<ul>
<li><strong>离线下载</strong>：通过NullBr API进行离线下载</li>
<li><strong>云存储集成</strong>：直接下载到配置的云存储目录</li>
<li><strong>TMDB集成</strong>：基于TMDB ID进行剧集识别</li>
<li><strong>目录自定义</strong>：支持自定义下载目录</li>
</ul>
<h2 id="🚀-配置指南" tabindex="-1"><a class="header-anchor" href="#🚀-配置指南"><span>🚀 配置指南</span></a></h2>
<h3 id="基础配置" tabindex="-1"><a class="header-anchor" href="#基础配置"><span>基础配置</span></a></h3>
<p>插件配置包含以下参数：</p>
<h3 id="📋-必填参数" tabindex="-1"><a class="header-anchor" href="#📋-必填参数"><span>📋 必填参数</span></a></h3>
<ol>
<li>
<p><strong>TMDB ID (tmdbId)</strong>：</p>
<ul>
<li>要下载电视剧的TMDB数据库ID</li>
<li>数字格式，例如：12345</li>
</ul>
</li>
<li>
<p><strong>季 (season)</strong>：</p>
<ul>
<li>要下载的季数</li>
<li>数字格式，例如：1、2、3</li>
</ul>
</li>
<li>
<p><strong>开始集数 (beginEpisode)</strong>：</p>
<ul>
<li>下载范围的起始集数</li>
<li>数字格式，例如：1</li>
</ul>
</li>
<li>
<p><strong>结束集数 (endEpisode)</strong>：</p>
<ul>
<li>下载范围的结束集数</li>
<li>数字格式，例如：12</li>
</ul>
</li>
</ol>
<h3 id="⚙️-可选参数" tabindex="-1"><a class="header-anchor" href="#⚙️-可选参数"><span>⚙️ 可选参数</span></a></h3>
<ol>
<li>
<p><strong>过滤规则 (filterRule)</strong>：</p>
<ul>
<li>选择要使用的过滤规则</li>
<li>不选择则使用资源搜索的默认过滤规则</li>
</ul>
</li>
<li>
<p><strong>下载目录 (dir)</strong>：</p>
<ul>
<li>自定义下载目录路径</li>
<li>不填则使用云存储的默认离线下载目录</li>
</ul>
</li>
<li>
<p><strong>连续下载 (continuous)</strong>：</p>
<ul>
<li>开启：某一集没有资源时停止下载后续集数</li>
<li>关闭：跳过无资源的集数，继续下载其他集数</li>
<li>默认关闭</li>
</ul>
</li>
</ol>
<h2 id="📖-使用说明" tabindex="-1"><a class="header-anchor" href="#📖-使用说明"><span>📖 使用说明</span></a></h2>
<h3 id="前置条件" tabindex="-1"><a class="header-anchor" href="#前置条件"><span>前置条件</span></a></h3>
<h4 id="nullbr-api配置" tabindex="-1"><a class="header-anchor" href="#nullbr-api配置"><span>NullBr API配置</span></a></h4>
<ol>
<li>
<p><strong>获取API Key</strong>：</p>
<ul>
<li>需要有效的NullBr API Key</li>
<li>在【系统配置】→【系统配置】→【服务配置】→【NullBr ApiKey】中配置</li>
</ul>
</li>
<li>
<p><strong>云存储配置</strong>：</p>
<ul>
<li>需要配置云存储服务</li>
<li>在【云端存储】→【存储管理】→【基础设置】→【默认离线下载目录】中配置</li>
</ul>
</li>
</ol>
<h4 id="tmdb-id获取" tabindex="-1"><a class="header-anchor" href="#tmdb-id获取"><span>TMDB ID获取</span></a></h4>
<ol>
<li>
<p><strong>TMDB网站查找</strong>：</p>
<ul>
<li>访问 <a href="https://www.themoviedb.org/" target="_blank" rel="noopener noreferrer">TMDB官网</a></li>
<li>搜索目标电视剧</li>
<li>从URL中获取数字ID</li>
</ul>
</li>
<li>
<p><strong>URL示例</strong>：</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code class="language-text"><span class="line">https://www.themoviedb.org/tv/12345-series-name</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>其中 <code v-pre>12345</code> 就是TMDB ID</p>
</li>
</ol>
<h3 id="执行流程" tabindex="-1"><a class="header-anchor" href="#执行流程"><span>执行流程</span></a></h3>
<ol>
<li>
<p><strong>参数验证</strong>：</p>
<ul>
<li>检查NullBr API Key是否配置</li>
<li>验证云存储默认目录是否设置</li>
<li>确认TMDB ID和集数范围参数</li>
</ul>
</li>
<li>
<p><strong>资源搜索</strong>：</p>
<ul>
<li>使用TMDB ID和季数信息搜索资源</li>
<li>按集数范围逐集搜索Ed2k链接</li>
<li>应用过滤规则筛选资源</li>
</ul>
</li>
<li>
<p><strong>离线下载</strong>：</p>
<ul>
<li>调用NullBr API提交离线下载任务</li>
<li>将资源下载到指定的云存储目录</li>
<li>按连续下载设置处理无资源的集数</li>
</ul>
</li>
<li>
<p><strong>结果处理</strong>：</p>
<ul>
<li>记录下载成功和失败的集数</li>
<li>输出执行结果和统计信息</li>
</ul>
</li>
</ol>
<h3 id="配置示例" tabindex="-1"><a class="header-anchor" href="#配置示例"><span>配置示例</span></a></h3>
<h4 id="基本配置" tabindex="-1"><a class="header-anchor" href="#基本配置"><span>基本配置</span></a></h4>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code class="language-text"><span class="line">TMDB ID: 456789</span>
<span class="line">季: 1</span>
<span class="line">开始集数: 1</span>
<span class="line">结束集数: 10</span>
<span class="line">连续下载: 关闭</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="高级配置" tabindex="-1"><a class="header-anchor" href="#高级配置"><span>高级配置</span></a></h4>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code class="language-text"><span class="line">TMDB ID: 456789</span>
<span class="line">季: 2</span>
<span class="line">开始集数: 5</span>
<span class="line">结束集数: 15</span>
<span class="line">过滤规则: 高质量过滤规则</span>
<span class="line">下载目录: /downloads/tv-series/season2/</span>
<span class="line">连续下载: 开启</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="操作功能" tabindex="-1"><a class="header-anchor" href="#操作功能"><span>操作功能</span></a></h3>
<h4 id="运行一次" tabindex="-1"><a class="header-anchor" href="#运行一次"><span>运行一次</span></a></h4>
<ul>
<li>立即执行一次剧集下载任务</li>
<li>按配置的参数下载指定范围的集数</li>
<li>不需要定时任务，仅支持手动执行</li>
</ul>
<h2 id="⚠️-注意事项" tabindex="-1"><a class="header-anchor" href="#⚠️-注意事项"><span>⚠️ 注意事项</span></a></h2>
<h3 id="使用前提" tabindex="-1"><a class="header-anchor" href="#使用前提"><span>使用前提</span></a></h3>
<ol>
<li>
<p><strong>API配置</strong>：</p>
<ul>
<li>必须配置有效的NullBr API Key</li>
<li>确保API Key有足够的权限和额度</li>
</ul>
</li>
<li>
<p><strong>存储配置</strong>：</p>
<ul>
<li>必须配置云存储的默认离线下载目录</li>
<li>确保云存储有足够的空间</li>
</ul>
</li>
<li>
<p><strong>网络要求</strong>：</p>
<ul>
<li>确保能正常访问NullBr API服务</li>
<li>网络连接稳定，支持大文件下载</li>
</ul>
</li>
</ol>
<h3 id="重要提醒" tabindex="-1"><a class="header-anchor" href="#重要提醒"><span>重要提醒</span></a></h3>
<ol>
<li>
<p><strong>TMDB ID准确性</strong>：</p>
<ul>
<li>确保使用正确的TMDB ID</li>
<li>错误的ID会导致搜索不到资源</li>
</ul>
</li>
<li>
<p><strong>集数范围合理性</strong>：</p>
<ul>
<li>确认目标剧集确实有指定的集数</li>
<li>超出实际集数范围会导致搜索失败</li>
</ul>
</li>
<li>
<p><strong>连续下载策略</strong>：</p>
<ul>
<li>开启连续下载时，遇到无资源集数会停止</li>
<li>关闭时会跳过无资源集数继续下载</li>
</ul>
</li>
</ol>
<h3 id="故障排除" tabindex="-1"><a class="header-anchor" href="#故障排除"><span>故障排除</span></a></h3>
<ol>
<li>
<p><strong>API未配置错误</strong>：</p>
<ul>
<li>检查NullBr API Key是否正确配置</li>
<li>确认API Key的有效性和权限</li>
</ul>
</li>
<li>
<p><strong>目录未配置错误</strong>：</p>
<ul>
<li>检查云存储默认离线下载目录配置</li>
<li>确认目录路径的正确性</li>
</ul>
</li>
<li>
<p><strong>资源搜索失败</strong>：</p>
<ul>
<li>验证TMDB ID是否正确</li>
<li>检查季数和集数是否存在</li>
<li>确认过滤规则设置</li>
</ul>
</li>
<li>
<p><strong>下载失败</strong>：</p>
<ul>
<li>检查网络连接状态</li>
<li>确认云存储服务正常</li>
<li>验证API额度是否充足</li>
</ul>
</li>
</ol>
<h2 id="📊-使用效果" tabindex="-1"><a class="header-anchor" href="#📊-使用效果"><span>📊 使用效果</span></a></h2>
<h3 id="操作统计" tabindex="-1"><a class="header-anchor" href="#操作统计"><span>操作统计</span></a></h3>
<ul>
<li><strong>搜索集数</strong>：尝试搜索的集数总数</li>
<li><strong>找到资源数</strong>：成功找到资源的集数</li>
<li><strong>下载成功数</strong>：成功提交下载的集数</li>
<li><strong>跳过/失败数</strong>：因各种原因未能下载的集数</li>
</ul>
<h3 id="实际效果" tabindex="-1"><a class="header-anchor" href="#实际效果"><span>实际效果</span></a></h3>
<ul>
<li><strong>批量下载</strong>：快速下载整季或指定范围的剧集</li>
<li><strong>离线处理</strong>：通过云端离线下载，节省本地带宽</li>
<li><strong>精确控制</strong>：按需下载指定的集数范围</li>
</ul>
<h2 id="🔗-相关链接" tabindex="-1"><a class="header-anchor" href="#🔗-相关链接"><span>🔗 相关链接</span></a></h2>
<ul>
<li><RouteLink to="/docs/cultivation_secrets/main/">修仙秘籍主页</RouteLink></li>
<li><RouteLink to="/docs/cultivation_secrets/drama_reminder/">追剧提醒插件</RouteLink></li>
<li><RouteLink to="/docs/cultivation_secrets/douban_subject_subscribe/">豆瓣榜单订阅</RouteLink></li>
</ul>
<hr>
<p>🎯 <strong>提示</strong>：使用前请确保已正确配置NullBr API Key和云存储默认目录，插件仅支持手动执行下载任务。</p>
</div></template>


