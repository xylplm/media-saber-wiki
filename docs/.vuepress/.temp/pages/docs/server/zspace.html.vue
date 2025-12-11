<template><div><h1 id="🔵-极影视-极空间" tabindex="-1"><a class="header-anchor" href="#🔵-极影视-极空间"><span>🔵 极影视 (极空间)</span></a></h1>
<h2 id="📋-简介" tabindex="-1"><a class="header-anchor" href="#📋-简介"><span>📋 简介</span></a></h2>
<p>极影视是极空间私有云设备上的媒体服务器软件，可以管理和播放存储在极空间设备上的多媒体内容。</p>
<h2 id="⚙️-配置说明" tabindex="-1"><a class="header-anchor" href="#⚙️-配置说明"><span>⚙️ 配置说明</span></a></h2>
<h3 id="🔧-配置字段" tabindex="-1"><a class="header-anchor" href="#🔧-配置字段"><span>🔧 配置字段</span></a></h3>
<ul>
<li>📡 <strong>服务器地址</strong>：极空间设备的访问地址，通常为 <code v-pre>http://IP:PORT</code> 格式</li>
<li>🔑 <strong>极空间cookie</strong>：访问极影视API所需的cookie</li>
</ul>
<h3 id="🍪-获取cookie" tabindex="-1"><a class="header-anchor" href="#🍪-获取cookie"><span>🍪 获取Cookie</span></a></h3>
<p>极空间设备可能需要Cookie进行身份验证，获取方式请参考<a href="/docs/other/zspace_cookie">极空间获取Cookie教程</a>。</p>
<h3 id="📋-配置步骤" tabindex="-1"><a class="header-anchor" href="#📋-配置步骤"><span>📋 配置步骤</span></a></h3>
<ol>
<li>在媒体服务器页面点击&quot;新增媒体服务器&quot;</li>
<li>选择&quot;极影视&quot;作为服务器类型</li>
<li>填写服务器名称（自定义）</li>
<li>输入服务器地址（极空间设备的IP和端口）</li>
<li>输入极空间Cookie</li>
<li>点击&quot;测试&quot;按钮验证配置</li>
<li>测试成功后点击&quot;保存&quot;</li>
</ol>
<h2 id="⚠️-注意事项" tabindex="-1"><a class="header-anchor" href="#⚠️-注意事项"><span>⚠️ 注意事项</span></a></h2>
<ul>
<li>确保极空间设备在网络中可访问</li>
<li>极空间Cookie需要具有足够的权限以访问媒体库信息</li>
<li>极影视版本可能影响API兼容性</li>
<li>需要确保防火墙设置允许相关端口通信</li>
<li>某些功能可能需要极空间设备的特定固件版本支持</li>
</ul>
</div></template>


