<template><div><h1 id="🔍-过滤规则" tabindex="-1"><a class="header-anchor" href="#🔍-过滤规则"><span>🔍 过滤规则</span></a></h1>
<blockquote>
<p>过滤规则功能允许用户创建和管理种子过滤规则，用于在搜索和订阅过程中筛选符合要求的资源。通过灵活配置各种过滤条件，可以精确控制哪些资源应该被下载，哪些应该被忽略。支持规则组管理、导入导出和分享功能。</p>
</blockquote>
<hr>
<h2 id="过滤规则组" tabindex="-1"><a class="header-anchor" href="#过滤规则组"><span>过滤规则组</span></a></h2>
<p>过滤规则组是过滤规则的基本组织单位，也是分享和使用的基本单位。系统采用可折叠面板的方式组织规则组。</p>
<h3 id="规则组列表" tabindex="-1"><a class="header-anchor" href="#规则组列表"><span>规则组列表</span></a></h3>
<p>在过滤规则页面，系统会显示所有已创建的规则组，每个规则组以可折叠面板的形式展示：</p>
<ul>
<li><strong>规则组名称</strong>：用户自定义的规则组名称</li>
<li><strong>面板控制</strong>：展开/收缩按钮控制规则组内容的显示</li>
<li><strong>操作区域</strong>：包含添加规则、更多操作等功能按钮</li>
</ul>
<p>如果系统中还没有创建任何规则组，页面会显示提示信息&quot;您还未添加过滤规则组！&quot;。</p>
<h3 id="规则组头部操作" tabindex="-1"><a class="header-anchor" href="#规则组头部操作"><span>规则组头部操作</span></a></h3>
<h4 id="页面级操作" tabindex="-1"><a class="header-anchor" href="#页面级操作"><span>页面级操作</span></a></h4>
<p>位于页面右上角的操作按钮：</p>
<ul>
<li><strong>新增规则组(+)</strong>：创建新的过滤规则组</li>
<li><strong>刷新</strong>：重新加载规则组列表</li>
<li><strong>导入</strong>：导入其他用户分享的规则组</li>
</ul>
<h4 id="规则组级操作" tabindex="-1"><a class="header-anchor" href="#规则组级操作"><span>规则组级操作</span></a></h4>
<p>每个规则组头部的操作按钮：</p>
<ul>
<li><strong>添加过滤规则(+)</strong>：为当前规则组添加新的过滤规则</li>
<li><strong>更多操作菜单</strong>：包含编辑、分享、复制、删除等操作</li>
<li><strong>展开/收缩</strong>：控制规则组面板的展开状态</li>
</ul>
<h3 id="更多操作菜单" tabindex="-1"><a class="header-anchor" href="#更多操作菜单"><span>更多操作菜单</span></a></h3>
<p>点击规则组的&quot;更多操作&quot;按钮可以执行以下操作：</p>
<h4 id="编辑过滤规则组" tabindex="-1"><a class="header-anchor" href="#编辑过滤规则组"><span>编辑过滤规则组</span></a></h4>
<p>修改规则组的基本信息，如名称等。</p>
<h4 id="分享过滤规则组" tabindex="-1"><a class="header-anchor" href="#分享过滤规则组"><span>分享过滤规则组</span></a></h4>
<p>生成规则组的分享代码，包含以下信息：</p>
<ul>
<li>规则组配置</li>
<li>包含的所有过滤规则</li>
<li>可供他人导入使用</li>
</ul>
<h4 id="复制过滤规则组" tabindex="-1"><a class="header-anchor" href="#复制过滤规则组"><span>复制过滤规则组</span></a></h4>
<p>创建当前规则组的完整副本，包括：</p>
<ul>
<li>规则组设置</li>
<li>所有包含的过滤规则</li>
<li>便于创建变体或备份</li>
</ul>
<h4 id="删除过滤规则组" tabindex="-1"><a class="header-anchor" href="#删除过滤规则组"><span>删除过滤规则组</span></a></h4>
<p>移除整个规则组及其包含的所有过滤规则：</p>
<ul>
<li>删除前会有确认提示</li>
<li>删除后无法恢复</li>
<li>相关引用会失效</li>
</ul>
<h2 id="过滤规则" tabindex="-1"><a class="header-anchor" href="#过滤规则"><span>过滤规则</span></a></h2>
<p>每个规则组内可以包含多个过滤规则，规则按显示顺序排列并依次匹配。</p>
<h3 id="规则列表展示" tabindex="-1"><a class="header-anchor" href="#规则列表展示"><span>规则列表展示</span></a></h3>
<p>在展开的规则组中，会显示该组内的所有过滤规则，每个规则以卡片形式展示：</p>
<ul>
<li><strong>显示顺序</strong>：规则的排序编号，显示为绿色徽章</li>
<li><strong>规则名称</strong>：用户自定义的规则名称</li>
<li><strong>过滤类型</strong>：显示规则是包含还是排除类型（蓝色徽章）</li>
<li><strong>种子匹配规则</strong>：显示关联的种子匹配规则（紫色徽章）</li>
<li><strong>操作按钮</strong>：复制和删除按钮</li>
</ul>
<h3 id="规则操作" tabindex="-1"><a class="header-anchor" href="#规则操作"><span>规则操作</span></a></h3>
<h4 id="新增规则" tabindex="-1"><a class="header-anchor" href="#新增规则"><span>新增规则</span></a></h4>
<p>在规则组标题栏点击&quot;+&quot;按钮可以为该组添加新的过滤规则。</p>
<h4 id="编辑规则" tabindex="-1"><a class="header-anchor" href="#编辑规则"><span>编辑规则</span></a></h4>
<p>点击规则卡片可以编辑该规则的所有配置。</p>
<h4 id="复制规则" tabindex="-1"><a class="header-anchor" href="#复制规则"><span>复制规则</span></a></h4>
<p>点击规则卡片右上角的复制按钮可以创建规则的副本。</p>
<h4 id="删除规则" tabindex="-1"><a class="header-anchor" href="#删除规则"><span>删除规则</span></a></h4>
<p>点击规则卡片右上角的删除按钮可以移除该规则。</p>
<h2 id="过滤规则配置项" tabindex="-1"><a class="header-anchor" href="#过滤规则配置项"><span>过滤规则配置项</span></a></h2>
<p>创建或编辑过滤规则时，需要配置以下参数：</p>
<h3 id="基本信息" tabindex="-1"><a class="header-anchor" href="#基本信息"><span>基本信息</span></a></h3>
<h4 id="名称" tabindex="-1"><a class="header-anchor" href="#名称"><span>名称</span></a></h4>
<p><strong>说明：</strong> 过滤规则的名称，用于标识和区分不同的规则</p>
<p><strong>要求：</strong> 必填项</p>
<h4 id="显示顺序" tabindex="-1"><a class="header-anchor" href="#显示顺序"><span>显示顺序</span></a></h4>
<p><strong>说明：</strong> 规则在规则组中的显示顺序，数字越小越靠前</p>
<p><strong>选项：</strong> 1-999之间的整数，默认为自动分配</p>
<h3 id="过滤类型" tabindex="-1"><a class="header-anchor" href="#过滤类型"><span>过滤类型</span></a></h3>
<h4 id="过滤类型选择" tabindex="-1"><a class="header-anchor" href="#过滤类型选择"><span>过滤类型选择</span></a></h4>
<p><strong>说明：</strong> 控制规则是包含还是排除类型</p>
<p><strong>选项：</strong></p>
<ul>
<li><strong>包含</strong>：符合条件的种子会被包含</li>
<li><strong>排除</strong>：符合条件的种子会被排除</li>
</ul>
<h3 id="种子匹配规则" tabindex="-1"><a class="header-anchor" href="#种子匹配规则"><span>种子匹配规则</span></a></h3>
<h4 id="种子匹配规则-1" tabindex="-1"><a class="header-anchor" href="#种子匹配规则-1"><span>种子匹配规则</span></a></h4>
<p><strong>说明：</strong> 关联已创建的种子匹配规则</p>
<p><strong>选项：</strong> 系统中已创建的种子匹配规则列表</p>
<p><strong>作用：</strong> 引用种子匹配规则的条件作为过滤依据</p>
<p><strong>操作建议：</strong> 需要先在&quot;种子匹配&quot;页面创建匹配规则</p>
<h2 id="导入导出功能" tabindex="-1"><a class="header-anchor" href="#导入导出功能"><span>导入导出功能</span></a></h2>
<p>过滤规则组支持导入导出功能，便于用户间分享和备份配置。</p>
<h3 id="导出规则组" tabindex="-1"><a class="header-anchor" href="#导出规则组"><span>导出规则组</span></a></h3>
<h4 id="分享功能" tabindex="-1"><a class="header-anchor" href="#分享功能"><span>分享功能</span></a></h4>
<p>通过&quot;分享过滤规则组&quot;功能可以：</p>
<ol>
<li>生成包含完整规则组信息的文本代码</li>
<li>包含规则组名称和所有过滤规则配置</li>
<li>可以直接分享给其他用户使用</li>
</ol>
<h4 id="分享内容" tabindex="-1"><a class="header-anchor" href="#分享内容"><span>分享内容</span></a></h4>
<p>分享的内容包括：</p>
<ul>
<li>规则组基本信息</li>
<li>所有过滤规则的完整配置</li>
<li>种子匹配规则的引用信息</li>
</ul>
<h3 id="导入规则组" tabindex="-1"><a class="header-anchor" href="#导入规则组"><span>导入规则组</span></a></h3>
<h4 id="导入入口" tabindex="-1"><a class="header-anchor" href="#导入入口"><span>导入入口</span></a></h4>
<p>点击页面右上角的&quot;导入&quot;按钮开始导入过程。</p>
<h4 id="导入步骤" tabindex="-1"><a class="header-anchor" href="#导入步骤"><span>导入步骤</span></a></h4>
<ol>
<li><strong>输入规则组内容</strong>：粘贴完整的导出内容</li>
<li><strong>设置规则组名称</strong>：为导入的规则组指定新名称</li>
<li><strong>确认导入</strong>：系统会验证内容格式并创建规则组</li>
</ol>
<h4 id="导入注意事项" tabindex="-1"><a class="header-anchor" href="#导入注意事项"><span>导入注意事项</span></a></h4>
<ul>
<li>导入的规则组会作为新的规则组创建</li>
<li>如果引用的种子匹配规则不存在，需要手动调整</li>
<li>导入后可以对规则进行编辑和调整</li>
</ul>
<hr>
<h2 id="使用说明" tabindex="-1"><a class="header-anchor" href="#使用说明"><span>使用说明</span></a></h2>
<ol>
<li><strong>规则执行顺序</strong>：过滤规则按显示顺序依次执行</li>
<li><strong>种子匹配规则依赖</strong>：使用种子匹配规则前需要先创建对应的匹配规则</li>
<li><strong>规则组织</strong>：建议按使用场景组织不同的规则组</li>
<li><strong>规则测试</strong>：创建规则后建议先测试效果</li>
<li><strong>分享交流</strong>：可以通过导入导出功能与其他用户交流配置</li>
</ol>
<hr>
<h2 id="相关文档" tabindex="-1"><a class="header-anchor" href="#相关文档"><span>相关文档</span></a></h2>
<ul>
<li><RouteLink to="/docs/system_settings/torrent_match/">种子匹配</RouteLink> - 了解如何创建种子匹配规则</li>
<li><RouteLink to="/docs/system_settings/torrent_sort/">种子排序</RouteLink> - 配合过滤规则实现精确控制</li>
<li><RouteLink to="/docs/system_settings/basic_settings/">基础设置</RouteLink> - 配置默认过滤规则</li>
</ul>
<hr>
</div></template>


