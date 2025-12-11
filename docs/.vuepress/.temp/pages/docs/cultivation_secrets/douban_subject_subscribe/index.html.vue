<template><div><h1 id="📊-豆瓣榜单订阅" tabindex="-1"><a class="header-anchor" href="#📊-豆瓣榜单订阅"><span>📊 豆瓣榜单订阅</span></a></h1>
<p><strong>豆瓣榜单订阅</strong> 是一个自动从豆瓣各类影视榜单中发现并添加未入库内容订阅的插件。通过监控预设榜单和自定义榜单，自动发现优质影视内容并加入订阅。</p>
<h2 id="⚙️-功能特点" tabindex="-1"><a class="header-anchor" href="#⚙️-功能特点"><span>⚙️ 功能特点</span></a></h2>
<h3 id="📈-榜单订阅" tabindex="-1"><a class="header-anchor" href="#📈-榜单订阅"><span>📈 榜单订阅</span></a></h3>
<ul>
<li><strong>预设榜单</strong>：支持多种豆瓣影视榜单</li>
<li><strong>自定义榜单</strong>：支持添加自定义豆瓣榜单链接</li>
<li><strong>分页获取</strong>：可设置获取榜单前N页内容</li>
<li><strong>智能订阅</strong>：自动跳过已入库的内容</li>
</ul>
<h3 id="🎯-订阅管理" tabindex="-1"><a class="header-anchor" href="#🎯-订阅管理"><span>🎯 订阅管理</span></a></h3>
<ul>
<li><strong>定时检查</strong>：支持定时自动检查榜单更新</li>
<li><strong>批量处理</strong>：一次性处理多个榜单</li>
<li><strong>数量控制</strong>：建议控制在3个榜单以内，获取前3页以内</li>
</ul>
<h2 id="🚀-配置指南" tabindex="-1"><a class="header-anchor" href="#🚀-配置指南"><span>🚀 配置指南</span></a></h2>
<h3 id="📋-配置参数" tabindex="-1"><a class="header-anchor" href="#📋-配置参数"><span>📋 配置参数</span></a></h3>
<p>插件提供以下配置选项：</p>
<h3 id="⚙️-基础设置" tabindex="-1"><a class="header-anchor" href="#⚙️-基础设置"><span>⚙️ 基础设置</span></a></h3>
<ol>
<li>
<p><strong>周期 (cron)</strong>：</p>
<ul>
<li>设置定时检查榜单的执行周期</li>
<li>使用Cron表达式格式</li>
<li>示例：<code v-pre>0 * * * *</code> 每小时执行一次</li>
<li>可留空仅使用手动执行</li>
</ul>
</li>
<li>
<p><strong>榜单 (subjects)</strong>：</p>
<ul>
<li>选择要监控的豆瓣榜单</li>
<li>支持多选，建议控制在3个榜单以内</li>
<li>从预设的豆瓣榜单列表中选择</li>
<li>可配合自定义榜单使用</li>
</ul>
</li>
<li>
<p><strong>获取前 n 页 (maxPage)</strong>：</p>
<ul>
<li>设置每个榜单获取的页数</li>
<li>建议控制在3页以内</li>
<li>填写数字，如：1、2、3</li>
<li>页数越多获取的内容越多</li>
</ul>
</li>
<li>
<p><strong>自定义榜单 (customSubjects)</strong>：</p>
<ul>
<li>添加自定义的豆瓣榜单链接</li>
<li>一行一个榜单链接</li>
<li>与预设榜单配合使用</li>
<li>总榜单数量建议控制在3个以内</li>
</ul>
</li>
</ol>
<h3 id="🔧-操作功能" tabindex="-1"><a class="header-anchor" href="#🔧-操作功能"><span>🔧 操作功能</span></a></h3>
<ol start="5">
<li><strong>运行一次 (run)</strong>：
<ul>
<li>手动触发一次榜单检查</li>
<li>立即执行榜单获取和订阅</li>
<li>不受定时任务设置影响</li>
</ul>
</li>
</ol>
<h3 id="⚠️-重要提示" tabindex="-1"><a class="header-anchor" href="#⚠️-重要提示"><span>⚠️ 重要提示</span></a></h3>
<ol start="6">
<li><strong>温馨提示</strong>：
<ul>
<li><strong>如需订阅豆瓣想看、爱看列表</strong>，需要先配置豆瓣Cookie</li>
<li>配置路径：<strong>系统配置 -&gt; 服务配置 -&gt; 豆瓣 Cookie</strong></li>
<li>未配置Cookie将无法获取个人榜单</li>
</ul>
</li>
</ol>
<h2 id="📖-使用说明" tabindex="-1"><a class="header-anchor" href="#📖-使用说明"><span>📖 使用说明</span></a></h2>
<h3 id="榜单类型" tabindex="-1"><a class="header-anchor" href="#榜单类型"><span>榜单类型</span></a></h3>
<h4 id="预设榜单" tabindex="-1"><a class="header-anchor" href="#预设榜单"><span>预设榜单</span></a></h4>
<p>插件提供多种预设的豆瓣榜单，包括但不限于：</p>
<ul>
<li><strong>电影榜单</strong>：豆瓣电影Top250、热门电影、新片榜等</li>
<li><strong>电视剧榜单</strong>：热门电视剧、高分美剧、经典剧集等</li>
<li><strong>综合榜单</strong>：年度榜单、分类榜单等</li>
</ul>
<h4 id="自定义榜单" tabindex="-1"><a class="header-anchor" href="#自定义榜单"><span>自定义榜单</span></a></h4>
<p>可以添加任意豆瓣榜单链接，格式示例：</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code class="language-text"><span class="line">https://movie.douban.com/chart</span>
<span class="line">https://movie.douban.com/tv/</span>
<span class="line">https://movie.douban.com/annual/2023/</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="豆瓣cookie配置" tabindex="-1"><a class="header-anchor" href="#豆瓣cookie配置"><span>豆瓣Cookie配置</span></a></h3>
<h4 id="获取cookie步骤" tabindex="-1"><a class="header-anchor" href="#获取cookie步骤"><span>获取Cookie步骤</span></a></h4>
<ol>
<li>
<p><strong>登录豆瓣</strong>：</p>
<ul>
<li>使用浏览器登录豆瓣网站</li>
<li>确保登录状态正常</li>
</ul>
</li>
<li>
<p><strong>获取Cookie</strong>：</p>
<ul>
<li>按F12打开开发者工具</li>
<li>在Application标签页找到Cookies</li>
<li>复制豆瓣相关的Cookie信息</li>
</ul>
</li>
<li>
<p><strong>配置系统</strong>：</p>
<ul>
<li>进入 <strong>系统配置 -&gt; 服务配置 -&gt; 豆瓣 Cookie</strong></li>
<li>粘贴获取的Cookie信息</li>
<li>保存配置</li>
</ul>
</li>
</ol>
<h4 id="cookie用途" tabindex="-1"><a class="header-anchor" href="#cookie用途"><span>Cookie用途</span></a></h4>
<ul>
<li><strong>个人榜单</strong>：获取想看、爱看等个人榜单</li>
<li><strong>完整信息</strong>：获取更详细的影片信息</li>
<li><strong>避免限制</strong>：减少访问频率限制</li>
</ul>
<h3 id="定时任务配置" tabindex="-1"><a class="header-anchor" href="#定时任务配置"><span>定时任务配置</span></a></h3>
<h4 id="cron表达式示例" tabindex="-1"><a class="header-anchor" href="#cron表达式示例"><span>Cron表达式示例</span></a></h4>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code class="language-bash"><span class="line"><span class="token comment"># 每小时检查一次</span></span>
<span class="line"><span class="token number">0</span> * * * *</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 每天上午10点检查</span></span>
<span class="line"><span class="token number">0</span> <span class="token number">10</span> * * *</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 每周一上午9点检查</span></span>
<span class="line"><span class="token number">0</span> <span class="token number">9</span> * * <span class="token number">1</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 每6小时检查一次</span></span>
<span class="line"><span class="token number">0</span> */6 * * *</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>📖 <strong>详细说明</strong>：关于Cron表达式的完整语法和更多示例，请参考：<a href="/docs/other/cron_rule">Cron表达式说明文档</a></p>
</blockquote>
<h3 id="使用步骤" tabindex="-1"><a class="header-anchor" href="#使用步骤"><span>使用步骤</span></a></h3>
<h4 id="首次配置" tabindex="-1"><a class="header-anchor" href="#首次配置"><span>首次配置</span></a></h4>
<ol>
<li>
<p><strong>选择榜单</strong>：</p>
<ul>
<li>从预设榜单中选择感兴趣的类型</li>
<li>建议选择2-3个榜单避免过量订阅</li>
</ul>
</li>
<li>
<p><strong>设置页数</strong>：</p>
<ul>
<li>根据需求设置获取页数</li>
<li>建议从1-2页开始测试</li>
</ul>
</li>
<li>
<p><strong>配置定时任务</strong>：</p>
<ul>
<li>设置合适的检查频率</li>
<li>建议每天或每周检查一次</li>
</ul>
</li>
<li>
<p><strong>测试运行</strong>：</p>
<ul>
<li>使用&quot;运行一次&quot;功能测试</li>
<li>检查订阅结果是否符合预期</li>
</ul>
</li>
</ol>
<h4 id="高级配置" tabindex="-1"><a class="header-anchor" href="#高级配置"><span>高级配置</span></a></h4>
<ol>
<li>
<p><strong>添加自定义榜单</strong>：</p>
<ul>
<li>找到感兴趣的豆瓣榜单页面</li>
<li>复制页面链接到自定义榜单中</li>
<li>每行一个链接</li>
</ul>
</li>
<li>
<p><strong>配置豆瓣Cookie</strong>（可选）：</p>
<ul>
<li>如需获取个人榜单则配置Cookie</li>
<li>按上述步骤获取并配置Cookie</li>
</ul>
</li>
<li>
<p><strong>调优设置</strong>：</p>
<ul>
<li>根据实际订阅情况调整榜单和页数</li>
<li>监控存储空间和下载情况</li>
</ul>
</li>
</ol>
<h3 id="订阅逻辑" tabindex="-1"><a class="header-anchor" href="#订阅逻辑"><span>订阅逻辑</span></a></h3>
<h4 id="内容筛选" tabindex="-1"><a class="header-anchor" href="#内容筛选"><span>内容筛选</span></a></h4>
<ol>
<li>
<p><strong>已入库检测</strong>：</p>
<ul>
<li>自动检测内容是否已存在于媒体库</li>
<li>跳过已入库的内容避免重复订阅</li>
</ul>
</li>
<li>
<p><strong>订阅创建</strong>：</p>
<ul>
<li>为未入库的内容创建订阅任务</li>
<li>自动添加到订阅列表</li>
</ul>
</li>
<li>
<p><strong>批量处理</strong>：</p>
<ul>
<li>同时处理多个榜单的内容</li>
<li>按设定页数批量获取</li>
</ul>
</li>
</ol>
<h4 id="订阅结果" tabindex="-1"><a class="header-anchor" href="#订阅结果"><span>订阅结果</span></a></h4>
<ul>
<li><strong>成功订阅</strong>：内容已添加到订阅列表</li>
<li><strong>跳过订阅</strong>：内容已存在于媒体库</li>
<li><strong>订阅失败</strong>：无法识别或获取内容信息</li>
</ul>
<h2 id="⚠️-注意事项" tabindex="-1"><a class="header-anchor" href="#⚠️-注意事项"><span>⚠️ 注意事项</span></a></h2>
<h3 id="重要限制" tabindex="-1"><a class="header-anchor" href="#重要限制"><span>重要限制</span></a></h3>
<ol>
<li>
<p><strong>数量控制</strong>：</p>
<ul>
<li><strong>榜单数量建议控制在3个以内</strong></li>
<li><strong>获取页数建议控制在3页以内</strong></li>
<li>避免过量订阅导致存储和带宽压力</li>
</ul>
</li>
<li>
<p><strong>豆瓣访问</strong>：</p>
<ul>
<li>需要稳定的网络访问豆瓣服务</li>
<li>避免过于频繁的请求</li>
<li>关注豆瓣API访问限制</li>
</ul>
</li>
<li>
<p><strong>Cookie依赖</strong>：</p>
<ul>
<li>个人榜单需要配置豆瓣Cookie</li>
<li>Cookie可能会过期需要定期更新</li>
<li>未配置Cookie只能使用公开榜单</li>
</ul>
</li>
</ol>
<h3 id="使用建议" tabindex="-1"><a class="header-anchor" href="#使用建议"><span>使用建议</span></a></h3>
<ol>
<li>
<p><strong>合理设置频率</strong>：</p>
<ul>
<li>榜单更新不频繁，建议每天或每周检查</li>
<li>避免过于频繁的检查增加服务器负担</li>
<li>根据个人需求调整检查周期</li>
</ul>
</li>
<li>
<p><strong>监控订阅结果</strong>：</p>
<ul>
<li>定期检查订阅列表和下载状态</li>
<li>及时清理不需要的订阅</li>
<li>关注存储空间使用情况</li>
</ul>
</li>
<li>
<p><strong>渐进式配置</strong>：</p>
<ul>
<li>初次使用建议从少量榜单开始</li>
<li>观察订阅效果后逐步增加</li>
<li>根据实际需求调整配置</li>
</ul>
</li>
</ol>
<h3 id="故障排除" tabindex="-1"><a class="header-anchor" href="#故障排除"><span>故障排除</span></a></h3>
<ol>
<li>
<p><strong>榜单获取失败</strong>：</p>
<ul>
<li>检查网络连接到豆瓣的状态</li>
<li>确认榜单链接是否有效</li>
<li>查看详细错误日志</li>
</ul>
</li>
<li>
<p><strong>Cookie相关问题</strong>：</p>
<ul>
<li>检查Cookie是否正确配置</li>
<li>确认Cookie是否过期</li>
<li>重新获取和配置Cookie</li>
</ul>
</li>
<li>
<p><strong>订阅异常</strong>：</p>
<ul>
<li>检查订阅系统是否正常工作</li>
<li>确认媒体库连接状态</li>
<li>验证订阅规则设置</li>
</ul>
</li>
<li>
<p><strong>重复订阅</strong>：</p>
<ul>
<li>检查已入库检测功能</li>
<li>清理重复的订阅任务</li>
<li>调整榜单和页数设置</li>
</ul>
</li>
</ol>
<h2 id="📊-使用效果" tabindex="-1"><a class="header-anchor" href="#📊-使用效果"><span>📊 使用效果</span></a></h2>
<h3 id="自动发现" tabindex="-1"><a class="header-anchor" href="#自动发现"><span>自动发现</span></a></h3>
<ul>
<li><strong>热门内容</strong>：及时发现豆瓣热门影视内容</li>
<li><strong>优质推荐</strong>：基于豆瓣评分和榜单的内容推荐</li>
<li><strong>新片更新</strong>：自动获取最新上线的影视作品</li>
<li><strong>个性化</strong>：通过自定义榜单满足个人偏好</li>
</ul>
<h3 id="订阅管理" tabindex="-1"><a class="header-anchor" href="#订阅管理"><span>订阅管理</span></a></h3>
<ul>
<li><strong>智能过滤</strong>：自动跳过已入库内容</li>
<li><strong>批量订阅</strong>：一次性添加多个优质内容</li>
<li><strong>定时更新</strong>：定期检查榜单获取新内容</li>
<li><strong>统一管理</strong>：在订阅系统中统一管理所有内容</li>
</ul>
<h2 id="🔗-相关链接" tabindex="-1"><a class="header-anchor" href="#🔗-相关链接"><span>🔗 相关链接</span></a></h2>
<ul>
<li><RouteLink to="/docs/cultivation_secrets/main/">修仙秘籍主页</RouteLink></li>
<li><a href="/docs/other/cron_rule">Cron表达式说明</a></li>
<li><RouteLink to="/docs/configuration/system_config/">系统配置说明</RouteLink></li>
</ul>
<hr>
<p>🎯 <strong>提示</strong>：建议控制榜单数量在3个以内，获取页数在3页以内，避免过量订阅。如需订阅个人榜单，请先配置豆瓣Cookie。</p>
</div></template>


