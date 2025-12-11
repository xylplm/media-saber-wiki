<template><div><h1 id="📁-媒体整理" tabindex="-1"><a class="header-anchor" href="#📁-媒体整理"><span>📁 媒体整理</span></a></h1>
<p>媒体整理功能负责将下载或获取到的媒体文件整理到指定的媒体库目录中，并进行正确的命名和分类。</p>
<h2 id="📋-功能模块" tabindex="-1"><a class="header-anchor" href="#📋-功能模块"><span>📋 功能模块</span></a></h2>
<p>媒体整理包含以下主要功能模块：</p>
<h3 id="🎯-手动识别" tabindex="-1"><a class="header-anchor" href="#🎯-手动识别"><span>🎯 <RouteLink to="/docs/media_organization/manual_identification/">手动识别</RouteLink></span></a></h3>
<p>处理未被自动识别的媒体文件，用户可以对这些文件进行重新识别或手动指定媒体信息。</p>
<h3 id="📚-历史记录" tabindex="-1"><a class="header-anchor" href="#📚-历史记录"><span>📚 <RouteLink to="/docs/media_organization/history/">历史记录</RouteLink></span></a></h3>
<p>查看所有已成功整理的媒体文件记录，可以查看文件转移详情并对相关文件进行管理。</p>
<h3 id="🎬-tmdb-缓存" tabindex="-1"><a class="header-anchor" href="#🎬-tmdb-缓存"><span>🎬 <RouteLink to="/docs/media_organization/tmdb_cache/">TMDB 缓存</RouteLink></span></a></h3>
<p>管理从TMDB获取的媒体信息缓存数据，通过缓存机制减少对TMDB的访问频率，提高识别速度。</p>
<h3 id="🔤-自定义识别词" tabindex="-1"><a class="header-anchor" href="#🔤-自定义识别词"><span>🔤 <RouteLink to="/docs/media_organization/custom_identification_words/">自定义识别词</RouteLink></span></a></h3>
<p>当种子标题名称、文件名称无法识别时，可以通过自定义识别词对原名称进行修改，以符合识别要求。</p>
<h3 id="🧪-名称识别测试" tabindex="-1"><a class="header-anchor" href="#🧪-名称识别测试"><span>🧪 <RouteLink to="/docs/media_organization/name_recognition_test/">名称识别测试</RouteLink></span></a></h3>
<p>测试文件名是否能被正确识别，验证自定义识别词的效果。</p>
<h2 id="🔄-工作流程" tabindex="-1"><a class="header-anchor" href="#🔄-工作流程"><span>🔄 工作流程</span></a></h2>
<p>媒体整理的基本工作流程如下：</p>
<ol>
<li><strong>文件检测</strong>：系统自动检测下载目录中的新文件</li>
<li><strong>名称识别</strong>：通过文件名识别媒体信息（电影/电视剧）</li>
<li><strong>TMDB查询</strong>：从TMDB获取详细的媒体信息</li>
<li><strong>文件整理</strong>：按照配置的命名规则移动文件到媒体库</li>
<li><strong>记录保存</strong>：保存整理记录供后续管理</li>
</ol>
<h2 id="⚙️-相关设置" tabindex="-1"><a class="header-anchor" href="#⚙️-相关设置"><span>⚙️ 相关设置</span></a></h2>
<p>媒体整理功能的相关设置可以在以下位置找到：</p>
<ul>
<li><strong><RouteLink to="/docs/setting/base/">基础设置</RouteLink></strong>：配置整理的基本参数</li>
<li><strong><RouteLink to="/docs/directory_management/directory_management/">目录管理</RouteLink></strong>：设置源目录和目标目录</li>
<li><strong><RouteLink to="/docs/system_settings/">系统设置</RouteLink></strong>：配置TMDB API等系统参数</li>
</ul>
<h2 id="📝-注意事项" tabindex="-1"><a class="header-anchor" href="#📝-注意事项"><span>📝 注意事项</span></a></h2>
<ul>
<li>确保TMDB API配置正确以获取准确的媒体信息</li>
<li>合理设置自定义识别词，避免误识别</li>
<li>定期清理TMDB缓存以节省存储空间</li>
<li>使用名称识别测试验证识别规则的有效性</li>
</ul>
</div></template>


