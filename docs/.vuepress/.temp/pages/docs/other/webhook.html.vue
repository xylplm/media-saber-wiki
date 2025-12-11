<template><div><h1 id="🪝-webhook" tabindex="-1"><a class="header-anchor" href="#🪝-webhook"><span>🪝 Webhook</span></a></h1>
<p>Webhook是一种轻量级的回调机制，允许外部服务在特定事件发生时通知Media Saber。通过配置Webhook，您可以实现第三方服务与Media Saber的实时通信，自动触发相关操作。媒体服务器集成只是其中一种应用场景。</p>
<h2 id="🎯-支持的webhook类型" tabindex="-1"><a class="header-anchor" href="#🎯-支持的webhook类型"><span>🎯 支持的Webhook类型</span></a></h2>
<p>Media Saber支持以下类型的Webhook集成：</p>
<ul>
<li>Emby Webhook</li>
<li>Jellyfin Webhook</li>
<li>Plex Webhook</li>
<li>开放消息渠道Webhook</li>
</ul>
<h2 id="📨-开放消息渠道-webhook" tabindex="-1"><a class="header-anchor" href="#📨-开放消息渠道-webhook"><span>📨 开放消息渠道 Webhook</span></a></h2>
<p>系统提供了一个开放的 Webhook 接口，允许外部系统通过配置的消息渠道发送通知。</p>
<p><strong>接口地址：</strong> <code v-pre>/api/v1/message/openSend</code></p>
<p><strong>请求方法：</strong> POST</p>
<p><strong>请求头要求：</strong></p>
<ul>
<li>Content-Type: application/json</li>
<li>apiKey: 您的API密钥（获取方法请参考<RouteLink to="/docs/main_page/my_info/">我的信息</RouteLink>） 不一定需要添加请求头，使用此接口需要API密钥认证，请参考统一的<a href="/docs/other/api_auth">API鉴权文档</a>了解详细信息。</li>
</ul>
<p><strong>请求体格式：</strong></p>
<div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json"><pre v-pre><code class="language-json"><span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">"title"</span><span class="token operator">:</span> <span class="token string">"消息标题"</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">"content"</span><span class="token operator">:</span> <span class="token string">"消息内容"</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">"imageUrl"</span><span class="token operator">:</span> <span class="token string">"https://example.com/image.jpg"</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">"proxy"</span><span class="token operator">:</span> <span class="token boolean">false</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><table>
<thead>
<tr>
<th>参数</th>
<th>类型</th>
<th>必填</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>title</td>
<td>string</td>
<td>是</td>
<td>消息标题</td>
</tr>
<tr>
<td>content</td>
<td>string</td>
<td>是</td>
<td>消息内容</td>
</tr>
<tr>
<td>imageUrl</td>
<td>string</td>
<td>否</td>
<td>完整的图片地址（可选）</td>
</tr>
<tr>
<td>proxy</td>
<td>bool</td>
<td>否</td>
<td>是否需要代理（可选），开启后图片将转换为ms接口代理地址</td>
</tr>
</tbody>
</table>
<h3 id="📝-请求示例" tabindex="-1"><a class="header-anchor" href="#📝-请求示例"><span>📝 请求示例</span></a></h3>
<p><strong>使用 cUrl:</strong></p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code class="language-text"><span class="line">curl -X POST "http[s]://your-domain.com[:port]/api/v1/message/openSend" \</span>
<span class="line">  -H "Content-Type: application/json" \</span>
<span class="line">  -H "apiKey: your-api-key" \</span>
<span class="line">  -d '{"title": "消息标题", "content": "消息内容"}'</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>使用 wget:</strong></p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code class="language-text"><span class="line">wget -qO- "http[s]://your-domain.com[:port]/api/v1/message/openSend" \</span>
<span class="line">  --header="Content-Type: application/json" \</span>
<span class="line">  --header="apiKey: your-api-key" \</span>
<span class="line">  --post-data='{"title": "消息标题", "content": "消息内容"}'</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>使用 JavaScript fetch:</strong></p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code class="language-text"><span class="line">fetch('http[s]://your-domain.com[:port]/api/v1/message/openSend', {</span>
<span class="line">  method: 'POST',</span>
<span class="line">  headers: {</span>
<span class="line">    'Content-Type': 'application/json',</span>
<span class="line">    'apiKey': 'your-api-key'</span>
<span class="line">  },</span>
<span class="line">  body: JSON.stringify({</span>
<span class="line">    title: '消息标题',</span>
<span class="line">    content: '消息内容'</span>
<span class="line">  })</span>
<span class="line">})</span>
<span class="line">.then(response => response.json())</span>
<span class="line">.then(data => console.log(data))</span>
<span class="line">.catch(error => console.error('Error:', error));</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="🔐-安全说明" tabindex="-1"><a class="header-anchor" href="#🔐-安全说明"><span>🔐 安全说明</span></a></h3>
<p>使用此接口需要API密钥认证，请参考统一的<a href="/docs/other/api_auth">API鉴权文档</a>了解详细信息。</p>
<h3 id="⚠️-注意事项" tabindex="-1"><a class="header-anchor" href="#⚠️-注意事项"><span>⚠️ 注意事项</span></a></h3>
<ol>
<li>请确保API密钥的安全性，不要在公开场合泄露</li>
<li>发送的消息将通过系统中配置的消息渠道进行推送</li>
<li>可以在消息通知页面测试配置的消息渠道是否正常工作</li>
</ol>
<h3 id="🛠-常见应用配置示例" tabindex="-1"><a class="header-anchor" href="#🛠-常见应用配置示例"><span>🛠 常见应用配置示例</span></a></h3>
<h4 id="青龙面板" tabindex="-1"><a class="header-anchor" href="#青龙面板"><span>青龙面板</span></a></h4>
<p>在青龙面板的配置文件中添加以下配置：</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code class="language-text"><span class="line">## 14. 自定义推送</span>
<span class="line">export WEBHOOK_URL="http[s]://your-domain.com[:port]/api/v1/message/openSend"</span>
<span class="line">export WEBHOOK_HEADERS="Content-Type:application/json"$'\n'"apiKey:your-api-key"</span>
<span class="line">export WEBHOOK_BODY='title:$title</span>
<span class="line">content:$content'</span>
<span class="line">export WEBHOOK_METHOD="POST"</span>
<span class="line">export WEBHOOK_CONTENT_TYPE="application/json"</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>其中：</p>
<ul>
<li><code v-pre>your-domain.com[:port]</code> 是您的Media Saber服务地址和端口</li>
<li><code v-pre>your-api-key</code> 是您的API密钥</li>
</ul>
<h4 id="qd签到框架" tabindex="-1"><a class="header-anchor" href="#qd签到框架"><span>QD签到框架</span></a></h4>
<p>在QD签到框架中，通过&quot;工具箱-自定义推送&quot;进行配置：</p>
<ul>
<li>请求方法：POST</li>
<li>地址：<code v-pre>http[s]://your-domain.com[:port]/api/v1/message/openSend</code></li>
<li>Header配置：<div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json"><pre v-pre><code class="language-json"><span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">"apiKey"</span><span class="token operator">:</span> <span class="token string">"your-api-key"</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>类型：application/json</li>
<li>POST Data：<div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json"><pre v-pre><code class="language-json"><span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">"title"</span><span class="token operator">:</span> <span class="token string">"{t}"</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">"content"</span><span class="token operator">:</span> <span class="token string">"{log}"</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
<p>其中：</p>
<ul>
<li><code v-pre>your-domain.com[:port]</code> 是您的Media Saber服务地址和端口</li>
<li><code v-pre>your-api-key</code> 是您的API密钥</li>
<li><code v-pre>{t}</code> 和 <code v-pre>{log}</code> 是QD签到框架的内置占位符</li>
</ul>
<h4 id="lucky" tabindex="-1"><a class="header-anchor" href="#lucky"><span>Lucky</span></a></h4>
<p>在Lucky的DDNS任务编辑中，通过Webhook启用进行配置：</p>
<ul>
<li>接口地址：<code v-pre>http[s]://your-domain.com[:port]/api/v1/message/openSend</code></li>
<li>请求头：<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code class="language-text"><span class="line">apiKey: sk-XXXX</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></li>
<li>请求体：<div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json"><pre v-pre><code class="language-json"><span class="line"><span class="token punctuation">{</span><span class="token property">"title"</span><span class="token operator">:</span><span class="token string">"🛜域名同步反馈"</span><span class="token punctuation">,</span><span class="token property">"content"</span><span class="token operator">:</span><span class="token string">"IP地址：\n#{ipAddr} \n域名更新成功列表：\n#{successDomainsLine}\n域名更新失败列表：\n#{failedDomainsLine}\n同步触发时间: \n#{time}"</span><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></li>
<li>接口调用成功包含的字符串：<code v-pre>SUCCESS</code> （或者禁用Webhook接口调用成功字符串检测）</li>
</ul>
<p>填写完成后可点击 <code v-pre>Webhook手动触发测试</code> 按钮测试是否正确，最后点击修改任务保存修改。</p>
<p>其中：</p>
<ul>
<li><code v-pre>your-domain.com[:port]</code> 是您的Media Saber服务地址和端口</li>
<li><code v-pre>sk-XXXX</code> 是您的API密钥</li>
</ul>
<h2 id="🎬-emby-webhook配置" tabindex="-1"><a class="header-anchor" href="#🎬-emby-webhook配置"><span>🎬 Emby/Webhook配置</span></a></h2>
<p><strong>1. 进入Webhook设置</strong></p>
<p>打开Emby控制台，进入<code v-pre>设置</code> → <code v-pre>服务器</code> → <code v-pre>Webhook</code>，点击<code v-pre>添加Webhook</code>：</p>
<p><img src="@source/02.使用文档/20.其它/images/0601.png" alt="img"></p>
<p><strong>2. 配置Webhook参数</strong></p>
<p>填写以下信息：</p>
<ul>
<li><strong>名称</strong>：自定义Webhook名称</li>
<li><strong>URL</strong>：<code v-pre>http[s]://your-domain.com[:port]/api/v1/webhook/emby?apiKey=your-api-key</code></li>
<li><strong>请求内容类型</strong>：选择<code v-pre>application/json</code></li>
</ul>
<blockquote>
<p>🔑 <strong>API Key配置</strong>：请参考<RouteLink to="/docs/other/api_auth/">API鉴权文档</RouteLink>获取配置说明</p>
</blockquote>
<p>配置完成后可以点击<code v-pre>发送测试Webhook</code>验证配置：</p>
<p><img src="@source/02.使用文档/20.其它/images/0602.png" alt="img"></p>
<p><strong>3. 验证测试消息</strong></p>
<p>配置成功后，Media Saber应该会收到一条测试信息：</p>
<p><img src="@source/02.使用文档/20.其它/images/0603.png" alt="img"></p>
<p><strong>4. 配置事件和用户</strong></p>
<p>继续选择要触发通知的事件、用户和媒体库，按需选择您想监控的选项：</p>
<p><img src="@source/02.使用文档/20.其它/images/0604.png" alt="img"></p>
<p><strong>5. 完成配置</strong></p>
<p>填写完所有信息后，点击<code v-pre>添加Webhook</code>完成配置：</p>
<p><img src="@source/02.使用文档/20.其它/images/0605.png" alt="img"></p>
<p><strong>6. 测试功能</strong></p>
<p>此时在Emby中操作您刚刚勾选的事件时，Media Saber会收到相关信息通知：</p>
<p><img src="@source/02.使用文档/20.其它/images/0606.png" alt="img"></p>
<h2 id="🐙-jellyfin-webhook配置" tabindex="-1"><a class="header-anchor" href="#🐙-jellyfin-webhook配置"><span>🐙 Jellyfin Webhook配置</span></a></h2>
<blockquote>
<p>GitHub文档说明：<a href="https://github.com/jellyfin/jellyfin-plugin-webhook" target="_blank" rel="noopener noreferrer">https://github.com/jellyfin/jellyfin-plugin-webhook</a></p>
</blockquote>
<p><strong>1. 安装Webhook插件</strong></p>
<p>打开Jellyfin控制台，进入<code v-pre>插件</code> → <code v-pre>目录</code>，找到Webhook插件并点击：</p>
<p><img src="@source/02.使用文档/20.其它/images/0607.png" alt="img"></p>
<p>点击<code v-pre>安装Webhook</code>：</p>
<p><img src="@source/02.使用文档/20.其它/images/0608.png" alt="img"></p>
<p><strong>2. 重启Jellyfin服务</strong></p>
<p>安装完成后会提示重启Jellyfin服务，按要求重启后状态显示<code v-pre>active</code>表示成功：</p>
<p><img src="@source/02.使用文档/20.其它/images/0609.png" alt="img"></p>
<p><strong>3. 配置Webhook</strong></p>
<p>在插件设置中，填写以下信息：</p>
<ul>
<li><strong>Server Url</strong>：Jellyfin服务器URL</li>
<li>点击<code v-pre>Add Generic Destination</code>按钮新增一个Hook</li>
</ul>
<p>配置以下参数：</p>
<ul>
<li><strong>Webhook Name</strong>：自定义Webhook名称</li>
<li><strong>Webhook Url</strong>：<code v-pre>http[s]://your-domain.com[:port]/api/v1/webhook/emby?apiKey=your-api-key</code></li>
<li><strong>Notification Type</strong>：勾选你想触发通知的通知类型</li>
<li><strong>User Filter</strong>：勾选你想触发通知的用户</li>
<li><strong>Item Type</strong>：勾选你想监控的媒体类型</li>
<li><strong>Send All Properties</strong> 和 <strong>Template</strong>：二选一即可，默认勾选<code v-pre>Send All Properties (ignores template)</code></li>
<li>点击<code v-pre>Add Request Header</code>，新增一组请求头：
<ul>
<li>Key: <code v-pre>Content-Type</code></li>
<li>Value: <code v-pre>application/json</code></li>
</ul>
</li>
</ul>
<p>设置完成后点击保存：</p>
<p><img src="@source/02.使用文档/20.其它/images/0610.png" alt="img"></p>
<p><strong>4. 完成配置</strong></p>
<p>此时Webhook设置完成：</p>
<p><img src="@source/02.使用文档/20.其它/images/0611.png" alt="img"></p>
<p><strong>5. 测试功能</strong></p>
<p>在Jellyfin中操作您勾选的通知类型时，Media Saber会收到相关信息：</p>
<p><img src="@source/02.使用文档/20.其它/images/0612.png" alt="img"></p>
<p><strong>6. 调试日志（可选）</strong></p>
<p>如果Webhook未正常工作，可以启用调试日志来排查问题。</p>
<p>编辑<code v-pre>logging.default.json</code>文件，在文档中的&quot;Serilog&quot;下添加一行内容：</p>
<div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json"><pre v-pre><code class="language-json"><span class="line"><span class="token property">"Jellyfin.Plugin.Webhook"</span><span class="token operator">:</span> <span class="token string">"Debug"</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>记得在<code v-pre>&quot;System&quot;: &quot;Warning&quot;</code>的末尾添加逗号：</p>
<p><img src="@source/02.使用文档/20.其它/images/0613.png" alt="img">
<img src="@source/02.使用文档/20.其它/images/0614.png" alt="img"></p>
<h2 id="🎬-plex-webhook配置" tabindex="-1"><a class="header-anchor" href="#🎬-plex-webhook配置"><span>🎬 Plex Webhook配置</span></a></h2>
<p><strong>1. 进入Webhook设置</strong></p>
<p>打开Plex控制台，进入<code v-pre>设置</code> → <code v-pre>Webhook</code>：</p>
<p><strong>2. 添加Webhook</strong></p>
<p>点击<code v-pre>添加Webhook</code>按钮，输入以下信息：</p>
<ul>
<li><strong>URL</strong>：<code v-pre>http[s]://your-domain.com[:port]/api/v1/webhook/plex?apiKey=your-api-key</code></li>
</ul>
<blockquote>
<p>🔑 <strong>API Key配置</strong>：请参考<RouteLink to="/docs/other/api_auth/">API鉴权文档</RouteLink>获取配置说明</p>
</blockquote>
<p><strong>3. 完成配置</strong></p>
<p>点击保存完成Webhook配置。</p>
<p><strong>4. 测试功能</strong></p>
<p>在Plex中播放或操作媒体时，Media Saber会收到相关信息通知。</p>
<h2 id="⚠️-注意事项-1" tabindex="-1"><a class="header-anchor" href="#⚠️-注意事项-1"><span>⚠️ 注意事项</span></a></h2>
<ol>
<li><strong>网络连接</strong>：确保Media Saber服务地址可以从媒体服务器访问</li>
<li><strong>API Key配置</strong>：正确配置API Key以确保身份验证通过，详细获取方法请参考 <RouteLink to="/docs/main_page/my_info/#-api-key-%E7%AE%A1%E7%90%86">我的信息 - API KEY管理</RouteLink></li>
<li><strong>事件选择</strong>：根据实际需求选择合适的事件类型，避免过多不必要的通知</li>
<li><strong>连接监控</strong>：定期检查Webhook连接状态，确保通信正常</li>
<li><strong>性能优化</strong>：在生产环境中建议关闭调试日志以提升性能</li>
</ol>
</div></template>


