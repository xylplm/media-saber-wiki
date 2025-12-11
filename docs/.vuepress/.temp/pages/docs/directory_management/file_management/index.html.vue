<template><div><h1 id="📂-文件管理" tabindex="-1"><a class="header-anchor" href="#📂-文件管理"><span>📂 文件管理</span></a></h1>
<h2 id="📋-文件列表" tabindex="-1"><a class="header-anchor" href="#📋-文件列表"><span>📋 文件列表</span></a></h2>
<p>文件管理页面展示了文件系统中的资源，允许用户手动管理文件，进行整理、硬链接查询及刮削等操作。</p>
<h3 id="🎯-功能操作" tabindex="-1"><a class="header-anchor" href="#🎯-功能操作"><span>🎯 功能操作</span></a></h3>
<h4 id="📤-转移操作" tabindex="-1"><a class="header-anchor" href="#📤-转移操作"><span>📤 转移操作</span></a></h4>
<ul>
<li><strong>单文件转移</strong>：选择文件下面的<code v-pre>转移</code>按钮是转移当前文件</li>
<li><strong>目录批量转移</strong>：选择右上角<code v-pre>转移</code>按钮是转移当前目录所有文件</li>
</ul>
<h4 id="🔗-硬链接查询" tabindex="-1"><a class="header-anchor" href="#🔗-硬链接查询"><span>🔗 硬链接查询</span></a></h4>
<ul>
<li><strong>单文件查询</strong>：选择文件下面的<code v-pre>硬链接查询</code>按钮，可以查询当前文件在文件系统中有哪些硬链接</li>
<li><strong>目录批量查询</strong>：选择右上角<code v-pre>硬链接</code>按钮查询当前目录下所有文件的所有硬链接</li>
</ul>
<h5 id="硬链接查询说明" tabindex="-1"><a class="header-anchor" href="#硬链接查询说明"><span>硬链接查询说明</span></a></h5>
<ul>
<li>查询硬链接需要指定<code v-pre>查询目录范围</code>，范围越大查询越慢</li>
<li>硬链接查询结果界面可以对硬链接文件进行<code v-pre>删除</code>操作</li>
</ul>
<h4 id="🎞️-目录刮削" tabindex="-1"><a class="header-anchor" href="#🎞️-目录刮削"><span>🎞️ 目录刮削</span></a></h4>
<ul>
<li><strong>单文件刮削</strong>：选择文件下面的<code v-pre>刮削</code>按钮是刮削当前文件</li>
<li><strong>目录批量刮削</strong>：选择右上角<code v-pre>刮削</code>按钮是刮削当前目录所有文件</li>
</ul>
<h5 id="刮削说明" tabindex="-1"><a class="header-anchor" href="#刮削说明"><span>刮削说明</span></a></h5>
<ul>
<li>刮削将会覆盖已存在的 nfo 及图片文件</li>
<li>刮削操作不可逆，请谨慎操作</li>
</ul>
<hr>
<h2 id="📁-目录操作" tabindex="-1"><a class="header-anchor" href="#📁-目录操作"><span>📁 目录操作</span></a></h2>
<h3 id="📂-目录浏览" tabindex="-1"><a class="header-anchor" href="#📂-目录浏览"><span>📂 目录浏览</span></a></h3>
<ul>
<li>支持多级目录浏览</li>
<li>显示文件和目录的详细信息</li>
<li>提供文件筛选和排序功能</li>
</ul>
<h3 id="🎯-文件操作" tabindex="-1"><a class="header-anchor" href="#🎯-文件操作"><span>🎯 文件操作</span></a></h3>
<ul>
<li><strong>选择文件</strong>：可单选或多选文件进行批量操作</li>
<li><strong>文件详情</strong>：点击文件可查看详细信息</li>
<li><strong>文件预览</strong>：支持部分文件类型的预览功能</li>
</ul>
<hr>
<h2 id="⚠️-注意事项" tabindex="-1"><a class="header-anchor" href="#⚠️-注意事项"><span>⚠️ 注意事项</span></a></h2>
<ul>
<li>转移操作会根据系统配置的规则进行文件整理</li>
<li>硬链接查询可能需要较长时间，特别是在大范围查询时</li>
<li>刮削操作会覆盖现有元数据文件，请确保已备份重要数据</li>
<li>所有文件操作均为实时操作，请谨慎执行删除等不可逆操作</li>
<li>建议在执行批量操作前先确认操作范围和影响</li>
</ul>
</div></template>


