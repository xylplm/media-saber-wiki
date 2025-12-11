<template><div><h1 id="🔗-strm生成" tabindex="-1"><a class="header-anchor" href="#🔗-strm生成"><span>🔗 Strm生成</span></a></h1>
<p>Strm生成页面用于配置和管理STRM文件的自动生成任务。STRM文件是一种流媒体播放列表文件，它不包含实际的媒体内容，而是包含指向网络上媒体文件的链接。</p>
<h2 id="📋-页面功能" tabindex="-1"><a class="header-anchor" href="#📋-页面功能"><span>📋 页面功能</span></a></h2>
<p><strong>顶部操作按钮</strong></p>
<ul>
<li>🔄 <strong>刷新</strong>：重新加载STRM生成任务列表</li>
<li>➕ <strong>添加</strong>：创建新的STRM生成配置</li>
<li>🎨 <strong>Strm修复</strong>：修复已存在的STRM文件</li>
</ul>
<h2 id="📊-strm生成任务字段详解" tabindex="-1"><a class="header-anchor" href="#📊-strm生成任务字段详解"><span>📊 Strm生成任务字段详解</span></a></h2>
<p>每条STRM生成任务配置包含以下信息：</p>
<h3 id="📁-路径配置字段" tabindex="-1"><a class="header-anchor" href="#📁-路径配置字段"><span>📁 路径配置字段</span></a></h3>
<ul>
<li><strong>来源目录</strong>：需要生成STRM文件的云存储目录路径</li>
<li><strong>目标目录路径</strong>：STRM文件存放的本地目录路径（可选）</li>
<li><strong>目标目录标签</strong>：关联的目录标签，用于自动匹配目标目录</li>
</ul>
<h3 id="⚙️-生成选项字段" tabindex="-1"><a class="header-anchor" href="#⚙️-生成选项字段"><span>⚙️ 生成选项字段</span></a></h3>
<ul>
<li><strong>识别重命名</strong>：是否对文件进行媒体识别并按规则重命名</li>
<li><strong>刮削</strong>：是否获取媒体详细信息并生成NFO等刮削文件</li>
<li><strong>刷新媒体库</strong>：生成完成后是否通知媒体服务器刷新库</li>
<li><strong>仅媒体文件</strong>：是否只处理媒体文件（视频、音频），忽略其他文件</li>
<li><strong>媒体库缺失</strong>：是否只处理媒体库中缺失的文件</li>
<li><strong>转移字幕</strong>：是否同时生成同名字幕文件的STRM链接</li>
<li><strong>开启目录树</strong>：是否保持原目录结构</li>
</ul>
<h3 id="🔘-状态管理字段" tabindex="-1"><a class="header-anchor" href="#🔘-状态管理字段"><span>🔘 状态管理字段</span></a></h3>
<ul>
<li><strong>启用</strong>：是否启用该STRM生成任务配置</li>
</ul>
<h3 id="🔄-操作选项" tabindex="-1"><a class="header-anchor" href="#🔄-操作选项"><span>🔄 操作选项</span></a></h3>
<p>通过点击每条记录末尾的操作按钮，可以执行以下操作：</p>
<ul>
<li>✏️ <strong>编辑</strong>：修改STRM生成任务配置参数</li>
<li>▶️ <strong>运行</strong>：立即执行该STRM生成任务</li>
<li>🗑️ <strong>删除</strong>：删除该STRM生成任务配置</li>
</ul>
<h2 id="🛠-添加-编辑strm生成任务" tabindex="-1"><a class="header-anchor" href="#🛠-添加-编辑strm生成任务"><span>🛠 添加/编辑Strm生成任务</span></a></h2>
<p>添加或编辑STRM生成任务时需要配置以下参数：</p>
<h3 id="路径配置" tabindex="-1"><a class="header-anchor" href="#路径配置"><span>路径配置</span></a></h3>
<ul>
<li><strong>来源目录</strong>：必填项，指定需要生成STRM文件的云存储目录</li>
<li><strong>目标目录路径</strong>：可选项，指定STRM文件存放的本地目录</li>
<li><strong>目标目录标签</strong>：可选项，通过标签自动匹配目标目录</li>
</ul>
<h3 id="生成选项" tabindex="-1"><a class="header-anchor" href="#生成选项"><span>生成选项</span></a></h3>
<ul>
<li><strong>识别重命名</strong>：默认开启，建议保持开启状态以确保文件命名规范</li>
<li><strong>刮削</strong>：默认开启，建议保持开启状态以生成媒体信息文件</li>
<li><strong>刷新媒体库</strong>：默认开启，生成完成后自动刷新媒体服务器</li>
<li><strong>仅媒体文件</strong>：默认开启，只处理媒体文件，忽略无关文件</li>
<li><strong>媒体库缺失</strong>：默认关闭，开启后只处理媒体库中缺失的文件</li>
<li><strong>转移字幕</strong>：默认开启，同时生成同名字幕文件的STRM链接</li>
<li><strong>开启目录树</strong>：默认关闭，开启后保持原目录结构</li>
</ul>
<h2 id="🚀-运行strm生成任务" tabindex="-1"><a class="header-anchor" href="#🚀-运行strm生成任务"><span>🚀 运行Strm生成任务</span></a></h2>
<p>有两种方式运行STRM生成任务：</p>
<ol>
<li><strong>手动运行</strong>：在任务列表中点击&quot;运行&quot;按钮立即执行</li>
<li><strong>自动运行</strong>：启用任务后，系统会按计划自动执行STRM生成任务</li>
</ol>
<h2 id="💡-strm文件说明" tabindex="-1"><a class="header-anchor" href="#💡-strm文件说明"><span>💡 STRM文件说明</span></a></h2>
<p>STRM（Stream）文件是一种简单的文本文件，包含媒体文件的网络访问链接。它具有以下特点：</p>
<ul>
<li>文件非常小，通常只有几十字节</li>
<li>内容为指向实际媒体文件的URL链接</li>
<li>可以在支持STRM格式的媒体播放器中直接播放</li>
<li>节省本地存储空间，适合大媒体库管理</li>
</ul>
<h2 id="💡-使用建议" tabindex="-1"><a class="header-anchor" href="#💡-使用建议"><span>💡 使用建议</span></a></h2>
<ol>
<li>
<p><strong>合理配置路径</strong>：</p>
<ul>
<li>来源目录应指向云存储中存放媒体文件的目录</li>
<li>目标目录或目录标签应指向本地STRM文件存储位置</li>
</ul>
</li>
<li>
<p><strong>根据播放需求调整选项</strong>：</p>
<ul>
<li>确保媒体服务器能够访问云存储中的文件</li>
<li>合理设置刮削选项以提供完整的媒体信息</li>
</ul>
</li>
<li>
<p><strong>定期生成STRM文件</strong>：</p>
<ul>
<li>定期运行STRM生成任务，确保云存储中的新文件能及时在媒体库中显示</li>
</ul>
</li>
<li>
<p><strong>网络环境考虑</strong>：</p>
<ul>
<li>确保播放设备能够稳定访问云存储中的文件</li>
<li>对于网络不稳定的环境，建议使用下载模式而非STRM模式</li>
</ul>
</li>
<li>
<p><strong>监控执行结果</strong>：</p>
<ul>
<li>通过任务执行日志监控生成过程，及时发现和解决问题</li>
</ul>
</li>
</ol>
</div></template>


