<template><div><h1 id="🖥️-系统进程" tabindex="-1"><a class="header-anchor" href="#🖥️-系统进程"><span>🖥️ 系统进程</span></a></h1>
<p><strong>系统进程</strong> 是一个强大的系统监控工具，提供实时的进程状态监控功能，帮助用户全面了解系统资源使用情况，监控关键进程的运行状态，是系统管理和性能优化的重要工具。</p>
<h2 id="⚙️-功能特点" tabindex="-1"><a class="header-anchor" href="#⚙️-功能特点"><span>⚙️ 功能特点</span></a></h2>
<h3 id="📊-核心监控功能" tabindex="-1"><a class="header-anchor" href="#📊-核心监控功能"><span>📊 核心监控功能</span></a></h3>
<ul>
<li><strong>实时进程列表</strong>：显示当前运行的所有系统进程</li>
<li><strong>资源使用监控</strong>：实时显示CPU和内存使用情况</li>
<li><strong>运行时间统计</strong>：显示每个进程的持续运行时长</li>
<li><strong>详细进程信息</strong>：包含PID、进程名称等关键信息</li>
<li><strong>智能数据格式化</strong>：自动格式化内存大小和时间显示</li>
</ul>
<h3 id="🛠️-高级特性" tabindex="-1"><a class="header-anchor" href="#🛠️-高级特性"><span>🛠️ 高级特性</span></a></h3>
<ul>
<li><strong>即时刷新机制</strong>：支持实时更新进程状态数据</li>
<li><strong>表格化展示</strong>：清晰的表格界面便于查看和分析</li>
<li><strong>性能指标计算</strong>：精确计算CPU使用率和内存占用</li>
<li><strong>时间格式优化</strong>：人性化的运行时间显示格式</li>
<li><strong>资源排序功能</strong>：支持按各项指标排序分析</li>
</ul>
<h2 id="📖-界面说明" tabindex="-1"><a class="header-anchor" href="#📖-界面说明"><span>📖 界面说明</span></a></h2>
<h3 id="📋-表格列信息" tabindex="-1"><a class="header-anchor" href="#📋-表格列信息"><span>📋 表格列信息</span></a></h3>
<h4 id="核心数据列" tabindex="-1"><a class="header-anchor" href="#核心数据列"><span>核心数据列</span></a></h4>
<ol>
<li>
<p><strong>PID (Process ID)</strong>：</p>
<ul>
<li>显示：进程标识符</li>
<li>类型：数字</li>
<li>用途：系统唯一标识每个进程的数字ID</li>
<li>重要性：用于进程管理和故障诊断</li>
</ul>
</li>
<li>
<p><strong>进程名称 (Name)</strong>：</p>
<ul>
<li>显示：可执行文件名称</li>
<li>类型：字符串</li>
<li>用途：识别进程的功能和用途</li>
<li>示例：<code v-pre>media-saber</code>、<code v-pre>nginx</code>、<code v-pre>qbittorrent</code></li>
</ul>
</li>
<li>
<p><strong>运行时间 (Uptime)</strong>：</p>
<ul>
<li>显示：进程持续运行时长</li>
<li>格式：智能时间格式（天、小时、分钟、秒）</li>
<li>计算：从进程启动到当前时刻的累计时间</li>
<li>用途：判断进程稳定性和重启频率</li>
</ul>
</li>
<li>
<p><strong>CPU使用率 (CPU Percent)</strong>：</p>
<ul>
<li>显示：当前CPU占用百分比</li>
<li>格式：保留两位小数的百分比</li>
<li>范围：0.00% - 100.00%</li>
<li>实时性：反映进程当前的处理器使用情况</li>
</ul>
</li>
<li>
<p><strong>内存使用量 (Memory Info)</strong>：</p>
<ul>
<li>显示：进程占用的物理内存大小</li>
<li>格式：自动单位转换（KB、MB、GB）</li>
<li>类型：实际内存占用量</li>
<li>用途：识别内存使用情况和潜在泄漏</li>
</ul>
</li>
</ol>
<h3 id="🎯-数据格式化" tabindex="-1"><a class="header-anchor" href="#🎯-数据格式化"><span>🎯 数据格式化</span></a></h3>
<h4 id="内存大小显示" tabindex="-1"><a class="header-anchor" href="#内存大小显示"><span>内存大小显示</span></a></h4>
<ul>
<li><strong>小于1KB</strong>：显示为字节 (B)</li>
<li><strong>1KB-1MB</strong>：显示为千字节 (KB)</li>
<li><strong>1MB-1GB</strong>：显示为兆字节 (MB)</li>
<li><strong>大于1GB</strong>：显示为吉字节 (GB)</li>
</ul>
<h4 id="运行时间显示" tabindex="-1"><a class="header-anchor" href="#运行时间显示"><span>运行时间显示</span></a></h4>
<ul>
<li><strong>小于1分钟</strong>：显示为秒</li>
<li><strong>小于1小时</strong>：显示为分:秒</li>
<li><strong>小于1天</strong>：显示为时:分:秒</li>
<li><strong>大于1天</strong>：显示为天数+时:分:秒</li>
</ul>
<h4 id="cpu使用率显示" tabindex="-1"><a class="header-anchor" href="#cpu使用率显示"><span>CPU使用率显示</span></a></h4>
<ul>
<li><strong>格式</strong>：xx.xx%（保留两位小数）</li>
<li><strong>颜色标识</strong>：可能采用不同颜色表示负载级别</li>
<li><strong>实时更新</strong>：反映进程当前瞬时CPU使用情况</li>
</ul>
<h2 id="🚀-使用说明" tabindex="-1"><a class="header-anchor" href="#🚀-使用说明"><span>🚀 使用说明</span></a></h2>
<h3 id="📋-基本操作" tabindex="-1"><a class="header-anchor" href="#📋-基本操作"><span>📋 基本操作</span></a></h3>
<h4 id="打开系统进程监控" tabindex="-1"><a class="header-anchor" href="#打开系统进程监控"><span>打开系统进程监控</span></a></h4>
<ol>
<li>
<p><strong>访问插件</strong>：</p>
<ul>
<li>在Media Saber管理界面进入&quot;修仙秘籍&quot;</li>
<li>找到&quot;系统进程&quot;插件并点击打开</li>
</ul>
</li>
<li>
<p><strong>界面加载</strong>：</p>
<ul>
<li>系统自动获取当前运行的所有进程</li>
<li>以表格形式展示进程信息</li>
</ul>
</li>
</ol>
<h4 id="查看进程信息" tabindex="-1"><a class="header-anchor" href="#查看进程信息"><span>查看进程信息</span></a></h4>
<ol>
<li>
<p><strong>浏览进程列表</strong>：</p>
<ul>
<li>表格显示所有当前运行的进程</li>
<li>可以滚动查看完整的进程列表</li>
</ul>
</li>
<li>
<p><strong>选择特定进程</strong>：</p>
<ul>
<li>点击表格行可以选中特定进程</li>
<li>选中的进程行会有视觉高亮提示</li>
</ul>
</li>
<li>
<p><strong>分析进程数据</strong>：</p>
<ul>
<li>查看各项性能指标</li>
<li>对比不同进程的资源使用情况</li>
</ul>
</li>
</ol>
<h4 id="刷新和更新" tabindex="-1"><a class="header-anchor" href="#刷新和更新"><span>刷新和更新</span></a></h4>
<ol>
<li>
<p><strong>手动刷新</strong>：</p>
<ul>
<li>使用刷新功能获取最新进程状态</li>
<li>更新所有进程的实时数据</li>
</ul>
</li>
<li>
<p><strong>数据实时性</strong>：</p>
<ul>
<li>进程信息为当前时刻的快照</li>
<li>可能需要定期刷新以获取最新状态</li>
</ul>
</li>
</ol>
<h3 id="📊-数据解读指南" tabindex="-1"><a class="header-anchor" href="#📊-数据解读指南"><span>📊 数据解读指南</span></a></h3>
<h4 id="cpu使用率分析" tabindex="-1"><a class="header-anchor" href="#cpu使用率分析"><span>CPU使用率分析</span></a></h4>
<p><strong>负载级别判断</strong>：</p>
<ol>
<li>
<p><strong>低负载 (0-30%)</strong>：</p>
<ul>
<li>状态：正常运行范围</li>
<li>说明：进程轻度使用CPU资源</li>
<li>影响：对系统性能影响minimal</li>
</ul>
</li>
<li>
<p><strong>中等负载 (30-70%)</strong>：</p>
<ul>
<li>状态：需要关注的使用水平</li>
<li>说明：进程较活跃，处理较多任务</li>
<li>建议：监控是否持续高位运行</li>
</ul>
</li>
<li>
<p><strong>高负载 (70-100%)</strong>：</p>
<ul>
<li>状态：高强度使用CPU</li>
<li>影响：可能影响系统整体性能</li>
<li>处理：检查是否为正常的计算密集型任务</li>
</ul>
</li>
</ol>
<p><strong>CPU使用模式</strong>：</p>
<ul>
<li><strong>突发型</strong>：短时间高使用率后回落</li>
<li><strong>持续型</strong>：长期保持较高使用率</li>
<li><strong>间歇型</strong>：周期性的高低使用率变化</li>
</ul>
<h4 id="内存使用量分析" tabindex="-1"><a class="header-anchor" href="#内存使用量分析"><span>内存使用量分析</span></a></h4>
<p><strong>内存占用评估</strong>：</p>
<ol>
<li>
<p><strong>轻量级进程 (&lt;100MB)</strong>：</p>
<ul>
<li>类型：系统服务、小工具</li>
<li>状态：正常内存使用</li>
<li>示例：系统守护进程、小型服务</li>
</ul>
</li>
<li>
<p><strong>中等内存进程 (100MB-1GB)</strong>：</p>
<ul>
<li>类型：应用程序、Web服务</li>
<li>状态：合理的内存使用</li>
<li>示例：Web浏览器、媒体播放器</li>
</ul>
</li>
<li>
<p><strong>大内存进程 (&gt;1GB)</strong>：</p>
<ul>
<li>类型：大型应用、数据库、虚拟化</li>
<li>状态：需要重点关注</li>
<li>示例：数据库服务器、虚拟机</li>
</ul>
</li>
</ol>
<p><strong>内存泄漏识别</strong>：</p>
<ul>
<li><strong>逐渐增长</strong>：内存使用量持续缓慢增加</li>
<li><strong>异常增长</strong>：短时间内内存使用量急剧增加</li>
<li><strong>不释放</strong>：任务完成后内存不回收</li>
</ul>
<h4 id="运行时间分析" tabindex="-1"><a class="header-anchor" href="#运行时间分析"><span>运行时间分析</span></a></h4>
<p><strong>进程稳定性指标</strong>：</p>
<ol>
<li>
<p><strong>长期运行进程</strong>：</p>
<ul>
<li>时间：数天到数月</li>
<li>类型：系统服务、守护进程</li>
<li>状态：通常表示良好的稳定性</li>
</ul>
</li>
<li>
<p><strong>中期运行进程</strong>：</p>
<ul>
<li>时间：数小时到数天</li>
<li>类型：应用程序、用户服务</li>
<li>状态：正常的服务运行周期</li>
</ul>
</li>
<li>
<p><strong>短期运行进程</strong>：</p>
<ul>
<li>时间：分钟到小时级别</li>
<li>类型：临时任务、脚本执行</li>
<li>状态：可能是正常的任务执行</li>
</ul>
</li>
</ol>
<p><strong>异常模式识别</strong>：</p>
<ul>
<li><strong>频繁重启</strong>：运行时间很短且多次出现</li>
<li><strong>异常终止</strong>：预期长期运行但时间很短</li>
<li><strong>僵尸进程</strong>：长时间运行但无资源使用</li>
</ul>
<h2 id="🔧-系统诊断" tabindex="-1"><a class="header-anchor" href="#🔧-系统诊断"><span>🔧 系统诊断</span></a></h2>
<h3 id="📊-性能诊断流程" tabindex="-1"><a class="header-anchor" href="#📊-性能诊断流程"><span>📊 性能诊断流程</span></a></h3>
<h4 id="第一步-整体评估" tabindex="-1"><a class="header-anchor" href="#第一步-整体评估"><span>第一步：整体评估</span></a></h4>
<ol>
<li>
<p><strong>CPU总体使用率</strong>：</p>
<ul>
<li>查看所有进程CPU使用率总和</li>
<li>识别是否存在CPU瓶颈</li>
<li>找出CPU使用率最高的进程</li>
</ul>
</li>
<li>
<p><strong>内存总体使用情况</strong>：</p>
<ul>
<li>统计所有进程内存使用总量</li>
<li>计算系统内存使用率</li>
<li>识别内存占用大户</li>
</ul>
</li>
</ol>
<h4 id="第二步-异常进程识别" tabindex="-1"><a class="header-anchor" href="#第二步-异常进程识别"><span>第二步：异常进程识别</span></a></h4>
<ol>
<li>
<p><strong>高CPU使用进程</strong>：</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code class="language-text"><span class="line">识别标准：CPU使用率 > 70%</span>
<span class="line">检查项目：</span>
<span class="line">- 是否为已知的计算密集型任务</span>
<span class="line">- 持续时间是否异常</span>
<span class="line">- 是否影响系统响应速度</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p><strong>高内存使用进程</strong>：</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code class="language-text"><span class="line">识别标准：内存使用量 > 系统总内存的20%</span>
<span class="line">检查项目：</span>
<span class="line">- 内存使用是否在合理范围</span>
<span class="line">- 是否存在内存泄漏迹象</span>
<span class="line">- 功能需求是否匹配内存使用</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p><strong>异常重启进程</strong>：</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code class="language-text"><span class="line">识别标准：运行时间异常短且频繁出现</span>
<span class="line">检查项目：</span>
<span class="line">- 进程是否正常启动</span>
<span class="line">- 配置文件是否正确</span>
<span class="line">- 是否存在依赖问题</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ol>
<h4 id="第三步-关键服务检查" tabindex="-1"><a class="header-anchor" href="#第三步-关键服务检查"><span>第三步：关键服务检查</span></a></h4>
<p><strong>Media Saber相关服务</strong>：</p>
<ol>
<li>
<p><strong>核心服务进程</strong>：</p>
<ul>
<li><code v-pre>media-saber</code>：主程序进程</li>
<li>Web服务进程：前端界面服务</li>
<li>数据库进程：数据存储服务</li>
</ul>
</li>
<li>
<p><strong>媒体服务进程</strong>：</p>
<ul>
<li><code v-pre>emby</code>、<code v-pre>jellyfin</code>、<code v-pre>plex</code>：媒体服务器</li>
<li>转码进程：视频转码服务</li>
<li>扫描进程：媒体库扫描</li>
</ul>
</li>
<li>
<p><strong>下载相关进程</strong>：</p>
<ul>
<li><code v-pre>qbittorrent</code>、<code v-pre>transmission</code>：下载客户端</li>
<li><code v-pre>aria2c</code>：下载工具</li>
<li>RSS相关服务：订阅处理</li>
</ul>
</li>
</ol>
<h3 id="🛠️-故障排查指南" tabindex="-1"><a class="header-anchor" href="#🛠️-故障排查指南"><span>🛠️ 故障排查指南</span></a></h3>
<h4 id="常见问题诊断" tabindex="-1"><a class="header-anchor" href="#常见问题诊断"><span>常见问题诊断</span></a></h4>
<p><strong>问题1：系统响应缓慢</strong></p>
<p>诊断步骤：</p>
<ol>
<li>
<p><strong>查看CPU使用率</strong>：</p>
<ul>
<li>找出CPU使用率最高的进程</li>
<li>检查是否有进程长期占用100% CPU</li>
<li>分析是否为正常的计算任务</li>
</ul>
</li>
<li>
<p><strong>检查内存使用</strong>：</p>
<ul>
<li>查看内存使用量最大的进程</li>
<li>计算总内存使用率</li>
<li>识别可能的内存不足情况</li>
</ul>
</li>
<li>
<p><strong>分析系统负载</strong>：</p>
<ul>
<li>统计活跃进程总数</li>
<li>查看是否有异常多的进程同时运行</li>
</ul>
</li>
</ol>
<p><strong>问题2：服务频繁重启</strong></p>
<p>诊断步骤：</p>
<ol>
<li>
<p><strong>识别重启进程</strong>：</p>
<ul>
<li>查找运行时间异常短的关键服务</li>
<li>记录进程重启频率和模式</li>
</ul>
</li>
<li>
<p><strong>检查资源限制</strong>：</p>
<ul>
<li>验证进程是否因资源不足而终止</li>
<li>检查内存是否触及系统限制</li>
</ul>
</li>
<li>
<p><strong>配置文件验证</strong>：</p>
<ul>
<li>确认服务配置文件正确性</li>
<li>检查依赖服务是否正常运行</li>
</ul>
</li>
</ol>
<p><strong>问题3：内存使用异常</strong></p>
<p>诊断步骤：</p>
<ol>
<li>
<p><strong>内存泄漏检测</strong>：</p>
<ul>
<li>观察内存使用量是否持续增长</li>
<li>记录内存增长速度和模式</li>
</ul>
</li>
<li>
<p><strong>大内存进程分析</strong>：</p>
<ul>
<li>确定大内存使用是否合理</li>
<li>检查是否有不必要的内存占用</li>
</ul>
</li>
</ol>
<h2 id="💡-使用技巧" tabindex="-1"><a class="header-anchor" href="#💡-使用技巧"><span>💡 使用技巧</span></a></h2>
<h3 id="🎯-监控策略" tabindex="-1"><a class="header-anchor" href="#🎯-监控策略"><span>🎯 监控策略</span></a></h3>
<h4 id="_1-定期检查" tabindex="-1"><a class="header-anchor" href="#_1-定期检查"><span>1. 定期检查</span></a></h4>
<p><strong>建议频率</strong>：</p>
<ul>
<li><strong>日常检查</strong>：每天查看一次</li>
<li><strong>问题诊断</strong>：出现性能问题时实时查看</li>
<li><strong>维护检查</strong>：系统维护前后对比查看</li>
</ul>
<p><strong>检查重点</strong>：</p>
<ul>
<li>关键服务进程是否正常运行</li>
<li>资源使用是否在合理范围</li>
<li>是否有异常的新进程</li>
</ul>
<h4 id="_2-性能基线建立" tabindex="-1"><a class="header-anchor" href="#_2-性能基线建立"><span>2. 性能基线建立</span></a></h4>
<p><strong>数据收集</strong>：</p>
<ul>
<li>记录正常运行时的进程状态</li>
<li>建立各服务的资源使用基线</li>
<li>定期更新基线数据</li>
</ul>
<p><strong>对比分析</strong>：</p>
<ul>
<li>对比当前状态与历史基线</li>
<li>识别性能趋势变化</li>
<li>预测潜在问题</li>
</ul>
<h4 id="_3-自动化监控" tabindex="-1"><a class="header-anchor" href="#_3-自动化监控"><span>3. 自动化监控</span></a></h4>
<p><strong>告警设置</strong>：</p>
<ul>
<li>设置CPU使用率告警阈值</li>
<li>配置内存使用异常提醒</li>
<li>监控关键进程状态变化</li>
</ul>
<p><strong>脚本监控</strong>：</p>
<ul>
<li>编写自动化监控脚本</li>
<li>定期导出进程状态数据</li>
<li>建立历史趋势分析</li>
</ul>
<h3 id="⚙️-优化建议" tabindex="-1"><a class="header-anchor" href="#⚙️-优化建议"><span>⚙️ 优化建议</span></a></h3>
<h4 id="_1-资源优化" tabindex="-1"><a class="header-anchor" href="#_1-资源优化"><span>1. 资源优化</span></a></h4>
<p><strong>CPU优化</strong>：</p>
<ul>
<li>识别非必要的高CPU进程</li>
<li>调整进程优先级设置</li>
<li>优化任务调度时间</li>
</ul>
<p><strong>内存优化</strong>：</p>
<ul>
<li>关闭不必要的后台服务</li>
<li>优化应用程序配置</li>
<li>定期重启长期运行的服务</li>
</ul>
<h4 id="_2-服务管理" tabindex="-1"><a class="header-anchor" href="#_2-服务管理"><span>2. 服务管理</span></a></h4>
<p><strong>进程管理</strong>：</p>
<ul>
<li>制定关键服务监控清单</li>
<li>建立服务重启标准操作程序</li>
<li>配置自动重启机制</li>
</ul>
<p><strong>资源分配</strong>：</p>
<ul>
<li>根据实际需求调整资源配置</li>
<li>平衡不同服务的资源使用</li>
<li>预留系统资源缓冲</li>
</ul>
<h2 id="📊-使用效果" tabindex="-1"><a class="header-anchor" href="#📊-使用效果"><span>📊 使用效果</span></a></h2>
<h3 id="🎯-监控价值" tabindex="-1"><a class="header-anchor" href="#🎯-监控价值"><span>🎯 监控价值</span></a></h3>
<ul>
<li><strong>实时掌控</strong>：实时了解系统运行状态</li>
<li><strong>问题预警</strong>：提前发现潜在性能问题</li>
<li><strong>故障诊断</strong>：快速定位系统故障原因</li>
<li><strong>优化指导</strong>：为系统优化提供数据支持</li>
</ul>
<h3 id="🛠️-管理效益" tabindex="-1"><a class="header-anchor" href="#🛠️-管理效益"><span>🛠️ 管理效益</span></a></h3>
<ul>
<li><strong>运维效率</strong>：提高系统运维效率</li>
<li><strong>稳定性提升</strong>：改善系统运行稳定性</li>
<li><strong>资源优化</strong>：优化系统资源配置</li>
<li><strong>决策支持</strong>：为硬件升级提供依据</li>
</ul>
<h2 id="⚠️-注意事项" tabindex="-1"><a class="header-anchor" href="#⚠️-注意事项"><span>⚠️ 注意事项</span></a></h2>
<h3 id="重要提醒" tabindex="-1"><a class="header-anchor" href="#重要提醒"><span>重要提醒</span></a></h3>
<ol>
<li>
<p><strong>数据时效性</strong>：</p>
<ul>
<li>进程信息为实时快照数据</li>
<li>数据可能随时发生变化</li>
<li>建议定期刷新获取最新状态</li>
</ul>
</li>
<li>
<p><strong>正常波动</strong>：</p>
<ul>
<li>资源使用率的短期波动是正常现象</li>
<li>不要因短暂的高使用率而过度担心</li>
<li>关注长期趋势而非瞬时数值</li>
</ul>
</li>
<li>
<p><strong>系统进程</strong>：</p>
<ul>
<li>某些系统进程具有特殊权限和作用</li>
<li>不建议随意终止不熟悉的进程</li>
<li>谨慎对待系统关键进程</li>
</ul>
</li>
<li>
<p><strong>性能影响</strong>：</p>
<ul>
<li>频繁查看进程信息可能对系统产生轻微影响</li>
<li>在系统负载很高时避免过度监控</li>
<li>合理控制监控频率</li>
</ul>
</li>
</ol>
<h2 id="🔗-相关链接" tabindex="-1"><a class="header-anchor" href="#🔗-相关链接"><span>🔗 相关链接</span></a></h2>
<ul>
<li><RouteLink to="/docs/cultivation_secrets/main/">修仙秘籍主页</RouteLink></li>
<li><RouteLink to="/docs/optimization/resource_monitoring/">系统资源监控最佳实践</RouteLink></li>
<li><RouteLink to="/docs/troubleshooting/system_issues/">故障诊断指南</RouteLink></li>
</ul>
<hr>
<p>🎯 <strong>提示</strong>：系统进程监控是重要的运维工具，建议结合其他监控手段一起使用，建立完整的系统健康监控体系。定期查看进程状态有助于及时发现和解决潜在问题。</p>
</div></template>


