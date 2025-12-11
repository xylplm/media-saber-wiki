<template><div><h1 id="📁-目录管理" tabindex="-1"><a class="header-anchor" href="#📁-目录管理"><span>📁 目录管理</span></a></h1>
<h2 id="📋-目录列表" tabindex="-1"><a class="header-anchor" href="#📋-目录列表"><span>📋 目录列表</span></a></h2>
<p>目录管理页面展示了所有已添加的目录配置，以表格形式展示每个目录的详细信息。</p>
<h3 id="🎯-功能操作" tabindex="-1"><a class="header-anchor" href="#🎯-功能操作"><span>🎯 功能操作</span></a></h3>
<ul>
<li>🔄 <strong>刷新</strong>：点击刷新按钮重新加载目录列表</li>
<li>➕ <strong>新增</strong>：点击新增按钮创建新的目录配置</li>
<li>🔍 <strong>下载目录匹配测试</strong>：测试下载目录的匹配规则</li>
<li>📋 <strong>从指定 tag 复制目录</strong>：从已有的标签目录复制配置</li>
<li>🔤 <strong>名称识别测试</strong>：测试文件名识别功能</li>
</ul>
<h3 id="📊-目录信息显示" tabindex="-1"><a class="header-anchor" href="#📊-目录信息显示"><span>📊 目录信息显示</span></a></h3>
<p>每个目录在列表中会显示以下信息：</p>
<ul>
<li>✅ <strong>启用状态</strong>：显示目录是否已启用</li>
<li>📝 <strong>名称</strong>：自定义的目录名称</li>
<li>🏷️ <strong>标签</strong>：用于区分目录用途的标签</li>
<li>📂 <strong>二级目录</strong>：是否创建二级目录</li>
<li>📍 <strong>路径</strong>：目录在文件系统中的实际路径</li>
<li>📚 <strong>分类</strong>：目录关联的媒体分类</li>
<li>📚 <strong>子分类</strong>：目录关联的媒体子分类</li>
</ul>
<h3 id="🎮-目录控制操作" tabindex="-1"><a class="header-anchor" href="#🎮-目录控制操作"><span>🎮 目录控制操作</span></a></h3>
<ul>
<li>✏️ <strong>编辑</strong>：点击编辑按钮修改目录配置</li>
<li>🔄 <strong>一键创建目录</strong>：根据配置自动创建目录结构</li>
<li>🗑️ <strong>删除</strong>：点击删除按钮移除目录配置</li>
<li>🎯 <strong>拖拽排序</strong>：通过拖拽调整目录优先级顺序</li>
</ul>
<hr>
<h2 id="➕-新增-编辑目录" tabindex="-1"><a class="header-anchor" href="#➕-新增-编辑目录"><span>➕ 新增/编辑目录</span></a></h2>
<p>添加或修改目录需要配置以下字段：</p>
<h3 id="🔧-基本配置" tabindex="-1"><a class="header-anchor" href="#🔧-基本配置"><span>🔧 基本配置</span></a></h3>
<ul>
<li><strong>启用开关</strong>：控制目录是否启用，关闭后相关功能无法使用该目录</li>
<li><strong>二级目录</strong>：开启后，会将匹配到的子分类名称作为子目录创建</li>
<li><strong>名称</strong>：自定义目录名称，便于识别和管理</li>
<li><strong>标签</strong>：用于区分目录用途，下载目录不要填写标签！！可填写其他自定义目录区分 比如 115网盘填【115】，媒体库专属目录填写【媒体库】，strm目录填【strm】，下载目录直接空着</li>
</ul>
<div class="hint-container warning">
<p class="hint-container-title">注意</p>
<ul>
<li>下载目录请不要填写标签，其他用途的目录才填写标签</li>
</ul>
</div>
<ul>
<li><strong>路径</strong>：目录在文件系统中的实际路径，需以<code v-pre>/</code>开头</li>
</ul>
<h3 id="📚-分类配置" tabindex="-1"><a class="header-anchor" href="#📚-分类配置"><span>📚 分类配置</span></a></h3>
<ul>
<li><strong>分类</strong>：根据分类及子分类自动匹配媒体来选择下载目录，可选择&quot;全部&quot;或指定分类</li>
<li><strong>子分类</strong>：更细粒度的分类配置，可选择&quot;全部&quot;或指定子分类</li>
</ul>
<hr>
<h2 id="🧪-功能测试" tabindex="-1"><a class="header-anchor" href="#🧪-功能测试"><span>🧪 功能测试</span></a></h2>
<h3 id="🔍-下载目录匹配测试" tabindex="-1"><a class="header-anchor" href="#🔍-下载目录匹配测试"><span>🔍 下载目录匹配测试</span></a></h3>
<p>通过下载目录匹配测试功能，可以验证目录配置是否正确：</p>
<ul>
<li>测试目录是否能正确匹配下载任务</li>
<li>验证分类和子分类配置是否生效</li>
<li>确认目录路径是否可访问</li>
</ul>
<h3 id="🔤-名称识别测试" tabindex="-1"><a class="header-anchor" href="#🔤-名称识别测试"><span>🔤 名称识别测试</span></a></h3>
<p>通过名称识别测试功能，可以测试文件名识别准确性：</p>
<ul>
<li>输入测试文件名</li>
<li>查看识别结果</li>
<li>验证识别规则是否符合预期</li>
</ul>
<hr>
<h2 id="📋-批量操作" tabindex="-1"><a class="header-anchor" href="#📋-批量操作"><span>📋 批量操作</span></a></h2>
<h3 id="📋-从指定-tag-复制目录" tabindex="-1"><a class="header-anchor" href="#📋-从指定-tag-复制目录"><span>📋 从指定 tag 复制目录</span></a></h3>
<p>通过从指定 tag 复制目录功能，可以快速创建相似配置：</p>
<ul>
<li>选择源标签目录</li>
<li>复制其配置信息</li>
<li>根据需要调整部分配置</li>
</ul>
<hr>
<h2 id="⚠️-注意事项" tabindex="-1"><a class="header-anchor" href="#⚠️-注意事项"><span>⚠️ 注意事项</span></a></h2>
<ul>
<li>下载目录不要填写标签</li>
<li>路径需以<code v-pre>/</code>开头</li>
<li>启用开关控制目录是否生效</li>
<li>二级目录功能会影响目录结构</li>
<li>分类和子分类用于自动匹配媒体</li>
<li>可通过拖拽调整目录优先级</li>
</ul>
</div></template>


