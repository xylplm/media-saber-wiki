<template><div><h3 id="一、创建目录" tabindex="-1"><a class="header-anchor" href="#一、创建目录"><span>一、创建目录</span></a></h3>
<p>打开绿联 文件管理器，在 docker 目录下新建 media-saber-go 文件夹。</p>
<p><img src="@source/01.新手指引/02.如何安装/ugreen_images/1.png" alt="图片1.png"></p>
<h3 id="二、使用compose部署" tabindex="-1"><a class="header-anchor" href="#二、使用compose部署"><span>二、使用compose部署</span></a></h3>
<p>绿联用户使用docker直接部署。 这里使用一个compose部署完全。想要分开部署的自己摸索</p>
<p>把下面写了中文的地方全部设置好。</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code class="language-text"><span class="line">services:</span>
<span class="line">  msgo:</span>
<span class="line">    image: xylplm/media-saber:latest</span>
<span class="line">    container_name: media-saber-go</span>
<span class="line">    privileged: true</span>
<span class="line">    depends_on:</span>
<span class="line">      ms-redis:</span>
<span class="line">        condition: service_healthy</span>
<span class="line">      ms-postgres:</span>
<span class="line">        condition: service_healthy</span>
<span class="line">    volumes:</span>
<span class="line">      - ./ms/config:/app/config </span>
<span class="line">      - 写你自己的:和下载器一样 #媒体文件目录映射，这里下载器里面写了几个这里就写几个</span>
<span class="line">    environment:</span>
<span class="line">      - MS_REDIS_HOST=ms-redis:6379</span>
<span class="line">      - MS_REDIS_PASS= #和下面的REDIS_PASSWORD保持一致</span>
<span class="line">      - MS_PORT=3000</span>
<span class="line">      - MS_SITE_CONFIG_DIR=/app/config/site_configs</span>
<span class="line">      - MS_LOG_MODE=file</span>
<span class="line">      - MS_LOG_LEVEL=debug</span>
<span class="line">      - MS_PGSQL_LOG_MODE=prod</span>
<span class="line">      - MS_LOG_KEEP_DAYS=14 </span>
<span class="line">      - MS_AUTH_EMAIL= # 认证邮箱,填你自己的</span>
<span class="line">      - MS_AUTH_SLOGAN= # 认证口令，填你自己的</span>
<span class="line">      - MS_PGSQL_USER=postgres</span>
<span class="line">      - MS_PGSQL_PASSWORD= # 和下面的PGSQL_PASSWORD保持一致</span>
<span class="line">      - MS_PGSQL_DBNAME=media_saber</span>
<span class="line">      - MS_PGSQL_PATH=ms-postgres</span>
<span class="line">      - MS_PGSQL_PORT=5432</span>
<span class="line">    ports:</span>
<span class="line">      - "3000:3000" </span>
<span class="line">    restart: always</span>
<span class="line">    networks:</span>
<span class="line">      - bridge-network</span>
<span class="line"></span>
<span class="line">  ms-redis:</span>
<span class="line">    image: redis:7.0.14-alpine</span>
<span class="line">    container_name: media-saber-redis</span>
<span class="line">    restart: always</span>
<span class="line">    environment:</span>
<span class="line">      - REDIS_PASSWORD= #和上面的MS_REDIS_PASS保持一致</span>
<span class="line">      - PUID=1000</span>
<span class="line">      - PGID=10</span>
<span class="line">    healthcheck:</span>
<span class="line">      test: ["CMD", "redis-cli", "ping"]</span>
<span class="line">      interval: 5s</span>
<span class="line">      timeout: 3s</span>
<span class="line">      retries: 5</span>
<span class="line">    networks:</span>
<span class="line">      - bridge-network</span>
<span class="line"></span>
<span class="line">  ms-postgres:</span>
<span class="line">    image: postgres:17-alpine</span>
<span class="line">    container_name: media-saber-postgres</span>
<span class="line">    restart: always</span>
<span class="line">    volumes:</span>
<span class="line">      - ./pg/data:/var/lib/postgresql/data</span>
<span class="line">    environment:</span>
<span class="line">      - POSTGRES_USER=postgres</span>
<span class="line">      - POSTGRES_PASSWORD= #和上面的PGSQL_PASSWORD保持一致</span>
<span class="line">      - POSTGRES_DB=media_saber</span>
<span class="line">    healthcheck:</span>
<span class="line">      test: ["CMD-SHELL", "pg_isready -U postgres"]</span>
<span class="line">      interval: 5s</span>
<span class="line">      timeout: 3s</span>
<span class="line">      retries: 5</span>
<span class="line">    networks:</span>
<span class="line">      - bridge-network</span>
<span class="line"></span>
<span class="line">networks:</span>
<span class="line">  bridge-network:</span>
<span class="line">    driver: bridge</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="@source/01.新手指引/02.如何安装/ugreen_images/2.png" alt="图片2.png"></p>
<p>注意。存放位置填你希望放docker配置的目录。我个人推荐是固态
点击 立即部署</p>
<p><img src="@source/01.新手指引/02.如何安装/ugreen_images/3.png" alt="图片3.png"></p>
<p>部署完后，点击 完成即可。</p>
<p>好了。可以开始使用了</p>
</div></template>


