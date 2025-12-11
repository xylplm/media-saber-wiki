<template><div><h1 id="📺-剧榜风云" tabindex="-1"><a class="header-anchor" href="#📺-剧榜风云"><span>📺 剧榜风云</span></a></h1>
<p>剧榜风云是 MediaSaber 系统中用于展示热门电视剧和电影榜单的功能模块。通过该功能，用户可以了解当前最受欢迎的影视作品，发现值得观看的内容。</p>
<h2 id="🚪-功能入口" tabindex="-1"><a class="header-anchor" href="#🚪-功能入口"><span>🚪 功能入口</span></a></h2>
<p>剧榜风云功能位于系统左侧导航菜单中：</p>
<ol>
<li>在左侧导航菜单中找到&quot;寻影探剧&quot;选项</li>
<li>点击展开子菜单</li>
<li>选择&quot;剧榜风云&quot;选项进入功能页面</li>
</ol>
<p>或者直接访问路径：<code v-pre>/main/discovery/movie-subject</code></p>
<h2 id="🖥️-界面布局" tabindex="-1"><a class="header-anchor" href="#🖥️-界面布局"><span>🖥️ 界面布局</span></a></h2>
<p>剧榜风云页面采用清晰的布局结构，包含筛选区域和内容展示区域：</p>
<h3 id="🎯-顶部操作栏" tabindex="-1"><a class="header-anchor" href="#🎯-顶部操作栏"><span>🎯 顶部操作栏</span></a></h3>
<p>页面顶部包含定制按钮：</p>
<ul>
<li><strong>定制按钮</strong>：点击可进入主题定制界面</li>
<li><strong>功能</strong>：添加、编辑或删除展示的主题分类</li>
</ul>
<h3 id="🔍-筛选区域" tabindex="-1"><a class="header-anchor" href="#🔍-筛选区域"><span>🔍 筛选区域</span></a></h3>
<p>页面上部为筛选区域，包含多个筛选条件：</p>
<h4 id="🎬-平台筛选" tabindex="-1"><a class="header-anchor" href="#🎬-平台筛选"><span>🎬 平台筛选</span></a></h4>
<ul>
<li>选择不同的媒体平台来源</li>
<li>默认显示所有平台</li>
<li>可快速切换查看各平台榜单</li>
</ul>
<h4 id="📂-分类筛选" tabindex="-1"><a class="header-anchor" href="#📂-分类筛选"><span>📂 分类筛选</span></a></h4>
<ul>
<li>按影视作品类型分类</li>
<li>包括电影、电视剧等不同分类</li>
<li>可快速定位感兴趣的类型</li>
</ul>
<h4 id="🏷️-主题筛选" tabindex="-1"><a class="header-anchor" href="#🏷️-主题筛选"><span>🏷️ 主题筛选</span></a></h4>
<ul>
<li>按热门主题分类展示</li>
<li>包括热门榜单、高分推荐等主题</li>
<li>可通过定制功能管理主题</li>
</ul>
<h3 id="📋-内容展示区域" tabindex="-1"><a class="header-anchor" href="#📋-内容展示区域"><span>📋 内容展示区域</span></a></h3>
<p>页面主体为内容展示区域，以卡片形式展示媒体项目：</p>
<h4 id="🎬-媒体项目卡片" tabindex="-1"><a class="header-anchor" href="#🎬-媒体项目卡片"><span>🎬 媒体项目卡片</span></a></h4>
<p>每个媒体项目以卡片形式展示：</p>
<ul>
<li><strong>海报图片</strong>：影视作品的封面图片</li>
<li><strong>标题信息</strong>：影视作品的名称和年份</li>
<li><strong>评分信息</strong>：用户评分和平台评分</li>
<li><strong>简介内容</strong>：简短的内容概述</li>
</ul>
<h4 id="📊-展示方式" tabindex="-1"><a class="header-anchor" href="#📊-展示方式"><span>📊 展示方式</span></a></h4>
<ul>
<li>采用网格布局展示多个媒体项目</li>
<li>支持滚动浏览查看更多内容</li>
<li>点击卡片可查看详细信息</li>
</ul>
<h2 id="📋-功能详解" tabindex="-1"><a class="header-anchor" href="#📋-功能详解"><span>📋 功能详解</span></a></h2>
<h3 id="🎯-主题定制" tabindex="-1"><a class="header-anchor" href="#🎯-主题定制"><span>🎯 主题定制</span></a></h3>
<p>通过定制功能可以管理展示的主题分类：</p>
<h4 id="定制入口" tabindex="-1"><a class="header-anchor" href="#定制入口"><span>定制入口</span></a></h4>
<ol>
<li>点击页面顶部的&quot;定制&quot;按钮</li>
<li>进入主题定制界面</li>
</ol>
<h4 id="定制功能" tabindex="-1"><a class="header-anchor" href="#定制功能"><span>定制功能</span></a></h4>
<ul>
<li><strong>添加主题</strong>：可添加新的主题分类</li>
<li><strong>编辑主题</strong>：可修改现有主题的名称和内容</li>
<li><strong>删除主题</strong>：可删除不需要的主题</li>
<li><strong>排序调整</strong>：可调整主题的显示顺序</li>
</ul>
<h3 id="🔍-筛选功能" tabindex="-1"><a class="header-anchor" href="#🔍-筛选功能"><span>🔍 筛选功能</span></a></h3>
<p>通过多种筛选条件快速定位感兴趣的内容：</p>
<h4 id="平台筛选" tabindex="-1"><a class="header-anchor" href="#平台筛选"><span>平台筛选</span></a></h4>
<ul>
<li>选择特定平台查看其榜单</li>
<li>支持多平台切换</li>
<li>实时更新筛选结果</li>
</ul>
<h4 id="分类筛选" tabindex="-1"><a class="header-anchor" href="#分类筛选"><span>分类筛选</span></a></h4>
<ul>
<li>按影视类型筛选</li>
<li>包括电影、电视剧等</li>
<li>快速定位特定类型内容</li>
</ul>
<h4 id="主题筛选" tabindex="-1"><a class="header-anchor" href="#主题筛选"><span>主题筛选</span></a></h4>
<ul>
<li>按热门主题筛选</li>
<li>包括热门、高分、推荐等主题</li>
<li>可自定义主题内容</li>
</ul>
<h3 id="📋-内容浏览" tabindex="-1"><a class="header-anchor" href="#📋-内容浏览"><span>📋 内容浏览</span></a></h3>
<h4 id="加载更多" tabindex="-1"><a class="header-anchor" href="#加载更多"><span>加载更多</span></a></h4>
<ul>
<li>页面底部提供&quot;加载更多&quot;按钮</li>
<li>点击可加载更多内容</li>
<li>支持分页浏览大量内容</li>
</ul>
<h4 id="内容详情" tabindex="-1"><a class="header-anchor" href="#内容详情"><span>内容详情</span></a></h4>
<ul>
<li>点击媒体项目卡片</li>
<li>可查看详细信息</li>
<li>包括完整简介、演员列表等</li>
</ul>
<h2 id="⚙️-使用方法" tabindex="-1"><a class="header-anchor" href="#⚙️-使用方法"><span>⚙️ 使用方法</span></a></h2>
<h3 id="访问剧榜风云" tabindex="-1"><a class="header-anchor" href="#访问剧榜风云"><span>访问剧榜风云</span></a></h3>
<ol>
<li>打开 MediaSaber 系统</li>
<li>在左侧导航菜单中找到&quot;寻影探剧&quot;</li>
<li>点击&quot;剧榜风云&quot;进入页面</li>
</ol>
<h3 id="浏览榜单内容" tabindex="-1"><a class="header-anchor" href="#浏览榜单内容"><span>浏览榜单内容</span></a></h3>
<ol>
<li>查看默认展示的热门内容</li>
<li>使用筛选条件定位感兴趣的内容</li>
<li>点击媒体项目卡片查看详情</li>
</ol>
<h3 id="定制主题分类" tabindex="-1"><a class="header-anchor" href="#定制主题分类"><span>定制主题分类</span></a></h3>
<ol>
<li>点击页面顶部的&quot;定制&quot;按钮</li>
<li>在定制界面中添加、编辑或删除主题</li>
<li>调整主题显示顺序</li>
<li>保存设置后立即生效</li>
</ol>
<h2 id="🎯-使用技巧" tabindex="-1"><a class="header-anchor" href="#🎯-使用技巧"><span>🎯 使用技巧</span></a></h2>
<h3 id="快速找到感兴趣内容" tabindex="-1"><a class="header-anchor" href="#快速找到感兴趣内容"><span>快速找到感兴趣内容</span></a></h3>
<ol>
<li><strong>使用平台筛选</strong>：优先选择常用的媒体平台</li>
<li><strong>分类定位</strong>：根据喜好选择电影或电视剧分类</li>
<li><strong>主题浏览</strong>：通过热门主题快速发现优质内容</li>
</ol>
<h3 id="个性化定制" tabindex="-1"><a class="header-anchor" href="#个性化定制"><span>个性化定制</span></a></h3>
<ol>
<li><strong>添加关注主题</strong>：将感兴趣的分类添加为主题</li>
<li><strong>调整显示顺序</strong>：将最常浏览的主题置顶</li>
<li><strong>定期更新</strong>：根据流行趋势更新主题内容</li>
</ol>
<p>通过剧榜风云功能，用户可以轻松发现当前热门的影视作品，了解各平台的热门榜单，为自己选择观看内容提供参考。</p>
</div></template>


