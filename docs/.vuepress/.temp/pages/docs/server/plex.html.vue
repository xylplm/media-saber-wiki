<template><div><h1 id="🔵-plex" tabindex="-1"><a class="header-anchor" href="#🔵-plex"><span>🔵 Plex</span></a></h1>
<h2 id="📋-简介" tabindex="-1"><a class="header-anchor" href="#📋-简介"><span>📋 简介</span></a></h2>
<p>Plex是一个流行的媒体服务器软件，可以组织、管理和播放个人媒体收藏。它提供了精美的用户界面和强大的功能，支持在各种设备上流畅播放媒体内容。</p>
<h2 id="⚙️-配置说明" tabindex="-1"><a class="header-anchor" href="#⚙️-配置说明"><span>⚙️ 配置说明</span></a></h2>
<h3 id="🔧-配置字段" tabindex="-1"><a class="header-anchor" href="#🔧-配置字段"><span>🔧 配置字段</span></a></h3>
<ul>
<li>📡 <strong>服务器地址</strong>：Plex服务器的访问地址，通常为 <code v-pre>http://IP:32400</code> 或 <code v-pre>https://域名</code> 格式</li>
<li>🔑 <strong>API密钥（X-Plex-Token）</strong>：访问Plex API所需的令牌</li>
<li>📂 <strong>媒体播放地址</strong>：用于远程访问的播放地址（可选）</li>
</ul>
<h3 id="🌐-获取api密钥" tabindex="-1"><a class="header-anchor" href="#🌐-获取api密钥"><span>🌐 获取API密钥</span></a></h3>
<ol>
<li>登录Plex管理界面</li>
<li>点击右上角的用户头像</li>
<li>选择&quot;设置&quot;</li>
<li>在页面URL中找到<code v-pre>X-Plex-Token=</code>参数，复制其后的令牌值</li>
<li>或者通过Plex Web界面按F12打开开发者工具，在网络选项卡中查找包含令牌的请求</li>
</ol>
<h3 id="📋-配置步骤" tabindex="-1"><a class="header-anchor" href="#📋-配置步骤"><span>📋 配置步骤</span></a></h3>
<ol>
<li>在媒体服务器页面点击&quot;新增媒体服务器&quot;</li>
<li>选择&quot;Plex&quot;作为服务器类型</li>
<li>填写服务器名称（自定义）</li>
<li>输入服务器地址（Plex服务器的IP和32400端口）</li>
<li>输入API密钥（X-Plex-Token）</li>
<li>点击&quot;测试&quot;按钮验证配置</li>
<li>测试成功后点击&quot;保存&quot;</li>
</ol>
<h2 id="⚠️-注意事项" tabindex="-1"><a class="header-anchor" href="#⚠️-注意事项"><span>⚠️ 注意事项</span></a></h2>
<ul>
<li>确保Plex服务器在网络中可访问</li>
<li>默认Plex端口为32400，请确保此端口未被防火墙阻止</li>
<li>API密钥需要具有足够的权限以访问媒体库信息</li>
<li>如果使用Plex Pass订阅，可以获得更多高级功能</li>
<li>需要确保防火墙设置允许相关端口通信</li>
<li>对于远程访问，建议配置HTTPS以提高安全性</li>
<li>某些功能可能需要Plex Pass订阅才能使用</li>
</ul>
</div></template>


