<template><div><h1 id="📨-消息通知" tabindex="-1"><a class="header-anchor" href="#📨-消息通知"><span>📨 消息通知</span></a></h1>
<p>消息通知功能允许用户配置多种消息推送渠道，以便接收系统通知和进行远程交互。系统支持多种主流消息平台，并提供灵活的配置选项。</p>
<h2 id="📋-消息渠道列表" tabindex="-1"><a class="header-anchor" href="#📋-消息渠道列表"><span>📋 消息渠道列表</span></a></h2>
<p>在消息通知页面，系统会显示已配置的所有消息渠道卡片，包括渠道名称、状态和推送类型。每个卡片上都有以下信息：</p>
<h3 id="🎯-渠道信息展示" tabindex="-1"><a class="header-anchor" href="#🎯-渠道信息展示"><span>🎯 渠道信息展示</span></a></h3>
<ul>
<li><strong>渠道图标</strong>：表示消息渠道类型</li>
<li><strong>状态指示灯</strong>：绿色表示已开启，红色表示未开启</li>
<li><strong>渠道名称</strong>：用户自定义的渠道名称</li>
<li><strong>交互标识</strong>：如果渠道支持交互功能，会显示&quot;交互&quot;标签</li>
<li><strong>推送类型</strong>：显示该渠道配置的推送业务类型标签</li>
</ul>
<h3 id="📋-空状态提示" tabindex="-1"><a class="header-anchor" href="#📋-空状态提示"><span>📋 空状态提示</span></a></h3>
<p>如果系统中还没有配置任何消息渠道，页面会显示提示信息&quot;您还未添加消息通知渠道！&quot;。</p>
<h3 id="🔧-页面操作按钮" tabindex="-1"><a class="header-anchor" href="#🔧-页面操作按钮"><span>🔧 页面操作按钮</span></a></h3>
<ul>
<li>🔄 <strong>刷新</strong>：重新加载消息渠道列表</li>
<li>📨 <strong>发送自定义消息</strong>：发送测试消息</li>
<li>➕ <strong>添加渠道</strong>：新增消息推送渠道</li>
</ul>
<p>点击任意渠道卡片可以编辑该渠道配置。</p>
<h2 id="🛠-添加-编辑消息渠道" tabindex="-1"><a class="header-anchor" href="#🛠-添加-编辑消息渠道"><span>🛠 添加/编辑消息渠道</span></a></h2>
<p>要添加或编辑消息渠道，可以点击页面右上角的&quot;添加渠道&quot;按钮，或点击现有渠道卡片进行编辑。系统会弹出渠道配置对话框，需要填写以下信息：</p>
<h3 id="📡-渠道类型" tabindex="-1"><a class="header-anchor" href="#📡-渠道类型"><span>📡 渠道类型</span></a></h3>
<p><strong>说明：</strong> 选择要配置的消息推送渠道类型</p>
<p><strong>选项：</strong> 系统支持多种渠道类型，包括但不限于：</p>
<ul>
<li>微信公众号</li>
<li>Telegram</li>
<li>Slack</li>
<li>Synology Chat</li>
<li>其他支持的消息平台</li>
</ul>
<p>选择渠道类型后，系统会自动加载该渠道所需的配置字段。</p>
<h3 id="📝-名称" tabindex="-1"><a class="header-anchor" href="#📝-名称"><span>📝 名称</span></a></h3>
<p><strong>说明：</strong> 自定义渠道名称，用于区分不同的渠道实例</p>
<p><strong>要求：</strong></p>
<ul>
<li>必填项</li>
<li>最多20个字符</li>
</ul>
<h3 id="🔘-是否开启" tabindex="-1"><a class="header-anchor" href="#🔘-是否开启"><span>🔘 是否开启</span></a></h3>
<p><strong>说明：</strong> 控制该消息渠道是否生效</p>
<p><strong>选项：</strong></p>
<ul>
<li>开启（默认）</li>
<li>关闭</li>
</ul>
<p>只有开启的渠道才会接收和发送消息。</p>
<h3 id="🔄-是否交互" tabindex="-1"><a class="header-anchor" href="#🔄-是否交互"><span>🔄 是否交互</span></a></h3>
<p><strong>说明：</strong> 控制该消息渠道是否支持远程交互功能</p>
<p><strong>选项：</strong></p>
<ul>
<li>开启</li>
<li>关闭（默认）</li>
</ul>
<p>支持交互功能的渠道可以通过消息进行远程控制，如搜索、订阅、下载等操作。</p>
<h3 id="⚙️-渠道配置" tabindex="-1"><a class="header-anchor" href="#⚙️-渠道配置"><span>⚙️ 渠道配置</span></a></h3>
<p><strong>说明：</strong> 不同渠道类型需要不同的配置参数，这些参数是动态加载的</p>
<p><strong>示例：</strong></p>
<ul>
<li>微信公众号需要配置Token、EncodingAESKey、AppID、AppSecret等</li>
<li>Telegram需要配置Token、ChatID等</li>
<li>Slack需要配置Bot Token、App-Level Token等</li>
</ul>
<p>具体配置参数根据所选渠道类型而定。</p>
<h3 id="📢-推送业务类型" tabindex="-1"><a class="header-anchor" href="#📢-推送业务类型"><span>📢 推送业务类型</span></a></h3>
<p><strong>说明：</strong> 选择该渠道需要推送的业务范围</p>
<p>用户可以通过展开&quot;推送业务类型&quot;面板来选择需要接收的消息类型，例如：</p>
<ul>
<li>系统通知</li>
<li>下载通知</li>
<li>订阅通知</li>
<li>签到通知</li>
<li>其他业务类型</li>
</ul>
<h3 id="🧩-插件消息" tabindex="-1"><a class="header-anchor" href="#🧩-插件消息"><span>🧩 插件消息</span></a></h3>
<p><strong>说明：</strong> 选择该渠道需要推送的插件消息</p>
<p>用户可以通过展开&quot;插件消息&quot;面板来选择需要接收的插件消息类型。</p>
<h2 id="🎯-渠道操作" tabindex="-1"><a class="header-anchor" href="#🎯-渠道操作"><span>🎯 渠道操作</span></a></h2>
<h3 id="🧪-测试通知" tabindex="-1"><a class="header-anchor" href="#🧪-测试通知"><span>🧪 测试通知</span></a></h3>
<p>在配置完成后，可以点击&quot;测试&quot;按钮向该渠道发送测试消息，验证配置是否正确。</p>
<h3 id="📋-生成菜单-微信专用" tabindex="-1"><a class="header-anchor" href="#📋-生成菜单-微信专用"><span>📋 生成菜单（微信专用）</span></a></h3>
<p>对于微信渠道，可以点击&quot;生成菜单&quot;按钮创建微信公众号菜单。</p>
<h3 id="🗑️-删除渠道" tabindex="-1"><a class="header-anchor" href="#🗑️-删除渠道"><span>🗑️ 删除渠道</span></a></h3>
<p>对于已存在的渠道，可以点击&quot;删除&quot;按钮将其从系统中移除。系统会弹出确认对话框以防止误删。</p>
<h2 id="🌐-远程交互" tabindex="-1"><a class="header-anchor" href="#🌐-远程交互"><span>🌐 远程交互</span></a></h2>
<p>部分渠道支持远程交互功能，包括：</p>
<ul>
<li>微信公众号</li>
<li>Telegram</li>
<li>Slack</li>
<li>Synology Chat</li>
</ul>
<p>通过这些渠道，用户可以远程控制 Media Saber 运行、发送名称订阅或下载资源，以及与 AI 对话。</p>
<h2 id="🪝-webhook集成" tabindex="-1"><a class="header-anchor" href="#🪝-webhook集成"><span>🪝 Webhook集成</span></a></h2>
<p>系统支持通过Webhook方式接收外部系统的消息，并通过配置的消息渠道进行推送。详细配置说明请参考：<a href="/docs/other/webhook">Webhook文档</a></p>
<h2 id="📱-微信渠道配置" tabindex="-1"><a class="header-anchor" href="#📱-微信渠道配置"><span>📱 微信渠道配置</span></a></h2>
<p>微信渠道需要特殊配置，详细配置方法请参考：<RouteLink to="/docs/other/weixin/">微信信息通知</RouteLink></p>
<h2 id="⚠️-注意事项" tabindex="-1"><a class="header-anchor" href="#⚠️-注意事项"><span>⚠️ 注意事项</span></a></h2>
<ol>
<li>不同渠道类型有不同的配置要求和限制</li>
<li>部分渠道需要公网可访问的地址才能正常工作</li>
<li>开启交互功能的渠道可以进行远程控制操作</li>
<li>建议在配置完成后使用测试功能验证配置正确性</li>
</ol>
</div></template>


