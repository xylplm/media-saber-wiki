<template><div><h1 id="📚-目录分类" tabindex="-1"><a class="header-anchor" href="#📚-目录分类"><span>📚 目录分类</span></a></h1>
<h2 id="📋-分类列表" tabindex="-1"><a class="header-anchor" href="#📋-分类列表"><span>📋 分类列表</span></a></h2>
<p>目录分类页面展示了所有已添加的目录分类配置，以可折叠面板形式展示每个分类及其子分类的详细信息。</p>
<div class="hint-container warning">
<p class="hint-container-title">注意</p>
<ul>
<li>分类匹配顺序是从上到下，请注意顺序！！！</li>
<li>自定义分类如动漫、纪录片之类的自定义分类，请放在电影和电视剧之前！！！</li>
<li>为了避免无法匹配的情况发生，建议每一种标签类型的分类最后加一个全部来兜底，避免无法区分的媒体</li>
</ul>
</div>
<h3 id="🎯-功能操作" tabindex="-1"><a class="header-anchor" href="#🎯-功能操作"><span>🎯 功能操作</span></a></h3>
<ul>
<li>🔄 <strong>刷新</strong>：点击刷新按钮重新加载分类列表</li>
<li>🔄 <strong>生成默认分类</strong>：一键生成系统推荐的默认分类配置</li>
<li>🔼 <strong>全部展开/全部折叠</strong>：展开或折叠所有分类面板</li>
<li>➕ <strong>新增分类</strong>：添加新的主分类</li>
</ul>
<h3 id="📊-分类信息显示" tabindex="-1"><a class="header-anchor" href="#📊-分类信息显示"><span>📊 分类信息显示</span></a></h3>
<p>每个主分类面板会显示以下信息：</p>
<ul>
<li>📝 <strong>分类名称</strong>：自定义的分类名称</li>
<li>📊 <strong>子分类数量</strong>：该分类下包含的子分类数量</li>
<li>📚 <strong>子分类列表</strong>：该分类下所有子分类的简要信息</li>
</ul>
<p>在展开的面板中，每个子分类会显示以下详细信息：</p>
<ul>
<li>📝 <strong>子分类名称</strong>：自定义的子分类名称</li>
<li>🎬 <strong>电影分类</strong>：适用的电影分类类型</li>
<li>📺 <strong>电视剧分类</strong>：适用的电视剧分类类型</li>
<li>🌍 <strong>语种</strong>：适用的媒体语种</li>
<li>🌎 <strong>地区</strong>：适用的媒体地区</li>
<li>🎭 <strong>电影分级</strong>：适用的电影分级标准</li>
<li>📺 <strong>电视剧分级</strong>：适用的电视剧分级标准</li>
</ul>
<h3 id="🎮-分类控制操作" tabindex="-1"><a class="header-anchor" href="#🎮-分类控制操作"><span>🎮 分类控制操作</span></a></h3>
<h4 id="主分类操作" tabindex="-1"><a class="header-anchor" href="#主分类操作"><span>主分类操作</span></a></h4>
<ul>
<li>➕ <strong>添加二级分类</strong>：为该主分类添加新的子分类</li>
<li>✏️ <strong>编辑分类</strong>：修改主分类配置</li>
<li>🗑️ <strong>删除分类</strong>：移除主分类及其所有子分类</li>
<li>🎯 <strong>拖拽排序</strong>：通过拖拽调整主分类顺序</li>
<li>🔼 <strong>展开/收缩面板</strong>：展开或收缩分类详情面板</li>
</ul>
<h4 id="子分类操作" tabindex="-1"><a class="header-anchor" href="#子分类操作"><span>子分类操作</span></a></h4>
<ul>
<li>✏️ <strong>编辑</strong>：修改子分类配置</li>
<li>🗑️ <strong>删除</strong>：移除子分类</li>
<li>🎯 <strong>拖拽排序</strong>：通过拖拽调整子分类顺序</li>
</ul>
<hr>
<h2 id="➕-新增-编辑主分类" tabindex="-1"><a class="header-anchor" href="#➕-新增-编辑主分类"><span>➕ 新增/编辑主分类</span></a></h2>
<p>添加或修改主分类需要配置以下字段：</p>
<h3 id="📝-基本信息" tabindex="-1"><a class="header-anchor" href="#📝-基本信息"><span>📝 基本信息</span></a></h3>
<ul>
<li><strong>名称</strong>：自定义分类名称，便于识别和管理</li>
<li><strong>启用</strong>：控制分类是否启用，关闭后相关功能无法使用该分类</li>
</ul>
<hr>
<h2 id="➕-新增-编辑子分类" tabindex="-1"><a class="header-anchor" href="#➕-新增-编辑子分类"><span>➕ 新增/编辑子分类</span></a></h2>
<p>添加或修改子分类需要配置以下字段：</p>
<h3 id="📝-基本信息-1" tabindex="-1"><a class="header-anchor" href="#📝-基本信息-1"><span>📝 基本信息</span></a></h3>
<ul>
<li><strong>名称</strong>：自定义子分类名称，便于识别和管理</li>
</ul>
<h3 id="🎬-媒体分类配置" tabindex="-1"><a class="header-anchor" href="#🎬-媒体分类配置"><span>🎬 媒体分类配置</span></a></h3>
<ul>
<li><strong>电影分类</strong>：选择适用的电影分类类型，可多选</li>
<li><strong>电视剧分类</strong>：选择适用的电视剧分类类型，可多选</li>
</ul>
<h3 id="🌍-媒体属性配置" tabindex="-1"><a class="header-anchor" href="#🌍-媒体属性配置"><span>🌍 媒体属性配置</span></a></h3>
<ul>
<li><strong>语种</strong>：选择适用的媒体语种，可多选</li>
<li><strong>地区</strong>：选择适用的媒体地区，可多选</li>
<li><strong>电影分级</strong>：选择适用的电影分级标准，可多选</li>
<li><strong>电视剧分级</strong>：选择适用的电视剧分级标准，可多选</li>
</ul>
<hr>
<h2 id="🔄-默认分类" tabindex="-1"><a class="header-anchor" href="#🔄-默认分类"><span>🔄 默认分类</span></a></h2>
<p>系统提供一键生成默认分类功能：</p>
<ul>
<li>点击&quot;生成默认分类&quot;按钮</li>
<li>系统会自动创建推荐的分类配置</li>
<li>包括电影、电视剧、动画等常用分类</li>
<li>电影/电视剧/动画三个分类可以不用添加子分类</li>
</ul>
<hr>
<h2 id="⚠️-注意事项" tabindex="-1"><a class="header-anchor" href="#⚠️-注意事项"><span>⚠️ 注意事项</span></a></h2>
<ul>
<li>电影/电视剧/动画三个主分类可以不用添加子分类</li>
<li>子分类用于更精细的媒体分类管理</li>
<li>分类配置会影响媒体的自动识别和整理</li>
<li>可通过拖拽调整分类优先级</li>
<li>分类和子分类的组合用于目录匹配和下载任务分类</li>
</ul>
</div></template>


