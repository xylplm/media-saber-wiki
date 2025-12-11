<template><div><h1 id="media-saber-tools-浏览器扩展" tabindex="-1"><a class="header-anchor" href="#media-saber-tools-浏览器扩展"><span>Media Saber Tools 浏览器扩展</span></a></h1>
<blockquote>
<p>Media-Saber-Tools 是一个功能强大的浏览器扩展，为 Media Saber 用户提供全方位的管理工具和便捷操作。</p>
</blockquote>
<hr>
<h2 id="🚀-快速开始" tabindex="-1"><a class="header-anchor" href="#🚀-快速开始"><span>🚀 快速开始</span></a></h2>
<h3 id="📦-安装扩展" tabindex="-1"><a class="header-anchor" href="#📦-安装扩展"><span>📦 安装扩展</span></a></h3>
<h4 id="方式一-应用商店安装-推荐" tabindex="-1"><a class="header-anchor" href="#方式一-应用商店安装-推荐"><span>方式一：应用商店安装（推荐）</span></a></h4>
<div style="display: flex; gap: 20px; margin: 20px 0;">
  <div style="flex: 1; text-align: center; padding: 20px; border: 2px solid #e1e5e9; border-radius: 12px;">
    <h4>🔵 Microsoft Edge</h4>
    <p>访问 <a href="https://microsoftedge.microsoft.com/addons/detail/hlpcdobmkgdflggmhpmgoejbfjndpadb" target="_blank">Edge 扩展商店</a></p>
    <p>点击"获取"按钮安装</p>
  </div>
  <div style="flex: 1; text-align: center; padding: 20px; border: 2px solid #e1e5e9; border-radius: 12px;">
    <h4>🟢 Google Chrome</h4>
    <p>访问 <a href="https://chromewebstore.google.com/detail/media-saber-tools/ibflljhbofedginadhkfehbpbefijfid" target="_blank">Chrome 网上应用店</a></p>
    <p>点击"添加至 Chrome"安装</p>
  </div>
