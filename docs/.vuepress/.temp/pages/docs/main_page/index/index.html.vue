<template><div><h1 id="🏠-首页" tabindex="-1"><a class="header-anchor" href="#🏠-首页"><span>🏠 首页</span></a></h1>
<p>MediaSaber 的首页是用户进入系统后的主界面，包含主页面布局和仪表台两大部分。主页面提供了系统的整体框架和导航结构，而仪表台则展示了关键信息和快捷操作。</p>
<h2 id="🖥️-主页面" tabindex="-1"><a class="header-anchor" href="#🖥️-主页面"><span>🖥️ 主页面</span></a></h2>
<p>主页面是 MediaSaber 系统的整体框架，包含顶部导航栏、侧边栏、内容区域等核心组件。</p>
<h3 id="🎯-顶部导航栏" tabindex="-1"><a class="header-anchor" href="#🎯-顶部导航栏"><span>🎯 顶部导航栏</span></a></h3>
<p>位于页面顶部，包含系统核心功能的快捷入口：</p>
<h4 id="🔍-搜索入口" tabindex="-1"><a class="header-anchor" href="#🔍-搜索入口"><span>🔍 搜索入口</span></a></h4>
<ul>
<li><strong>位置</strong>：顶部导航栏左侧</li>
<li><strong>功能</strong>：打开搜索对话框</li>
<li><strong>详情</strong>：<RouteLink to="/docs/search/search/">搜索功能文档</RouteLink></li>
</ul>
<h4 id="📢-消息中心" tabindex="-1"><a class="header-anchor" href="#📢-消息中心"><span>📢 消息中心</span></a></h4>
<ul>
<li><strong>位置</strong>：顶部导航栏右侧（铃铛图标）</li>
<li><strong>功能</strong>：查看系统消息和通知</li>
<li><strong>详情</strong>：<RouteLink to="/docs/main_page/message_center/">消息中心文档</RouteLink></li>
</ul>
<h4 id="📋-系统日志" tabindex="-1"><a class="header-anchor" href="#📋-系统日志"><span>📋 系统日志</span></a></h4>
<ul>
<li><strong>位置</strong>：顶部导航栏右侧（文档图标）</li>
<li><strong>功能</strong>：查看系统运行日志</li>
<li><strong>详情</strong>：<RouteLink to="/docs/main_page/system_log/">系统日志文档</RouteLink></li>
</ul>
<h4 id="📊-业务日志" tabindex="-1"><a class="header-anchor" href="#📊-业务日志"><span>📊 业务日志</span></a></h4>
<ul>
<li><strong>位置</strong>：顶部导航栏右侧（带搜索图标的文档图标）</li>
<li><strong>功能</strong>：查看业务操作日志</li>
<li><strong>详情</strong>：<RouteLink to="/docs/main_page/business_log/">业务日志文档</RouteLink></li>
</ul>
<h4 id="👤-用户信息" tabindex="-1"><a class="header-anchor" href="#👤-用户信息"><span>👤 用户信息</span></a></h4>
<ul>
<li><strong>位置</strong>：顶部导航栏最右侧（用户头像）</li>
<li><strong>功能</strong>：访问用户相关设置和功能</li>
<li><strong>子功能</strong>：
<ul>
<li><RouteLink to="/docs/main_page/my_info/">我的信息</RouteLink></li>
<li><RouteLink to="/docs/main_page/scheduled_tasks/">定时任务</RouteLink></li>
<li>帮助文档</li>
<li>退出登录</li>
</ul>
</li>
</ul>
<h3 id="📋-左侧导航菜单" tabindex="-1"><a class="header-anchor" href="#📋-左侧导航菜单"><span>📋 左侧导航菜单</span></a></h3>
<p>位于页面左侧，提供系统各功能模块的导航：</p>
<h4 id="📁-导航结构" tabindex="-1"><a class="header-anchor" href="#📁-导航结构"><span>📁 导航结构</span></a></h4>
<ul>
<li><strong>仪表台</strong>：系统首页和关键指标展示</li>
<li><strong>搜索</strong>：各种搜索功能入口</li>
<li><strong>订阅</strong>：媒体订阅管理</li>
<li><strong>站点</strong>：站点配置和管理</li>
<li><strong>媒体库</strong>：媒体资源管理</li>
<li><strong>工具</strong>：实用工具集合</li>
<li><strong>系统</strong>：系统配置和管理</li>
</ul>
<h4 id="🎛️-菜单操作" tabindex="-1"><a class="header-anchor" href="#🎛️-菜单操作"><span>🎛️ 菜单操作</span></a></h4>
<ul>
<li><strong>展开/收缩</strong>：通过侧边栏顶部按钮控制</li>
<li><strong>滚动浏览</strong>：支持滚动查看所有菜单项</li>
<li><strong>快速导航</strong>：点击菜单项直接跳转到对应功能页面</li>
</ul>
<h3 id="🎨-右侧功能面板" tabindex="-1"><a class="header-anchor" href="#🎨-右侧功能面板"><span>🎨 右侧功能面板</span></a></h3>
<p>通过顶部导航栏按钮可以打开右侧功能面板：</p>
<h4 id="💬-消息中心面板" tabindex="-1"><a class="header-anchor" href="#💬-消息中心面板"><span>💬 消息中心面板</span></a></h4>
<ul>
<li>通过消息中心按钮打开</li>
<li>实时显示系统消息和通知</li>
<li>支持消息交互和管理</li>
</ul>
<h4 id="⚙️-界面自定义面板" tabindex="-1"><a class="header-anchor" href="#⚙️-界面自定义面板"><span>⚙️ 界面自定义面板</span></a></h4>
<ul>
<li>通过用户头像菜单中的&quot;界面自定义&quot;打开</li>
<li>支持主题、颜色、布局等个性化设置</li>
<li>详情请参考：<RouteLink to="/docs/main_page/ui_customization/">界面自定义文档</RouteLink></li>
</ul>
<h3 id="📱-页面功能按钮" tabindex="-1"><a class="header-anchor" href="#📱-页面功能按钮"><span>📱 页面功能按钮</span></a></h3>
<h4 id="⬆️-返回顶部" tabindex="-1"><a class="header-anchor" href="#⬆️-返回顶部"><span>⬆️ 返回顶部</span></a></h4>
<ul>
<li><strong>位置</strong>：页面右下角</li>
<li><strong>功能</strong>：当页面滚动到一定位置时显示，点击可快速返回页面顶部</li>
</ul>
<h2 id="📊-仪表台" tabindex="-1"><a class="header-anchor" href="#📊-仪表台"><span>📊 仪表台</span></a></h2>
<p>仪表台是用户进入系统后看到的首页内容，展示关键指标和快捷操作。</p>
<h3 id="🎯-仪表台布局" tabindex="-1"><a class="header-anchor" href="#🎯-仪表台布局"><span>🎯 仪表台布局</span></a></h3>
<p>采用网格布局，可自定义组件位置和大小：</p>
<h4 id="📦-信息组件" tabindex="-1"><a class="header-anchor" href="#📦-信息组件"><span>📦 信息组件</span></a></h4>
<p>仪表台包含多个信息展示组件：</p>
<ul>
<li><strong>站点统计</strong>：显示各站点的种子数量和上传下载统计</li>
<li><strong>媒体库概览</strong>：展示电影、电视剧等媒体资源统计</li>
<li><strong>任务状态</strong>：显示后台任务执行状态</li>
<li><strong>系统状态</strong>：展示系统运行状态和资源使用情况</li>
<li><strong>最新消息</strong>：显示最新的系统通知</li>
</ul>
<h4 id="🎛️-组件定制" tabindex="-1"><a class="header-anchor" href="#🎛️-组件定制"><span>🎛️ 组件定制</span></a></h4>
<ul>
<li><strong>定制按钮</strong>：页面右下角的布局按钮</li>
<li><strong>功能</strong>：打开仪表台定制对话框</li>
<li><strong>操作</strong>：可添加、删除、调整组件位置和大小</li>
</ul>
<h3 id="📋-仪表台操作" tabindex="-1"><a class="header-anchor" href="#📋-仪表台操作"><span>📋 仪表台操作</span></a></h3>
<h4 id="🎨-首页定制" tabindex="-1"><a class="header-anchor" href="#🎨-首页定制"><span>🎨 首页定制</span></a></h4>
<ol>
<li>点击页面右下角的&quot;首页定制&quot;按钮（布局图标）</li>
<li>打开仪表台定制设置对话框</li>
<li>可以选择显示的组件</li>
<li>调整组件的位置和大小</li>
<li>保存设置后立即生效</li>
</ol>
<h4 id="📊-数据刷新" tabindex="-1"><a class="header-anchor" href="#📊-数据刷新"><span>📊 数据刷新</span></a></h4>
<ul>
<li>各组件会定期自动刷新数据</li>
<li>部分组件支持手动刷新</li>
<li>刷新频率根据组件类型而定</li>
</ul>
<h2 id="🔄-交互流程" tabindex="-1"><a class="header-anchor" href="#🔄-交互流程"><span>🔄 交互流程</span></a></h2>
<div class="language-mermaid line-numbers-mode" data-highlighter="prismjs" data-ext="mermaid"><pre v-pre><code class="language-mermaid"><span class="line"><span class="token keyword">graph</span> TD</span>
<span class="line">    A<span class="token text string">[用户登录]</span> <span class="token arrow operator">--></span> B<span class="token text string">[进入首页]</span></span>
<span class="line">    B <span class="token arrow operator">--></span> C<span class="token text string">[加载主页面框架]</span></span>
<span class="line">    C <span class="token arrow operator">--></span> D<span class="token text string">[加载仪表台内容]</span></span>
<span class="line">    D <span class="token arrow operator">--></span> E<span class="token text string">{用户操作}</span></span>
<span class="line">    E <span class="token arrow operator">--></span> F<span class="token text string">[顶部导航功能]</span></span>
<span class="line">    E <span class="token arrow operator">--></span> G<span class="token text string">[左侧菜单导航]</span></span>
<span class="line">    E <span class="token arrow operator">--></span> H<span class="token text string">[仪表台组件交互]</span></span>
<span class="line">    E <span class="token arrow operator">--></span> I<span class="token text string">[页面功能按钮]</span></span>
<span class="line">    F <span class="token arrow operator">--></span> J<span class="token text string">[跳转到对应功能页面]</span></span>
<span class="line">    G <span class="token arrow operator">--></span> J</span>
<span class="line">    H <span class="token arrow operator">--></span> K<span class="token text string">[查看详细信息或执行操作]</span></span>
<span class="line">    I <span class="token arrow operator">--></span> L<span class="token text string">[执行特定功能]</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="⚙️-页面配置" tabindex="-1"><a class="header-anchor" href="#⚙️-页面配置"><span>⚙️ 页面配置</span></a></h2>
<h3 id="🎨-界面自定义" tabindex="-1"><a class="header-anchor" href="#🎨-界面自定义"><span>🎨 界面自定义</span></a></h3>
<p>通过界面自定义功能可以调整：</p>
<ul>
<li><strong>主题模式</strong>：亮色/暗黑模式切换</li>
<li><strong>主题颜色</strong>：多种预设颜色方案</li>
<li><strong>侧边栏状态</strong>：展开/收缩默认状态</li>
<li><strong>卡片样式</strong>：阴影/边框样式切换</li>
</ul>
<p>详细配置请参考：<RouteLink to="/docs/main_page/ui_customization/">界面自定义文档</RouteLink></p>
<h3 id="📐-响应式适配" tabindex="-1"><a class="header-anchor" href="#📐-响应式适配"><span>📐 响应式适配</span></a></h3>
<p>页面针对不同设备进行了适配：</p>
<h4 id="桌面设备" tabindex="-1"><a class="header-anchor" href="#桌面设备"><span>桌面设备</span></a></h4>
<ul>
<li>完整显示侧边栏</li>
<li>多列网格布局</li>
<li>鼠标操作优化</li>
</ul>
<h4 id="移动设备" tabindex="-1"><a class="header-anchor" href="#移动设备"><span>移动设备</span></a></h4>
<ul>
<li>侧边栏默认隐藏，通过按钮切换</li>
<li>单列布局适应小屏幕</li>
<li>触控操作优化</li>
</ul>
<h2 id="🎯-使用技巧" tabindex="-1"><a class="header-anchor" href="#🎯-使用技巧"><span>🎯 使用技巧</span></a></h2>
<h3 id="快速导航" tabindex="-1"><a class="header-anchor" href="#快速导航"><span>快速导航</span></a></h3>
<ol>
<li><strong>顶部搜索</strong>：通过搜索功能快速查找资源</li>
<li><strong>左侧菜单</strong>：通过菜单快速跳转到各功能模块</li>
<li><strong>快捷入口</strong>：利用顶部导航栏的快捷功能按钮</li>
</ol>
<h3 id="个性化设置" tabindex="-1"><a class="header-anchor" href="#个性化设置"><span>个性化设置</span></a></h3>
<ol>
<li><strong>界面定制</strong>：根据个人喜好调整主题和布局</li>
<li><strong>仪表台定制</strong>：选择关注的指标组件进行展示</li>
<li><strong>默认设置</strong>：设置常用的默认状态提高效率</li>
</ol>
<h3 id="信息获取" tabindex="-1"><a class="header-anchor" href="#信息获取"><span>信息获取</span></a></h3>
<ol>
<li><strong>消息中心</strong>：及时获取系统通知和消息</li>
<li><strong>仪表台组件</strong>：快速了解系统关键指标</li>
<li><strong>日志查看</strong>：通过系统日志和业务日志了解系统运行情况</li>
</ol>
<p>通过首页的主页面和仪表台，用户可以快速访问系统各项功能，了解系统状态，并根据个人需求进行个性化定制。</p>
</div></template>


