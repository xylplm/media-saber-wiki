<template><div><h1 id="🔤-自定义识别词" tabindex="-1"><a class="header-anchor" href="#🔤-自定义识别词"><span>🔤 自定义识别词</span></a></h1>
<p>当种子标题名称、文件名称无法识别时，可以通过自定义识别词对原名称进行修改，以符合<code v-pre>搜索订阅</code>、<code v-pre>刮削</code>的识别要求。</p>
<h2 id="📋-页面功能" tabindex="-1"><a class="header-anchor" href="#📋-页面功能"><span>📋 页面功能</span></a></h2>
<p><strong>顶部操作区域</strong></p>
<ul>
<li>🔍 <strong>搜索框</strong>：通过关键词搜索识别词组</li>
<li>🔄 <strong>刷新</strong>：重新加载识别词组列表</li>
<li>➕ <strong>新增识别词组</strong>：创建新的识别词组</li>
<li>🧪 <strong>名称识别测试</strong>：测试识别词效果</li>
<li>📂 <strong>更多操作</strong>：
<ul>
<li>全部展开：展开所有识别词组面板</li>
<li>全部折叠：折叠所有识别词组面板</li>
<li>批量启用：启用选中的识别词组</li>
<li>批量停用：停用选中的识别词组</li>
<li>批量删除：删除选中的识别词组</li>
<li>清空：删除所有识别词组</li>
</ul>
</li>
</ul>
<p><strong>识别词组操作</strong></p>
<p>每个识别词组支持以下操作：</p>
<ul>
<li>➕ <strong>添加识别词</strong>：向词组中添加新的识别词（仅自定义词组）</li>
<li>📂 <strong>更多操作</strong>：
<ul>
<li>删除当前词组（仅自定义词组）</li>
<li>导入识别词（仅自定义词组）</li>
<li>导出识别词（仅自定义词组且有选中项）</li>
<li>批量启用（仅自定义词组且有选中项）</li>
<li>批量停用（仅自定义词组且有选中项）</li>
<li>批量删除（仅自定义词组且有选中项）</li>
</ul>
</li>
<li>↕️ <strong>展开/收缩面板</strong>：展开或收缩识别词组详情</li>
</ul>
<h2 id="🧩-识别词类型" tabindex="-1"><a class="header-anchor" href="#🧩-识别词类型"><span>🧩 识别词类型</span></a></h2>
<h3 id="🚫-屏蔽" tabindex="-1"><a class="header-anchor" href="#🚫-屏蔽"><span>🚫 屏蔽</span></a></h3>
<p>将<code v-pre>被替换词</code>从待识别文本中去除。</p>
<h3 id="🔄-替换" tabindex="-1"><a class="header-anchor" href="#🔄-替换"><span>🔄 替换</span></a></h3>
<p>使用<code v-pre>替换词</code>替换掉待识别文本中的<code v-pre>被替换词</code>部分。</p>
<h3 id="➕-替换-集偏移" tabindex="-1"><a class="header-anchor" href="#➕-替换-集偏移"><span>➕ 替换+集偏移</span></a></h3>
<p>替换的同时，完成集偏移操作。</p>
<h3 id="🔢-集偏移" tabindex="-1"><a class="header-anchor" href="#🔢-集偏移"><span>🔢 集偏移</span></a></h3>
<p>定位待识别文本中的<code v-pre>集数位置</code>，并对识别出来的集数做运算，以解决识别出来的的集数与 TMDB 实际不一致的问题。<code v-pre>前后定位词</code>之间的所有数字视为集数。<code v-pre>偏移集数</code>支持运算，例如集数加 1：<code v-pre>EP+1</code>；集数翻倍：<code v-pre>2*EP</code>；集数翻倍-1：<code v-pre>2*EP-1</code>（<code v-pre>EP</code>代表原集数）。</p>
<blockquote>
<p>正则表达式：以上均支持使用正则表达式，使用 Python regex 模块，集偏移必须使用正则表达式。</p>
</blockquote>
<h2 id="📚-识别词组" tabindex="-1"><a class="header-anchor" href="#📚-识别词组"><span>📚 识别词组</span></a></h2>
<p>识别词组分为系统内置词组和用户自定义词组：</p>
<ul>
<li><strong>系统内置词组</strong>：由系统提供，不可修改或删除</li>
<li><strong>自定义词组</strong>：用户创建，可完全自定义管理</li>
</ul>
<p>对于电视剧或者动漫这种可能所需的识别词比较多的时候，我们可以选择新增识别词组来方便管理和分享。</p>
<h2 id="📤-导入导出" tabindex="-1"><a class="header-anchor" href="#📤-导入导出"><span>📤 导入导出</span></a></h2>
<p>通过导入功能可以将别人分享的识别词导入使用。</p>
<p>通过批量管理--导出按钮可以将选中的识别词/识别词组导出为一串长文本，分享给他人使用。</p>
<blockquote>
<p>分享时应填写备注，以便别人导入时能知道是什么。</p>
</blockquote>
<h2 id="🔘-状态管理" tabindex="-1"><a class="header-anchor" href="#🔘-状态管理"><span>🔘 状态管理</span></a></h2>
<p>可以通过批量管理--启用、停用按钮更改选中的识别词/识别词组的状态，也可以在每个具体的识别词里更改状态为启用、停用。</p>
<h2 id="🧪-使用教程" tabindex="-1"><a class="header-anchor" href="#🧪-使用教程"><span>🧪 使用教程</span></a></h2>
<p><strong>1) 新增识别词</strong></p>
<p>我们进入自定义识别词页面，可以通过搜索框查找识别词组，通过刷新按钮重新加载数据。点击&quot;新增识别词组&quot;按钮可以创建新的识别词组。</p>
<p><strong>2）识别词组管理</strong></p>
<p>在每个识别词组中，可以点击&quot;+&quot;按钮添加新的识别词（仅限自定义词组）。通过点击&quot;更多操作&quot;按钮可以：</p>
<ul>
<li>删除当前词组（仅自定义词组）</li>
<li>导入识别词（仅自定义词组）</li>
<li>导出识别词（仅自定义词组且有选中项）</li>
<li>批量启用/停用/删除（仅自定义词组且有选中项）</li>
</ul>
<p><strong>3）面板操作</strong></p>
<p>每个识别词组都可以通过右侧的展开/收缩按钮来控制面板的展开状态，方便查看和管理大量识别词组。</p>
<h2 id="📊-识别词字段详解" tabindex="-1"><a class="header-anchor" href="#📊-识别词字段详解"><span>📊 识别词字段详解</span></a></h2>
<p>在每个识别词组的表格中，可以查看该组下的所有识别词，各字段含义如下：</p>
<h3 id="🔄-基本字段" tabindex="-1"><a class="header-anchor" href="#🔄-基本字段"><span>🔄 基本字段</span></a></h3>
<ul>
<li><strong>状态</strong>：识别词的启用状态，绿色为启用，灰色为停用。只有启用的识别词才会在识别过程中生效。</li>
<li><strong>被替换词</strong>：需要被替换或屏蔽的文本内容。在&quot;屏蔽&quot;类型中，该文本会被直接移除；在&quot;替换&quot;类型中，该文本会被&quot;替换词&quot;替换。</li>
<li><strong>替换词</strong>：用于替换&quot;被替换词&quot;的文本内容。仅在&quot;替换&quot;和&quot;替换+集偏移&quot;类型中使用。</li>
<li><strong>前定位词</strong>：用于定位集数的前缀文本。在&quot;集偏移&quot;和&quot;替换+集偏移&quot;类型中使用，与&quot;后定位词&quot;配合确定集数位置。</li>
<li><strong>后定位词</strong>：用于定位集数的后缀文本。在&quot;集偏移&quot;和&quot;替换+集偏移&quot;类型中使用，与&quot;前定位词&quot;配合确定集数位置。</li>
<li><strong>偏移集数</strong>：对识别出的集数进行运算的表达式。支持如<code v-pre>EP+1</code>、<code v-pre>2*EP</code>、<code v-pre>2*EP-1</code>等形式，其中<code v-pre>EP</code>代表原始集数。</li>
<li><strong>备注</strong>：用户自定义的备注信息，用于说明该识别词的用途或特殊说明。</li>
</ul>
<h3 id="⚙️-高级字段" tabindex="-1"><a class="header-anchor" href="#⚙️-高级字段"><span>⚙️ 高级字段</span></a></h3>
<ul>
<li><strong>正则表达式</strong>：开关选项，开启后&quot;被替换词&quot;、&quot;替换词&quot;、&quot;前定位词&quot;、&quot;后定位词&quot;均支持正则表达式语法。特别地，在&quot;集偏移&quot;类型中必须使用正则表达式。</li>
<li><strong>操作按钮</strong>：
<ul>
<li>✏️ <strong>编辑</strong>：修改当前识别词的所有字段信息（仅自定义词组）</li>
<li>🗑️ <strong>删除</strong>：删除当前识别词（仅自定义词组）</li>
</ul>
</li>
</ul>
<h2 id="💡-使用案例" tabindex="-1"><a class="header-anchor" href="#💡-使用案例"><span>💡 使用案例</span></a></h2>
<h3 id="刮削海贼王" tabindex="-1"><a class="header-anchor" href="#刮削海贼王"><span>刮削海贼王</span></a></h3>
<p>我们知道海贼王的TMDB里一共分了21季。但是有些时候站点的种子文件名并没有划分到具体的季数，全划分到了第一季。</p>
<p>比如在某站下载的种子文件名称：<code v-pre>One.Piece.S01E1076.1999.1080p.CR.WEB-DL.x264.AAC-ADWeb.mkv</code>，它会识别成第一季，这对刮削很不友好。</p>
<p>下面我们来编辑个自定义识别词。</p>
<ul>
<li>类型：<code v-pre>替换</code></li>
<li>被替换词：<code v-pre>One.Piece.S01E(89[2-9]|(9|10)\d{2}).1999</code></li>
<li>替换词：<code v-pre>海贼王.S21E\1.1999</code></li>
</ul>
<p>说明：</p>
<ul>
<li>
<p>被替换词里的【(89[2-9]|(9|10)\d{2})】代表了892-1099集。 其中：</p>
<ul>
<li><code v-pre>89[2-9]</code>匹配的是以 &quot;89&quot; 开头，后跟一个在 2-9 之间的数字的字符串。这里也就是说匹配892-899集。</li>
<li><code v-pre>(9|10)\d{2}</code>里的(9|10)是一个选择性的正则表达式，它会匹配以 9 开头的数字或以 10 开头的数字，\d{2}是说匹配任何一个两位数字的字符串。【(9|10)\d{2}】就是匹配900-1099集。</li>
</ul>
</li>
<li>
<p>替换词里的<code v-pre>\1</code>是指的是被替换词里的<code v-pre>(89[2-9]|(9|10)\d{2})</code>。</p>
</li>
</ul>
<p>重新识别，成功的识别成了第21季。</p>
<h2 id="💡-使用建议" tabindex="-1"><a class="header-anchor" href="#💡-使用建议"><span>💡 使用建议</span></a></h2>
<ol>
<li>
<p><strong>合理分组</strong>：对于特定的电视剧或动漫，建议创建专门的识别词组，便于管理和维护。</p>
</li>
<li>
<p><strong>精确匹配</strong>：编写识别词时尽量使用精确的匹配规则，避免影响其他不相关的文件名。</p>
</li>
<li>
<p><strong>定期维护</strong>：定期检查识别词的效果，删除不再需要的识别词，保持识别词库的整洁。</p>
</li>
<li>
<p><strong>测试验证</strong>：使用<RouteLink to="/docs/media_organization/name_recognition_test/">名称识别测试</RouteLink>功能验证识别词的效果，确保按预期工作。</p>
</li>
<li>
<p><strong>备份分享</strong>：重要的识别词可以通过导出功能进行备份，也可以分享给其他用户使用。</p>
</li>
</ol>
</div></template>


