<template><div><div class="hint-container note">
<p class="hint-container-title">注</p>
<p>说明：本文为群晖 NAS 上通过 Container Manager 迁移 PostgreSQL 数据的精简教程，适用于特定场景下的数据库迁移操作。<br>
操作前请确保符合适用条件并仔细阅读步骤。</p>
</div>
<h3 id="一、适用场景" tabindex="-1"><a class="header-anchor" href="#一、适用场景"><span>一、适用场景</span></a></h3>
<ul>
<li>PostgreSQL 运行在群晖的 <strong>Container Manager（Docker）</strong> 环境中</li>
<li>新版本 PostgreSQL 容器已创建并正常运行</li>
<li>操作方式为通过 <strong>Xshell 远程 SSH</strong> 连接群晖进行操作</li>
</ul>
<hr>
<h3 id="二、准备工作" tabindex="-1"><a class="header-anchor" href="#二、准备工作"><span>二、准备工作</span></a></h3>
<h4 id="_1-启用群晖-ssh-服务" tabindex="-1"><a class="header-anchor" href="#_1-启用群晖-ssh-服务"><span>1. 启用群晖 SSH 服务</span></a></h4>
<ol>
<li>进入群晖 DSM 系统，打开 <strong>控制面板</strong></li>
<li>找到 <strong>终端机和 SNMP</strong> 选项，勾选 <strong>启用 SSH 服务</strong></li>
<li>记录 SSH 端口号（默认端口为 <code v-pre>22</code>，若有修改需以实际设置为准）</li>
</ol>
<h4 id="_2-通过-xshell-连接群晖" tabindex="-1"><a class="header-anchor" href="#_2-通过-xshell-连接群晖"><span>2. 通过 Xshell 连接群晖</span></a></h4>
<ul>
<li>
<p>打开 Xshell，输入连接命令：</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code class="language-bash"><span class="line"><span class="token function">ssh</span> 用户名@群晖IP <span class="token parameter variable">-p</span> 端口号</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>（将 “用户名”“群晖 IP”“端口号” 替换为实际信息）</p>
</li>
<li>
<p>若登录后为普通用户权限，执行命令切换至 root 权限：</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code class="language-bash"><span class="line"><span class="token function">sudo</span> <span class="token parameter variable">-i</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></li>
</ul>
<h4 id="_3-确认容器状态" tabindex="-1"><a class="header-anchor" href="#_3-确认容器状态"><span>3. 确认容器状态</span></a></h4>
<ul>
<li>执行命令查看当前运行的容器：<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code class="language-bash"><span class="line"><span class="token function">docker</span> <span class="token function">ps</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></li>
<li>在输出结果中找到旧 PostgreSQL 容器和新 PostgreSQL 容器的名称，例如：
<ul>
<li>旧容器：<code v-pre>ms-pgsql</code></li>
<li>新容器：<code v-pre>postgres</code>（请以实际容器名称为准）</li>
</ul>
</li>
</ul>
<hr>
<h3 id="三、备份旧容器数据库" tabindex="-1"><a class="header-anchor" href="#三、备份旧容器数据库"><span>三、备份旧容器数据库</span></a></h3>
<p>为保障数据安全，需先对旧容器中的数据库进行完整备份：</p>
<ol>
<li>创建备份目录：<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code class="language-bash"><span class="line"><span class="token function">mkdir</span> <span class="token parameter variable">-p</span> /volume1/docker/pg_backup</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></li>
<li>导出旧容器数据库数据至备份目录：<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code class="language-bash"><span class="line"><span class="token function">docker</span> <span class="token builtin class-name">exec</span> <span class="token parameter variable">-t</span> ms-pgsql pg_dumpall <span class="token parameter variable">-U</span> postgres <span class="token operator">></span> /volume1/docker/pg_backup/all.sql</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div>（将 <code v-pre>ms-pgsql</code> 替换为实际旧容器名称）</li>
<li>验证备份文件是否正常：<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code class="language-bash"><span class="line"><span class="token function">ls</span> <span class="token parameter variable">-lh</span> /volume1/docker/pg_backup/all.sql</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div>确认文件存在且大小符合预期。</li>
<li>（建议）将备份文件复制到本地电脑留存：<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code class="language-bash"><span class="line"><span class="token function">scp</span> root@群晖IP:/volume1/docker/pg_backup/all.sql ./all.sql</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div>（将 “群晖 IP” 替换为实际 IP 地址）</li>
</ol>
<hr>
<h3 id="四、导入数据到新容器" tabindex="-1"><a class="header-anchor" href="#四、导入数据到新容器"><span>四、导入数据到新容器</span></a></h3>
<ul>
<li>执行导入命令：<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code class="language-bash"><span class="line"><span class="token function">docker</span> <span class="token builtin class-name">exec</span> <span class="token parameter variable">-i</span> postgres psql <span class="token parameter variable">-U</span> postgres <span class="token operator">&lt;</span> /volume1/docker/pg_backup/all.sql</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div>（将 <code v-pre>postgres</code> 替换为实际新容器名称）</li>
</ul>
<hr>
<h3 id="五、验证迁移结果" tabindex="-1"><a class="header-anchor" href="#五、验证迁移结果"><span>五、验证迁移结果</span></a></h3>
<ol>
<li>
<p>执行命令查看新容器中的数据库列表：</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code class="language-bash"><span class="line"><span class="token function">docker</span> <span class="token builtin class-name">exec</span> <span class="token parameter variable">-it</span> postgres psql <span class="token parameter variable">-U</span> postgres <span class="token parameter variable">-c</span> <span class="token string">"\l"</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>（将 <code v-pre>postgres</code> 替换为实际新容器名称）</p>
</li>
<li>
<p>检查输出结果，确认能看到旧容器中所有的数据库，即表示数据迁移成功。</p>
</li>
</ol>
<hr>
<h3 id="六、切换应用" tabindex="-1"><a class="header-anchor" href="#六、切换应用"><span>六、切换应用</span></a></h3>
<ol>
<li>打开群晖 Container Manager，找到旧 PostgreSQL 容器（如 <code v-pre>ms-pgsql</code>），点击 <strong>停止</strong></li>
<li>选中新 PostgreSQL 容器，点击 <strong>编辑</strong>，将容器端口修改为旧容器原来使用的端口（确保应用连接地址不变）</li>
<li>重启新容器，并测试应用是否能正常连接并访问数据库</li>
</ol>
<hr>
<h3 id="七、清理-可选" tabindex="-1"><a class="header-anchor" href="#七、清理-可选"><span>七、清理（可选）</span></a></h3>
<p>若确认新容器运行稳定，应用访问正常，可删除旧容器及旧数据目录以释放存储空间：</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code class="language-bash"><span class="line"><span class="token comment"># 删除旧容器</span></span>
<span class="line"><span class="token function">docker</span> <span class="token function">rm</span> ms-pgsql</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 删除旧数据目录</span></span>
<span class="line"><span class="token function">rm</span> <span class="token parameter variable">-rf</span> /volume1/docker/postgres_old/data</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>（将 <code v-pre>ms-pgsql</code>、<code v-pre>postgres_old/data</code> 替换为实际名称与路径）</p>
<hr>
<h3 id="八、迁移注意事项" tabindex="-1"><a class="header-anchor" href="#八、迁移注意事项"><span>八、迁移注意事项</span></a></h3>
<ul>
<li>若涉及 PostgreSQL <strong>跨大版本升级</strong>（如从 13 升级至 17），推荐优先使用 <strong>pg_dumpall 备份 + 恢复</strong> 的方式，兼容性最佳</li>
<li>当数据库数据量较大时，可使用并行导出命令加快备份速度：<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code class="language-bash"><span class="line">pg_dump <span class="token parameter variable">-Fd</span> <span class="token parameter variable">-j</span> <span class="token number">4</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div>（<code v-pre>-j 4</code> 表示使用 4 个线程，可根据服务器性能调整）</li>
<li>数据迁移前务必验证备份文件的可用性，避免因备份失效导致数据丢失</li>
<li>在群晖上操作时，建议将数据目录、备份目录等放在 <code v-pre>/volume1/...</code> 路径下，防止群晖系统更新时误删数据</li>
</ul>
</div></template>


