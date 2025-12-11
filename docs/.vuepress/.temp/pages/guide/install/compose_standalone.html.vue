<template><div><div class="hint-container warning">
<p class="hint-container-title">注意</p>
<p>以群晖为例，其他设备自行修改相关映射路径</p>
</div>
<h3 id="一、部署-redis" tabindex="-1"><a class="header-anchor" href="#一、部署-redis"><span>一、部署 Redis</span></a></h3>
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
<h3 id="二、部署-pgsql" tabindex="-1"><a class="header-anchor" href="#二、部署-pgsql"><span>二、部署 pgsql</span></a></h3>
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
<h3 id="三、部署-media-saber" tabindex="-1"><a class="header-anchor" href="#三、部署-media-saber"><span>三、部署 Media-Saber</span></a></h3>
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
<span class="line">      - <span class="token assign-left variable">MS_PATH_WATCH_TIME</span><span class="token operator">=</span><span class="token number">30</span> <span class="token comment">#目录监听时间间隔，默认30s</span></span>
<span class="line">    ports:</span>
<span class="line">      - <span class="token number">3000</span>:3000 <span class="token comment"># 映射容器内的3000端口到主机的3000端口</span></span>
<span class="line">    network_mode: <span class="token function">host</span></span>
<span class="line">    restart: always</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container warning">
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
</div></template>


