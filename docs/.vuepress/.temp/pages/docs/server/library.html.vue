<template><div><h1 id="📚-我的媒体库" tabindex="-1"><a class="header-anchor" href="#📚-我的媒体库"><span>📚 我的媒体库</span></a></h1>
<h2 id="📋-功能说明" tabindex="-1"><a class="header-anchor" href="#📋-功能说明"><span>📋 功能说明</span></a></h2>
<p>我的媒体库功能可直接查看对应媒体服务器中的所有分类以及正在观看和最新入库的剧集电影等。</p>
<div align="center"><img src="@source/02.使用文档/03.媒体服务/images/mtfw/mtfw05.png" width="800"/></div>
<h2 id="🎯-主要功能模块" tabindex="-1"><a class="header-anchor" href="#🎯-主要功能模块"><span>🎯 主要功能模块</span></a></h2>
<h3 id="📂-我的媒体库" tabindex="-1"><a class="header-anchor" href="#📂-我的媒体库"><span>📂 我的媒体库</span></a></h3>
<p>显示媒体服务器中所有的媒体库分类，如电影库、电视剧库、音乐库等。不同类型的媒体服务器可能采用不同的展示方式：</p>
<ul>
<li><strong>标准媒体服务器</strong>（Emby、Jellyfin等）：以图片形式展示媒体库封面</li>
<li><strong>特殊媒体服务器</strong>（极空间、Plex等）：以文字形式展示媒体库名称</li>
</ul>
<p>点击媒体库可直接跳转到媒体服务器对应的媒体库页面。</p>
<h3 id="▶️-正在播放" tabindex="-1"><a class="header-anchor" href="#▶️-正在播放"><span>▶️ 正在播放</span></a></h3>
<p>显示当前正在播放的媒体内容，包括电影和电视剧。用户可以点击条目直接跳转到媒体服务器的播放页面。</p>
<h3 id="📺-近期观看" tabindex="-1"><a class="header-anchor" href="#📺-近期观看"><span>📺 近期观看</span></a></h3>
<p>显示用户最近观看过的媒体内容，方便用户继续观看未完成的影片或剧集。</p>
<h3 id="🆕-最新入库" tabindex="-1"><a class="header-anchor" href="#🆕-最新入库"><span>🆕 最新入库</span></a></h3>
<p>显示最近添加到媒体库的媒体内容，让用户及时了解媒体库的最新更新。</p>
<h2 id="🖥️-多服务器支持" tabindex="-1"><a class="header-anchor" href="#🖥️-多服务器支持"><span>🖥️ 多服务器支持</span></a></h2>
<p>如果配置了多个媒体服务器，可以通过顶部的标签页切换不同的媒体服务器查看各自的媒体库信息。</p>
<ul>
<li>点击服务器标签可切换到对应服务器的媒体库</li>
<li>每个服务器的媒体库信息独立显示</li>
<li>支持主流媒体服务器：Emby、Jellyfin、Plex、极空间等</li>
</ul>
<h2 id="🔄-自动更新" tabindex="-1"><a class="header-anchor" href="#🔄-自动更新"><span>🔄 自动更新</span></a></h2>
<p>媒体库信息会根据媒体服务器同步任务自动更新：</p>
<ul>
<li>媒体库同步时会更新所有媒体库信息</li>
<li>正在播放、近期观看和最新入库信息会定期刷新</li>
<li>可通过媒体服务器设置页面手动触发同步</li>
</ul>
<h2 id="⚠️-注意事项" tabindex="-1"><a class="header-anchor" href="#⚠️-注意事项"><span>⚠️ 注意事项</span></a></h2>
<ul>
<li>确保媒体服务器处于可访问状态</li>
<li>媒体服务器需要正确配置API密钥</li>
<li>某些功能可能需要媒体服务器的特定版本支持</li>
<li>图片加载失败时会显示默认占位图</li>
</ul>
</div></template>


