<template><div><h1 id="⚙️-下载参数" tabindex="-1"><a class="header-anchor" href="#⚙️-下载参数"><span>⚙️ 下载参数</span></a></h1>
<h2 id="📋-参数列表" tabindex="-1"><a class="header-anchor" href="#📋-参数列表"><span>📋 参数列表</span></a></h2>
<p>下载参数页面展示了所有已创建的下载参数配置，以可折叠面板形式展示每个参数组的详细信息。</p>
<h3 id="🎯-功能操作" tabindex="-1"><a class="header-anchor" href="#🎯-功能操作"><span>🎯 功能操作</span></a></h3>
<ul>
<li>🔄 <strong>刷新</strong>：点击刷新按钮重新加载下载参数列表</li>
<li>➕ <strong>新增</strong>：点击新增按钮创建新的下载参数配置</li>
<li>✏️ <strong>编辑</strong>：点击编辑按钮修改现有下载参数配置</li>
<li>🗑️ <strong>删除</strong>：点击删除按钮移除下载参数配置</li>
<li>⭐ <strong>设为默认</strong>：点击星标按钮将参数配置设为默认参数</li>
<li>🔼 <strong>展开/收缩</strong>：点击菜单按钮展开或收缩参数详情面板</li>
</ul>
<h3 id="📊-参数信息显示" tabindex="-1"><a class="header-anchor" href="#📊-参数信息显示"><span>📊 参数信息显示</span></a></h3>
<p>每个下载参数面板上会显示以下信息：</p>
<ul>
<li>📝 <strong>参数名称</strong>：自定义的参数配置名称</li>
<li>🏷️ <strong>分类信息</strong>：Qbittorrent使用的种子分类</li>
<li>🏷️ <strong>标签信息</strong>：种子标签，用于标识和管理种子</li>
<li>⏸️ <strong>暂停状态</strong>：添加种子时是否默认暂停</li>
<li>📈 <strong>速度限制</strong>：上传和下载速度限制设置</li>
<li>🕐 <strong>做种时间</strong>：种子做种时间限制设置</li>
<li>📊 <strong>分享率</strong>：种子分享率限制设置</li>
</ul>
<hr>
<h2 id="➕-新增-编辑下载参数" tabindex="-1"><a class="header-anchor" href="#➕-新增-编辑下载参数"><span>➕ 新增/编辑下载参数</span></a></h2>
<p>创建或修改下载参数需要配置以下字段：</p>
<h3 id="📝-基本信息" tabindex="-1"><a class="header-anchor" href="#📝-基本信息"><span>📝 基本信息</span></a></h3>
<ul>
<li><strong>名称</strong>：用于区分参数配置，建议使用有意义的名称</li>
<li><strong>添加种子时暂停</strong>：控制种子添加后是否默认暂停</li>
</ul>
<h3 id="🏷️-分类与标签" tabindex="-1"><a class="header-anchor" href="#🏷️-分类与标签"><span>🏷️ 分类与标签</span></a></h3>
<ul>
<li><strong>种子分类(仅qbittorrent)</strong>：用于 Qbittorrent 的种子分类功能，便于组织管理种子</li>
<li><strong>种子标签</strong>：下载器的种子标签，若启用只管理Media Saber添加的下载且应用该下载参数的种子需要被管理，请添加MEDIA_SABER标签</li>
</ul>
<h3 id="📈-速度限制" tabindex="-1"><a class="header-anchor" href="#📈-速度限制"><span>📈 速度限制</span></a></h3>
<ul>
<li><strong>上传速度限制</strong>：下载器上传速度限制，单位 KB/s，0为不限速</li>
<li><strong>下载速度限制</strong>：下载器下载速度限制，单位 KB/s，0为不限速</li>
</ul>
<h3 id="⚙️-做种设置" tabindex="-1"><a class="header-anchor" href="#⚙️-做种设置"><span>⚙️ 做种设置</span></a></h3>
<ul>
<li><strong>做种时间限制</strong>：下载器的种子做种时间限制，单位分钟，0为不限制</li>
<li><strong>分享率限制</strong>：下载器的种子分享率限制，0为不限制</li>
</ul>
<hr>
<h2 id="🔧-使用说明" tabindex="-1"><a class="header-anchor" href="#🔧-使用说明"><span>🔧 使用说明</span></a></h2>
<h3 id="🔄-参数与下载器关联" tabindex="-1"><a class="header-anchor" href="#🔄-参数与下载器关联"><span>🔄 参数与下载器关联</span></a></h3>
<p>所有下载器均需通过设置的下载参数进行关联使用，下载参数是下载器配置的重要组成部分。</p>
<h3 id="⭐-设置默认参数" tabindex="-1"><a class="header-anchor" href="#⭐-设置默认参数"><span>⭐ 设置默认参数</span></a></h3>
<p>若有多个下载参数，请选择一个点亮五角星，设为默认参数，供自动化流程使用：</p>
<ol>
<li>点击参数面板右上角的星标图标</li>
<li>成功设置后会显示为实心星标</li>
<li>系统会在自动化下载时使用默认参数</li>
</ol>
<h3 id="📱-界面操作" tabindex="-1"><a class="header-anchor" href="#📱-界面操作"><span>📱 界面操作</span></a></h3>
<ul>
<li>点击参数面板标题可展开或收缩详细信息</li>
<li>在面板展开状态下可查看所有参数配置详情</li>
<li>可同时展开多个参数面板进行对比查看</li>
</ul>
<hr>
<h2 id="⚠️-注意事项" tabindex="-1"><a class="header-anchor" href="#⚠️-注意事项"><span>⚠️ 注意事项</span></a></h2>
<ul>
<li>下载参数是下载器配置的重要组成部分</li>
<li>建议根据不同的使用场景创建多个参数配置</li>
<li>在使用自动化功能时，系统会优先使用默认参数配置</li>
<li>部分参数功能（如分类）仅适用于特定下载器（如Qbittorrent）</li>
</ul>
</div></template>


