<template><div><h1 id="🐳-dc-助手" tabindex="-1"><a class="header-anchor" href="#🐳-dc-助手"><span>🐳 DC 助手</span></a></h1>
<p><strong>DC 助手</strong> 是一个强大的Docker容器管理插件，需要配合<a href="https://github.com/onlyLTY/dockerCopilot" target="_blank" rel="noopener noreferrer">dockerCopilot 项目</a>使用。它可以实现Docker镜像的自动检查、更新通知、自动备份和镜像清理等功能。</p>
<h2 id="⚙️-功能特点" tabindex="-1"><a class="header-anchor" href="#⚙️-功能特点"><span>⚙️ 功能特点</span></a></h2>
<h3 id="🔄-容器管理" tabindex="-1"><a class="header-anchor" href="#🔄-容器管理"><span>🔄 容器管理</span></a></h3>
<ul>
<li><strong>镜像更新检查</strong>：自动检查Docker镜像是否有新版本</li>
<li><strong>更新通知</strong>：发现新版本时自动发送通知</li>
<li><strong>自动更新</strong>：可配置自动更新指定容器</li>
<li><strong>备份功能</strong>：更新前自动备份容器配置</li>
</ul>
<h3 id="🧹-系统维护" tabindex="-1"><a class="header-anchor" href="#🧹-系统维护"><span>🧹 系统维护</span></a></h3>
<ul>
<li><strong>镜像清理</strong>：自动清理无用的Docker镜像</li>
<li><strong>容器监控</strong>：监控容器运行状态</li>
<li><strong>定时任务</strong>：支持定时执行检查和清理任务</li>
<li><strong>Compose备份</strong>：备份Docker Compose配置文件</li>
</ul>
<h2 id="🚀-前置要求" tabindex="-1"><a class="header-anchor" href="#🚀-前置要求"><span>🚀 前置要求</span></a></h2>
<h3 id="dockercopilot-项目部署" tabindex="-1"><a class="header-anchor" href="#dockercopilot-项目部署"><span>dockerCopilot 项目部署</span></a></h3>
<p>使用DC助手前，需要先部署dockerCopilot项目：</p>
<ol>
<li>
<p><strong>获取项目</strong>：</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code class="language-bash"><span class="line"><span class="token function">git</span> clone https://github.com/onlyLTY/dockerCopilot.git</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></li>
<li>
<p><strong>部署方式</strong>：</p>
<ul>
<li>可以使用Docker部署</li>
<li>也可以直接运行Python程序</li>
<li>详细部署方法请参考项目文档</li>
</ul>
</li>
<li>
<p><strong>网络配置</strong>：</p>
<ul>
<li>确保Media Saber能够访问dockerCopilot服务</li>
<li>记录dockerCopilot的访问地址和端口</li>
</ul>
</li>
</ol>
<h2 id="📖-配置指南" tabindex="-1"><a class="header-anchor" href="#📖-配置指南"><span>📖 配置指南</span></a></h2>
<h3 id="📋-基础配置" tabindex="-1"><a class="header-anchor" href="#📋-基础配置"><span>📋 基础配置</span></a></h3>
<h4 id="必填参数" tabindex="-1"><a class="header-anchor" href="#必填参数"><span>必填参数</span></a></h4>
<ol>
<li>
<p><strong>主机地址 (host)</strong>：</p>
<ul>
<li>dockerCopilot服务的完整地址</li>
<li>格式：<code v-pre>http://IP地址:端口</code></li>
<li>示例：<code v-pre>http://192.168.1.100:8080</code></li>
</ul>
</li>
<li>
<p><strong>密码 (password)</strong>：</p>
<ul>
<li>dockerCopilot服务的访问密码</li>
<li>在dockerCopilot部署时设置的密码</li>
<li>用于API访问验证</li>
</ul>
</li>
</ol>
<h4 id="定时任务配置" tabindex="-1"><a class="header-anchor" href="#定时任务配置"><span>定时任务配置</span></a></h4>
<ol start="3">
<li>
<p><strong>检查周期 (checkCron)</strong>：</p>
<ul>
<li>设置自动检查镜像更新的频率</li>
<li>使用Cron表达式格式</li>
<li>示例：<code v-pre>0 */6 * * *</code> 每6小时检查一次</li>
</ul>
</li>
<li>
<p><strong>备份周期 (backupCron)</strong>：</p>
<ul>
<li>设置自动备份的执行频率</li>
<li>使用Cron表达式格式</li>
<li>示例：<code v-pre>0 2 * * 0</code> 每周日凌晨2点备份</li>
</ul>
</li>
</ol>
<h4 id="容器选择" tabindex="-1"><a class="header-anchor" href="#容器选择"><span>容器选择</span></a></h4>
<ol start="5">
<li><strong>监控容器 (containers)</strong>：
<ul>
<li>选择需要监控和管理的Docker容器</li>
<li>支持多选</li>
<li>可以从正在运行的容器列表中选择</li>
</ul>
</li>
</ol>
<h3 id="🔧-操作功能" tabindex="-1"><a class="header-anchor" href="#🔧-操作功能"><span>🔧 操作功能</span></a></h3>
<h4 id="手动操作" tabindex="-1"><a class="header-anchor" href="#手动操作"><span>手动操作</span></a></h4>
<ol>
<li>
<p><strong>检查更新</strong>：</p>
<ul>
<li>手动触发一次镜像更新检查</li>
<li>查看所有容器的更新状态</li>
<li>获取最新的镜像版本信息</li>
</ul>
</li>
<li>
<p><strong>备份Compose</strong>：</p>
<ul>
<li>手动备份Docker Compose配置文件</li>
<li>保存当前容器配置状态</li>
<li>便于出现问题时快速恢复</li>
</ul>
</li>
</ol>
<h2 id="📖-使用说明" tabindex="-1"><a class="header-anchor" href="#📖-使用说明"><span>📖 使用说明</span></a></h2>
<h3 id="配置流程" tabindex="-1"><a class="header-anchor" href="#配置流程"><span>配置流程</span></a></h3>
<h4 id="第一步-部署dockercopilot" tabindex="-1"><a class="header-anchor" href="#第一步-部署dockercopilot"><span>第一步：部署dockerCopilot</span></a></h4>
<ol>
<li>
<p><strong>选择部署方式</strong>：</p>
<ul>
<li>Docker部署（推荐）</li>
<li>源码部署</li>
</ul>
</li>
<li>
<p><strong>配置访问权限</strong>：</p>
<ul>
<li>设置访问密码</li>
<li>配置网络端口</li>
<li>确保服务正常启动</li>
</ul>
</li>
<li>
<p><strong>测试连接</strong>：</p>
<ul>
<li>访问dockerCopilot Web界面</li>
<li>确认服务运行正常</li>
</ul>
</li>
</ol>
<h4 id="第二步-配置dc助手" tabindex="-1"><a class="header-anchor" href="#第二步-配置dc助手"><span>第二步：配置DC助手</span></a></h4>
<ol>
<li>
<p><strong>填写连接信息</strong>：</p>
<ul>
<li>输入dockerCopilot的完整地址</li>
<li>填入正确的访问密码</li>
</ul>
</li>
<li>
<p><strong>选择监控容器</strong>：</p>
<ul>
<li>点击容器选择器</li>
<li>从列表中选择需要监控的容器</li>
<li>确认容器信息正确</li>
</ul>
</li>
<li>
<p><strong>设置定时任务</strong>：</p>
<ul>
<li>配置检查更新的频率</li>
<li>设置自动备份的时间</li>
<li>根据需求调整执行周期</li>
</ul>
</li>
</ol>
<h4 id="第三步-测试功能" tabindex="-1"><a class="header-anchor" href="#第三步-测试功能"><span>第三步：测试功能</span></a></h4>
<ol>
<li>
<p><strong>手动检查</strong>：</p>
<ul>
<li>点击&quot;检查&quot;按钮测试连接</li>
<li>确认可以正常获取容器信息</li>
</ul>
</li>
<li>
<p><strong>备份测试</strong>：</p>
<ul>
<li>执行一次手动备份</li>
<li>确认备份功能正常工作</li>
</ul>
</li>
</ol>
<h3 id="定时任务配置-1" tabindex="-1"><a class="header-anchor" href="#定时任务配置-1"><span>定时任务配置</span></a></h3>
<h4 id="cron表达式示例" tabindex="-1"><a class="header-anchor" href="#cron表达式示例"><span>Cron表达式示例</span></a></h4>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code class="language-bash"><span class="line"><span class="token comment"># 每6小时检查一次更新</span></span>
<span class="line"><span class="token number">0</span> */6 * * *</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 每天凌晨2点检查</span></span>
<span class="line"><span class="token number">0</span> <span class="token number">2</span> * * *</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 每周一上午8点检查</span></span>
<span class="line"><span class="token number">0</span> <span class="token number">8</span> * * <span class="token number">1</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 每月1日凌晨3点备份</span></span>
<span class="line"><span class="token number">0</span> <span class="token number">3</span> <span class="token number">1</span> * *</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>📖 <strong>详细说明</strong>：关于Cron表达式的完整语法和更多示例，请参考：<a href="/docs/other/cron_rule">Cron表达式说明文档</a></p>
</blockquote>
<h3 id="容器管理" tabindex="-1"><a class="header-anchor" href="#容器管理"><span>容器管理</span></a></h3>
<h4 id="支持的操作" tabindex="-1"><a class="header-anchor" href="#支持的操作"><span>支持的操作</span></a></h4>
<ol>
<li>
<p><strong>镜像检查</strong>：</p>
<ul>
<li>检查指定容器的镜像版本</li>
<li>对比本地版本与远程最新版本</li>
<li>识别需要更新的容器</li>
</ul>
</li>
<li>
<p><strong>自动更新</strong>：</p>
<ul>
<li>根据配置自动更新容器</li>
<li>更新前自动备份配置</li>
<li>保持容器运行状态</li>
</ul>
</li>
<li>
<p><strong>备份管理</strong>：</p>
<ul>
<li>备份Docker Compose文件</li>
<li>保存容器配置信息</li>
<li>支持版本化备份</li>
</ul>
</li>
</ol>
<h2 id="⚠️-注意事项" tabindex="-1"><a class="header-anchor" href="#⚠️-注意事项"><span>⚠️ 注意事项</span></a></h2>
<h3 id="重要提醒" tabindex="-1"><a class="header-anchor" href="#重要提醒"><span>重要提醒</span></a></h3>
<ol>
<li>
<p><strong>依赖关系</strong>：</p>
<ul>
<li><strong>必须先部署dockerCopilot项目</strong></li>
<li>DC助手只是前端界面，实际功能由dockerCopilot提供</li>
<li>确保两个服务之间网络连通</li>
</ul>
</li>
<li>
<p><strong>系统兼容性</strong>：</p>
<ul>
<li>检查Docker版本兼容性</li>
<li>确认操作系统支持情况</li>
<li>验证网络环境配置</li>
</ul>
</li>
<li>
<p><strong>权限要求</strong>：</p>
<ul>
<li>dockerCopilot需要Docker管理权限</li>
<li>确保服务有足够的文件访问权限</li>
<li>检查防火墙和安全组设置</li>
</ul>
</li>
</ol>
<h3 id="使用建议" tabindex="-1"><a class="header-anchor" href="#使用建议"><span>使用建议</span></a></h3>
<ol>
<li>
<p><strong>备份策略</strong>：</p>
<ul>
<li>定期备份重要容器配置</li>
<li>在更新前手动创建备份点</li>
<li>保留多个历史备份版本</li>
</ul>
</li>
<li>
<p><strong>监控选择</strong>：</p>
<ul>
<li>优先监控关键业务容器</li>
<li>避免监控过多容器影响性能</li>
<li>根据重要性设置不同的检查频率</li>
</ul>
</li>
<li>
<p><strong>更新策略</strong>：</p>
<ul>
<li>测试环境先验证更新</li>
<li>关键服务谨慎设置自动更新</li>
<li>制定回滚预案</li>
</ul>
</li>
</ol>
<h3 id="故障排除" tabindex="-1"><a class="header-anchor" href="#故障排除"><span>故障排除</span></a></h3>
<ol>
<li>
<p><strong>连接失败</strong>：</p>
<ul>
<li>检查dockerCopilot服务状态</li>
<li>确认网络连通性</li>
<li>验证地址和端口配置</li>
</ul>
</li>
<li>
<p><strong>认证失败</strong>：</p>
<ul>
<li>检查密码是否正确</li>
<li>确认dockerCopilot访问权限</li>
<li>重新设置访问凭据</li>
</ul>
</li>
<li>
<p><strong>容器检查失败</strong>：</p>
<ul>
<li>确认Docker服务正常</li>
<li>检查容器运行状态</li>
<li>验证权限配置</li>
</ul>
</li>
<li>
<p><strong>备份失败</strong>：</p>
<ul>
<li>检查磁盘空间</li>
<li>确认文件访问权限</li>
<li>查看详细错误日志</li>
</ul>
</li>
</ol>
<h2 id="📊-使用效果" tabindex="-1"><a class="header-anchor" href="#📊-使用效果"><span>📊 使用效果</span></a></h2>
<h3 id="自动化管理" tabindex="-1"><a class="header-anchor" href="#自动化管理"><span>自动化管理</span></a></h3>
<ul>
<li><strong>版本跟踪</strong>：实时跟踪容器镜像版本</li>
<li><strong>更新提醒</strong>：及时发现可用更新</li>
<li><strong>配置备份</strong>：保障配置文件安全</li>
<li><strong>系统清理</strong>：自动清理无用镜像</li>
</ul>
<h3 id="运维效率" tabindex="-1"><a class="header-anchor" href="#运维效率"><span>运维效率</span></a></h3>
<ul>
<li><strong>批量管理</strong>：统一管理多个容器</li>
<li><strong>定时执行</strong>：无需手动干预</li>
<li><strong>状态监控</strong>：实时了解容器状态</li>
<li><strong>一键操作</strong>：简化管理流程</li>
</ul>
<h2 id="🔗-相关链接" tabindex="-1"><a class="header-anchor" href="#🔗-相关链接"><span>🔗 相关链接</span></a></h2>
<ul>
<li><RouteLink to="/docs/cultivation_secrets/main/">修仙秘籍主页</RouteLink></li>
<li><a href="https://github.com/onlyLTY/dockerCopilot" target="_blank" rel="noopener noreferrer">dockerCopilot 项目</a></li>
<li><a href="/docs/other/cron_rule">Cron表达式说明</a></li>
</ul>
<hr>
<p>🎯 <strong>提示</strong>：DC助手需要配合dockerCopilot项目使用，请确保先正确部署dockerCopilot服务。</p>
<div class="hint-container note">
<p class="hint-container-title">致谢</p>
<p>感谢<code v-pre>@onlyLTY</code> 大佬提供的dockerCopilot项目，以及为大家带来本插件的开发者。</p>
</div>
</div></template>


