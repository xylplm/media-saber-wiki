<template><div><h1 id="🔤-ocr服务配置指南" tabindex="-1"><a class="header-anchor" href="#🔤-ocr服务配置指南"><span>🔤 OCR服务配置指南</span></a></h1>
<blockquote>
<p>OCR 服务主要用于网站登录更新 cookie 以及特殊站点签到等识别验证码场景。Media Saber 不提供任何 OCR 服务，请自行搭建或使用第三方服务。</p>
</blockquote>
<hr>
<h2 id="📋-配置概览" tabindex="-1"><a class="header-anchor" href="#📋-配置概览"><span>📋 配置概览</span></a></h2>
<p>在 <RouteLink to="/docs/system_settings/basic_settings/#_7%EF%B8%8F%E2%83%A3-%E6%9C%8D%E5%8A%A1%E9%85%8D%E7%BD%AE">基础设置</RouteLink> 的&quot;服务配置&quot;部分，找到&quot;OCR服务地址&quot;进行配置：</p>
<p><strong>支持的服务类型：</strong></p>
<ul>
<li>🌐 <strong>第三方服务</strong>：免费，依赖外部稳定性</li>
<li>🐳 <strong>自建 Paddle OCR (Node.js版)</strong>：PP-OCRv5模型，高识别率，轻量级本地部署，完全免费</li>
<li>🔍 <strong>自建 Baidu OCR (Go版)</strong>：GO高性能API调用，支持所有架构，资源占用极低</li>
</ul>
<p>配置完成后请点击&quot;测试&quot;按钮验证服务有效性。</p>
<hr>
<h2 id="🌐-第三方-ocr-服务-轻度使用推荐-稳定性一般" tabindex="-1"><a class="header-anchor" href="#🌐-第三方-ocr-服务-轻度使用推荐-稳定性一般"><span>🌐 第三方 OCR 服务(轻度使用推荐，稳定性一般)</span></a></h2>
<h3 id="movie-pilot服务" tabindex="-1"><a class="header-anchor" href="#movie-pilot服务"><span>Movie Pilot服务</span></a></h3>
<p>本项目支持NT和Movie Pilot OCR服务格式。</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code class="language-text"><span class="line">https://movie-pilot.org/captcha/base64</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p><strong>特点：</strong></p>
<ul>
<li>✅ 免费使用，识别率高</li>
<li>✅ 无需配置，即用即可</li>
<li>⚠️ 依赖外部服务稳定性</li>
</ul>
<blockquote>
<p><strong>注意：</strong> 原地址 <code v-pre>https://nastool.cn/captcha/base64</code> 已作废</p>
</blockquote>
<h3 id="ddsderek-ocr-服务" tabindex="-1"><a class="header-anchor" href="#ddsderek-ocr-服务"><span>DDSDerek OCR 服务</span></a></h3>
<p>热心网友 DDSDerek 大佬搭建的备用服务。</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code class="language-text"><span class="line">https://ocr.ddsrem.com/captcha/base64</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p><strong>特点：</strong></p>
<ul>
<li>✅ 免费使用，可作备用</li>
<li>⚠️ 速度相对较慢</li>
<li>⚠️ 网络条件影响较大</li>
</ul>
<hr>
<h2 id="🐳-自建-paddle-ocr-服务-完全免费-高识别率-本地部署" tabindex="-1"><a class="header-anchor" href="#🐳-自建-paddle-ocr-服务-完全免费-高识别率-本地部署"><span>🐳 自建 Paddle OCR 服务（完全免费，高识别率，本地部署）</span></a></h2>
<h3 id="服务特点" tabindex="-1"><a class="header-anchor" href="#服务特点"><span>服务特点</span></a></h3>
<ul>
<li>✅ <strong>高识别率</strong>：基于 PP-OCRv5 模型，验证码识别成功率 90%以上</li>
<li>✅ <strong>高性能</strong>：基于 Node.js + Fastify 框架，启动时间 2-3s</li>
<li>✅ <strong>轻量级</strong>：使用 eSearch-OCR 和 ONNX Runtime，内存占用约 150MB</li>
<li>✅ <strong>易部署</strong>：Docker 容器化部署，支持多架构，开箱即用</li>
<li>✅ <strong>本地部署</strong>：数据不出本地，安全可控</li>
<li>✅ <strong>免费使用</strong>：无API调用费用</li>
<li>✅ <strong>兼容性</strong>：API 与 Media Saber 完美兼容，也兼容 NT MP</li>
</ul>
<h3 id="性能对比" tabindex="-1"><a class="header-anchor" href="#性能对比"><span>性能对比</span></a></h3>
<table>
<thead>
<tr>
<th>指标</th>
<th>Node.js 版本</th>
<th>Python 版本</th>
<th>改善</th>
</tr>
</thead>
<tbody>
<tr>
<td>镜像大小</td>
<td>~150MB</td>
<td>~1GB</td>
<td>85% ↓</td>
</tr>
<tr>
<td>内存占用</td>
<td>~150MB</td>
<td>~300MB</td>
<td>50% ↓</td>
</tr>
<tr>
<td>启动时间</td>
<td>~2-3s</td>
<td>~5-8s</td>
<td>60% ↓</td>
</tr>
<tr>
<td>识别速度</td>
<td>~100-200ms</td>
<td>~200-500ms</td>
<td>显著提升</td>
</tr>
<tr>
<td>并发处理</td>
<td>优秀</td>
<td>良好</td>
<td>显著提升</td>
</tr>
</tbody>
</table>
<h3 id="docker-部署" tabindex="-1"><a class="header-anchor" href="#docker-部署"><span>Docker 部署</span></a></h3>
<p><strong>镜像地址：</strong></p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code class="language-text"><span class="line">https://hub.docker.com/r/xylplm/media-saber-paddle-ocr</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h4 id="方式一-命令行部署-推荐" tabindex="-1"><a class="header-anchor" href="#方式一-命令行部署-推荐"><span>方式一：命令行部署（推荐）</span></a></h4>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code class="language-bash"><span class="line"><span class="token function">docker</span> run <span class="token parameter variable">-d</span> <span class="token punctuation">\</span></span>
<span class="line">  <span class="token parameter variable">--name</span> media-saber-paddle-ocr <span class="token punctuation">\</span></span>
<span class="line">  <span class="token parameter variable">-p</span> <span class="token number">9899</span>:9899 <span class="token punctuation">\</span></span>
<span class="line">  <span class="token parameter variable">--restart</span><span class="token operator">=</span>unless-stopped <span class="token punctuation">\</span></span>
<span class="line">  xylplm/media-saber-paddle-ocr:latest</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="方式二-docker-compose-部署-推荐" tabindex="-1"><a class="header-anchor" href="#方式二-docker-compose-部署-推荐"><span>方式二：Docker Compose 部署（推荐）</span></a></h4>
<p>创建 <code v-pre>docker-compose.yml</code> 文件：</p>
<div class="language-yaml line-numbers-mode" data-highlighter="prismjs" data-ext="yml"><pre v-pre><code class="language-yaml"><span class="line"><span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token string">"3.8"</span></span>
<span class="line"></span>
<span class="line"><span class="token key atrule">services</span><span class="token punctuation">:</span></span>
<span class="line">  <span class="token key atrule">media-saber-paddle-ocr</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token key atrule">image</span><span class="token punctuation">:</span> xylplm/media<span class="token punctuation">-</span>saber<span class="token punctuation">-</span>paddle<span class="token punctuation">-</span>ocr<span class="token punctuation">:</span>latest</span>
<span class="line">    <span class="token key atrule">ports</span><span class="token punctuation">:</span></span>
<span class="line">      <span class="token punctuation">-</span> <span class="token string">"9899:9899"</span></span>
<span class="line">    <span class="token key atrule">environment</span><span class="token punctuation">:</span></span>
<span class="line">      <span class="token punctuation">-</span> TZ=Asia/Shanghai</span>
<span class="line">    <span class="token key atrule">restart</span><span class="token punctuation">:</span> unless<span class="token punctuation">-</span>stopped</span>
<span class="line">    <span class="token key atrule">container_name</span><span class="token punctuation">:</span> media<span class="token punctuation">-</span>saber<span class="token punctuation">-</span>paddle<span class="token punctuation">-</span>ocr</span>
<span class="line">    <span class="token key atrule">deploy</span><span class="token punctuation">:</span></span>
<span class="line">      <span class="token key atrule">resources</span><span class="token punctuation">:</span></span>
<span class="line">        <span class="token key atrule">limits</span><span class="token punctuation">:</span></span>
<span class="line">          <span class="token key atrule">memory</span><span class="token punctuation">:</span> 1G</span>
<span class="line">          <span class="token key atrule">cpus</span><span class="token punctuation">:</span> <span class="token string">'1.0'</span></span>
<span class="line">        <span class="token key atrule">reservations</span><span class="token punctuation">:</span></span>
<span class="line">          <span class="token key atrule">memory</span><span class="token punctuation">:</span> 256M</span>
<span class="line">          <span class="token key atrule">cpus</span><span class="token punctuation">:</span> <span class="token string">'0.5'</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>运行：</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code class="language-bash"><span class="line"><span class="token function">docker-compose</span> up <span class="token parameter variable">-d</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="api-接口说明" tabindex="-1"><a class="header-anchor" href="#api-接口说明"><span>API 接口说明</span></a></h3>
<p><strong>主要接口：</strong></p>
<ul>
<li><code v-pre>POST /captcha/base64</code> - OCR 识别接口</li>
<li><code v-pre>GET /health</code> - 轻量级健康检查</li>
<li><code v-pre>GET /captcha/health</code> - OCR 服务状态检查</li>
<li><code v-pre>GET /</code> - 服务信息和欢迎页面</li>
</ul>
<p><strong>请求格式：</strong></p>
<div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json"><pre v-pre><code class="language-json"><span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">"base64_img"</span><span class="token operator">:</span> <span class="token string">"图片的base64编码字符串"</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>响应格式：</strong></p>
<div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json"><pre v-pre><code class="language-json"><span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">"result"</span><span class="token operator">:</span> <span class="token string">"识别出的验证码文本"</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">"confidence"</span><span class="token operator">:</span> <span class="token number">0.95</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">"processing_time"</span><span class="token operator">:</span> <span class="token number">0.12</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="环境变量配置" tabindex="-1"><a class="header-anchor" href="#环境变量配置"><span>环境变量配置</span></a></h3>
<ul>
<li><code v-pre>HOST</code>: 绑定地址 (默认: 0.0.0.0)</li>
<li><code v-pre>PORT</code>: 绑定端口 (默认: 9899)</li>
<li><code v-pre>LOG_LEVEL</code>: 日志级别 (默认: info)</li>
</ul>
<h3 id="生产环境建议" tabindex="-1"><a class="header-anchor" href="#生产环境建议"><span>生产环境建议</span></a></h3>
<p><strong>资源配置：</strong></p>
<ul>
<li>CPU: 2+ 核心</li>
<li>内存: 1GB+</li>
<li>磁盘: 1GB+</li>
</ul>
<p><strong>服务地址配置：</strong></p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code class="language-text"><span class="line">http://127.0.0.1:9899/captcha/base64</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="功能特性" tabindex="-1"><a class="header-anchor" href="#功能特性"><span>功能特性</span></a></h3>
<ul>
<li>✅ 图像预处理（缩放、降噪、边界处理）</li>
<li>✅ PP-OCRv5 高精度识别</li>
<li>✅ 自动模型初始化和管理</li>
<li>✅ 并发安全</li>
<li>✅ 优雅的错误处理</li>
<li>✅ 健康检查接口</li>
<li>✅ 云原生部署友好</li>
<li>✅ <strong>兼容性</strong>：API 与 Media Saber 完美兼容，也兼容 NT MP</li>
</ul>
<hr>
<h2 id="🔍-自建-baidu-ocr-服务-本地部署-低延时-高准确率" tabindex="-1"><a class="header-anchor" href="#🔍-自建-baidu-ocr-服务-本地部署-低延时-高准确率"><span>🔍 自建 Baidu OCR 服务 （本地部署，低延时，高准确率）</span></a></h2>
<h3 id="主要改进" tabindex="-1"><a class="header-anchor" href="#主要改进"><span>主要改进</span></a></h3>
<ul>
<li>✅ <strong>更高性能</strong>：Go 原生并发支持，处理速度显著提升</li>
<li>✅ <strong>更小体积</strong>：最终 Docker 镜像仅约 20MB（原 Python 版本约 1GB）</li>
<li>✅ <strong>更低内存</strong>：内存占用减少约 80%</li>
<li>✅ <strong>更快启动</strong>：启动时间从秒级降到毫秒级</li>
<li>✅ <strong>高识别率</strong>：验证码识别成功率 90%以上</li>
<li>✅ <strong>支持所有架构</strong>：包括 ARM 设备（如树莓派、NAS）</li>
<li>✅ <strong>Go 1.25 优化</strong>：利用最新的 Go 编译器优化和性能改进</li>
</ul>
<h3 id="性能对比-1" tabindex="-1"><a class="header-anchor" href="#性能对比-1"><span>性能对比</span></a></h3>
<table>
<thead>
<tr>
<th>指标</th>
<th>Python 版本</th>
<th>Go 版本</th>
<th>改善</th>
</tr>
</thead>
<tbody>
<tr>
<td>镜像大小</td>
<td>~1GB</td>
<td>~20MB</td>
<td>98% ↓</td>
</tr>
<tr>
<td>内存占用</td>
<td>~200MB</td>
<td>~40MB</td>
<td>80% ↓</td>
</tr>
<tr>
<td>启动时间</td>
<td>~3s</td>
<td>~50ms</td>
<td>98% ↓</td>
</tr>
<tr>
<td>并发处理</td>
<td>受限</td>
<td>优秀</td>
<td>显著提升</td>
</tr>
<tr>
<td>CPU 使用</td>
<td>较高</td>
<td>较低</td>
<td>30-50% ↓</td>
</tr>
</tbody>
</table>
<h3 id="技术栈" tabindex="-1"><a class="header-anchor" href="#技术栈"><span>技术栈</span></a></h3>
<ul>
<li><strong>语言</strong>: Go 1.25+</li>
<li><strong>Web 框架</strong>: Gin</li>
<li><strong>图像处理</strong>: 原生 Go image 包</li>
<li><strong>HTTP 客户端</strong>: 原生 net/http</li>
<li><strong>容器化</strong>: Docker 多阶段构建</li>
</ul>
<h3 id="功能特性-1" tabindex="-1"><a class="header-anchor" href="#功能特性-1"><span>功能特性</span></a></h3>
<ul>
<li>✅ 图像预处理（二值化、降噪、边界处理）</li>
<li>✅ 百度 OCR API 集成</li>
<li>✅ 自动 Token 管理和刷新</li>
<li>✅ 并发安全</li>
<li>✅ 优雅的错误处理</li>
<li>✅ 健康检查接口</li>
<li>✅ 云原生部署友好</li>
</ul>
<h3 id="前期准备-申请百度-ocr-api" tabindex="-1"><a class="header-anchor" href="#前期准备-申请百度-ocr-api"><span>前期准备：申请百度 OCR API</span></a></h3>
<h4 id="步骤-1-注册百度智能云" tabindex="-1"><a class="header-anchor" href="#步骤-1-注册百度智能云"><span>步骤 1：注册百度智能云</span></a></h4>
<p>访问 <code v-pre>https://cloud.baidu.com/</code> 注册登录百度智能云账号。</p>
<h4 id="步骤-2-开通文字识别服务" tabindex="-1"><a class="header-anchor" href="#步骤-2-开通文字识别服务"><span>步骤 2：开通文字识别服务</span></a></h4>
<p>选择产品-文字识别-文字识别</p>
<p><img src="@source/02.使用文档/13.系统设置/images/0502.png" alt="开通服务"></p>
<p>点击立即使用</p>
<p><img src="@source/02.使用文档/13.系统设置/images/0503.png" alt="立即使用"></p>
<p>点击去领取</p>
<p><img src="@source/02.使用文档/13.系统设置/images/0504.png" alt="去领取"></p>
<h4 id="步骤-3-领取免费额度" tabindex="-1"><a class="header-anchor" href="#步骤-3-领取免费额度"><span>步骤 3：领取免费额度</span></a></h4>
<p>进入领取页面后，选择通用场景 OCR，待领接口选择全部，点击下方的 0 元领取。</p>
<p><img src="@source/02.使用文档/13.系统设置/images/0505.png" alt="领取免费额度"></p>
<p>跳出领取成功界面，点击前往应用列表</p>
<p><img src="@source/02.使用文档/13.系统设置/images/0506.png" alt="领取成功"></p>
<h4 id="步骤-4-创建应用" tabindex="-1"><a class="header-anchor" href="#步骤-4-创建应用"><span>步骤 4：创建应用</span></a></h4>
<p>点击创建应用</p>
<p><img src="@source/02.使用文档/13.系统设置/images/0507.png" alt="创建应用"></p>
<p>创建应用界面处的配置：</p>
<ul>
<li><strong>应用名称</strong>：自定义名称即可</li>
<li><strong>接口选择</strong>：文字识别选择全部</li>
</ul>
<p><img src="@source/02.使用文档/13.系统设置/images/0508.png" alt="应用配置"></p>
<p>往下滑：</p>
<ul>
<li><strong>应用归属</strong>：选择个人</li>
<li><strong>应用描述</strong>：随便填写</li>
</ul>
<p>然后点击立即创建。</p>
<p><img src="@source/02.使用文档/13.系统设置/images/0509.png" alt="完成创建"></p>
<p>来到创建完毕界面，选择查看应用详情</p>
<p><img src="@source/02.使用文档/13.系统设置/images/0510.png" alt="查看详情"></p>
<h4 id="步骤-5-获取-api-信息" tabindex="-1"><a class="header-anchor" href="#步骤-5-获取-api-信息"><span>步骤 5：获取 API 信息</span></a></h4>
<p>获得需要的三个数据：<code v-pre>OCR_APP_ID</code>、<code v-pre>OCR_API_KEY</code>、<code v-pre>OCR_SECRET_KEY</code>，稍后填入环境变量。</p>
<p><img src="@source/02.使用文档/13.系统设置/images/0511.png" alt="获取API信息"></p>
<h3 id="docker-部署-1" tabindex="-1"><a class="header-anchor" href="#docker-部署-1"><span>Docker 部署</span></a></h3>
<p><strong>镜像地址：</strong></p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code class="language-text"><span class="line">https://hub.docker.com/r/xylplm/media-saber-baidu-ocr</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h4 id="命令行部署-推荐" tabindex="-1"><a class="header-anchor" href="#命令行部署-推荐"><span>命令行部署（推荐）</span></a></h4>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code class="language-bash"><span class="line"><span class="token function">docker</span> run <span class="token parameter variable">-d</span> <span class="token punctuation">\</span></span>
<span class="line">  <span class="token parameter variable">--name</span> media-saber-baidu-ocr <span class="token punctuation">\</span></span>
<span class="line">  <span class="token parameter variable">-p</span> <span class="token number">9898</span>:9898 <span class="token punctuation">\</span></span>
<span class="line">  <span class="token parameter variable">-e</span> <span class="token assign-left variable">OCR_APP_ID</span><span class="token operator">=</span>your_app_id <span class="token punctuation">\</span></span>
<span class="line">  <span class="token parameter variable">-e</span> <span class="token assign-left variable">OCR_API_KEY</span><span class="token operator">=</span>your_api_key <span class="token punctuation">\</span></span>
<span class="line">  <span class="token parameter variable">-e</span> <span class="token assign-left variable">OCR_SECRET_KEY</span><span class="token operator">=</span>your_secret_key <span class="token punctuation">\</span></span>
<span class="line">  <span class="token parameter variable">--restart</span><span class="token operator">=</span>unless-stopped <span class="token punctuation">\</span></span>
<span class="line">  xylplm/media-saber-baidu-ocr:latest</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="docker-compose-部署-推荐" tabindex="-1"><a class="header-anchor" href="#docker-compose-部署-推荐"><span>Docker Compose 部署（推荐）</span></a></h4>
<p>创建 <code v-pre>docker-compose.yml</code> 文件：</p>
<div class="language-yaml line-numbers-mode" data-highlighter="prismjs" data-ext="yml"><pre v-pre><code class="language-yaml"><span class="line"><span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token string">"3.8"</span></span>
<span class="line"></span>
<span class="line"><span class="token key atrule">services</span><span class="token punctuation">:</span></span>
<span class="line">  <span class="token key atrule">media-saber-baidu-ocr</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token key atrule">image</span><span class="token punctuation">:</span> xylplm/media<span class="token punctuation">-</span>saber<span class="token punctuation">-</span>baidu<span class="token punctuation">-</span>ocr<span class="token punctuation">:</span>latest</span>
<span class="line">    <span class="token key atrule">ports</span><span class="token punctuation">:</span></span>
<span class="line">      <span class="token punctuation">-</span> <span class="token string">"9898:9898"</span></span>
<span class="line">    <span class="token key atrule">environment</span><span class="token punctuation">:</span></span>
<span class="line">      <span class="token punctuation">-</span> OCR_APP_ID=your_app_id</span>
<span class="line">      <span class="token punctuation">-</span> OCR_API_KEY=your_api_key</span>
<span class="line">      <span class="token punctuation">-</span> OCR_SECRET_KEY=your_secret_key</span>
<span class="line">      <span class="token punctuation">-</span> TZ=Asia/Shanghai</span>
<span class="line">    <span class="token key atrule">restart</span><span class="token punctuation">:</span> unless<span class="token punctuation">-</span>stopped</span>
<span class="line">    <span class="token key atrule">container_name</span><span class="token punctuation">:</span> media<span class="token punctuation">-</span>saber<span class="token punctuation">-</span>baidu<span class="token punctuation">-</span>ocr</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>运行：</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code class="language-bash"><span class="line"><span class="token function">docker-compose</span> up <span class="token parameter variable">-d</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h4 id="可视化界面部署-以绿联为例" tabindex="-1"><a class="header-anchor" href="#可视化界面部署-以绿联为例"><span>可视化界面部署（以绿联为例）</span></a></h4>
<p><strong>1. 下载镜像</strong></p>
<p>在镜像仓库搜索并下载 <code v-pre>media-saber-baidu-ocr</code> 镜像。</p>
<p><img src="@source/02.使用文档/13.系统设置/images/0512.png" alt="搜索镜像"></p>
<p><strong>2. 创建容器</strong></p>
<p>基础设置中重启策略选择&quot;退出时重启&quot;。</p>
<p><img src="@source/02.使用文档/13.系统设置/images/0513.png" alt="基础设置"></p>
<p>本地端口填写 9898（如果未被占用）。</p>
<p><img src="@source/02.使用文档/13.系统设置/images/0514.png" alt="端口设置"></p>
<p>环境变量填写刚刚获取的三个值，然后点击下一步完成容器创建。</p>
<h3 id="配置-media-saber" tabindex="-1"><a class="header-anchor" href="#配置-media-saber"><span>配置 Media Saber</span></a></h3>
<p>在 <RouteLink to="/docs/system_settings/basic_settings/#ocr%E6%9C%8D%E5%8A%A1%E5%9C%B0%E5%9D%80">基础设置</RouteLink> 的OCR服务地址中填写：</p>
<p><strong>Baidu OCR 服务：</strong></p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code class="language-text"><span class="line">http://127.0.0.1:9898/captcha/base64</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p><strong>Paddle OCR 服务：</strong></p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code class="language-text"><span class="line">http://127.0.0.1:9899/captcha/base64</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><blockquote>
<p>注意：将 <code v-pre>127.0.0.1</code> 替换为你的实际 IP 地址</p>
</blockquote>
<p><img src="@source/02.使用文档/13.系统设置/images/0516.png" alt="配置OCR地址"></p>
<p>保存配置后（<strong>先保存！</strong>）点击测试按钮。</p>
<p><img src="@source/02.使用文档/13.系统设置/images/0517.png" alt="测试成功"></p>
<p>测试成功即表示配置完成。</p>
<h3 id="api-接口说明-1" tabindex="-1"><a class="header-anchor" href="#api-接口说明-1"><span>API 接口说明</span></a></h3>
<p><strong>主要接口：</strong></p>
<ul>
<li><code v-pre>POST /captcha/base64</code> - OCR 识别接口</li>
<li><code v-pre>GET /</code> - 健康检查和欢迎信息</li>
</ul>
<p><strong>请求格式：</strong></p>
<div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json"><pre v-pre><code class="language-json"><span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">"base64_img"</span><span class="token operator">:</span> <span class="token string">"图片的base64编码字符串"</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>响应格式：</strong></p>
<div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json"><pre v-pre><code class="language-json"><span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">"result"</span><span class="token operator">:</span> <span class="token string">"识别出的验证码文本（仅字母和数字）"</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="监控和日志" tabindex="-1"><a class="header-anchor" href="#监控和日志"><span>监控和日志</span></a></h3>
<p>所有请求和错误都会记录到标准输出，便于容器环境下的日志收集。</p>
<h3 id="环境变量配置-1" tabindex="-1"><a class="header-anchor" href="#环境变量配置-1"><span>环境变量配置</span></a></h3>
<p>在运行前需要设置以下环境变量：</p>
<ul>
<li><code v-pre>OCR_APP_ID</code>: 你的百度OCR App ID</li>
<li><code v-pre>OCR_API_KEY</code>: 你的百度OCR API Key</li>
<li><code v-pre>OCR_SECRET_KEY</code>: 你的百度OCR Secret Key</li>
<li><code v-pre>GIN_MODE</code>: 运行模式（可选，默认 release）</li>
</ul>
<hr>
<h2 id="🔧-故障排除" tabindex="-1"><a class="header-anchor" href="#🔧-故障排除"><span>🔧 故障排除</span></a></h2>
<h3 id="常见问题解决" tabindex="-1"><a class="header-anchor" href="#常见问题解决"><span>常见问题解决</span></a></h3>
<table>
<thead>
<tr>
<th>问题</th>
<th>可能原因</th>
<th>解决方案</th>
</tr>
</thead>
<tbody>
<tr>
<td>测试失败</td>
<td>服务地址错误</td>
<td>检查地址格式和IP</td>
</tr>
<tr>
<td>连接超时</td>
<td>网络问题</td>
<td>检查防火墙和端口</td>
</tr>
<tr>
<td>百度OCR报错</td>
<td>API配置错误</td>
<td>验证三个环境变量</td>
</tr>
<tr>
<td>ARM设备无法使用Paddle</td>
<td>架构不支持</td>
<td>改用百度OCR服务</td>
</tr>
</tbody>
</table>
<h3 id="服务选择建议" tabindex="-1"><a class="header-anchor" href="#服务选择建议"><span>服务选择建议</span></a></h3>
<table>
<thead>
<tr>
<th>使用场景</th>
<th>推荐方案</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>轻度使用</td>
<td>第三方服务</td>
<td>免费，但稳定性差，无需配置</td>
</tr>
<tr>
<td>重度使用</td>
<td>自建 Paddle OCR</td>
<td>完全免费，高精度，本地部署</td>
</tr>
<tr>
<td>ARM 设备</td>
<td>自建 Baidu OCR</td>
<td>支持所有架构</td>
</tr>
<tr>
<td>网络受限</td>
<td>自建 Baidu OCR</td>
<td>API 调用，稳定性好</td>
</tr>
<tr>
<td>高性能需求</td>
<td>自建 Baidu OCR (Go版)</td>
<td>最低延迟，最小内存</td>
</tr>
</tbody>
</table>
<h3 id="性能优化提示" tabindex="-1"><a class="header-anchor" href="#性能优化提示"><span>性能优化提示</span></a></h3>
<ul>
<li><strong>Paddle OCR (Node.js版)</strong>：建议分配 1GB+ 内存，CPU 2核+</li>
<li><strong>Baidu OCR (Go版)</strong>：建议分配 256MB+ 内存，CPU 1核+</li>
<li><strong>网络优化</strong>：使用国内镜像加速下载</li>
<li><strong>API 优化</strong>：百度 OCR 注意 API 调用次数限制，可升级套餐</li>
</ul>
<hr>
<h2 id="📖-相关文档" tabindex="-1"><a class="header-anchor" href="#📖-相关文档"><span>📖 相关文档</span></a></h2>
<ul>
<li><RouteLink to="/docs/system_settings/basic_settings/">基础设置</RouteLink> - 系统基础配置</li>
<li><RouteLink to="/docs/site_management/">站点管理</RouteLink> - 站点维护和管理</li>
<li><RouteLink to="/docs/system_settings/">系统设置</RouteLink> - 更多系统配置选项</li>
</ul>
<hr>
</div></template>