</div>
<h4 id="方式二-手动安装" tabindex="-1"><a class="header-anchor" href="#方式二-手动安装"><span>方式二：手动安装</span></a></h4>
<p>如果无法访问应用商店：</p>
<ol>
<li><strong>获取安装包</strong> - 从群消息，开发组不定期发布 获取最新版本的 <code v-pre>.zip</code> 文件</li>
<li><strong>解压文件</strong> - 将 <code v-pre>.zip</code> 文件解压到任意文件夹</li>
<li><strong>加载扩展</strong>：
<ul>
<li>打开浏览器，输入 <code v-pre>chrome://extensions/</code> 或 <code v-pre>edge://extensions/</code></li>
<li>开启&quot;开发者模式&quot;</li>
<li>点击&quot;加载已解压的扩展程序&quot;</li>
<li>选择解压后的文件夹</li>
</ul>
</li>
</ol>
<h3 id="�-首次配置" tabindex="-1"><a class="header-anchor" href="#�-首次配置"><span>� 首次配置</span></a></h3>
<p>安装完成后，点击浏览器工具栏中的扩展图标：</p>
<ol>
<li><strong>输入服务器地址</strong> - 填入您的 Media Saber 服务地址（如：<code v-pre>http://192.168.1.100:3001</code>）</li>
<li><strong>输入登录信息</strong> - 填入管理员用户名和密码</li>
<li><strong>测试连接</strong> - 点击登录按钮验证配置</li>
</ol>
<hr>
<h2 id="✨-主要功能" tabindex="-1"><a class="header-anchor" href="#✨-主要功能"><span>✨ 主要功能</span></a></h2>
<h3 id="🌐-站点管理" tabindex="-1"><a class="header-anchor" href="#🌐-站点管理"><span>🌐 站点管理</span></a></h3>
<div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 15px 0;">
<p><strong>核心功能</strong></p>
<ul>
<li>自动获取浏览器中已登录的 PT 站点 Cookie 和 User-Agent</li>
<li>一键同步站点信息到 Media Saber 服务器</li>
<li>批量更新多个站点的登录信息</li>
<li>实时显示站点状态和配置差异</li>
</ul>
<p><strong>使用方法</strong></p>
<ol>
<li>在浏览器中正常登录 PT 站点</li>
<li>打开扩展，进入&quot;站点信息&quot;页面</li>
<li>查看站点状态（绿色=正常，黄色=需更新，红色=异常）</li>
<li>选择需要同步的站点，点击&quot;更新&quot;按钮</li>
</ol>
<p><strong>筛选功能</strong></p>
<ul>
<li><strong>浏览器</strong> - 显示浏览器中已登录的站点</li>
<li><strong>服务器</strong> - 显示 Media Saber 中已配置的站点</li>
<li><strong>Cookie 差异</strong> - 显示需要更新 Cookie 的站点</li>
<li><strong>UA 差异</strong> - 显示需要更新 User-Agent 的站点</li>
<li><strong>未添加</strong> - 显示浏览器已登录但服务器未配置的站点</li>
</ul>
</div>
<h3 id="📊-站点数据" tabindex="-1"><a class="header-anchor" href="#📊-站点数据"><span>📊 站点数据</span></a></h3>
<div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 15px 0;">
<p><strong>数据展示</strong></p>
<ul>
<li>各 PT 站点的上传/下载数据统计</li>
<li>做种数量和活跃度信息</li>
<li>站点等级和积分详情</li>
<li>数据趋势图表展示</li>
</ul>
<p><strong>实用功能</strong></p>
<ul>
<li>支持数据导出为图片</li>
<li>隐私模式保护敏感信息</li>
<li>实时数据刷新</li>
</ul>
</div>
<h3 id="☁️-云存储管理" tabindex="-1"><a class="header-anchor" href="#☁️-云存储管理"><span>☁️ 云存储管理</span></a></h3>
<div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 15px 0;">
<p><strong>文件管理</strong></p>
<ul>
<li>类似本地文件管理器的操作体验</li>
<li>支持文件夹导航和面包屑路径</li>
<li>文件搜索和批量操作</li>
<li>新建文件夹、重命名、删除等操作</li>
</ul>
<p><strong>上传功能</strong></p>
<ul>
<li><strong>本地文件上传</strong> - 支持拖拽上传和选择上传</li>
<li><strong>链接转存</strong> - 将网络资源转存到云存储（可通过右键菜单快速打开此对话框）</li>
<li><strong>离线下载</strong> - 支持磁力链接、HTTP、FTP、电驴链接的离线下载（可通过网页图标或右键菜单快速打开此对话框）</li>
</ul>
<p><strong>批量操作</strong></p>
<ul>
<li>批量选择文件和文件夹</li>
<li>批量移动、复制、删除</li>
<li>清理空文件夹功能</li>
</ul>
</div>
<h3 id="📥-下载管理" tabindex="-1"><a class="header-anchor" href="#📥-下载管理"><span>📥 下载管理</span></a></h3>
<div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 15px 0;">
<p><strong>任务监控</strong></p>
<ul>
<li>实时显示下载进度和速度</li>
<li>任务状态跟踪（等待、下载中、已完成、失败）</li>
<li>文件大小和预计剩余时间</li>
</ul>
<p><strong>添加下载</strong></p>
<ul>
<li><strong>种子链接下载</strong> - 支持种子链接解析</li>
<li><strong>磁力链接下载</strong> - 支持磁力链接下载（可通过网页图标快速打开此对话框）</li>
<li><strong>种子文件上传</strong> - 支持本地种子文件上传</li>
<li><strong>PT 站种子下载</strong> - 支持 PT 站点种子下载（可通过 PT 站点按钮快速打开此对话框）</li>
</ul>
<p><strong>任务管理</strong></p>
<ul>
<li>暂停/恢复下载任务</li>
<li>删除不需要的任务</li>
<li>重试失败的下载</li>
<li>调整下载优先级</li>
</ul>
</div>
<h3 id="🔄-网页增强功能" tabindex="-1"><a class="header-anchor" href="#🔄-网页增强功能"><span>🔄 网页增强功能</span></a></h3>
<div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 15px 0;">
<p><strong>智能链接识别</strong></p>
<ul>
<li>自动识别网页中的磁力链接（<code v-pre>magnet:</code>）和电驴链接（<code v-pre>ed2k:</code>）</li>
<li>在链接旁自动添加两个下载图标：
<ul>
<li>🟢 <strong>绿色图标</strong> - 磁力下载（打开下载管理页面的磁力下载对话框）</li>
<li>🔵 <strong>蓝色图标</strong> - 云端离线（打开云存储页面的离线下载对话框）</li>
</ul>
</li>
</ul>
<p><strong>PT 站点集成</strong></p>
<ul>
<li>支持 NexusPHP 框架的 PT 站点</li>
<li>在种子详情页自动添加&quot;MS 下载&quot;按钮</li>
<li>点击后打开下载管理页面的 PT 种子下载对话框</li>
</ul>
<p><strong>右键菜单功能</strong></p>
<ul>
<li><strong>选中文本右键</strong>：提供离线下载、云盘转存、磁力下载选项</li>
<li><strong>页面右键</strong>：快速访问插件各个功能页面</li>
<li>所有操作都会打开插件主界面并跳转到对应页面的模态框</li>
</ul>
</div>
<hr>
<h2 id="📱-界面预览" tabindex="-1"><a class="header-anchor" href="#📱-界面预览"><span>📱 界面预览</span></a></h2>
<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 20px; margin: 20px 0;">
  <div style="text-align: center;">
    <img src="@source/03.客户端/04.浏览器插件/images/0501.png" alt="站点管理界面" style="width: 100%; max-width: 300px; border: 2px solid #e1e5e9; border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.1);"/>
    <p style="margin-top: 10px; font-weight: 500; color: #666;">🌐 站点管理界面</p>
  </div>
  <div style="text-align: center;">
    <img src="@source/03.客户端/04.浏览器插件/images/0502.png" alt="云存储管理界面" style="width: 100%; max-width: 300px; border: 2px solid #e1e5e9; border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.1);"/>
    <p style="margin-top: 10px; font-weight: 500; color: #666;">☁️ 云存储管理界面</p>
  </div>
  <div style="text-align: center;">
    <img src="@source/03.客户端/04.浏览器插件/images/0503.png" alt="下载管理界面" style="width: 100%; max-width: 300px; border: 2px solid #e1e5e9; border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.1);"/>
    <p style="margin-top: 10px; font-weight: 500; color: #666;">📥 下载管理界面</p>
  </div>
  <div style="text-align: center;">
    <img src="@source/03.客户端/04.浏览器插件/images/0504.png" alt="数据统计界面" style="width: 100%; max-width: 300px; border: 2px solid #e1e5e9; border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.1);"/>
    <p style="margin-top: 10px; font-weight: 500; color: #666;">📊 数据统计界面</p>
  </div>
