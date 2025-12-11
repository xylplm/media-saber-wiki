<template><div><blockquote>
<p>此方式适合飞牛、绿联、极空间、群晖等一切支持 docker compose 的设备
此教程适合有一定 linux 命令行基础和 docker 基础的用户</p>
</blockquote>
<h2 id="项目目录" tabindex="-1"><a class="header-anchor" href="#项目目录"><span>项目目录</span></a></h2>
<div class="language-txt line-numbers-mode" data-highlighter="prismjs" data-ext="txt"><pre v-pre><code class="language-txt"><span class="line">├── msgo</span>
<span class="line">│   ├── common</span>
<span class="line">│   ├── redis</span>
<span class="line">│   ├── pgsql</span>
<span class="line">│   ├── ms</span>
<span class="line">│   ├── qb</span>
<span class="line">│   ├── tr</span>
<span class="line">│   ├── emby</span>
<span class="line">│   ├── docker-compose.yml</span>
<span class="line">│   └── .env</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="env-配置" tabindex="-1"><a class="header-anchor" href="#env-配置"><span>env 配置</span></a></h2>
<p>这里注意下</p>
<ol>
<li>使用 <code v-pre>DOCKER_PATH</code>、<code v-pre>MEDIA_PATH</code> 可以简化 docker yaml 的路径，同时也可以避免暴露路径中包含的手机号（如极空间）</li>
<li>如果有多个 <code v-pre>MEDIA_PATH</code>, 那么可以用 <code v-pre>MEDIA_PATH_1</code>, <code v-pre>MEDIA_PATH_2</code> 等变量来配置</li>
<li>LOCAL_IP 是 NAS 所在局域网的 IP，用于 Emby 配置， PROXY_IP 是代理服务器的 IP</li>
<li>PUID 和 PGID 是用户权限，默认是 1000 和 1001，根据自己的情况修改</li>
<li>PG、Reids，使用15432、16379端口，避免与主机冲突（很多 nas 都有自己的PostGres和Redis）
如在命令行中执行得到</li>
</ol>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code class="language-bash"><span class="line"><span class="token punctuation">[</span>allen@fnNAS<span class="token punctuation">]</span> /vol1/1000/docker  </span>
<span class="line">❯ <span class="token function">id</span></span>
<span class="line"><span class="token assign-left variable">uid</span><span class="token operator">=</span><span class="token number">1000</span><span class="token punctuation">(</span>allen<span class="token punctuation">)</span> <span class="token assign-left variable">gid</span><span class="token operator">=</span><span class="token number">1001</span><span class="token punctuation">(</span>Users<span class="token punctuation">)</span> <span class="token assign-left variable">groups</span><span class="token operator">=</span><span class="token number">1001</span><span class="token punctuation">(</span>Users<span class="token punctuation">)</span>,994<span class="token punctuation">(</span>docker<span class="token punctuation">)</span>,1000<span class="token punctuation">(</span>Administrators<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当然，直接使用 <code v-pre>PUID=0</code>, <code v-pre>PGID=0</code> 也是可以的</p>
<h3 id="env-文件配置" tabindex="-1"><a class="header-anchor" href="#env-文件配置"><span><code v-pre>.env</code> 文件配置</span></a></h3>
<div class="language-yaml line-numbers-mode" data-highlighter="prismjs" data-ext="yml"><pre v-pre><code class="language-yaml"><span class="line"><span class="token comment"># 路径</span></span>
<span class="line">DOCKER_PATH=/vol1/1000/docker</span>
<span class="line">MEDIA_PATH=/vol2/1000/media</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 局域网IP和端口</span></span>
<span class="line">LOCAL_IP=192.168.3.20</span>
<span class="line">PROXY_IP=192.168.3.15</span>
<span class="line">PROXY_PORT=7890</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 用户权限</span></span>
<span class="line">PUID=1000</span>
<span class="line">PGID=1001</span>
<span class="line"></span>
<span class="line"><span class="token comment"># Postgres 配置</span></span>
<span class="line">PGSQL_DBNAME=ms</span>
<span class="line">PGSQL_USER=postgres</span>
<span class="line">PGSQL_PASSWORD=YourPostgresPassword</span>
<span class="line">PGSQL_PORT=15432</span>
<span class="line"></span>
<span class="line"><span class="token comment"># Redis 配置</span></span>
<span class="line">REDIS_PASSWORD=YourRedisPassword</span>
<span class="line">REDIS_PORT=16379</span>
<span class="line"></span>
<span class="line"><span class="token comment"># MSGO 配置</span></span>
<span class="line">AUTH_EMAIL=username@sample.com</span>
<span class="line">AUTH_SLOGAN=你的密钥</span>
<span class="line">MS_PORT=8888</span>
<span class="line"></span>
<span class="line"><span class="token comment"># QB 配置</span></span>
<span class="line">QB_PORT=18989</span>
<span class="line">QB_TORRENT_PORT=58365</span>
<span class="line"></span>
<span class="line"><span class="token comment"># TR 配置</span></span>
<span class="line">TR_PORT=9091</span>
<span class="line"></span>
<span class="line"><span class="token comment"># Emby 配置</span></span>
<span class="line">EMBY_PORT=18096</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="docker-compose" tabindex="-1"><a class="header-anchor" href="#docker-compose"><span>docker-compose</span></a></h2>
<p>服务说明：</p>
<ol>
<li><code v-pre>docker-compose.yml</code> 配置文件同目录下创建一个 <code v-pre>.env</code> 文件，里面保存密码</li>
<li>容器中 <code v-pre>/etc/hosts</code> 映射出来，方便使用 MS 里面的 <code v-pre>hosts</code> 文件修改以及自动更新功能(既可以新建一个 <code v-pre>hosts</code> 文件，也可以直接使用 NAS 系统的 <code v-pre>hosts</code> 文件)</li>
<li>MS 使用 <code v-pre>privileged</code> 模式，方便 <code v-pre>MS</code> 直接控制 <code v-pre>Docker</code> 容器</li>
<li><code v-pre>/BT_backup</code> 映射出来，方便 <code v-pre>MS</code> 访问 <code v-pre>qbittorrent</code> 的种子文件（转移种子）</li>
<li><code v-pre>PUID=1000 PGID=1001 UMASK=022 TZ=Asia/Shanghai</code> 为固定配置，根据自己的情况修改（也可以改成 <code v-pre>0,0,000</code> 即 <code v-pre>root</code>）</li>
<li>上面一条补充，无论如何改，所有 docker 容器的 PUID 和 PGID <strong>都要一致</strong>，否则会出现权限问题</li>
<li>因为这里只配置到 <code v-pre>/media</code>, 所以 <code v-pre>QB</code>/<code v-pre>TR</code>/<code v-pre>MP</code> 实际下载目录就是： <code v-pre>/media/raw/movie</code>, <code v-pre>/media/raw/tv</code>, ...</li>
<li>因为这里只配置到 <code v-pre>/media</code>, 所以 <code v-pre>MSGO</code>     实际整理目录就是： <code v-pre>/media/arc/movie</code>, <code v-pre>/media/arc/tv</code>, ...</li>
<li><code v-pre>redis</code>、<code v-pre>pgsql</code> 因为暴露出端口给局域网了，所以<strong>必须使用密码</strong>，否则会被攻击</li>
</ol>
<h3 id="docker-compose-yml-配置" tabindex="-1"><a class="header-anchor" href="#docker-compose-yml-配置"><span><code v-pre>docker-compose.yml</code> 配置</span></a></h3>
<div class="language-yaml line-numbers-mode" data-highlighter="prismjs" data-ext="yml"><pre v-pre><code class="language-yaml"><span class="line"><span class="token key atrule">services</span><span class="token punctuation">:</span></span>
<span class="line">  <span class="token comment"># redis 缓存数据，加速运行，必选</span></span>
<span class="line">  <span class="token key atrule">redis</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token key atrule">image</span><span class="token punctuation">:</span> redis<span class="token punctuation">:</span>latest</span>
<span class="line">    <span class="token key atrule">container_name</span><span class="token punctuation">:</span> msgo<span class="token punctuation">-</span>redis</span>
<span class="line">    <span class="token key atrule">restart</span><span class="token punctuation">:</span> always</span>
<span class="line">    <span class="token key atrule">command</span><span class="token punctuation">:</span> /bin/sh <span class="token punctuation">-</span>c "redis<span class="token punctuation">-</span>server <span class="token punctuation">-</span><span class="token punctuation">-</span>appendonly yes <span class="token punctuation">-</span><span class="token punctuation">-</span>requirepass $<span class="token punctuation">{</span>REDIS_PASSWORD<span class="token punctuation">}</span>" <span class="token comment"># 密码</span></span>
<span class="line">    <span class="token key atrule">network_mode</span><span class="token punctuation">:</span> bridge</span>
<span class="line">    <span class="token key atrule">ports</span><span class="token punctuation">:</span></span>
<span class="line">      <span class="token punctuation">-</span> <span class="token string">"${REDIS_PORT}:6379"</span></span>
<span class="line">    <span class="token key atrule">volumes</span><span class="token punctuation">:</span></span>
<span class="line">      <span class="token punctuation">-</span> $<span class="token punctuation">{</span>DOCKER_PATH<span class="token punctuation">}</span>/msgo/redis/data<span class="token punctuation">:</span>/data</span>
<span class="line">    <span class="token key atrule">environment</span><span class="token punctuation">:</span></span>
<span class="line">      <span class="token punctuation">-</span> TZ=Asia/Shanghai</span>
<span class="line">      <span class="token punctuation">-</span> GOSU_VERSION=1.17</span>
<span class="line"></span>
<span class="line">  <span class="token comment"># pgsql 主数据库，必选</span></span>
<span class="line">  <span class="token key atrule">pgsql</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token key atrule">image</span><span class="token punctuation">:</span> postgres<span class="token punctuation">:</span>17<span class="token punctuation">-</span>alpine  <span class="token comment"># 18版本会有大升级，可以锁死 17 版本</span></span>
<span class="line">    <span class="token key atrule">container_name</span><span class="token punctuation">:</span> msgo<span class="token punctuation">-</span>pgsql</span>
<span class="line">    <span class="token key atrule">restart</span><span class="token punctuation">:</span> always</span>
<span class="line">    <span class="token key atrule">network_mode</span><span class="token punctuation">:</span> bridge</span>
<span class="line">    <span class="token key atrule">ports</span><span class="token punctuation">:</span></span>
<span class="line">      <span class="token punctuation">-</span> <span class="token string">"${PGSQL_PORT}:5432"</span> <span class="token comment"># 对外访问端口</span></span>
<span class="line">    <span class="token key atrule">volumes</span><span class="token punctuation">:</span></span>
<span class="line">      <span class="token punctuation">-</span> $<span class="token punctuation">{</span>DOCKER_PATH<span class="token punctuation">}</span>/msgo/pgsql/data<span class="token punctuation">:</span>/var/lib/postgresql/data</span>
<span class="line">    <span class="token key atrule">environment</span><span class="token punctuation">:</span></span>
<span class="line">      <span class="token punctuation">-</span> POSTGRES_DB=$<span class="token punctuation">{</span>PGSQL_DBNAME<span class="token punctuation">}</span> <span class="token comment"># 数据库</span></span>
<span class="line">      <span class="token punctuation">-</span> POSTGRESQL_WAL_COMPRESSION=lz4 <span class="token comment"># 压缩算法</span></span>
<span class="line">      <span class="token punctuation">-</span> POSTGRESQL_MAX_CONNECTIONS=2048 <span class="token comment"># 最大连接数</span></span>
<span class="line">      <span class="token punctuation">-</span> POSTGRES_USER=$<span class="token punctuation">{</span>PGSQL_USER<span class="token punctuation">}</span> <span class="token comment"># 用户</span></span>
<span class="line">      <span class="token punctuation">-</span> POSTGRES_PASSWORD=$<span class="token punctuation">{</span>PGSQL_PASSWORD<span class="token punctuation">}</span> <span class="token comment"># 密码</span></span>
<span class="line"></span>
<span class="line">  <span class="token comment"># msgo</span></span>
<span class="line">  <span class="token key atrule">server</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token key atrule">image</span><span class="token punctuation">:</span> xylplm/media<span class="token punctuation">-</span>saber<span class="token punctuation">:</span>dev  <span class="token comment"># dev 比 latest 更适合</span></span>
<span class="line">    <span class="token key atrule">container_name</span><span class="token punctuation">:</span> msgo<span class="token punctuation">-</span>server</span>
<span class="line">    <span class="token key atrule">restart</span><span class="token punctuation">:</span> always</span>
<span class="line">    <span class="token key atrule">privileged</span><span class="token punctuation">:</span> <span class="token boolean important">true</span></span>
<span class="line">    <span class="token key atrule">network_mode</span><span class="token punctuation">:</span> host  <span class="token comment"># 使用 host 模式，可以使用 ipv6</span></span>
<span class="line">    <span class="token comment">#ports:</span></span>
<span class="line">    <span class="token comment">#- "8899:8899"</span></span>
<span class="line">    <span class="token comment">#- "8091:8091" # 使用 strm302 功能后，emby/jellyfin 代理端口</span></span>
<span class="line">    <span class="token key atrule">volumes</span><span class="token punctuation">:</span></span>
<span class="line">      <span class="token punctuation">-</span> $<span class="token punctuation">{</span>DOCKER_PATH<span class="token punctuation">}</span>/msgo/common/hosts<span class="token punctuation">:</span>/etc/hosts<span class="token punctuation">:</span>rw</span>
<span class="line">      <span class="token punctuation">-</span> $<span class="token punctuation">{</span>DOCKER_PATH<span class="token punctuation">}</span>/msgo/ms/config<span class="token punctuation">:</span>/app/config</span>
<span class="line">      <span class="token punctuation">-</span> $<span class="token punctuation">{</span>DOCKER_PATH<span class="token punctuation">}</span>/msgo/qb/config/qBittorrent/BT_backup<span class="token punctuation">:</span>/BT_backup <span class="token comment"># 挂载 qb 目录，转种要用到</span></span>
<span class="line">      <span class="token punctuation">-</span> $<span class="token punctuation">{</span>MEDIA_PATH<span class="token punctuation">}</span><span class="token punctuation">:</span>/media</span>
<span class="line">    <span class="token key atrule">environment</span><span class="token punctuation">:</span></span>
<span class="line">      <span class="token punctuation">-</span> PUID=$<span class="token punctuation">{</span>PUID<span class="token punctuation">}</span></span>
<span class="line">      <span class="token punctuation">-</span> PGID=$<span class="token punctuation">{</span>PGID<span class="token punctuation">}</span></span>
<span class="line">      <span class="token punctuation">-</span> TZ=Asia/Shanghai</span>
<span class="line">      <span class="token punctuation">-</span> MS_PORT=$<span class="token punctuation">{</span>MS_PORT<span class="token punctuation">}</span> <span class="token comment"># 前端端口</span></span>
<span class="line">      <span class="token punctuation">-</span> MS_AUTH_EMAIL=$<span class="token punctuation">{</span>AUTH_EMAIL<span class="token punctuation">}</span> <span class="token comment"># 邮箱</span></span>
<span class="line">      <span class="token punctuation">-</span> MS_AUTH_SLOGAN=$<span class="token punctuation">{</span>AUTH_SLOGAN<span class="token punctuation">}</span> <span class="token comment"># 授权码</span></span>
<span class="line">      <span class="token punctuation">-</span> MS_LOG_LEVEL=debug <span class="token comment"># 日志级别</span></span>
<span class="line">      <span class="token punctuation">-</span> MS_LOG_KEEP_DAYS=14 <span class="token comment"># 日志保留天数，只有在文件模式才会生效</span></span>
<span class="line">      <span class="token punctuation">-</span> MS_REDIS_HOST=$<span class="token punctuation">{</span>LOCAL_IP<span class="token punctuation">}</span><span class="token punctuation">:</span>$<span class="token punctuation">{</span>REDIS_PORT<span class="token punctuation">}</span> <span class="token comment"># redis 所属主机的局域网 ip:端口</span></span>
<span class="line">      <span class="token punctuation">-</span> MS_REDIS_PASS=$<span class="token punctuation">{</span>REDIS_PASSWORD<span class="token punctuation">}</span> <span class="token comment"># redis 密码</span></span>
<span class="line">      <span class="token punctuation">-</span> MS_TIMEOUT=60000 <span class="token comment"># 接口请求超时，单位毫秒</span></span>
<span class="line">      <span class="token punctuation">-</span> MS_PGSQL_DBNAME=$<span class="token punctuation">{</span>PGSQL_DBNAME<span class="token punctuation">}</span> <span class="token comment"># pgsql 数据库</span></span>
<span class="line">      <span class="token punctuation">-</span> MS_PGSQL_USERNAME=$<span class="token punctuation">{</span>PGSQL_USER<span class="token punctuation">}</span> <span class="token comment">#  pgsql 用户</span></span>
<span class="line">      <span class="token punctuation">-</span> MS_PGSQL_PASSWORD=$<span class="token punctuation">{</span>PGSQL_PASSWORD<span class="token punctuation">}</span> <span class="token comment"># pgsql 密码</span></span>
<span class="line">      <span class="token punctuation">-</span> MS_PGSQL_PATH=$<span class="token punctuation">{</span>LOCAL_IP<span class="token punctuation">}</span> <span class="token comment"># pgsql 所属主机的局域网 ip</span></span>
<span class="line">      <span class="token punctuation">-</span> MS_PGSQL_PORT=$<span class="token punctuation">{</span>PGSQL_PORT<span class="token punctuation">}</span> <span class="token comment"># pgsql 端口</span></span>
<span class="line">      <span class="token punctuation">-</span> MS_PGSQL_LOG_MODE=prod <span class="token comment"># 数据库日志 options=dev|test|prod|silent</span></span>
<span class="line">      <span class="token punctuation">-</span> MS_MQ_CONCURRENCY=10 <span class="token comment"># MQ 最大并发数</span></span>
<span class="line"></span>
<span class="line">  <span class="token comment"># qb 下载</span></span>
<span class="line">  <span class="token key atrule">qb</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token key atrule">image</span><span class="token punctuation">:</span> lscr.io/linuxserver/qbittorrent<span class="token punctuation">:</span>14.3.9</span>
<span class="line">    <span class="token key atrule">container_name</span><span class="token punctuation">:</span> msgo<span class="token punctuation">-</span>qb</span>
<span class="line">    <span class="token key atrule">restart</span><span class="token punctuation">:</span> always</span>
<span class="line">    <span class="token key atrule">network_mode</span><span class="token punctuation">:</span> host  <span class="token comment"># 使用 host 模式，可以使用 ipv6</span></span>
<span class="line">    <span class="token key atrule">ports</span><span class="token punctuation">:</span></span>
<span class="line">      <span class="token punctuation">-</span> <span class="token string">"${QB_PORT}:${QB_PORT}"</span>  <span class="token comment"># 映射后，方便飞牛 docker 外网面访问</span></span>
<span class="line">    <span class="token key atrule">volumes</span><span class="token punctuation">:</span></span>
<span class="line">      <span class="token punctuation">-</span> $<span class="token punctuation">{</span>DOCKER_PATH<span class="token punctuation">}</span>/msgo/common/hosts<span class="token punctuation">:</span>/etc/hosts<span class="token punctuation">:</span>ro</span>
<span class="line">      <span class="token punctuation">-</span> $<span class="token punctuation">{</span>DOCKER_PATH<span class="token punctuation">}</span>/msgo/qb/config<span class="token punctuation">:</span>/config</span>
<span class="line">      <span class="token punctuation">-</span> $<span class="token punctuation">{</span>MEDIA_PATH<span class="token punctuation">}</span><span class="token punctuation">:</span>/media</span>
<span class="line">    <span class="token key atrule">environment</span><span class="token punctuation">:</span></span>
<span class="line">      <span class="token punctuation">-</span> PUID=$<span class="token punctuation">{</span>PUID<span class="token punctuation">}</span></span>
<span class="line">      <span class="token punctuation">-</span> PGID=$<span class="token punctuation">{</span>PGID<span class="token punctuation">}</span></span>
<span class="line">      <span class="token punctuation">-</span> TZ=Asia/Shanghai</span>
<span class="line">      <span class="token punctuation">-</span> WEBUI_PORT=$<span class="token punctuation">{</span>QB_PORT<span class="token punctuation">}</span></span>
<span class="line">      <span class="token punctuation">-</span> TORRENTING_PORT=$<span class="token punctuation">{</span>QB_TORRENT_PORT<span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">  <span class="token comment"># tr 保种</span></span>
<span class="line">  <span class="token key atrule">tr</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token key atrule">image</span><span class="token punctuation">:</span> linuxserver/transmission<span class="token punctuation">:</span>4.0.5</span>
<span class="line">    <span class="token key atrule">container_name</span><span class="token punctuation">:</span> msgo<span class="token punctuation">-</span>tr</span>
<span class="line">    <span class="token key atrule">restart</span><span class="token punctuation">:</span> always</span>
<span class="line">    <span class="token key atrule">network_mode</span><span class="token punctuation">:</span> host  <span class="token comment"># 使用 host 模式，可以使用 ipv6</span></span>
<span class="line">    <span class="token key atrule">ports</span><span class="token punctuation">:</span></span>
<span class="line">      <span class="token punctuation">-</span> <span class="token string">"${TR_PORT}:${TR_PORT}"</span>  <span class="token comment"># 映射后，方便飞牛 docker 外网面访问</span></span>
<span class="line">    <span class="token key atrule">volumes</span><span class="token punctuation">:</span></span>
<span class="line">      <span class="token punctuation">-</span> $<span class="token punctuation">{</span>DOCKER_PATH<span class="token punctuation">}</span>/msgo/common/hosts<span class="token punctuation">:</span>/etc/hosts<span class="token punctuation">:</span>ro</span>
<span class="line">      <span class="token punctuation">-</span> $<span class="token punctuation">{</span>DOCKER_PATH<span class="token punctuation">}</span>/msgo/tr/config<span class="token punctuation">:</span>/config</span>
<span class="line">      <span class="token punctuation">-</span> $<span class="token punctuation">{</span>DOCKER_PATH<span class="token punctuation">}</span>/msgo/tr/watch<span class="token punctuation">:</span>/watch</span>
<span class="line">      <span class="token punctuation">-</span> $<span class="token punctuation">{</span>MEDIA_PATH<span class="token punctuation">}</span><span class="token punctuation">:</span>/media</span>
<span class="line">    <span class="token key atrule">environment</span><span class="token punctuation">:</span></span>
<span class="line">      <span class="token punctuation">-</span> PUID=$<span class="token punctuation">{</span>PUID<span class="token punctuation">}</span></span>
<span class="line">      <span class="token punctuation">-</span> PGID=$<span class="token punctuation">{</span>PGID<span class="token punctuation">}</span></span>
<span class="line">      <span class="token punctuation">-</span> TZ=Asia/Shanghai</span>
<span class="line">      <span class="token punctuation">-</span> PRCPROT=$<span class="token punctuation">{</span>TR_PORT<span class="token punctuation">}</span></span>
<span class="line">      <span class="token punctuation">-</span> TRANSMISSION_WEB_HOME=/config/theme/flood<span class="token punctuation">-</span>for<span class="token punctuation">-</span>transmission <span class="token comment"># 这是为了使用 flood 主题，不改可以注释</span></span>
<span class="line"></span>
<span class="line">  <span class="token comment"># emby 媒体服务器</span></span>
<span class="line">  <span class="token key atrule">emby</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token key atrule">image</span><span class="token punctuation">:</span> amilys/embyserver<span class="token punctuation">:</span>4.8.11.0  <span class="token comment"># 4.9 修改了数据库结构，4.8不兼容</span></span>
<span class="line">    <span class="token key atrule">container_name</span><span class="token punctuation">:</span> msgo<span class="token punctuation">-</span>emby</span>
<span class="line">    <span class="token key atrule">restart</span><span class="token punctuation">:</span> always</span>
<span class="line">    <span class="token key atrule">privileged</span><span class="token punctuation">:</span> <span class="token boolean important">true</span></span>
<span class="line">    <span class="token key atrule">network_mode</span><span class="token punctuation">:</span> bridge <span class="token comment"># DLNA and Wake-on-Lan 需要 bridge</span></span>
<span class="line">    <span class="token key atrule">ports</span><span class="token punctuation">:</span></span>
<span class="line">      <span class="token punctuation">-</span> <span class="token string">"${EMBY_PORT}:8096"</span> <span class="token comment"># 对外访问端口</span></span>
<span class="line">    <span class="token key atrule">volumes</span><span class="token punctuation">:</span></span>
<span class="line">      <span class="token punctuation">-</span> $<span class="token punctuation">{</span>DOCKER_PATH<span class="token punctuation">}</span>/msgo/emby/config<span class="token punctuation">:</span>/config</span>
<span class="line">      <span class="token punctuation">-</span> $<span class="token punctuation">{</span>DOCKER_PATH<span class="token punctuation">}</span>/msgo/emby/strm<span class="token punctuation">:</span>/strm <span class="token comment"># strm 目录，emby 添加这个目录到媒体库</span></span>
<span class="line">      <span class="token punctuation">-</span> $<span class="token punctuation">{</span>MEDIA_PATH<span class="token punctuation">}</span><span class="token punctuation">:</span>/media</span>
<span class="line">    <span class="token key atrule">environment</span><span class="token punctuation">:</span></span>
<span class="line">      <span class="token punctuation">-</span> PUID=$<span class="token punctuation">{</span>PUID<span class="token punctuation">}</span></span>
<span class="line">      <span class="token punctuation">-</span> PGID=$<span class="token punctuation">{</span>PGID<span class="token punctuation">}</span></span>
<span class="line">      <span class="token punctuation">-</span> TZ=Asia/Shanghai <span class="token comment"># 设置容器的时区为亚洲/上海</span></span>
<span class="line">      <span class="token punctuation">-</span> ALL_PROXY=http<span class="token punctuation">:</span>//$<span class="token punctuation">{</span>PROXY_PORT<span class="token punctuation">}</span><span class="token punctuation">:</span>$<span class="token punctuation">{</span>PROXY_PORT<span class="token punctuation">}</span></span>
<span class="line">      <span class="token punctuation">-</span> HTTP_PROXY=http<span class="token punctuation">:</span>//$<span class="token punctuation">{</span>PROXY_PORT<span class="token punctuation">}</span><span class="token punctuation">:</span>$<span class="token punctuation">{</span>PROXY_PORT<span class="token punctuation">}</span></span>
<span class="line">      <span class="token punctuation">-</span> NO_PROXY=172.17.0.1<span class="token punctuation">,</span>127.0.0.1<span class="token punctuation">,</span>localhost</span>
<span class="line">    <span class="token key atrule">devices</span><span class="token punctuation">:</span></span>
<span class="line">      <span class="token punctuation">-</span> /dev/dri<span class="token punctuation">:</span>/dev/dri <span class="token comment"># 将主机的 /dev/dri 设备挂载到容器 开启硬解</span></span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关命令" tabindex="-1"><a class="header-anchor" href="#相关命令"><span>相关命令</span></a></h2>
<h3 id="当前用户添加到-docker-组" tabindex="-1"><a class="header-anchor" href="#当前用户添加到-docker-组"><span>当前用户添加到 docker 组</span></a></h3>
<blockquote>
<p>这样输 docker 命令时就不需要每次都 sudo 了
退出当前会话，重新登录即可生效</p>
</blockquote>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code class="language-bash"><span class="line"><span class="token function">sudo</span> <span class="token function">usermod</span> <span class="token parameter variable">-aG</span> <span class="token function">docker</span> <span class="token environment constant">$USER</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="启动" tabindex="-1"><a class="header-anchor" href="#启动"><span>启动</span></a></h3>
<blockquote>
<p>在 msgo 目录下执行</p>
</blockquote>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code class="language-bash"><span class="line"><span class="token function">docker</span> compose up <span class="token parameter variable">-d</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="停止" tabindex="-1"><a class="header-anchor" href="#停止"><span>停止</span></a></h3>
<blockquote>
<p>在 msgo 目录下执行</p>
</blockquote>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code class="language-bash"><span class="line"><span class="token function">docker</span> compose down</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="查看-日志" tabindex="-1"><a class="header-anchor" href="#查看-日志"><span>查看 日志</span></a></h3>
<blockquote>
<p>在 msgo 目录下执行</p>
</blockquote>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code class="language-bash"><span class="line"><span class="token function">docker</span> compose logs server<span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="查看最后-10-条日志-并持续输出" tabindex="-1"><a class="header-anchor" href="#查看最后-10-条日志-并持续输出"><span>查看最后 10 条日志，并持续输出</span></a></h3>
<blockquote>
<p>在 msgo 目录下执行
这里的 <code v-pre>server</code> 是 yaml 里面配置的名字，根据实际情况修改, 如 <code v-pre>emby</code></p>
</blockquote>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code class="language-bash"><span class="line"><span class="token function">docker</span> compose logs server <span class="token parameter variable">-f</span> <span class="token parameter variable">--tail</span> <span class="token number">10</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></div></template>


