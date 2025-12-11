<template><div><h1 id="🎛️-基础设置" tabindex="-1"><a class="header-anchor" href="#🎛️-基础设置"><span>🎛️ 基础设置</span></a></h1>
<blockquote>
<p>本文档详细介绍 Media Saber 系统各项基础配置。系统设置页面已重新组织为7个标签页，每个字段均配有用途说明、默认值、示例和操作建议，便于快速上手和查阅。</p>
</blockquote>
<hr>
<h2 id="_1️⃣-基础配置-系统配置" tabindex="-1"><a class="header-anchor" href="#_1️⃣-基础配置-系统配置"><span>1️⃣ 基础配置 (系统配置)</span></a></h2>
<h3 id="代理服务器" tabindex="-1"><a class="header-anchor" href="#代理服务器"><span>代理服务器</span></a></h3>
<p><strong>说明：</strong> 将使用代理访服务器访问themoviedb、telegram、google等境外网站和服务，站点默认不使用代理，如需使用需在站点维护中开启；配置格式示例：http://127.0.0.1:7890（Http协议）、socks5://127.0.0.1:8018、socks5h://127.0.0.1:8018(remote DNS)</p>
<p><strong>默认值/示例：</strong> 空</p>
<ul>
<li><code v-pre>http://127.0.0.1:7890</code></li>
<li><code v-pre>socks5://127.0.0.1:8018</code></li>
</ul>
<p><strong>操作建议：</strong> 如需访问 TMDB、Telegram、程序更新等境外服务，需配置代理。</p>
<h3 id="外网访问地址" tabindex="-1"><a class="header-anchor" href="#外网访问地址"><span>外网访问地址</span></a></h3>
<p><strong>说明：</strong> 用于外网访问访问本系统使用的地址，通常为http协议://域名:端口，如：http://www.example.com:8888</p>
<p><strong>默认值/示例：</strong> 空</p>
<ul>
<li><code v-pre>http://your.domain:8443</code></li>
</ul>
<p><strong>操作建议：</strong> 填写完整协议和端口，Telegram Webhook 推荐 88 或 8443。</p>
<h3 id="内网访问地址" tabindex="-1"><a class="header-anchor" href="#内网访问地址"><span>内网访问地址</span></a></h3>
<p><strong>说明：</strong> 用于内网访问访问本系统使用的地址</p>
<p><strong>默认值/示例：</strong> 空</p>
<ul>
<li><code v-pre>http://192.168.1.100:8888</code></li>
</ul>
<p><strong>操作建议：</strong> 通知等场景可用内网地址。</p>
<h3 id="登录后跳转页面" tabindex="-1"><a class="header-anchor" href="#登录后跳转页面"><span>登录后跳转页面</span></a></h3>
<p><strong>说明：</strong> 可以指定登录跳转指定页面菜单，不再是默认首页</p>
<p><strong>默认值/示例：</strong> <code v-pre>默认首页</code></p>
<p><strong>操作建议：</strong> 可选填，如 <code v-pre>我的媒体库</code>、<code v-pre>寻影探剧</code>、<code v-pre>搜索任务</code>、<code v-pre>站点数据</code>、<code v-pre>站点签到</code>、<code v-pre>站点资源</code>、<code v-pre>站点公告</code>、<code v-pre>站点消息</code>、<code v-pre>电影订阅</code>、<code v-pre>电视剧订阅</code>、<code v-pre>正在下载</code>、<code v-pre>目录同步</code>、<code v-pre>小工具</code>等。</p>
<h3 id="user-agent" tabindex="-1"><a class="header-anchor" href="#user-agent"><span>User-Agent</span></a></h3>
<p><strong>说明：</strong> 程序所有对外请求都将默认使用此User-Agent。如发现被豆瓣、PT站等封堵，请适当修改此项</p>
<p><strong>默认值/示例：</strong> 当前浏览器 UA</p>
<p><strong>操作建议：</strong> 如被豆瓣/PT站封禁可自定义 UA。可点击输入框后的箭头按钮获取当前浏览器的User-Agent。</p>
<h3 id="存储空间目录" tabindex="-1"><a class="header-anchor" href="#存储空间目录"><span>存储空间目录</span></a></h3>
<p><strong>说明：</strong> 需要统计存储空间的目录, 多个以英文逗号分隔</p>
<p><strong>默认值/示例：</strong> 空</p>
<ul>
<li><code v-pre>/mnt/media,/mnt/downloads</code></li>
</ul>
<p><strong>操作建议：</strong> 用于空间统计展示。</p>
<h3 id="文件管理目录" tabindex="-1"><a class="header-anchor" href="#文件管理目录"><span>文件管理目录</span></a></h3>
<p><strong>说明：</strong> 文件管理目录, 多个以英文逗号分隔</p>
<p><strong>默认值/示例：</strong> 空</p>
<ul>
<li><code v-pre>/mnt/downloads</code></li>
</ul>
<p><strong>操作建议：</strong> 用于文件管理页面操作。</p>
<h3 id="临时文件保留天数" tabindex="-1"><a class="header-anchor" href="#临时文件保留天数"><span>临时文件保留天数</span></a></h3>
<p><strong>说明：</strong> /app/config/tmp 路径下的文件</p>
<p><strong>默认值/示例：</strong> <code v-pre>3</code></p>
<p><strong>操作建议：</strong> 定期清理临时文件，避免空间占用。单位为天数。</p>
<hr>
<h2 id="_2️⃣-媒体配置" tabindex="-1"><a class="header-anchor" href="#_2️⃣-媒体配置"><span>2️⃣ 媒体配置</span></a></h2>
<h3 id="tmdb-api-key" tabindex="-1"><a class="header-anchor" href="#tmdb-api-key"><span>TMDB API Key</span></a></h3>
<p><strong>说明：</strong> 在themoviedb.org网站申请API Key，该项必须配置，否则所有功能无法正常运行</p>
<p><strong>默认值/示例：</strong> 空</p>
<ul>
<li><code v-pre>xxxxxxx</code></li>
</ul>
<p><strong>操作建议：</strong> 无此项无法正常匹配媒体。必须配置此项才能使用系统功能。</p>
<h3 id="tmdb-接口地址" tabindex="-1"><a class="header-anchor" href="#tmdb-接口地址"><span>TMDB 接口地址</span></a></h3>
<p><strong>说明：</strong> TMDB接口地址，可自建代理服务，留空默认使用TMDB官方地址。第三方代理域名地址不保证完全可用，请斟酌使用。</p>
<p><strong>默认值/示例：</strong> <code v-pre>https://api.themoviedb.org/3</code></p>
<ul>
<li><code v-pre>https://api.themoviedb.org/3</code> (官方地址)</li>
<li><code v-pre>https://api.tmdb.org/3</code> (官方地址)</li>
</ul>
<p><strong>操作建议：</strong> 官方无法访问时可填写代理地址。</p>
<h3 id="tmdb-语言" tabindex="-1"><a class="header-anchor" href="#tmdb-语言"><span>TMDB 语言</span></a></h3>
<p><strong>说明：</strong> TMDB语言，将会影响媒体信息展示、文件整理及刮削等所有涉及使用TMDB数据的内容语言</p>
<p><strong>默认值/示例：</strong> <code v-pre>zh-CN</code></p>
<ul>
<li><code v-pre>zh-CN</code> (中文)</li>
<li><code v-pre>en-US</code> (英文)</li>
</ul>
<p><strong>操作建议：</strong> 如需英文信息可填 <code v-pre>en-US</code>。</p>
<h3 id="tmdb-匹配模式" tabindex="-1"><a class="header-anchor" href="#tmdb-匹配模式"><span>TMDB 匹配模式</span></a></h3>
<p><strong>说明：</strong> tmdb匹配模式.严格模式:严格匹配标题、媒体年份和类型  正常模式：若识别的年份和类型未获取到，则去掉年份和类型，根据名称再查一次进行匹配</p>
<p><strong>默认值/示例：</strong> 正常模式</p>
<p><strong>操作建议：</strong> 推荐正常模式，特殊需求可选严格。选项包括：</p>
<ul>
<li>正常模式</li>
<li>严格模式</li>
</ul>
<h3 id="tmdb-电影缓存天数" tabindex="-1"><a class="header-anchor" href="#tmdb-电影缓存天数"><span>TMDB 电影缓存天数</span></a></h3>
<p><strong>说明：</strong> 缓存tmdb，提升系统流畅度。新媒体可能信息有误，缓存后可能更新不及时。</p>
<p><strong>默认值/示例：</strong> <code v-pre>7</code></p>
<p><strong>操作建议：</strong> 缓存过期后自动刷新。</p>
<h3 id="tmdb-电视剧缓存天数" tabindex="-1"><a class="header-anchor" href="#tmdb-电视剧缓存天数"><span>TMDB 电视剧缓存天数</span></a></h3>
<p><strong>说明：</strong> 缓存tmdb，提升系统流畅度。新媒体可能信息有误，缓存后可能更新不及时。电视剧建议稍微短一点</p>
<p><strong>默认值/示例：</strong> <code v-pre>1</code></p>
<p><strong>操作建议：</strong> 缓存过期后自动刷新。电视剧建议稍微短一点。</p>
<h3 id="tmdb-超时时间-秒" tabindex="-1"><a class="header-anchor" href="#tmdb-超时时间-秒"><span>TMDB 超时时间(秒)</span></a></h3>
<p><strong>说明：</strong> 请求超时时间, 单位秒，建议不超过30秒</p>
<p><strong>默认值/示例：</strong> <code v-pre>60</code></p>
<p><strong>操作建议：</strong> 网络慢时可适当调高。</p>
<h3 id="tmdb-索引保留天数" tabindex="-1"><a class="header-anchor" href="#tmdb-索引保留天数"><span>TMDB 索引保留天数</span></a></h3>
<p><strong>说明：</strong> 为 0 则永久保留</p>
<p><strong>默认值/示例：</strong> <code v-pre>0</code></p>
<p><strong>操作建议：</strong> 索引用于加速搜索。</p>
<h3 id="媒体详情资源类型" tabindex="-1"><a class="header-anchor" href="#媒体详情资源类型"><span>媒体详情资源类型</span></a></h3>
<p><strong>说明：</strong> 媒体详情的资源链接列表要用到, 目前主要来自Nullbr，可选择ed2k、分享链接、magnet、m3u8等资源类型，不勾选则不显示</p>
<p><strong>默认值/示例：</strong> 空</p>
<p><strong>操作建议：</strong> 可按需选择资源类型显示。</p>
<h3 id="tmdb-web-搜索" tabindex="-1"><a class="header-anchor" href="#tmdb-web-搜索"><span>TMDB Web 搜索</span></a></h3>
<p><strong>说明：</strong> tmdb api 搜索不到时尝试 tmdb web 搜索(例如: 2099 2099 y:2025, 这样搜索如果只有一条记录则匹配成功)</p>
<p><strong>默认值/示例：</strong> 关闭</p>
<p><strong>操作建议：</strong> 极端场景下提升识别率，耗时增加。</p>
<hr>
<h2 id="_3️⃣-订阅搜索" tabindex="-1"><a class="header-anchor" href="#_3️⃣-订阅搜索"><span>3️⃣ 订阅搜索</span></a></h2>
<h3 id="媒体搜索结果包含成人内容条目" tabindex="-1"><a class="header-anchor" href="#媒体搜索结果包含成人内容条目"><span>媒体搜索结果包含成人内容条目</span></a></h3>
<p><strong>说明：</strong> 开启该选项后将会在刮削或者检索时包含TMDB数据库的成人内容请谨慎开启！服务来自TMDB，本程序并没有成人资源，仅做API参数开关。请勿用于非法用途，责任自负！需要先去TMDB个人设置中将【搜索结果中包含成人内容条目】选项开启，开启该选项后将会在刮削或者检索时包含成人内容</p>
<p><strong>默认值/示例：</strong> 关闭</p>
<p><strong>操作建议：</strong> 请谨慎开启，仅在合法使用场景下启用。</p>
<h3 id="媒体种子精准搜索" tabindex="-1"><a class="header-anchor" href="#媒体种子精准搜索"><span>媒体种子精准搜索</span></a></h3>
<p><strong>说明：</strong> 媒体搜索时匹配 tmdb 精准过滤种子。</p>
<p><strong>默认值/示例：</strong> 关闭</p>
<p><strong>操作建议：</strong> 开启后可以提高搜索准确性。</p>
<h3 id="手动搜索只搜-bt-站点" tabindex="-1"><a class="header-anchor" href="#手动搜索只搜-bt-站点"><span>手动搜索只搜 BT 站点</span></a></h3>
<p><strong>说明：</strong> 手动搜索时，例如：从媒体列表搜索、站点直搜，只搜索 BT 站点。</p>
<p><strong>默认值/示例：</strong> 关闭</p>
<p><strong>操作建议：</strong> 如只需 BT 资源可开启。</p>
<h3 id="bt-资源排序优先" tabindex="-1"><a class="header-anchor" href="#bt-资源排序优先"><span>BT 资源排序优先</span></a></h3>
<p><strong>说明：</strong> 在排序规则的基础上, bt(网盘、磁力、ed2k等等) 资源的排序优先</p>
<p><strong>默认值/示例：</strong> 开启</p>
<p><strong>操作建议：</strong> 开启后BT资源将在排序中获得优先权。</p>
<h3 id="bt资源走网盘" tabindex="-1"><a class="header-anchor" href="#bt资源走网盘"><span>BT资源走网盘</span></a></h3>
<p><strong>说明：</strong> 包括网盘分享链接、磁力链接、ed2k链接。默认走下载器下载</p>
<p><strong>默认值/示例：</strong> 关闭</p>
<p><strong>操作建议：</strong> 如需自动转存网盘可开启。</p>
<h3 id="媒体库缺失" tabindex="-1"><a class="header-anchor" href="#媒体库缺失"><span>媒体库缺失</span></a></h3>
<p><strong>说明：</strong> 订阅时只订阅媒体库缺失的电影剧集, 多个媒体服务时记得打开默认</p>
<p><strong>默认值/示例：</strong> 开启</p>
<p><strong>操作建议：</strong> 开启后可避免重复订阅已入库内容。</p>
<h3 id="资源搜索默认过滤规则" tabindex="-1"><a class="header-anchor" href="#资源搜索默认过滤规则"><span>资源搜索默认过滤规则</span></a></h3>
<p><strong>说明：</strong> 设置该选项后，搜索种子时将会使用过滤规则作为默认过滤规则过滤种子</p>
<p><strong>默认值/示例：</strong> 无</p>
<p><strong>操作建议：</strong> 可选择已创建的过滤规则组。可在 <RouteLink to="/docs/system_settings/filter_rules/">过滤规则</RouteLink> 页面创建过滤规则组。</p>
<h3 id="种子排序规则" tabindex="-1"><a class="header-anchor" href="#种子排序规则"><span>种子排序规则</span></a></h3>
<p><strong>说明：</strong> 设置该选项后,搜索种子时将会使用该排序规则作为默认排序规则排序种子.(注：默认规则热种优先免费其次)</p>
<p><strong>默认值/示例：</strong> 默认排序</p>
<p><strong>操作建议：</strong> 可根据需要选择不同的排序规则。可在 <RouteLink to="/docs/system_settings/torrent_sort/">种子排序</RouteLink> 页面创建自定义排序规则。</p>
<h3 id="站点超时时间-秒" tabindex="-1"><a class="header-anchor" href="#站点超时时间-秒"><span>站点超时时间(秒)</span></a></h3>
<p><strong>说明：</strong> 站点相关请求超时时间, 单位：秒，建议不超过30秒</p>
<p><strong>默认值/示例：</strong> <code v-pre>10</code></p>
<p><strong>操作建议：</strong> 网络慢时可适当调高。</p>
<h3 id="站点下载超时时间-秒" tabindex="-1"><a class="header-anchor" href="#站点下载超时时间-秒"><span>站点下载超时时间(秒)</span></a></h3>
<p><strong>说明：</strong> 站点相关下载请求超时时间, 单位：秒，不配就走站点超时时间</p>
<p><strong>默认值/示例：</strong> <code v-pre>60</code></p>
<p><strong>操作建议：</strong> 下载慢时可适当调高。</p>
<h3 id="订阅刷新周期" tabindex="-1"><a class="header-anchor" href="#订阅刷新周期"><span>订阅刷新周期</span></a></h3>
<p><strong>说明：</strong> RSS订阅刷新的时间间隔, 需要在订阅管理中设置订阅站点; 为了减小站点压力, 该功能最小周期建议大于10分钟。低于10分钟的频率会使用缓存数据。</p>
<p><strong>默认值/示例：</strong> 空</p>
<p><strong>操作建议：</strong> 建议设置合理的刷新周期，避免对站点造成过大压力。</p>
<h3 id="订阅搜索周期" tabindex="-1"><a class="header-anchor" href="#订阅搜索周期"><span>订阅搜索周期</span></a></h3>
<p><strong>说明：</strong> 定时对电影/电视剧订阅进行站点存量资源检索下载, 用于对RSS订阅进行查漏补缺。该项会对站点造成压力, 应尽量通过维护站点RSS实现订阅追新, 如非必要请不要开启。该功能最小周期建议大于6小时，一天一次为宜！过低的频率会使用缓存数据。</p>
<p><strong>默认值/示例：</strong> 空</p>
<p><strong>操作建议：</strong> 建议设置合理的搜索周期，避免对站点造成过大压力。</p>
<h3 id="搜索前缀" tabindex="-1"><a class="header-anchor" href="#搜索前缀"><span>搜索前缀</span></a></h3>
<p><strong>说明：</strong> 指定前缀, 在消息渠道端搜索媒体和种子, 例如：搜索流浪地球2.2023</p>
<p><strong>默认值/示例：</strong> 搜索</p>
<p><strong>操作建议：</strong> 可自定义命令前缀。</p>
<h3 id="订阅前缀" tabindex="-1"><a class="header-anchor" href="#订阅前缀"><span>订阅前缀</span></a></h3>
<p><strong>说明：</strong> 指定前缀, 在消息渠道端订阅媒体, 例如：订阅流浪地球2.2023</p>
<p><strong>默认值/示例：</strong> 订阅</p>
<p><strong>操作建议：</strong> 可自定义命令前缀。</p>
<h3 id="种子rss缓存时间-分" tabindex="-1"><a class="header-anchor" href="#种子rss缓存时间-分"><span>种子RSS缓存时间(分)</span></a></h3>
<p><strong>说明：</strong> 站点种子RSS结果缓存时间，低于该时间频率，结果将直接从缓存中获取，避免站点警告。单位：分，建议不低于5分钟</p>
<p><strong>默认值/示例：</strong> <code v-pre>0</code></p>
<p><strong>操作建议：</strong> 建议设置合适的缓存时间，避免频繁请求站点。</p>
<h3 id="种子搜索缓存时间-分" tabindex="-1"><a class="header-anchor" href="#种子搜索缓存时间-分"><span>种子搜索缓存时间(分)</span></a></h3>
<p><strong>说明：</strong> 站点种子相同搜索条件的搜索结果缓存时间，低于该时间频率，结果将直接从缓存中获取，避免站点警告。单位：分，建议不低于10分钟</p>
<p><strong>默认值/示例：</strong> <code v-pre>0</code></p>
<p><strong>操作建议：</strong> 建议设置合适的缓存时间，避免频繁请求站点。</p>
<h3 id="搜索任务保留天数" tabindex="-1"><a class="header-anchor" href="#搜索任务保留天数"><span>搜索任务保留天数</span></a></h3>
<p><strong>说明：</strong> 根据自己情况适当设置天数，注意：已发布站点是根据搜索任务的种子来判断的。</p>
<p><strong>默认值/示例：</strong> <code v-pre>0</code></p>
<p><strong>操作建议：</strong> 定期清理历史任务，避免占用过多存储空间。</p>
<hr>
<h2 id="_4️⃣-媒体整理" tabindex="-1"><a class="header-anchor" href="#_4️⃣-媒体整理"><span>4️⃣ 媒体整理</span></a></h2>
<h3 id="电影重命名格式" tabindex="-1"><a class="header-anchor" href="#电影重命名格式"><span>电影重命名格式</span></a></h3>
<p><strong>说明：</strong> 定义电影文件/目录命名格式，支持占位符。点击输入框后的问号按钮可查看详细说明。</p>
<p><strong>默认值/示例：</strong> 空</p>
<p><strong>操作建议：</strong> 点击&quot;?&quot;按钮查看详细说明。</p>
<h3 id="电视剧重命名格式" tabindex="-1"><a class="header-anchor" href="#电视剧重命名格式"><span>电视剧重命名格式</span></a></h3>
<p><strong>说明：</strong> 定义电视剧文件/目录命名格式，支持占位符。点击输入框后的问号按钮可查看详细说明。</p>
<p><strong>默认值/示例：</strong> 空</p>
<p><strong>操作建议：</strong> 点击&quot;?&quot;按钮查看详细说明。</p>
<h3 id="整理默认转移方式" tabindex="-1"><a class="header-anchor" href="#整理默认转移方式"><span>整理默认转移方式</span></a></h3>
<p><strong>说明：</strong> 文件整理转移方式。</p>
<p><strong>默认值/示例：</strong> 硬链接</p>
<p><strong>操作建议：</strong> 推荐硬链接，节省空间。</p>
<h3 id="整理最小文件大小-m" tabindex="-1"><a class="header-anchor" href="#整理最小文件大小-m"><span>整理最小文件大小(M)</span></a></h3>
<p><strong>说明：</strong> 开启后文件整理转移时，会忽略小于配置文件大小的文件。避免预告片/MV等影响识别，单位M</p>
<p><strong>默认值/示例：</strong> <code v-pre>0</code></p>
<p><strong>操作建议：</strong> 单位为MB，避免转移小文件。</p>
<h3 id="整理硬连接后触发变化" tabindex="-1"><a class="header-anchor" href="#整理硬连接后触发变化"><span>整理硬连接后触发变化</span></a></h3>
<p><strong>说明：</strong> 用于部分设备出现硬连接后文件不刷新的情况，比如极空间。其他设备无问题不建议开启，避免影响性能。</p>
<p><strong>默认值/示例：</strong> 不操作</p>
<p><strong>操作建议：</strong> 极空间等设备建议开启。</p>
<h3 id="整理路径忽略" tabindex="-1"><a class="header-anchor" href="#整理路径忽略"><span>整理路径忽略</span></a></h3>
<p><strong>说明：</strong> 开启后文件整理转移时，会忽略匹配配置文件路径的文件。使用正则表达式匹配</p>
<p><strong>默认值/示例：</strong> 空</p>
<p><strong>操作建议：</strong> 路径包含指定内容则忽略。</p>
<h3 id="整理文件名忽略" tabindex="-1"><a class="header-anchor" href="#整理文件名忽略"><span>整理文件名忽略</span></a></h3>
<p><strong>说明：</strong> 开启后文件整理转移时，会忽略匹配配置文件名的文件。正则表达式匹配</p>
<p><strong>默认值/示例：</strong> 空</p>
<p><strong>操作建议：</strong> 文件名包含指定内容则忽略。</p>
<h3 id="查补漏集排除媒体库" tabindex="-1"><a class="header-anchor" href="#查补漏集排除媒体库"><span>查补漏集排除媒体库</span></a></h3>
<p><strong>说明：</strong> 查漏集、补漏集指令要排除的媒体库名称。</p>
<p><strong>默认值/示例：</strong> 空</p>
<p><strong>操作建议：</strong> 多个用换行分隔。</p>
<h3 id="整理高质量文件覆盖" tabindex="-1"><a class="header-anchor" href="#整理高质量文件覆盖"><span>整理高质量文件覆盖</span></a></h3>
<p><strong>说明：</strong> 开启后非云存储文件整理转移时，会进行高质量文件覆盖，覆盖原文件</p>
<p><strong>默认值/示例：</strong> 关闭</p>
<p><strong>操作建议：</strong> 同名文件按体积覆盖。</p>
<h3 id="过滤规则详细日志" tabindex="-1"><a class="header-anchor" href="#过滤规则详细日志"><span>过滤规则详细日志</span></a></h3>
<p><strong>说明：</strong> 【警告：临时查找过滤问题使用，严禁长时间开启，日志可能会爆炸，后果自负！！！】开启后将在日志中显示过滤规则过滤种子详细日志，以查找过滤原因。</p>
<p><strong>默认值/示例：</strong> 关闭</p>
<p><strong>操作建议：</strong> 仅排查问题时开启。</p>
<h3 id="识别词日志" tabindex="-1"><a class="header-anchor" href="#识别词日志"><span>识别词日志</span></a></h3>
<p><strong>说明：</strong> 识别词日志通常会很多，请酌情开启</p>
<p><strong>默认值/示例：</strong> 关闭</p>
<p><strong>操作建议：</strong> 仅排查问题时开启。</p>
<h3 id="识别日志" tabindex="-1"><a class="header-anchor" href="#识别日志"><span>识别日志</span></a></h3>
<p><strong>说明：</strong> 识别日志通常会很多，请酌情开启</p>
<p><strong>默认值/示例：</strong> 关闭</p>
<p><strong>操作建议：</strong> 仅排查问题时开启。</p>
<h3 id="已入库效果" tabindex="-1"><a class="header-anchor" href="#已入库效果"><span>已入库效果</span></a></h3>
<p><strong>说明：</strong> 开启已入库效果，已入库的媒体弱化显示</p>
<p><strong>默认值/示例：</strong> 关闭</p>
<p><strong>操作建议：</strong> 视觉区分已入库内容。</p>
<hr>
<h2 id="_5️⃣-刮削配置" tabindex="-1"><a class="header-anchor" href="#_5️⃣-刮削配置"><span>5️⃣ 刮削配置</span></a></h2>
<h3 id="刮削模式" tabindex="-1"><a class="header-anchor" href="#刮削模式"><span>刮削模式</span></a></h3>
<p><strong>说明：</strong> 默认的刮削模式</p>
<p><strong>默认值/示例：</strong> 覆盖所有元数据和图片</p>
<p><strong>操作建议：</strong> 影响元数据来源。选项包括：仅刮削缺失的元数据和图片、覆盖所有元数据、覆盖所有元数据和图片。</p>
<h3 id="fanart-代理" tabindex="-1"><a class="header-anchor" href="#fanart-代理"><span>FanArt 代理</span></a></h3>
<p><strong>说明：</strong> 是否启用 FanArt 代理，开启后刮削图片会走代理</p>
<p><strong>默认值/示例：</strong> 开启</p>
<p><strong>操作建议：</strong> 加速图片下载。</p>
<h3 id="tmdb-原语言图片" tabindex="-1"><a class="header-anchor" href="#tmdb-原语言图片"><span>TMDB 原语言图片</span></a></h3>
<p><strong>说明：</strong> tmdb 海报、背景图使用原语言图片</p>
<p><strong>默认值/示例：</strong> 关闭</p>
<p><strong>操作建议：</strong> 如需英文海报可开启。</p>
<h3 id="电影刮削" tabindex="-1"><a class="header-anchor" href="#电影刮削"><span>电影刮削</span></a></h3>
<p><strong>说明：</strong> 设置需要刮削的电影元数据类型</p>
<p><strong>默认值/示例：</strong> 全部关闭</p>
<p><strong>操作建议：</strong> 可按需选择。包括：nfo(元数据)、poster(海报)、backdrop(背景)、background(背景图)、logo、clearArt、thumb(缩略图)、banner(横幅)、disc(光盘)。</p>
<h3 id="电视剧刮削" tabindex="-1"><a class="header-anchor" href="#电视剧刮削"><span>电视剧刮削</span></a></h3>
<p><strong>说明：</strong> 设置需要刮削的电视剧元数据类型</p>
<p><strong>默认值/示例：</strong> 全部关闭</p>
<p><strong>操作建议：</strong> 可按需选择。包括：nfo、poster(海报)、backdrop(背景)、background(背景图)、logo、clearArt、thumb(缩略图)、banner(横幅)。</p>
<h4 id="季" tabindex="-1"><a class="header-anchor" href="#季"><span>季</span></a></h4>
<p><strong>说明：</strong> 设置需要刮削的季元数据类型</p>
<p><strong>默认值/示例：</strong> 全部关闭</p>
<p><strong>操作建议：</strong> 可按需选择。包括：nfo、poster(海报)、banner(横幅)、landscape(横版海报)。</p>
<h4 id="集" tabindex="-1"><a class="header-anchor" href="#集"><span>集</span></a></h4>
<p><strong>说明：</strong> 设置需要刮削的集元数据类型</p>
<p><strong>默认值/示例：</strong> 全部关闭</p>
<p><strong>操作建议：</strong> 可按需选择。包括：nfo、thumb(缩略图)。</p>
<hr>
<h2 id="_6️⃣-智能体配置" tabindex="-1"><a class="header-anchor" href="#_6️⃣-智能体配置"><span>6️⃣ 智能体配置</span></a></h2>
<p><strong>💡 推荐服务</strong></p>
<p><strong>硅基流动推荐</strong></p>
<p>推荐用户使用硅基流动AI服务。现在点击链接填写邀请码注册，可立即获得2000万Tokens。</p>
<p>邀请链接：<a href="https://cloud.siliconflow.cn/i/LUTcWF0b" target="_blank" rel="noopener noreferrer">https://cloud.siliconflow.cn/i/LUTcWF0b</a></p>
<p>邀请码：LUTcWF0b</p>
<p>注册时请填写邀请码以获得奖励。</p>
<h3 id="openai-api-url" tabindex="-1"><a class="header-anchor" href="#openai-api-url"><span>OpenAI API URL</span></a></h3>
<p><strong>说明：</strong> 支持所有 OpenAI 类型的服务商，记得加上版本号。配置后可使用智能体功能。</p>
<p><strong>默认值/示例：</strong> 空</p>
<ul>
<li><code v-pre>https://api.openai.com/v1</code></li>
</ul>
<p><strong>操作建议：</strong> 如用第三方服务需填写对应地址。配置完成后可在 <RouteLink to="/docs/ai/ai/">智能体</RouteLink> 中使用AI聊天功能。</p>
<h3 id="openai-api-key" tabindex="-1"><a class="header-anchor" href="#openai-api-key"><span>OpenAI API Key</span></a></h3>
<p><strong>说明：</strong> OpenAI API 密钥，用于智能体和MCP服务的AI功能</p>
<p><strong>默认值/示例：</strong> 空</p>
<ul>
<li><code v-pre>sk-xxxxxxx</code></li>
</ul>
<p><strong>操作建议：</strong> 用于 AI 聊天、识别等功能。获取后可使用 <RouteLink to="/docs/ai/ai/">智能体</RouteLink> 和 <RouteLink to="/docs/ai/mcp/">MCP服务</RouteLink>。</p>
<h3 id="默认模型" tabindex="-1"><a class="header-anchor" href="#默认模型"><span>默认模型</span></a></h3>
<p><strong>说明：</strong> 智能体使用的默认AI模型</p>
<p><strong>默认值/示例：</strong> 空</p>
<ul>
<li><code v-pre>gpt-3.5-turbo</code></li>
</ul>
<p><strong>操作建议：</strong> 如需更高性能可填写 <code v-pre>gpt-4</code> 等模型。影响智能体回复质量。</p>
<h3 id="系统提示词-system-prompt" tabindex="-1"><a class="header-anchor" href="#系统提示词-system-prompt"><span>系统提示词(System Prompt)</span></a></h3>
<p><strong>说明：</strong> 此提示词将作为所有新对话的默认系统提示词，您可以在创建对话时修改，注意本设置修改后会在下一次创建新会话时生效。
模板：你是影视达人，专门帮助用户管理和整理影视资源。你熟悉各种影视作品的信息，包括电影、电视剧的详情、演员、导演、发行年份等。你可以帮助用户识别影视文件、推荐影视作品、解答影视相关问题，并协助用户更好地组织和管理他们的媒体库。请用专业且友好的语调回答用户的问题。</p>
<p><strong>默认值/示例：</strong> 空</p>
<p><strong>操作建议：</strong> 可自定义智能体角色和行为风格。配置后在 <RouteLink to="/docs/ai/ai/">智能体</RouteLink> 中生效。</p>
<h3 id="智能体角色" tabindex="-1"><a class="header-anchor" href="#智能体角色"><span>智能体角色</span></a></h3>
<p><strong>说明：</strong> 智能体角色名称，会在对话界面显示</p>
<p><strong>默认值/示例：</strong> 空</p>
<p><strong>操作建议：</strong> 可自定义智能体的角色名称，如&quot;影视助手&quot;、&quot;媒体管家&quot;等。</p>
<h3 id="消息渠道智能体记忆" tabindex="-1"><a class="header-anchor" href="#消息渠道智能体记忆"><span>消息渠道智能体记忆</span></a></h3>
<p><strong>说明：</strong> 消息渠道智能体记忆分钟数，该时间段内为 AI 提供完整上下文，默认为 5 分钟</p>
<p><strong>默认值/示例：</strong> <code v-pre>5</code></p>
<p><strong>操作建议：</strong> 可根据需要调整记忆时长。</p>
<h3 id="消息渠道智能体结束词" tabindex="-1"><a class="header-anchor" href="#消息渠道智能体结束词"><span>消息渠道智能体结束词</span></a></h3>
<p><strong>说明：</strong> 消息渠道智能体结束词，结束后将会清空记忆。</p>
<p><strong>默认值/示例：</strong> 空</p>
<ul>
<li><code v-pre>bye</code></li>
<li><code v-pre>退下</code></li>
</ul>
<p><strong>操作建议：</strong> 可自定义结束对话的关键词。</p>
<h3 id="扣子罗盘空间-id" tabindex="-1"><a class="header-anchor" href="#扣子罗盘空间-id"><span>扣子罗盘空间 ID</span></a></h3>
<p><strong>说明：</strong> 用于智能体 Trace 观测，修改空间 id 和 token 都需要重启生效。</p>
<p><strong>默认值/示例：</strong> 空</p>
<p><strong>操作建议：</strong> 用于扣子罗盘观测功能。</p>
<h3 id="扣子罗盘令牌" tabindex="-1"><a class="header-anchor" href="#扣子罗盘令牌"><span>扣子罗盘令牌</span></a></h3>
<p><strong>说明：</strong> 用于访问扣子罗盘</p>
<p><strong>默认值/示例：</strong> 空</p>
<p><strong>操作建议：</strong> 配合扣子罗盘空间 ID 使用。</p>
<h3 id="启用-mcp" tabindex="-1"><a class="header-anchor" href="#启用-mcp"><span>启用 MCP</span></a></h3>
<p><strong>说明：</strong> 启用或禁用 MCP 功能和工具。启用后可在智能体中使用Media Saber的内置MCP服务。</p>
<p><strong>默认值/示例：</strong> 关闭</p>
<p><strong>操作建议：</strong> 开启后可在 <RouteLink to="/docs/ai/ai/">智能体</RouteLink> 中使用MCP服务，包括媒体服务、订阅管理等功能。详细配置请参考 <RouteLink to="/docs/ai/mcp/">MCP服务文档</RouteLink>。</p>
<h3 id="ai-签到增强" tabindex="-1"><a class="header-anchor" href="#ai-签到增强"><span>AI 签到增强</span></a></h3>
<p><strong>说明：</strong> 部分需要问答类的站点，将使用AI处理提问，增强正确率。</p>
<p><strong>默认值/示例：</strong> 关闭</p>
<p><strong>操作建议：</strong> 如遇签到提问可开启。</p>
<h3 id="ai-媒体识别增强" tabindex="-1"><a class="header-anchor" href="#ai-媒体识别增强"><span>AI 媒体识别增强</span></a></h3>
<p><strong>说明：</strong> 开启后，通过TMDB的API无法识别到媒体信息时，使用AI识别匹配，提高种子的识别率。</p>
<p><strong>默认值/示例：</strong> 关闭</p>
<p><strong>操作建议：</strong> 提升极端场景识别率。</p>
<h3 id="ai-订阅识别增强" tabindex="-1"><a class="header-anchor" href="#ai-订阅识别增强"><span>AI 订阅识别增强</span></a></h3>
<p><strong>说明：</strong> 开启后，订阅通过TMDB的API无法识别到媒体信息时，使用AI识别匹配，提高种子的识别率。</p>
<p><strong>默认值/示例：</strong> 关闭</p>
<p><strong>操作建议：</strong> 提升极端场景下订阅识别率。</p>
<hr>
<h2 id="_7️⃣-服务配置" tabindex="-1"><a class="header-anchor" href="#_7️⃣-服务配置"><span>7️⃣ 服务配置</span></a></h2>
<h3 id="nullbr使用代理" tabindex="-1"><a class="header-anchor" href="#nullbr使用代理"><span>NullBr使用代理</span></a></h3>
<p><strong>说明：</strong> 开启后NullBr相关将使用系统配置-基础配置中的代理地址进行请求，默认关闭。</p>
<p><strong>默认值/示例：</strong> 关闭</p>
<p><strong>操作建议：</strong> 如需代理访问 NullBr 可开启。</p>
<h3 id="nullbr-apikey" tabindex="-1"><a class="header-anchor" href="#nullbr-apikey"><span>NullBr ApiKey</span></a></h3>
<p><strong>说明：</strong> 注册：https://nullbr.eu.org，添加 NULLBR 站点、媒体详情的资源链接列表要用到</p>
<p><strong>默认值/示例：</strong> 空</p>
<p><strong>操作建议：</strong> 填写后可用 NullBr 资源。</p>
<h3 id="google-cse-api" tabindex="-1"><a class="header-anchor" href="#google-cse-api"><span>Google CSE API</span></a></h3>
<p><strong>说明：</strong> 豆列豆单搜索使用。获取API 密钥：https://developers.google.com/custom-search/v1/introduction?hl=zh-cn</p>
<p><strong>默认值/示例：</strong> 空</p>
<p><strong>操作建议：</strong> 需配合 Google CSE ID 使用。</p>
<h3 id="google-cse-id" tabindex="-1"><a class="header-anchor" href="#google-cse-id"><span>Google CSE ID</span></a></h3>
<p><strong>说明：</strong> 豆列豆单搜索使用。创建可编程搜索引擎后：https://programmablesearchengine.google.com/controlpanel/create，在概览页的基本部分找到搜索引擎 ID</p>
<p><strong>默认值/示例：</strong> 空</p>
<p><strong>操作建议：</strong> 需配合 Google CSE API 使用。</p>
<h3 id="ocr服务地址" tabindex="-1"><a class="header-anchor" href="#ocr服务地址"><span>OCR服务地址</span></a></h3>
<p><strong>说明：</strong> OCR服务地址, 用于网站登录更新cookie以及特殊站点签到等识别验证码场景。可根据需要需要自行修改, 具体查看wiki</p>
<p><strong>默认值/示例：</strong> 空</p>
<p><strong>操作建议：</strong> 请参考 <RouteLink to="/docs/system_settings/ocr_service/">OCR服务配置指南</RouteLink>。配置完成后请点击&quot;测试&quot;按钮验证服务有效性。</p>
<h3 id="豆瓣-cookie" tabindex="-1"><a class="header-anchor" href="#豆瓣-cookie"><span>豆瓣 Cookie</span></a></h3>
<p><strong>说明：</strong> 需要用到 cookie 的时候填上</p>
<p><strong>默认值/示例：</strong> 空</p>
<p><strong>操作建议：</strong> 如需访问豆瓣受限内容需填写。</p>
<h2 id="💡-推荐服务" tabindex="-1"><a class="header-anchor" href="#💡-推荐服务"><span>💡 推荐服务</span></a></h2>
<p><strong>硅基流动推荐</strong></p>
<p>推荐用户使用硅基流动AI服务。现在点击链接填写邀请码注册，可立即获得2000万Tokens。</p>
<p>邀请链接：<a href="https://cloud.siliconflow.cn/i/LUTcWF0b" target="_blank" rel="noopener noreferrer">https://cloud.siliconflow.cn/i/LUTcWF0b</a></p>
<p>邀请码：LUTcWF0b</p>
<p>注册时请填写邀请码以获得奖励。</p>
<hr>
</div></template>


