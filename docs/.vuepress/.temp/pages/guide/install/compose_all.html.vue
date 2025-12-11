<template><div><p>此处以UGOS Pro设备为例</p>
<h2 id="项目目录" tabindex="-1"><a class="header-anchor" href="#项目目录"><span>项目目录</span></a></h2>
<p><img src="@source/01.新手指引/02.如何安装/images/ugospro/project_dir.png" alt="图片1.png"></p>
<h2 id="配置" tabindex="-1"><a class="header-anchor" href="#配置"><span>配置</span></a></h2>
<ul>
<li>全家桶 docker-compose 一键部署</li>
<li>项目存放路径选 /共享文件夹/docker/msgo</li>
<li>默认使用自定义网络，容器之间互访使用容器名+内部端口</li>
<li>如需使用 host 网络，记得把容器改为 ip</li>
<li>需要修改的地方使用 xxx 代替了</li>
</ul>
<div class="language-yaml line-numbers-mode" data-highlighter="prismjs" data-ext="yml"><pre v-pre><code class="language-yaml"><span class="line"><span class="token key atrule">services</span><span class="token punctuation">:</span></span>
<span class="line">  <span class="token comment"># redis 缓存数据，加速运行，必选</span></span>
<span class="line">  <span class="token key atrule">redis</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token key atrule">image</span><span class="token punctuation">:</span> redis<span class="token punctuation">:</span>latest</span>
<span class="line">    <span class="token key atrule">container_name</span><span class="token punctuation">:</span> redis</span>
<span class="line">    <span class="token key atrule">restart</span><span class="token punctuation">:</span> unless<span class="token punctuation">-</span>stopped</span>
<span class="line"><span class="token comment">#    network_mode: host</span></span>
<span class="line">    <span class="token key atrule">networks</span><span class="token punctuation">:</span></span>
<span class="line">      <span class="token punctuation">-</span> msgo_network</span>
<span class="line">    <span class="token key atrule">volumes</span><span class="token punctuation">:</span></span>
<span class="line">      <span class="token punctuation">-</span> ./redis/data<span class="token punctuation">:</span>/data</span>
<span class="line">    <span class="token key atrule">environment</span><span class="token punctuation">:</span></span>
<span class="line">      <span class="token key atrule">TZ</span><span class="token punctuation">:</span> Asia/Shanghai</span>
<span class="line">      <span class="token key atrule">GOSU_VERSION</span><span class="token punctuation">:</span> <span class="token number">1.17</span></span>
<span class="line"><span class="token comment">#    ports:</span></span>
<span class="line"><span class="token comment">#      - "6379:6379" # 仅外部使用</span></span>
<span class="line"></span>
<span class="line">  <span class="token comment"># pgsql 主数据库，必选</span></span>
<span class="line">  <span class="token key atrule">pgsql</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token key atrule">image</span><span class="token punctuation">:</span> postgres<span class="token punctuation">:</span>17<span class="token punctuation">-</span>alpine</span>
<span class="line">    <span class="token key atrule">container_name</span><span class="token punctuation">:</span> pgsql</span>
<span class="line">    <span class="token key atrule">restart</span><span class="token punctuation">:</span> unless<span class="token punctuation">-</span>stopped</span>
<span class="line"><span class="token comment">#    network_mode: host</span></span>
<span class="line">    <span class="token key atrule">networks</span><span class="token punctuation">:</span></span>
<span class="line">      <span class="token punctuation">-</span> msgo_network</span>
<span class="line">    <span class="token key atrule">volumes</span><span class="token punctuation">:</span></span>
<span class="line">        <span class="token punctuation">-</span> ./pgsql/data<span class="token punctuation">:</span>/var/lib/postgresql/data</span>
<span class="line">    <span class="token key atrule">environment</span><span class="token punctuation">:</span></span>
<span class="line">      <span class="token key atrule">POSTGRES_DB</span><span class="token punctuation">:</span> ms <span class="token comment"># 数据库</span></span>
<span class="line">      <span class="token key atrule">POSTGRESQL_WAL_COMPRESSION</span><span class="token punctuation">:</span> lz4  <span class="token comment"># 压缩算法</span></span>
<span class="line">      <span class="token key atrule">POSTGRESQL_MAX_CONNECTIONS</span><span class="token punctuation">:</span> <span class="token number">2048</span> <span class="token comment"># 最大连接数</span></span>
<span class="line">      <span class="token key atrule">POSTGRES_USER</span><span class="token punctuation">:</span> postgres <span class="token comment"># 用户</span></span>
<span class="line">      <span class="token key atrule">POSTGRES_PASSWORD</span><span class="token punctuation">:</span> ms888888 <span class="token comment"># 密码</span></span>
<span class="line"><span class="token comment">#    ports:</span></span>
<span class="line"><span class="token comment">#      - "5432:5432" # 仅外部使用</span></span>
<span class="line"></span>
<span class="line">  <span class="token comment"># emby 媒体服务器，可选</span></span>
<span class="line">  <span class="token key atrule">emby</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token key atrule">image</span><span class="token punctuation">:</span> linuxserver/emby<span class="token punctuation">:</span>latest</span>
<span class="line">    <span class="token key atrule">container_name</span><span class="token punctuation">:</span> emby</span>
<span class="line">    <span class="token key atrule">network_mode</span><span class="token punctuation">:</span> bridge <span class="token comment"># DLNA and Wake-on-Lan 需要 bridge</span></span>
<span class="line">    <span class="token key atrule">environment</span><span class="token punctuation">:</span></span>
<span class="line">      <span class="token punctuation">-</span> PUID=0 <span class="token comment"># 设置容器用户 ID 为 0 (通常是 root)</span></span>
<span class="line">      <span class="token punctuation">-</span> PGID=0 <span class="token comment"># 设置容器组 ID 为 0 (通常是 root)</span></span>
<span class="line">      <span class="token punctuation">-</span> GIDLIST=0 <span class="token comment"># 设置容器组 ID 列表为 0</span></span>
<span class="line">      <span class="token punctuation">-</span> TZ=Asia/Shanghai <span class="token comment"># 设置容器的时区为亚洲/上海</span></span>
<span class="line">    <span class="token key atrule">devices</span><span class="token punctuation">:</span></span>
<span class="line">      <span class="token punctuation">-</span> /dev/dri<span class="token punctuation">:</span>/dev/dri             <span class="token comment"># 将主机的 /dev/dri 设备挂载到容器 开启硬解</span></span>
<span class="line">    <span class="token key atrule">ports</span><span class="token punctuation">:</span></span>
<span class="line">      <span class="token punctuation">-</span> 8096<span class="token punctuation">:</span><span class="token number">8096</span> <span class="token comment"># 对外访问端口</span></span>
<span class="line">    <span class="token key atrule">restart</span><span class="token punctuation">:</span> unless<span class="token punctuation">-</span>stopped</span>
<span class="line">    <span class="token key atrule">privileged</span><span class="token punctuation">:</span> <span class="token boolean important">true</span></span>
<span class="line">    <span class="token key atrule">volumes</span><span class="token punctuation">:</span></span>
<span class="line">      <span class="token punctuation">-</span> ./emby/config<span class="token punctuation">:</span>/config</span>
<span class="line">      <span class="token comment"># strm 目录，emby 添加这个目录到媒体库</span></span>
<span class="line">      <span class="token punctuation">-</span> /home/xxx/strm<span class="token punctuation">:</span>/strm</span>
<span class="line"></span>
<span class="line">  <span class="token comment"># msgo go 重写船新版本</span></span>
<span class="line">  <span class="token key atrule">msgo</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token key atrule">image</span><span class="token punctuation">:</span> xylplm/media<span class="token punctuation">-</span>saber<span class="token punctuation">:</span>latest</span>
<span class="line">    <span class="token key atrule">container_name</span><span class="token punctuation">:</span> msgo</span>
<span class="line">    <span class="token key atrule">restart</span><span class="token punctuation">:</span> unless<span class="token punctuation">-</span>stopped</span>
<span class="line"><span class="token comment">#    network_mode: host</span></span>
<span class="line">    <span class="token key atrule">networks</span><span class="token punctuation">:</span></span>
<span class="line">      <span class="token punctuation">-</span> msgo_network</span>
<span class="line">    <span class="token key atrule">environment</span><span class="token punctuation">:</span></span>
<span class="line">      <span class="token key atrule">TZ</span><span class="token punctuation">:</span> Asia/Shanghai</span>
<span class="line">      <span class="token key atrule">MS_PORT</span><span class="token punctuation">:</span> <span class="token number">8888</span> <span class="token comment"># 前端端口</span></span>
<span class="line">      <span class="token key atrule">MS_AUTH_EMAIL</span><span class="token punctuation">:</span> xxx <span class="token comment"># 邮箱</span></span>
<span class="line">      <span class="token key atrule">MS_AUTH_SLOGAN</span><span class="token punctuation">:</span> xxx <span class="token comment"># 授权码</span></span>
<span class="line">      <span class="token key atrule">MS_LOG_LEVEL</span><span class="token punctuation">:</span> debug <span class="token comment"># 日志级别</span></span>
<span class="line">      <span class="token key atrule">MS_LOG_KEEP_DAYS</span><span class="token punctuation">:</span> <span class="token number">14</span> <span class="token comment"># 日志保留天数</span></span>
<span class="line">      <span class="token key atrule">MS_REDIS_HOST</span><span class="token punctuation">:</span> redis<span class="token punctuation">:</span><span class="token number">6379</span> <span class="token comment"># redis 容器名:端口</span></span>
<span class="line">      <span class="token key atrule">MS_REDIS_PASS</span><span class="token punctuation">:</span>  <span class="token comment"># redis 密码</span></span>
<span class="line">      <span class="token key atrule">MS_TIMEOUT</span><span class="token punctuation">:</span> <span class="token number">60000</span> <span class="token comment"># 接口请求超时，单位毫秒</span></span>
<span class="line">      <span class="token key atrule">MS_PGSQL_DBNAME</span><span class="token punctuation">:</span> ms <span class="token comment"># pgsql 数据库</span></span>
<span class="line">      <span class="token key atrule">MS_PGSQL_USERNAME</span><span class="token punctuation">:</span> postgres <span class="token comment">#  pgsql 用户</span></span>
<span class="line">      <span class="token key atrule">MS_PGSQL_PASSWORD</span><span class="token punctuation">:</span> ms888888 <span class="token comment"># pgsql 密码</span></span>
<span class="line">      <span class="token key atrule">MS_PGSQL_PATH</span><span class="token punctuation">:</span> pgsql <span class="token comment"># pgsql 容器名</span></span>
<span class="line">      <span class="token key atrule">MS_PGSQL_PORT</span><span class="token punctuation">:</span> <span class="token number">5432</span> <span class="token comment"># pgsql 端口</span></span>
<span class="line">      <span class="token key atrule">MS_PGSQL_LOG_MODE</span><span class="token punctuation">:</span> prod <span class="token comment"># 数据库日志 options=dev|test|prod|silent</span></span>
<span class="line">      <span class="token key atrule">MS_MQ_CONCURRENCY</span><span class="token punctuation">:</span> <span class="token number">10</span> <span class="token comment"># MQ 最大并发数</span></span>
<span class="line">      <span class="token key atrule">MS_MCP_SERVER_HTTP_ADDR</span><span class="token punctuation">:</span> <span class="token string">"0.0.0.0:5000"</span> <span class="token comment"># mcp streamable http addr</span></span>
<span class="line">      <span class="token key atrule">MS_PATH_WATCH_TIME</span><span class="token punctuation">:</span> <span class="token number">30</span> <span class="token comment">#目录监听时间间隔，默认30s</span></span>
<span class="line">    <span class="token key atrule">privileged</span><span class="token punctuation">:</span> <span class="token boolean important">true</span></span>
<span class="line">    <span class="token key atrule">volumes</span><span class="token punctuation">:</span></span>
<span class="line">      <span class="token punctuation">-</span> ./ms/config<span class="token punctuation">:</span>/app/config</span>
<span class="line"><span class="token comment">#      - ./qb:/qb # 挂载 qb 目录，转种要用到</span></span>
<span class="line">    <span class="token key atrule">ports</span><span class="token punctuation">:</span></span>
<span class="line">      <span class="token punctuation">-</span> <span class="token string">"8888:8888"</span> <span class="token comment"># 前端端口</span></span>
<span class="line"><span class="token comment">#      - "22698:22698" # 后端端口</span></span>
<span class="line"><span class="token comment">#      - "8091:8091" # 使用 strm302 功能后，emby/jellyfin 代理端口</span></span>
<span class="line"><span class="token comment">#      - "8091:8091" # 使用 strm302 功能后，emby/jellyfin 代理端口</span></span>
<span class="line"><span class="token comment">#      - "6060:6060" # pprof 端口</span></span>
<span class="line"><span class="token comment">#      - "6080:5000" # mcp 端口</span></span>
<span class="line"></span>
<span class="line">  <span class="token comment"># ocr </span></span>
<span class="line">  <span class="token key atrule">ms-baidu-ocr</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token key atrule">image</span><span class="token punctuation">:</span> xylplm/media<span class="token punctuation">-</span>saber<span class="token punctuation">-</span>baidu<span class="token punctuation">-</span>ocr<span class="token punctuation">:</span>latest</span>
<span class="line">    <span class="token key atrule">container_name</span><span class="token punctuation">:</span> ms<span class="token punctuation">-</span>baidu<span class="token punctuation">-</span>ocr</span>
<span class="line">    <span class="token comment"># network_mode: bridge</span></span>
<span class="line">    <span class="token key atrule">networks</span><span class="token punctuation">:</span></span>
<span class="line">      <span class="token punctuation">-</span> msgo_network</span>
<span class="line">    <span class="token key atrule">environment</span><span class="token punctuation">:</span></span>
<span class="line">      <span class="token punctuation">-</span> TZ=Asia/Shanghai</span>
<span class="line">      <span class="token punctuation">-</span> OCR_APP_ID=xxx <span class="token comment"># 应用 id</span></span>
<span class="line">      <span class="token punctuation">-</span> OCR_API_KEY=xxx <span class="token comment"># apikey</span></span>
<span class="line">      <span class="token punctuation">-</span> OCR_SECRET_KEY=xxx <span class="token comment"># 密钥</span></span>
<span class="line">    <span class="token comment"># ports:</span></span>
<span class="line">    <span class="token comment">#   - 29898:9898</span></span>
<span class="line">    <span class="token key atrule">restart</span><span class="token punctuation">:</span> unless<span class="token punctuation">-</span>stopped</span>
<span class="line"></span>
<span class="line">  <span class="token comment"># qb 下载器，可选</span></span>
<span class="line">  <span class="token key atrule">qb</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token key atrule">image</span><span class="token punctuation">:</span> lscr.io/linuxserver/qbittorrent<span class="token punctuation">:</span>14.3.9</span>
<span class="line">    <span class="token key atrule">container_name</span><span class="token punctuation">:</span> qb</span>
<span class="line">    <span class="token key atrule">restart</span><span class="token punctuation">:</span> unless<span class="token punctuation">-</span>stopped</span>
<span class="line"><span class="token comment">#    network_mode: host</span></span>
<span class="line">    <span class="token key atrule">networks</span><span class="token punctuation">:</span></span>
<span class="line">      <span class="token punctuation">-</span> msgo_network</span>
<span class="line">    <span class="token key atrule">environment</span><span class="token punctuation">:</span></span>
<span class="line">      <span class="token key atrule">PGID</span><span class="token punctuation">:</span> <span class="token number">0</span></span>
<span class="line">      <span class="token key atrule">PUID</span><span class="token punctuation">:</span> <span class="token number">0</span></span>
<span class="line">      <span class="token key atrule">TZ</span><span class="token punctuation">:</span> Asia/Shanghai</span>
<span class="line">      <span class="token key atrule">WEBUI_PORT</span><span class="token punctuation">:</span> <span class="token number">8080</span></span>
<span class="line">      <span class="token key atrule">TORRENTING_PORT</span><span class="token punctuation">:</span> <span class="token number">6881</span></span>
<span class="line">    <span class="token key atrule">volumes</span><span class="token punctuation">:</span></span>
<span class="line">      <span class="token punctuation">-</span> ./qb/config<span class="token punctuation">:</span>/config</span>
<span class="line">    <span class="token key atrule">ports</span><span class="token punctuation">:</span></span>
<span class="line">      <span class="token punctuation">-</span> <span class="token string">"8080:8080"</span></span>
<span class="line">      <span class="token punctuation">-</span> <span class="token string">"6881:6881"</span></span>
<span class="line">      <span class="token punctuation">-</span> <span class="token string">"6881:6881/udp"</span></span>
<span class="line"></span>
<span class="line">  <span class="token comment"># 任务队列监控，可选</span></span>
<span class="line">  <span class="token key atrule">asynqmon</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token key atrule">image</span><span class="token punctuation">:</span> hibiken/asynqmon<span class="token punctuation">:</span>latest</span>
<span class="line">    <span class="token key atrule">container_name</span><span class="token punctuation">:</span> asynqmon</span>
<span class="line">    <span class="token key atrule">restart</span><span class="token punctuation">:</span> unless<span class="token punctuation">-</span>stopped</span>
<span class="line">    <span class="token key atrule">networks</span><span class="token punctuation">:</span></span>
<span class="line">      <span class="token punctuation">-</span> msgo_network</span>
<span class="line">    <span class="token key atrule">ports</span><span class="token punctuation">:</span></span>
<span class="line">      <span class="token punctuation">-</span> <span class="token string">'38080:8080'</span></span>
<span class="line">    <span class="token key atrule">environment</span><span class="token punctuation">:</span></span>
<span class="line">      <span class="token punctuation">-</span> TZ=Asia/Shanghai</span>
<span class="line">    <span class="token key atrule">command</span><span class="token punctuation">:</span> <span class="token punctuation">-</span><span class="token punctuation">-</span>redis<span class="token punctuation">-</span>addr=redis<span class="token punctuation">:</span>6379 <span class="token punctuation">-</span><span class="token punctuation">-</span>read<span class="token punctuation">-</span>only=true</span>
<span class="line"></span>
<span class="line"><span class="token key atrule">networks</span><span class="token punctuation">:</span></span>
<span class="line">  <span class="token key atrule">msgo_network</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token key atrule">name</span><span class="token punctuation">:</span> msgo_network</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


