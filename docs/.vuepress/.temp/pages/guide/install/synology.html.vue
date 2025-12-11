<template><div><h3 id="一、文件夹准备" tabindex="-1"><a class="header-anchor" href="#一、文件夹准备"><span>一、文件夹准备</span></a></h3>
<p>打开 <strong>群晖 File Station</strong>，在 <code v-pre>docker</code> 目录下新建以下文件夹：</p>
<ul>
<li><code v-pre>/docker/redis/data</code></li>
<li><code v-pre>/docker/Media-Saber/config</code></li>
<li><code v-pre>/docker/pgsql/data</code>
确保这些文件夹具有<strong>写入权限</strong>。</li>
</ul>
<div align="center"><img src="@source/01.新手指引/02.如何安装/synology_images/01.png" width="800"/></div>  
<div align="center"><img src="@source/01.新手指引/02.如何安装/synology_images/02.png" width="800"/></div>  
<hr>
<h3 id="二、部署-redis" tabindex="-1"><a class="header-anchor" href="#二、部署-redis"><span>二、部署 Redis</span></a></h3>
<p>适用于 DSM 7.2 及以上版本，推荐使用 <strong>Container Manager</strong> 进行部署。</p>
<p>打开 Container Manager → 项目 → 新增项目：</p>
<ul>
<li>项目名称：<code v-pre>redis</code></li>
<li>项目路径：指向刚刚创建的文件夹路径</li>
<li>来源：选择「创建 docker-compose.yaml」</li>
<li>粘贴以下内容：</li>
</ul>
<div class="language-yaml line-numbers-mode" data-highlighter="prismjs" data-ext="yml"><pre v-pre><code class="language-yaml"><span class="line"><span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token string">"3.3"</span></span>
<span class="line"><span class="token key atrule">services</span><span class="token punctuation">:</span></span>
<span class="line">  <span class="token key atrule">redis</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token key atrule">image</span><span class="token punctuation">:</span> qqaazz.msaber.fun/redis<span class="token punctuation">:</span>7.4<span class="token punctuation">-</span>alpine</span>
<span class="line">    <span class="token key atrule">container_name</span><span class="token punctuation">:</span> redis</span>
<span class="line">    <span class="token key atrule">ports</span><span class="token punctuation">:</span></span>
<span class="line">      <span class="token punctuation">-</span> 6379<span class="token punctuation">:</span><span class="token number">6379</span></span>
<span class="line">    <span class="token key atrule">environment</span><span class="token punctuation">:</span></span>
<span class="line">      <span class="token punctuation">-</span> REDIS_PASSWORD=<span class="token important">******</span></span>
<span class="line">    <span class="token key atrule">volumes</span><span class="token punctuation">:</span></span>
<span class="line">      <span class="token punctuation">-</span> /volume1/docker/redis/data<span class="token punctuation">:</span>/data</span>
<span class="line">    <span class="token key atrule">network_mode</span><span class="token punctuation">:</span> host</span>
<span class="line">    <span class="token key atrule">restart</span><span class="token punctuation">:</span> always</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>将 /volume1/docker/redis/data 修改为你实际的路径，并为 REDIS_PASSWORD 设置你的 Redis 密码。</p>
<div align="center"><img src="@source/01.新手指引/02.如何安装/synology_images/03.png" width="800"/></div>
<div align="center"><img src="@source/01.新手指引/02.如何安装/synology_images/04.png" width="800"/></div>
<div align="center"><img src="@source/01.新手指引/02.如何安装/synology_images/05.png" width="800"/></div>
点击「完成」，系统将自动从 Docker Hub 拉取 Redis 镜像并构建容器。
<h3 id="三、部署-pgsql" tabindex="-1"><a class="header-anchor" href="#三、部署-pgsql"><span>三、部署 pgsql</span></a></h3>
<p>适用于 DSM 7.2 及以上版本，推荐使用 <strong>Container Manager</strong> 进行部署。</p>
<p>打开 Container Manager → 项目 → 新增项目：</p>
<ul>
<li>项目名称：<code v-pre>pgsql</code></li>
<li>项目路径：指向刚刚创建的文件夹路径</li>
<li>来源：选择「创建 docker-compose.yaml」</li>
<li>粘贴以下内容：</li>
</ul>
<div class="language-yaml line-numbers-mode" data-highlighter="prismjs" data-ext="yml"><pre v-pre><code class="language-yaml"><span class="line"><span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token string">"3.8"</span></span>
<span class="line"><span class="token key atrule">services</span><span class="token punctuation">:</span></span>
<span class="line">  <span class="token key atrule">pgsql</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token key atrule">image</span><span class="token punctuation">:</span> qqaazz.msaber.fun/postgres<span class="token punctuation">:</span>17<span class="token punctuation">-</span>alpine</span>
<span class="line">    <span class="token key atrule">container_name</span><span class="token punctuation">:</span> ms<span class="token punctuation">-</span>pgsql</span>
<span class="line">    <span class="token key atrule">restart</span><span class="token punctuation">:</span> unless<span class="token punctuation">-</span>stopped</span>
<span class="line">    <span class="token key atrule">networks</span><span class="token punctuation">:</span></span>
<span class="line">      <span class="token punctuation">-</span> ms_network</span>
<span class="line">    <span class="token key atrule">volumes</span><span class="token punctuation">:</span></span>
<span class="line">      <span class="token punctuation">-</span> /volume1/docker/pgsql/data<span class="token punctuation">:</span>/var/lib/postgresql/data</span>
<span class="line">    <span class="token key atrule">environment</span><span class="token punctuation">:</span></span>
<span class="line">      <span class="token key atrule">POSTGRES_USER</span><span class="token punctuation">:</span> postgres</span>
<span class="line">      <span class="token key atrule">POSTGRES_DB</span><span class="token punctuation">:</span> ms</span>
<span class="line">      <span class="token key atrule">POSTGRES_PASSWORD</span><span class="token punctuation">:</span> ms888888</span>
<span class="line">      <span class="token key atrule">POSTGRESQL_WAL_COMPRESSION</span><span class="token punctuation">:</span> lz4</span>
<span class="line">      <span class="token key atrule">POSTGRESQL_MAX_CONNECTIONS</span><span class="token punctuation">:</span> <span class="token number">2048</span></span>
<span class="line">    <span class="token key atrule">ports</span><span class="token punctuation">:</span></span>
<span class="line">      <span class="token punctuation">-</span> 5431<span class="token punctuation">:</span><span class="token number">5432</span></span>
<span class="line"><span class="token key atrule">networks</span><span class="token punctuation">:</span></span>
<span class="line">  <span class="token key atrule">ms_network</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token key atrule">driver</span><span class="token punctuation">:</span> bridge</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>修改/volume1/docker/pgsql/data为你实际的路径</li>
<li>设置数据库名称POSTGRES_DB: ms</li>
<li>设置数据库密码POSTGRES_PASSWORD: ms888888</li>
<li>设置端口为可用且未被占用端口</li>
</ul>
<p>点击「完成」，系统将自动从 Docker Hub 拉取 pgsql 镜像并构建容器。</p>
<h3 id="四、部署-media-saber" tabindex="-1"><a class="header-anchor" href="#四、部署-media-saber"><span>四、部署 Media-Saber</span></a></h3>
<p>部署方式同 Redis，新增一个项目：</p>
<p>项目名称：media-saber</p>
<p>项目路径：指向 /docker/Media-Saber</p>
<p>来源：选择「创建 docker-compose.yaml」</p>
<p>粘贴以下内容：</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code class="language-bash"><span class="line">version: <span class="token string">"3"</span></span>
<span class="line">services:</span>
<span class="line">  msgo:</span>
<span class="line">    image: qqaazz.msaber.fun/xylplm/media-saber:latest</span>
<span class="line">    container_name: media-saber-go</span>
<span class="line">    privileged: <span class="token boolean">true</span></span>
<span class="line">    volumes:</span>
<span class="line">      - /volume1/docker/media-saber/config:/app/config</span>
<span class="line">      - /volume2/Medium:/Medium</span>
<span class="line">    environment:</span>
<span class="line">      - <span class="token assign-left variable">PUID</span><span class="token operator">=</span><span class="token number">0</span></span>
<span class="line">      - <span class="token assign-left variable">PGID</span><span class="token operator">=</span><span class="token number">0</span></span>
<span class="line">      - <span class="token assign-left variable">TZ</span><span class="token operator">=</span>Asia/Shanghai</span>
<span class="line">      - <span class="token assign-left variable">MS_PORT</span><span class="token operator">=</span><span class="token number">3000</span></span>
<span class="line">      - <span class="token assign-left variable">MS_REDIS_HOST</span><span class="token operator">=</span><span class="token number">10.0</span>.0.1 <span class="token comment"># redis ip:端口</span></span>
<span class="line">      - <span class="token assign-left variable">MS_REDIS_PASS</span><span class="token operator">=</span>******</span>
<span class="line">      - <span class="token assign-left variable">MS_TIMEOUT</span><span class="token operator">=</span><span class="token number">60000</span></span>
<span class="line">      - <span class="token assign-left variable">MS_PGSQL_USERNAME</span><span class="token operator">=</span>postgres</span>
<span class="line">      - <span class="token assign-left variable">MS_PGSQL_PASSWORD</span><span class="token operator">=</span>ms888888</span>
<span class="line">      - <span class="token assign-left variable">MS_PGSQL_PATH</span><span class="token operator">=</span><span class="token number">10.0</span>.0.1 <span class="token comment"># 替换为pgsql所在服务器的实际IP</span></span>
<span class="line">      - <span class="token assign-left variable">MS_PGSQL_PORT</span><span class="token operator">=</span><span class="token number">5431</span> <span class="token comment"># 端口一般保持为5432</span></span>
<span class="line">      - <span class="token assign-left variable">MS_PGSQL_DBNAME</span><span class="token operator">=</span>ms</span>
<span class="line">      - <span class="token assign-left variable">MS_AUTH_EMAIL</span><span class="token operator">=</span>name@sample.com <span class="token comment"># 认证邮箱</span></span>
<span class="line">      - <span class="token assign-left variable">MS_AUTH_SLOGAN</span><span class="token operator">=</span>大佬牛逼 <span class="token comment"># 认证口令</span></span>
<span class="line">      - <span class="token assign-left variable">MS_LOG_LEVEL</span><span class="token operator">=</span>debug</span>
<span class="line">      - <span class="token assign-left variable">MS_PGSQL_LOG_MODE</span><span class="token operator">=</span>silent <span class="token comment">#ports</span></span>
<span class="line">      - <span class="token assign-left variable">MS_LOG_KEEP_DAYS</span><span class="token operator">=</span><span class="token number">1</span> <span class="token comment"># 日志保留天数</span></span>
<span class="line">    ports:</span>
<span class="line">      - <span class="token number">3000</span>:3000 <span class="token comment"># 映射容器内的3000端口到主机的3000端口</span></span>
<span class="line">    network_mode: <span class="token function">host</span></span>
<span class="line">    restart: always</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>点击下一步，完成即可</p>
<div align="center"><img src="@source/01.新手指引/02.如何安装/synology_images/06.png" width="800"/></div>
<div class="hint-container warning">
<p class="hint-container-title">⚙️ 请修改以下参数为你的实际参数：</p>
<ul>
<li>REDIS_HOST 地址</li>
<li>REDIS_PASS 密码</li>
<li>MS_PGSQL_PATH pgsql数据库地址</li>
<li>MS_PGSQL_PORT pgsql数据库端口</li>
<li>MS_PGSQL_DBNAME pgsql数据库名</li>
<li>MS_PGSQL_PASSWORD pgsql数据库密码</li>
<li>MS_AUTH_EMAIL 访问邮箱认证</li>
<li>MS_AUTH_SLOGAN 认证口令</li>
</ul>
<p>其余参数保持默认即可</p>
</div>
<h3 id="五、使用一个-compose-部署-media-saber-redis-pgsql" tabindex="-1"><a class="header-anchor" href="#五、使用一个-compose-部署-media-saber-redis-pgsql"><span>五、使用一个 compose 部署 Media-Saber redis pgsql</span></a></h3>
<p>部署方式同上</p>
<p>项目名称：media-saber</p>
<p>项目路径：指向 /docker/Media-Saber</p>
<p>来源：选择「创建 docker-compose.yaml」</p>
<p>粘贴以下内容：</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code class="language-bash"><span class="line">services:</span>
<span class="line">  msgo:</span>
<span class="line">    image: xylplm/media-saber:latest</span>
<span class="line">    container_name: msgo</span>
<span class="line">    networks: </span>
<span class="line">      - ms_network</span>
<span class="line">    environment:</span>
<span class="line">      - <span class="token assign-left variable">PUID</span><span class="token operator">=</span><span class="token number">0</span></span>
<span class="line">      - <span class="token assign-left variable">PGID</span><span class="token operator">=</span><span class="token number">0</span></span>
<span class="line">      - <span class="token assign-left variable">UMASK</span><span class="token operator">=</span>022</span>
<span class="line">      - <span class="token assign-left variable">TZ</span><span class="token operator">=</span>Asia/Shanghai</span>
<span class="line">      - <span class="token assign-left variable">MS_PORT</span><span class="token operator">=</span><span class="token number">3005</span></span>
<span class="line">      - <span class="token assign-left variable">MS_AUTH_EMAIL</span><span class="token operator">=</span>name@sample.com</span>
<span class="line">      - <span class="token assign-left variable">MS_AUTH_SLOGAN</span><span class="token operator">=</span>大佬牛逼</span>
<span class="line">      - <span class="token assign-left variable">MS_LOG_LEVEL</span><span class="token operator">=</span>debug</span>
<span class="line">      - <span class="token assign-left variable">MS_REDIS_HOST</span><span class="token operator">=</span>ms-redis:6379</span>
<span class="line">      - <span class="token assign-left variable">MS_REDIS_PASS</span><span class="token operator">=</span>**********</span>
<span class="line">      - <span class="token assign-left variable">MS_TIMEOUT</span><span class="token operator">=</span><span class="token number">60000</span></span>
<span class="line">      - <span class="token assign-left variable">MS_PGSQL_USERNAME</span><span class="token operator">=</span>postgres</span>
<span class="line">      - <span class="token assign-left variable">MS_PGSQL_PASSWORD</span><span class="token operator">=</span>ms888888</span>
<span class="line">      - <span class="token assign-left variable">MS_PGSQL_PATH</span><span class="token operator">=</span>ms-pgsql</span>
<span class="line">      - <span class="token assign-left variable">MS_PGSQL_PORT</span><span class="token operator">=</span><span class="token number">5432</span></span>
<span class="line">      - <span class="token assign-left variable">MS_PGSQL_DBNAME</span><span class="token operator">=</span>ms</span>
<span class="line">      - <span class="token assign-left variable">MS_PGSQL_LOG_MODE</span><span class="token operator">=</span>prod</span>
<span class="line">      - <span class="token assign-left variable">MS_LOG_KEEP_DAYS</span><span class="token operator">=</span><span class="token number">14</span></span>
<span class="line">    restart: unless-stopped</span>
<span class="line">    privileged: <span class="token boolean">true</span></span>
<span class="line">    volumes:</span>
<span class="line">      - /volume2/docker/media-saberGo/ms/config:/app/config</span>
<span class="line">      - /volume2/video:/video</span>
<span class="line">    ports:</span>
<span class="line">      - <span class="token string">"3005:3005"</span></span>
<span class="line"></span>
<span class="line">  redis:</span>
<span class="line">    image: redis:latest</span>
<span class="line">    container_name: ms-redis</span>
<span class="line">    restart: unless-stopped</span>
<span class="line">    networks: </span>
<span class="line">      - ms_network</span>
<span class="line">    volumes:</span>
<span class="line">      - ./redis/config:/data</span>
<span class="line">    environment:</span>
<span class="line">      - <span class="token assign-left variable">TZ</span><span class="token operator">=</span>Asia/Shanghai</span>
<span class="line">      - <span class="token assign-left variable">GOSU_VERSION</span><span class="token operator">=</span><span class="token number">1.17</span></span>
<span class="line"></span>
<span class="line">  pgsql:</span>
<span class="line">    image: postgres:17-alpine</span>
<span class="line">    container_name: ms-pgsql</span>
<span class="line">    restart: unless-stopped</span>
<span class="line">    networks: </span>
<span class="line">      - ms_network</span>
<span class="line">    volumes:</span>
<span class="line">      - /volume2/docker/media-saberGo/pgsql/data:/var/lib/postgresql/data</span>
<span class="line">    environment:</span>
<span class="line">      - <span class="token assign-left variable">POSTGRES_USER</span><span class="token operator">=</span>postgres</span>
<span class="line">      - <span class="token assign-left variable">POSTGRES_DB</span><span class="token operator">=</span>ms</span>
<span class="line">      - <span class="token assign-left variable">POSTGRESQL_WAL_COMPRESSION</span><span class="token operator">=</span>lz4</span>
<span class="line">      - <span class="token assign-left variable">POSTGRESQL_MAX_CONNECTIONS</span><span class="token operator">=</span><span class="token number">2048</span></span>
<span class="line">      - <span class="token assign-left variable">POSTGRES_PASSWORD</span><span class="token operator">=</span>ms888888</span>
<span class="line"></span>
<span class="line">networks:</span>
<span class="line">  ms_network:</span>
<span class="line">    name: ms_network</span>
<span class="line">    driver: bridge</span>
<span class="line">    ipam:</span>
<span class="line">      config:</span>
<span class="line">        - subnet: <span class="token number">172.31</span>.126.0/24</span>
<span class="line">          gateway: <span class="token number">172.31</span>.126.1</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container warning">
<p class="hint-container-title">⚙️ 请修改以下参数：</p>
<p>**********：Redis 密码</p>
<p>MS_AUTH_EMAIL：访问邮箱认证</p>
<p>MS_AUTH_SLOGAN：认证口令</p>
<p>其余参数保持默认即可</p>
</div>
<p>点击「完成」，Container Manager 会自动拉取 Media-Saber 镜像并构建服务。</p>
</div></template>


