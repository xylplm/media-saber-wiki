<template><div><h1 id="🌩️-cloudflare-ip优选" tabindex="-1"><a class="header-anchor" href="#🌩️-cloudflare-ip优选"><span>🌩️ Cloudflare IP优选</span></a></h1>
<p><strong>Cloudflare IP优选</strong> 是一个用于测试Cloudflare CDN延迟和速度，自动优选最快IP的插件。通过定期测试，为指定域名选择最优的Cloudflare节点IP，提升网络访问速度。</p>
<h2 id="⚙️-功能特点" tabindex="-1"><a class="header-anchor" href="#⚙️-功能特点"><span>⚙️ 功能特点</span></a></h2>
<h3 id="🚀-智能优选" tabindex="-1"><a class="header-anchor" href="#🚀-智能优选"><span>🚀 智能优选</span></a></h3>
<ul>
<li><strong>延迟测试</strong>：测试Cloudflare CDN节点的网络延迟</li>
<li><strong>速度测试</strong>：测试下载速度选择最快节点</li>
<li><strong>自动优选</strong>：根据测试结果自动选择最优IP</li>
<li><strong>Hosts更新</strong>：自动更新系统Hosts文件</li>
</ul>
<h3 id="🌐-网络优化" tabindex="-1"><a class="header-anchor" href="#🌐-网络优化"><span>🌐 网络优化</span></a></h3>
<ul>
<li><strong>CDN加速</strong>：为网站选择最优CDN节点</li>
<li><strong>访问提速</strong>：显著提升Cloudflare网站访问速度</li>
<li><strong>智能切换</strong>：根据网络状况动态调整IP</li>
<li><strong>IPv6支持</strong>：支持IPv4和IPv6双栈优选</li>
</ul>
<h2 id="🚀-配置指南" tabindex="-1"><a class="header-anchor" href="#🚀-配置指南"><span>🚀 配置指南</span></a></h2>
<h3 id="基础配置" tabindex="-1"><a class="header-anchor" href="#基础配置"><span>基础配置</span></a></h3>
<ol>
<li>
<p><strong>优选域名设置</strong>：</p>
<ul>
<li>在&quot;优选域名&quot;框中输入需要优选的域名</li>
<li>每行一个域名，支持多个域名</li>
<li>域名前后不能有空格</li>
</ul>
</li>
<li>
<p><strong>定时任务设置</strong>：</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code class="language-text"><span class="line">0 6 * * *     # 每天早上6点优选</span>
<span class="line">0 */12 * * *  # 每12小时优选一次</span>
<span class="line">0 3 * * 0     # 每周日凌晨3点优选</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p><strong>优选参数</strong>：</p>
<ul>
<li><strong>IPv6模式</strong>：开启后优选IPv6地址</li>
<li><strong>重装选项</strong>：每次重新下载CloudflareSpeedTest工具</li>
<li><strong>运行通知</strong>：开启后发送优选结果通知</li>
</ul>
</li>
</ol>
<h3 id="高级配置" tabindex="-1"><a class="header-anchor" href="#高级配置"><span>高级配置</span></a></h3>
<ol>
<li>
<p><strong>高级参数设置</strong>：</p>
<ul>
<li><strong>-dd参数</strong>：不测试下载速度，只测试延迟</li>
<li><strong>-t 1参数</strong>：只测试一遍</li>
<li><strong>-n 200参数</strong>：测试200个IP</li>
<li><strong>-tl 300参数</strong>：延迟超时300毫秒</li>
</ul>
</li>
<li>
<p><strong>域名配置要求</strong>：</p>
<ul>
<li>域名必须使用Cloudflare CDN</li>
<li>需要与Hosts配置一致</li>
<li>确保域名格式正确</li>
</ul>
</li>
</ol>
<h2 id="📖-使用说明" tabindex="-1"><a class="header-anchor" href="#📖-使用说明"><span>📖 使用说明</span></a></h2>
<h3 id="优选流程" tabindex="-1"><a class="header-anchor" href="#优选流程"><span>优选流程</span></a></h3>
<ol>
<li>
<p><strong>工具准备</strong>：</p>
<ul>
<li>下载CloudflareSpeedTest工具</li>
<li>检查工具版本和兼容性</li>
<li>准备测试参数</li>
</ul>
</li>
<li>
<p><strong>IP测试</strong>：</p>
<ul>
<li>获取Cloudflare IP段</li>
<li>批量测试IP延迟和速度</li>
<li>筛选出最优IP列表</li>
</ul>
</li>
<li>
<p><strong>结果应用</strong>：</p>
<ul>
<li>更新系统Hosts文件</li>
<li>应用最优IP配置</li>
<li>发送优选结果通知</li>
</ul>
</li>
</ol>
<h3 id="域名配置示例" tabindex="-1"><a class="header-anchor" href="#域名配置示例"><span>域名配置示例</span></a></h3>
<p><strong>正确格式</strong>：</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code class="language-text"><span class="line">example.com</span>
<span class="line">cdn.example.com</span>
<span class="line">api.example.com</span>
<span class="line">static.example.com</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>注意事项</strong>：</p>
<ul>
<li>每行一个域名</li>
<li>域名前后不要有空格</li>
<li>不要包含协议前缀（http://、https://）</li>
<li>确保域名使用Cloudflare CDN</li>
</ul>
<h3 id="定时任务配置" tabindex="-1"><a class="header-anchor" href="#定时任务配置"><span>定时任务配置</span></a></h3>
<p>合理设置优选频率：</p>
<blockquote>
<p>📖 <strong>详细说明</strong>：关于Cron表达式的完整语法和更多示例，请参考：<a href="/docs/other/cron_rule">Cron表达式说明文档</a></p>
</blockquote>
<p><strong>推荐频率</strong>：</p>
<ul>
<li><strong>每日优选</strong>：<code v-pre>0 6 * * *</code> - 每天早上6点</li>
<li><strong>高频优选</strong>：<code v-pre>0 */12 * * *</code> - 每12小时</li>
<li><strong>每周优选</strong>：<code v-pre>0 3 * * 0</code> - 每周日凌晨3点</li>
</ul>
<h3 id="手动操作" tabindex="-1"><a class="header-anchor" href="#手动操作"><span>手动操作</span></a></h3>
<p><strong>运行一次</strong>：</p>
<ul>
<li>点击配置页面的&quot;运行一次&quot;按钮</li>
<li>手动触发一次IP优选操作</li>
<li>查看优选结果和应用效果</li>
</ul>
<h2 id="⚙️-配置参数" tabindex="-1"><a class="header-anchor" href="#⚙️-配置参数"><span>⚙️ 配置参数</span></a></h2>
<h3 id="优选设置" tabindex="-1"><a class="header-anchor" href="#优选设置"><span>优选设置</span></a></h3>
<ol>
<li>
<p><strong>优选周期</strong>：</p>
<ul>
<li>使用Cron表达式设置定时优选</li>
<li>支持5位cron表达式格式</li>
<li>参考：https://tool.lu/crontab/</li>
</ul>
</li>
<li>
<p><strong>优选域名</strong>：</p>
<ul>
<li>多行文本输入框</li>
<li>每行一个域名</li>
<li>必须与Hosts配置一致</li>
</ul>
</li>
<li>
<p><strong>网络模式</strong>：</p>
<ul>
<li><strong>IPv4模式</strong>：优选IPv4地址（默认）</li>
<li><strong>IPv6模式</strong>：优选IPv6地址（测速时间较长）</li>
</ul>
</li>
</ol>
<h3 id="高级选项" tabindex="-1"><a class="header-anchor" href="#高级选项"><span>高级选项</span></a></h3>
<ol>
<li>
<p><strong>高级参数</strong>：</p>
<ul>
<li>传递给CloudflareSpeedTest的额外参数</li>
<li>常用参数：-dd（不测下载）、-t 1（测试一次）</li>
<li>非特殊需求可不填</li>
</ul>
</li>
<li>
<p><strong>重装设置</strong>：</p>
<ul>
<li><strong>每次重装</strong>：重新下载最新版本工具</li>
<li><strong>使用缓存</strong>：使用已下载的工具（推荐）</li>
</ul>
</li>
<li>
<p><strong>通知设置</strong>：</p>
<ul>
<li><strong>运行通知</strong>：优选完成后发送通知</li>
<li><strong>错误通知</strong>：优选失败时发送警告</li>
</ul>
</li>
</ol>
<h2 id="⚠️-注意事项" tabindex="-1"><a class="header-anchor" href="#⚠️-注意事项"><span>⚠️ 注意事项</span></a></h2>
<h3 id="使用要求" tabindex="-1"><a class="header-anchor" href="#使用要求"><span>使用要求</span></a></h3>
<ol>
<li>
<p><strong>域名要求</strong>：</p>
<ul>
<li>域名必须接入Cloudflare CDN</li>
<li>确保域名可以正常解析</li>
<li>域名格式必须正确</li>
</ul>
</li>
<li>
<p><strong>网络环境</strong>：</p>
<ul>
<li>确保网络连接稳定</li>
<li>避免在网络高峰期测试</li>
<li>考虑代理和防火墙影响</li>
</ul>
</li>
<li>
<p><strong>系统权限</strong>：</p>
<ul>
<li>需要修改Hosts文件的权限</li>
<li>确保有足够的磁盘空间</li>
<li>检查系统防病毒软件设置</li>
</ul>
</li>
</ol>
<h3 id="性能考虑" tabindex="-1"><a class="header-anchor" href="#性能考虑"><span>性能考虑</span></a></h3>
<ol>
<li>
<p><strong>测试时间</strong>：</p>
<ul>
<li>IPv4测试通常需要5-10分钟</li>
<li>IPv6测试时间会更长</li>
<li>避免频繁测试影响网络</li>
</ul>
</li>
<li>
<p><strong>系统资源</strong>：</p>
<ul>
<li>测试过程会占用一定CPU和网络</li>
<li>建议在系统空闲时执行</li>
<li>监控系统资源使用情况</li>
</ul>
</li>
</ol>
<h3 id="故障排除" tabindex="-1"><a class="header-anchor" href="#故障排除"><span>故障排除</span></a></h3>
<ol>
<li>
<p><strong>优选失败</strong>：</p>
<ul>
<li>检查网络连接状态</li>
<li>确认域名配置正确</li>
<li>查看详细错误日志</li>
</ul>
</li>
<li>
<p><strong>工具下载失败</strong>：</p>
<ul>
<li>检查网络连接</li>
<li>尝试手动下载工具</li>
<li>关闭&quot;每次重装&quot;选项</li>
</ul>
</li>
<li>
<p><strong>Hosts更新失败</strong>：</p>
<ul>
<li>检查文件权限</li>
<li>确认Hosts文件路径</li>
<li>验证系统安全软件设置</li>
</ul>
</li>
</ol>
<h2 id="📊-优选结果" tabindex="-1"><a class="header-anchor" href="#📊-优选结果"><span>📊 优选结果</span></a></h2>
<h3 id="测试报告" tabindex="-1"><a class="header-anchor" href="#测试报告"><span>测试报告</span></a></h3>
<ul>
<li><strong>最优IP</strong>：延迟最低的IP地址</li>
<li><strong>平均延迟</strong>：所有测试IP的平均延迟</li>
<li><strong>速度结果</strong>：下载速度测试结果</li>
<li><strong>更新状态</strong>：Hosts文件更新状态</li>
</ul>
<h3 id="效果评估" tabindex="-1"><a class="header-anchor" href="#效果评估"><span>效果评估</span></a></h3>
<ul>
<li><strong>访问速度提升</strong>：优选前后速度对比</li>
<li><strong>延迟降低幅度</strong>：网络延迟改善情况</li>
<li><strong>稳定性评估</strong>：IP连接稳定性分析</li>
</ul>
<h2 id="🔗-相关链接" tabindex="-1"><a class="header-anchor" href="#🔗-相关链接"><span>🔗 相关链接</span></a></h2>
<ul>
<li><RouteLink to="/docs/cultivation_secrets/main/">修仙秘籍主页</RouteLink></li>
<li><a href="/docs/other/cron_rule">Cron表达式说明</a></li>
<li><RouteLink to="/docs/cultivation_secrets/custom_hosts/">自定义Hosts</RouteLink></li>
<li><RouteLink to="/docs/cultivation_secrets/mi_hosts/">小米路由Hosts</RouteLink></li>
</ul>
<hr>
<p>🎯 <strong>提示</strong>：Cloudflare IP优选可以显著提升网站访问速度，建议定期运行以保持最佳效果。</p>
</div></template>


