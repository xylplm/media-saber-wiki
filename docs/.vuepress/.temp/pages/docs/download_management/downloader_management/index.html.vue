<template><div><h1 id="📥-下载器管理" tabindex="-1"><a class="header-anchor" href="#📥-下载器管理"><span>📥 下载器管理</span></a></h1>
<h2 id="📋-下载器列表" tabindex="-1"><a class="header-anchor" href="#📋-下载器列表"><span>📋 下载器列表</span></a></h2>
<p>下载器管理页面展示了所有已添加的下载器配置，以卡片形式展示每个下载器的详细信息。</p>
<h3 id="🎯-功能操作" tabindex="-1"><a class="header-anchor" href="#🎯-功能操作"><span>🎯 功能操作</span></a></h3>
<ul>
<li>🔄 <strong>刷新</strong>：点击刷新按钮重新加载下载器列表</li>
<li>➕ <strong>添加下载器</strong>：添加新的下载器配置</li>
</ul>
<h3 id="📊-下载器信息显示" tabindex="-1"><a class="header-anchor" href="#📊-下载器信息显示"><span>📊 下载器信息显示</span></a></h3>
<p>每个下载器卡片上会显示以下信息：</p>
<ul>
<li>🖼️ <strong>下载器图标</strong>：显示下载器类型的图标</li>
<li>📝 <strong>下载器名称</strong>：自定义的下载器名称</li>
<li>🟢 <strong>启用状态</strong>：显示下载器是否已启用</li>
<li>⭐ <strong>默认标识</strong>：显示是否为默认下载器</li>
<li>🌐 <strong>连接地址</strong>：显示下载器的连接地址</li>
</ul>
<h3 id="🎮-下载器控制操作" tabindex="-1"><a class="header-anchor" href="#🎮-下载器控制操作"><span>🎮 下载器控制操作</span></a></h3>
<ul>
<li>⭐ <strong>设为默认</strong>：点击星标按钮将下载器设为默认下载器</li>
<li>✏️ <strong>编辑下载器</strong>：点击卡片可编辑下载器配置</li>
</ul>
<hr>
<h2 id="➕-新增-编辑下载器" tabindex="-1"><a class="header-anchor" href="#➕-新增-编辑下载器"><span>➕ 新增/编辑下载器</span></a></h2>
<p>添加或修改下载器需要配置以下字段：</p>
<h3 id="📝-基本信息" tabindex="-1"><a class="header-anchor" href="#📝-基本信息"><span>📝 基本信息</span></a></h3>
<ul>
<li><strong>下载器类型</strong>：选择下载器类型，支持Qbittorrent和Transmission</li>
<li><strong>自定义名称</strong>：为下载器设置易于识别的名称</li>
<li><strong>启用</strong>：控制下载器是否启用，关闭后无法使用该下载器</li>
</ul>
<h3 id="🔧-下载器配置" tabindex="-1"><a class="header-anchor" href="#🔧-下载器配置"><span>🔧 下载器配置</span></a></h3>
<p>根据不同下载器类型，需要配置相应的连接参数：</p>
<h4 id="qbittorrent配置" tabindex="-1"><a class="header-anchor" href="#qbittorrent配置"><span>Qbittorrent配置</span></a></h4>
<ul>
<li><strong>地址</strong>：Qbittorrent Web UI的访问地址，格式为<code v-pre>http://IP:端口</code></li>
<li><strong>用户名</strong>：登录Qbittorrent Web UI的用户名</li>
<li><strong>密码</strong>：登录Qbittorrent Web UI的密码</li>
<li><strong>监控目录</strong>：Qbittorrent的监控目录路径，用于自动添加种子</li>
<li><strong>移动模式</strong>：种子完成下载后是否移动文件</li>
<li><strong>标签隔离</strong>：用于隔离种子的标签名称</li>
<li><strong>路径隔离</strong>：用于隔离种子的路径</li>
</ul>
<h4 id="transmission配置" tabindex="-1"><a class="header-anchor" href="#transmission配置"><span>Transmission配置</span></a></h4>
<ul>
<li><strong>地址</strong>：Transmission Web UI的访问地址，格式为<code v-pre>http://IP:端口</code></li>
<li><strong>用户名</strong>：登录Transmission Web UI的用户名</li>
<li><strong>密码</strong>：登录Transmission Web UI的密码</li>
<li><strong>监控目录</strong>：Transmission的监控目录路径，用于自动添加种子</li>
<li><strong>移动模式</strong>：种子完成下载后是否移动文件</li>
<li><strong>标签隔离</strong>：用于隔离种子的标签名称</li>
<li><strong>路径隔离</strong>：用于隔离种子的路径</li>
</ul>
<hr>
<h2 id="🧪-测试与保存" tabindex="-1"><a class="header-anchor" href="#🧪-测试与保存"><span>🧪 测试与保存</span></a></h2>
<p>在添加或修改下载器配置时，建议进行以下操作：</p>
<ol>
<li><strong>填写配置信息</strong>：根据所选下载器类型填写相应配置</li>
<li><strong>测试连接</strong>：点击&quot;测试&quot;按钮验证配置是否正确</li>
<li><strong>保存配置</strong>：测试成功后点击&quot;保存&quot;按钮保存配置</li>
</ol>
<h3 id="测试说明" tabindex="-1"><a class="header-anchor" href="#测试说明"><span>测试说明</span></a></h3>
<ul>
<li>测试会验证下载器连接信息是否正确</li>
<li>测试成功表示可以正常连接到下载器</li>
<li>测试失败需要检查配置信息是否正确</li>
</ul>
<hr>
<h2 id="⭐-默认下载器设置" tabindex="-1"><a class="header-anchor" href="#⭐-默认下载器设置"><span>⭐ 默认下载器设置</span></a></h2>
<p>系统支持设置默认下载器，供自动化流程使用：</p>
<ol>
<li>点击下载器卡片右上角的星标按钮</li>
<li>成功设置后会显示为实心星标</li>
<li>系统会在自动化下载时使用默认下载器</li>
</ol>
<h3 id="设置建议" tabindex="-1"><a class="header-anchor" href="#设置建议"><span>设置建议</span></a></h3>
<ul>
<li>建议设置一个稳定可靠的下载器为默认下载器</li>
<li>可根据网络环境或使用场景切换默认下载器</li>
<li>在添加下载任务时可手动选择其他下载器</li>
</ul>
<hr>
<h2 id="⚠️-注意事项" tabindex="-1"><a class="header-anchor" href="#⚠️-注意事项"><span>⚠️ 注意事项</span></a></h2>
<ul>
<li>添加下载器后，记得点亮其右上角五角星，设为默认下载器</li>
<li>下载器版本建议：
<ul>
<li>Qbittorrent ≥ 4.3.9</li>
<li>Transmission ≥ 3.0</li>
<li>其他版本可能存在适配问题</li>
</ul>
</li>
<li>地址末尾不能加<code v-pre>/</code>，例如：<code v-pre>http://10.10.1.6:8080</code></li>
<li>确保下载器的Web UI功能已启用并可正常访问</li>
<li>用户名和密码需要具有相应的操作权限</li>
</ul>
</div></template>


