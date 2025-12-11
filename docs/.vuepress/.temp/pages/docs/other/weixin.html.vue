<template><div><h1 id="📱-微信消息通知" tabindex="-1"><a class="header-anchor" href="#📱-微信消息通知"><span>📱 微信消息通知</span></a></h1>
<p>微信消息通知功能允许用户通过企业微信接收系统通知，并支持远程交互控制。本文档详细介绍如何配置企业微信作为消息通知渠道。</p>
<blockquote>
<p>配置前请确保已在 <RouteLink to="/docs/system_settings/message_notifications/">消息通知</RouteLink> 页面了解基本配置流程</p>
</blockquote>
<h2 id="📋-配置流程概览" tabindex="-1"><a class="header-anchor" href="#📋-配置流程概览"><span>📋 配置流程概览</span></a></h2>
<ol>
<li>注册并登录企业微信</li>
<li>创建企业并获取企业ID</li>
<li>创建应用并获取应用信息</li>
<li>配置API接收</li>
<li>在Media Saber中配置微信渠道</li>
<li>配置企业可信IP</li>
<li>（可选）生成微信交互菜单</li>
</ol>
<h2 id="🏢-企业微信配置" tabindex="-1"><a class="header-anchor" href="#🏢-企业微信配置"><span>🏢 企业微信配置</span></a></h2>
<h3 id="_1-注册企业微信" tabindex="-1"><a class="header-anchor" href="#_1-注册企业微信"><span>1. 注册企业微信</span></a></h3>
<p>访问企业微信官网注册并登录：
https://work.weixin.qq.com/</p>
<h3 id="_2-获取企业id" tabindex="-1"><a class="header-anchor" href="#_2-获取企业id"><span>2. 获取企业ID</span></a></h3>
<p>进入管理后台后，点击右上角&quot;我的企业&quot;，在页面最下方获取企业ID：</p>
<p><img src="@source/02.使用文档/20.其它/images/0703.png" alt="img"></p>
<h3 id="_3-创建应用" tabindex="-1"><a class="header-anchor" href="#_3-创建应用"><span>3. 创建应用</span></a></h3>
<p>打开&quot;应用管理&quot;，在自建应用中点击&quot;创建应用&quot;：</p>
<p><img src="@source/02.使用文档/20.其它/images/0704.png" alt="img"></p>
<p>填写必要信息创建应用：</p>
<p><img src="@source/02.使用文档/20.其它/images/0705.png" alt="img"></p>
<h3 id="_4-获取应用信息" tabindex="-1"><a class="header-anchor" href="#_4-获取应用信息"><span>4. 获取应用信息</span></a></h3>
<p>在应用管理界面可以获取到以下信息：</p>
<ol>
<li>
<p><strong>AgentId</strong>：应用ID
<img src="@source/02.使用文档/20.其它/images/0706.png" alt="img"></p>
</li>
<li>
<p><strong>Secret</strong>：点击&quot;Secret&quot;的查看按钮，在手机端企业微信获取
<img src="@source/02.使用文档/20.其它/images/0707.png" alt="img"></p>
</li>
</ol>
<h2 id="🔧-api接收配置" tabindex="-1"><a class="header-anchor" href="#🔧-api接收配置"><span>🔧 API接收配置</span></a></h2>
<h3 id="_1-设置api接收" tabindex="-1"><a class="header-anchor" href="#_1-设置api接收"><span>1. 设置API接收</span></a></h3>
<p>点击应用设置中的&quot;API接收&quot;：</p>
<p><img src="@source/02.使用文档/20.其它/images/0708.png" alt="img"></p>
<h3 id="_2-填写url" tabindex="-1"><a class="header-anchor" href="#_2-填写url"><span>2. 填写URL</span></a></h3>
<p>URL格式如下：</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code class="language-text"><span class="line">https://ip:port/api/v1/webhook/wechat/AgentId?apiKey=用户密钥</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>参数说明：</p>
<ul>
<li><code v-pre>ip</code>: 你的域名或公网IP</li>
<li><code v-pre>port</code>: 你的反向代理端口</li>
<li><code v-pre>AgentId</code>: 你的企业微信应用AgentId</li>
<li><code v-pre>用户密钥</code>: 请参考 <RouteLink to="/docs/main_page/my_info/">我的信息</RouteLink> 页面获取API KEY，详细配置说明见 <RouteLink to="/docs/other/api_auth/">API鉴权文档</RouteLink></li>
</ul>
<p>示例：</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code class="language-text"><span class="line">http://demo.mediasaber.example:5858/api/v1/webhook/wechat/1000002?apiKey=sk-0c97c5856756756736778274</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="_3-配置token和encodingaeskey" tabindex="-1"><a class="header-anchor" href="#_3-配置token和encodingaeskey"><span>3. 配置Token和EncodingAESKey</span></a></h3>
<p>随机生成Token和EncodingAESKey（不要点击保存）。</p>
<h2 id="⚙️-media-saber配置" tabindex="-1"><a class="header-anchor" href="#⚙️-media-saber配置"><span>⚙️ Media Saber配置</span></a></h2>
<h3 id="_1-添加微信渠道" tabindex="-1"><a class="header-anchor" href="#_1-添加微信渠道"><span>1. 添加微信渠道</span></a></h3>
<p>进入<code v-pre>系统设置</code> → <code v-pre>消息通知</code>页面，点击&quot;添加渠道&quot;：</p>
<p><img src="@source/02.使用文档/20.其它/images/0709.png" alt="img"></p>
<h3 id="_2-填写配置信息" tabindex="-1"><a class="header-anchor" href="#_2-填写配置信息"><span>2. 填写配置信息</span></a></h3>
<p>在弹出框中填入以下5个信息：</p>
<ul>
<li>企业微信ID（CorpID）</li>
<li>AgentId</li>
<li>Secret</li>
<li>Token</li>
<li>EncodingAESKey</li>
</ul>
<p>同时配置微信代理地址：<code v-pre>http://ip:port</code></p>
<p>勾选<code v-pre>是否交互</code>，在下方推送业务类型中勾选需要推送的业务，推荐全选所有推送业务：</p>
<p><img src="@source/02.使用文档/20.其它/images/0710.png" alt="img"></p>
<h2 id="🔒-安全配置" tabindex="-1"><a class="header-anchor" href="#🔒-安全配置"><span>🔒 安全配置</span></a></h2>
<h3 id="_1-保存api接收配置" tabindex="-1"><a class="header-anchor" href="#_1-保存api接收配置"><span>1. 保存API接收配置</span></a></h3>
<p>回到企业微信的API接收配置页面，点击保存，会出现保存成功的提示，此时API接收变成已启用状态：</p>
<p><img src="@source/02.使用文档/20.其它/images/0711.png" alt="img"></p>
<h3 id="_2-配置企业可信ip" tabindex="-1"><a class="header-anchor" href="#_2-配置企业可信ip"><span>2. 配置企业可信IP</span></a></h3>
<p>点击返回，下滑找到&quot;企业可信IP&quot;并点击编辑，在弹出对话框中填入微信代理IP后点击确定：</p>
<p><img src="@source/02.使用文档/20.其它/images/0712.png" alt="img">
<img src="@source/02.使用文档/20.其它/images/0713.png" alt="img"></p>
<blockquote>
<p>在企业微信控制台<code v-pre>我的企业-&gt;微信插件</code>找到邀请关注二维码，使用微信扫码后可直接在微信使用，无需打开企业微信客户端。</p>
</blockquote>
<h2 id="📋-微信交互菜单配置" tabindex="-1"><a class="header-anchor" href="#📋-微信交互菜单配置"><span>📋 微信交互菜单配置</span></a></h2>
<p>进入<code v-pre>设置</code> → <code v-pre>消息通知</code>，点击已创建的微信通知渠道，点击<code v-pre>生成菜单</code>按钮：</p>
<p><img src="@source/02.使用文档/20.其它/images/0714.png" alt="img"></p>
<h2 id="🌐-微信代理参考" tabindex="-1"><a class="header-anchor" href="#🌐-微信代理参考"><span>🌐 微信代理参考</span></a></h2>
<p>如果需要搭建微信转发代理，可以参考以下文档：</p>
<ul>
<li><a href="/files/%E6%90%AD%E5%BB%BA%E5%BE%AE%E4%BF%A1%E8%BD%AC%E5%8F%91%E4%BB%A3%E7%90%86_.pdf">搭建微信转发代理.pdf</a></li>
<li><a href="/files/%E8%87%AA%E5%B7%B1%E6%90%AD%E5%BB%BAvps%E8%BD%AC%E5%8F%91%E4%BC%81%E4%B8%9A%E5%BE%AE%E4%BF%A1%E9%80%9A%E7%9F%A5.pdf">自己搭建 vps 转发企业微信通知.pdf</a></li>
<li><a href="/files/%E5%BE%AE%E4%BF%A1%E9%80%9A%E7%9F%A5%E6%90%AD%E5%BB%BAcaddy%E4%BB%A3%E7%90%86%E8%B6%85%E7%AE%80%E5%8D%95%E6%B5%81%E7%A8%8B.pdf">微信通知搭建 caddy 代理超简单流程.pdf</a></li>
</ul>
<h2 id="⚠️-注意事项" tabindex="-1"><a class="header-anchor" href="#⚠️-注意事项"><span>⚠️ 注意事项</span></a></h2>
<ol>
<li><strong>网络访问</strong>：确保微信代理地址公网可访问</li>
<li><strong>IP配置</strong>：正确配置企业可信IP以保证消息推送正常</li>
<li><strong>API Key</strong>：生成和管理请参考 <RouteLink to="/docs/main_page/my_info/">我的信息</RouteLink>，配置说明请参考 <RouteLink to="/docs/other/api_auth/">API鉴权文档</RouteLink></li>
<li><strong>推送配置</strong>：建议开启所有推送业务类型以获得完整通知体验</li>
<li><strong>测试验证</strong>：配置完成后使用测试功能验证配置正确性</li>
</ol>
</div></template>


