<template><div><h1 id="🌱-iyuu自动辅种" tabindex="-1"><a class="header-anchor" href="#🌱-iyuu自动辅种"><span>🌱 IYUU自动辅种</span></a></h1>
<p><strong>IYUU自动辅种</strong> 是一个强大的PT站点种子自动化管理工具，基于IYUU平台的API接口，能够自动查找并添加相同内容的种子进行辅种，大幅提高做种效率和PT站点积分获取。</p>
<h2 id="⚙️-功能特点" tabindex="-1"><a class="header-anchor" href="#⚙️-功能特点"><span>⚙️ 功能特点</span></a></h2>
<h3 id="🚀-核心功能" tabindex="-1"><a class="header-anchor" href="#🚀-核心功能"><span>🚀 核心功能</span></a></h3>
<ul>
<li><strong>智能辅种匹配</strong>：基于文件哈希自动匹配相同内容的种子</li>
<li><strong>多站点支持</strong>：支持国内外主流PT站点的种子辅种</li>
<li><strong>自动化执行</strong>：支持定时任务自动执行辅种操作</li>
<li><strong>精确过滤控制</strong>：支持标签过滤和站点选择</li>
<li><strong>实时状态监控</strong>：提供辅种结果统计和失败记录管理</li>
</ul>
<h3 id="🛠️-高级特性" tabindex="-1"><a class="header-anchor" href="#🛠️-高级特性"><span>🛠️ 高级特性</span></a></h3>
<ul>
<li><strong>站点绑定管理</strong>：支持多站点批量绑定和配置</li>
<li><strong>缓存优化机制</strong>：智能记录失败种子，避免重复尝试</li>
<li><strong>通知推送集成</strong>：辅种结果实时通知推送</li>
<li><strong>下载器兼容</strong>：支持qBittorrent、Transmission等主流下载器</li>
<li><strong>零字节清理</strong>：自动清理无效的种子文件</li>
</ul>
<h2 id="📖-配置指南" tabindex="-1"><a class="header-anchor" href="#📖-配置指南"><span>📖 配置指南</span></a></h2>
<h3 id="📋-基础参数" tabindex="-1"><a class="header-anchor" href="#📋-基础参数"><span>📋 基础参数</span></a></h3>
<h4 id="必填参数" tabindex="-1"><a class="header-anchor" href="#必填参数"><span>必填参数</span></a></h4>
<ol>
<li>
<p><strong>插件开关 (enabled)</strong>：</p>
<ul>
<li>控制IYUU自动辅种功能的总开关</li>
<li>类型：布尔值</li>
<li><strong>true</strong>：启用自动辅种功能</li>
<li><strong>false</strong>：禁用自动辅种功能</li>
</ul>
</li>
<li>
<p><strong>IYUU Token (token)</strong>：</p>
<ul>
<li>IYUU平台的API访问令牌</li>
<li>类型：字符串</li>
<li>获取方式：从IYUU官网注册并获取</li>
<li>必须：有效的Token是使用功能的前提</li>
</ul>
</li>
<li>
<p><strong>下载器选择 (downloaders)</strong>：</p>
<ul>
<li>用于辅种的下载器配置</li>
<li>类型：下载器ID数组</li>
<li>支持多个下载器同时使用</li>
<li>必须确保下载器配置正确且可访问</li>
</ul>
</li>
<li>
<p><strong>站点选择 (sites)</strong>：</p>
<ul>
<li>参与辅种的PT站点列表</li>
<li>类型：站点ID数组</li>
<li>只有选中的站点才会参与辅种</li>
<li>需要先完成站点绑定</li>
</ul>
</li>
</ol>
<h4 id="可选参数" tabindex="-1"><a class="header-anchor" href="#可选参数"><span>可选参数</span></a></h4>
<ol start="5">
<li>
<p><strong>定时任务 (cron)</strong>：</p>
<ul>
<li>自动执行辅种的时间调度</li>
<li>类型：Cron表达式</li>
<li>默认：手动执行</li>
<li>示例：<code v-pre>0 2 * * *</code>（每天凌晨2点执行）</li>
</ul>
</li>
<li>
<p><strong>代理域名 (proxyDomain)</strong>：</p>
<ul>
<li>可选的代理服务器地址</li>
<li>类型：字符串</li>
<li>用途：解决网络访问问题</li>
<li>格式：完整的代理服务器URL</li>
</ul>
</li>
<li>
<p><strong>忽略标签 (noLabels)</strong>：</p>
<ul>
<li>不参与辅种的种子标签</li>
<li>类型：字符串（多个标签用逗号分隔）</li>
<li>用途：排除特定类型的种子</li>
<li>示例：<code v-pre>manual,private,completed</code></li>
</ul>
</li>
</ol>
<h4 id="高级选项" tabindex="-1"><a class="header-anchor" href="#高级选项"><span>高级选项</span></a></h4>
<ol start="8">
<li>
<p><strong>通知开关 (notice)</strong>：</p>
<ul>
<li>是否发送辅种结果通知</li>
<li>类型：布尔值</li>
<li>默认：true（启用通知）</li>
</ul>
</li>
<li>
<p><strong>自动开始 (autoStart)</strong>：</p>
<ul>
<li>新添加的辅种是否自动开始下载</li>
<li>类型：布尔值</li>
<li>默认：true（自动开始）</li>
</ul>
</li>
<li>
<p><strong>自动删除零字节 (autoDeleteZero)</strong>：</p>
<ul>
<li>自动清理无效的种子文件</li>
<li>类型：布尔值</li>
<li>默认：true（自动清理）</li>
</ul>
</li>
</ol>
<h2 id="🚀-使用说明" tabindex="-1"><a class="header-anchor" href="#🚀-使用说明"><span>🚀 使用说明</span></a></h2>
<h3 id="📋-初始配置" tabindex="-1"><a class="header-anchor" href="#📋-初始配置"><span>📋 初始配置</span></a></h3>
<h4 id="第一步-获取iyuu-token" tabindex="-1"><a class="header-anchor" href="#第一步-获取iyuu-token"><span>第一步：获取IYUU Token</span></a></h4>
<ol>
<li>
<p><strong>注册IYUU账号</strong>：</p>
<ul>
<li>访问IYUU官网</li>
<li>注册并登录账号</li>
<li>获取个人API Token</li>
</ul>
</li>
<li>
<p><strong>配置Token</strong>：</p>
<ul>
<li>在插件配置中填入获取到的Token</li>
<li>确保Token有效且具备必要权限</li>
</ul>
</li>
</ol>
<h4 id="第二步-配置下载器" tabindex="-1"><a class="header-anchor" href="#第二步-配置下载器"><span>第二步：配置下载器</span></a></h4>
<ol>
<li>
<p><strong>选择下载器</strong>：</p>
<ul>
<li>从下载器列表中选择要使用的下载器</li>
<li>支持选择多个下载器</li>
<li>确保下载器运行正常且可访问</li>
</ul>
</li>
<li>
<p><strong>验证连接</strong>：</p>
<ul>
<li>确认下载器配置正确</li>
<li>测试连接状态</li>
<li>检查权限设置</li>
</ul>
</li>
</ol>
<h4 id="第三步-绑定pt站点" tabindex="-1"><a class="header-anchor" href="#第三步-绑定pt站点"><span>第三步：绑定PT站点</span></a></h4>
<ol>
<li>
<p><strong>查看推荐站点</strong>：</p>
<ul>
<li>点击&quot;绑定站点&quot;按钮</li>
<li>查看支持的PT站点列表</li>
<li>选择需要绑定的站点</li>
</ul>
</li>
<li>
<p><strong>完成站点绑定</strong>：</p>
<ul>
<li>输入站点ID (sid)</li>
<li>输入用户ID (uid)</li>
<li>输入Passkey</li>
<li>提交完成绑定</li>
</ul>
</li>
<li>
<p><strong>选择参与站点</strong>：</p>
<ul>
<li>在主配置中选择参与辅种的站点</li>
<li>只有绑定且选中的站点才会参与辅种</li>
</ul>
</li>
</ol>
<h4 id="第四步-配置高级选项" tabindex="-1"><a class="header-anchor" href="#第四步-配置高级选项"><span>第四步：配置高级选项</span></a></h4>
<ol>
<li>
<p><strong>设置过滤规则</strong>：</p>
<ul>
<li>配置忽略标签排除特定种子</li>
<li>选择适合的下载器</li>
<li>调整自动化设置</li>
</ul>
</li>
<li>
<p><strong>配置定时任务</strong>（可选）：</p>
<ul>
<li>设置Cron表达式实现定时执行</li>
<li>建议选择网络较好的时间段</li>
<li>避免与其他任务冲突</li>
</ul>
</li>
</ol>
<h3 id="📊-操作流程" tabindex="-1"><a class="header-anchor" href="#📊-操作流程"><span>📊 操作流程</span></a></h3>
<h4 id="手动执行辅种" tabindex="-1"><a class="header-anchor" href="#手动执行辅种"><span>手动执行辅种</span></a></h4>
<ol>
<li>
<p><strong>执行辅种</strong>：</p>
<ul>
<li>完成所有配置后点击&quot;运行&quot;按钮</li>
<li>系统开始扫描现有种子</li>
<li>自动匹配并添加辅种</li>
</ul>
</li>
<li>
<p><strong>监控进度</strong>：</p>
<ul>
<li>查看执行进度和结果</li>
<li>关注成功和失败数量</li>
<li>处理异常情况</li>
</ul>
</li>
</ol>
<h4 id="自动定时辅种" tabindex="-1"><a class="header-anchor" href="#自动定时辅种"><span>自动定时辅种</span></a></h4>
<ol>
<li>
<p><strong>启用定时任务</strong>：</p>
<ul>
<li>配置合适的Cron表达式</li>
<li>保存配置启用自动执行</li>
<li>系统将按计划自动执行</li>
</ul>
</li>
<li>
<p><strong>监控自动执行</strong>：</p>
<ul>
<li>通过通知查看执行结果</li>
<li>定期检查辅种效果</li>
<li>及时处理异常问题</li>
</ul>
</li>
</ol>
<h3 id="🛠️-高级操作" tabindex="-1"><a class="header-anchor" href="#🛠️-高级操作"><span>🛠️ 高级操作</span></a></h3>
<h4 id="缓存管理" tabindex="-1"><a class="header-anchor" href="#缓存管理"><span>缓存管理</span></a></h4>
<ol>
<li>
<p><strong>清除缓存功能</strong>：</p>
<ul>
<li>清除失败种子记录</li>
<li>重置站点流控状态</li>
<li>重新尝试之前失败的种子</li>
</ul>
</li>
<li>
<p><strong>使用场景</strong>：</p>
<ul>
<li>站点恢复正常后重新尝试</li>
<li>解决长期失败的种子问题</li>
<li>重置辅种状态</li>
</ul>
</li>
<li>
<p><strong>操作方法</strong>：</p>
<ul>
<li>点击&quot;清除缓存&quot;按钮</li>
<li>确认操作风险</li>
<li>等待清除完成</li>
</ul>
</li>
</ol>
<h4 id="站点绑定详解" tabindex="-1"><a class="header-anchor" href="#站点绑定详解"><span>站点绑定详解</span></a></h4>
<p><strong>绑定参数说明</strong>：</p>
<ol>
<li>
<p><strong>站点ID (sid)</strong>：</p>
<ul>
<li>从IYUU支持的站点列表中选择</li>
<li>每个站点有唯一的数字ID</li>
<li>必须选择正确的站点</li>
</ul>
</li>
<li>
<p><strong>用户ID (uid)</strong>：</p>
<ul>
<li>在PT站点中的用户ID</li>
<li>通常在个人资料页面可以找到</li>
<li>必须是数字格式</li>
</ul>
</li>
<li>
<p><strong>Passkey</strong>：</p>
<ul>
<li>PT站点的个人密钥</li>
<li>用于下载种子的身份验证</li>
<li>从站点个人设置中获取</li>
</ul>
</li>
</ol>
<p><strong>绑定步骤</strong>：</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code class="language-text"><span class="line">1. 选择站点 → 输入用户信息 → 提交绑定 → 验证成功</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h2 id="📊-使用示例" tabindex="-1"><a class="header-anchor" href="#📊-使用示例"><span>📊 使用示例</span></a></h2>
<h3 id="🎯-典型配置示例" tabindex="-1"><a class="header-anchor" href="#🎯-典型配置示例"><span>🎯 典型配置示例</span></a></h3>
<h4 id="基础配置" tabindex="-1"><a class="header-anchor" href="#基础配置"><span>基础配置</span></a></h4>
<div class="language-yaml line-numbers-mode" data-highlighter="prismjs" data-ext="yml"><pre v-pre><code class="language-yaml"><span class="line"><span class="token key atrule">启用状态</span><span class="token punctuation">:</span> <span class="token boolean important">true</span></span>
<span class="line"><span class="token key atrule">IYUU Token</span><span class="token punctuation">:</span> <span class="token string">"IYUUTxxxxxxxxxxxxxxxxx"</span></span>
<span class="line"><span class="token key atrule">下载器选择</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>qBittorrent<span class="token punctuation">]</span></span>
<span class="line"><span class="token key atrule">站点选择</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>站点1<span class="token punctuation">,</span> 站点2<span class="token punctuation">,</span> 站点3<span class="token punctuation">]</span></span>
<span class="line"><span class="token key atrule">定时任务</span><span class="token punctuation">:</span> <span class="token string">"0 2 * * *"</span>  <span class="token comment"># 每天凌晨2点执行</span></span>
<span class="line"><span class="token key atrule">通知开关</span><span class="token punctuation">:</span> <span class="token boolean important">true</span></span>
<span class="line"><span class="token key atrule">自动开始</span><span class="token punctuation">:</span> <span class="token boolean important">true</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="高级配置" tabindex="-1"><a class="header-anchor" href="#高级配置"><span>高级配置</span></a></h4>
<div class="language-yaml line-numbers-mode" data-highlighter="prismjs" data-ext="yml"><pre v-pre><code class="language-yaml"><span class="line"><span class="token key atrule">启用状态</span><span class="token punctuation">:</span> <span class="token boolean important">true</span></span>
<span class="line"><span class="token key atrule">IYUU Token</span><span class="token punctuation">:</span> <span class="token string">"IYUUTxxxxxxxxxxxxxxxxx"</span></span>
<span class="line"><span class="token key atrule">下载器选择</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>qBittorrent<span class="token punctuation">,</span> Transmission<span class="token punctuation">]</span></span>
<span class="line"><span class="token key atrule">站点选择</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>全部已绑定站点<span class="token punctuation">]</span></span>
<span class="line"><span class="token key atrule">代理域名</span><span class="token punctuation">:</span> <span class="token string">"http://proxy.example.com"</span></span>
<span class="line"><span class="token key atrule">忽略标签</span><span class="token punctuation">:</span> <span class="token string">"manual,private,testing"</span></span>
<span class="line"><span class="token key atrule">定时任务</span><span class="token punctuation">:</span> <span class="token string">"0 */6 * * *"</span>  <span class="token comment"># 每6小时执行</span></span>
<span class="line"><span class="token key atrule">通知开关</span><span class="token punctuation">:</span> <span class="token boolean important">true</span></span>
<span class="line"><span class="token key atrule">自动开始</span><span class="token punctuation">:</span> <span class="token boolean important">true</span></span>
<span class="line"><span class="token key atrule">自动删除零字节</span><span class="token punctuation">:</span> <span class="token boolean important">true</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="🎮-常用cron表达式" tabindex="-1"><a class="header-anchor" href="#🎮-常用cron表达式"><span>🎮 常用Cron表达式</span></a></h3>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code class="language-bash"><span class="line"><span class="token comment"># 每6小时执行一次</span></span>
<span class="line"><span class="token number">0</span> */6 * * *</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 每天凌晨2点执行</span></span>
<span class="line"><span class="token number">0</span> <span class="token number">2</span> * * *</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 每周日凌晨3点执行</span></span>
<span class="line"><span class="token number">0</span> <span class="token number">3</span> * * <span class="token number">0</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 每2小时执行一次</span></span>
<span class="line"><span class="token number">0</span> */2 * * *</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 工作日晚上10点执行</span></span>
<span class="line"><span class="token number">0</span> <span class="token number">22</span> * * <span class="token number">1</span>-5</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="🔧-故障诊断" tabindex="-1"><a class="header-anchor" href="#🔧-故障诊断"><span>🔧 故障诊断</span></a></h2>
<h3 id="⚠️-常见问题" tabindex="-1"><a class="header-anchor" href="#⚠️-常见问题"><span>⚠️ 常见问题</span></a></h3>
<h4 id="_1-token验证失败" tabindex="-1"><a class="header-anchor" href="#_1-token验证失败"><span>1. Token验证失败</span></a></h4>
<p><strong>症状</strong>：提示Token无效或过期</p>
<p><strong>解决方法</strong>：</p>
<ol>
<li>
<p><strong>重新获取Token</strong>：</p>
<ul>
<li>登录IYUU官网</li>
<li>重新生成API Token</li>
<li>更新插件配置</li>
</ul>
</li>
<li>
<p><strong>检查Token格式</strong>：</p>
<ul>
<li>确认Token完整性</li>
<li>检查是否有额外空格</li>
<li>验证Token权限</li>
</ul>
</li>
</ol>
<h4 id="_2-站点绑定失败" tabindex="-1"><a class="header-anchor" href="#_2-站点绑定失败"><span>2. 站点绑定失败</span></a></h4>
<p><strong>症状</strong>：绑定站点时提示错误</p>
<p><strong>排查步骤</strong>：</p>
<ol>
<li>
<p><strong>验证站点信息</strong>：</p>
<ul>
<li>确认用户ID正确</li>
<li>检查Passkey有效性</li>
<li>验证站点选择</li>
</ul>
</li>
<li>
<p><strong>检查网络连接</strong>：</p>
<ul>
<li>确认能够访问PT站点</li>
<li>检查代理配置</li>
<li>测试网络稳定性</li>
</ul>
</li>
<li>
<p><strong>账号状态检查</strong>：</p>
<ul>
<li>确认PT站点账号正常</li>
<li>检查是否被封禁</li>
<li>验证下载权限</li>
</ul>
</li>
</ol>
<h4 id="_3-辅种成功率低" tabindex="-1"><a class="header-anchor" href="#_3-辅种成功率低"><span>3. 辅种成功率低</span></a></h4>
<p><strong>症状</strong>：辅种操作大量失败</p>
<p><strong>优化方法</strong>：</p>
<ol>
<li>
<p><strong>检查种子质量</strong>：</p>
<ul>
<li>确保种子文件完整</li>
<li>检查种子是否还在做种</li>
<li>验证文件路径正确</li>
</ul>
</li>
<li>
<p><strong>优化网络环境</strong>：</p>
<ul>
<li>使用稳定的网络连接</li>
<li>配置合适的代理服务器</li>
<li>避开网络高峰期</li>
</ul>
</li>
<li>
<p><strong>调整配置参数</strong>：</p>
<ul>
<li>增加重试间隔</li>
<li>减少并发数量</li>
<li>优化过滤规则</li>
</ul>
</li>
</ol>
<h4 id="_4-下载器连接异常" tabindex="-1"><a class="header-anchor" href="#_4-下载器连接异常"><span>4. 下载器连接异常</span></a></h4>
<p><strong>症状</strong>：无法连接到下载器</p>
<p><strong>解决方法</strong>：</p>
<ol>
<li>
<p><strong>验证下载器状态</strong>：</p>
<ul>
<li>确认下载器运行正常</li>
<li>检查API接口可用性</li>
<li>验证认证信息</li>
</ul>
</li>
<li>
<p><strong>检查网络配置</strong>：</p>
<ul>
<li>确认IP地址和端口正确</li>
<li>检查防火墙设置</li>
<li>测试网络连通性</li>
</ul>
</li>
</ol>
<h3 id="🛡️-最佳实践" tabindex="-1"><a class="header-anchor" href="#🛡️-最佳实践"><span>🛡️ 最佳实践</span></a></h3>
<h4 id="_1-安全使用" tabindex="-1"><a class="header-anchor" href="#_1-安全使用"><span>1. 安全使用</span></a></h4>
<ul>
<li><strong>保护Token安全</strong>：不要泄露API Token</li>
<li><strong>定期更新Token</strong>：建议定期更换Token</li>
<li><strong>合理设置权限</strong>：只授予必要的权限</li>
</ul>
<h4 id="_2-性能优化" tabindex="-1"><a class="header-anchor" href="#_2-性能优化"><span>2. 性能优化</span></a></h4>
<ul>
<li><strong>合理安排时间</strong>：避开网络高峰期执行</li>
<li><strong>控制并发数量</strong>：避免对站点造成压力</li>
<li><strong>定期清理缓存</strong>：保持良好的运行状态</li>
</ul>
<h4 id="_3-监控管理" tabindex="-1"><a class="header-anchor" href="#_3-监控管理"><span>3. 监控管理</span></a></h4>
<ul>
<li><strong>关注执行结果</strong>：定期检查辅种效果</li>
<li><strong>处理异常情况</strong>：及时解决失败问题</li>
<li><strong>优化配置参数</strong>：根据实际情况调整设置</li>
</ul>
<h2 id="💡-使用技巧" tabindex="-1"><a class="header-anchor" href="#💡-使用技巧"><span>💡 使用技巧</span></a></h2>
<h3 id="🎯-提高成功率" tabindex="-1"><a class="header-anchor" href="#🎯-提高成功率"><span>🎯 提高成功率</span></a></h3>
<ol>
<li>
<p><strong>优化站点选择</strong>：</p>
<ul>
<li>选择活跃度高的站点</li>
<li>关注站点政策变化</li>
<li>保持良好的站点关系</li>
</ul>
</li>
<li>
<p><strong>合理配置过滤</strong>：</p>
<ul>
<li>排除已完成的种子</li>
<li>避免重复辅种</li>
<li>优先处理高质量种子</li>
</ul>
</li>
<li>
<p><strong>定期维护</strong>：</p>
<ul>
<li>清理无效种子</li>
<li>更新站点绑定信息</li>
<li>监控账号状态</li>
</ul>
</li>
</ol>
<h3 id="⚙️-自动化策略" tabindex="-1"><a class="header-anchor" href="#⚙️-自动化策略"><span>⚙️ 自动化策略</span></a></h3>
<ol>
<li>
<p><strong>分时段执行</strong>：</p>
<ul>
<li>避开站点维护时间</li>
<li>选择网络较好的时段</li>
<li>错开其他任务执行时间</li>
</ul>
</li>
<li>
<p><strong>故障自动恢复</strong>：</p>
<ul>
<li>设置合理的重试机制</li>
<li>配置异常通知</li>
<li>建立监控告警</li>
</ul>
</li>
</ol>
<h2 id="📊-使用效果" tabindex="-1"><a class="header-anchor" href="#📊-使用效果"><span>📊 使用效果</span></a></h2>
<h3 id="🎯-辅种效果" tabindex="-1"><a class="header-anchor" href="#🎯-辅种效果"><span>🎯 辅种效果</span></a></h3>
<ul>
<li><strong>提升做种数量</strong>：显著增加PT站点做种数量</li>
<li><strong>提高站点积分</strong>：通过辅种获得更多上传量</li>
<li><strong>改善分享率</strong>：优化上传下载比例</li>
<li><strong>扩大影响力</strong>：在PT社区建立良好声誉</li>
</ul>
<h3 id="🛠️-管理价值" tabindex="-1"><a class="header-anchor" href="#🛠️-管理价值"><span>🛠️ 管理价值</span></a></h3>
<ul>
<li><strong>自动化管理</strong>：减少手动操作工作量</li>
<li><strong>效率提升</strong>：大幅提高种子管理效率</li>
<li><strong>资源优化</strong>：充分利用已有种子资源</li>
<li><strong>时间节省</strong>：解放大量重复性工作</li>
</ul>
<h2 id="⚠️-注意事项" tabindex="-1"><a class="header-anchor" href="#⚠️-注意事项"><span>⚠️ 注意事项</span></a></h2>
<h3 id="重要提醒" tabindex="-1"><a class="header-anchor" href="#重要提醒"><span>重要提醒</span></a></h3>
<ol>
<li>
<p><strong>Token安全</strong>：</p>
<ul>
<li>IYUU Token是重要的身份凭证</li>
<li>不要在公开场合分享Token</li>
<li>定期检查Token使用情况</li>
</ul>
</li>
<li>
<p><strong>站点政策</strong>：</p>
<ul>
<li>遵守各PT站点的使用规则</li>
<li>注意辅种频率限制</li>
<li>避免对站点造成过大压力</li>
</ul>
</li>
<li>
<p><strong>资源管理</strong>：</p>
<ul>
<li>确保有足够的存储空间</li>
<li>注意带宽使用情况</li>
<li>合理控制同时下载数量</li>
</ul>
</li>
<li>
<p><strong>首次使用建议</strong>：</p>
<ul>
<li>先小范围测试功能</li>
<li>观察辅种效果</li>
<li>逐步扩大使用范围</li>
</ul>
</li>
</ol>
<h2 id="🔗-相关链接" tabindex="-1"><a class="header-anchor" href="#🔗-相关链接"><span>🔗 相关链接</span></a></h2>
<ul>
<li><RouteLink to="/docs/cultivation_secrets/main/">修仙秘籍主页</RouteLink></li>
<li><RouteLink to="/docs/download/download_downloader/">下载器配置文档</RouteLink></li>
<li><RouteLink to="/docs/site/site_manage/">站点管理文档</RouteLink></li>
<li><RouteLink to="/docs/other/cron_rule/">Cron表达式说明</RouteLink></li>
</ul>
<hr>
<p>🎯 <strong>提示</strong>：IYUU自动辅种是提升PT站点表现的重要工具，建议在充分了解PT站点规则的基础上使用，合理配置参数以获得最佳效果。</p>
</div></template>


