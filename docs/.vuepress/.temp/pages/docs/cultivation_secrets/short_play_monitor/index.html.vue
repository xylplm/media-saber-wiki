<template><div><h1 id="🎭-短剧刮削" tabindex="-1"><a class="header-anchor" href="#🎭-短剧刮削"><span>🎭 短剧刮削</span></a></h1>
<p><strong>短剧刮削</strong> 插件用于监控指定的「短剧」视频目录，一旦有新剧或新剧集加入，自动进行刮削和整理（如补充元数据、重命名、移动到规范目录结构等）。</p>
<h2 id="⚙️-功能特点" tabindex="-1"><a class="header-anchor" href="#⚙️-功能特点"><span>⚙️ 功能特点</span></a></h2>
<ul>
<li>监控短剧视频目录变化</li>
<li>自动刮削短剧名称、集数等信息</li>
<li>按规则整理到规范化的目录结构</li>
<li>支持定时扫描或近实时监控（视实现为准）</li>
<li>支持消息推送汇报处理结果</li>
</ul>
<h2 id="🚀-配置指南" tabindex="-1"><a class="header-anchor" href="#🚀-配置指南"><span>🚀 配置指南</span></a></h2>
<p>在插件配置页面中可以看到所有核心字段，下面从「如何填写」的角度进行说明：</p>
<h3 id="📂-监控目录与重命名规则-monitorconfs" tabindex="-1"><a class="header-anchor" href="#📂-监控目录与重命名规则-monitorconfs"><span>📂 监控目录与重命名规则（monitorConfs）</span></a></h3>
<ol>
<li>
<p><strong>监控配置 (monitorConfs)</strong><br>
每行一条规则，格式为：</p>
<p><code v-pre>监控方式#监控目录#目的目录#重命名策略</code></p>
<ul>
<li>监控方式：
<ul>
<li><code v-pre>compatibility</code>：兼容模式，使用轮询方式监听文件变动；</li>
<li>其他值：使用原生文件事件监听（推荐）。</li>
</ul>
</li>
<li>监控目录：必填，用于监听短剧文件的下载目录，支持递归子目录；</li>
<li>目的目录：必填，整理后的短剧库根目录；</li>
<li>重命名策略：
<ul>
<li><code v-pre>true</code>：按规则重命名文件；</li>
<li><code v-pre>smart</code>：开启“智能重命名 + 站点封面刮削”（推荐）；</li>
<li>其他值：不改原文件名，仅调整目录结构。</li>
</ul>
</li>
</ul>
</li>
</ol>
<blockquote>
<p>⚠️ <strong>限制</strong>：如果目的目录是监控目录的子目录，该规则会被直接忽略，以避免递归触发死循环。</p>
</blockquote>
<ol start="2">
<li>
<p><strong>排除关键词 (excludeKeywords)</strong></p>
<ul>
<li>多行文本，每行一个关键词；</li>
<li>文件路径中包含任一关键词的媒体会被跳过，不参与刮削与转移；</li>
<li>常用于排除临时目录、缓存目录或某些不想被处理的分类。</li>
</ul>
</li>
<li>
<p><strong>转移方式 (transferType)</strong></p>
<ul>
<li>控制文件从监控目录转到目的目录时的方式：
<ul>
<li><code v-pre>link</code>（默认）：硬链接；</li>
<li><code v-pre>softlink</code>：软链接；</li>
<li><code v-pre>copy</code>：复制；</li>
<li><code v-pre>move</code>：移动（原文件会被移走）。</li>
</ul>
</li>
</ul>
</li>
<li>
<p><strong>截帧封面 (enableFFmpeg)</strong></p>
<ul>
<li>布尔开关，开启后会尝试使用本机 <code v-pre>ffmpeg</code> / <code v-pre>ffprobe</code> 从视频中截取一帧作为 <code v-pre>poster.jpg</code>；</li>
<li>插件启动时会检测 FFmpeg 是否可用，如不可用会在日志中提示（Alpine 环境可使用 <code v-pre>apk add ffmpeg</code> 安装）。</li>
</ul>
</li>
</ol>
<h3 id="🎯-刮削站点与延迟通知" tabindex="-1"><a class="header-anchor" href="#🎯-刮削站点与延迟通知"><span>🎯 刮削站点与延迟通知</span></a></h3>
<ol start="5">
<li>
<p><strong>刮削站点代码 (scrapeSiteCode)</strong></p>
<ul>
<li>用于从指定 PT 站点获取短剧封面；</li>
<li>默认值为 <code v-pre>agsvpt</code>，目前代码中对 <code v-pre>agsvpt</code>、<code v-pre>ilolicon</code> 做了特殊适配；</li>
<li>插件会根据剧名调用站点搜索页，解析第一个资源详情页中的 <code v-pre>#kdescr img</code> 作为封面图。</li>
</ul>
</li>
<li>
<p><strong>入库消息延迟 (interval)</strong></p>
<ul>
<li>单位：秒；</li>
<li>用于“合并多集入库通知”：
<ul>
<li>插件会把同一部剧在一段时间内入库的多个文件进行聚合；</li>
<li>当某部剧 <strong>最后一次更新距离当前时间超过 interval 秒</strong> 时，才会发送一条汇总通知。</li>
</ul>
</li>
</ul>
</li>
<li>
<p><strong>消息推送 (notify)</strong></p>
<ul>
<li>开启后，在该短剧目录中完成一段时间的入库处理后会发送一条汇总消息；</li>
<li>若关闭，则仍会在日志中记录处理过程，但不会推送通知。</li>
</ul>
</li>
</ol>
<h3 id="🔧-工具栏操作" tabindex="-1"><a class="header-anchor" href="#🔧-工具栏操作"><span>🔧 工具栏操作</span></a></h3>
<ul>
<li><strong>运行一次 (run)</strong>：立即触发一次“全量扫描 + 刮削”，会对当前配置的所有监控目录做一遍遍历处理，用于初次整理或手动修正。</li>
</ul>
<h2 id="📖-使用说明" tabindex="-1"><a class="header-anchor" href="#📖-使用说明"><span>📖 使用说明</span></a></h2>
<h3 id="监控与触发方式" tabindex="-1"><a class="header-anchor" href="#监控与触发方式"><span>监控与触发方式</span></a></h3>
<ol>
<li>
<p><strong>实时监控</strong></p>
<ul>
<li>插件启动后，会为每个有效的 <code v-pre>monitorConfs</code> 规则创建一个目录监听器；</li>
<li>只对「创建 / 写入 / 重命名 / 移动」事件生效；</li>
<li>仅处理视频文件（内部通过 <code v-pre>IsMediaFile</code> 判断），其它类型文件会被忽略；</li>
<li>路径中包含 <code v-pre>excludeKeywords</code> 的文件会被过滤掉。</li>
</ul>
</li>
<li>
<p><strong>全量扫描（手动）</strong></p>
<ul>
<li>点击「运行一次 (run)」时，会对所有监控目录做一次 <code v-pre>walk</code>：
<ul>
<li>逐个发现符合条件的媒体文件；</li>
<li>依次走一遍“识别 → 刮削 → 转移 → 封面生成 → 聚合通知”的流程；</li>
<li>适合用于：初始化老目录、重新整理目录结构。</li>
</ul>
</li>
</ul>
</li>
</ol>
<h3 id="刮削与整理流程" tabindex="-1"><a class="header-anchor" href="#刮削与整理流程"><span>刮削与整理流程</span></a></h3>
<ol>
<li>
<p><strong>元数据识别</strong></p>
<ul>
<li>使用内置 <code v-pre>metadata</code> 模块，根据文件名和路径解析：剧名、季数、集数等信息；</li>
<li>若无法解析出中英文标题（<code v-pre>CnName/EnName</code> 都为空），该文件会被标记为“无法识别”并跳过。</li>
</ul>
</li>
<li>
<p><strong>基于 TMDB 的智能整理</strong></p>
<ul>
<li>若能获取 TMDB 详情（<code v-pre>TmdbDetails</code>）：
<ul>
<li>使用 TMDB 标题作为剧集主目录名；</li>
<li>根据解析到的季、集信息（未解析到则默认 S01E01）生成标准路径：
<ul>
<li><code v-pre>{目的目录}/{剧名}/Season 01/{剧名} - S01E01.ext</code>；</li>
</ul>
</li>
<li>自动生成 <code v-pre>tvshow.nfo</code>，包含标题、简介、年份、首播日期等基础信息；</li>
<li>调用封面生成逻辑，为该剧生成 <code v-pre>poster.jpg</code>（见下文）。</li>
</ul>
</li>
</ul>
</li>
<li>
<p><strong>简单整理模式</strong></p>
<ul>
<li>若 TMDB 信息缺失，则退化到“简单转移”：
<ul>
<li>保留相对路径结构，将文件从监控目录映射到目的目录；</li>
<li>如开启重命名：
<ul>
<li>优先从文件名中提取 <code v-pre>SxxEyy</code> 格式；</li>
<li>失败时使用识别出的剧名 + 原扩展名作为文件名；</li>
</ul>
</li>
<li>同样会尝试生成 <code v-pre>tvshow.nfo</code> 与封面。</li>
</ul>
</li>
</ul>
</li>
<li>
<p><strong>文件转移方式</strong></p>
<ul>
<li>实际的“转移”通过系统内的文件任务实现：
<ul>
<li><code v-pre>link</code>：硬链接到目标目录；</li>
<li><code v-pre>softlink</code>：软链接；</li>
<li><code v-pre>copy</code>：复制一份；</li>
<li><code v-pre>move</code>：移动（剪切）。</li>
</ul>
</li>
</ul>
</li>
</ol>
<h3 id="封面生成逻辑" tabindex="-1"><a class="header-anchor" href="#封面生成逻辑"><span>封面生成逻辑</span></a></h3>
<p>插件在生成 <code v-pre>poster.jpg</code> 时会按以下优先级尝试：</p>
<ol>
<li>
<p><strong>PT 站点封面抓取（当重命名策略为 smart 且配置了 scrapeSiteCode）</strong></p>
<ul>
<li>从配置的 PT 站点（如 <code v-pre>agsvpt</code>/<code v-pre>ilolicon</code>）按剧名搜索；</li>
<li>解析搜索结果的第一个种子详情页中 <code v-pre>#kdescr img</code> 的图片作为封面；</li>
<li>自动补全为完整 <code v-pre>https://domain/...</code> URL 并下载保存到 <code v-pre>poster.jpg</code>。</li>
</ul>
</li>
<li>
<p><strong>TMDB 剧照</strong></p>
<ul>
<li>若 TMDB 返回了剧集剧照地址（<code v-pre>StillPath</code>），则尝试从 TMDB 原图地址下载；</li>
</ul>
</li>
<li>
<p><strong>视频截帧（需开启 enableFFmpeg 且环境中有 FFmpeg/ffprobe）</strong></p>
<ul>
<li>优先获取视频总时长，取 10% 位置（最大不超过 30 秒）作为截图时间点；</li>
<li>调用 <code v-pre>ffmpeg -ss {秒} -i 输入 -vframes 1 -q:v 2 poster.jpg</code> 生成缩略图；</li>
</ul>
</li>
<li>
<p><strong>目录现有图片兜底</strong></p>
<ul>
<li>若前面步骤都失败，会扫描目录下现有的 <code v-pre>*.jpg</code> 文件；</li>
<li>选第一张作为 <code v-pre>poster.jpg</code>，并可选删除多余图片，保持目录干净。</li>
</ul>
</li>
</ol>
<h2 id="⚠️-注意事项" tabindex="-1"><a class="header-anchor" href="#⚠️-注意事项"><span>⚠️ 注意事项</span></a></h2>
<ul>
<li>仅对视频文件生效，字幕、图片、种子等附件不会触发整理；</li>
<li>短剧命名风格极其多样，遇到无法识别的情况可以先调整文件名再重新运行；</li>
<li>首次全量整理大量文件时可能耗时较久，建议在系统负载较低时执行；</li>
<li>若使用 <code v-pre>move</code> 模式，原始文件会真正移动到目的目录，请事先确认目标路径与权限；</li>
<li>启用 FFmpeg 截图时，请确保容器/主机中已正确安装 ffmpeg/ffprobe；</li>
<li>插件标记为 Limited 时，请遵守系统内关于访问频率和使用范围的限制说明。</li>
</ul>
<h2 id="🔗-相关链接" tabindex="-1"><a class="header-anchor" href="#🔗-相关链接"><span>🔗 相关链接</span></a></h2>
<ul>
<li><RouteLink to="/docs/cultivation_secrets/main/">修仙秘籍主页</RouteLink></li>
<li><RouteLink to="/docs/other/cron_rule/">Cron 表达式说明</RouteLink></li>
</ul>
</div></template>


