<template><div><h1 id="🎬-tmdb-缓存" tabindex="-1"><a class="header-anchor" href="#🎬-tmdb-缓存"><span>🎬 TMDB 缓存</span></a></h1>
<p>TMDB缓存页面用于管理从TMDB获取的媒体信息缓存数据，通过缓存机制减少对TMDB的访问频率，提高识别速度。</p>
<h2 id="📋-页面功能" tabindex="-1"><a class="header-anchor" href="#📋-页面功能"><span>📋 页面功能</span></a></h2>
<p><strong>顶部操作按钮</strong></p>
<ul>
<li>➕ <strong>添加</strong>：手动添加TMDB缓存记录</li>
<li>🗑️ <strong>删除</strong>：删除选中的TMDB缓存记录</li>
<li>🧹 <strong>清空</strong>：清除所有TMDB缓存记录（仅当存在数据时显示）</li>
<li>🔥 <strong>清空 TMDB 缓存</strong>：删除所有TMDB缓存数据，强制重新从TMDB获取信息</li>
</ul>
<p><strong>搜索功能</strong></p>
<p>页面顶部提供搜索框，支持通过媒体标题进行搜索，帮助快速定位特定的缓存记录。</p>
<h2 id="📊-缓存记录详情" tabindex="-1"><a class="header-anchor" href="#📊-缓存记录详情"><span>📊 缓存记录详情</span></a></h2>
<p>每条缓存记录包含以下信息：</p>
<ul>
<li><strong>索引</strong>：显示媒体类型（电影/电视剧）和标题及年份</li>
<li><strong>TMDB信息</strong>：
<ul>
<li>TMDB媒体详情链接，点击可跳转到TMDB官网查看详细信息</li>
<li>显示媒体海报</li>
</ul>
</li>
<li><strong>更新时间</strong>：显示缓存记录的最后更新时间</li>
</ul>
<h2 id="⚙️-操作选项" tabindex="-1"><a class="header-anchor" href="#⚙️-操作选项"><span>⚙️ 操作选项</span></a></h2>
<p>通过点击每条记录末尾的操作按钮，可以执行以下操作：</p>
<ul>
<li>✏️ <strong>编辑</strong>：修改TMDB缓存记录</li>
<li>🗑️ <strong>删除</strong>：删除该条缓存记录</li>
</ul>
<h2 id="i️-使用说明" tabindex="-1"><a class="header-anchor" href="#i️-使用说明"><span>ℹ️ 使用说明</span></a></h2>
<ul>
<li>当种子标题名称、文件名称无法识别时，可以通过自定义识别词对原名称进行修改，以符合<code v-pre>搜索订阅</code>、<code v-pre>刮削</code>的识别要求。</li>
<li>自定义识别词可以搭配 <RouteLink to="/docs/plugin/download/#%E5%90%8D%E7%A7%B0%E8%AF%86%E5%88%AB%E6%B5%8B%E8%AF%95">名称识别测试</RouteLink> 插件一起使用。</li>
</ul>
<p>这里记录了所有 TMDB 的缓存数据，在进行媒体识别时将优先使得缓存数据，以减少对 themoviedb 的访问，同时也加快识别过程。</p>
<ul>
<li>如 themoviedb 修改了媒体名称，可将对应的记录<code v-pre>修改</code>或者<code v-pre>删除</code>，以便重新查询 themoviedb 使用新的名称。</li>
<li><code v-pre>清空TMDB 缓存</code>将删除所有缓存数据，强制从 themoviedb 重新获取，非特别殊情不建议频繁清空 TMDB 缓存。</li>
<li>建议打开<RouteLink to="/docs/setting/base/#_6%E3%80%81%E5%AE%9E%E9%AA%8C%E5%AE%A4">TMDB 缓存过期策略</RouteLink>，避免占用多过内存。</li>
</ul>
</div></template>


