<template><div><h1 id="🔐-api接口鉴权" tabindex="-1"><a class="header-anchor" href="#🔐-api接口鉴权"><span>🔐 API接口鉴权</span></a></h1>
<p>Media Saber所有API接口均采用API Key进行身份验证。本指南介绍不同场景下的请求方式及使用规范。</p>
<h2 id="📌-获取api-key" tabindex="-1"><a class="header-anchor" href="#📌-获取api-key"><span>📌 获取API Key</span></a></h2>
<p>API Key可通过以下路径获取：</p>
<ol>
<li>进入<RouteLink to="/docs/main_page/my_info/">我的信息</RouteLink>页面</li>
<li>切换到&quot;安全配置&quot;标签页</li>
<li>在&quot;API KEY 管理&quot;区域点击&quot;新增&quot;按钮生成新密钥</li>
</ol>
<blockquote>
<p>💡 <strong>提示</strong>：生成后请妥善保存，建议为不同用途创建独立的API Key</p>
</blockquote>
<h2 id="📡-请求方式" tabindex="-1"><a class="header-anchor" href="#📡-请求方式"><span>📡 请求方式</span></a></h2>
<p>以下是两种鉴权传递参数的方式：</p>
<h3 id="_1-query参数方式" tabindex="-1"><a class="header-anchor" href="#_1-query参数方式"><span>1. Query参数方式</span></a></h3>
<div class="language-http line-numbers-mode" data-highlighter="prismjs" data-ext="http"><pre v-pre><code class="language-http"><span class="line"><span class="token request-line"><span class="token method property">GET</span> <span class="token request-target url">/api/v1/webhook/demo?apiKey=sk-xxxxxxxxxxxxxxxx</span> <span class="token http-version property">HTTP/1.1</span></span></span>
<span class="line"><span class="token header"><span class="token header-name keyword">Host</span><span class="token punctuation">:</span> <span class="token header-value">your-domain.com</span></span></span>
<span class="line"><span class="token header"><span class="token header-name keyword">Content-Type</span><span class="token punctuation">:</span> <span class="token header-value">application/json</span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-header请求头方式" tabindex="-1"><a class="header-anchor" href="#_2-header请求头方式"><span>2. Header请求头方式</span></a></h3>
<div class="language-http line-numbers-mode" data-highlighter="prismjs" data-ext="http"><pre v-pre><code class="language-http"><span class="line"><span class="token request-line"><span class="token method property">GET</span> <span class="token request-target url">/api/v1/webhook/demo</span> <span class="token http-version property">HTTP/1.1</span></span></span>
<span class="line"><span class="token header"><span class="token header-name keyword">Host</span><span class="token punctuation">:</span> <span class="token header-value">your-domain.com</span></span></span>
<span class="line"><span class="token header"><span class="token header-name keyword">Content-Type</span><span class="token punctuation">:</span> <span class="token header-value">application/json</span></span></span>
<span class="line"><span class="token header"><span class="token header-name keyword">apiKey</span><span class="token punctuation">:</span> <span class="token header-value">sk-xxxxxxxxxxxxxxxx</span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="🛡️-安全规范" tabindex="-1"><a class="header-anchor" href="#🛡️-安全规范"><span>🛡️ 安全规范</span></a></h2>
<ol>
<li><strong>传输安全</strong>：如有条件请尽量使用HTTPS传输API Key</li>
<li><strong>存储安全</strong>：禁止明文存储在客户端或公共配置文件中</li>
<li><strong>使用原则</strong>：
<ul>
<li>为不同用途创建独立API Key</li>
<li>定期轮换密钥</li>
<li>及时停用不再使用的密钥</li>
</ul>
</li>
</ol>
<h2 id="🔁-适用范围" tabindex="-1"><a class="header-anchor" href="#🔁-适用范围"><span>🔁 适用范围</span></a></h2>
<p>以下功能均使用相同鉴权方式：</p>
<ul>
<li>Webhook接口（本指南）</li>
<li>微信消息通知（详见<a href="/docs/other/weixin">微信文档</a>）</li>
<li>MCP服务接口（详见<RouteLink to="/docs/ai/mcp/">MCP文档</RouteLink>）</li>
<li>自定义API调用</li>
</ul>
</div></template>


