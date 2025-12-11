<template><div><h1 id="🔄-目录同步" tabindex="-1"><a class="header-anchor" href="#🔄-目录同步"><span>🔄 目录同步</span></a></h1>
<h2 id="📋-同步任务列表" tabindex="-1"><a class="header-anchor" href="#📋-同步任务列表"><span>📋 同步任务列表</span></a></h2>
<p>目录同步页面展示了所有已配置的目录同步任务，以可折叠面板形式展示每个同步任务的详细信息。</p>
<h3 id="🎯-功能操作" tabindex="-1"><a class="header-anchor" href="#🎯-功能操作"><span>🎯 功能操作</span></a></h3>
<ul>
<li>🔄 <strong>刷新</strong>：点击刷新按钮重新加载同步任务列表</li>
<li>➕ <strong>新增</strong>：点击新增按钮创建新的同步任务</li>
<li>✈️ <strong>立即运行</strong>：点击飞机按钮立即执行同步任务</li>
<li>✏️ <strong>编辑</strong>：点击编辑按钮修改同步任务配置</li>
<li>🗑️ <strong>删除</strong>：点击删除按钮移除同步任务</li>
<li>🔼 <strong>展开/收缩面板</strong>：展开或收缩任务详情面板</li>
</ul>
<h3 id="📊-同步任务信息显示" tabindex="-1"><a class="header-anchor" href="#📊-同步任务信息显示"><span>📊 同步任务信息显示</span></a></h3>
<p>每个同步任务面板会显示以下信息：</p>
<ul>
<li>📝 <strong>任务名称</strong>：自定义的同步任务名称</li>
<li>✅ <strong>状态</strong>：显示任务是否已启用</li>
<li>🔁 <strong>识别重命名</strong>：是否对文件进行识别和重命名</li>
<li>🎞️ <strong>刮削</strong>：是否对媒体文件进行刮削</li>
<li>📺 <strong>刷新媒体库</strong>：是否在同步完成后刷新媒体库</li>
<li>📄 <strong>仅媒体文件</strong>：是否只处理媒体文件</li>
<li>❓ <strong>媒体库缺失</strong>：是否处理媒体库缺失的文件</li>
<li>📂 <strong>同步方式</strong>：文件同步的方式</li>
<li>📁 <strong>源目录路径</strong>：需要同步的源目录路径</li>
<li>📁 <strong>目标目录标签/路径</strong>：同步目标目录的标签或路径</li>
<li>📁 <strong>未知目录</strong>：无法识别文件的存放目录</li>
</ul>
<hr>
<h2 id="⚙️-工作原理" tabindex="-1"><a class="header-anchor" href="#⚙️-工作原理"><span>⚙️ 工作原理</span></a></h2>
<h3 id="📊-监控机制" tabindex="-1"><a class="header-anchor" href="#📊-监控机制"><span>📊 监控机制</span></a></h3>
<ul>
<li>对源目录进行监控，当目录下的文件发生新增时进行转移处理</li>
<li>按设置的转移方式整理至目的目录或媒体库目录</li>
<li>目录监控对环境有要求，部分场景下无法实现监控，参考 <RouteLink to="/guide/start/problem/#%E7%9B%AE%E5%BD%95%E5%90%8C%E6%AD%A5%E4%B8%8D%E8%87%AA%E5%8A%A8%E8%BF%90%E8%A1%8C">目录同步不自动运行</RouteLink></li>
</ul>
<hr>
<h2 id="➕-新增-编辑同步任务" tabindex="-1"><a class="header-anchor" href="#➕-新增-编辑同步任务"><span>➕ 新增/编辑同步任务</span></a></h2>
<p>创建或修改目录同步任务需要配置以下字段：</p>
<h3 id="📝-基本信息" tabindex="-1"><a class="header-anchor" href="#📝-基本信息"><span>📝 基本信息</span></a></h3>
<ul>
<li><strong>名称</strong>：自定义同步任务名称，便于识别和管理</li>
<li><strong>启用</strong>：控制同步任务是否启用，关闭后不会自动执行</li>
</ul>
<h3 id="📂-目录配置" tabindex="-1"><a class="header-anchor" href="#📂-目录配置"><span>📂 目录配置</span></a></h3>
<ul>
<li><strong>源目录</strong>：需要同步的源目录路径，源目录必须配置</li>
<li><strong>目标目录</strong>：
<ul>
<li>可选择目标目录标签，系统会自动识别分类并转移到对应标签的媒体库目录</li>
<li>或直接指定目标目录路径</li>
<li>目标目录未配置时将自动识别分类并转移到<code v-pre>媒体库目录</code>（此时显示为<code v-pre>自动</code>）</li>
</ul>
</li>
<li><strong>未知目录</strong>：无法识别时转移的目录
<ul>
<li>未配置时，无法识别的文件不会被处理</li>
<li>未识别目录下产生的文件程序<strong>不会主动清理</strong>，建议不配置，未识别记录可在手动识别功能下处理</li>
</ul>
</li>
</ul>
<h3 id="⚙️-处理选项" tabindex="-1"><a class="header-anchor" href="#⚙️-处理选项"><span>⚙️ 处理选项</span></a></h3>
<ul>
<li><strong>识别并重命名</strong>：
<ul>
<li><code v-pre>开启</code>后会对原文件进行识别并按定义的重命名格式进行重命名</li>
<li><code v-pre>关闭</code>后只转移文件不识别和重命名，相当于文件同步</li>
</ul>
</li>
<li><strong>刮削</strong>：是否对媒体文件进行元数据刮削</li>
<li><strong>刷新媒体库</strong>：是否在同步完成后刷新媒体库</li>
<li><strong>仅媒体文件</strong>：是否只处理媒体文件（视频、音频等）</li>
<li><strong>媒体库缺失</strong>：是否处理媒体库缺失的文件</li>
</ul>
<h3 id="🔄-同步方式" tabindex="-1"><a class="header-anchor" href="#🔄-同步方式"><span>🔄 同步方式</span></a></h3>
<ul>
<li>参考 <RouteLink to="/docs/other/glossary/#%E8%BD%AC%E7%A7%BB%E6%96%B9%E5%BC%8F">转移方式</RouteLink></li>
<li>可选择不同的文件处理方式，如移动、复制、硬链接等</li>
</ul>
<h3 id="🛠️-高级选项" tabindex="-1"><a class="header-anchor" href="#🛠️-高级选项"><span>🛠️ 高级选项</span></a></h3>
<ul>
<li><strong>兼容模式</strong>：
<ul>
<li>开启<code v-pre>兼容模式</code>后，目录同步可以实时监控挂载网盘、跨系统 SMB 共享等场景</li>
<li>但监控性能会降低，会增加对磁盘的访问量</li>
<li>建议在标准模式无法正常工作时启用</li>
</ul>
</li>
</ul>
<hr>
<h2 id="🚀-立即执行" tabindex="-1"><a class="header-anchor" href="#🚀-立即执行"><span>🚀 立即执行</span></a></h2>
<p>可通过以下方式立即执行同步任务：</p>
<ol>
<li>点击任务列表中的✈️&quot;立即运行&quot;按钮</li>
<li>任务将立即开始执行同步操作</li>
<li>可在任务详情中查看执行状态</li>
</ol>
<hr>
<h2 id="⚠️-注意事项" tabindex="-1"><a class="header-anchor" href="#⚠️-注意事项"><span>⚠️ 注意事项</span></a></h2>
<ul>
<li>源目录必须配置且可访问</li>
<li>目标目录可以是标签或具体路径</li>
<li>未识别目录下的文件不会被自动清理</li>
<li>兼容模式会降低性能但提高兼容性</li>
<li>同步任务会根据配置自动执行，也可手动触发</li>
<li>刮削操作会覆盖现有元数据文件，请谨慎配置</li>
</ul>
</div></template>


