<template><div><h2 id="一-部署之前需要了解的-目录映射" tabindex="-1"><a class="header-anchor" href="#一-部署之前需要了解的-目录映射"><span>一 部署之前需要了解的-目录映射</span></a></h2>
<blockquote>
<p>新手在目录映射经常会犯错，对于刚接触 Docker 或者 Media Saber 的，建议仔细阅读这一部分。</p>
</blockquote>
<p>由于 Docker 容器是<strong>独立运行</strong>的，并不能直接访问 Nas 上的文件，Nas 也不能直接访问 Docker 容器里的内容，所以要实现容器与 Nas 的文件互访，就要进行<strong>容器映射</strong>。</p>
<p>为了便于理解，先来看一个映射案例：</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code class="language-text"><span class="line">/docker/emby/config:/config</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>冒号左边为 Nas 上的路径，冒号右边为容器内的路径，也就是把 Nas 上的 <code v-pre>/docker/emby/config</code> 这个目录映射到了容器内的 <code v-pre>/config</code> 目录里，让我们可以便捷地在 Nas 的目录里管理容器内的 config 配置文件。反过来，如果我们在 Nas 上有媒体文件，也可以通过映射让容器能访问这些文件。</p>
<blockquote>
<p>[!IMPORTANT]</p>
<p>注意：同一存储空间的目录应直接映射根目录到容器中，不同映射目录在系统层会被认为是跨盘，从而无法进行硬链接。新同学建议认真学习一下<a href="https://developer.aliyun.com/article/1468577" target="_blank" rel="noopener noreferrer">Linux中的硬链接与软链接：原理、应用与最佳实践</a></p>
</blockquote>
<h4 id="_1-错误的映射方式" tabindex="-1"><a class="header-anchor" href="#_1-错误的映射方式"><span>1. 错误的映射方式：</span></a></h4>
<p>下载目录和媒体库目录分别映射</p>
<ul>
<li>映射一 <code v-pre>/media/download:/media/download</code></li>
<li>映射二 <code v-pre>/media/link:/media/link</code></li>
</ul>
<div class="language-mermaid line-numbers-mode" data-highlighter="prismjs" data-ext="mermaid"><pre v-pre><code class="language-mermaid"><span class="line"><span class="token keyword">graph</span> TD<span class="token punctuation">;</span></span>
<span class="line">	A<span class="token text string">[ /media/download]</span> <span class="token arrow operator">--></span> B<span class="token text string">[ /movie]</span></span>
<span class="line">	A <span class="token arrow operator">--></span> C<span class="token text string">[ /tv]</span></span>
<span class="line">	A <span class="token arrow operator">--></span> D<span class="token text string">[ /anime]</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-mermaid line-numbers-mode" data-highlighter="prismjs" data-ext="mermaid"><pre v-pre><code class="language-mermaid"><span class="line"><span class="token keyword">graph</span> TD<span class="token punctuation">;</span></span>
<span class="line">	A<span class="token text string">[ /media/link]</span> <span class="token arrow operator">--></span> B<span class="token text string">[ /movie]</span></span>
<span class="line">	A <span class="token arrow operator">--></span> C<span class="token text string">[ /tv]</span></span>
<span class="line">	A <span class="token arrow operator">--></span> D<span class="token text string">[ /anime]</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果这样映射，在容器自身看来，<code v-pre>/media/download</code> <code v-pre>/media/link</code> 这两个是独立的目录，也就会被认为是不同硬盘里的目录，在执行硬链接的时候，就会报错。</p>
<h4 id="_2-正确的映射方式" tabindex="-1"><a class="header-anchor" href="#_2-正确的映射方式"><span>2. 正确的映射方式：</span></a></h4>
<ul>
<li><code v-pre>/media:/media</code></li>
</ul>
<div class="language-mermaid line-numbers-mode" data-highlighter="prismjs" data-ext="mermaid"><pre v-pre><code class="language-mermaid"><span class="line"><span class="token keyword">graph</span> TD<span class="token punctuation">;</span></span>
<span class="line">	A<span class="token text string">[ /media]</span> <span class="token arrow operator">--></span> B<span class="token text string">[ /download]</span> <span class="token arrow operator">--></span> C<span class="token text string">[ /movie]</span></span>
<span class="line">	B <span class="token arrow operator">--></span> D<span class="token text string">[ /tv]</span></span>
<span class="line">	B <span class="token arrow operator">--></span> E<span class="token text string">[ /anime]</span></span>
<span class="line">	A <span class="token arrow operator">--></span> F<span class="token text string">[ /link]</span> <span class="token arrow operator">--></span> G<span class="token text string">[ /movie]</span></span>
<span class="line">	F <span class="token arrow operator">--></span> H<span class="token text string">[ /tv]</span></span>
<span class="line">	F <span class="token arrow operator">--></span> I<span class="token text string">[ /anime]</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这样<strong>只用一条映射</strong>，不仅省时省力，还解决了跨盘的问题。所以一定要这样配置映射结构，目录名称可以按照下面的来。</p>
<h3 id="二-目录配置" tabindex="-1"><a class="header-anchor" href="#二-目录配置"><span>二 目录配置</span></a></h3>
<blockquote>
<p>[!IMPORTANT]</p>
<p>一个<strong>清晰明了的目录</strong>对于后续的方便维护有着至关重要的作用，所以尽量在安装前配置好目录，便于后续管理。</p>
</blockquote>
<h4 id="_1-docker-容器配置目录" tabindex="-1"><a class="header-anchor" href="#_1-docker-容器配置目录"><span>1. Docker 容器配置目录</span></a></h4>
<p>如果你之前已经部署过 Docker 容器，那应该已经有存放 Docker 容器配置的目录了。如果你还没有，则可以参照以下示例新建目录：（建议优先存放在 <strong>SSD 固态硬盘上</strong>以提高运行效能）</p>
<div class="language-mermaid line-numbers-mode" data-highlighter="prismjs" data-ext="mermaid"><pre v-pre><code class="language-mermaid"><span class="line"><span class="token keyword">graph</span> LR<span class="token punctuation">;</span></span>
<span class="line">		A<span class="token text string">[Docker]</span> <span class="token arrow operator">--></span> B<span class="token text string">[ms-go]</span> <span class="token arrow operator">--></span> H<span class="token text string">[ms]</span> <span class="token arrow operator">--></span> C<span class="token text string">[config]</span></span>
<span class="line">		B <span class="token arrow operator">--></span> D<span class="token text string">[redis]</span> <span class="token arrow operator">--></span> J<span class="token text string">[data]</span></span>
<span class="line">		B <span class="token arrow operator">--></span> E<span class="token text string">[pgsql]</span> <span class="token arrow operator">--></span> I<span class="token text string">[data]</span></span>
<span class="line">		B <span class="token arrow operator">--></span> F<span class="token text string">[emby]</span> <span class="token arrow operator">--></span> K<span class="token text string">[config]</span></span>
<span class="line">		B <span class="token arrow operator">--></span> G<span class="token text string">[qb]</span> <span class="token arrow operator">--></span> L<span class="token text string">[config]</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-媒体目录" tabindex="-1"><a class="header-anchor" href="#_2-媒体目录"><span>2. 媒体目录</span></a></h4>
<p>为了方便映射，需要把下载目录、媒体库目录等目录放到一个<strong>统一的父目录</strong>中，这里就以 “media” 父目录为例：</p>
<div align="center"><img src="@source/01.新手指引/02.如何安装/zspace_images/1.png" width="800"/></div>
<h3 id="三-配置-docker-代理" tabindex="-1"><a class="header-anchor" href="#三-配置-docker-代理"><span>三 配置 Docker 代理</span></a></h3>
<p>在正式部署前，首先请确保自己的 Docker 能正常拉取镜像。可以使用极空间自带的 Docker 代理，如下图，根据自己的代理地址进行设置，也可以通过加速镜像的方式自定义拉取镜像。</p>
<div align="center"><img src="@source/01.新手指引/02.如何安装/zspace_images/2.png" width="800"/></div> 
<h3 id="四-compose-部署" tabindex="-1"><a class="header-anchor" href="#四-compose-部署"><span>四 Compose 部署</span></a></h3>
<p>极空间最近更新了 Docker Compose 功能，部署更加方便。</p>
<div align="center"><img src="@source/01.新手指引/02.如何安装/zspace_images/3.png" width="800"/></div>
<p>进入 Docker 的 <code v-pre>Compose</code> 界面，点击右上角的 <code v-pre>新增项目</code> 。项目名称自选，把以下内容复制到下面的代码框。其中要自行修改的内容已在代码中注明，请自行更改。</p>
<div class="language-yaml line-numbers-mode" data-highlighter="prismjs" data-ext="yml"><pre v-pre><code class="language-yaml"><span class="line"><span class="token key atrule">services</span><span class="token punctuation">:</span></span>
<span class="line">  <span class="token comment"># redis 缓存数据，加速运行，必选</span></span>
<span class="line">  <span class="token key atrule">redis</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token key atrule">image</span><span class="token punctuation">:</span> redis<span class="token punctuation">:</span>latest</span>
<span class="line">    <span class="token key atrule">container_name</span><span class="token punctuation">:</span> redis</span>
<span class="line">    <span class="token key atrule">restart</span><span class="token punctuation">:</span> unless<span class="token punctuation">-</span>stopped</span>
<span class="line">    <span class="token key atrule">network_mode</span><span class="token punctuation">:</span> bridge</span>
<span class="line">    <span class="token key atrule">volumes</span><span class="token punctuation">:</span></span>
<span class="line">      <span class="token punctuation">-</span> /tmp/zfsv3/nvme12/(你的手机号)/data/Docker/ms<span class="token punctuation">-</span>go/redis/data<span class="token punctuation">:</span>/data  </span>
<span class="line">      <span class="token comment"># 请根据实际情况，点击极空间“创建项目”界面的“查询路径”，选择或新建 redis 配置目录，点击“复制路径”，粘贴替换冒号前的内容</span></span>
<span class="line">    <span class="token key atrule">environment</span><span class="token punctuation">:</span></span>
<span class="line">      <span class="token key atrule">TZ</span><span class="token punctuation">:</span> Asia/Shanghai</span>
<span class="line">      <span class="token key atrule">GOSU_VERSION</span><span class="token punctuation">:</span> <span class="token number">1.17</span></span>
<span class="line">    <span class="token key atrule">ports</span><span class="token punctuation">:</span></span>
<span class="line">      <span class="token punctuation">-</span> <span class="token string">"16379:6379"</span> <span class="token comment"># 极空间6379端口已被占用，更换端口为16379</span></span>
<span class="line"></span>
<span class="line">  <span class="token comment"># pgsql 主数据库，必选</span></span>
<span class="line">  <span class="token key atrule">pgsql</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token key atrule">image</span><span class="token punctuation">:</span> postgres<span class="token punctuation">:</span>17<span class="token punctuation">-</span>alpine</span>
<span class="line">    <span class="token key atrule">container_name</span><span class="token punctuation">:</span> pgsql</span>
<span class="line">    <span class="token key atrule">restart</span><span class="token punctuation">:</span> unless<span class="token punctuation">-</span>stopped</span>
<span class="line">    <span class="token key atrule">network_mode</span><span class="token punctuation">:</span> bridge</span>
<span class="line">    <span class="token key atrule">volumes</span><span class="token punctuation">:</span></span>
<span class="line">        <span class="token punctuation">-</span> /tmp/zfsv3/nvme12/(你的手机号)/data/Docker/ms<span class="token punctuation">-</span>go/pgsql/data<span class="token punctuation">:</span>/var/lib/postgresql/data</span>
<span class="line">        <span class="token comment"># 请根据实际情况，点击极空间“创建项目”界面的“查询路径”，选择或新建 pgsql 配置目录，点击“复制路径”，粘贴替换冒号前的内容</span></span>
<span class="line">    <span class="token key atrule">environment</span><span class="token punctuation">:</span></span>
<span class="line">      <span class="token key atrule">POSTGRES_DB</span><span class="token punctuation">:</span> ms <span class="token comment"># 数据库</span></span>
<span class="line">      <span class="token key atrule">POSTGRESQL_WAL_COMPRESSION</span><span class="token punctuation">:</span> lz4  <span class="token comment"># 压缩算法</span></span>
<span class="line">      <span class="token key atrule">POSTGRESQL_MAX_CONNECTIONS</span><span class="token punctuation">:</span> <span class="token number">2048</span> <span class="token comment"># 最大连接数</span></span>
<span class="line">      <span class="token key atrule">POSTGRES_USER</span><span class="token punctuation">:</span> postgres <span class="token comment"># 用户，不建议修改</span></span>
<span class="line">      <span class="token key atrule">POSTGRES_PASSWORD</span><span class="token punctuation">:</span> ms888888 <span class="token comment"># 密码，不建议修改</span></span>
<span class="line">    <span class="token key atrule">ports</span><span class="token punctuation">:</span></span>
<span class="line">      <span class="token punctuation">-</span> <span class="token string">"5432:5432"</span></span>
<span class="line"></span>
<span class="line">  <span class="token comment"># msgo go 重写船新版本</span></span>
<span class="line">  <span class="token key atrule">msgo</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token key atrule">image</span><span class="token punctuation">:</span> xylplm/media<span class="token punctuation">-</span>saber<span class="token punctuation">:</span>latest</span>
<span class="line">    <span class="token key atrule">container_name</span><span class="token punctuation">:</span> msgo</span>
<span class="line">    <span class="token key atrule">restart</span><span class="token punctuation">:</span> unless<span class="token punctuation">-</span>stopped</span>
<span class="line">    <span class="token key atrule">network_mode</span><span class="token punctuation">:</span> bridge</span>
<span class="line">    <span class="token key atrule">environment</span><span class="token punctuation">:</span></span>
<span class="line">      <span class="token key atrule">TZ</span><span class="token punctuation">:</span> Asia/Shanghai</span>
<span class="line">      <span class="token key atrule">MS_PORT</span><span class="token punctuation">:</span> <span class="token number">8888</span> <span class="token comment"># 前端端口</span></span>
<span class="line">      <span class="token key atrule">MS_AUTH_EMAIL</span><span class="token punctuation">:</span> xxx <span class="token comment"># 修改为你的邮箱</span></span>
<span class="line">      <span class="token key atrule">MS_AUTH_SLOGAN</span><span class="token punctuation">:</span> xxx <span class="token comment"># 修改为你的授权码</span></span>
<span class="line">      <span class="token key atrule">MS_LOG_LEVEL</span><span class="token punctuation">:</span> debug <span class="token comment"># 日志级别</span></span>
<span class="line">      <span class="token key atrule">MS_LOG_KEEP_DAYS</span><span class="token punctuation">:</span> <span class="token number">14</span> <span class="token comment"># 日志保留天数</span></span>
<span class="line">      <span class="token key atrule">MS_REDIS_HOST</span><span class="token punctuation">:</span> 172.17.0.1<span class="token punctuation">:</span><span class="token number">16379</span> <span class="token comment"># redis 所在子网网关 ip:端口, bridge 网关默认为 172.17.0.1</span></span>
<span class="line">      <span class="token key atrule">MS_REDIS_PASS</span><span class="token punctuation">:</span>  <span class="token comment"># redis 密码，前面没设置这里就为空</span></span>
<span class="line">      <span class="token key atrule">MS_TIMEOUT</span><span class="token punctuation">:</span> <span class="token number">60000</span> <span class="token comment"># 接口请求超时，单位毫秒</span></span>
<span class="line">      <span class="token key atrule">MS_PGSQL_DBNAME</span><span class="token punctuation">:</span> ms <span class="token comment"># pgsql 数据库</span></span>
<span class="line">      <span class="token key atrule">MS_PGSQL_USERNAME</span><span class="token punctuation">:</span> postgres <span class="token comment">#  pgsql 用户</span></span>
<span class="line">      <span class="token key atrule">MS_PGSQL_PASSWORD</span><span class="token punctuation">:</span> ms888888 <span class="token comment"># pgsql 密码</span></span>
<span class="line">      <span class="token key atrule">MS_PGSQL_PATH</span><span class="token punctuation">:</span> 172.17.0.1 <span class="token comment"># pgsql 所在子网网关 ip, bridge 网关默认为 172.17.0.1</span></span>
<span class="line">      <span class="token key atrule">MS_PGSQL_PORT</span><span class="token punctuation">:</span> <span class="token number">5432</span> <span class="token comment"># pgsql 端口</span></span>
<span class="line">      <span class="token key atrule">MS_PGSQL_LOG_MODE</span><span class="token punctuation">:</span> prod <span class="token comment"># 数据库日志 options=dev|test|prod|silent</span></span>
<span class="line">      <span class="token key atrule">MS_MQ_CONCURRENCY</span><span class="token punctuation">:</span> <span class="token number">10</span> <span class="token comment"># MQ 最大并发数</span></span>
<span class="line">    <span class="token key atrule">privileged</span><span class="token punctuation">:</span> <span class="token boolean important">true</span></span>
<span class="line">    <span class="token key atrule">volumes</span><span class="token punctuation">:</span></span>
<span class="line">      <span class="token punctuation">-</span> /tmp/zfsv3/nvme12/(你的手机号)/data/Docker/ms<span class="token punctuation">-</span>go/ms/config<span class="token punctuation">:</span>/app/config</span>
<span class="line">      <span class="token comment"># 请根据实际情况，点击极空间“创建项目”界面的“查询路径”，选择或新建 msgo 配置目录，点击“复制路径”，粘贴替换冒号前的内容</span></span>
<span class="line">      <span class="token punctuation">-</span> /tmp/zfsv3/sata1/(你的手机号)/data/media<span class="token punctuation">:</span>/media </span>
<span class="line">      <span class="token comment"># 请根据实际情况，点击极空间“创建项目”界面的“查询路径”，选择你的媒体库根目录，点击“复制路径”，粘贴替换冒号前的内容</span></span>
<span class="line">    <span class="token key atrule">ports</span><span class="token punctuation">:</span></span>
<span class="line">      <span class="token punctuation">-</span> <span class="token string">"8888:8888"</span> <span class="token comment"># 后面容器内的端口需要和环境“MS_PORT”的端口相同</span></span>
<span class="line">      <span class="token punctuation">-</span> <span class="token string">"8091:8091"</span> <span class="token comment"># 使用 strm302 功能后，emby/jellyfin 代理端口</span></span>
<span class="line"></span>
<span class="line">  <span class="token comment"># emby 媒体服务器，可选</span></span>
<span class="line">  <span class="token key atrule">emby</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token key atrule">image</span><span class="token punctuation">:</span> amilys/embyserver<span class="token punctuation">:</span>4.9.0.42</span>
<span class="line">    <span class="token key atrule">container_name</span><span class="token punctuation">:</span> emby</span>
<span class="line">    <span class="token key atrule">network_mode</span><span class="token punctuation">:</span> bridge <span class="token comment"># DLNA and Wake-on-Lan 需要 bridge</span></span>
<span class="line">    <span class="token key atrule">environment</span><span class="token punctuation">:</span></span>
<span class="line">      <span class="token punctuation">-</span> UID=0 <span class="token comment"># 设置容器用户 ID 为 0 (通常是 root)</span></span>
<span class="line">      <span class="token punctuation">-</span> GID=0 <span class="token comment"># 设置容器组 ID 为 0 (通常是 root)</span></span>
<span class="line">      <span class="token punctuation">-</span> GIDLIST=0 <span class="token comment"># 设置容器组 ID 列表为 0</span></span>
<span class="line">      <span class="token punctuation">-</span> TZ=Asia/Shanghai <span class="token comment"># 设置容器的时区为亚洲/上海</span></span>
<span class="line">    <span class="token key atrule">devices</span><span class="token punctuation">:</span></span>
<span class="line">      <span class="token punctuation">-</span> /dev/dri<span class="token punctuation">:</span>/dev/dri <span class="token comment"># 将主机的 /dev/dri 设备挂载到容器 开启硬解</span></span>
<span class="line">    <span class="token key atrule">ports</span><span class="token punctuation">:</span></span>
<span class="line">      <span class="token punctuation">-</span> 8096<span class="token punctuation">:</span><span class="token number">8096</span> <span class="token comment"># 对外访问端口,如果有冲突可自行修改冒号前面映射到主机的端口号</span></span>
<span class="line">      <span class="token punctuation">-</span> 1900<span class="token punctuation">:</span><span class="token number">1900</span></span>
<span class="line">      <span class="token punctuation">-</span> 7359<span class="token punctuation">:</span><span class="token number">7359</span></span>
<span class="line">      <span class="token punctuation">-</span> 8920<span class="token punctuation">:</span><span class="token number">8920</span></span>
<span class="line">    <span class="token key atrule">restart</span><span class="token punctuation">:</span> unless<span class="token punctuation">-</span>stopped</span>
<span class="line">    <span class="token key atrule">privileged</span><span class="token punctuation">:</span> <span class="token boolean important">true</span></span>
<span class="line">    <span class="token key atrule">volumes</span><span class="token punctuation">:</span></span>
<span class="line">      <span class="token punctuation">-</span> /tmp/zfsv3/nvme12/(你的手机号)/data/Docker/ms<span class="token punctuation">-</span>go/emby/config<span class="token punctuation">:</span>/config</span>
<span class="line">      <span class="token comment"># 请根据实际情况，点击极空间“创建项目”界面的“查询路径”，选择或新建 emby 配置目录，点击“复制路径”，粘贴替换冒号前的内容</span></span>
<span class="line">      <span class="token punctuation">-</span> /tmp/zfsv3/sata1/(你的手机号)/data/media<span class="token punctuation">:</span>/media <span class="token comment"># 和 ms 的挂载保持相同</span></span>
<span class="line"></span>
<span class="line">  <span class="token comment"># qb 下载器，可选</span></span>
<span class="line">  <span class="token key atrule">qb</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token key atrule">image</span><span class="token punctuation">:</span> johngong/qbittorrent<span class="token punctuation">:</span>4.3.9</span>
<span class="line">    <span class="token key atrule">container_name</span><span class="token punctuation">:</span> qb</span>
<span class="line">    <span class="token key atrule">restart</span><span class="token punctuation">:</span> unless<span class="token punctuation">-</span>stopped</span>
<span class="line">    <span class="token key atrule">network_mode</span><span class="token punctuation">:</span> host <span class="token comment"># 便于自动 UPnP 映射及 ipv6 连接</span></span>
<span class="line">    <span class="token key atrule">environment</span><span class="token punctuation">:</span></span>
<span class="line">      <span class="token key atrule">GID</span><span class="token punctuation">:</span> <span class="token number">0</span></span>
<span class="line">      <span class="token key atrule">UID</span><span class="token punctuation">:</span> <span class="token number">0</span></span>
<span class="line">      <span class="token key atrule">UMASK</span><span class="token punctuation">:</span> <span class="token number">022</span></span>
<span class="line">      <span class="token key atrule">TZ</span><span class="token punctuation">:</span> Asia/Shanghai</span>
<span class="line">      <span class="token key atrule">WEBUIPORT</span><span class="token punctuation">:</span> <span class="token number">8989</span> <span class="token comment"># 后台访问端口号，如果冲突可以自行修改</span></span>
<span class="line">    <span class="token key atrule">volumes</span><span class="token punctuation">:</span></span>
<span class="line">      <span class="token punctuation">-</span> /tmp/zfsv3/nvme12/(你的手机号)/data/Docker/ms<span class="token punctuation">-</span>go/qb/config<span class="token punctuation">:</span>/config</span>
<span class="line">      <span class="token comment"># 请根据实际情况，点击极空间“创建项目”界面的“查询路径”，选择或新建 qb 配置目录，点击“复制路径”，粘贴替换冒号前的内容</span></span>
<span class="line">      <span class="token punctuation">-</span> /tmp/zfsv3/sata1/(你的手机号)/data/media<span class="token punctuation">:</span>/media <span class="token comment"># 和 ms 的挂载保持相同</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>修改完成后，点击 <code v-pre>创建</code> 等待镜像拉取和部署。</p>
<p>如果没有问题，容器会自动运行。使用 <code v-pre>Nas IP:8888</code> 即可访问 msgo。</p>
<p>如果你没有修改上述代码的端口号，默认可以用以下地址访问 Web 后台：</p>
<table>
<thead>
<tr>
<th>容器</th>
<th>Web 访问地址</th>
</tr>
</thead>
<tbody>
<tr>
<td>msgo</td>
<td>Nas IP:8888</td>
</tr>
<tr>
<td>qBittorrent</td>
<td>Nas IP:8989</td>
</tr>
<tr>
<td>Emby</td>
<td>Nas IP:8096</td>
</tr>
</tbody>
</table>
</div></template>


