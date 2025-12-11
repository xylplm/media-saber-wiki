<template><div><h1 id="📚-历史记录" tabindex="-1"><a class="header-anchor" href="#📚-历史记录"><span>📚 历史记录</span></a></h1>
<p>历史记录页面展示了所有已成功整理的媒体文件记录，可以查看文件转移详情并对相关文件进行管理。</p>
<h3 id="📋-页面功能" tabindex="-1"><a class="header-anchor" href="#📋-页面功能"><span>📋 页面功能</span></a></h3>
<p><strong>顶部操作按钮</strong></p>
<ul>
<li>🔄 <strong>重新识别</strong>：对选中的历史记录重新进行识别处理</li>
<li>🧹 <strong>清空记录</strong>：清除所有历史记录</li>
<li>🗑️ <strong>批量删除</strong>：提供多种删除选项：
<ul>
<li>删除源文件：仅删除原始文件</li>
<li>删除媒体库文件：仅删除已整理到媒体库的文件</li>
<li>删除源及媒体库文件：同时删除原始文件和媒体库文件</li>
<li>删除记录：仅删除记录，保留所有文件</li>
</ul>
</li>
</ul>
<p><strong>搜索功能</strong></p>
<p>页面顶部提供搜索框，支持通过媒体名或文件名进行模糊搜索，帮助快速定位特定记录。</p>
<h3 id="📊-记录详情" tabindex="-1"><a class="header-anchor" href="#📊-记录详情"><span>📊 记录详情</span></a></h3>
<p>每条历史记录包含以下信息：</p>
<ul>
<li>
<p><strong>媒体信息</strong>：</p>
<ul>
<li>媒体海报</li>
<li>媒体标题及年份</li>
<li>对于剧集，显示具体季数和集数</li>
<li>媒体分类信息</li>
<li>点击标题可跳转到TMDB页面查看详细信息</li>
</ul>
</li>
<li>
<p><strong>文件信息</strong>：</p>
<ul>
<li>源文件路径（点击可跳转到文件管理）</li>
<li>目标文件路径（点击可跳转到文件管理）</li>
</ul>
</li>
<li>
<p><strong>其他信息</strong>：</p>
<ul>
<li>文件来源（本地或云存储）</li>
<li>记录创建时间</li>
<li>转移方式（硬链接、软链接、复制、STRM等）</li>
<li>目录标签</li>
</ul>
</li>
</ul>
<h3 id="⚙️-操作选项" tabindex="-1"><a class="header-anchor" href="#⚙️-操作选项"><span>⚙️ 操作选项</span></a></h3>
<p>通过点击每条记录末尾的&quot;...&quot;按钮，可以打开操作菜单，提供以下选项：</p>
<ul>
<li>🔄 <strong>重新识别</strong>：对单条记录重新进行识别处理</li>
<li>🎯 <strong>手动识别</strong>：通过指定TMDB媒体信息和命名格式来重新处理文件</li>
<li>🗑️ <strong>删除源文件</strong>：删除原始文件</li>
<li>🗑️ <strong>删除媒体库文件</strong>：删除已整理到媒体库的文件</li>
<li>🗑️ <strong>删除源及媒体库文件</strong>：同时删除原始文件和媒体库文件</li>
<li>🗑️ <strong>删除转移记录</strong>：仅删除记录，保留所有文件</li>
</ul>
</div></template>


