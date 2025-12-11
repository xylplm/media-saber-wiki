<template><div><h1 id="📊-种子排序" tabindex="-1"><a class="header-anchor" href="#📊-种子排序"><span>📊 种子排序</span></a></h1>
<blockquote>
<p>种子排序功能用于创建和管理种子排序规则，通过配置不同维度的权重来控制种子的排序优先级。系统支持内置排序规则和自定义排序规则，满足不同用户的个性化需求。</p>
</blockquote>
<hr>
<h2 id="功能概述" tabindex="-1"><a class="header-anchor" href="#功能概述"><span>功能概述</span></a></h2>
<p>种子排序规则是一套基于权重的排序算法，主要用于：</p>
<ul>
<li><strong>智能排序</strong>：根据多个维度的权重计算综合评分</li>
<li><strong>个性化配置</strong>：用户可以根据需求调整各项权重</li>
<li><strong>场景适配</strong>：不同场景可以使用不同的排序策略</li>
<li><strong>质量优化</strong>：优先选择高质量、高可用性的资源</li>
</ul>
<hr>
<h2 id="规则列表" tabindex="-1"><a class="header-anchor" href="#规则列表"><span>规则列表</span></a></h2>
<h3 id="桌面端视图" tabindex="-1"><a class="header-anchor" href="#桌面端视图"><span>桌面端视图</span></a></h3>
<p>在桌面端，种子排序规则以表格形式展示，包含以下列：</p>
<ul>
<li><strong>规则名称</strong>：用户自定义的规则名称，内置规则会显示&quot;内置&quot;标识</li>
<li><strong>权重配置</strong>：以标签形式显示各项权重设置</li>
<li><strong>备注</strong>：规则的详细说明</li>
<li><strong>操作</strong>：复制、编辑、删除等操作按钮</li>
</ul>
<h3 id="移动端视图" tabindex="-1"><a class="header-anchor" href="#移动端视图"><span>移动端视图</span></a></h3>
<p>在移动端，规则以卡片形式展示，显示：</p>
<ul>
<li>规则名称和内置标识</li>
<li>权重配置标签列表</li>
<li>备注信息</li>
</ul>
<h3 id="权重配置标签" tabindex="-1"><a class="header-anchor" href="#权重配置标签"><span>权重配置标签</span></a></h3>
<p>权重配置以彩色标签形式展示，包括：</p>
<ul>
<li><strong>季集顺序</strong>：电视剧按季集顺序的权重</li>
<li><strong>做种</strong>：做种人数的权重</li>
<li><strong>促销</strong>：促销状态的权重</li>
<li><strong>站点</strong>：站点优先级的权重</li>
<li><strong>分辨率</strong>：视频分辨率的权重</li>
<li><strong>体积</strong>：文件大小的权重</li>
<li><strong>匹配规则</strong>：种子匹配规则的权重</li>
</ul>
<h3 id="空状态" tabindex="-1"><a class="header-anchor" href="#空状态"><span>空状态</span></a></h3>
<p>如果系统中还没有创建任何种子排序规则，页面会显示提示信息&quot;您还未添加种子排序规则!&quot;。</p>
<hr>
<h2 id="规则类型" tabindex="-1"><a class="header-anchor" href="#规则类型"><span>规则类型</span></a></h2>
<h3 id="内置规则" tabindex="-1"><a class="header-anchor" href="#内置规则"><span>内置规则</span></a></h3>
<p>系统提供内置的排序规则，具有以下特点：</p>
<ul>
<li><strong>不可编辑</strong>：内置规则无法修改或删除</li>
<li><strong>可复制</strong>：可以复制内置规则创建自定义版本</li>
<li><strong>标识明确</strong>：带有&quot;内置&quot;标识</li>
<li><strong>默认推荐</strong>：经过优化的推荐配置</li>
</ul>
<h3 id="自定义规则" tabindex="-1"><a class="header-anchor" href="#自定义规则"><span>自定义规则</span></a></h3>
<p>用户创建的自定义规则，具有以下特点：</p>
<ul>
<li><strong>完全可控</strong>：可以编辑、删除</li>
<li><strong>个性化</strong>：根据个人需求定制权重</li>
<li><strong>可复制</strong>：便于创建变体规则</li>
<li><strong>灵活配置</strong>：支持所有权重项目的调整</li>
</ul>
<hr>
<h2 id="规则操作" tabindex="-1"><a class="header-anchor" href="#规则操作"><span>规则操作</span></a></h2>
<h3 id="添加规则" tabindex="-1"><a class="header-anchor" href="#添加规则"><span>添加规则</span></a></h3>
<p>点击页面右上角的&quot;添加种子排序&quot;按钮可以创建新的排序规则。</p>
<h3 id="编辑规则" tabindex="-1"><a class="header-anchor" href="#编辑规则"><span>编辑规则</span></a></h3>
<ul>
<li><strong>内置规则</strong>：只能复制，无法直接编辑</li>
<li><strong>自定义规则</strong>：点击编辑按钮进行修改</li>
</ul>
<h3 id="复制规则" tabindex="-1"><a class="header-anchor" href="#复制规则"><span>复制规则</span></a></h3>
<p>点击复制按钮可以基于现有规则创建副本：</p>
<ul>
<li><strong>内置规则复制</strong>：创建可编辑的自定义版本</li>
<li><strong>自定义规则复制</strong>：创建备份或变体</li>
</ul>
<h3 id="删除规则" tabindex="-1"><a class="header-anchor" href="#删除规则"><span>删除规则</span></a></h3>
<ul>
<li><strong>内置规则</strong>：无法删除</li>
<li><strong>自定义规则</strong>：点击删除按钮移除，删除前会有确认提示</li>
</ul>
<h3 id="刷新列表" tabindex="-1"><a class="header-anchor" href="#刷新列表"><span>刷新列表</span></a></h3>
<p>点击刷新按钮可以重新加载规则列表。</p>
<hr>
<h2 id="权重配置" tabindex="-1"><a class="header-anchor" href="#权重配置"><span>权重配置</span></a></h2>
<p>种子排序规则基于多维度权重计算，每个维度的权重范围为0-1：</p>
<h3 id="权重计算原理" tabindex="-1"><a class="header-anchor" href="#权重计算原理"><span>权重计算原理</span></a></h3>
<ol>
<li><strong>综合评分</strong> = Σ(各项权重 × 对应评分)</li>
<li><strong>权重总和建议</strong>：各项权重相加建议为1.0，以获得最佳排序效果</li>
<li><strong>优先级排序</strong>：综合评分越高，排序越靠前</li>
</ol>
<h3 id="权重配置项" tabindex="-1"><a class="header-anchor" href="#权重配置项"><span>权重配置项</span></a></h3>
<h4 id="季集排序权重" tabindex="-1"><a class="header-anchor" href="#季集排序权重"><span>季集排序权重</span></a></h4>
<p><strong>说明：</strong> 电视剧按季集顺序的优先级权重</p>
<p><strong>范围：</strong> 0.0 - 1.0</p>
<p><strong>应用场景：</strong> 电视剧订阅时优先下载最新季集</p>
<p><strong>计算逻辑：</strong> 越新的季集评分越高</p>
<p><strong>推荐值：</strong> 0.1 - 0.3</p>
<h4 id="做种数权重" tabindex="-1"><a class="header-anchor" href="#做种数权重"><span>做种数权重</span></a></h4>
<p><strong>说明：</strong> 基于做种人数的权重，做种人数越多权重越高</p>
<p><strong>范围：</strong> 0.0 - 1.0</p>
<p><strong>应用场景：</strong> 保证下载速度和资源可用性</p>
<p><strong>计算逻辑：</strong> 做种人数越多评分越高</p>
<p><strong>推荐值：</strong> 0.2 - 0.4</p>
<h4 id="下载因子权重" tabindex="-1"><a class="header-anchor" href="#下载因子权重"><span>下载因子权重</span></a></h4>
<p><strong>说明：</strong> 基于促销状态的权重，促销种子优先级更高</p>
<p><strong>范围：</strong> 0.0 - 1.0</p>
<p><strong>应用场景：</strong> 节约下载流量，优先选择免费资源</p>
<p><strong>计算逻辑：</strong> 免费 &gt; 50%off &gt; 普通</p>
<p><strong>推荐值：</strong> 0.1 - 0.3</p>
<h4 id="站点优先级权重" tabindex="-1"><a class="header-anchor" href="#站点优先级权重"><span>站点优先级权重</span></a></h4>
<p><strong>说明：</strong> 基于站点优先级的权重</p>
<p><strong>范围：</strong> 0.0 - 1.0</p>
<p><strong>应用场景：</strong> 优先选择高质量站点的资源</p>
<p><strong>计算逻辑：</strong> 根据站点设置的优先级评分</p>
<p><strong>推荐值：</strong> 0.1 - 0.2</p>
<h4 id="bt资源权重" tabindex="-1"><a class="header-anchor" href="#bt资源权重"><span>BT资源权重</span></a></h4>
<p><strong>说明：</strong> BT资源类型的优先级权重</p>
<p><strong>范围：</strong> 0.0 - 1.0</p>
<p><strong>应用场景：</strong> 区分BT资源和网盘资源</p>
<p><strong>计算逻辑：</strong> BT资源获得额外权重</p>
<p><strong>推荐值：</strong> 0.1 - 0.2</p>
<h4 id="体积权重" tabindex="-1"><a class="header-anchor" href="#体积权重"><span>体积权重</span></a></h4>
<p><strong>说明：</strong> 基于文件大小的权重</p>
<p><strong>范围：</strong> 0.0 - 1.0</p>
<p><strong>应用场景：</strong> 根据存储情况选择合适体积的资源</p>
<p><strong>计算逻辑：</strong> 可配置为大体积优先或小体积优先</p>
<p><strong>推荐值：</strong> 0.1 - 0.2</p>
<h4 id="发布时间权重" tabindex="-1"><a class="header-anchor" href="#发布时间权重"><span>发布时间权重</span></a></h4>
<p><strong>说明：</strong> 基于种子发布时间的权重，发布时间越新权重越高</p>
<p><strong>范围：</strong> 0.0 - 1.0</p>
<p><strong>应用场景：</strong> 优先选择最新发布的资源</p>
<p><strong>计算逻辑：</strong> 发布时间越近评分越高</p>
<p><strong>推荐值：</strong> 0.1 - 0.2</p>
<h4 id="分辨率权重" tabindex="-1"><a class="header-anchor" href="#分辨率权重"><span>分辨率权重</span></a></h4>
<p><strong>说明：</strong> 基于视频分辨率的权重</p>
<p><strong>范围：</strong> 0.0 - 1.0</p>
<p><strong>应用场景：</strong> 根据画质需求选择合适分辨率</p>
<p><strong>计算逻辑：</strong> 4K &gt; 1080p &gt; 720p</p>
<p><strong>推荐值：</strong> 0.1 - 0.3</p>
<h4 id="匹配规则权重" tabindex="-1"><a class="header-anchor" href="#匹配规则权重"><span>匹配规则权重</span></a></h4>
<p><strong>说明：</strong> 基于种子匹配规则的权重，匹配成功时获得额外评分</p>
<p><strong>范围：</strong> 0.0 - 1.0</p>
<p><strong>关联设置：</strong> 需要先选择对应的种子匹配规则</p>
<p><strong>应用场景：</strong> 奖励符合特定条件的种子</p>
<p><strong>计算逻辑：</strong> 匹配成功时获得设定的权重分数</p>
<p><strong>推荐值：</strong> 0.1 - 0.5</p>
<hr>
<h2 id="规则配置" tabindex="-1"><a class="header-anchor" href="#规则配置"><span>规则配置</span></a></h2>
<p>创建或编辑种子排序规则时，需要配置以下参数：</p>
<h3 id="基本信息" tabindex="-1"><a class="header-anchor" href="#基本信息"><span>基本信息</span></a></h3>
<h4 id="规则名称" tabindex="-1"><a class="header-anchor" href="#规则名称"><span>规则名称</span></a></h4>
<p><strong>说明：</strong> 种子排序规则的名称，用于标识和区分不同的规则</p>
<p><strong>要求：</strong> 必填项</p>
<p><strong>示例：</strong> <code v-pre>高质量优先</code>、<code v-pre>免费资源优先</code>、<code v-pre>速度优先</code></p>
<h4 id="备注" tabindex="-1"><a class="header-anchor" href="#备注"><span>备注</span></a></h4>
<p><strong>说明：</strong> 规则的详细说明和使用场景描述</p>
<p><strong>要求：</strong> 可选项</p>
<p><strong>示例：</strong> <code v-pre>适合追求高画质的用户</code>、<code v-pre>适合流量有限的用户</code></p>
<h3 id="权重分配策略" tabindex="-1"><a class="header-anchor" href="#权重分配策略"><span>权重分配策略</span></a></h3>
<h4 id="均衡配置" tabindex="-1"><a class="header-anchor" href="#均衡配置"><span>均衡配置</span></a></h4>
<p>各项权重平均分配，适合一般用户：</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code class="language-text"><span class="line">做种数: 0.3</span>
<span class="line">促销: 0.2</span>
<span class="line">分辨率: 0.2</span>
<span class="line">站点: 0.1</span>
<span class="line">发布时间: 0.1</span>
<span class="line">体积: 0.1</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="质量优先配置" tabindex="-1"><a class="header-anchor" href="#质量优先配置"><span>质量优先配置</span></a></h4>
<p>注重资源质量和画质：</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code class="language-text"><span class="line">分辨率: 0.4</span>
<span class="line">做种数: 0.3</span>
<span class="line">站点: 0.2</span>
<span class="line">匹配规则: 0.1</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="速度优先配置" tabindex="-1"><a class="header-anchor" href="#速度优先配置"><span>速度优先配置</span></a></h4>
<p>注重下载速度和可用性：</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code class="language-text"><span class="line">做种数: 0.5</span>
<span class="line">促销: 0.3</span>
<span class="line">发布时间: 0.2</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="流量节约配置" tabindex="-1"><a class="header-anchor" href="#流量节约配置"><span>流量节约配置</span></a></h4>
<p>注重节约下载流量：</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code class="language-text"><span class="line">促销: 0.4</span>
<span class="line">体积: 0.3</span>
<span class="line">做种数: 0.2</span>
<span class="line">站点: 0.1</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="匹配规则关联" tabindex="-1"><a class="header-anchor" href="#匹配规则关联"><span>匹配规则关联</span></a></h3>
<h4 id="选择匹配规则" tabindex="-1"><a class="header-anchor" href="#选择匹配规则"><span>选择匹配规则</span></a></h4>
<p><strong>说明：</strong> 选择要关联的种子匹配规则</p>
<p><strong>选项：</strong> 系统中已创建的种子匹配规则列表</p>
<p><strong>要求：</strong> 可选项，选择&quot;无&quot;表示不使用匹配规则</p>
<h4 id="匹配规则权重-1" tabindex="-1"><a class="header-anchor" href="#匹配规则权重-1"><span>匹配规则权重</span></a></h4>
<p><strong>说明：</strong> 当种子符合匹配规则时获得的权重分数</p>
<p><strong>范围：</strong> 0.0 - 1.0</p>
<p><strong>计算逻辑：</strong> 匹配成功时直接加上此权重分数</p>
<hr>
<h2 id="权重总和检查" tabindex="-1"><a class="header-anchor" href="#权重总和检查"><span>权重总和检查</span></a></h2>
<p>系统提供实时的权重总和计算和建议：</p>
<h3 id="权重总和显示" tabindex="-1"><a class="header-anchor" href="#权重总和显示"><span>权重总和显示</span></a></h3>
<p>在编辑界面底部显示当前配置的权重总和。</p>
<h3 id="超标警告" tabindex="-1"><a class="header-anchor" href="#超标警告"><span>超标警告</span></a></h3>
<p>当权重总和超过1.1时，系统会显示警告：</p>
<blockquote>
<p>⚠️ 建议权重总和不超过1.0</p>
</blockquote>
<h3 id="最佳实践" tabindex="-1"><a class="header-anchor" href="#最佳实践"><span>最佳实践</span></a></h3>
<ul>
<li><strong>总和为1.0</strong>：最佳配置，各维度权重均衡</li>
<li><strong>总和小于1.0</strong>：保守配置，可能排序效果不够明显</li>
<li><strong>总和大于1.0</strong>：激进配置，某些资源可能获得过高评分</li>
</ul>
<hr>
<h2 id="使用场景" tabindex="-1"><a class="header-anchor" href="#使用场景"><span>使用场景</span></a></h2>
<h3 id="不同用户类型" tabindex="-1"><a class="header-anchor" href="#不同用户类型"><span>不同用户类型</span></a></h3>
<h4 id="普通用户" tabindex="-1"><a class="header-anchor" href="#普通用户"><span>普通用户</span></a></h4>
<ul>
<li><strong>均衡配置</strong>：各项权重平均分配</li>
<li><strong>关注点</strong>：下载速度和资源质量的平衡</li>
<li><strong>推荐规则</strong>：系统内置的默认规则</li>
</ul>
<h4 id="高质量用户" tabindex="-1"><a class="header-anchor" href="#高质量用户"><span>高质量用户</span></a></h4>
<ul>
<li><strong>质量优先</strong>：分辨率和匹配规则权重较高</li>
<li><strong>关注点</strong>：4K、蓝光原盘等高质量资源</li>
<li><strong>推荐配置</strong>：分辨率权重0.4，匹配规则权重0.3</li>
</ul>
<h4 id="流量受限用户" tabindex="-1"><a class="header-anchor" href="#流量受限用户"><span>流量受限用户</span></a></h4>
<ul>
<li><strong>促销优先</strong>：促销和体积权重较高</li>
<li><strong>关注点</strong>：免费资源和合适体积</li>
<li><strong>推荐配置</strong>：促销权重0.4，体积权重0.3</li>
</ul>
<h3 id="不同内容类型" tabindex="-1"><a class="header-anchor" href="#不同内容类型"><span>不同内容类型</span></a></h3>
<h4 id="电影排序" tabindex="-1"><a class="header-anchor" href="#电影排序"><span>电影排序</span></a></h4>
<ul>
<li><strong>体积权重较高</strong>：单个文件体积控制</li>
<li><strong>分辨率权重较高</strong>：注重画质</li>
<li><strong>季集排序权重为0</strong>：电影无季集概念</li>
</ul>
<h4 id="电视剧排序" tabindex="-1"><a class="header-anchor" href="#电视剧排序"><span>电视剧排序</span></a></h4>
<ul>
<li><strong>季集排序权重较高</strong>：按顺序下载</li>
<li><strong>做种数权重较高</strong>：保证持续更新的可用性</li>
<li><strong>体积权重适中</strong>：控制单集体积</li>
</ul>
<h4 id="纪录片排序" tabindex="-1"><a class="header-anchor" href="#纪录片排序"><span>纪录片排序</span></a></h4>
<ul>
<li><strong>匹配规则权重较高</strong>：特定制作组和质量要求</li>
<li><strong>分辨率权重较高</strong>：纪录片注重画质</li>
<li><strong>发布时间权重适中</strong>：不强求最新</li>
</ul>
<hr>
<h2 id="注意事项" tabindex="-1"><a class="header-anchor" href="#注意事项"><span>注意事项</span></a></h2>
<ol>
<li><strong>权重平衡</strong>：建议权重总和不超过1.0，避免评分过高</li>
<li><strong>场景适配</strong>：不同使用场景应该使用不同的排序规则</li>
<li><strong>规则测试</strong>：创建新规则后建议先测试效果再正式使用</li>
<li><strong>内置规则</strong>：系统内置规则经过优化，建议优先使用</li>
<li><strong>匹配规则依赖</strong>：使用匹配规则权重前需要先创建对应的匹配规则</li>
<li><strong>权重调优</strong>：可以根据实际使用效果逐步调整各项权重</li>
</ol>
<hr>
<h2 id="相关文档" tabindex="-1"><a class="header-anchor" href="#相关文档"><span>相关文档</span></a></h2>
<ul>
<li><RouteLink to="/docs/system_settings/torrent_match/">种子匹配</RouteLink> - 了解如何创建匹配规则供排序使用</li>
<li><RouteLink to="/docs/system_settings/filter_rules/">过滤规则</RouteLink> - 配合排序规则实现精确控制</li>
<li><RouteLink to="/docs/system_settings/basic_settings/">基础设置</RouteLink> - 配置默认排序规则</li>
</ul>
<hr>
</div></template>


