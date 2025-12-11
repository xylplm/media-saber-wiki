<template><div><h1 id="🎬-emby" tabindex="-1"><a class="header-anchor" href="#🎬-emby"><span>🎬 Emby</span></a></h1>
<h2 id="📋-简介" tabindex="-1"><a class="header-anchor" href="#📋-简介"><span>📋 简介</span></a></h2>
<p>Emby是一个功能强大的媒体服务器软件，可以管理和播放存储在各种设备上的多媒体内容。它支持多种媒体格式，并提供友好的用户界面，可以在各种设备上访问媒体库。</p>
<h2 id="⚙️-配置说明" tabindex="-1"><a class="header-anchor" href="#⚙️-配置说明"><span>⚙️ 配置说明</span></a></h2>
<h3 id="🔧-配置字段" tabindex="-1"><a class="header-anchor" href="#🔧-配置字段"><span>🔧 配置字段</span></a></h3>
<ul>
<li>📡 <strong>服务器地址</strong>：Emby服务器的访问地址，通常为 <code v-pre>http://IP:PORT</code> 或 <code v-pre>https://域名</code> 格式</li>
<li>🔑 <strong>API密钥</strong>：访问Emby API所需的密钥</li>
<li>📂 <strong>媒体播放地址</strong>：用于远程访问的播放地址（可选）</li>
<li>🚪 <strong>代理端口</strong>：用于strm302播放的代理端口（可选）</li>
</ul>
<h3 id="🌐-获取api密钥" tabindex="-1"><a class="header-anchor" href="#🌐-获取api密钥"><span>🌐 获取API密钥</span></a></h3>
<ol>
<li>登录Emby管理界面</li>
<li>进入&quot;高级&quot;-&gt;&quot;API密钥&quot;页面</li>
</ol>
<div align="center"><img src="@source/02.使用文档/03.媒体服务/images/emby/emby01.jpg" width="800"/></div>
3. 点击"添加新密钥"按钮
4. 输入应用名称（如"Media Saber"）
5. 复制生成的API密钥
<h3 id="📋-配置步骤" tabindex="-1"><a class="header-anchor" href="#📋-配置步骤"><span>📋 配置步骤</span></a></h3>
<ol>
<li>在媒体服务器页面点击&quot;新增媒体服务器&quot;</li>
<li>选择&quot;Emby&quot;作为服务器类型</li>
<li>填写服务器名称（自定义）</li>
<li>输入服务器地址（Emby服务器的IP和端口）</li>
<li>输入API密钥</li>
<li>点击&quot;测试&quot;按钮验证配置</li>
<li>测试成功后点击&quot;保存&quot;</li>
</ol>
<h2 id="🔌-strm302代理播放配置" tabindex="-1"><a class="header-anchor" href="#🔌-strm302代理播放配置"><span>🔌 strm302代理播放配置</span></a></h2>
<p>Emby支持通过strm302代理播放功能，特别适用于网盘资源的远程播放。</p>
<h3 id="🔌-关于-代理端口-的补充说明" tabindex="-1"><a class="header-anchor" href="#🔌-关于-代理端口-的补充说明"><span>🔌 关于&quot;代理端口&quot;的补充说明</span></a></h3>
<p>&quot;代理端口&quot;配置是为有 <strong>strm302 播放需求</strong> 的用户准备的。</p>
<p><strong>strm302 应用场景简述：</strong><br>
当媒体库为网盘资源（即通过 strm 文件构建的媒体库）时，在远程播放（例如在公司播放家中媒体库）时，strm302 可以直接建立网盘播放通道，而无需占用家庭服务器的上行带宽。</p>
<blockquote>
<p>📝 若无相关需求，此项可忽略。</p>
</blockquote>
<p><strong>配置说明：</strong></p>
<ul>
<li>填入一个未被占用的端口号</li>
<li><strong>该端口需在部署 ms 时进行端口映射</strong>（非常重要）</li>
<li>访问emby就需要访问配置的302端口，如截图配置了代理端口8097，访问emby地址为 http://127.0.0.1:8097</li>
<li>经过测试，emby版本最高[4.9.0.42]，再高版本302不生效，如使用302不生效且版本高于4.9.0.42的请做降级处理。</li>
</ul>
<hr>
<h3 id="配置说明" tabindex="-1"><a class="header-anchor" href="#配置说明"><span>配置说明</span></a></h3>
<ul>
<li>填入一个未被占用的端口号</li>
<li>该端口需在部署时进行端口映射（非常重要）</li>
<li>访问Emby就需要访问配置的302端口，如配置了代理端口8097，访问Emby地址为 http://127.0.0.1:8097</li>
<li>经过测试，Emby版本最高[4.9.0.42]，再高版本302不生效，如使用302不生效且版本高于4.9.0.42的请做降级处理</li>
</ul>
<h2 id="⚠️-注意事项" tabindex="-1"><a class="header-anchor" href="#⚠️-注意事项"><span>⚠️ 注意事项</span></a></h2>
<ul>
<li>确保Emby服务器在网络中可访问</li>
<li>API密钥需要具有足够的权限以访问媒体库信息</li>
<li>建议使用Emby 4.9.0.42或更低版本以确保所有功能正常工作</li>
<li>需要确保防火墙设置允许相关端口通信</li>
<li>对于远程访问，建议配置HTTPS以提高安全性</li>
</ul>
</div></template>


