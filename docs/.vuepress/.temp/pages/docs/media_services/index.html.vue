<template><div><h1 id="🎵-媒体服务" tabindex="-1"><a class="header-anchor" href="#🎵-媒体服务"><span>🎵 媒体服务</span></a></h1>
<p>媒体服务功能用于管理和配置各种媒体服务器，构建个人媒体库，实现媒体内容的集中存储、管理和播放。</p>
<h2 id="📋-功能模块" tabindex="-1"><a class="header-anchor" href="#📋-功能模块"><span>📋 功能模块</span></a></h2>
<p>媒体服务包含以下主要功能模块：</p>
<h3 id="📚-我的媒体库" tabindex="-1"><a class="header-anchor" href="#📚-我的媒体库"><span>📚 <RouteLink to="/docs/media_services/my_media_library/">我的媒体库</RouteLink></span></a></h3>
<p>展示个人媒体库的概览信息，包括电影、电视剧的数量和存储情况。</p>
<h3 id="🖥️-媒体服务器" tabindex="-1"><a class="header-anchor" href="#🖥️-媒体服务器"><span>🖥️ <RouteLink to="/docs/media_services/media_server/">媒体服务器</RouteLink></span></a></h3>
<p>管理和配置媒体服务器的基本设置和连接信息。</p>
<h3 id="🟢-绿影视" tabindex="-1"><a class="header-anchor" href="#🟢-绿影视"><span>🟢 <RouteLink to="/docs/media_services/green_movie/">绿影视</RouteLink></span></a></h3>
<p>配置和管理绿影视媒体服务器的相关设置。</p>
<h3 id="🔵-极影视" tabindex="-1"><a class="header-anchor" href="#🔵-极影视"><span>🔵 <RouteLink to="/docs/media_services/jellyfin_movie/">极影视</RouteLink></span></a></h3>
<p>配置和管理极影视媒体服务器的相关设置。</p>
<h3 id="🎬-emby" tabindex="-1"><a class="header-anchor" href="#🎬-emby"><span>🎬 <RouteLink to="/docs/media_services/emby/">Emby</RouteLink></span></a></h3>
<p>配置和管理Emby媒体服务器的相关设置。</p>
<h3 id="🎥-plex" tabindex="-1"><a class="header-anchor" href="#🎥-plex"><span>🎥 <RouteLink to="/docs/media_services/plex/">Plex</RouteLink></span></a></h3>
<p>配置和管理Plex媒体服务器的相关设置。</p>
<h3 id="🐙-jellyfin" tabindex="-1"><a class="header-anchor" href="#🐙-jellyfin"><span>🐙 <RouteLink to="/docs/media_services/jellyfin/">Jellyfin</RouteLink></span></a></h3>
<p>配置和管理Jellyfin媒体服务器的相关设置。</p>
<h2 id="🔑-核心概念" tabindex="-1"><a class="header-anchor" href="#🔑-核心概念"><span>🔑 核心概念</span></a></h2>
<h3 id="媒体服务器" tabindex="-1"><a class="header-anchor" href="#媒体服务器"><span>媒体服务器</span></a></h3>
<p>媒体服务器是用于存储、管理和播放媒体内容的软件服务，常见的媒体服务器包括Emby、Plex、Jellyfin等。通过媒体服务器，用户可以在各种设备上方便地浏览和播放媒体内容。</p>
<h3 id="媒体库" tabindex="-1"><a class="header-anchor" href="#媒体库"><span>媒体库</span></a></h3>
<p>媒体库是媒体服务器中组织和管理媒体内容的逻辑结构，通常按照电影、电视剧、音乐等类型进行分类。系统会自动扫描指定目录，将媒体文件添加到相应的媒体库中。</p>
<h3 id="元数据" tabindex="-1"><a class="header-anchor" href="#元数据"><span>元数据</span></a></h3>
<p>元数据是描述媒体内容的信息，包括标题、简介、演员、导演、海报、评分等。媒体服务器通过刮削器从互联网获取这些信息，使媒体库更加丰富和易于浏览。</p>
<h3 id="刮削" tabindex="-1"><a class="header-anchor" href="#刮削"><span>刮削</span></a></h3>
<p>刮削是从互联网上的数据库（如TheMovieDB、TheTVDB等）获取媒体元数据的过程。系统会根据文件名和目录结构识别媒体内容，并自动下载相关的元数据和图片。</p>
<h3 id="直链播放" tabindex="-1"><a class="header-anchor" href="#直链播放"><span>直链播放</span></a></h3>
<p>直链播放是指通过网络直接访问存储在远程服务器上的媒体文件进行播放，无需将文件下载到本地。这种方式可以节省本地存储空间，但需要稳定的网络连接。</p>
<h2 id="🔄-工作流程" tabindex="-1"><a class="header-anchor" href="#🔄-工作流程"><span>🔄 工作流程</span></a></h2>
<p>媒体服务的基本工作流程如下：</p>
<ol>
<li><strong>配置服务器</strong>：选择并配置合适的媒体服务器软件</li>
<li><strong>设置媒体库</strong>：指定媒体文件的存储目录，配置媒体库设置</li>
<li><strong>自动刮削</strong>：系统自动识别媒体文件并获取元数据</li>
<li><strong>库刷新</strong>：文件整理完成后通知媒体服务器刷新库</li>
<li><strong>内容播放</strong>：通过各种客户端设备访问和播放媒体内容</li>
</ol>
<h2 id="⚙️-支持的媒体服务器" tabindex="-1"><a class="header-anchor" href="#⚙️-支持的媒体服务器"><span>⚙️ 支持的媒体服务器</span></a></h2>
<p>系统支持多种主流媒体服务器：</p>
<h3 id="emby" tabindex="-1"><a class="header-anchor" href="#emby"><span>Emby</span></a></h3>
<p>功能丰富的商业媒体服务器，提供优秀的用户界面和广泛的设备支持。</p>
<h3 id="plex" tabindex="-1"><a class="header-anchor" href="#plex"><span>Plex</span></a></h3>
<p>流行的媒体服务器，拥有庞大的插件生态系统和良好的用户体验。</p>
<h3 id="jellyfin" tabindex="-1"><a class="header-anchor" href="#jellyfin"><span>Jellyfin</span></a></h3>
<p>开源的媒体服务器，完全免费且功能强大，是Plex的优秀开源替代品。</p>
<h3 id="绿影视" tabindex="-1"><a class="header-anchor" href="#绿影视"><span>绿影视</span></a></h3>
<p>国产媒体服务器，针对中文用户优化，支持更多的中文内容。</p>
<h3 id="极影视" tabindex="-1"><a class="header-anchor" href="#极影视"><span>极影视</span></a></h3>
<p>另一款国产媒体服务器，界面简洁，易于使用。</p>
<h2 id="📝-注意事项" tabindex="-1"><a class="header-anchor" href="#📝-注意事项"><span>📝 注意事项</span></a></h2>
<ul>
<li>选择合适的媒体服务器需要考虑个人需求、设备兼容性和功能要求</li>
<li>确保媒体服务器能够访问到媒体文件存储目录</li>
<li>定期更新媒体服务器软件以获取最新功能和安全补丁</li>
<li>合理配置刮削设置以获取准确的媒体信息</li>
<li>注意媒体服务器的系统资源占用，确保流畅运行</li>
</ul>
</div></template>