</div>
<hr>
<h2 id="🎯-使用场景" tabindex="-1"><a class="header-anchor" href="#🎯-使用场景"><span>🎯 使用场景</span></a></h2>
<h3 id="场景一-网页磁力链接下载" tabindex="-1"><a class="header-anchor" href="#场景一-网页磁力链接下载"><span>场景一：网页磁力链接下载</span></a></h3>
<p>当您在网页上看到磁力链接时：</p>
<p><img src="@source/03.客户端/04.浏览器插件/images/0505.png" alt="磁力链接下载"></p>
<p><strong>交互流程</strong>：</p>
<ol>
<li>扩展会自动在磁力链接旁添加两个下载图标</li>
<li>点击 <strong>绿色图标</strong>（磁力下载）：
<ul>
<li>自动打开插件主界面</li>
<li>跳转到&quot;下载管理&quot;页面</li>
<li>弹出&quot;添加磁力链接&quot;对话框，磁力链接已自动填入</li>
<li>需要选择：<strong>下载器</strong>、<strong>下载参数</strong>、<strong>下载目录</strong></li>
<li>点击&quot;确定添加&quot;按钮，发送到 Media Saber 服务端开始下载</li>
</ul>
</li>
<li>点击 <strong>蓝色图标</strong>（云端离线）：
<ul>
<li>自动打开插件主界面</li>
<li>跳转到&quot;云端存储&quot;页面</li>
<li>弹出&quot;离线下载&quot;对话框，链接已自动填入</li>
<li>需要选择：<strong>下载路径</strong>（云存储目录）</li>
<li>点击&quot;开始下载&quot;按钮，发送到 Media Saber 服务端进行离线下载</li>
</ul>
</li>
</ol>
<h3 id="场景二-右键快速下载" tabindex="-1"><a class="header-anchor" href="#场景二-右键快速下载"><span>场景二：右键快速下载</span></a></h3>
<p>选中任意文本（如磁力链接）后右键：</p>
<p><img src="@source/03.客户端/04.浏览器插件/images/0506.png" alt="右键菜单下载"></p>
<p><strong>交互流程</strong>：</p>
<ul>
<li><strong>离线下载</strong>：
<ul>
<li>打开插件主界面 → 云端存储页面 → 离线下载对话框</li>
<li>选中的文本已自动填入链接框</li>
<li>需要选择<strong>下载路径</strong>，点击&quot;开始下载&quot;发送到服务端</li>
</ul>
</li>
<li><strong>云盘转存</strong>：
<ul>
<li>打开插件主界面 → 云端存储页面 → 转存对话框</li>
<li>选中的文本已自动填入链接框</li>
<li>需要选择<strong>转存路径</strong>，点击&quot;开始转存&quot;发送到服务端</li>
</ul>
</li>
<li><strong>磁力链接下载</strong>：
<ul>
<li>打开插件主界面 → 下载管理页面 → 磁力下载对话框</li>
<li>选中的磁力链接已自动填入</li>
<li>需要选择<strong>下载器</strong>、<strong>下载参数</strong>、<strong>下载目录</strong>，点击&quot;确定添加&quot;发送到服务端</li>
</ul>
</li>
<li><strong>快速访问菜单</strong>：直接打开插件对应的功能页面</li>
</ul>
<h3 id="场景三-pt-站点种子下载" tabindex="-1"><a class="header-anchor" href="#场景三-pt-站点种子下载"><span>场景三：PT 站点种子下载</span></a></h3>
<p>在支持的 PT 站点种子详情页：</p>
<p><img src="@source/03.客户端/04.浏览器插件/images/0507.png" alt="PT站点下载"></p>
<p><strong>交互流程</strong>：</p>
<ol>
<li>页面会自动显示&quot;Media Saber PT种子下载&quot;按钮（仅在配置的 PT 站点显示）</li>
<li>点击按钮后：
<ul>
<li>自动打开插件主界面</li>
<li>跳转到&quot;下载管理&quot;页面</li>
<li>弹出&quot;PT 站种子下载&quot;对话框，当前页面链接已自动填入</li>
<li>需要选择：<strong>下载器</strong>、<strong>下载参数</strong>、<strong>下载目录</strong></li>
<li>点击&quot;确定下载&quot;按钮，发送到 Media Saber 服务端开始下载</li>
</ul>
</li>
<li>支持 NexusPHP 框架的主流 PT 站点</li>
</ol>
<hr>
<h2 id="📝-对话框操作说明" tabindex="-1"><a class="header-anchor" href="#📝-对话框操作说明"><span>📝 对话框操作说明</span></a></h2>
<h3 id="离线下载对话框" tabindex="-1"><a class="header-anchor" href="#离线下载对话框"><span>离线下载对话框</span></a></h3>
<p>当通过网页图标或右键菜单打开离线下载时：</p>
<p><strong>必填项目</strong>：</p>
<ul>
<li><strong>下载路径</strong> - 选择云存储中的目标文件夹</li>
<li><strong>下载链接</strong> - 支持的格式：
<ul>
<li>HTTP/HTTPS 链接</li>
<li>FTP 链接</li>
<li>磁力链接 (magnet:)</li>
<li>电驴链接 (ed2k:)</li>
<li>BT 种子链接</li>
</ul>
</li>
</ul>
<p><strong>操作步骤</strong>：</p>
<ol>
<li>链接会自动填入（如果是通过网页操作触发）</li>
<li>选择下载路径</li>
<li>点击&quot;开始下载&quot;按钮</li>
<li>任务发送到 Media Saber 服务端执行</li>
</ol>
<h3 id="磁力链接下载对话框" tabindex="-1"><a class="header-anchor" href="#磁力链接下载对话框"><span>磁力链接下载对话框</span></a></h3>
<p>当通过网页图标或右键菜单打开磁力下载时：</p>
<p><strong>必填项目</strong>：</p>
<ul>
<li><strong>磁力链接</strong> - 格式：magnet:?xt=urn:btih:...</li>
<li><strong>下载器</strong> - 选择配置的下载器（如 qBittorrent、Transmission 等）</li>
<li><strong>下载参数</strong> - 选择预设的下载参数配置</li>
<li><strong>下载目录</strong> - 选择下载器中的目标目录</li>
</ul>
<p><strong>操作步骤</strong>：</p>
<ol>
<li>磁力链接会自动填入（如果是通过网页操作触发）</li>
<li>选择下载器、下载参数和下载目录</li>
<li>点击&quot;确定添加&quot;按钮</li>
<li>任务发送到 Media Saber 服务端，由下载器执行</li>
</ol>
<h3 id="pt-站种子下载对话框" tabindex="-1"><a class="header-anchor" href="#pt-站种子下载对话框"><span>PT 站种子下载对话框</span></a></h3>
<p>当通过 PT 站点按钮打开种子下载时：</p>
<p><strong>必填项目</strong>：</p>
<ul>
<li><strong>PT 站种子详情页链接</strong> - 当前 PT 站点的种子详情页地址</li>
<li><strong>下载器</strong> - 选择配置的下载器</li>
<li><strong>下载参数</strong> - 选择预设的下载参数配置</li>
<li><strong>下载目录</strong> - 选择下载器中的目标目录</li>
</ul>
<p><strong>操作步骤</strong>：</p>
<ol>
<li>PT 站点链接会自动填入</li>
<li>选择下载器、下载参数和下载目录</li>
<li>点击&quot;确定下载&quot;按钮</li>
<li>Media Saber 会自动获取种子文件并发送到下载器</li>
</ol>
<h3 id="云盘转存对话框" tabindex="-1"><a class="header-anchor" href="#云盘转存对话框"><span>云盘转存对话框</span></a></h3>
<p>当通过右键菜单打开转存功能时：</p>
<p><strong>必填项目</strong>：</p>
<ul>
<li><strong>转存路径</strong> - 选择云存储中的目标文件夹</li>
<li><strong>转存链接</strong> - 支持的格式：
<ul>
<li>HTTP/HTTPS 链接</li>
<li>百度网盘分享链接</li>
<li>阿里云盘分享链接</li>
<li>其他云盘分享链接</li>
</ul>
</li>
</ul>
<p><strong>操作步骤</strong>：</p>
<ol>
<li>选中的文本会自动填入链接框</li>
<li>选择转存路径</li>
<li>点击&quot;开始转存&quot;按钮</li>
<li>任务发送到 Media Saber 服务端执行</li>
</ol>
<hr>
<h2 id="⚙️-高级设置" tabindex="-1"><a class="header-anchor" href="#⚙️-高级设置"><span>⚙️ 高级设置</span></a></h2>
<h3 id="自动更新配置" tabindex="-1"><a class="header-anchor" href="#自动更新配置"><span>自动更新配置</span></a></h3>
<p>在&quot;用户信息&quot;页面可以配置：</p>
<ul>
<li><strong>每日首次更新</strong>（推荐）- 每天首次打开浏览器时自动更新站点信息</li>
<li><strong>定时更新</strong> - 设置定时检查和更新的时间间隔</li>
<li><strong>后台静默同步</strong> - 在后台自动同步站点配置</li>
</ul>
<h3 id="通知设置" tabindex="-1"><a class="header-anchor" href="#通知设置"><span>通知设置</span></a></h3>
<ul>
<li>桌面通知 - 重要操作结果通知</li>
<li>页面内通知 - 操作状态提示</li>
<li>通知类型控制 - 可选择接收的通知类型</li>
</ul>
<hr>
<h2 id="🔧-故障排除" tabindex="-1"><a class="header-anchor" href="#🔧-故障排除"><span>🔧 故障排除</span></a></h2>
<h3 id="常见问题" tabindex="-1"><a class="header-anchor" href="#常见问题"><span>常见问题</span></a></h3>
<p><strong>❌ 无法连接到 Media Saber 服务</strong></p>
<ul>
<li>✅ 检查服务器地址是否正确</li>
<li>✅ 确认 Media Saber 服务正在运行</li>
<li>✅ 检查网络连接和防火墙设置</li>
</ul>
<p><strong>❌ 站点 Cookie 获取失败</strong></p>
<ul>
<li>✅ 确认已在浏览器中登录目标站点</li>
<li>✅ 检查站点是否在支持列表中</li>
<li>✅ 尝试刷新页面后重新获取</li>
</ul>
<p><strong>❌ 下载功能不工作</strong></p>
<ul>
<li>✅ 检查 Media Saber 下载器配置</li>
<li>✅ 确认下载链接格式正确</li>
<li>✅ 查看浏览器控制台错误信息</li>
</ul>
<h3 id="调试方法" tabindex="-1"><a class="header-anchor" href="#调试方法"><span>调试方法</span></a></h3>
<p>如需查看详细错误信息：</p>
<ol>
<li>按 <code v-pre>F12</code> 打开浏览器开发者工具</li>
<li>切换到&quot;扩展&quot;或&quot;Extensions&quot;标签</li>
<li>找到 Media Saber Tools 并点击&quot;检查视图&quot;</li>
<li>查看控制台输出的调试信息</li>
</ol>
<hr>
<h2 id="📋-权限说明" tabindex="-1"><a class="header-anchor" href="#📋-权限说明"><span>📋 权限说明</span></a></h2>
<p>扩展需要以下权限来正常工作：</p>
<table>
<thead>
<tr>
<th>权限</th>
<th>用途</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>cookies</code></td>
<td>获取 PT 站点登录 Cookie</td>
<td>用于同步站点登录状态</td>
</tr>
<tr>
<td><code v-pre>storage</code></td>
<td>保存用户配置信息</td>
<td>存储服务器地址、登录状态等</td>
</tr>
<tr>
<td><code v-pre>activeTab</code></td>
<td>获取当前标签页信息</td>
<td>识别当前访问的站点</td>
</tr>
<tr>
<td><code v-pre>scripting</code></td>
<td>注入页面脚本</td>
<td>实现下载按钮和右键菜单</td>
</tr>
<tr>
<td><code v-pre>contextMenus</code></td>
<td>右键菜单功能</td>
<td>提供右键快速操作</td>
</tr>
<tr>
<td><code v-pre>notifications</code></td>
<td>显示通知</td>
<td>操作结果提醒</td>
</tr>
<tr>
<td><code v-pre>alarms</code></td>
<td>定时任务</td>
<td>自动同步和检查功能</td>
</tr>
<tr>
<td><code v-pre>host_permissions</code></td>
<td>访问网站</td>
<td>识别下载链接和站点信息</td>
</tr>
</tbody>
</table>
<hr>
<h2 id="🆕-版本更新" tabindex="-1"><a class="header-anchor" href="#🆕-版本更新"><span>🆕 版本更新</span></a></h2>
<h3 id="v2-0-8-当前版本" tabindex="-1"><a class="header-anchor" href="#v2-0-8-当前版本"><span>v2.0.8（当前版本）</span></a></h3>
<p><strong>🎉 重大更新</strong></p>
<ul>
<li>全新云端存储管理界面</li>
<li>完整下载管理功能</li>
<li>站点数据统计可视化</li>
<li>右键菜单快速访问</li>
<li>移动端界面优化</li>
</ul>
<p><strong>🔧 技术改进</strong></p>
<ul>
<li>升级到 Manifest V3 标准</li>
<li>优化内存使用和性能</li>
<li>增强错误处理和用户反馈</li>
</ul>
<h3 id="历史版本" tabindex="-1"><a class="header-anchor" href="#历史版本"><span>历史版本</span></a></h3>
<ul>
<li><strong>v1.3.4</strong> - 新增云下载图标和右键菜单功能</li>
<li><strong>v1.3.1</strong> - 新增站点刷新和批量打开功能</li>
<li><strong>v1.3.0</strong> - 支持 NexusPHP 站点和用户信息显示</li>
</ul>
<hr>
<blockquote>
<p><strong>💡 提示</strong>：本扩展专为 Media Saber 用户设计，需要配合 Media Saber 服务使用。使用过程中请遵守相关法律法规和网站服务条款。</p>
</blockquote>
</div></template>


