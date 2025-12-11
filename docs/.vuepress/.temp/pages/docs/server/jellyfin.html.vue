<template><div><h1 id="🧊-jellyfin" tabindex="-1"><a class="header-anchor" href="#🧊-jellyfin"><span>🧊 Jellyfin</span></a></h1>
<h2 id="📋-简介" tabindex="-1"><a class="header-anchor" href="#📋-简介"><span>📋 简介</span></a></h2>
<p>Jellyfin是一个免费、开源的媒体服务器软件，可以管理和播放存储在各种设备上的多媒体内容。它是Emby的一个开源分支，提供了类似的功能但完全免费且社区驱动。</p>
<h2 id="⚙️-配置说明" tabindex="-1"><a class="header-anchor" href="#⚙️-配置说明"><span>⚙️ 配置说明</span></a></h2>
<h3 id="🔧-配置字段" tabindex="-1"><a class="header-anchor" href="#🔧-配置字段"><span>🔧 配置字段</span></a></h3>
<ul>
<li>📡 <strong>服务器地址</strong>：Jellyfin服务器的访问地址，通常为 <code v-pre>http://IP:8096</code> 或 <code v-pre>https://域名</code> 格式</li>
<li>🔑 <strong>API密钥</strong>：访问Jellyfin API所需的密钥</li>
<li>📂 <strong>媒体播放地址</strong>：用于远程访问的播放地址（可选）</li>
</ul>
<h3 id="🌐-获取api密钥" tabindex="-1"><a class="header-anchor" href="#🌐-获取api密钥"><span>🌐 获取API密钥</span></a></h3>
<ol>
<li>登录Jellyfin管理界面</li>
<li>进入&quot;控制台&quot;-&gt;&quot;API密钥&quot;页面</li>
<li>点击&quot;添加新密钥&quot;按钮</li>
<li>输入应用名称（如&quot;Media Saber&quot;）</li>
<li>复制生成的API密钥</li>
</ol>
<h3 id="📋-配置步骤" tabindex="-1"><a class="header-anchor" href="#📋-配置步骤"><span>📋 配置步骤</span></a></h3>
<ol>
<li>在媒体服务器页面点击&quot;新增媒体服务器&quot;</li>
<li>选择&quot;Jellyfin&quot;作为服务器类型</li>
<li>填写服务器名称（自定义）</li>
<li>输入服务器地址（Jellyfin服务器的IP和端口）</li>
<li>输入API密钥</li>
<li>点击&quot;测试&quot;按钮验证配置</li>
<li>测试成功后点击&quot;保存&quot;</li>
</ol>
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
<li>访jellyfin就需要访问配置的302端口，如截图配置了代理端口8097，访问jellyfin地址为 http://127.0.0.1:8097</li>
</ul>
<hr>
<h2 id="⚠️-注意事项" tabindex="-1"><a class="header-anchor" href="#⚠️-注意事项"><span>⚠️ 注意事项</span></a></h2>
<ul>
<li>确保Jellyfin服务器在网络中可访问</li>
<li>API密钥需要具有足够的权限以访问媒体库信息</li>
<li>默认Jellyfin端口为8096，请确保此端口未被防火墙阻止</li>
<li>需要确保防火墙设置允许相关端口通信</li>
<li>对于远程访问，建议配置HTTPS以提高安全性</li>
<li>Jellyfin作为开源软件，更新频率较高，建议关注更新日志</li>
</ul>
</div></template>


