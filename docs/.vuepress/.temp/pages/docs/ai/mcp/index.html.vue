<template><div><h1 id="media-saber-mcp-简介" tabindex="-1"><a class="header-anchor" href="#media-saber-mcp-简介"><span>Media Saber-MCP 简介</span></a></h1>
<blockquote>
<p>一个基于 MCP（Model Context Protocol）的本地电影 / 电视剧订阅服务，让订阅像聊天一样简单。</p>
</blockquote>
<hr>
<h2 id="_1-项目定位" tabindex="-1"><a class="header-anchor" href="#_1-项目定位"><span>1. 项目定位</span></a></h2>
<p>Media Saber-MCP 把「我想看」变成「已订阅」—— 只需一句话，系统就能帮你追踪影片更新、自动入库，并实时推送状态。<br>
它完全跑在本地，无需注册、无需云同步，隐私可控，速度飞快。</p>
<hr>
<h2 id="_2-功能一览" tabindex="-1"><a class="header-anchor" href="#_2-功能一览"><span>2. 功能一览</span></a></h2>
<table>
<thead>
<tr>
<th>功能</th>
<th>说明</th>
<th>示例</th>
</tr>
</thead>
<tbody>
<tr>
<td>自然语言订阅</td>
<td>解析影片名、年份、季数</td>
<td><code v-pre>订阅 复仇者联盟 2012</code></td>
</tr>
<tr>
<td>多类型支持</td>
<td>电影 / 电视剧 / 动漫</td>
<td><code v-pre>订阅 权力的游戏 S01</code></td>
</tr>
<tr>
<td>本地服务</td>
<td>零配置局域网访问</td>
<td>支持标准 streamable-http 协议连接</td>
</tr>
</tbody>
</table>
<hr>
<h2 id="_3-快速上手" tabindex="-1"><a class="header-anchor" href="#_3-快速上手"><span>3. 快速上手</span></a></h2>
<h3 id="_3-1-启动服务" tabindex="-1"><a class="header-anchor" href="#_3-1-启动服务"><span>3.1 启动服务</span></a></h3>
<h4 id="前置条件" tabindex="-1"><a class="header-anchor" href="#前置条件"><span>前置条件</span></a></h4>
<p>在使用MCP服务前，需要先配置OpenAI API相关设置：</p>
<ol>
<li>前往 <RouteLink to="/docs/system_settings/basic_settings/">基础设置</RouteLink> 页面</li>
<li>在&quot;智能体配置&quot;部分配置以下项目：
<ul>
<li><strong>OpenAI API URL</strong>：如 <code v-pre>https://api.openai.com/v1</code></li>
<li><strong>OpenAI API Key</strong>：您的API密钥</li>
<li><strong>默认模型</strong>：如 <code v-pre>gpt-3.5-turbo</code> 或 <code v-pre>gpt-4</code></li>
<li><strong>启用 MCP</strong>：开启此选项</li>
</ul>
</li>
</ol>
<h4 id="启动mcp服务" tabindex="-1"><a class="header-anchor" href="#启动mcp服务"><span>启动MCP服务</span></a></h4>
<p>在Docker环境中，需要配置环境变量来启动内置MCP服务：</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code class="language-bash"><span class="line"><span class="token assign-left variable">MS_MCP_SERVER_HTTP_ADDR</span><span class="token operator">=</span><span class="token string">"0.0.0.0:22696"</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>配置此环境变量后重启容器即可开启内置MCP服务。此时在 <RouteLink to="/docs/ai/ai/">智能体</RouteLink> 页面的&quot;新增MCP服务列表&quot;中将会看到：</p>
<ul>
<li><strong>媒体服务</strong></li>
<li><strong>MS 媒体服务</strong>：包含媒体、订阅、站点、媒体服务、云存储、系统等服务</li>
</ul>
<h3 id="_3-2-第三方客户端连接" tabindex="-1"><a class="header-anchor" href="#_3-2-第三方客户端连接"><span>3.2 第三方客户端连接</span></a></h3>
<h4 id="端口映射配置" tabindex="-1"><a class="header-anchor" href="#端口映射配置"><span>端口映射配置</span></a></h4>
<p>如需第三方客户端连接到Media Saber的MCP服务，需要将环境变量中的22696端口映射出去：</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code class="language-bash"><span class="line"><span class="token comment"># Docker 端口映射示例</span></span>
<span class="line"><span class="token parameter variable">-p</span> <span class="token number">22696</span>:22696</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="连接地址" tabindex="-1"><a class="header-anchor" href="#连接地址"><span>连接地址</span></a></h4>
<p><strong>新版本连接方式</strong>：</p>
<ul>
<li>连接地址：<code v-pre>http://IP:映射端口号</code></li>
<li>协议：使用标准的 streamable-http 协议</li>
</ul>
<p><strong>示例</strong>：</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code class="language-text"><span class="line">http://192.168.1.100:22696</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h4 id="客户端配置" tabindex="-1"><a class="header-anchor" href="#客户端配置"><span>客户端配置</span></a></h4>
<p>在可以使用的MCP客户端中添加服务：</p>
<ol>
<li><strong>选择手动添加</strong></li>
<li><strong>填入连接地址</strong>：如 <code v-pre>http://192.168.1.100:22696</code></li>
<li><strong>配置请求头</strong>：
<ul>
<li>字段名：<code v-pre>apiKey</code></li>
<li>字段值：您在Media Saber中设置的API KEY</li>
</ul>
</li>
</ol>
<h4 id="api-key-获取" tabindex="-1"><a class="header-anchor" href="#api-key-获取"><span>API KEY 获取</span></a></h4>
<p>API KEY 需要在Media Saber系统中获取：</p>
<ol>
<li>登录Media Saber系统</li>
<li>前往 <RouteLink to="/docs/main_page/my_info/">我的信息</RouteLink> 页面</li>
<li>切换到&quot;安全配置&quot;标签页</li>
<li>在&quot;API KEY 管理&quot;区域新增或使用现有的API KEY</li>
<li>复制API KEY值用于MCP客户端配置</li>
</ol>
<blockquote>
<p>💡 <strong>提示</strong>：详细的API KEY管理操作请参考 <a href="/docs/other/api_auth">API鉴权文档</a>。</p>
</blockquote>
<blockquote>
<p>⚠️ <strong>注意</strong>：配置MCP客户端时，需要将API KEY作为请求头添加，具体格式请参考 <a href="/docs/other/api_auth">API鉴权文档</a> 中的说明。</p>
</blockquote>
<p>以下是效果示例：</p>
<img src="@source/02.使用文档/02.智能体/images/dingyue.png" alt="drawing" width="600"/>
<img src="@source/02.使用文档/02.智能体/images/chenggong.png" alt="drawing" width="600"/>
<hr>
<h2 id="_4-常见问题" tabindex="-1"><a class="header-anchor" href="#_4-常见问题"><span>4. 常见问题</span></a></h2>
<p>Q: 为啥我的 MCP 服务无法使用？ 发送 订阅 xxx 直接给我回复解释？<br>
A: 请检查以下配置：</p>
<ol>
<li>确认已在 <RouteLink to="/docs/system_settings/basic_settings/">基础设置</RouteLink> 中配置了OpenAI API相关信息</li>
<li>确认已启用MCP功能</li>
<li>确认Docker环境变量 <code v-pre>MS_MCP_SERVER_HTTP_ADDR=&quot;0.0.0.0:22696&quot;</code> 已配置</li>
<li>确认MCP客户端中已正确配置API KEY请求头</li>
<li>如问题仍存在，可以尝试更换客户端重新添加MCP服务</li>
</ol>
<p>Q: 如何获取API KEY？<br>
A: 在 <RouteLink to="/docs/main_page/my_info/">我的信息</RouteLink> 页面的&quot;安全配置&quot;标签中，通过&quot;API KEY 管理&quot;功能新增或管理现有的API KEY。</p>
<p>Q: API KEY配置错误会怎样？<br>
A: 如果API KEY配置错误或未配置，MCP服务将无法正常工作，可能返回认证失败的错误信息。</p>
<p>Q: 支持哪些话语？<br>
A: 订阅+名字 / 订阅+名字+年份 / 订阅+名字+季数 / 订阅+名字+季数+年份</p>
<p>Q: 如何在智能体中使用MCP服务？<br>
A: 配置完成后，在 <RouteLink to="/docs/ai/ai/">智能体</RouteLink> 页面即可看到可用的MCP服务，包括媒体服务和MS媒体服务等。</p>
<hr>
<h2 id="_5-相关文档" tabindex="-1"><a class="header-anchor" href="#_5-相关文档"><span>5. 相关文档</span></a></h2>
<ul>
<li><RouteLink to="/docs/ai/ai/">智能体使用指南</RouteLink> - 了解如何使用智能体功能</li>
<li><RouteLink to="/docs/system_settings/basic_settings/">基础设置</RouteLink> - 配置OpenAI API和MCP相关设置</li>
<li><RouteLink to="/docs/main_page/my_info/">我的信息 - API KEY管理</RouteLink> - 获取和管理MCP服务所需的API KEY</li>
</ul>
<h2 id="💡-推荐服务" tabindex="-1"><a class="header-anchor" href="#💡-推荐服务"><span>💡 推荐服务</span></a></h2>
<p><strong>硅基流动推荐</strong></p>
<p>推荐用户使用硅基流动AI服务。现在点击链接填写邀请码注册，可立即获得2000万Tokens。</p>
<p>邀请链接：<a href="https://cloud.siliconflow.cn/i/LUTcWF0b" target="_blank" rel="noopener noreferrer">https://cloud.siliconflow.cn/i/LUTcWF0b</a></p>
<p>邀请码：LUTcWF0b</p>
<p>注册时请填写邀请码以获得奖励。</p>
<hr>
<h2 id="_6-开发-贡献" tabindex="-1"><a class="header-anchor" href="#_6-开发-贡献"><span>6. 开发 &amp; 贡献</span></a></h2>
<ul>
<li>作者: 强大的<code v-pre>J佬</code></li>
</ul>
<hr>
</div></template>


