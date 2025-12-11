<template><div><h1 id="📁-目录管理" tabindex="-1"><a class="header-anchor" href="#📁-目录管理"><span>📁 目录管理</span></a></h1>
<p>目录管理功能负责配置和管理媒体文件的存储目录，包括本地目录的分类、同步以及文件操作等功能。</p>
<h2 id="📋-功能模块" tabindex="-1"><a class="header-anchor" href="#📋-功能模块"><span>📋 功能模块</span></a></h2>
<p>目录管理包含以下主要功能模块：</p>
<h3 id="📂-文件管理" tabindex="-1"><a class="header-anchor" href="#📂-文件管理"><span>📂 <RouteLink to="/docs/directory_management/file_management/">文件管理</RouteLink></span></a></h3>
<p>浏览和管理本地文件系统中的媒体文件，支持文件转移、硬链接查询和刮削等操作。</p>
<h3 id="🏷️-目录分类" tabindex="-1"><a class="header-anchor" href="#🏷️-目录分类"><span>🏷️ <RouteLink to="/docs/directory_management/directory_classification/">目录分类</RouteLink></span></a></h3>
<p>配置和管理目录分类规则，用于自动将媒体文件归类到相应的目录中。</p>
<h3 id="🗃️-目录管理" tabindex="-1"><a class="header-anchor" href="#🗃️-目录管理"><span>🗃️ <RouteLink to="/docs/directory_management/directory_management/">目录管理</RouteLink></span></a></h3>
<p>管理和配置媒体文件的源目录和目标目录，设置目录标签和转移规则。</p>
<h3 id="🔄-目录同步" tabindex="-1"><a class="header-anchor" href="#🔄-目录同步"><span>🔄 <RouteLink to="/docs/directory_management/directory_sync/">目录同步</RouteLink></span></a></h3>
<p>配置和执行目录间的文件同步任务，支持多种同步方式和过滤规则。</p>
<h2 id="🔑-核心概念" tabindex="-1"><a class="header-anchor" href="#🔑-核心概念"><span>🔑 核心概念</span></a></h2>
<h3 id="目录分类" tabindex="-1"><a class="header-anchor" href="#目录分类"><span>目录分类</span></a></h3>
<p>目录分类是系统根据媒体类型、质量、版本等特征对目录进行的逻辑分组。通过合理配置目录分类，系统可以自动将下载的媒体文件移动到合适的目录中。</p>
<h3 id="目录标签" tabindex="-1"><a class="header-anchor" href="#目录标签"><span>目录标签</span></a></h3>
<p>目录标签是附加到目录上的标识符，用于在不同功能模块间关联目录。例如，在订阅管理中可以指定保存路径的目录标签，系统会自动找到对应标签的目录。</p>
<h3 id="同步方式" tabindex="-1"><a class="header-anchor" href="#同步方式"><span>同步方式</span></a></h3>
<p>目录同步支持多种方式：</p>
<ul>
<li><strong>硬链接</strong>：创建指向原始文件的硬链接，节省存储空间</li>
<li><strong>软链接</strong>：创建指向原始文件的软链接</li>
<li><strong>复制</strong>：将文件完整复制到目标位置</li>
<li><strong>移动</strong>：将文件移动到目标位置</li>
<li><strong>Strm</strong>：创建strm流媒体文件指向原始文件</li>
</ul>
<h3 id="文件转移" tabindex="-1"><a class="header-anchor" href="#文件转移"><span>文件转移</span></a></h3>
<p>文件转移是将媒体文件从源目录整理到目标目录的过程，通常包括重命名、刮削等操作，使文件符合媒体服务器的组织规范。</p>
<h2 id="🔄-工作流程" tabindex="-1"><a class="header-anchor" href="#🔄-工作流程"><span>🔄 工作流程</span></a></h2>
<p>目录管理的基本工作流程如下：</p>
<ol>
<li><strong>配置目录</strong>：在目录管理中添加和配置源目录和目标目录</li>
<li><strong>设置分类</strong>：在目录分类中配置目录分类规则</li>
<li><strong>标记标签</strong>：为目标目录添加标签以便其他模块引用</li>
<li><strong>执行操作</strong>：通过文件管理或目录同步执行具体的文件操作</li>
</ol>
<h2 id="⚙️-相关设置" tabindex="-1"><a class="header-anchor" href="#⚙️-相关设置"><span>⚙️ 相关设置</span></a></h2>
<p>目录管理功能的相关设置可以在以下位置找到：</p>
<ul>
<li><strong><RouteLink to="/docs/setting/base/">基础设置</RouteLink></strong>：配置目录管理的基本参数</li>
<li><strong><RouteLink to="/docs/subscription_management/">订阅管理</RouteLink></strong>：订阅中可指定目录标签作为保存路径</li>
<li><strong><RouteLink to="/docs/media_organization/">媒体整理</RouteLink></strong>：媒体整理过程中使用目录配置</li>
</ul>
<h2 id="📝-注意事项" tabindex="-1"><a class="header-anchor" href="#📝-注意事项"><span>📝 注意事项</span></a></h2>
<ul>
<li>合理规划目录结构，便于媒体文件的组织和管理</li>
<li>正确设置目录分类规则，确保文件能被正确归类</li>
<li>定期检查目录同步任务，确保文件同步正常进行</li>
<li>注意不同同步方式的特点，根据实际需求选择合适的同步方式</li>
</ul>
</div></template>


