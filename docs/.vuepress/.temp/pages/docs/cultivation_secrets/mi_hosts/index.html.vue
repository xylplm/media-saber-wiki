<template><div><h1 id="📶-小米路由hosts" tabindex="-1"><a class="header-anchor" href="#📶-小米路由hosts"><span>📶 小米路由Hosts</span></a></h1>
<p><strong>小米路由Hosts</strong> 是一个专门用于将本地Hosts文件同步到小米路由器的插件，通过小米路由器官方API实现Hosts配置的自动同步，为全网设备提供域名解析优化。</p>
<h2 id="⚙️-功能特点" tabindex="-1"><a class="header-anchor" href="#⚙️-功能特点"><span>⚙️ 功能特点</span></a></h2>
<h3 id="🔄-自动同步" tabindex="-1"><a class="header-anchor" href="#🔄-自动同步"><span>🔄 自动同步</span></a></h3>
<ul>
<li><strong>官方API</strong>：基于小米路由器官方API接口进行同步</li>
<li><strong>定时同步</strong>：支持Cron表达式定时自动同步</li>
<li><strong>智能模式</strong>：支持替换模式和合并模式</li>
<li><strong>选择性同步</strong>：可选择同步全部Hosts或仅自定义Hosts部分</li>
</ul>
<h3 id="🌐-网络优化" tabindex="-1"><a class="header-anchor" href="#🌐-网络优化"><span>🌐 网络优化</span></a></h3>
<ul>
<li><strong>全网覆盖</strong>：影响连接到路由器的所有设备</li>
<li><strong>DNS加速</strong>：通过Hosts优化DNS解析速度</li>
<li><strong>广告拦截</strong>：在路由器层面拦截广告域名</li>
<li><strong>CDN优选</strong>：配合Cloudflare IP优选使用</li>
</ul>
<h2 id="🚀-配置指南" tabindex="-1"><a class="header-anchor" href="#🚀-配置指南"><span>🚀 配置指南</span></a></h2>
<h3 id="基础配置" tabindex="-1"><a class="header-anchor" href="#基础配置"><span>基础配置</span></a></h3>
<p>插件的核心配置包含以下参数：</p>
<h3 id="📋-必填参数" tabindex="-1"><a class="header-anchor" href="#📋-必填参数"><span>📋 必填参数</span></a></h3>
<ol>
<li>
<p><strong>应用ID (appId)</strong>：</p>
<ul>
<li>小米路由器API的应用标识</li>
<li>从小米路由器管理界面获取</li>
</ul>
</li>
<li>
<p><strong>设备ID (deviceId)</strong>：</p>
<ul>
<li>路由器的唯一设备标识</li>
<li>通常从路由器API响应中获取</li>
</ul>
</li>
<li>
<p><strong>客户端ID (clientId)</strong>：</p>
<ul>
<li>API客户端标识</li>
<li>用于身份验证</li>
</ul>
</li>
<li>
<p><strong>访问令牌 (token)</strong>：</p>
<ul>
<li>API访问凭证</li>
<li>从小米路由器授权获取</li>
</ul>
</li>
</ol>
<h3 id="⚙️-可选参数" tabindex="-1"><a class="header-anchor" href="#⚙️-可选参数"><span>⚙️ 可选参数</span></a></h3>
<ol>
<li>
<p><strong>作用域 (scope)</strong>：</p>
<ul>
<li>API访问权限范围</li>
<li>默认值：<code v-pre>1+1000+3</code></li>
</ul>
</li>
<li>
<p><strong>同步周期 (cron)</strong>：</p>
<ul>
<li>定时同步的Cron表达式</li>
<li>默认：<code v-pre>0 6 * * *</code>（每天早上6点）</li>
</ul>
</li>
<li>
<p><strong>读取全部hosts</strong>：</p>
<ul>
<li>开启：读取系统hosts文件的全部内容</li>
<li>关闭：仅读取通过「自定义hosts」插件添加的部分（推荐）</li>
</ul>
</li>
<li>
<p><strong>合并模式</strong>：</p>
<ul>
<li>开启：与远程hosts合并（可能导致hosts越来越大）</li>
<li>关闭：使用替换模式，覆盖远程原有hosts（推荐）</li>
</ul>
</li>
<li>
<p><strong>忽略列表</strong>：</p>
<ul>
<li>需要忽略的IP地址或域名</li>
<li>使用 <code v-pre>|</code> 分隔，例如：<code v-pre>10.10.10.1|wiki.movie-pilot.org</code></li>
</ul>
</li>
</ol>
<h2 id="📖-使用说明" tabindex="-1"><a class="header-anchor" href="#📖-使用说明"><span>📖 使用说明</span></a></h2>
<h3 id="参数获取方法" tabindex="-1"><a class="header-anchor" href="#参数获取方法"><span>参数获取方法</span></a></h3>
<p><strong>重要</strong>：以下步骤仅供参考，具体界面可能因路由器固件版本而异</p>
<ol>
<li>
<p><strong>准备工作</strong>：</p>
<ul>
<li>打开抓包工具（如Charles、Fiddler等）先不抓包</li>
<li>确保手机和电脑在同一网络</li>
</ul>
</li>
<li>
<p><strong>获取设备ID</strong>：</p>
<ul>
<li>打开米家APP，进入路由器主界面</li>
<li>启动抓包工具开始抓包</li>
<li>在路由器界面随便操作两下</li>
<li>找到类似 <code v-pre>http://路由器网关/cgi-bin/luci/api/xqsystem/init_info</code> 的请求</li>
<li>从响应中找到 <code v-pre>routerId</code> 即为 <code v-pre>deviceID</code></li>
</ul>
</li>
<li>
<p><strong>获取API参数</strong>：</p>
<ul>
<li>在浏览器中访问：<code v-pre>http://s.miwifi.com/dist/userhosts/index.html?deviceID=设备ID</code></li>
<li>登录小米账号后进入自定义hosts界面</li>
<li>按F12打开开发者工具，切换到Network标签</li>
<li>刷新页面或操作界面</li>
<li>找到 <code v-pre>https://www.gorouter.info/api-third-party/service/internal/custom_host_get</code> 请求</li>
<li>从请求参数中获取：<code v-pre>appId</code>、<code v-pre>deviceId</code>、<code v-pre>clientId</code>、<code v-pre>scope</code>、<code v-pre>token</code></li>
</ul>
</li>
</ol>
<h3 id="同步流程" tabindex="-1"><a class="header-anchor" href="#同步流程"><span>同步流程</span></a></h3>
<ol>
<li>
<p><strong>数据读取</strong>：</p>
<ul>
<li>根据配置读取本地hosts（全部或自定义部分）</li>
<li>获取远程路由器当前hosts配置</li>
</ul>
</li>
<li>
<p><strong>数据处理</strong>：</p>
<ul>
<li>应用忽略列表过滤</li>
<li>验证IP地址和域名格式</li>
<li>根据合并模式处理数据</li>
</ul>
</li>
<li>
<p><strong>同步执行</strong>：</p>
<ul>
<li>通过API推送hosts到路由器</li>
<li>验证同步结果</li>
<li>发送通知（如已开启）</li>
</ul>
</li>
</ol>
<h3 id="同步模式详解" tabindex="-1"><a class="header-anchor" href="#同步模式详解"><span>同步模式详解</span></a></h3>
<h4 id="替换模式-推荐" tabindex="-1"><a class="header-anchor" href="#替换模式-推荐"><span>替换模式（推荐）</span></a></h4>
<ul>
<li><strong>工作方式</strong>：完全替换路由器上的hosts</li>
<li><strong>适用场景</strong>：希望路由器hosts与本地完全一致</li>
<li><strong>优点</strong>：hosts文件保持简洁，不会无限增长</li>
<li><strong>注意</strong>：会覆盖路由器上的原有hosts</li>
</ul>
<h4 id="合并模式" tabindex="-1"><a class="header-anchor" href="#合并模式"><span>合并模式</span></a></h4>
<ul>
<li><strong>工作方式</strong>：与路由器现有hosts合并</li>
<li><strong>适用场景</strong>：需要保留路由器原有hosts设置</li>
<li><strong>缺点</strong>：hosts文件可能越来越大，需要定期清理</li>
<li><strong>注意</strong>：相同域名以本地hosts为准</li>
</ul>
<h2 id="⚙️-定时任务配置" tabindex="-1"><a class="header-anchor" href="#⚙️-定时任务配置"><span>⚙️ 定时任务配置</span></a></h2>
<h3 id="cron表达式示例" tabindex="-1"><a class="header-anchor" href="#cron表达式示例"><span>Cron表达式示例</span></a></h3>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code class="language-bash"><span class="line"><span class="token comment"># 每天早上6点同步</span></span>
<span class="line"><span class="token number">0</span> <span class="token number">6</span> * * *</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 每6小时同步一次</span></span>
<span class="line"><span class="token number">0</span> */6 * * *</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 每周日凌晨4点同步</span></span>
<span class="line"><span class="token number">0</span> <span class="token number">4</span> * * <span class="token number">0</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 每月1日凌晨2点同步</span></span>
<span class="line"><span class="token number">0</span> <span class="token number">2</span> <span class="token number">1</span> * *</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>📖 <strong>详细说明</strong>：关于Cron表达式的完整语法和更多示例，请参考：<a href="/docs/other/cron_rule">Cron表达式说明文档</a></p>
</blockquote>
<h2 id="⚠️-注意事项" tabindex="-1"><a class="header-anchor" href="#⚠️-注意事项"><span>⚠️ 注意事项</span></a></h2>
<h3 id="使用前提" tabindex="-1"><a class="header-anchor" href="#使用前提"><span>使用前提</span></a></h3>
<ol>
<li>
<p><strong>路由器要求</strong>：</p>
<ul>
<li>小米路由器系列产品</li>
<li>支持官方API接口的固件版本</li>
<li>已开启自定义hosts功能</li>
</ul>
</li>
<li>
<p><strong>网络要求</strong>：</p>
<ul>
<li>Media Saber能访问互联网</li>
<li>稳定的网络连接</li>
<li>能访问小米路由器API服务</li>
</ul>
</li>
</ol>
<h3 id="重要提醒" tabindex="-1"><a class="header-anchor" href="#重要提醒"><span>重要提醒</span></a></h3>
<ol>
<li>
<p><strong>API限制</strong>：</p>
<ul>
<li>小米路由器API可能有调用频率限制</li>
<li>建议设置合理的同步间隔</li>
</ul>
</li>
<li>
<p><strong>Token有效期</strong>：</p>
<ul>
<li>访问令牌可能会过期</li>
<li>如果同步失败，请重新获取token</li>
</ul>
</li>
<li>
<p><strong>网络安全</strong>：</p>
<ul>
<li>妥善保管API参数，避免泄露</li>
<li>建议定期更换访问令牌</li>
</ul>
</li>
</ol>
<h3 id="故障排除" tabindex="-1"><a class="header-anchor" href="#故障排除"><span>故障排除</span></a></h3>
<ol>
<li>
<p><strong>同步失败</strong>：</p>
<ul>
<li>检查API参数是否正确</li>
<li>验证token是否过期</li>
<li>确认网络连接正常</li>
</ul>
</li>
<li>
<p><strong>获取参数困难</strong>：</p>
<ul>
<li>尝试不同的浏览器</li>
<li>清除浏览器缓存后重试</li>
<li>确保米家APP版本较新</li>
</ul>
</li>
<li>
<p><strong>DNS不生效</strong>：</p>
<ul>
<li>等待DNS缓存刷新（通常需要几分钟）</li>
<li>手动清除设备DNS缓存</li>
<li>重启路由器（如有必要）</li>
</ul>
</li>
</ol>
<h2 id="�-配套使用" tabindex="-1"><a class="header-anchor" href="#�-配套使用"><span>� 配套使用</span></a></h2>
<h3 id="推荐组合" tabindex="-1"><a class="header-anchor" href="#推荐组合"><span>推荐组合</span></a></h3>
<ol>
<li>
<p><strong>自定义Hosts + 小米路由Hosts</strong>：</p>
<ul>
<li>在本地管理hosts规则</li>
<li>自动同步到路由器生效全网</li>
</ul>
</li>
<li>
<p><strong>Cloudflare IP优选 + 小米路由Hosts</strong>：</p>
<ul>
<li>优选最快的Cloudflare IP</li>
<li>通过路由器hosts全网生效</li>
</ul>
</li>
<li>
<p><strong>广告拦截hosts + 小米路由Hosts</strong>：</p>
<ul>
<li>导入广告拦截域名列表</li>
<li>在路由器层面拦截广告请求</li>
</ul>
</li>
</ol>
<h2 id="🔗-相关链接" tabindex="-1"><a class="header-anchor" href="#🔗-相关链接"><span>🔗 相关链接</span></a></h2>
<ul>
<li><RouteLink to="/docs/cultivation_secrets/main/">修仙秘籍主页</RouteLink></li>
<li><a href="/docs/other/cron_rule">Cron表达式说明</a></li>
<li><RouteLink to="/docs/cultivation_secrets/custom_hosts/">自定义Hosts</RouteLink></li>
<li><RouteLink to="/docs/cultivation_secrets/cloudflare_ip_optimization/">Cloudflare IP优选</RouteLink></li>
</ul>
<hr>
<p>🎯 <strong>提示</strong>：小米路由Hosts同步基于官方API，无需破解路由器，相对安全稳定。</p>
</div></template>


