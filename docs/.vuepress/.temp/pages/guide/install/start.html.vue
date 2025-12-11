<template><div><div class="hint-container warning">
<p class="hint-container-title">注意</p>
<ul>
<li>Media-saber 使用 Redis 作为数据库，需要单独安装，推荐使用 <code v-pre>docker.io/redis:7.0.14-alpine</code>。</li>
<li>更新可参考 <RouteLink to="/guide/update_version/dc/">dc 一键更新</RouteLink> 里的 <code v-pre>使用 - 更新</code> 部分内容。</li>
</ul>
</div>
<h2 id="各品牌安装方式" tabindex="-1"><a class="header-anchor" href="#各品牌安装方式"><span>各品牌安装方式</span></a></h2>
<p>极空间、绿联、群晖用户如何安装，可直接切换目录或者点击下方链接到对应品牌专区介绍！</p>
<ul>
<li><RouteLink to="/guide/install/zspace/">极空间 NAS 如何安装</RouteLink></li>
<li><RouteLink to="/guide/install/ugreen/">绿联 NAS 如何安装</RouteLink></li>
<li><RouteLink to="/guide/install/synology/">群晖 NAS 如何安装</RouteLink></li>
<li><RouteLink to="/guide/install/unraid/">UNRAID 如何安装</RouteLink></li>
<li><RouteLink to="/guide/install/ugospro/">UGOS Pro 如何安装</RouteLink></li>
</ul>
<hr>
<h2 id="镜像信息" tabindex="-1"><a class="header-anchor" href="#镜像信息"><span>镜像信息</span></a></h2>
<ul>
<li>镜像名称：<code v-pre>xylplm/media-saber</code></li>
<li>镜像地址：<a href="https://hub.docker.com/r/xylplm/media-saber" target="_blank" rel="noopener noreferrer">https://hub.docker.com/r/xylplm/media-saber</a></li>
</ul>
<hr>
<h2 id="docker-cli-方式安装" tabindex="-1"><a class="header-anchor" href="#docker-cli-方式安装"><span>Docker CLI 方式安装</span></a></h2>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code class="language-bash"><span class="line"><span class="token function">docker</span> run <span class="token parameter variable">-d</span> <span class="token punctuation">\</span></span>
<span class="line">  <span class="token parameter variable">--name</span> media-saber-go <span class="token punctuation">\</span></span>
<span class="line">  <span class="token parameter variable">--privileged</span> <span class="token punctuation">\</span></span>
<span class="line">  <span class="token parameter variable">--restart</span> always <span class="token punctuation">\</span></span>
<span class="line">  <span class="token parameter variable">--network</span> <span class="token function">host</span> <span class="token punctuation">\</span></span>
<span class="line">  <span class="token parameter variable">-e</span> <span class="token assign-left variable">PUID</span><span class="token operator">=</span><span class="token number">0</span> <span class="token punctuation">\</span></span>
<span class="line">  <span class="token parameter variable">-e</span> <span class="token assign-left variable">PGID</span><span class="token operator">=</span><span class="token number">0</span> <span class="token punctuation">\</span></span>
<span class="line">  <span class="token parameter variable">-e</span> <span class="token assign-left variable">TZ</span><span class="token operator">=</span>Asia/Shanghai <span class="token punctuation">\</span></span>
<span class="line">  <span class="token parameter variable">-e</span> <span class="token assign-left variable">MS_PORT</span><span class="token operator">=</span><span class="token number">3000</span> <span class="token punctuation">\</span></span>
<span class="line">  <span class="token parameter variable">-e</span> <span class="token assign-left variable">MS_REDIS_HOST</span><span class="token operator">=</span><span class="token number">10.0</span>.0.1 <span class="token punctuation">\</span></span>
<span class="line">  <span class="token parameter variable">-e</span> <span class="token assign-left variable">MS_REDIS_PASS</span><span class="token operator">=</span>****** <span class="token punctuation">\</span></span>
<span class="line">  <span class="token parameter variable">-e</span> <span class="token assign-left variable">MS_TIMEOUT</span><span class="token operator">=</span><span class="token number">60000</span> <span class="token punctuation">\</span></span>
<span class="line">  <span class="token parameter variable">-e</span> <span class="token assign-left variable">MS_PGSQL_USERNAME</span><span class="token operator">=</span>postgres <span class="token punctuation">\</span></span>
<span class="line">  <span class="token parameter variable">-e</span> <span class="token assign-left variable">MS_PGSQL_PASSWORD</span><span class="token operator">=</span>ms888888 <span class="token punctuation">\</span></span>
<span class="line">  <span class="token parameter variable">-e</span> <span class="token assign-left variable">MS_PGSQL_PATH</span><span class="token operator">=</span><span class="token number">10.0</span>.0.1 <span class="token punctuation">\</span></span>
<span class="line">  <span class="token parameter variable">-e</span> <span class="token assign-left variable">MS_PGSQL_PORT</span><span class="token operator">=</span><span class="token number">5431</span> <span class="token punctuation">\</span></span>
<span class="line">  <span class="token parameter variable">-e</span> <span class="token assign-left variable">MS_PGSQL_DBNAME</span><span class="token operator">=</span>ms <span class="token punctuation">\</span></span>
<span class="line">  <span class="token parameter variable">-e</span> <span class="token assign-left variable">MS_AUTH_EMAIL</span><span class="token operator">=</span>name@sample.com <span class="token punctuation">\</span></span>
<span class="line">  <span class="token parameter variable">-e</span> <span class="token assign-left variable">MS_AUTH_SLOGAN</span><span class="token operator">=</span>大佬牛逼 <span class="token punctuation">\</span></span>
<span class="line">  <span class="token parameter variable">-e</span> <span class="token assign-left variable">MS_LOG_LEVEL</span><span class="token operator">=</span>debug <span class="token punctuation">\</span></span>
<span class="line">  <span class="token parameter variable">-e</span> <span class="token assign-left variable">MS_PGSQL_LOG_MODE</span><span class="token operator">=</span>silent <span class="token punctuation">\</span></span>
<span class="line">  <span class="token parameter variable">-e</span> <span class="token assign-left variable">MS_LOG_KEEP_DAYS</span><span class="token operator">=</span><span class="token number">1</span> <span class="token punctuation">\</span></span>
<span class="line">  <span class="token parameter variable">-v</span> /volume1/docker/media-saber/config:/app/config <span class="token punctuation">\</span></span>
<span class="line">  <span class="token parameter variable">-v</span> /volume2/Medium:/Medium <span class="token punctuation">\</span></span>
<span class="line">  xylplm/media-saber:latest</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="docker-compose-方式安装" tabindex="-1"><a class="header-anchor" href="#docker-compose-方式安装"><span>Docker Compose 方式安装</span></a></h2>
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
<span class="line">      - <span class="token assign-left variable">MS_REDIS_HOST</span><span class="token operator">=</span><span class="token number">10.0</span>.0.1</span>
<span class="line">      - <span class="token assign-left variable">MS_REDIS_PASS</span><span class="token operator">=</span>******</span>
<span class="line">      - <span class="token assign-left variable">MS_TIMEOUT</span><span class="token operator">=</span><span class="token number">60000</span></span>
<span class="line">      - <span class="token assign-left variable">MS_PGSQL_USERNAME</span><span class="token operator">=</span>postgres</span>
<span class="line">      - <span class="token assign-left variable">MS_PGSQL_PASSWORD</span><span class="token operator">=</span>ms888888</span>
<span class="line">      - <span class="token assign-left variable">MS_PGSQL_PATH</span><span class="token operator">=</span><span class="token number">10.0</span>.0.1</span>
<span class="line">      - <span class="token assign-left variable">MS_PGSQL_PORT</span><span class="token operator">=</span><span class="token number">5431</span></span>
<span class="line">      - <span class="token assign-left variable">MS_PGSQL_DBNAME</span><span class="token operator">=</span>ms</span>
<span class="line">      - <span class="token assign-left variable">MS_AUTH_EMAIL</span><span class="token operator">=</span>name@sample.com</span>
<span class="line">      - <span class="token assign-left variable">MS_AUTH_SLOGAN</span><span class="token operator">=</span>大佬牛逼</span>
<span class="line">      - <span class="token assign-left variable">MS_LOG_LEVEL</span><span class="token operator">=</span>debug</span>
<span class="line">      - <span class="token assign-left variable">MS_PGSQL_LOG_MODE</span><span class="token operator">=</span>silent</span>
<span class="line">      - <span class="token assign-left variable">MS_LOG_KEEP_DAYS</span><span class="token operator">=</span><span class="token number">1</span></span>
<span class="line">    network_mode: <span class="token function">host</span></span>
<span class="line">    restart: always</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>保存后，执行以下命令启动：</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code class="language-bash"><span class="line"><span class="token function">docker-compose</span> up <span class="token parameter variable">-d</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h2 id="目录映射说明-必须阅读" tabindex="-1"><a class="header-anchor" href="#目录映射说明-必须阅读"><span>目录映射说明（必须阅读）</span></a></h2>
<p>同一存储空间的目录应直接映射根目录到容器中，不同映射目录在系统层会被认为是跨盘，从而无法进行硬链接。新同学建议认真学习一下：Linux中的硬链接与软链接：原理、应用与最佳实践</p>
<p>❌ 错误的映射方式：</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code class="language-bash"><span class="line">/media/links:/mnt/links</span>
<span class="line">/media/Download:/mnt/Download</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><div align="center"><img src="@source/01.新手指引/02.如何安装/images/azzq/volume1.png" width="800"/></div>
<p>✅ 正确的映射方式：</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code class="language-bash"><span class="line">/media:/media</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><div align="center"><img src="@source/01.新手指引/02.如何安装/images/azzq/volume2.png" width="800"/></div></div></template>


