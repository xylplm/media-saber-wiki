<template><div><h3 id="一、创建映射文件夹" tabindex="-1"><a class="header-anchor" href="#一、创建映射文件夹"><span>一、创建映射文件夹</span></a></h3>
<h4 id="_1、目录层级" tabindex="-1"><a class="header-anchor" href="#_1、目录层级"><span>1、目录层级</span></a></h4>
<div class="language-undefined line-numbers-mode" data-highlighter="prismjs" data-ext="undefined"><pre v-pre><code class="language-undefined"><span class="line">.</span>
<span class="line">├── docker</span>
<span class="line">│   ├── msgo</span>
<span class="line">│   │   └── configs</span>
<span class="line">│   ├── redis</span>
<span class="line">│   │   └── data</span>
<span class="line">│   └── pgsql</span>
<span class="line">│       └── data</span>
<span class="line">└── video   #存储媒体文件的目录</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="二、配置文件" tabindex="-1"><a class="header-anchor" href="#二、配置文件"><span>二、配置文件</span></a></h3>
<h4 id="_1-使用绿联项目编排" tabindex="-1"><a class="header-anchor" href="#_1-使用绿联项目编排"><span>1.使用绿联项目编排</span></a></h4>
<div align="center"><img src="@source/01.新手指引/02.如何安装/UGOS_images/1-20250425092957-5kth6pr.png" width="800"/></div>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code class="language-text"><span class="line">services:</span>
<span class="line">  msgo:</span>
<span class="line">    image: xylplm/media-saber:latest</span>
<span class="line">    container_name: msgo</span>
<span class="line">    restart: unless-stopped</span>
<span class="line">    ports:</span>
<span class="line">      - 4000:4000                      ##webui端口</span>
<span class="line">      - 8092:8092                      ##媒体服务器反代端口，我这里是8092</span>
<span class="line">    environment:</span>
<span class="line">      - PUID=0</span>
<span class="line">      - PGID=0</span>
<span class="line">      - UMASK=022</span>
<span class="line">      - TZ=Asia/Shanghai</span>
<span class="line">      - MS_PORT=4000                    ##webui端口我这里是4000</span>
<span class="line">      - MS_AUTH_EMAIL=*********</span>
<span class="line">      - MS_AUTH_SLOGAN=**********</span>
<span class="line">      - MS_SITE_CONFIG_DIR=/app/config/site_configs</span>
<span class="line">      - MS_LOG_LEVEL=debug</span>
<span class="line">      - MS_REDIS_HOST=redis:6379        ##当你使用一个compose文件创建项目，会被创建到同一个桥接网络，容器之间可以直接填写容器名称代替IP地址通讯</span>
<span class="line">      - MS_REDIS_PASS=assword</span>
<span class="line">      - MS_TIMEOUT=60000</span>
<span class="line">      - MS_PGSQL_USERNAME=postgres</span>
<span class="line">      - MS_PGSQL_PASSWORD=password</span>
<span class="line">      - MS_PGSQL_PATH=pgsql</span>
<span class="line">      - MS_PGSQL_DBNAME=ms</span>
<span class="line">    privileged: true</span>
<span class="line">    volumes:</span>
<span class="line">      - */configs:/app/config           ##自行创建文件及映射</span>
<span class="line">      - */video:/video                  ##自行创建文件及映射</span>
<span class="line">  redis:</span>
<span class="line">    image: redis:latest</span>
<span class="line">    container_name: redis</span>
<span class="line">    restart: unless-stopped</span>
<span class="line">    volumes:</span>
<span class="line">      - */data:/data                   ##自行创建文件及映射</span>
<span class="line">    environment:</span>
<span class="line">      - TZ=Asia/Shanghai</span>
<span class="line">      - GOSU_VERSION=1.17</span>
<span class="line">      - REDISPASS=password</span>
<span class="line">      - PUID=0</span>
<span class="line">      - PGID=0</span>
<span class="line">  pgsql:</span>
<span class="line">    image: postgres:17-alpine</span>
<span class="line">    container_name: pgsql</span>
<span class="line">    restart: unless-stopped</span>
<span class="line">    volumes:</span>
<span class="line">      - */data:/var/lib/postgresql/data       ##自行创建文件及映射</span>
<span class="line">    environment:</span>
<span class="line">      - POSTGRES_USER=postgres</span>
<span class="line">      - POSTGRES_DB=ms</span>
<span class="line">      - POSTGRESQL_WAL_COMPRESSION=lz4</span>
<span class="line">      - POSTGRESQL_MAX_CONNECTIONS=2048</span>
<span class="line">      - POSTGRES_PASSWORD=password</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-直接启动即可" tabindex="-1"><a class="header-anchor" href="#_2-直接启动即可"><span>2.直接启动即可</span></a></h4>
</div></template>


