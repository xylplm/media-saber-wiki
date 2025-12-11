<template><div><h1 id="🎯-手动识别" tabindex="-1"><a class="header-anchor" href="#🎯-手动识别"><span>🎯 手动识别</span></a></h1>
<p>手动识别页面用于处理未被自动识别的媒体文件，用户可以对这些文件进行重新识别或手动指定媒体信息。</p>
<h2 id="📋-页面功能" tabindex="-1"><a class="header-anchor" href="#📋-页面功能"><span>📋 页面功能</span></a></h2>
<p><strong>顶部操作按钮</strong></p>
<ul>
<li>➕ <strong>重新识别</strong>：对选中的未识别记录重新进行识别处理，适用于因网络不稳定等原因导致识别失败的情况</li>
<li>🗑️ <strong>批量删除</strong>：删除选中的未识别记录</li>
<li>🧹 <strong>清空记录</strong>：清除所有未识别记录</li>
</ul>
<p><strong>搜索功能</strong></p>
<p>页面顶部提供搜索框，支持通过媒体名或文件名进行模糊搜索，帮助快速定位特定未识别记录。</p>
<h2 id="📊-记录字段详解" tabindex="-1"><a class="header-anchor" href="#📊-记录字段详解"><span>📊 记录字段详解</span></a></h2>
<p>每条未识别记录包含以下信息：</p>
<h3 id="📁-文件信息字段" tabindex="-1"><a class="header-anchor" href="#📁-文件信息字段"><span>📁 文件信息字段</span></a></h3>
<ul>
<li>
<p><strong>文件来源</strong>：标识文件来自本地还是云存储</p>
<ul>
<li>本地：文件存储在本地磁盘上</li>
<li>云存储：文件存储在云盘等网络存储中</li>
</ul>
</li>
<li>
<p><strong>源目录</strong>：显示文件的原始路径</p>
<ul>
<li>点击路径可跳转到文件管理页面进行进一步操作</li>
<li>对于云存储文件，点击可跳转到云存储管理页面</li>
</ul>
</li>
<li>
<p><strong>失败信息</strong>：显示识别失败的具体原因</p>
<ul>
<li>例如：无法匹配到TMDB信息、文件名格式不规范等</li>
</ul>
</li>
</ul>
<h3 id="⏰-时间和配置字段" tabindex="-1"><a class="header-anchor" href="#⏰-时间和配置字段"><span>⏰ 时间和配置字段</span></a></h3>
<ul>
<li><strong>时间</strong>：记录的更新时间（最后处理时间）</li>
<li><strong>转移方式</strong>：文件整理时使用的转移方式
<ul>
<li>硬链接：创建指向原始文件的硬链接</li>
<li>软链接：创建指向原始文件的软链接</li>
<li>复制：将文件完整复制到目标位置</li>
<li>移动：将文件移动到目标位置</li>
<li>Strm：创建strm流媒体文件指向原始文件</li>
</ul>
</li>
<li><strong>目录标签</strong>：关联的目录标签信息</li>
</ul>
<h3 id="⚙️-操作选项" tabindex="-1"><a class="header-anchor" href="#⚙️-操作选项"><span>⚙️ 操作选项</span></a></h3>
<p>通过点击每条记录末尾的操作按钮，可以执行以下操作：</p>
<ul>
<li>🔄 <strong>重新识别</strong>：对单条记录重新进行识别处理</li>
<li>🎯 <strong>手动识别</strong>：通过指定TMDB媒体信息和命名格式来处理文件</li>
<li>🗑️ <strong>删除转移记录</strong>：删除该条未识别记录</li>
</ul>
<h2 id="🎯-手动识别详细说明" tabindex="-1"><a class="header-anchor" href="#🎯-手动识别详细说明"><span>🎯 手动识别详细说明</span></a></h2>
<p>选择<code v-pre>手动识别</code>通过指定 TMDB 媒体信息以及指定命名格式的方式执行文件整理。</p>
<ul>
<li><strong>类型</strong>：根据当前文件的类型选择对应的类型，如为电视剧文件名中需要有集数，<code v-pre>动漫</code>只指动漫剧集，动漫命名格式必须选择此项。</li>
<li><strong>TMDB ID</strong>：点击<code v-pre>查询</code>按钮，输入<code v-pre>名称</code>查询 TMDB 媒体信息并选择，也可直接输入 TMDBID。</li>
<li><strong>最小文件大小</strong>：<code v-pre>留空</code>将使用基础设置中的转移最小文件大小设置，如不限制大小需输入<code v-pre>0</code>。</li>
<li><strong>集数指定</strong>：通过指定集数和 Part 解决无法从文件名中识别出集数和 Part 的情况。<code v-pre>指定集数</code>、<code v-pre>指定Part</code>都不填，用默认识别。
<ul>
<li><strong>指定具体集数</strong>：例如 <code v-pre>1</code>表示第一集, <code v-pre>1-2</code>表示第 1-2 集(1,2 合起来当作一集)，此选项优先级最高。</li>
<li><strong>指定 Part</strong>: 需符合以下正则写法<code v-pre>(PART[0-9ABCI]{0,2}|^CD[0-9]{0,2}|^DVD[0-9]{0,2}|^DISK[0-9]{0,2}|^DISC[0-9]{0,2})</code>，例如<code v-pre>Part1</code>, <code v-pre>PartC</code>, <code v-pre>PartIII</code>, <code v-pre>Cd1</code>, <code v-pre>Dvd2</code>, <code v-pre>Disk10</code>, <code v-pre>Disc12</code>。</li>
</ul>
</li>
<li><strong>高级集数定位</strong>：<code v-pre>{ep}定位集数</code>、<code v-pre>起始集,终止集</code>、<code v-pre>集数偏移</code>都不填，用默认识别。
<ul>
<li><strong>标定集数位置</strong>：使用<code v-pre>{ep}</code>标字集数位置，例如：<code v-pre>(BD)十二国記 第45話「東の海神 西の滄海 五章」(1440x1080 x264-10bpp flac).mkv</code>、<code v-pre>(BD)十二国記 第32話「風の万里 黎明の空　九章」(1440x1080 x264-10bpp flac).mkv</code>，此处可以填<code v-pre>(BD)十二国記 第{ep}話{a}(1440x1080 x264-10bpp flac).mkv</code> <code v-pre>{ep}</code>表示集，<code v-pre>{a}</code>表示随意用一个变量来替代不需要的但又不一致的部分，如果除了集数外没有其余不一样的内容，则只标定<code v-pre>{ep}</code>就行。</li>
<li><strong>起始集,终止集</strong>：裁定处理集数过滤范围，例如<code v-pre>2,4</code>只取第 2 集到第 4 集。</li>
<li><strong>集数偏移</strong>：例如<code v-pre>{ep}</code>定位出集数是 11, 实际是第 1 集, 此处填<code v-pre>-10</code>, 以应付多季合集的场景。</li>
</ul>
</li>
</ul>
<h2 id="🛠-自定义识别" tabindex="-1"><a class="header-anchor" href="#🛠-自定义识别"><span>🛠 自定义识别</span></a></h2>
<p>选择<code v-pre>自定义识别</code>通过指定 路径、TMDB 媒体信息以及指定命名格式的方式执行文件整理。</p>
</div></template>


