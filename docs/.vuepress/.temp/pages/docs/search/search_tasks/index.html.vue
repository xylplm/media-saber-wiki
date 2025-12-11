<template><div><h1 id="🔍-搜索任务" tabindex="-1"><a class="header-anchor" href="#🔍-搜索任务"><span>🔍 搜索任务</span></a></h1>
<p>搜索任务是 MediaSaber 系统中的重要功能，用于管理和跟踪用户的搜索历史及结果。通过搜索任务，您可以方便地查看之前的搜索记录、浏览搜索结果以及管理搜索历史。</p>
<h2 id="📋-搜索任务列表" tabindex="-1"><a class="header-anchor" href="#📋-搜索任务列表"><span>📋 搜索任务列表</span></a></h2>
<p>在搜索任务列表页面，您可以查看所有已执行的搜索任务。</p>
<h3 id="📊-任务信息展示" tabindex="-1"><a class="header-anchor" href="#📊-任务信息展示"><span>📊 任务信息展示</span></a></h3>
<p>每个搜索任务卡片包含以下关键信息：</p>
<ul>
<li>🎬 <strong>搜索类型</strong>：标明搜索的资源类型（如电影、电视剧等）</li>
<li>🚦 <strong>状态</strong>：显示搜索任务的当前状态（已完成、进行中等）</li>
<li>🎥 <strong>媒体信息</strong>：显示搜索的媒体标题、年份和海报</li>
<li>📈 <strong>统计数据</strong>：包括搜索的站点数、资源数和总耗时</li>
<li>🕐 <strong>搜索时间</strong>：任务执行的时间</li>
</ul>
<h3 id="⚙️-操作功能" tabindex="-1"><a class="header-anchor" href="#⚙️-操作功能"><span>⚙️ 操作功能</span></a></h3>
<p>对于每个搜索任务，您可以执行以下操作：</p>
<h4 id="👀-查看搜索结果" tabindex="-1"><a class="header-anchor" href="#👀-查看搜索结果"><span>👀 查看搜索结果</span></a></h4>
<p>点击「查看搜索结果」按钮或直接点击任务卡片，可以进入该任务的搜索结果详情页面。</p>
<p>功能细节：</p>
<ul>
<li>仅当任务状态为「已完成」时此功能可用</li>
<li>页面会展示该任务的所有搜索结果</li>
<li>支持多种筛选和排序选项</li>
</ul>
<h4 id="📋-查看任务明细" tabindex="-1"><a class="header-anchor" href="#📋-查看任务明细"><span>📋 查看任务明细</span></a></h4>
<p>点击「查看任务明细」按钮，会弹出一个对话框显示任务的详细信息。</p>
<p>功能细节：</p>
<ul>
<li>显示任务的完整执行过程</li>
<li>展示各站点的搜索状态和结果统计</li>
<li>不受任务状态限制，随时可查看</li>
</ul>
<h4 id="🗑️-删除任务" tabindex="-1"><a class="header-anchor" href="#🗑️-删除任务"><span>🗑️ 删除任务</span></a></h4>
<p>点击「删除任务」按钮，可以删除指定的搜索任务。</p>
<p>功能细节：</p>
<ul>
<li>仅当任务状态为「已完成」时此功能可用</li>
<li>删除前会弹出确认对话框，防止误操作</li>
<li>删除后任务及其搜索结果将永久移除</li>
</ul>
<h3 id="📦-批量操作" tabindex="-1"><a class="header-anchor" href="#📦-批量操作"><span>📦 批量操作</span></a></h3>
<p>页面支持批量操作功能，提高操作效率：</p>
<h4 id="✅-批量删除" tabindex="-1"><a class="header-anchor" href="#✅-批量删除"><span>✅ 批量删除</span></a></h4>
<ol>
<li>在任务列表中勾选需要删除的任务</li>
<li>点击顶部工具栏的「一键删除」按钮</li>
<li>确认删除操作</li>
</ol>
<p>功能细节：</p>
<ul>
<li>可以同时选择多个任务进行删除</li>
<li>删除前会弹出确认对话框</li>
<li>删除后会自动刷新任务列表</li>
</ul>
<h3 id="🔍-搜索和筛选" tabindex="-1"><a class="header-anchor" href="#🔍-搜索和筛选"><span>🔍 搜索和筛选</span></a></h3>
<p>页面提供搜索功能，可以根据以下条件进行筛选：</p>
<h4 id="🔤-关键字搜索" tabindex="-1"><a class="header-anchor" href="#🔤-关键字搜索"><span>🔤 关键字搜索</span></a></h4>
<p>在搜索框中输入媒体标题关键字进行搜索。</p>
<p>使用方法：</p>
<ol>
<li>在搜索框中输入关键字</li>
<li>按回车键或点击搜索按钮</li>
<li>系统会实时筛选匹配的任务</li>
</ol>
<p>功能细节：</p>
<ul>
<li>支持模糊匹配</li>
<li>实时搜索，输入即搜索</li>
<li>可以清空搜索条件重置列表</li>
</ul>
<h4 id="🎯-搜索类型筛选" tabindex="-1"><a class="header-anchor" href="#🎯-搜索类型筛选"><span>🎯 搜索类型筛选</span></a></h4>
<p>通过下拉菜单选择搜索类型进行筛选。</p>
<p>使用方法：</p>
<ol>
<li>点击下拉菜单</li>
<li>选择需要的搜索类型（如电影、电视剧等）</li>
<li>系统会自动筛选匹配的任务</li>
</ol>
<p>功能细节：</p>
<ul>
<li>包含所有可用的搜索类型</li>
<li>可以与其他筛选条件组合使用</li>
<li>支持重置筛选条件</li>
</ul>
<h2 id="🎯-搜索结果详情" tabindex="-1"><a class="header-anchor" href="#🎯-搜索结果详情"><span>🎯 搜索结果详情</span></a></h2>
<p>点击搜索任务或使用「查看搜索结果」功能可以进入搜索结果详情页面，该页面展示了具体的搜索结果。</p>
<h3 id="🧹-结果过滤" tabindex="-1"><a class="header-anchor" href="#🧹-结果过滤"><span>🧹 结果过滤</span></a></h3>
<p>在结果页面顶部，提供了多种过滤选项：</p>
<h4 id="🎛️-自定义筛选条件" tabindex="-1"><a class="header-anchor" href="#🎛️-自定义筛选条件"><span>🎛️ 自定义筛选条件</span></a></h4>
<p>页面会根据搜索结果动态生成筛选条件，可能包括：</p>
<ul>
<li>站点筛选</li>
<li>分辨率筛选</li>
<li>视频编码筛选</li>
<li>音频编码筛选</li>
<li>发布时间筛选</li>
</ul>
<p>使用方法：</p>
<ol>
<li>在对应的筛选下拉框中选择条件</li>
<li>点击「开始过滤」按钮应用筛选条件</li>
<li>系统会实时更新结果列表</li>
</ol>
<p>功能细节：</p>
<ul>
<li>支持多条件组合筛选</li>
<li>可以随时重置筛选条件</li>
<li>筛选结果会显示统计信息</li>
</ul>
<h4 id="📝-排序方式选择" tabindex="-1"><a class="header-anchor" href="#📝-排序方式选择"><span>📝 排序方式选择</span></a></h4>
<p>可以选择不同的排序方式来展示搜索结果。</p>
<p>可用排序方式：</p>
<ul>
<li>默认排序</li>
<li>按发布时间排序</li>
<li>按文件大小排序</li>
<li>按种子热度排序</li>
</ul>
<p>使用方法：</p>
<ol>
<li>在排序下拉框中选择排序方式</li>
<li>点击「开始过滤」按钮应用排序</li>
<li>结果列表会按选定方式排序</li>
</ol>
<h4 id="🔑-关键字过滤" tabindex="-1"><a class="header-anchor" href="#🔑-关键字过滤"><span>🔑 关键字过滤</span></a></h4>
<p>通过关键字快速过滤结果。</p>
<p>使用方法：</p>
<ol>
<li>在关键字输入框中输入过滤词</li>
<li>支持多个关键字，用空格分隔</li>
<li>点击「开始过滤」按钮应用过滤</li>
</ol>
<p>功能细节：</p>
<ul>
<li>支持多关键字过滤</li>
<li>关键字间为&quot;与&quot;关系</li>
<li>实时显示过滤后的结果数量</li>
</ul>
<h3 id="🔄-重置功能" tabindex="-1"><a class="header-anchor" href="#🔄-重置功能"><span>🔄 重置功能</span></a></h3>
<p>点击「重置」按钮可以清除所有筛选条件。</p>
<p>功能细节：</p>
<ul>
<li>一键清除所有筛选和排序条件</li>
<li>恢复到初始状态</li>
<li>保持页面数据不变</li>
</ul>
<h3 id="🖼️-结果展示" tabindex="-1"><a class="header-anchor" href="#🖼️-结果展示"><span>🖼️ 结果展示</span></a></h3>
<p>搜索结果支持两种展示方式：</p>
<h4 id="🎴-卡片视图" tabindex="-1"><a class="header-anchor" href="#🎴-卡片视图"><span>🎴 卡片视图</span></a></h4>
<p>以卡片形式展示每个种子信息，包含丰富的视觉元素。</p>
<p>展示信息：</p>
<ul>
<li>种子标题</li>
<li>站点图标和名称</li>
<li>文件大小</li>
<li>发布时间</li>
<li>种子热度</li>
<li>下载操作按钮</li>
</ul>
<p>优点：</p>
<ul>
<li>视觉效果好</li>
<li>信息展示直观</li>
<li>适合浏览和选择</li>
</ul>
<h4 id="📊-表格视图" tabindex="-1"><a class="header-anchor" href="#📊-表格视图"><span>📊 表格视图</span></a></h4>
<p>以表格形式展示种子信息，便于比较和查看详细数据。</p>
<p>展示信息：</p>
<ul>
<li>种子标题</li>
<li>站点信息</li>
<li>文件大小</li>
<li>发布时间</li>
<li>种子热度</li>
<li>下载操作按钮</li>
</ul>
<p>优点：</p>
<ul>
<li>信息密度高</li>
<li>便于比较数据</li>
<li>适合精确筛选</li>
</ul>
<h4 id="视图切换" tabindex="-1"><a class="header-anchor" href="#视图切换"><span>视图切换</span></a></h4>
<p>您可以通过页面上的「切换表格」/「切换卡片」按钮在两种视图间自由切换。</p>
<p>使用方法：</p>
<ol>
<li>点击「切换表格」或「切换卡片」按钮</li>
<li>页面会自动切换到对应视图</li>
<li>切换后的视图会保存在本地存储中</li>
</ol>
<p>功能细节：</p>
<ul>
<li>切换视图不会丢失筛选条件</li>
<li>本地存储视图偏好设置</li>
<li>页面刷新后保持上次选择的视图</li>
</ul>
<h3 id="📊-数据统计" tabindex="-1"><a class="header-anchor" href="#📊-数据统计"><span>📊 数据统计</span></a></h3>
<p>页面会显示搜索统计信息：</p>
<ul>
<li>📈 <strong>总记录数</strong>：搜索到的有效记录总数</li>
<li>🔍 <strong>筛选后记录数</strong>：经过筛选条件过滤后的记录数</li>
</ul>
<p>这样您可以清楚了解搜索的范围和筛选效果。</p>
<h2 id="🔄-交互流程" tabindex="-1"><a class="header-anchor" href="#🔄-交互流程"><span>🔄 交互流程</span></a></h2>
<div class="language-mermaid line-numbers-mode" data-highlighter="prismjs" data-ext="mermaid"><pre v-pre><code class="language-mermaid"><span class="line"><span class="token keyword">graph</span> TD</span>
<span class="line">    A<span class="token text string">[进入搜索任务页面]</span> <span class="token arrow operator">--></span> B<span class="token text string">[查看任务列表]</span></span>
<span class="line">    B <span class="token arrow operator">--></span> C<span class="token text string">{需要查看结果?}</span></span>
<span class="line">    C <span class="token arrow operator">--></span><span class="token label property">|是|</span> D<span class="token text string">[点击任务或查看结果按钮]</span></span>
<span class="line">    C <span class="token arrow operator">--></span><span class="token label property">|否|</span> E<span class="token text string">[执行其他操作]</span></span>
<span class="line">    D <span class="token arrow operator">--></span> F<span class="token text string">[进入结果详情页]</span></span>
<span class="line">    F <span class="token arrow operator">--></span> G<span class="token text string">[使用过滤条件筛选]</span></span>
<span class="line">    G <span class="token arrow operator">--></span> H<span class="token text string">{需要切换视图?}</span></span>
<span class="line">    H <span class="token arrow operator">--></span><span class="token label property">|是|</span> I<span class="token text string">[切换卡片/表格视图]</span></span>
<span class="line">    H <span class="token arrow operator">--></span><span class="token label property">|否|</span> J<span class="token text string">[继续浏览结果]</span></span>
<span class="line">    E <span class="token arrow operator">--></span> K<span class="token text string">{需要删除任务?}</span></span>
<span class="line">    K <span class="token arrow operator">--></span><span class="token label property">|是|</span> L<span class="token text string">[删除单个或批量删除]</span></span>
<span class="line">    K <span class="token arrow operator">--></span><span class="token label property">|否|</span> M<span class="token text string">[返回继续浏览]</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>通过以上功能，您可以高效地管理和查看搜索历史，快速找到所需的媒体资源。</p>
</div></template>


