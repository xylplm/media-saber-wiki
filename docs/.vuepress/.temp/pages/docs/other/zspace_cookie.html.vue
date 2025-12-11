<template><div><h1 id="🍪-极空间获取cookie" tabindex="-1"><a class="header-anchor" href="#🍪-极空间获取cookie"><span>🍪 极空间获取Cookie</span></a></h1>
<p>在配置<RouteLink to="/docs/server/zspace/">媒体服务</RouteLink>或<RouteLink to="/docs/cultivation_secrets/zspace_system_messages/">系统消息通知</RouteLink>时，如果需要使用极空间相关功能，您需要获取极空间Cookie信息用于身份验证。</p>
<h2 id="📌-文档说明" tabindex="-1"><a class="header-anchor" href="#📌-文档说明"><span>📌 文档说明</span></a></h2>
<p>本文档介绍如何获取极空间NAS系统的Cookie信息，该信息用于在Media Saber中配置极空间相关功能（如极影视媒体库、极空间系统消息推送等）。</p>
<blockquote>
<p>⚠️ <strong>重要提示</strong>：</p>
<ul>
<li>获取Cookie需要极空间账号的管理权限</li>
<li>获取过程不会影响极空间系统安全</li>
<li>Cookie信息仅用于Media Saber本地使用</li>
<li>建议在熟悉操作的环境下进行</li>
</ul>
</blockquote>
<h2 id="🔧-获取步骤" tabindex="-1"><a class="header-anchor" href="#🔧-获取步骤"><span>🔧 获取步骤</span></a></h2>
<h3 id="方法一-控制台快速获取-推荐" tabindex="-1"><a class="header-anchor" href="#方法一-控制台快速获取-推荐"><span>方法一：控制台快速获取（推荐）</span></a></h3>
<ol>
<li>打开极空间PC客户端</li>
<li>点击右上角齿轮按钮</li>
<li><strong>连续快速点击齿轮按钮</strong>，直到开发者工具弹出</li>
</ol>
<p><img src="@source/02.使用文档/20.其它/images/zspace_cookie/1.png" alt="1.png"></p>
<ol start="4">
<li>切换到开发者工具的<code v-pre>Console</code>标签页</li>
<li>在控制台输入以下命令并回车：</li>
</ol>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code class="language-javascript"><span class="line">document<span class="token punctuation">.</span>cookie</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><ol start="6">
<li>系统将输出Cookie信息</li>
<li>右键点击输出结果，选择<code v-pre>Copy</code>复制Cookie内容</li>
</ol>
<p><img src="@source/02.使用文档/20.其它/images/zspace_cookie/2.png" alt="2.png"></p>
<h3 id="方法二-网络请求获取" tabindex="-1"><a class="header-anchor" href="#方法二-网络请求获取"><span>方法二：网络请求获取</span></a></h3>
<ol>
<li>打开极空间PC客户端</li>
<li>点击右上角齿轮按钮</li>
<li>连续快速点击齿轮按钮，直到开发者工具弹出</li>
<li>切换到开发者工具的<code v-pre>Network</code>标签页</li>
</ol>
<p><img src="@source/02.使用文档/20.其它/images/zspace_cookie/3.png" alt="3.png"></p>
<ol start="5">
<li>在极空间客户端中随便打开一个文件夹或功能页面</li>
<li>在Network面板中找到任意请求记录（建议选择普通页面请求）</li>
<li>点击该请求记录</li>
<li>在请求详情中找到<code v-pre>Cookies</code>标签页</li>
<li>复制该标签页中的所有内容即可</li>
</ol>
<p><img src="@source/02.使用文档/20.其它/images/zspace_cookie/4.png" alt="4.png">
<img src="@source/02.使用文档/20.其它/images/zspace_cookie/5.png" alt="5.png"></p>
<h2 id="📝-使用说明" tabindex="-1"><a class="header-anchor" href="#📝-使用说明"><span>📝 使用说明</span></a></h2>
<p>获取到的Cookie信息需要配置在Media Saber的以下位置：</p>
<ul>
<li><RouteLink to="/docs/server/zspace/">极影视媒体服务器配置</RouteLink></li>
<li><RouteLink to="/docs/cultivation_secrets/zspace_system_messages/">系统消息通知配置</RouteLink></li>
</ul>
<h2 id="⚠️-注意事项" tabindex="-1"><a class="header-anchor" href="#⚠️-注意事项"><span>⚠️ 注意事项</span></a></h2>
<ol>
<li>
<p>Cookie有效期</p>
<ul>
<li>Cookie信息有一定有效期</li>
<li>建议在配置后定期检查更新</li>
<li>Cookie失效后需要重新获取</li>
</ul>
</li>
<li>
<p>安全提示</p>
<ul>
<li>不要将Cookie信息泄露给他人</li>
<li>获取后请及时关闭开发者工具</li>
<li>不要在公共网络环境下操作</li>
</ul>
</li>
<li>
<p>常见问题</p>
<ul>
<li><strong>Q：为什么复制不到Cookie？</strong>
A：请确认是否使用管理员账号登录极空间</li>
<li><strong>Q：Cookie多久失效？</strong>
A：通常为30天，具体取决于极空间系统设置</li>
<li><strong>Q：复制后如何验证？</strong>
A：可在Media Saber对应配置页面进行测试验证</li>
</ul>
</li>
</ol>
<h2 id="📚-相关文档" tabindex="-1"><a class="header-anchor" href="#📚-相关文档"><span>📚 相关文档</span></a></h2>
<ul>
<li><RouteLink to="/docs/server/zspace/">极影视媒体服务器配置</RouteLink></li>
<li><RouteLink to="/docs/cultivation_secrets/zspace_system_messages/">极空间系统消息</RouteLink></li>
</ul>
</div></template>


