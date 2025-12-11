<template><div><h1 id="📦-网盘配置指南" tabindex="-1"><a class="header-anchor" href="#📦-网盘配置指南"><span>📦 网盘配置指南</span></a></h1>
<p>Media Saber 支持多种网盘服务，通过 OpenList 驱动进行接入。本文档将详细介绍如何配置各种网盘服务。</p>
<h2 id="支持的网盘类型" tabindex="-1"><a class="header-anchor" href="#支持的网盘类型"><span>支持的网盘类型</span></a></h2>
<p>目前支持以下网盘类型：</p>
<ul>
<li><a href="#115-%E7%BD%91%E7%9B%98%E5%BC%80%E6%94%BE%E5%B9%B3%E5%8F%B0">115 网盘开放平台</a></li>
<li><a href="#115-%E7%BD%91%E7%9B%98%E5%88%86%E4%BA%AB">115 网盘分享</a></li>
<li><a href="#123-%E4%BA%91%E7%9B%98%E5%BC%80%E6%94%BE%E5%B9%B3%E5%8F%B0">123 云盘开放平台</a></li>
<li><a href="#%E4%B8%AD%E5%9B%BD%E7%A7%BB%E5%8A%A8%E4%BA%91%E7%9B%98">中国移动云盘</a></li>
<li><a href="#%E5%A4%A9%E7%BF%BC%E4%BA%91%E7%9B%98">天翼云盘</a></li>
<li><a href="#%E9%98%BF%E9%87%8C%E4%BA%91%E7%9B%98-oauth2">阿里云盘（Oauth2）</a></li>
<li><a href="#%E7%99%BE%E5%BA%A6%E7%BD%91%E7%9B%98">百度网盘</a></li>
<li><a href="#onedrive">OneDrive</a></li>
<li><a href="#%E5%A4%B8%E5%85%8B%E7%BD%91%E7%9B%98-open">夸克网盘 Open</a></li>
</ul>
<h2 id="通用配置参数" tabindex="-1"><a class="header-anchor" href="#通用配置参数"><span>通用配置参数</span></a></h2>
<p>在配置任何网盘之前，需要了解一些通用配置参数：</p>
<h3 id="挂载路径-mount-path" tabindex="-1"><a class="header-anchor" href="#挂载路径-mount-path"><span>挂载路径 (Mount Path)</span></a></h3>
<p>挂载项的唯一标识，对外展示的名称，要挂载到的位置。如果要挂载到根目录，请填写 <code v-pre>/</code>。</p>
<p><img src="@source/02.使用文档/11.云端存储/images/path_h.png" alt="挂载路径示例"></p>
<blockquote>
<p>注意：不能使用重复的挂载路径名称，否则会报错。</p>
</blockquote>
<p>DANGER</p>
<p>不能使用重复的挂载路径名称，否则会报错：</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code class="language-text"><span class="line">Failed create storage in database: UNIQUE constraint failed: x_storages.mount_path</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>解决方法：使用别名对多个挂载项目进行聚合。</p>
<p>DANGER</p>
<p>挂载路径名称是必填项，不能为空，否则会报错：</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code class="language-text"><span class="line">Key: 'Storage.MountPath' Error:Field validation for 'MountPath' failed on the 'required' tag</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>解决方案：如果要挂载到根目录，请填写 /。</p>
<h3 id="序号-order" tabindex="-1"><a class="header-anchor" href="#序号-order"><span>序号 (Order)</span></a></h3>
<p>当挂载多个驱动时，用于排序。数字越小越靠前，可以填写负数。</p>
<h3 id="备注-remark" tabindex="-1"><a class="header-anchor" href="#备注-remark"><span>备注 (Remark)</span></a></h3>
<p>您可以添加备注，以方便管理。</p>
<h4 id="引用认证" tabindex="-1"><a class="header-anchor" href="#引用认证"><span>引用认证</span></a></h4>
<p>从已挂载的存储中引用认证、令牌等，实现同一个 Token 多个网盘使用。</p>
<p>目前支持如下网盘：</p>
<ul>
<li>中国移动云盘</li>
<li>阿里云盘（Oauth2）</li>
<li>天翼云盘客户端</li>
<li>123 云盘分享（引用123云盘）</li>
<li>Cloudreve V3 / V4</li>
</ul>
<p>使用方法：在存储设置中将备注(Remark)的第一行设置为：<code v-pre>ref:/挂载路径</code></p>
<p>注意事项：ref:/ 为小写英文和符号</p>
<p><img src="@source/02.使用文档/11.云端存储/images/ref_token.png" alt="引用认证示例"></p>
<h3 id="启用签名-enable-signing" tabindex="-1"><a class="header-anchor" href="#启用签名-enable-signing"><span>启用签名 (Enable signing)</span></a></h3>
<p>对文件进行签名加密(不会需要密码)，仅对本驱动生效。</p>
<p>使用场景：不想开启全部签名，也不想设置元信息加密，只想对某驱动进行签名加密防止被扫。</p>
<p>影响范围：设置--&gt;全局--&gt;签名所有 &gt; 元信息目录加密 &gt; 单驱动签名</p>
<h3 id="禁用索引-disable-index" tabindex="-1"><a class="header-anchor" href="#禁用索引-disable-index"><span>禁用索引 (Disable index)</span></a></h3>
<p>允许用户禁用存储索引。</p>
<p>例如索引选项中的忽略索引，启用禁用索引后不需要再去配置了，这样也更方便一些。</p>
<h3 id="缓存过期-cache-expiration" tabindex="-1"><a class="header-anchor" href="#缓存过期-cache-expiration"><span>缓存过期 (Cache Expiration)</span></a></h3>
<p>目录结构的缓存时间。</p>
<h3 id="web-代理-web-proxy" tabindex="-1"><a class="header-anchor" href="#web-代理-web-proxy"><span>Web 代理 (Web proxy)</span></a></h3>
<p>网页预览、下载和直接链接是否通过中转。如果打开此项，建议设置 site_url，以帮助 OpenList 更好的工作。</p>
<p>TIP</p>
<p>Web代理：是使用网页时候的策略，默认为本地代理，如果填写了代理URL并且启用了Web代理使用的是代理URL</p>
<p>WebDAV策略：是在使用WebDAV功能时候的选项，如果有302选项默认为302，如果没有302选项默认为本地代理，如果要使用代理URL请填写并且手动切换到代理URL策略</p>
<p>两者是不同的配置。</p>
<h3 id="webdav-策略-webdav-policy" tabindex="-1"><a class="header-anchor" href="#webdav-策略-webdav-policy"><span>WebDAV 策略 (Webdav policy)</span></a></h3>
<p>WebDAV 功能的选项：</p>
<ul>
<li>302 重定向：重定向到真实链接（虽然不会消耗流量，但是不建议共享使用，有封禁账户的风险）</li>
<li>使用代理 URL：重定向到代理 URL（会消耗搭建代理URL的流量）</li>
<li>本机代理：直接通过本地中转返回数据（最佳兼容性，会消耗搭建 OpenList 设备的流量）</li>
</ul>
<p>*** 三种模式说明 ***</p>
<p>以下是三种不同模式的说明图：</p>
<p><img src="@source/02.使用文档/11.云端存储/images/tree-workers.png" alt="三种模式"></p>
<h3 id="下载代理-url" tabindex="-1"><a class="header-anchor" href="#下载代理-url"><span>下载代理 URL</span></a></h3>
<p>下载代理 URL 是一个可选配置，用于通过代理服务器下载文件。当启用此功能时，文件下载将通过指定的代理 URL 进行中转。</p>
<p>配置参数：</p>
<ul>
<li>下载代理 URL：用于文件下载的代理服务器地址</li>
</ul>
<p>使用场景：</p>
<ul>
<li>当直接下载受到限制时（如地区限制、IP限制等）</li>
<li>当需要通过特定服务器中转下载以提高速度或稳定性时</li>
<li>当需要隐藏真实下载地址以增强安全性时</li>
<li>当需要统一管理和审计下载流量时</li>
</ul>
<p>配置方法：</p>
<ol>
<li>
<p>获取可用的下载代理 URL</p>
<ul>
<li>可以使用自建代理服务器</li>
<li>可以使用第三方提供的代理服务</li>
<li>确保代理服务器支持文件下载中转功能</li>
</ul>
</li>
<li>
<p>在网盘配置中填写下载代理 URL 字段</p>
<ul>
<li>在网盘配置页面找到&quot;下载代理 URL&quot;字段</li>
<li>输入完整的代理服务器地址，包括协议（如 http:// 或 https://）</li>
<li>示例：<code v-pre>http://proxy.example.com:8080</code></li>
</ul>
</li>
<li>
<p>保存配置并测试下载功能</p>
<ul>
<li>点击保存按钮保存配置</li>
<li>尝试下载一个文件以验证配置是否生效</li>
<li>检查下载日志确认流量是否通过代理服务器</li>
</ul>
</li>
</ol>
<p>详细配置示例：</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code class="language-text"><span class="line">下载代理 URL: http://download-proxy.yourdomain.com:8080</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>代理实现方式：</p>
<h4 id="_1-cloudflare-workers" tabindex="-1"><a class="header-anchor" href="#_1-cloudflare-workers"><span>1. Cloudflare Workers</span></a></h4>
<p>可以使用 Cloudflare Workers 做代理，这里填写您的 Cloudflare Workers 地址即可。</p>
<p>搭建 Workers 代码可以在 <a href="https://github.com/OpenListTeam/OpenList-Proxy/blob/main/openlist-proxy.js" target="_blank" rel="noopener noreferrer">OpenList-Proxy</a> 找到，实际使用时需要配置环境变量：</p>
<p>在 OpenList 后台挂载配置时填写下载代理URL时候的链接结尾不可以带 <code v-pre>/</code></p>
<p>更多内容请参考 <a href="https://github.com/OpenListTeam/OpenList-Proxy" target="_blank" rel="noopener noreferrer">OpenList Proxy</a></p>
<p>来自安稳的详细文字教程：<a href="https://anwen-anyi.github.io/index/11-durl.html" target="_blank" rel="noopener noreferrer">使用 Cloudflare Workers 搭建下载代理</a></p>
<h4 id="_2-通用二进制" tabindex="-1"><a class="header-anchor" href="#_2-通用二进制"><span>2. 通用二进制</span></a></h4>
<p>您可以使用另一台机器进行代理，在 <a href="https://github.com/OpenListTeam/OpenList-Proxy/releases" target="_blank" rel="noopener noreferrer">OpenList-Proxy Releases</a> 下载程序并通过 <code v-pre>./openlist-proxy -help</code> 查看使用方法。</p>
<p>更多内容请参考 <a href="https://github.com/OpenListTeam/OpenList-Proxy" target="_blank" rel="noopener noreferrer">OpenList Proxy</a></p>
<p>来自安稳的详细文字教程：<a href="https://anwen-anyi.github.io/index/11-durl.html" target="_blank" rel="noopener noreferrer">使用通用二进制搭建下载代理</a></p>
<h4 id="_3-自行开发" tabindex="-1"><a class="header-anchor" href="#_3-自行开发"><span>3. 自行开发</span></a></h4>
<p>你可以开发自己的代理程序，一般步骤是：</p>
<p>下载时会请求 <code v-pre>PROXY_URL/path?sign=sign_value</code></p>
<p>在代理程序中验证 sign，sign 的计算方法为：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code class="language-javascript"><span class="line"><span class="token keyword">const</span> to_sign <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>path<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">:</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>expireTimeStamp<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span></span>
<span class="line"><span class="token keyword">const</span> _sign <span class="token operator">=</span> <span class="token function">safeBase64</span><span class="token punctuation">(</span><span class="token function">hmac_sha256</span><span class="token punctuation">(</span>to_sign<span class="token punctuation">,</span> <span class="token constant">TOKEN</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">const</span> sign <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>_sign<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">:</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>expireTimeStamp<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>TOKEN 即管理员账户的 Token，可在 OpenList 管理页面中进入&quot;其他设置&quot;得到。</p>
<p>验证签名正确后，请求 <code v-pre>HOST/api/fs/link</code>，可以得到文件的 URL 和要携带的请求头，使用这些信息请求并返回文件内容。</p>
<p>高级配置选项：</p>
<ul>
<li>代理认证：如果代理服务器需要认证，可以在 URL 中包含用户名和密码
<ul>
<li>格式：<code v-pre>http://username:password@proxy.example.com:8080</code></li>
</ul>
</li>
<li>HTTPS 代理：使用 HTTPS 协议以增强安全性
<ul>
<li>格式：<code v-pre>https://proxy.example.com:8443</code></li>
</ul>
</li>
</ul>
<p>故障排除：</p>
<ol>
<li>
<p>代理服务器无法连接</p>
<ul>
<li>检查代理 URL 是否正确</li>
<li>确认代理服务器是否正常运行</li>
<li>检查网络连接和防火墙设置</li>
</ul>
</li>
<li>
<p>下载速度变慢</p>
<ul>
<li>检查代理服务器的性能和带宽</li>
<li>尝试更换其他代理服务器</li>
<li>确认代理服务器位置是否合适</li>
</ul>
</li>
<li>
<p>下载失败</p>
<ul>
<li>查看 OpenList 日志获取详细错误信息</li>
<li>检查代理服务器是否支持大文件传输</li>
<li>确认代理服务器是否有文件类型限制</li>
</ul>
</li>
</ol>
<p>注意事项：</p>
<ul>
<li>下载代理 URL 必须是有效的代理服务器地址</li>
<li>使用下载代理可能会增加下载时间</li>
<li>代理服务器可能会消耗额外的流量</li>
<li>某些网盘可能不支持通过代理下载，具体取决于网盘的API限制</li>
<li>如果同时配置了 Web 代理和下载代理，下载代理优先级更高</li>
</ul>
<p>最佳实践：</p>
<ul>
<li>选择地理位置较近的代理服务器以减少延迟</li>
<li>使用性能稳定的代理服务器以确保下载成功率</li>
<li>定期检查代理服务器的可用性和性能</li>
<li>对于敏感数据，使用支持 HTTPS 的代理服务器</li>
</ul>
<p><a href="https://doc.oplist.org.cn/guide/drivers/common#%E4%B8%8B%E8%BD%BD%E4%BB%A3%E7%90%86-url" target="_blank" rel="noopener noreferrer">查看官方文档</a></p>
<p>如果您需要详细了解配置参数和使用方法，可以参考OpenList官方文档。</p>
<h2 id="各网盘详细配置指南" tabindex="-1"><a class="header-anchor" href="#各网盘详细配置指南"><span>各网盘详细配置指南</span></a></h2>
<h3 id="_115-网盘开放平台" tabindex="-1"><a class="header-anchor" href="#_115-网盘开放平台"><span>115 网盘开放平台</span></a></h3>
<p>使用官方 115 开放平台 API 开发，请规范使用帐号，避免用于多人共享、图床、视频外链等不规范用途。</p>
<p><a href="https://doc.oplist.org.cn/guide/drivers/115_open" target="_blank" rel="noopener noreferrer">查看官方文档</a></p>
<p>如果您对配置参数或获取方法不清楚，建议查看OpenList官方文档获取详细说明。</p>
<h4 id="💡-115年费会员优惠推荐" tabindex="-1"><a class="header-anchor" href="#💡-115年费会员优惠推荐"><span>💡 115年费会员优惠推荐</span></a></h4>
<p>扫码可享115年费会员优惠：</p>
<p><img src="@source/02.使用文档/11.云端存储/images/115tuijian.png" alt="115年费会员优惠"></p>
<h4 id="获取刷新令牌" tabindex="-1"><a class="header-anchor" href="#获取刷新令牌"><span>获取刷新令牌</span></a></h4>
<ol>
<li>访问令牌获取页面（如：https://alistgo.com/zh/tool/115/token）</li>
<li>手机扫码后点击蓝色按钮即可获取 refresh token</li>
<li>填写时只需要填写 refresh token，不需要填写 access token</li>
</ol>
<h4 id="注意事项" tabindex="-1"><a class="header-anchor" href="#注意事项"><span>注意事项</span></a></h4>
<p>如果不小心泄漏了 Token，可以前往 115 设备登录管理解除应用授权：</p>
<ul>
<li>115 APP：【iOS 、Android】版本需要 ≥ 35.11.0</li>
<li>115 网页端：https://115.com/?mode=device_manage</li>
</ul>
<h4 id="根文件夹-id" tabindex="-1"><a class="header-anchor" href="#根文件夹-id"><span>根文件夹 ID</span></a></h4>
<p>默认根目录 ID 为：0</p>
<p>获取方式：</p>
<ol>
<li>打开 115 网盘官网</li>
<li>点击进入要设置的文件夹</li>
<li>查看 URL 中 cid 后面的数字</li>
</ol>
<p>例如：https://115.com/?cid=249163533602609229&amp;offset=0&amp;tab=&amp;mode=wangpan</p>
<p>这个文件夹的根文件夹 ID 即为 249163533602609229</p>
<h3 id="_115-网盘分享" tabindex="-1"><a class="header-anchor" href="#_115-网盘分享"><span>115 网盘分享</span></a></h3>
<p>115 分享链接存储驱动，用于挂载他人分享的 115 文件。</p>
<p><a href="https://doc.oplist.org.cn/guide/drivers/115/" target="_blank" rel="noopener noreferrer">查看官方文档</a></p>
<p>如果您对配置参数不清楚，建议查看OpenList官方文档获取详细说明。</p>
<p>配置参数：</p>
<ul>
<li>分享链接 ID：分享链接的唯一标识</li>
<li>分享密码：如果分享有密码保护，则需要填写密码</li>
</ul>
<h3 id="_123-云盘开放平台" tabindex="-1"><a class="header-anchor" href="#_123-云盘开放平台"><span>123 云盘开放平台</span></a></h3>
<p>123 云盘开放平台 API 驱动。</p>
<p><a href="https://doc.oplist.org.cn/guide/drivers/123_open/" target="_blank" rel="noopener noreferrer">查看官方文档</a></p>
<p>如果您对配置参数不清楚，建议查看OpenList官方文档获取详细说明。</p>
<p>配置参数：</p>
<ul>
<li>用户名：123 云盘账号</li>
<li>密码：123 云盘密码</li>
<li>根文件夹 ID：默认为空，表示根目录</li>
</ul>
<h3 id="中国移动云盘" tabindex="-1"><a class="header-anchor" href="#中国移动云盘"><span>中国移动云盘</span></a></h3>
<p>中国移动云盘（139 云盘）驱动，支持个人云和家庭云。</p>
<p><a href="https://doc.oplist.org.cn/guide/drivers/139/" target="_blank" rel="noopener noreferrer">查看官方文档</a></p>
<p>如果您对配置参数不清楚，建议查看OpenList官方文档获取详细说明。</p>
<p>配置参数：</p>
<ul>
<li>用户名：中国移动云盘账号（手机号）</li>
<li>密码：中国移动云盘密码</li>
<li>根文件夹 ID：默认为空，表示根目录</li>
</ul>
<h3 id="天翼云盘" tabindex="-1"><a class="header-anchor" href="#天翼云盘"><span>天翼云盘</span></a></h3>
<p>天翼云盘驱动。</p>
<p><a href="https://doc.oplist.org.cn/guide/drivers/189/" target="_blank" rel="noopener noreferrer">查看官方文档</a></p>
<p>如果您对配置参数不清楚，建议查看OpenList官方文档获取详细说明。</p>
<p>配置参数：</p>
<ul>
<li>用户名：天翼云盘账号（手机号）</li>
<li>密码：天翼云盘密码</li>
<li>根文件夹 ID：默认为空，表示根目录</li>
</ul>
<h3 id="阿里云盘-oauth2" tabindex="-1"><a class="header-anchor" href="#阿里云盘-oauth2"><span>阿里云盘（Oauth2）</span></a></h3>
<p>阿里云盘开放平台 API 驱动。</p>
<p><a href="https://doc.oplist.org.cn/guide/drivers/aliyundrive_open/" target="_blank" rel="noopener noreferrer">查看官方文档</a></p>
<p>如果您对配置参数或获取方法不清楚，建议查看OpenList官方文档获取详细说明。</p>
<p>配置参数：</p>
<ul>
<li>Refresh Token：刷新令牌</li>
<li>Root Folder ID：根文件夹 ID</li>
<li>Order By：排序字段</li>
<li>Order Direction：排序方向</li>
</ul>
<p>获取 Refresh Token 的方法：</p>
<ol>
<li>登录阿里云盘官网</li>
<li>打开浏览器开发者工具（F12）</li>
<li>在 Console 中执行 JavaScript 代码获取 token</li>
</ol>
<h3 id="百度网盘" tabindex="-1"><a class="header-anchor" href="#百度网盘"><span>百度网盘</span></a></h3>
<p>百度网盘驱动。</p>
<p><a href="https://doc.oplist.org.cn/guide/drivers/baidu/" target="_blank" rel="noopener noreferrer">查看官方文档</a></p>
<p>如果您对配置参数或获取方法不清楚，建议查看OpenList官方文档获取详细说明。</p>
<p>配置参数：</p>
<ul>
<li>Access Token：访问令牌</li>
<li>Refresh Token：刷新令牌</li>
<li>根文件夹 ID：默认为空，表示根目录</li>
</ul>
<p>获取 Token 的方法：</p>
<ol>
<li>创建百度开发者应用</li>
<li>获取授权码</li>
<li>使用授权码换取 Access Token 和 Refresh Token</li>
</ol>
<h3 id="onedrive" tabindex="-1"><a class="header-anchor" href="#onedrive"><span>OneDrive</span></a></h3>
<p>微软 OneDrive 驱动。</p>
<p><a href="https://doc.oplist.org.cn/guide/drivers/onedrive/" target="_blank" rel="noopener noreferrer">查看官方文档</a></p>
<p>如果您对配置参数或获取方法不清楚，建议查看OpenList官方文档获取详细说明。</p>
<p>配置参数：</p>
<ul>
<li>Region：区域（global/cn/de/us）</li>
<li>Tenant ID：租户 ID</li>
<li>Client ID：客户端 ID</li>
<li>Client Secret：客户端密钥</li>
<li>Refresh Token：刷新令牌</li>
<li>Root Folder Path：根文件夹路径</li>
<li>Internal Upload：是否启用内部上传</li>
</ul>
<p>获取配置参数的方法：</p>
<ol>
<li>注册 Azure 应用</li>
<li>配置 API 权限</li>
<li>获取客户端凭据</li>
<li>获取用户授权并获取刷新令牌</li>
</ol>
<h3 id="夸克网盘-open" tabindex="-1"><a class="header-anchor" href="#夸克网盘-open"><span>夸克网盘 Open</span></a></h3>
<p>夸克网盘开放平台 API 驱动。</p>
<p><a href="https://doc.oplist.org.cn/guide/drivers/quark/" target="_blank" rel="noopener noreferrer">查看官方文档</a></p>
<p>如果您对配置参数或获取方法不清楚，建议查看OpenList官方文档获取详细说明。</p>
<p>配置参数：</p>
<ul>
<li>Cookie：夸克网盘的 Cookie 信息</li>
<li>根文件夹 ID：默认为空，表示根目录</li>
</ul>
<p>获取 Cookie 的方法：</p>
<ol>
<li>登录夸克网盘网页版</li>
<li>打开浏览器开发者工具</li>
<li>在 Network 标签中找到请求头中的 Cookie 信息</li>
</ol>
</div></template>


