<template><div><h1 id="🎯-种子匹配" tabindex="-1"><a class="header-anchor" href="#🎯-种子匹配"><span>🎯 种子匹配</span></a></h1>
<blockquote>
<p>种子匹配功能用于创建和管理种子匹配规则，通过设置各种条件来筛选符合要求的种子资源。匹配规则可以在过滤规则和排序规则中引用，实现精确的资源控制。</p>
</blockquote>
<hr>
<h2 id="功能概述" tabindex="-1"><a class="header-anchor" href="#功能概述"><span>功能概述</span></a></h2>
<p>种子匹配规则是一套用于评估和筛选种子质量的标准配置，主要用于：</p>
<ul>
<li><strong>资源质量控制</strong>：通过设置体积、做种数等条件控制资源质量</li>
<li><strong>规则复用</strong>：匹配规则可以在过滤规则和排序规则中被引用</li>
<li><strong>精准筛选</strong>：支持多维度条件组合，实现精确的资源匹配</li>
</ul>
<hr>
<h2 id="规则列表" tabindex="-1"><a class="header-anchor" href="#规则列表"><span>规则列表</span></a></h2>
<h3 id="桌面端视图" tabindex="-1"><a class="header-anchor" href="#桌面端视图"><span>桌面端视图</span></a></h3>
<p>在桌面端，种子匹配规则以表格形式展示，包含以下列：</p>
<ul>
<li><strong>规则名称</strong>：用户自定义的规则名称</li>
<li><strong>HR</strong>：是否包含HR资源的标识</li>
<li><strong>促销</strong>：适用的促销类型（免费、普通等）</li>
<li><strong>最少做种数</strong>：要求的最小做种人数</li>
<li><strong>最大做种数</strong>：允许的最大做种人数</li>
<li><strong>电影体积范围(GB)</strong>：电影资源的体积限制</li>
<li><strong>电视剧体积范围(GB)</strong>：电视剧资源的体积限制</li>
<li><strong>操作</strong>：复制、编辑、删除等操作按钮</li>
</ul>
<h3 id="移动端视图" tabindex="-1"><a class="header-anchor" href="#移动端视图"><span>移动端视图</span></a></h3>
<p>在移动端，规则以卡片形式展示，显示关键信息：</p>
<ul>
<li>规则名称</li>
<li>HR状态标识</li>
<li>促销类型</li>
<li>做种数范围</li>
<li>电影和电视剧体积限制</li>
</ul>
<h3 id="空状态" tabindex="-1"><a class="header-anchor" href="#空状态"><span>空状态</span></a></h3>
<p>如果系统中还没有创建任何种子匹配规则，页面会显示提示信息&quot;您还未添加种子匹配规则!&quot;。</p>
<hr>
<h2 id="规则操作" tabindex="-1"><a class="header-anchor" href="#规则操作"><span>规则操作</span></a></h2>
<h3 id="添加规则" tabindex="-1"><a class="header-anchor" href="#添加规则"><span>添加规则</span></a></h3>
<p>点击页面右上角的&quot;添加种子匹配&quot;按钮可以创建新的匹配规则。</p>
<h3 id="编辑规则" tabindex="-1"><a class="header-anchor" href="#编辑规则"><span>编辑规则</span></a></h3>
<ul>
<li><strong>桌面端</strong>：点击表格中的编辑按钮</li>
<li><strong>移动端</strong>：点击卡片或使用更多操作菜单</li>
</ul>
<h3 id="复制规则" tabindex="-1"><a class="header-anchor" href="#复制规则"><span>复制规则</span></a></h3>
<p>点击复制按钮可以基于现有规则创建副本，便于快速创建相似规则。</p>
<h3 id="删除规则" tabindex="-1"><a class="header-anchor" href="#删除规则"><span>删除规则</span></a></h3>
<p>点击删除按钮可以移除不需要的规则，删除前会有确认提示。</p>
<h3 id="刷新列表" tabindex="-1"><a class="header-anchor" href="#刷新列表"><span>刷新列表</span></a></h3>
<p>点击刷新按钮可以重新加载规则列表。</p>
<hr>
<h2 id="规则配置" tabindex="-1"><a class="header-anchor" href="#规则配置"><span>规则配置</span></a></h2>
<p>创建或编辑种子匹配规则时，需要配置以下参数：</p>
<h3 id="基本信息" tabindex="-1"><a class="header-anchor" href="#基本信息"><span>基本信息</span></a></h3>
<h4 id="规则名称" tabindex="-1"><a class="header-anchor" href="#规则名称"><span>规则名称</span></a></h4>
<p><strong>说明：</strong> 种子匹配规则的名称，用于标识和区分不同的规则</p>
<p><strong>要求：</strong> 必填项</p>
<p><strong>示例：</strong> <code v-pre>高质量4K影片</code>、<code v-pre>热门剧集匹配</code></p>
<h3 id="hr设置" tabindex="-1"><a class="header-anchor" href="#hr设置"><span>HR设置</span></a></h3>
<h4 id="是否包含hr" tabindex="-1"><a class="header-anchor" href="#是否包含hr"><span>是否包含HR</span></a></h4>
<p><strong>说明：</strong> 设置是否要求HR（High Resolution）资源</p>
<p><strong>选项：</strong></p>
<ul>
<li>✅ 勾选：仅匹配HR资源</li>
<li>❌ 不勾选：不特别要求HR资源</li>
</ul>
<p><strong>操作建议：</strong> HR资源通常质量更高，但对上传量有要求</p>
<h3 id="做种数限制" tabindex="-1"><a class="header-anchor" href="#做种数限制"><span>做种数限制</span></a></h3>
<h4 id="最少做种数" tabindex="-1"><a class="header-anchor" href="#最少做种数"><span>最少做种数</span></a></h4>
<p><strong>说明：</strong> 要求种子的最少做种人数</p>
<p><strong>范围：</strong> 0及以上的整数</p>
<p><strong>默认值：</strong> 0（不限制）</p>
<p><strong>操作建议：</strong> 设置合适的最少做种数可以确保下载速度</p>
<h4 id="最大做种数" tabindex="-1"><a class="header-anchor" href="#最大做种数"><span>最大做种数</span></a></h4>
<p><strong>说明：</strong> 允许的最大做种人数</p>
<p><strong>范围：</strong> 0及以上的整数</p>
<p><strong>默认值：</strong> 0（不限制）</p>
<p><strong>操作建议：</strong> 限制最大做种数可以避免过热资源，节约下载流量</p>
<h3 id="促销设置" tabindex="-1"><a class="header-anchor" href="#促销设置"><span>促销设置</span></a></h3>
<h4 id="促销类型" tabindex="-1"><a class="header-anchor" href="#促销类型"><span>促销类型</span></a></h4>
<p><strong>说明：</strong> 种子的促销状态要求</p>
<p><strong>选项：</strong> 根据系统配置提供，通常包括：</p>
<ul>
<li><strong>免费</strong>：下载不计流量</li>
<li><strong>普通</strong>：正常计流量（包含免费资源）</li>
<li><strong>其他促销类型</strong>：如50%off等</li>
</ul>
<p><strong>操作建议：</strong> 选择合适的促销类型可以节约下载流量</p>
<h3 id="体积限制" tabindex="-1"><a class="header-anchor" href="#体积限制"><span>体积限制</span></a></h3>
<h4 id="电影体积设置" tabindex="-1"><a class="header-anchor" href="#电影体积设置"><span>电影体积设置</span></a></h4>
<h5 id="电影最小体积-gb" tabindex="-1"><a class="header-anchor" href="#电影最小体积-gb"><span>电影最小体积(GB)</span></a></h5>
<p><strong>说明：</strong> 电影资源的最小体积限制</p>
<p><strong>范围：</strong> 0及以上的数值，支持小数</p>
<p><strong>默认值：</strong> 0（不限制）</p>
<p><strong>操作建议：</strong> 设置最小体积可以过滤低质量资源</p>
<h5 id="电影最大体积-gb" tabindex="-1"><a class="header-anchor" href="#电影最大体积-gb"><span>电影最大体积(GB)</span></a></h5>
<p><strong>说明：</strong> 电影资源的最大体积限制</p>
<p><strong>范围：</strong> 0及以上的数值，支持小数</p>
<p><strong>默认值：</strong> 0（不限制）</p>
<p><strong>操作建议：</strong> 设置最大体积可以控制存储空间使用</p>
<h4 id="电视剧体积设置" tabindex="-1"><a class="header-anchor" href="#电视剧体积设置"><span>电视剧体积设置</span></a></h4>
<h5 id="电视剧最小体积-gb" tabindex="-1"><a class="header-anchor" href="#电视剧最小体积-gb"><span>电视剧最小体积(GB)</span></a></h5>
<p><strong>说明：</strong> 电视剧资源的最小体积限制</p>
<p><strong>范围：</strong> 0及以上的数值，支持小数</p>
<p><strong>默认值：</strong> 0（不限制）</p>
<p><strong>操作建议：</strong> 电视剧按集计算，体积要求通常较低</p>
<h5 id="电视剧最大体积-gb" tabindex="-1"><a class="header-anchor" href="#电视剧最大体积-gb"><span>电视剧最大体积(GB)</span></a></h5>
<p><strong>说明：</strong> 电视剧资源的最大体积限制</p>
<p><strong>范围：</strong> 0及以上的数值，支持小数</p>
<p><strong>默认值：</strong> 0（不限制）</p>
<p><strong>操作建议：</strong> 控制单集或整季的体积上限</p>
<h3 id="编码和质量规则" tabindex="-1"><a class="header-anchor" href="#编码和质量规则"><span>编码和质量规则</span></a></h3>
<h4 id="分辨率规则" tabindex="-1"><a class="header-anchor" href="#分辨率规则"><span>分辨率规则</span></a></h4>
<p><strong>说明：</strong> 对视频分辨率的要求，支持多选</p>
<p><strong>选项：</strong> 如1080p、4K、720p等</p>
<p><strong>匹配逻辑：</strong> 其中一项满足条件即生效</p>
<h4 id="质量规则" tabindex="-1"><a class="header-anchor" href="#质量规则"><span>质量规则</span></a></h4>
<p><strong>说明：</strong> 对视频质量/来源的要求，支持多选</p>
<p><strong>选项：</strong> 如BluRay、WEB-DL、HDTV等</p>
<p><strong>匹配逻辑：</strong> 其中一项满足条件即生效</p>
<h4 id="视频编码规则" tabindex="-1"><a class="header-anchor" href="#视频编码规则"><span>视频编码规则</span></a></h4>
<p><strong>说明：</strong> 对视频编码格式的要求，支持多选</p>
<p><strong>选项：</strong> 如H.264、H.265、x264、x265等</p>
<p><strong>匹配逻辑：</strong> 其中一项满足条件即生效</p>
<h4 id="音频编码规则" tabindex="-1"><a class="header-anchor" href="#音频编码规则"><span>音频编码规则</span></a></h4>
<p><strong>说明：</strong> 对音频编码格式的要求，支持多选</p>
<p><strong>选项：</strong> 如AAC、DTS、AC3、FLAC等</p>
<p><strong>匹配逻辑：</strong> 其中一项满足条件即生效</p>
<h3 id="语言和制作组" tabindex="-1"><a class="header-anchor" href="#语言和制作组"><span>语言和制作组</span></a></h3>
<h4 id="语言规则" tabindex="-1"><a class="header-anchor" href="#语言规则"><span>语言规则</span></a></h4>
<p><strong>说明：</strong> 对音频或字幕语言的要求，支持多选</p>
<p><strong>选项：</strong> 如国语、英语、日语等</p>
<p><strong>匹配逻辑：</strong> 其中一项满足条件即生效</p>
<h4 id="制作组规则" tabindex="-1"><a class="header-anchor" href="#制作组规则"><span>制作组规则</span></a></h4>
<p><strong>说明：</strong> 对发布制作组的要求，支持多选</p>
<p><strong>选项：</strong> 系统识别的制作组列表</p>
<p><strong>匹配逻辑：</strong> 其中一项满足条件即生效</p>
<h3 id="高级规则" tabindex="-1"><a class="header-anchor" href="#高级规则"><span>高级规则</span></a></h3>
<h4 id="附加规则-全匹配" tabindex="-1"><a class="header-anchor" href="#附加规则-全匹配"><span>附加规则(全匹配)</span></a></h4>
<p><strong>说明：</strong> 需要全部满足的附加条件</p>
<p><strong>选项：</strong> 如字幕、特效、导演剪辑版等</p>
<p><strong>匹配逻辑：</strong> 所有勾选的项目都必须包含才生效</p>
<p><strong>注意：</strong> 与其他规则不同，这里是全匹配模式</p>
<h4 id="正则表达式" tabindex="-1"><a class="header-anchor" href="#正则表达式"><span>正则表达式</span></a></h4>
<p><strong>说明：</strong> 对种子标题和副标题的正则表达式匹配</p>
<p><strong>格式：</strong> 标准正则表达式语法</p>
<p><strong>应用范围：</strong> 种子的标题和副标题字段</p>
<p><strong>示例：</strong></p>
<ul>
<li><code v-pre>.*4K.*</code> - 匹配包含&quot;4K&quot;的标题</li>
<li><code v-pre>S\d{2}E\d{2}</code> - 匹配剧集格式S01E01</li>
</ul>
<hr>
<h2 id="使用场景" tabindex="-1"><a class="header-anchor" href="#使用场景"><span>使用场景</span></a></h2>
<h3 id="质量控制" tabindex="-1"><a class="header-anchor" href="#质量控制"><span>质量控制</span></a></h3>
<p>创建不同质量等级的匹配规则，如：</p>
<ul>
<li><strong>高质量规则</strong>：4K分辨率 + H.265编码 + 大体积</li>
<li><strong>标准规则</strong>：1080p分辨率 + 适中体积</li>
<li><strong>快速规则</strong>：较小体积 + 高做种数</li>
</ul>
<h3 id="资源类型区分" tabindex="-1"><a class="header-anchor" href="#资源类型区分"><span>资源类型区分</span></a></h3>
<p>针对不同媒体类型创建专门规则：</p>
<ul>
<li><strong>电影规则</strong>：设置电影体积范围</li>
<li><strong>剧集规则</strong>：设置电视剧体积范围</li>
<li><strong>纪录片规则</strong>：特定制作组和质量要求</li>
</ul>
<h3 id="流量控制" tabindex="-1"><a class="header-anchor" href="#流量控制"><span>流量控制</span></a></h3>
<p>根据网络情况创建规则：</p>
<ul>
<li><strong>免费优先</strong>：仅匹配免费资源</li>
<li><strong>小体积</strong>：限制最大体积节约流量</li>
<li><strong>热门资源</strong>：高做种数保证下载速度</li>
</ul>
<hr>
<h2 id="注意事项" tabindex="-1"><a class="header-anchor" href="#注意事项"><span>注意事项</span></a></h2>
<ol>
<li><strong>规则优先级</strong>：在过滤规则和排序规则中引用时，匹配规则作为条件之一参与评估</li>
<li><strong>数值限制</strong>：体积设置为0表示不限制，做种数设置为0表示不限制</li>
<li><strong>多选逻辑</strong>：除附加规则外，其他多选项目均为&quot;或&quot;关系，任一满足即可</li>
<li><strong>正则表达式</strong>：需要遵循标准正则语法，错误的表达式可能导致匹配失败</li>
<li><strong>规则引用</strong>：删除被引用的匹配规则前，需要先解除相关引用关系</li>
</ol>
<hr>
<h2 id="相关文档" tabindex="-1"><a class="header-anchor" href="#相关文档"><span>相关文档</span></a></h2>
<ul>
<li><RouteLink to="/docs/system_settings/filter_rules/">过滤规则</RouteLink> - 了解如何使用种子匹配规则进行过滤</li>
<li><RouteLink to="/docs/system_settings/torrent_sort/">种子排序</RouteLink> - 了解如何在排序中使用匹配规则</li>
<li><RouteLink to="/docs/system_settings/basic_settings/">基础设置</RouteLink> - 配置默认过滤和排序规则</li>
</ul>
<hr>
</div></template>


