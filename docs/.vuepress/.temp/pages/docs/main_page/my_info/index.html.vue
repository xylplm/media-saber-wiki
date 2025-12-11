<template><div><h1 id="👤-我的信息" tabindex="-1"><a class="header-anchor" href="#👤-我的信息"><span>👤 我的信息</span></a></h1>
<p>&quot;我的信息&quot;是 MediaSaber 系统中用于管理用户个人资料和账户安全设置的功能模块。通过该功能，用户可以查看和修改个人信息、更改密码、管理 API 密钥以及控制设备登录状态。</p>
<h2 id="🚪-功能入口" tabindex="-1"><a class="header-anchor" href="#🚪-功能入口"><span>🚪 功能入口</span></a></h2>
<p>在我的信息功能位于系统首页顶部导航栏右侧，通过点击用户头像可以打开下拉菜单：</p>
<p>在下拉菜单中点击&quot;我的信息&quot;选项，即可进入我的信息配置页面。</p>
<h2 id="🖥️-界面布局" tabindex="-1"><a class="header-anchor" href="#🖥️-界面布局"><span>🖥️ 界面布局</span></a></h2>
<p>我的信息页面采用标签页形式组织内容，分为&quot;账户信息&quot;和&quot;安全配置&quot;两个主要部分：</p>
<h3 id="📋-账户信息标签页" tabindex="-1"><a class="header-anchor" href="#📋-账户信息标签页"><span>📋 账户信息标签页</span></a></h3>
<p>账户信息标签页包含用户的基本信息和头像设置功能：</p>
<h4 id="🖼️-修改头像" tabindex="-1"><a class="header-anchor" href="#🖼️-修改头像"><span>🖼️ 修改头像</span></a></h4>
<p>在该区域可以修改用户的个人头像：</p>
<ol>
<li>显示当前用户头像</li>
<li>点击&quot;头像设置&quot;按钮打开头像设置对话框</li>
<li>在对话框中可以上传新头像或选择系统提供的默认头像</li>
<li>确认后新头像将立即生效</li>
</ol>
<h4 id="🔐-修改密码" tabindex="-1"><a class="header-anchor" href="#🔐-修改密码"><span>🔐 修改密码</span></a></h4>
<p>用户可以在此修改账户登录密码：</p>
<h5 id="密码修改步骤" tabindex="-1"><a class="header-anchor" href="#密码修改步骤"><span>密码修改步骤：</span></a></h5>
<ol>
<li><strong>输入当前密码</strong>：在&quot;当前密码&quot;输入框中输入现有密码</li>
<li><strong>设置新密码</strong>：在&quot;新密码&quot;输入框中输入想要设置的新密码</li>
<li><strong>确认新密码</strong>：在&quot;确认密码&quot;输入框中再次输入新密码</li>
<li><strong>保存修改</strong>：点击&quot;保存修改&quot;按钮完成密码更改</li>
</ol>
<h5 id="密码要求" tabindex="-1"><a class="header-anchor" href="#密码要求"><span>密码要求：</span></a></h5>
<ul>
<li>新密码必须与确认密码一致</li>
<li>密码应具有足够的复杂度以确保安全</li>
<li>修改成功后需要使用新密码登录</li>
</ul>
<h4 id="📝-基本信息" tabindex="-1"><a class="header-anchor" href="#📝-基本信息"><span>📝 基本信息</span></a></h4>
<p>用户可以在此修改个人基本信息：</p>
<h5 id="可修改信息" tabindex="-1"><a class="header-anchor" href="#可修改信息"><span>可修改信息：</span></a></h5>
<ul>
<li><strong>昵称</strong>：用户的显示名称</li>
</ul>
<h5 id="修改步骤" tabindex="-1"><a class="header-anchor" href="#修改步骤"><span>修改步骤：</span></a></h5>
<ol>
<li>在&quot;昵称&quot;输入框中输入新的昵称</li>
<li>点击&quot;保存修改&quot;按钮</li>
<li>修改成功后系统会显示确认信息</li>
</ol>
<h3 id="🔒-安全配置标签页" tabindex="-1"><a class="header-anchor" href="#🔒-安全配置标签页"><span>🔒 安全配置标签页</span></a></h3>
<p>安全配置标签页包含账户的高级安全设置：</p>
<h4 id="🔑-api-key-管理" tabindex="-1"><a class="header-anchor" href="#🔑-api-key-管理"><span>🔑 API KEY 管理</span></a></h4>
<p>用于管理外部设备和工具调用 MediaSaber API 的密钥：</p>
<h5 id="使用方法" tabindex="-1"><a class="header-anchor" href="#使用方法"><span>使用方法：</span></a></h5>
<blockquote>
<p>💡 <strong>使用建议</strong>：具体使用方式请参考 <RouteLink to="/docs/other/api_auth/">API鉴权文档</RouteLink> 说明，包含请求头、查询参数等不同场景的使用规范</p>
</blockquote>
<blockquote>
<p>⚠️ <strong>安全提示</strong>：请勿在日志或公共配置中明文存储API KEY</p>
</blockquote>
<table>
<thead>
<tr>
<th>操作</th>
<th>功能说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>➕ 新增</td>
<td>创建新的 API KEY</td>
</tr>
<tr>
<td>👁️ 显示/隐藏</td>
<td>切换 API KEY 的可见性</td>
</tr>
<tr>
<td>⏸️ 启用/停用</td>
<td>控制 API KEY 的使用状态</td>
</tr>
<tr>
<td>🗑️ 删除</td>
<td>删除指定的 API KEY</td>
</tr>
</tbody>
</table>
<h5 id="使用场景" tabindex="-1"><a class="header-anchor" href="#使用场景"><span>使用场景：</span></a></h5>
<ul>
<li><strong>MCP服务认证</strong>：用于第三方MCP客户端连接Media Saber的MCP服务，详见 <RouteLink to="/docs/ai/mcp/">MCP服务文档</RouteLink></li>
<li><strong>Webhook集成</strong>：媒体服务器（Emby/Jellyfin）通过Webhook与Media Saber通信时的身份验证，详见 <a href="/docs/other/webhook">Webhook文档</a></li>
<li><strong>微信消息通知</strong>：企业微信接收Media Saber消息通知时的API认证，详见 <a href="/docs/other/weixin">微信文档</a></li>
<li><strong>API调用</strong>：外部工具调用Media Saber API时的身份验证</li>
<li><strong>自动化脚本</strong>：脚本或程序访问系统功能时使用</li>
</ul>
<h4 id="📱-设备管理" tabindex="-1"><a class="header-anchor" href="#📱-设备管理"><span>📱 设备管理</span></a></h4>
<p>用于管理当前账户登录的设备：</p>
<h5 id="功能特点" tabindex="-1"><a class="header-anchor" href="#功能特点"><span>功能特点：</span></a></h5>
<ul>
<li>显示所有已登录的设备列表</li>
<li>标识当前正在使用的设备</li>
<li>显示设备类型、IP 地址和登录时间</li>
<li>支持单独注销设备或批量注销</li>
</ul>
<h5 id="操作功能" tabindex="-1"><a class="header-anchor" href="#操作功能"><span>操作功能：</span></a></h5>
<table>
<thead>
<tr>
<th>操作</th>
<th>功能说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>🚫 注销设备</td>
<td>注销指定设备的登录状态</td>
</tr>
<tr>
<td>🚫 注销所有设备</td>
<td>一次性注销除当前设备外的所有设备</td>
</tr>
</tbody>
</table>
<h5 id="设备标识" tabindex="-1"><a class="header-anchor" href="#设备标识"><span>设备标识：</span></a></h5>
<ul>
<li>🖥️ 桌面设备（web）</li>
<li>📱 iOS 设备（ios）</li>
<li>🤖 Android 设备（android）</li>
<li>💻 其他设备（laptop）</li>
</ul>
<h2 id="📋-详细操作指南" tabindex="-1"><a class="header-anchor" href="#📋-详细操作指南"><span>📋 详细操作指南</span></a></h2>
<h3 id="🖼️-头像设置操作流程" tabindex="-1"><a class="header-anchor" href="#🖼️-头像设置操作流程"><span>🖼️ 头像设置操作流程</span></a></h3>
<ol>
<li>进入&quot;我的信息&quot;页面</li>
<li>在&quot;账户信息&quot;标签页中找到头像区域</li>
<li>点击&quot;头像设置&quot;按钮</li>
<li>在弹出的对话框中选择或上传新头像</li>
<li>确认选择后关闭对话框</li>
<li>新头像立即生效</li>
</ol>
<h3 id="🔐-密码修改操作流程" tabindex="-1"><a class="header-anchor" href="#🔐-密码修改操作流程"><span>🔐 密码修改操作流程</span></a></h3>
<ol>
<li>进入&quot;我的信息&quot;页面</li>
<li>在&quot;账户信息&quot;标签页中找到&quot;修改密码&quot;区域</li>
<li>输入当前密码</li>
<li>输入新密码并确认</li>
<li>点击&quot;保存修改&quot;按钮</li>
<li>系统验证通过后密码修改成功</li>
<li>下次登录时需使用新密码</li>
</ol>
<h3 id="📝-基本信息修改流程" tabindex="-1"><a class="header-anchor" href="#📝-基本信息修改流程"><span>📝 基本信息修改流程</span></a></h3>
<ol>
<li>进入&quot;我的信息&quot;页面</li>
<li>在&quot;账户信息&quot;标签页中找到&quot;基本信息&quot;区域</li>
<li>修改昵称等信息</li>
<li>点击&quot;保存修改&quot;按钮</li>
<li>系统保存修改并显示成功提示</li>
</ol>
<h3 id="🔑-api-key-管理操作流程" tabindex="-1"><a class="header-anchor" href="#🔑-api-key-管理操作流程"><span>🔑 API KEY 管理操作流程</span></a></h3>
<h4 id="新增-api-key" tabindex="-1"><a class="header-anchor" href="#新增-api-key"><span>新增 API KEY</span></a></h4>
<ol>
<li>进入&quot;我的信息&quot;页面</li>
<li>切换到&quot;安全配置&quot;标签页</li>
<li>在&quot;API KEY&quot;区域点击&quot;新增&quot;按钮</li>
<li>系统生成新的 API KEY 并显示在列表中</li>
</ol>
<h4 id="显示-隐藏-api-key" tabindex="-1"><a class="header-anchor" href="#显示-隐藏-api-key"><span>显示/隐藏 API KEY</span></a></h4>
<ol>
<li>在 API KEY 列表中找到目标 KEY</li>
<li>点击眼睛图标切换可见性</li>
<li>显示时可以看到完整 KEY 值</li>
<li>隐藏时显示为星号</li>
</ol>
<h4 id="启用-停用-api-key" tabindex="-1"><a class="header-anchor" href="#启用-停用-api-key"><span>启用/停用 API KEY</span></a></h4>
<ol>
<li>在 API KEY 列表中找到目标 KEY</li>
<li>点击播放/暂停图标切换状态</li>
<li>启用状态可以正常使用</li>
<li>停用状态无法使用</li>
</ol>
<h4 id="删除-api-key" tabindex="-1"><a class="header-anchor" href="#删除-api-key"><span>删除 API KEY</span></a></h4>
<ol>
<li>在 API KEY 列表中找到目标 KEY</li>
<li>点击垃圾桶图标</li>
<li>确认删除操作</li>
<li>KEY 从列表中移除且无法恢复</li>
</ol>
<h4 id="使用-api-key" tabindex="-1"><a class="header-anchor" href="#使用-api-key"><span>使用 API KEY</span></a></h4>
<p>获取API KEY后，根据不同的使用场景选择合适的认证方式：</p>
<p><strong>请求头认证方式</strong>：</p>
<ul>
<li>适用场景：MCP服务、大多数API调用</li>
<li>配置方法：在HTTP请求头中添加 <code v-pre>apiKey: your-api-key</code></li>
</ul>
<p><strong>查询参数认证方式</strong>：</p>
<ul>
<li>适用场景：Webhook回调、微信消息通知</li>
<li>配置方法：在URL后添加 <code v-pre>?apiKey=your-api-key</code></li>
</ul>
<blockquote>
<p>⚠️ <strong>安全提醒</strong>：无论使用哪种方式，都要确保API KEY的安全性，避免在日志中暴露完整的KEY值。</p>
</blockquote>
<h3 id="📱-设备管理操作流程" tabindex="-1"><a class="header-anchor" href="#📱-设备管理操作流程"><span>📱 设备管理操作流程</span></a></h3>
<h4 id="注销指定设备" tabindex="-1"><a class="header-anchor" href="#注销指定设备"><span>注销指定设备</span></a></h4>
<ol>
<li>进入&quot;我的信息&quot;页面</li>
<li>切换到&quot;安全配置&quot;标签页</li>
<li>在&quot;设备信息&quot;区域找到目标设备</li>
<li>点击设备右侧的垃圾桶图标</li>
<li>确认注销操作</li>
<li>该设备将被强制退出登录</li>
</ol>
<h4 id="注销所有设备" tabindex="-1"><a class="header-anchor" href="#注销所有设备"><span>注销所有设备</span></a></h4>
<ol>
<li>进入&quot;我的信息&quot;页面</li>
<li>切换到&quot;安全配置&quot;标签页</li>
<li>在&quot;设备信息&quot;区域点击&quot;注销所有设备&quot;按钮</li>
<li>确认操作</li>
<li>除当前设备外的所有设备都将被注销</li>
</ol>
<h2 id="⚠️-注意事项" tabindex="-1"><a class="header-anchor" href="#⚠️-注意事项"><span>⚠️ 注意事项</span></a></h2>
<h3 id="🔐-安全建议" tabindex="-1"><a class="header-anchor" href="#🔐-安全建议"><span>🔐 安全建议</span></a></h3>
<ol>
<li>
<p><strong>密码安全</strong>：</p>
<ul>
<li>定期更换密码</li>
<li>使用复杂密码（包含大小写字母、数字和特殊字符）</li>
<li>不要在多个网站使用相同密码</li>
</ul>
</li>
<li>
<p><strong>API KEY 管理</strong>：</p>
<ul>
<li>妥善保管 API KEY，避免在代码或日志中明文存储</li>
<li>定期更换 API KEY 以确保安全</li>
<li>删除不再使用的 KEY</li>
<li>根据使用场景选择合适的认证方式（请求头或查询参数）</li>
<li>在生产环境中优先使用请求头方式，避免KEY在URL中暴露</li>
</ul>
</li>
<li>
<p><strong>设备管理</strong>：</p>
<ul>
<li>定期检查登录设备列表</li>
<li>发现异常设备立即注销</li>
<li>在公共设备使用后及时注销</li>
</ul>
</li>
</ol>
<h3 id="🔄-操作提示" tabindex="-1"><a class="header-anchor" href="#🔄-操作提示"><span>🔄 操作提示</span></a></h3>
<ol>
<li>
<p><strong>信息保存</strong>：</p>
<ul>
<li>修改信息后记得点击&quot;保存修改&quot;按钮</li>
<li>系统会验证输入内容的有效性</li>
</ul>
</li>
<li>
<p><strong>操作确认</strong>：</p>
<ul>
<li>删除和注销操作都需要二次确认</li>
<li>请谨慎执行不可逆操作</li>
</ul>
</li>
<li>
<p><strong>界面切换</strong>：</p>
<ul>
<li>使用标签页切换不同功能模块</li>
<li>当前选中标签页会高亮显示</li>
</ul>
</li>
</ol>
<p>通过&quot;我的信息&quot;功能，用户可以全面管理个人账户信息和安全设置，确保账户安全并个性化使用体验。</p>
</div></template>


