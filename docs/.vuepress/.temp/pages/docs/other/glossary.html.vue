<template><div><h1 id="📚-名词解释" tabindex="-1"><a class="header-anchor" href="#📚-名词解释"><span>📚 名词解释</span></a></h1>
<p>本文档解释了系统中使用的重要术语和概念，帮助用户更好地理解和使用系统功能。</p>
<h2 id="📱-pwa" tabindex="-1"><a class="header-anchor" href="#📱-pwa"><span>📱 PWA</span></a></h2>
<p>Media Saber 的 WEB 界面支持<code v-pre>PWA（Progressive Web App）</code>，手机上（Windows11 及 MacOS 也可以）将网页保存到主屏幕可像 App 一样使用，效果如图所示。不同系统保存到主屏幕的方式会有所不同，IOS 选择 Safari 中间的分享图标，选择<code v-pre>添加到主屏幕</code>菜单即可。</p>
<img src="@source/02.使用文档/20.其它/images/pwa.jpg" alt="drawing" width="300"/>
<h2 id="🔄-转移方式" tabindex="-1"><a class="header-anchor" href="#🔄-转移方式"><span>🔄 转移方式</span></a></h2>
<p>系统在<RouteLink to="/docs/directory_management/directory_sync/">目录同步</RouteLink>和<RouteLink to="/docs/media_organization/manual_identification/">文件整理</RouteLink>等场景中支持多种文件转移方式：</p>
<ul>
<li><strong>硬链接</strong>：一份文件生成多个文件入口，但只占用一份存储空间，只有所有入口都删除后才能释放文件占用空间；可以修改硬链接后的文件名但不会影响原文件做种（不能修改文件内容）；要求在同一磁盘下才能硬链接。</li>
<li><strong>软链接</strong>：类似于快捷方式，原文件删除后软链接即会失效；使用软链接时的原文件路径需要与生成软链接时的原文件路径保持一致，否则无法使用，也就是在 docker 环境下，映射前后的目录路径需要一致。</li>
<li><strong>复制</strong>：复制一份副本，多占用一份空间。</li>
<li><strong>移动</strong>：移动文件存储位置，会影响原文件做种。</li>
<li><strong>Strm</strong>：创建 strm 流媒体文件指向原始文件，用于<RouteLink to="/docs/cloud_storage/strm_generate/">云端存储</RouteLink>等场景。</li>
<li><strong>Rclone 复制</strong>：使用 Rclone 复制本地文件到网盘，需要自行映射 rclone 配置目录到容器中（<code v-pre>/ms/.config/rclone</code>）或在容器内使用<code v-pre>rclone config</code>完成 rclone 配置，网盘配置名称必须为：<code v-pre>MEDIA_SABER</code>，可自行通过 Docker 添加环境变量传递参数优化传输，参考：https://rclone.org/docs/#environment-variables 。</li>
<li><strong>Rclone 移动</strong>：使用 Rclone 移动本地文件到网盘，其余与 Rclone 复制一致。</li>
<li><strong>Minio 复制</strong>：Minio 复制本地文件到网络存储，针对 S3/云原生场景，需要自行在容器内使用<code v-pre>mc alias set MEDIA_SABER http://your_domain_name_or_ip:port ACCESS_KEY SECRET_KEY</code>完成 minio 配置(alias 的名称必须为<code v-pre>MEDIA_SABER</code>)，并在 minio 控制台增加一个名为 data 的 bucket(名称必须为<code v-pre>data</code>)。</li>
<li><strong>Minio 移动</strong>：Minio 移动本地文件到网络存储，其余与 Minio 复制一致。</li>
</ul>
<h2 id="📡-远程交互命令" tabindex="-1"><a class="header-anchor" href="#📡-远程交互命令"><span>📡 远程交互命令</span></a></h2>
<p>通过<RouteLink to="/docs/other/wechat_notifications/">微信消息通知</RouteLink>等远程交互方式可以使用以下命令：</p>
<ul>
<li><strong>/s_u_conf</strong>：更新配置</li>
<li><strong>/s_sign_in</strong>：签到</li>
<li><strong>/s_sync_notice</strong>：同步公告</li>
<li><strong>/s_sync_message</strong>：同步消息</li>
<li><strong>/s_sync_data</strong>：同步数据</li>
<li><strong>/dl_subscribe_rss</strong>：订阅-RSS</li>
<li><strong>/dl_subscribe_search</strong>：订阅-搜索</li>
</ul>
<h2 id="🎬-电影占位符" tabindex="-1"><a class="header-anchor" href="#🎬-电影占位符"><span>🎬 电影占位符</span></a></h2>
<p>在<RouteLink to="/docs/directory_management/directory_management/">目录管理</RouteLink>和<RouteLink to="/docs/subscription_management/movie_subscription/">订阅管理</RouteLink>等模块中，可以使用占位符自定义电影文件命名格式：</p>
<ul>
<li><strong>{title}</strong>：标题</li>
<li><strong>{en_title}</strong>：英文标题</li>
<li><strong>{original_title}</strong>：原语种标题</li>
<li><strong>{original_name}</strong>：原文件名</li>
<li><strong>{rev_name}</strong>：识别词处理后的原文件名</li>
<li><strong>{year}</strong>：年份</li>
<li><strong>{edition}</strong>：版本(Bluray/WEB-DL 等)</li>
<li><strong>{videoFormat}</strong>：分辨率(1080p/4k 等)</li>
<li><strong>{videoCodec}</strong>：视频编码</li>
<li><strong>{audioCodec}</strong>：音频编码及声道</li>
<li><strong>{effect}</strong>：视频特效(DV,HDR 等)</li>
<li><strong>{tmdbid}</strong>：TMDB 的 ID</li>
<li><strong>{imdbid}</strong>：IMDB 的 ID</li>
<li><strong>{part}</strong>：part1/disc1/dvd1</li>
<li><strong>{releaseGroup}</strong>：制作组/字幕组</li>
<li><strong>{name}</strong>：识别名称（文件名中识别出的名称，可用<RouteLink to="/docs/media_organization/custom_identification_words/">自定义识别词</RouteLink>替换）</li>
</ul>
<p>重命名使用 Python 的 <code v-pre>format</code> 格式化，可进行指定格式输出。</p>
<h2 id="📺-电视剧占位符" tabindex="-1"><a class="header-anchor" href="#📺-电视剧占位符"><span>📺 电视剧占位符</span></a></h2>
<p>在<RouteLink to="/docs/directory_management/directory_management/">目录管理</RouteLink>和<RouteLink to="/docs/subscription_management/tv_subscription/">订阅管理</RouteLink>等模块中，可以使用占位符自定义电视剧文件命名格式：</p>
<ul>
<li><strong>{title}</strong>：标题</li>
<li><strong>{en_title}</strong>：英文标题</li>
<li><strong>{original_title}</strong>：原语种标题</li>
<li><strong>{original_name}</strong>：原文件名</li>
<li><strong>{rev_name}</strong>：识别词处理后的原文件名</li>
<li><strong>{year}</strong>：年份</li>
<li><strong>{edition}</strong>：版本(Bluray/WEB-DL 等)</li>
<li><strong>{videoFormat}</strong>：分辨率(1080p/4k 等)</li>
<li><strong>{videoCodec}</strong>：视频编码</li>
<li><strong>{audioCodec}</strong>：音频编码及声道</li>
<li><strong>{effect}</strong>：视频特效(DV,HDR 等)</li>
<li><strong>{tmdbid}</strong>：TMDB 的 ID</li>
<li><strong>{imdbid}</strong>：IMDB 的 ID</li>
<li><strong>{season}</strong>：季数</li>
<li><strong>{episode}</strong>：集数</li>
<li><strong>{episode_title}</strong>：集标题</li>
<li><strong>{season_episode}</strong>：剧集 SxxExx</li>
<li><strong>{part}</strong>：part1/disc1/dvd1</li>
<li><strong>{releaseGroup}</strong>：制作组/字幕组</li>
<li><strong>{name}</strong>：识别名称（文件名中识别出的名称，可用<RouteLink to="/docs/media_organization/custom_identification_words/">自定义识别词</RouteLink>替换）</li>
</ul>
<p>重命名使用 Python 的 <code v-pre>format</code> 格式化，可进行指定格式输出。</p>
<h2 id="🌐-网络相关术语" tabindex="-1"><a class="header-anchor" href="#🌐-网络相关术语"><span>🌐 网络相关术语</span></a></h2>
<h3 id="rss" tabindex="-1"><a class="header-anchor" href="#rss"><span>RSS</span></a></h3>
<p>RSS（Really Simple Syndication）是一种用于发布经常更新的内容的网页格式，如博客文章、新闻标题或视频。在<RouteLink to="/docs/subscription_management/">订阅管理</RouteLink>中，系统通过RSS订阅源自动获取资源信息。</p>
<h3 id="tmdb" tabindex="-1"><a class="header-anchor" href="#tmdb"><span>TMDB</span></a></h3>
<p>TMDB（The Movie Database）是一个社区构建的电影和电视节目数据库，系统使用TMDB获取媒体元数据信息。</p>
<h3 id="imdb" tabindex="-1"><a class="header-anchor" href="#imdb"><span>IMDB</span></a></h3>
<p>IMDB（Internet Movie Database）是一个关于电影、电视节目和演员的在线数据库，系统支持使用IMDB ID进行媒体识别。</p>
<h2 id="📂-媒体管理术语" tabindex="-1"><a class="header-anchor" href="#📂-媒体管理术语"><span>📂 媒体管理术语</span></a></h2>
<h3 id="刮削" tabindex="-1"><a class="header-anchor" href="#刮削"><span>刮削</span></a></h3>
<p>刮削是从互联网上的数据库（如TheMovieDB、TheTVDB等）获取媒体元数据的过程。系统会根据文件名和目录结构识别媒体内容，并自动下载相关的元数据和图片。</p>
<h3 id="元数据" tabindex="-1"><a class="header-anchor" href="#元数据"><span>元数据</span></a></h3>
<p>元数据是描述媒体内容的信息，包括标题、简介、演员、导演、海报、评分等。媒体服务器通过刮削器从互联网获取这些信息，使媒体库更加丰富和易于浏览。</p>
<h3 id="媒体库" tabindex="-1"><a class="header-anchor" href="#媒体库"><span>媒体库</span></a></h3>
<p>媒体库是媒体服务器中组织和管理媒体内容的逻辑结构，通常按照电影、电视剧、音乐等类型进行分类。系统会自动扫描指定目录，将媒体文件添加到相应的媒体库中。</p>
<h3 id="strm文件" tabindex="-1"><a class="header-anchor" href="#strm文件"><span>STRM文件</span></a></h3>
<p>STRM（Stream）文件是一种流媒体播放列表文件，它不包含实际的媒体内容，而是包含指向网络上媒体文件的链接。通过STRM文件，用户可以在本地媒体播放器中直接播放存储在云盘中的媒体内容，而无需将文件下载到本地。</p>
</div></template>


