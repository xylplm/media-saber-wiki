<template><div><h1 id="📺-媒体服务-媒体服务器" tabindex="-1"><a class="header-anchor" href="#📺-媒体服务-媒体服务器"><span>📺 媒体服务 - 媒体服务器</span></a></h1>
<hr>
<h2 id="📋-媒体服务器列表" tabindex="-1"><a class="header-anchor" href="#📋-媒体服务器列表"><span>📋 媒体服务器列表</span></a></h2>
<p>媒体服务器列表页面展示了所有已添加的媒体服务器，支持多种媒体服务器类型，如 Emby、Jellyfin、Plex 等。</p>
<h3 id="🎯-功能操作" tabindex="-1"><a class="header-anchor" href="#🎯-功能操作"><span>🎯 功能操作</span></a></h3>
<ul>
<li>🔄 <strong>刷新</strong>：点击刷新按钮可重新加载媒体服务器列表数据</li>
<li>➕ <strong>新增媒体服务器</strong>：添加新的媒体服务器配置</li>
<li>⏰ <strong>定时任务</strong>：设置媒体库自动同步的定时任务</li>
<li>✏️ <strong>编辑</strong>：修改现有媒体服务器配置</li>
<li>❌ <strong>删除</strong>：删除不需要的媒体服务器配置</li>
<li>▶️ <strong>同步</strong>：手动同步媒体服务器的媒体库数据</li>
<li>👁️ <strong>同步历史记录</strong>：查看媒体服务器的同步历史记录</li>
<li>🗑️ <strong>删除同步历史记录</strong>：清除媒体服务器的同步历史记录</li>
</ul>
<h3 id="📊-状态显示" tabindex="-1"><a class="header-anchor" href="#📊-状态显示"><span>📊 状态显示</span></a></h3>
<ul>
<li><strong>类型</strong>：显示媒体服务器的类型图标（Emby、Jellyfin、Plex等）</li>
<li><strong>名称</strong>：自定义的媒体服务器名称</li>
<li><strong>开启</strong>：显示媒体服务器是否启用</li>
<li><strong>默认</strong>：显示是否为默认媒体服务器</li>
<li><strong>同步信息</strong>：显示最近一次同步的统计信息（电影数、电视剧数、耗时等）</li>
<li><strong>更新时间</strong>：显示配置的最后更新时间</li>
</ul>
<hr>
<h2 id="📚-支持的媒体服务器类型" tabindex="-1"><a class="header-anchor" href="#📚-支持的媒体服务器类型"><span>📚 支持的媒体服务器类型</span></a></h2>
<p>系统支持多种主流媒体服务器：</p>
<ul>
<li>🎬 <strong>Emby</strong>：功能强大的媒体服务器 <a href="/docs/server/emby">[查看配置教程]</a></li>
<li>🧊 <strong>Jellyfin</strong>：开源的媒体服务器 <a href="/docs/server/jellyfin">[查看配置教程]</a></li>
<li>🔵 <strong>Plex</strong>：流行的媒体服务器 <a href="/docs/server/plex">[查看配置教程]</a></li>
<li>🟢 <strong>绿影视 (UGoS)</strong>：绿联私有云设备上的媒体服务器 <a href="/docs/server/ugos">[查看配置教程]</a></li>
<li>🔵 <strong>极影视 (极空间)</strong>：极空间私有云设备上的媒体服务器 <a href="/docs/server/zspace">[查看配置教程]</a></li>
</ul>
<h2 id="每种媒体服务器都需要相应的配置信息-如服务器地址和api密钥。-点击上面的查看配置教程可以获得每一种支持的媒体服务器的详细配置方式。" tabindex="-1"><a class="header-anchor" href="#每种媒体服务器都需要相应的配置信息-如服务器地址和api密钥。-点击上面的查看配置教程可以获得每一种支持的媒体服务器的详细配置方式。"><span>每种媒体服务器都需要相应的配置信息，如服务器地址和API密钥。 点击上面的查看配置教程可以获得每一种支持的媒体服务器的详细配置方式。</span></a></h2>
<h2 id="➕-新增媒体服务器" tabindex="-1"><a class="header-anchor" href="#➕-新增媒体服务器"><span>➕ 新增媒体服务器</span></a></h2>
<p>以 <strong>Emby</strong> 为例，输入服务器地址、名称、Api Key，点击&quot;保存&quot;即可完成添加。</p>
<div align="center"><img src="@source/02.使用文档/03.媒体服务/images/mtfw/mtfw01.jpg" width="800"/></div>
<blockquote>
<p>💡 建议在服务器地址中直接填入<strong>外网访问地址</strong>。<br>
若填写的是内网地址（例如 <code v-pre>http://ip:port</code>），则必须在&quot;媒体播放地址&quot;中填入外网访问地址以保证远程可访问。</p>
</blockquote>
<h3 id="🎛️-媒体服务器配置字段" tabindex="-1"><a class="header-anchor" href="#🎛️-媒体服务器配置字段"><span>🎛️ 媒体服务器配置字段</span></a></h3>
<ul>
<li>📺 <strong>媒体服务器</strong>：选择媒体服务器类型（Emby/Jellyfin/Plex等）</li>
<li>📝 <strong>名称</strong>：自定义媒体服务器名称</li>
<li>✅ <strong>是否开启</strong>：控制媒体服务器是否启用</li>
<li>⭐ <strong>默认</strong>：设置为默认媒体服务器，用于判断媒体是否存在或缺失集数</li>
<li>其他字段：根据媒体服务器类型填写相应的字段</li>
</ul>
<h3 id="🧪-测试连接" tabindex="-1"><a class="header-anchor" href="#🧪-测试连接"><span>🧪 测试连接</span></a></h3>
<p>在保存前可以点击&quot;测试&quot;按钮验证配置是否正确，测试通过后再保存配置。</p>
<hr>
<h2 id="🔄-同步媒体服务器" tabindex="-1"><a class="header-anchor" href="#🔄-同步媒体服务器"><span>🔄 同步媒体服务器</span></a></h2>
<p>点击操作栏中的同步按钮（小飞机图标）。</p>
<div align="center"><img src="@source/02.使用文档/03.媒体服务/images/mtfw/mtfw03.jpg" width="800"/></div>
<p>选择需要同步的媒体服务器，然后点击&quot;同步&quot;。</p>
<div align="center"><img src="@source/02.使用文档/03.媒体服务/images/mtfw/mtfw04.jpg" width="800"/></div>
<p>同步完成后，可以在&quot;我的媒体库&quot;中查看同步效果。</p>
<div align="center"><img src="@source/02.使用文档/03.媒体服务/images/mtfw/mtfw05.png" width="800"/></div>
<hr>
<h2 id="⏰-定时同步任务" tabindex="-1"><a class="header-anchor" href="#⏰-定时同步任务"><span>⏰ 定时同步任务</span></a></h2>
<p>可以通过&quot;定时任务&quot;按钮设置媒体库的自动同步计划，系统将在指定时间自动同步所有启用的媒体服务器。</p>
<hr>
<h2 id="⚠️-注意事项" tabindex="-1"><a class="header-anchor" href="#⚠️-注意事项"><span>⚠️ 注意事项</span></a></h2>
<ul>
<li>确保媒体服务器可以正常访问</li>
<li>API密钥需要具有足够的权限以获取媒体库信息</li>
<li>建议设置一个默认媒体服务器用于媒体状态检查</li>
<li>定期同步媒体库以保持数据准确性</li>
</ul>
</div></template>


