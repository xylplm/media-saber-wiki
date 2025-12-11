<template><div><h1 id="🌐-自定义hosts" tabindex="-1"><a class="header-anchor" href="#🌐-自定义hosts"><span>🌐 自定义Hosts</span></a></h1>
<p><strong>自定义Hosts</strong> 是一个强大的域名解析管理工具，允许用户自定义域名到IP地址的映射关系，通过直接修改系统Hosts文件来控制网络访问路径，解决网络访问问题并优化访问速度。</p>
<h2 id="⚙️-功能特点" tabindex="-1"><a class="header-anchor" href="#⚙️-功能特点"><span>⚙️ 功能特点</span></a></h2>
<h3 id="🎯-核心功能" tabindex="-1"><a class="header-anchor" href="#🎯-核心功能"><span>🎯 核心功能</span></a></h3>
<ul>
<li><strong>自定义域名解析</strong>：直接指定域名对应的IP地址</li>
<li><strong>批量规则管理</strong>：支持同时管理多条Hosts规则</li>
<li><strong>格式自动检查</strong>：实时验证Hosts规则格式正确性</li>
<li><strong>错误规则提示</strong>：自动识别并提示无效的Hosts条目</li>
<li><strong>定时自动更新</strong>：支持Cron表达式定时更新Hosts配置</li>
</ul>
<h3 id="🛠️-高级特性" tabindex="-1"><a class="header-anchor" href="#🛠️-高级特性"><span>🛠️ 高级特性</span></a></h3>
<ul>
<li><strong>Docker环境集成</strong>：自动处理Docker容器内的Hosts配置</li>
<li><strong>智能错误处理</strong>：分离有效规则和错误规则</li>
<li><strong>配置状态管理</strong>：支持一键启用/禁用功能</li>
<li><strong>实时生效控制</strong>：保存后立即生效或批量应用</li>
</ul>
<h2 id="📖-配置指南" tabindex="-1"><a class="header-anchor" href="#📖-配置指南"><span>📖 配置指南</span></a></h2>
<h3 id="📋-基础参数" tabindex="-1"><a class="header-anchor" href="#📋-基础参数"><span>📋 基础参数</span></a></h3>
<h4 id="必填参数" tabindex="-1"><a class="header-anchor" href="#必填参数"><span>必填参数</span></a></h4>
<ol>
<li>
<p><strong>启用状态 (enable)</strong>：</p>
<ul>
<li>控制自定义Hosts功能的开关</li>
<li>类型：布尔值</li>
<li><strong>true</strong>：启用自定义Hosts功能</li>
<li><strong>false</strong>：禁用自定义Hosts功能</li>
</ul>
</li>
<li>
<p><strong>Hosts规则 (hosts)</strong>：</p>
<ul>
<li>自定义的域名解析规则配置</li>
<li>类型：多行文本</li>
<li>格式：每行一条规则，<code v-pre>IP地址 域名</code></li>
<li>支持注释行（以#开头）</li>
</ul>
</li>
</ol>
<h4 id="可选参数" tabindex="-1"><a class="header-anchor" href="#可选参数"><span>可选参数</span></a></h4>
<ol start="3">
<li>
<p><strong>定时任务 (cron)</strong>：</p>
<ul>
<li>自动更新Hosts配置的时间调度</li>
<li>类型：Cron表达式</li>
<li>用途：定时获取最新的IP地址并更新Hosts</li>
<li>示例：<code v-pre>0 2 * * *</code>（每天凌晨2点执行）</li>
</ul>
</li>
<li>
<p><strong>错误Hosts (errHosts)</strong>：</p>
<ul>
<li>自动检测到的格式错误规则</li>
<li>类型：只读文本</li>
<li>用途：显示需要修正的错误规则</li>
</ul>
</li>
</ol>
<h3 id="🔧-hosts规则语法" tabindex="-1"><a class="header-anchor" href="#🔧-hosts规则语法"><span>🔧 Hosts规则语法</span></a></h3>
<h4 id="标准格式" tabindex="-1"><a class="header-anchor" href="#标准格式"><span>标准格式</span></a></h4>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code class="language-bash"><span class="line"><span class="token comment"># 基本语法：IP地址 域名 [域名2] [域名3]...</span></span>
<span class="line"><span class="token number">192.168</span>.1.100 example.com</span>
<span class="line"><span class="token number">127.0</span>.0.1 localhost local.dev</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 支持注释行</span></span>
<span class="line"><span class="token comment"># 这是一条注释，以#开头的行会被忽略</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># IPv4地址映射</span></span>
<span class="line"><span class="token number">104.16</span>.123.96 tmdb.org www.themoviedb.org</span>
<span class="line"><span class="token number">140.82</span>.112.3 github.com www.github.com</span>
<span class="line"></span>
<span class="line"><span class="token comment"># IPv6地址映射</span></span>
<span class="line">::1 localhost ip6-localhost ip6-loopback</span>
<span class="line"><span class="token number">2001</span>:4860:4860::8888 dns.google</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="格式要求" tabindex="-1"><a class="header-anchor" href="#格式要求"><span>格式要求</span></a></h4>
<ol>
<li>
<p><strong>IP地址格式</strong>：</p>
<ul>
<li>IPv4：<code v-pre>192.168.1.1</code>、<code v-pre>8.8.8.8</code></li>
<li>IPv6：<code v-pre>::1</code>、<code v-pre>2001:4860:4860::8888</code></li>
<li>不支持域名作为IP地址</li>
</ul>
</li>
<li>
<p><strong>域名格式</strong>：</p>
<ul>
<li>标准域名：<code v-pre>example.com</code>、<code v-pre>www.google.com</code></li>
<li>子域名：<code v-pre>api.example.com</code>、<code v-pre>cdn.example.com</code></li>
<li>本地域名：<code v-pre>localhost</code>、<code v-pre>local.dev</code></li>
</ul>
</li>
<li>
<p><strong>分隔符</strong>：</p>
<ul>
<li>IP地址和域名之间使用空格或制表符分隔</li>
<li>多个域名之间使用空格分隔</li>
<li>每行一条规则</li>
</ul>
</li>
<li>
<p><strong>注释语法</strong>：</p>
<ul>
<li>以<code v-pre>#</code>开头的行为注释行</li>
<li>支持行内注释：<code v-pre>192.168.1.1 example.com # 这是注释</code></li>
</ul>
</li>
</ol>
<h2 id="🚀-使用说明" tabindex="-1"><a class="header-anchor" href="#🚀-使用说明"><span>🚀 使用说明</span></a></h2>
<h3 id="📋-配置步骤" tabindex="-1"><a class="header-anchor" href="#📋-配置步骤"><span>📋 配置步骤</span></a></h3>
<h4 id="第一步-启用功能" tabindex="-1"><a class="header-anchor" href="#第一步-启用功能"><span>第一步：启用功能</span></a></h4>
<ol>
<li>
<p><strong>打开配置界面</strong>：</p>
<ul>
<li>在Media Saber管理界面进入&quot;修仙秘籍&quot;</li>
<li>找到&quot;自定义Hosts&quot;插件并点击配置</li>
</ul>
</li>
<li>
<p><strong>启用功能</strong>：</p>
<ul>
<li>勾选&quot;启用状态&quot;复选框</li>
<li>启用后才能使用自定义Hosts功能</li>
</ul>
</li>
</ol>
<h4 id="第二步-配置hosts规则" tabindex="-1"><a class="header-anchor" href="#第二步-配置hosts规则"><span>第二步：配置Hosts规则</span></a></h4>
<ol>
<li>
<p><strong>编写规则</strong>：</p>
<ul>
<li>在&quot;Hosts规则&quot;文本框中输入解析规则</li>
<li>每行一条规则，按照标准格式编写</li>
<li>可以添加注释方便管理</li>
</ul>
</li>
<li>
<p><strong>格式验证</strong>：</p>
<ul>
<li>系统会自动检查规则格式</li>
<li>错误的规则会显示在&quot;错误Hosts&quot;中</li>
<li>只有格式正确的规则才会生效</li>
</ul>
</li>
</ol>
<h4 id="第三步-设置定时更新-可选" tabindex="-1"><a class="header-anchor" href="#第三步-设置定时更新-可选"><span>第三步：设置定时更新（可选）</span></a></h4>
<ol>
<li>
<p><strong>配置Cron表达式</strong>：</p>
<ul>
<li>在&quot;定时任务&quot;框中输入Cron表达式</li>
<li>用于定时获取最新IP并更新Hosts</li>
<li>适用于IP地址经常变化的场景</li>
</ul>
</li>
<li>
<p><strong>常用Cron示例</strong>：</p>
<ul>
<li><code v-pre>0 */6 * * *</code>：每6小时执行一次</li>
<li><code v-pre>0 2 * * *</code>：每天凌晨2点执行</li>
<li><code v-pre>0 0 */3 * *</code>：每3天执行一次</li>
</ul>
</li>
</ol>
<h4 id="第四步-保存并应用" tabindex="-1"><a class="header-anchor" href="#第四步-保存并应用"><span>第四步：保存并应用</span></a></h4>
<ol>
<li>
<p><strong>保存配置</strong>：</p>
<ul>
<li>点击&quot;保存&quot;按钮应用配置</li>
<li>系统会立即更新Hosts文件</li>
</ul>
</li>
<li>
<p><strong>确认生效</strong>：</p>
<ul>
<li>系统会显示保存成功提示</li>
<li>Docker环境中可能需要重启容器</li>
</ul>
</li>
</ol>
<h3 id="📊-配置示例" tabindex="-1"><a class="header-anchor" href="#📊-配置示例"><span>📊 配置示例</span></a></h3>
<h4 id="网络加速配置" tabindex="-1"><a class="header-anchor" href="#网络加速配置"><span>网络加速配置</span></a></h4>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code class="language-bash"><span class="line"><span class="token comment"># GitHub访问加速</span></span>
<span class="line"><span class="token number">140.82</span>.112.3 github.com</span>
<span class="line"><span class="token number">140.82</span>.112.4 www.github.com</span>
<span class="line"><span class="token number">140.82</span>.114.6 api.github.com</span>
<span class="line"><span class="token number">185.199</span>.108.153 assets-cdn.github.com</span>
<span class="line"><span class="token number">140.82</span>.112.9 codeload.github.com</span>
<span class="line"></span>
<span class="line"><span class="token comment"># Google服务加速</span></span>
<span class="line"><span class="token number">8.8</span>.8.8 dns.google</span>
<span class="line"><span class="token number">142.250</span>.191.14 www.google.com</span>
<span class="line"><span class="token number">172.217</span>.164.110 translate.google.com</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 影视数据源优化</span></span>
<span class="line"><span class="token number">13.224</span>.161.90 image.tmdb.org</span>
<span class="line"><span class="token number">13.32</span>.132.53 api.themoviedb.org</span>
<span class="line"><span class="token number">52.84</span>.125.82 api.tvmaze.com</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="本地开发环境" tabindex="-1"><a class="header-anchor" href="#本地开发环境"><span>本地开发环境</span></a></h4>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code class="language-bash"><span class="line"><span class="token comment"># 本地开发服务</span></span>
<span class="line"><span class="token number">127.0</span>.0.1 localhost</span>
<span class="line"><span class="token number">127.0</span>.0.1 local.dev</span>
<span class="line"><span class="token number">127.0</span>.0.1 dev.example.com</span>
<span class="line"><span class="token number">127.0</span>.0.1 api.local</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 测试环境映射</span></span>
<span class="line"><span class="token number">192.168</span>.1.100 test.example.com</span>
<span class="line"><span class="token number">192.168</span>.1.101 staging.example.com</span>
<span class="line"><span class="token number">192.168</span>.1.102 demo.example.com</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="广告屏蔽配置" tabindex="-1"><a class="header-anchor" href="#广告屏蔽配置"><span>广告屏蔽配置</span></a></h4>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code class="language-bash"><span class="line"><span class="token comment"># 屏蔽广告域名（映射到无效地址）</span></span>
<span class="line"><span class="token number">0.0</span>.0.0 ads.example.com</span>
<span class="line"><span class="token number">0.0</span>.0.0 tracker.example.com</span>
<span class="line"><span class="token number">0.0</span>.0.0 analytics.google.com</span>
<span class="line"><span class="token number">127.0</span>.0.1 doubleclick.net</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="🛠️-高级用法" tabindex="-1"><a class="header-anchor" href="#🛠️-高级用法"><span>🛠️ 高级用法</span></a></h2>
<h3 id="🎯-应用场景" tabindex="-1"><a class="header-anchor" href="#🎯-应用场景"><span>🎯 应用场景</span></a></h3>
<h4 id="_1-网络访问加速" tabindex="-1"><a class="header-anchor" href="#_1-网络访问加速"><span>1. 网络访问加速</span></a></h4>
<p><strong>用途</strong>：绕过DNS解析，直接访问最优IP</p>
<ul>
<li>适用于访问慢或不稳定的网站</li>
<li>特别适合GitHub、Google等国外服务</li>
<li>可显著提升访问速度和稳定性</li>
</ul>
<p><strong>配置方法</strong>：</p>
<ol>
<li>通过ping或在线工具获取最优IP</li>
<li>将域名映射到最优IP地址</li>
<li>定期更新IP地址保持最佳效果</li>
</ol>
<h4 id="_2-本地开发调试" tabindex="-1"><a class="header-anchor" href="#_2-本地开发调试"><span>2. 本地开发调试</span></a></h4>
<p><strong>用途</strong>：将域名指向本地或测试服务器</p>
<ul>
<li>本地开发环境域名映射</li>
<li>测试环境快速切换</li>
<li>API接口调试和测试</li>
</ul>
<p><strong>配置方法</strong>：</p>
<ol>
<li>将生产域名映射到本地IP</li>
<li>配置不同环境的域名映射</li>
<li>支持多套环境并行开发</li>
</ol>
<h4 id="_3-服务故障切换" tabindex="-1"><a class="header-anchor" href="#_3-服务故障切换"><span>3. 服务故障切换</span></a></h4>
<p><strong>用途</strong>：当主服务不可用时快速切换</p>
<ul>
<li>备用服务器快速切换</li>
<li>CDN节点优化选择</li>
<li>服务高可用保障</li>
</ul>
<p><strong>配置方法</strong>：</p>
<ol>
<li>预配置备用服务器IP</li>
<li>在故障时快速启用备用配置</li>
<li>结合监控实现自动切换</li>
</ol>
<h4 id="_4-隐私和安全防护" tabindex="-1"><a class="header-anchor" href="#_4-隐私和安全防护"><span>4. 隐私和安全防护</span></a></h4>
<p><strong>用途</strong>：屏蔽恶意域名和广告追踪</p>
<ul>
<li>广告域名屏蔽</li>
<li>恶意网站拦截</li>
<li>隐私追踪保护</li>
</ul>
<p><strong>配置方法</strong>：</p>
<ol>
<li>收集广告和追踪域名列表</li>
<li>将恶意域名映射到无效IP</li>
<li>定期更新屏蔽列表</li>
</ol>
<h3 id="⚙️-最佳实践" tabindex="-1"><a class="header-anchor" href="#⚙️-最佳实践"><span>⚙️ 最佳实践</span></a></h3>
<h4 id="_1-规则组织管理" tabindex="-1"><a class="header-anchor" href="#_1-规则组织管理"><span>1. 规则组织管理</span></a></h4>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code class="language-bash"><span class="line"><span class="token comment"># 使用注释分组管理</span></span>
<span class="line"><span class="token comment"># ================================</span></span>
<span class="line"><span class="token comment"># GitHub服务加速</span></span>
<span class="line"><span class="token comment"># ================================</span></span>
<span class="line"><span class="token number">140.82</span>.112.3 github.com</span>
<span class="line"><span class="token number">140.82</span>.112.4 www.github.com</span>
<span class="line"></span>
<span class="line"><span class="token comment"># ================================</span></span>
<span class="line"><span class="token comment"># 本地开发环境</span></span>
<span class="line"><span class="token comment"># ================================</span></span>
<span class="line"><span class="token number">127.0</span>.0.1 local.dev</span>
<span class="line"><span class="token number">127.0</span>.0.1 api.local</span>
<span class="line"></span>
<span class="line"><span class="token comment"># ================================</span></span>
<span class="line"><span class="token comment"># 广告屏蔽</span></span>
<span class="line"><span class="token comment"># ================================</span></span>
<span class="line"><span class="token number">0.0</span>.0.0 ads.example.com</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-ip地址获取方法" tabindex="-1"><a class="header-anchor" href="#_2-ip地址获取方法"><span>2. IP地址获取方法</span></a></h4>
<p><strong>方法1：使用Ping命令</strong></p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code class="language-bash"><span class="line"><span class="token function">ping</span> <span class="token parameter variable">-c</span> <span class="token number">4</span> github.com</span>
<span class="line"><span class="token comment"># 选择延迟最低的IP地址</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>方法2：使用在线工具</strong></p>
<ul>
<li>IPAddress.com</li>
<li>DNS检查工具</li>
<li>CDN节点查询工具</li>
</ul>
<p><strong>方法3：使用nslookup</strong></p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code class="language-bash"><span class="line"><span class="token function">nslookup</span> github.com <span class="token number">8.8</span>.8.8</span>
<span class="line"><span class="token comment"># 使用不同DNS服务器查询</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3-定时更新策略" tabindex="-1"><a class="header-anchor" href="#_3-定时更新策略"><span>3. 定时更新策略</span></a></h4>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code class="language-bash"><span class="line"><span class="token comment"># 高频更新（适用于经常变化的服务）</span></span>
<span class="line"><span class="token number">0</span> */2 * * *    <span class="token comment"># 每2小时更新</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 中频更新（适用于相对稳定的服务）</span></span>
<span class="line"><span class="token number">0</span> <span class="token number">6</span> * * *      <span class="token comment"># 每天早上6点更新</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 低频更新（适用于稳定的服务）</span></span>
<span class="line"><span class="token number">0</span> <span class="token number">6</span> */7 * *    <span class="token comment"># 每周更新一次</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="🔧-故障诊断" tabindex="-1"><a class="header-anchor" href="#🔧-故障诊断"><span>🔧 故障诊断</span></a></h2>
<h3 id="⚠️-常见问题" tabindex="-1"><a class="header-anchor" href="#⚠️-常见问题"><span>⚠️ 常见问题</span></a></h3>
<h4 id="_1-规则不生效" tabindex="-1"><a class="header-anchor" href="#_1-规则不生效"><span>1. 规则不生效</span></a></h4>
<p><strong>症状</strong>：保存后域名解析没有变化</p>
<p><strong>排查步骤</strong>：</p>
<ol>
<li>
<p><strong>检查规则格式</strong>：</p>
<ul>
<li>确认IP地址格式正确</li>
<li>确认域名拼写无误</li>
<li>检查是否有额外的空格或字符</li>
</ul>
</li>
<li>
<p><strong>验证启用状态</strong>：</p>
<ul>
<li>确认&quot;启用状态&quot;已勾选</li>
<li>检查配置是否正确保存</li>
</ul>
</li>
<li>
<p><strong>清除DNS缓存</strong>：</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code class="language-bash"><span class="line"><span class="token comment"># Windows</span></span>
<span class="line">ipconfig /flushdns</span>
<span class="line"></span>
<span class="line"><span class="token comment"># Linux/Mac</span></span>
<span class="line"><span class="token function">sudo</span> systemctl restart systemd-resolved</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p><strong>重启服务或容器</strong>：</p>
<ul>
<li>Docker环境需要重启容器</li>
<li>系统级修改可能需要重启网络服务</li>
</ul>
</li>
</ol>
<h4 id="_2-docker环境问题" tabindex="-1"><a class="header-anchor" href="#_2-docker环境问题"><span>2. Docker环境问题</span></a></h4>
<p><strong>症状</strong>：Docker容器内Hosts修改不生效</p>
<p><strong>解决方法</strong>：</p>
<ol>
<li>
<p><strong>重启Docker容器</strong>：</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code class="language-bash"><span class="line"><span class="token function">docker</span> restart media-saber</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></li>
<li>
<p><strong>检查容器权限</strong>：</p>
<ul>
<li>确认容器有修改Hosts文件的权限</li>
<li>检查挂载目录权限</li>
</ul>
</li>
<li>
<p><strong>手动验证</strong>：</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code class="language-bash"><span class="line"><span class="token comment"># 进入容器检查Hosts文件</span></span>
<span class="line"><span class="token function">docker</span> <span class="token builtin class-name">exec</span> <span class="token parameter variable">-it</span> media-saber <span class="token function">cat</span> /etc/hosts</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ol>
<h4 id="_3-错误规则处理" tabindex="-1"><a class="header-anchor" href="#_3-错误规则处理"><span>3. 错误规则处理</span></a></h4>
<p><strong>症状</strong>：配置中出现错误规则提示</p>
<p><strong>处理方法</strong>：</p>
<ol>
<li>
<p><strong>查看错误详情</strong>：</p>
<ul>
<li>检查&quot;错误Hosts&quot;字段显示的内容</li>
<li>定位具体的错误行</li>
</ul>
</li>
<li>
<p><strong>常见错误修正</strong>：</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code class="language-bash"><span class="line"><span class="token comment"># 错误：缺少IP地址</span></span>
<span class="line">example.com</span>
<span class="line"><span class="token comment"># 正确：</span></span>
<span class="line"><span class="token number">192.168</span>.1.1 example.com</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 错误：IP格式错误</span></span>
<span class="line"><span class="token number">999.999</span>.999.999 example.com</span>
<span class="line"><span class="token comment"># 正确：</span></span>
<span class="line"><span class="token number">192.168</span>.1.1 example.com</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 错误：域名格式错误</span></span>
<span class="line"><span class="token number">192.168</span>.1.1 invalid<span class="token punctuation">..</span>domain</span>
<span class="line"><span class="token comment"># 正确：</span></span>
<span class="line"><span class="token number">192.168</span>.1.1 valid.domain.com</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p><strong>批量检查</strong>：</p>
<ul>
<li>使用文本编辑器检查格式</li>
<li>删除或修正错误行</li>
<li>重新保存配置</li>
</ul>
</li>
</ol>
<h3 id="🛡️-安全注意事项" tabindex="-1"><a class="header-anchor" href="#🛡️-安全注意事项"><span>🛡️ 安全注意事项</span></a></h3>
<h4 id="_1-ip地址安全" tabindex="-1"><a class="header-anchor" href="#_1-ip地址安全"><span>1. IP地址安全</span></a></h4>
<ul>
<li><strong>使用可信IP地址</strong>：只添加已验证的可信IP</li>
<li><strong>避免恶意IP</strong>：不要使用不明来源的IP地址</li>
<li><strong>定期验证有效性</strong>：检查IP地址是否仍然有效</li>
</ul>
<h4 id="_2-域名安全" tabindex="-1"><a class="header-anchor" href="#_2-域名安全"><span>2. 域名安全</span></a></h4>
<ul>
<li><strong>避免重要系统域名</strong>：不要屏蔽系统关键域名</li>
<li><strong>谨慎屏蔽功能</strong>：确认屏蔽的域名不影响正常功能</li>
<li><strong>备份原始配置</strong>：保留原始Hosts文件备份</li>
</ul>
<h4 id="_3-配置管理" tabindex="-1"><a class="header-anchor" href="#_3-配置管理"><span>3. 配置管理</span></a></h4>
<ul>
<li><strong>版本控制</strong>：对重要配置进行版本管理</li>
<li><strong>变更记录</strong>：记录重要的配置变更</li>
<li><strong>回滚准备</strong>：准备快速回滚的方案</li>
</ul>
<h2 id="💡-使用技巧" tabindex="-1"><a class="header-anchor" href="#💡-使用技巧"><span>💡 使用技巧</span></a></h2>
<h3 id="🎯-高效配置" tabindex="-1"><a class="header-anchor" href="#🎯-高效配置"><span>🎯 高效配置</span></a></h3>
<ol>
<li>
<p><strong>批量操作</strong>：</p>
<ul>
<li>一次性配置多个相关域名</li>
<li>使用注释分组管理规则</li>
<li>定期批量更新IP地址</li>
</ul>
</li>
<li>
<p><strong>模板复用</strong>：</p>
<ul>
<li>建立常用配置模板</li>
<li>不同环境间快速切换</li>
<li>分享优化配置给其他用户</li>
</ul>
</li>
<li>
<p><strong>监控验证</strong>：</p>
<ul>
<li>定期验证配置有效性</li>
<li>监控域名解析结果</li>
<li>测试网络访问速度</li>
</ul>
</li>
</ol>
<h3 id="⚙️-工具整合" tabindex="-1"><a class="header-anchor" href="#⚙️-工具整合"><span>⚙️ 工具整合</span></a></h3>
<ol>
<li>
<p><strong>与网络诊断配合</strong>：</p>
<ul>
<li>使用网络Ping测试IP质量</li>
<li>使用网络诊断验证解析结果</li>
<li>结合路由跟踪优化配置</li>
</ul>
</li>
<li>
<p><strong>自动化脚本</strong>：</p>
<ul>
<li>编写脚本自动获取最优IP</li>
<li>定时检查IP可用性</li>
<li>自动更新Hosts配置</li>
</ul>
</li>
</ol>
<h2 id="📊-使用效果" tabindex="-1"><a class="header-anchor" href="#📊-使用效果"><span>📊 使用效果</span></a></h2>
<h3 id="🎯-性能提升" tabindex="-1"><a class="header-anchor" href="#🎯-性能提升"><span>🎯 性能提升</span></a></h3>
<ul>
<li><strong>访问速度</strong>：绕过DNS解析，直连最优IP</li>
<li><strong>稳定性</strong>：避免DNS污染和解析失败</li>
<li><strong>可控性</strong>：完全控制域名解析过程</li>
<li><strong>灵活性</strong>：快速切换不同的服务节点</li>
</ul>
<h3 id="🛠️-维护价值" tabindex="-1"><a class="header-anchor" href="#🛠️-维护价值"><span>🛠️ 维护价值</span></a></h3>
<ul>
<li><strong>故障快速恢复</strong>：通过切换IP快速恢复服务</li>
<li><strong>开发效率提升</strong>：本地开发环境快速配置</li>
<li><strong>网络问题诊断</strong>：帮助定位网络解析问题</li>
<li><strong>安全防护增强</strong>：屏蔽恶意域名和广告追踪</li>
</ul>
<h2 id="🔗-相关链接" tabindex="-1"><a class="header-anchor" href="#🔗-相关链接"><span>🔗 相关链接</span></a></h2>
<ul>
<li><RouteLink to="/docs/cultivation_secrets/main/">修仙秘籍主页</RouteLink></li>
<li><RouteLink to="/docs/cultivation_secrets/network_diagnosis/">网络诊断插件</RouteLink></li>
<li><RouteLink to="/docs/cultivation_secrets/network_ping/">网络 Ping 插件</RouteLink></li>
<li><RouteLink to="/docs/other/cron_rule/">Cron表达式说明</RouteLink></li>
</ul>
<hr>
<p>🎯 <strong>提示</strong>：自定义Hosts是强大的网络优化工具，建议在理解其工作原理后谨慎使用，特别是在生产环境中。配合网络诊断工具可以更好地验证配置效果。</p>
</div></template>


