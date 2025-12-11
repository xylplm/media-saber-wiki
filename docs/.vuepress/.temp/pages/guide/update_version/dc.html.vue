<template><div><div class="hint-container tip">
<p class="hint-container-title">提示</p>
<p>GitHub 项目地址：<a href="https://github.com/onlyLTY/dockerCopilot" target="_blank" rel="noopener noreferrer">https://github.com/onlyLTY/dockerCopilot</a><br>
如果觉得好用，欢迎为项目点个 Star 支持开发者。</p>
<p>如需反馈 Bug 或提出建议，请前往 GitHub 提交 Issue，或通过邮箱联系作者： <code v-pre>onlylty@lty.wiki</code></p>
</div>
<h3 id="一、dc-简介" tabindex="-1"><a class="header-anchor" href="#一、dc-简介"><span>一、dc 简介</span></a></h3>
<p><strong>dc</strong> 是一款 Docker 容器管理工具，主要功能包括：</p>
<ul>
<li>容器更新：直观显示更新状态，一键更新或更换版本；</li>
<li>镜像管理：清理未使用的镜像；</li>
<li>容器备份与恢复：更换设备或处理硬盘故障时可轻松还原。</li>
</ul>
<hr>
<h3 id="dc-安装指南" tabindex="-1"><a class="header-anchor" href="#dc-安装指南"><span>dc 安装指南</span></a></h3>
<ul>
<li>在 <code v-pre>docker</code> 目录下新建文件夹：<code v-pre>/path/to/docker/dockercopilot/data</code>。（请替换为实际路径）</li>
<li>打开 <strong>Container Manager - 项目 - 新增项目</strong>，命名为 <code v-pre>dockercopilot</code>，路径设为新建的文件夹。</li>
<li>来源选择「创建 docker-compose.yaml」，并填入以下内容（现代 Compose 推荐删除 <code v-pre>version</code> 字段）：</li>
</ul>
<div class="language-yaml line-numbers-mode" data-highlighter="prismjs" data-ext="yml"><pre v-pre><code class="language-yaml"><span class="line"><span class="token key atrule">services</span><span class="token punctuation">:</span></span>
<span class="line">  <span class="token key atrule">dockerCopilot</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token key atrule">image</span><span class="token punctuation">:</span> qqaazz.msaber.fun/0nlylty/dockercopilot<span class="token punctuation">:</span>latest</span>
<span class="line">    <span class="token key atrule">container_name</span><span class="token punctuation">:</span> dockercopilot</span>
<span class="line">    <span class="token key atrule">ports</span><span class="token punctuation">:</span></span>
<span class="line">      <span class="token punctuation">-</span> <span class="token string">"12712:12712"</span></span>
<span class="line">    <span class="token key atrule">volumes</span><span class="token punctuation">:</span></span>
<span class="line">      <span class="token punctuation">-</span> /var/run/docker.sock<span class="token punctuation">:</span>/var/run/docker.sock</span>
<span class="line">      <span class="token punctuation">-</span> /path/to/docker/dockercopilot/data<span class="token punctuation">:</span>/data</span>
<span class="line">    <span class="token key atrule">environment</span><span class="token punctuation">:</span></span>
<span class="line">      <span class="token punctuation">-</span> PUID=501</span>
<span class="line">      <span class="token punctuation">-</span> PGID=20</span>
<span class="line">      <span class="token punctuation">-</span> secretKey=your<span class="token punctuation">-</span>secret<span class="token punctuation">-</span>key<span class="token punctuation">-</span>here   <span class="token comment"># 必须大于8个字符且非纯数字</span></span>
<span class="line">      <span class="token punctuation">-</span> DOCKER_HOST=unix<span class="token punctuation">:</span>///var/run/docker.sock</span>
<span class="line">      <span class="token punctuation">-</span> hubURL=https<span class="token punctuation">:</span>//docker.nju.edu.cn</span>
<span class="line">    <span class="token key atrule">restart</span><span class="token punctuation">:</span> always</span>
<span class="line">    <span class="token key atrule">privileged</span><span class="token punctuation">:</span> <span class="token boolean important">true</span></span>
<span class="line">    <span class="token key atrule">networks</span><span class="token punctuation">:</span></span>
<span class="line">      <span class="token punctuation">-</span> bridge<span class="token punctuation">-</span>network</span>
<span class="line"></span>
<span class="line"><span class="token key atrule">networks</span><span class="token punctuation">:</span></span>
<span class="line">  <span class="token key atrule">bridge-network</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token key atrule">driver</span><span class="token punctuation">:</span> bridge</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>修改路径为你本地实际路径，设置好环境变量后，点击 <strong>下一步</strong> 完成部署。</li>
</ul>
<hr>
</div></template>


