<template><div><h1 id="🌊-刷流" tabindex="-1"><a class="header-anchor" href="#🌊-刷流"><span>🌊 刷流</span></a></h1>
<p><strong>刷流</strong> 被称为&quot;刷子神器&quot;，是一个通过RSS自动下载PT站点种子进行刷流的插件。支持多维度的过滤条件、流量控制和安全设置，帮助用户自动化管理PT站点的上传流量。</p>
<h2 id="⚙️-功能特点" tabindex="-1"><a class="header-anchor" href="#⚙️-功能特点"><span>⚙️ 功能特点</span></a></h2>
<h3 id="🎯-自动刷流" tabindex="-1"><a class="header-anchor" href="#🎯-自动刷流"><span>🎯 自动刷流</span></a></h3>
<ul>
<li><strong>RSS监控</strong>：通过站点RSS自动获取新种子</li>
<li><strong>智能过滤</strong>：多维度条件过滤合适的刷流种子</li>
<li><strong>流量控制</strong>：精确控制上传下载速度和总体积</li>
<li><strong>标签管理</strong>：通过标签区分和管理刷流种子</li>
</ul>
<h3 id="📊-安全控制" tabindex="-1"><a class="header-anchor" href="#📊-安全控制"><span>📊 安全控制</span></a></h3>
<ul>
<li><strong>体积限制</strong>：设置保种体积上限避免存储溢出</li>
<li><strong>速度监控</strong>：监控下载器速度，超限时停止添加</li>
<li><strong>促销过滤</strong>：支持按促销类型过滤种子</li>
<li><strong>HR控制</strong>：可选择是否下载Hit&amp;Run种子</li>
</ul>
<h2 id="🚀-配置指南" tabindex="-1"><a class="header-anchor" href="#🚀-配置指南"><span>🚀 配置指南</span></a></h2>
<h3 id="基础配置" tabindex="-1"><a class="header-anchor" href="#基础配置"><span>基础配置</span></a></h3>
<p>插件配置包含以下参数：</p>
<h3 id="📋-必填参数" tabindex="-1"><a class="header-anchor" href="#📋-必填参数"><span>📋 必填参数</span></a></h3>
<ol>
<li>
<p><strong>站点 (siteId)</strong>：</p>
<ul>
<li>选择要刷流的PT站点</li>
<li>需要预先在站点管理中配置</li>
</ul>
</li>
<li>
<p><strong>周期 (cron)</strong>：</p>
<ul>
<li>定时执行的Cron表达式</li>
<li>例如：<code v-pre>0 * * * *</code>（每小时执行一次）</li>
</ul>
</li>
<li>
<p><strong>下载器 (downloaderId)</strong>：</p>
<ul>
<li>选择用于刷流的下载器</li>
<li>支持qBittorrent和Transmission</li>
</ul>
</li>
<li>
<p><strong>保存目录 (savePath)</strong>：</p>
<ul>
<li>刷流种子的保存目录</li>
<li>会覆盖下载器中的默认目录设置</li>
</ul>
</li>
</ol>
<h3 id="⚙️-可选参数" tabindex="-1"><a class="header-anchor" href="#⚙️-可选参数"><span>⚙️ 可选参数</span></a></h3>
<h4 id="流量控制" tabindex="-1"><a class="header-anchor" href="#流量控制"><span>流量控制</span></a></h4>
<ol>
<li>
<p><strong>上限上传速度(KB/s) (upLimit)</strong>：</p>
<ul>
<li>下载器上传速度超过此值时停止添加种子</li>
</ul>
</li>
<li>
<p><strong>上限下载速度(KB/s) (dlLimit)</strong>：</p>
<ul>
<li>下载器下载速度超过此值时停止添加种子</li>
</ul>
</li>
<li>
<p><strong>保种体积(GB) (size)</strong>：</p>
<ul>
<li>任务所有下载的总体积超过设定值时不再新增</li>
<li>实际最多超过设定值5GB（冗余量）</li>
</ul>
</li>
</ol>
<h4 id="种子管理" tabindex="-1"><a class="header-anchor" href="#种子管理"><span>种子管理</span></a></h4>
<ol start="4">
<li>
<p><strong>标签 (tags)</strong>：</p>
<ul>
<li>用于标记刷流种子的标签</li>
<li>多个标签用英文逗号分隔</li>
<li><strong>强烈建议设置</strong>，否则部分功能可能失效</li>
</ul>
</li>
<li>
<p><strong>同时下载任务数 (dlCount)</strong>：</p>
<ul>
<li>下载器中正在下载的任务数超过此值时不再添加</li>
<li>使用配置的标签来区分种子</li>
</ul>
</li>
</ol>
<h4 id="rss设置" tabindex="-1"><a class="header-anchor" href="#rss设置"><span>RSS设置</span></a></h4>
<ol start="6">
<li><strong>RSS地址 (rssUrl)</strong>：
<ul>
<li>自定义的站点RSS订阅URL</li>
<li>留空则使用站点配置的RSS地址</li>
</ul>
</li>
</ol>
<h4 id="促销和hr控制" tabindex="-1"><a class="header-anchor" href="#促销和hr控制"><span>促销和HR控制</span></a></h4>
<ol start="7">
<li>
<p><strong>Hit&amp;Run (hr)</strong>：</p>
<ul>
<li>是否下载Hit&amp;Run的种子</li>
<li>默认关闭</li>
</ul>
</li>
<li>
<p><strong>促销 (downloadFactor)</strong>：</p>
<ul>
<li>按促销类型过滤种子</li>
<li>如：免费、半价、双倍等</li>
</ul>
</li>
</ol>
<h4 id="内容过滤" tabindex="-1"><a class="header-anchor" href="#内容过滤"><span>内容过滤</span></a></h4>
<ol start="9">
<li>
<p><strong>包含 (include)</strong>：</p>
<ul>
<li>种子名称或副标题包含关键字或匹配正则时才下载</li>
<li>支持正则表达式</li>
</ul>
</li>
<li>
<p><strong>排除 (exclude)</strong>：</p>
<ul>
<li>种子名称或副标题包含关键字或匹配正则时不下载</li>
<li>支持正则表达式</li>
</ul>
</li>
</ol>
<h4 id="速度限制" tabindex="-1"><a class="header-anchor" href="#速度限制"><span>速度限制</span></a></h4>
<ol start="11">
<li>
<p><strong>上传限速(KB/s) (upSpeed)</strong>：</p>
<ul>
<li>添加下载后限制种子的上传速度</li>
</ul>
</li>
<li>
<p><strong>下载限速(KB/s) (dlSpeed)</strong>：</p>
<ul>
<li>添加下载后限制种子的下载速度</li>
</ul>
</li>
</ol>
<h4 id="大小过滤" tabindex="-1"><a class="header-anchor" href="#大小过滤"><span>大小过滤</span></a></h4>
<ol start="13">
<li>
<p><strong>最小种子大小(GB) (minSize)</strong>：</p>
<ul>
<li>大于等于该值的种子才会下载</li>
</ul>
</li>
<li>
<p><strong>最大种子大小(GB) (maxSize)</strong>：</p>
<ul>
<li>小于等于该值的种子才会下载</li>
</ul>
</li>
</ol>
<h4 id="做种人数过滤" tabindex="-1"><a class="header-anchor" href="#做种人数过滤"><span>做种人数过滤</span></a></h4>
<ol start="15">
<li>
<p><strong>最小做种人数 (minSeeder)</strong>：</p>
<ul>
<li>大于等于该值的种子才会下载</li>
</ul>
</li>
<li>
<p><strong>最大做种人数 (maxSeeder)</strong>：</p>
<ul>
<li>小于等于该值的种子才会下载</li>
</ul>
</li>
</ol>
<h4 id="发布时间过滤" tabindex="-1"><a class="header-anchor" href="#发布时间过滤"><span>发布时间过滤</span></a></h4>
<ol start="17">
<li>
<p><strong>最小发布时间(小时) (minPubDate)</strong>：</p>
<ul>
<li>发布时间大于等于该值的种子才会下载</li>
</ul>
</li>
<li>
<p><strong>最大发布时间(小时) (maxPubDate)</strong>：</p>
<ul>
<li>发布时间小于等于该值的种子才会下载</li>
</ul>
</li>
</ol>
<h4 id="通知设置" tabindex="-1"><a class="header-anchor" href="#通知设置"><span>通知设置</span></a></h4>
<ol start="19">
<li><strong>消息推送 (notice)</strong>：
<ul>
<li>开启后推送当前任务的执行情况</li>
</ul>
</li>
</ol>
<h2 id="📖-使用说明" tabindex="-1"><a class="header-anchor" href="#📖-使用说明"><span>📖 使用说明</span></a></h2>
<h3 id="执行流程" tabindex="-1"><a class="header-anchor" href="#执行流程"><span>执行流程</span></a></h3>
<ol>
<li>
<p><strong>RSS获取</strong>：</p>
<ul>
<li>从配置的RSS地址获取种子列表</li>
<li>解析种子信息（名称、大小、做种人数等）</li>
</ul>
</li>
<li>
<p><strong>条件过滤</strong>：</p>
<ul>
<li>应用所有配置的过滤条件</li>
<li>检查下载器当前状态是否满足限制</li>
</ul>
</li>
<li>
<p><strong>种子下载</strong>：</p>
<ul>
<li>下载符合条件的种子到下载器</li>
<li>设置保存目录和限速参数</li>
<li>添加指定的标签</li>
</ul>
</li>
<li>
<p><strong>状态监控</strong>：</p>
<ul>
<li>监控下载器的速度和体积</li>
<li>发送执行结果通知（如开启）</li>
</ul>
</li>
</ol>
<h3 id="定时任务配置" tabindex="-1"><a class="header-anchor" href="#定时任务配置"><span>定时任务配置</span></a></h3>
<h4 id="cron表达式示例" tabindex="-1"><a class="header-anchor" href="#cron表达式示例"><span>Cron表达式示例</span></a></h4>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code class="language-bash"><span class="line"><span class="token comment"># 每小时执行一次</span></span>
<span class="line"><span class="token number">0</span> * * * *</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 每30分钟执行一次</span></span>
<span class="line">*/30 * * * *</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 每天的特定时间执行</span></span>
<span class="line"><span class="token number">0</span> <span class="token number">2,8</span>,14,20 * * *</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 仅在夜间执行（避开高峰）</span></span>
<span class="line"><span class="token number">0</span> <span class="token number">1</span>-6 * * *</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>📖 <strong>详细说明</strong>：关于Cron表达式的完整语法和更多示例，请参考：<a href="/docs/other/cron_rule">Cron表达式说明文档</a></p>
</blockquote>
<h3 id="配置示例" tabindex="-1"><a class="header-anchor" href="#配置示例"><span>配置示例</span></a></h3>
<h4 id="基础刷流配置" tabindex="-1"><a class="header-anchor" href="#基础刷流配置"><span>基础刷流配置</span></a></h4>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code class="language-text"><span class="line">站点: PT站点A</span>
<span class="line">周期: 0 * * * * (每小时)</span>
<span class="line">下载器: qBittorrent</span>
<span class="line">保存目录: /downloads/brush/</span>
<span class="line">标签: brush,auto</span>
<span class="line">保种体积: 100GB</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="高级过滤配置" tabindex="-1"><a class="header-anchor" href="#高级过滤配置"><span>高级过滤配置</span></a></h4>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code class="language-text"><span class="line">最小种子大小: 1GB</span>
<span class="line">最大种子大小: 10GB</span>
<span class="line">最小做种人数: 5</span>
<span class="line">最大做种人数: 50</span>
<span class="line">促销: 免费</span>
<span class="line">包含: 1080p|4K</span>
<span class="line">排除: CAM|TS|枪版</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="操作功能" tabindex="-1"><a class="header-anchor" href="#操作功能"><span>操作功能</span></a></h3>
<h4 id="运行一次" tabindex="-1"><a class="header-anchor" href="#运行一次"><span>运行一次</span></a></h4>
<ul>
<li>立即执行一次刷流任务</li>
<li>不受定时任务设置影响</li>
<li>可用于测试配置或手动刷流</li>
</ul>
<h2 id="⚠️-注意事项" tabindex="-1"><a class="header-anchor" href="#⚠️-注意事项"><span>⚠️ 注意事项</span></a></h2>
<h3 id="使用警告" tabindex="-1"><a class="header-anchor" href="#使用警告"><span>使用警告</span></a></h3>
<p>⚠️ <strong>重要提醒</strong>：刷流行为可能违反PT站点的使用条款，使用本插件存在账号被封禁的风险！</p>
<h3 id="使用建议" tabindex="-1"><a class="header-anchor" href="#使用建议"><span>使用建议</span></a></h3>
<ol>
<li>
<p><strong>标签管理</strong>：</p>
<ul>
<li><strong>强烈建议设置标签</strong>，否则部分业务会失效</li>
<li>通过标签区分刷流种子和正常种子</li>
<li>便于后续的删种和管理操作</li>
</ul>
</li>
<li>
<p><strong>合理配置</strong>：</p>
<ul>
<li>设置合理的体积限制避免存储溢出</li>
<li>控制同时下载数量避免影响正常使用</li>
<li>根据网络环境设置适当的速度限制</li>
</ul>
</li>
<li>
<p><strong>安全策略</strong>：</p>
<ul>
<li>避免过于激进的刷流设置</li>
<li>定期检查和调整配置参数</li>
<li>关注站点的规则变化</li>
</ul>
</li>
</ol>
<h3 id="重要提醒" tabindex="-1"><a class="header-anchor" href="#重要提醒"><span>重要提醒</span></a></h3>
<ol>
<li>
<p><strong>相同种子保护</strong>：</p>
<ul>
<li>相同种子5分钟内不会重复下载</li>
<li>请控制刷流频率避免资源浪费</li>
</ul>
</li>
<li>
<p><strong>目录同步</strong>：</p>
<ul>
<li>需要转移到媒体库的请自行配置目录同步</li>
<li>刷流种子通常不需要媒体库管理</li>
</ul>
</li>
<li>
<p><strong>删种配合</strong>：</p>
<ul>
<li>配合自动删种插件使用</li>
<li>通过标签进行自动化的删种管理</li>
</ul>
</li>
</ol>
<h3 id="故障排除" tabindex="-1"><a class="header-anchor" href="#故障排除"><span>故障排除</span></a></h3>
<ol>
<li>
<p><strong>种子不下载</strong>：</p>
<ul>
<li>检查过滤条件是否过于严格</li>
<li>确认RSS地址是否正确</li>
<li>验证站点连接状态</li>
</ul>
</li>
<li>
<p><strong>下载器速度异常</strong>：</p>
<ul>
<li>检查速度限制设置</li>
<li>确认下载器连接正常</li>
<li>验证保存目录权限</li>
</ul>
</li>
<li>
<p><strong>体积超限</strong>：</p>
<ul>
<li>检查保种体积设置</li>
<li>清理不需要的种子</li>
<li>调整过滤条件</li>
</ul>
</li>
</ol>
<h2 id="📊-使用效果" tabindex="-1"><a class="header-anchor" href="#📊-使用效果"><span>📊 使用效果</span></a></h2>
<h3 id="刷流统计" tabindex="-1"><a class="header-anchor" href="#刷流统计"><span>刷流统计</span></a></h3>
<ul>
<li><strong>添加种子数</strong>：成功添加到下载器的种子数量</li>
<li><strong>过滤种子数</strong>：被过滤条件排除的种子数量</li>
<li><strong>当前体积</strong>：刷流任务的总保种体积</li>
<li><strong>速度状态</strong>：下载器的实时上传下载速度</li>
</ul>
<h3 id="管理效果" tabindex="-1"><a class="header-anchor" href="#管理效果"><span>管理效果</span></a></h3>
<ul>
<li><strong>自动化刷流</strong>：无需手动选择和下载种子</li>
<li><strong>精确控制</strong>：通过多维度条件精确控制刷流行为</li>
<li><strong>安全保护</strong>：通过体积和速度限制保护系统资源</li>
</ul>
<h2 id="🔗-相关链接" tabindex="-1"><a class="header-anchor" href="#🔗-相关链接"><span>🔗 相关链接</span></a></h2>
<ul>
<li><RouteLink to="/docs/cultivation_secrets/main/">修仙秘籍主页</RouteLink></li>
<li><a href="/docs/other/cron_rule">Cron表达式说明</a></li>
<li><RouteLink to="/docs/cultivation_secrets/auto_delete_torrent/">自动删种</RouteLink></li>
<li><RouteLink to="/docs/cultivation_secrets/downloader_site_tag/">下载器站点标签</RouteLink></li>
</ul>
<hr>
<p>⚠️ <strong>免责声明</strong>：刷流功能仅供技术研究使用，使用者需自行承担相关风险和法律责任。请遵守相关PT站点的使用条款。</p>
</div></template>


