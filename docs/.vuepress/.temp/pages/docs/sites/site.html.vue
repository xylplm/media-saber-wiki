<template><div><blockquote>
<p>💡 在新增站点前请先添加 <strong>站点配置文件</strong> 为内置索引工具适配站点，否则就算添加了站点，内置索引器也无法正常搜索和订阅站点！<RouteLink to="/guide/init/sites/">点击前往</RouteLink>。</p>
</blockquote>
<h2 id="📋-站点列表" tabindex="-1"><a class="header-anchor" href="#📋-站点列表"><span>📋 站点列表</span></a></h2>
<p>站点列表页面采用卡片式展示方式，展示了所有已添加的站点，提供站点管理的各种功能。</p>
<h3 id="🔧-站点操作" tabindex="-1"><a class="header-anchor" href="#🔧-站点操作"><span>🔧 站点操作</span></a></h3>
<ul>
<li>🔄 <strong>刷新</strong>：点击刷新按钮可重新加载站点列表数据</li>
<li>🌐 <strong>站点连通性测试</strong>：测试站点是否可以正常连接</li>
<li>📡 <strong>站点RSS测试</strong>：测试站点RSS功能是否正常工作</li>
<li>📂 <strong>更多操作</strong>：
<ul>
<li>🔄 <strong>站点配置订阅</strong>：管理站点配置的自动更新（设置配置文件URL和自动更新时间）</li>
<li>📥 <strong>导入站点</strong>：从备份文件导入站点配置</li>
<li>📤 <strong>备份站点</strong>：将当前站点配置导出备份</li>
<li>♻️ <strong>恢复站点</strong>：从备份恢复站点配置</li>
</ul>
</li>
<li>➕ <strong>添加站点</strong>：添加新的站点配置</li>
</ul>
<h3 id="🎚️-站点状态控制" tabindex="-1"><a class="header-anchor" href="#🎚️-站点状态控制"><span>🎚️ 站点状态控制</span></a></h3>
<p>站点列表以卡片展开式面板展示，每个站点卡片的标题区域显示站点基本信息和状态徽章，卡片展开后可控制以下功能开关：</p>
<ul>
<li>✅ <strong>启用</strong>：控制站点是否启用，关闭后所有服务无法使用该站点</li>
<li>🔍 <strong>搜索</strong>：开启后搜索或订阅将使用该站点进行搜索</li>
<li>📡 <strong>RSS</strong>：开启后会监听该站点的RSS内容进行订阅媒体</li>
<li>📊 <strong>统计</strong>：开启后站点数据统计会统计该站点的数据</li>
<li>📝 <strong>签到</strong>：开启后将会对该站点进行定时签到</li>
<li>📣 <strong>公告</strong>：开启后会获取并显示该站点的公告信息</li>
<li>💌 <strong>消息</strong>：开启后会获取并显示该站点的消息</li>
<li>🛡️ <strong>代理</strong>：开启后该站点的访问将使用代理服务器</li>
</ul>
<p>站点卡片标题区域显示：</p>
<ul>
<li>站点名称（灰显时表示站点已禁用）</li>
<li>🔒 <strong>VPN标签</strong>：当启用代理服务器时显示</li>
<li>🔐 <strong>2FA标签</strong>：当配置了两步验证Key时显示，点击可查看验证码</li>
</ul>
<h3 id="📋-批量操作" tabindex="-1"><a class="header-anchor" href="#📋-批量操作"><span>📋 批量操作</span></a></h3>
<p>点击<strong>批量操作</strong>区域可展开批量控制面板，可以对所有站点同时设置以上8个功能开关。点击<strong>展开/收起所有</strong>按钮可快速展开或收起所有站点卡片。</p>
<h3 id="📈-站点排序" tabindex="-1"><a class="header-anchor" href="#📈-站点排序"><span>📈 站点排序</span></a></h3>
<p>可以通过拖拽站点卡片来调整站点的优先级顺序，优先级会影响搜索和订阅时的站点选择顺序。拖拽时会显示拖拽手柄图标，拖拽时站点列表数量需≥2个。</p>
<h2 id="➕-新增站点" tabindex="-1"><a class="header-anchor" href="#➕-新增站点"><span>➕ 新增站点</span></a></h2>
<p>新增维护好站点是使用本工具订阅、搜索下载功能的前提。</p>
<h3 id="基本信息" tabindex="-1"><a class="header-anchor" href="#基本信息"><span>基本信息</span></a></h3>
<ul>
<li>🌐 <strong>选择站点</strong>：从下拉列表中选择要添加的站点，已添加的站点会显示&quot;已添加&quot;标记</li>
<li>📝 <strong>名称</strong>：自定义站点名称</li>
<li>⭐ <strong>优先级</strong>：多个站点同时命中订阅时选择下载的优先级，数字越小越优先</li>
<li>🆔 <strong>用户 ID</strong>：一般不需要填写，只有特殊站点才需要。比如某些站点获取 HR 列表时需要配置</li>
</ul>
<h3 id="域名配置" tabindex="-1"><a class="header-anchor" href="#域名配置"><span>域名配置</span></a></h3>
<ul>
<li>🏠 <strong>域名</strong>：站点域名，正常情况下可不填，仅站点域名变动时及部分网络问题用户填写。默认使用【站点适配文件】内置的域名</li>
<li>📡 <strong>API域名</strong>：站点API域名，正常情况下可不填，仅站点域名变动时及部分网络问题用户填写。默认使用【站点适配文件】内置的</li>
</ul>
<h3 id="认证信息" tabindex="-1"><a class="header-anchor" href="#认证信息"><span>认证信息</span></a></h3>
<ul>
<li>🍪 <strong>Cookie</strong>：在浏览器中打开站点，按 F12-&gt;网络选项卡获取站点 Cookie，也可使用<RouteLink to="/docs/other/peripheral_tools/">周边工具</RouteLink>。可点击<strong>获取Cookie</strong>按钮通过浏览器插件快速获取</li>
<li>📥 <strong>自定义请求头</strong>：站点的 Request Headers，请以key:value的形式输入，多个换行。比如馒头和飞天拉面需要填写才能用于资源搜索、数据统计等</li>
<li>🌐 <strong>User-Agent</strong>：从浏览器中获取 User-Agent，站点签到/数据获取/搜索请求时使用的 User-Agent，为空则使用基础配置中 User-Agent 设置。可点击按钮自动获取当前浏览器的 User-Agent</li>
<li>🔐 <strong>两步验证Key</strong>：某些站点需要填写两步验证Key用于账户安全验证，可通过二维码扫描或选择获取</li>
</ul>
<h3 id="rss配置" tabindex="-1"><a class="header-anchor" href="#rss配置"><span>RSS配置</span></a></h3>
<ul>
<li>📡 <strong>RSS 订阅地址</strong>：站点 RSS 订阅源 URL 地址，用于电影、电视剧订阅、刷流，点击站点 RSS 图标获取。已编辑站点可点击按钮自动获取站点的RSS地址</li>
<li>🔍 <strong>RSS 解析种子详情</strong>：选择开启时 RSS 订阅会解析站点种子详情页面获取种子 FREE 及 HR 状态，会增加站点访问压力；选择关闭时无法判断 FREE 种，无法实现 FREE 优先规则；刷流任务不受此限制</li>
</ul>
<h3 id="功能配置" tabindex="-1"><a class="header-anchor" href="#功能配置"><span>功能配置</span></a></h3>
<ul>
<li>🛡️ <strong>使用代理服务器</strong>：开启后该站点的访问将使用代理服务器，代理需在 <RouteLink to="/docs/setting/base/#%E4%BB%A3%E7%90%86%E6%9C%8D%E5%8A%A1%E5%99%A8">代理服务器</RouteLink> 中设置</li>
<li>📄 <strong>从详情页下载字幕</strong>：开启后将查询该种子详情页是否有提供字幕，如有则会自动下载；字幕文件会一并下载到<code v-pre>下载保存目录</code>，同时随文件转移一起整理</li>
<li>⏰ <strong>活跃提醒天数</strong>：用于站点活跃天数提醒，此功能依赖站点数据统计。当站点数据统计，活动时间大于该天数时，会推送消息提醒，避免超时被ban！</li>
<li>🚫 <strong>过滤规则</strong>：选择该站点使用的过滤规则组，在<code v-pre>设置-&gt;过滤规则</code>中设置规则，选择了过滤规则后该站点只有符合规则的种子才会被命中下载；仅作用于 RSS、内建索引自动搜索；刷流任务不受此限制</li>
<li>⬇️ <strong>下载参数</strong>：订阅搜索下载时默认使用下载参数</li>
</ul>
<h3 id="流控规则" tabindex="-1"><a class="header-anchor" href="#流控规则"><span>流控规则</span></a></h3>
<ul>
<li>🚦 <strong>站点流控规则</strong>：控制全局站点访问频率，触发流控时将跳过该站点，留空则不限制
<ul>
<li><strong>单位时间（分钟）</strong>：时间周期</li>
<li><strong>单位时间内访问次数</strong>：在指定时间内允许的最大访问次数</li>
<li><strong>访问间隔（秒）</strong>：每次访问之间的最小间隔秒数</li>
</ul>
</li>
</ul>
<h3 id="📋-自定义请求头" tabindex="-1"><a class="header-anchor" href="#📋-自定义请求头"><span>📋 自定义请求头</span></a></h3>
<p>自定义请求头用于站点鉴权访问，可填写多个，多个请求头之间用换行符隔开。填写格式：<code v-pre>key:value</code>，注意是英文冒号，前后不要空格。</p>
<h4 id="馒头" tabindex="-1"><a class="header-anchor" href="#馒头"><span>馒头</span></a></h4>
<p>可通过【控制台-&gt;實驗室-&gt;存取令牌】自助获取，然后在站点维护中，增加自定义请求头 <code v-pre>x-api-key:XXXXXXX</code></p>
<h4 id="飞天拉面" tabindex="-1"><a class="header-anchor" href="#飞天拉面"><span>飞天拉面</span></a></h4>
<p>主页页面拉到最下面，点击 API 后获取，然后把获取的类似于 <code v-pre>APITOKEN:XXX</code> 这样格式的内容填写进站点维护中的自定义请求头。</p>
<h4 id="朱雀" tabindex="-1"><a class="header-anchor" href="#朱雀"><span>朱雀</span></a></h4>
<p>朱雀除了获取Cookie外，还需要 <code v-pre>x-csrf-token</code> 请求头。获取方法很简单：F12 -&gt; Network -&gt; 找到任意请求的URL，点击该请求，展开【请求标头】在Headers中查看 <code v-pre>x-csrf-token</code> 字段（一般在最下面）的值。增加自定义请求头 <code v-pre>x-csrf-token:XXXXXXX</code></p>
<h2 id="✏️-编辑站点" tabindex="-1"><a class="header-anchor" href="#✏️-编辑站点"><span>✏️ 编辑站点</span></a></h2>
<p>点击站点列表中的编辑按钮可以修改站点配置，界面与新增站点相同，可以修改除站点类型外的所有配置项。</p>
<h2 id="🔄-站点配置订阅" tabindex="-1"><a class="header-anchor" href="#🔄-站点配置订阅"><span>🔄 站点配置订阅</span></a></h2>
<p>点击&quot;更多操作&quot;中的&quot;站点配置订阅&quot;可以设置站点配置的自动更新。</p>
<h3 id="配置项说明" tabindex="-1"><a class="header-anchor" href="#配置项说明"><span>配置项说明</span></a></h3>
<ul>
<li><strong>配置文件URL</strong>：站点配置文件的来源URL地址，系统会定期从此URL拉取最新的站点配置</li>
<li><strong>自动更新Cron表达式</strong>：定义站点配置自动更新的时间计划，使用Cron表达式格式（如：<code v-pre>0 0 * * ?</code> 表示每天0点更新）</li>
</ul>
<h3 id="操作" tabindex="-1"><a class="header-anchor" href="#操作"><span>操作</span></a></h3>
<ul>
<li><strong>拉取</strong>：点击此按钮立即从配置文件URL拉取最新的站点配置</li>
<li><strong>保存</strong>：保存配置文件URL和自动更新的Cron表达式设置</li>
</ul>
<h2 id="❌-删除站点" tabindex="-1"><a class="header-anchor" href="#❌-删除站点"><span>❌ 删除站点</span></a></h2>
<p>点击站点列表中的删除按钮可以删除站点，删除前会弹出确认对话框。删除后，该站点无法使用订阅、搜索、统计等服务。</p>
<h2 id="🍪-更新站点-cookie" tabindex="-1"><a class="header-anchor" href="#🍪-更新站点-cookie"><span>🍪 更新站点 Cookie</span></a></h2>
<p><strong>1、手动更新</strong></p>
<p>在站点列表中点击站点行的编辑按钮，在编辑对话框中可以直接修改 Cookie 字段并保存。</p>
<p><strong>2、插件更新</strong></p>
<p>查看<RouteLink to="/docs/other/browser_sync_plugin/">浏览器同步插件</RouteLink>。</p>
<h2 id="🌐-站点连通性测试" tabindex="-1"><a class="header-anchor" href="#🌐-站点连通性测试"><span>🌐 站点连通性测试</span></a></h2>
<p>通过该功能测试站点是否连通，根据报错信息调整站点设置和网络环境，错误排查参考：<RouteLink to="/guide/start/problem/#%E7%AB%99%E7%82%B9%E6%97%A0%E6%B3%95%E8%BF%9E%E9%80%9A">站点无法连通</RouteLink>。</p>
<h2 id="📡-站点rss测试" tabindex="-1"><a class="header-anchor" href="#📡-站点rss测试"><span>📡 站点RSS测试</span></a></h2>
<p>通过该功能测试站点RSS功能是否正常工作，可以检查RSS地址配置是否正确，以及是否能正常获取RSS内容。</p>
<h2 id="📥📤-站点导入-导出" tabindex="-1"><a class="header-anchor" href="#📥📤-站点导入-导出"><span>📥📤 站点导入/导出</span></a></h2>
<h3 id="📤-备份站点" tabindex="-1"><a class="header-anchor" href="#📤-备份站点"><span>📤 备份站点</span></a></h3>
<p>点击&quot;更多操作&quot;中的&quot;备份站点&quot;可以将当前所有站点配置导出为备份文件。</p>
<h3 id="♻️-恢复站点" tabindex="-1"><a class="header-anchor" href="#♻️-恢复站点"><span>♻️ 恢复站点</span></a></h3>
<p>点击&quot;更多操作&quot;中的&quot;恢复站点&quot;可以从备份文件恢复站点配置，如果站点已存在，不会被覆盖。</p>
<h3 id="📥-导入站点" tabindex="-1"><a class="header-anchor" href="#📥-导入站点"><span>📥 导入站点</span></a></h3>
<p>点击&quot;更多操作&quot;中的&quot;导入站点&quot;可以从JSON文件导入站点配置，可以批量添加站点。</p>
</div></template>


