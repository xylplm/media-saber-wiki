<template><div><h2 id="📊-数据统计" tabindex="-1"><a class="header-anchor" href="#📊-数据统计"><span>📊 数据统计</span></a></h2>
<ul>
<li>会显示站点总数据、当日数据、以及站点数据。</li>
</ul>
<h2 id="⏰-自动刷新" tabindex="-1"><a class="header-anchor" href="#⏰-自动刷新"><span>⏰ 自动刷新</span></a></h2>
<ul>
<li>在<RouteLink to="/docs/setting/base/#%E7%AB%99%E7%82%B9%E6%95%B0%E6%8D%AE%E5%88%B7%E6%96%B0%E5%91%A8%E6%9C%9F">站点数据刷新时间</RouteLink> 中配置自动刷新数据周期，打开<code v-pre>站点消息</code>后将发送当日增量数据情况。</li>
</ul>
<h2 id="🔄-手动刷新" tabindex="-1"><a class="header-anchor" href="#🔄-手动刷新"><span>🔄 手动刷新</span></a></h2>
<ul>
<li>点击<code v-pre>站点数据</code>栏的刷新按钮，可立即刷新所有站点数据。</li>
<li>点击<code v-pre>站点图标</code>，可立即刷新该站点数据。</li>
</ul>
<h2 id="📤-数据分享" tabindex="-1"><a class="header-anchor" href="#📤-数据分享"><span>📤 数据分享</span></a></h2>
<ul>
<li>点击<code v-pre>站点数据</code>栏的分享按钮，可生成站点统计数据图片，并自动对敏感信息进行模糊处理，用于分享求邀等。</li>
</ul>
<h2 id="🔐-隐私保护" tabindex="-1"><a class="header-anchor" href="#🔐-隐私保护"><span>🔐 隐私保护</span></a></h2>
<ul>
<li>点击<code v-pre>站点数据</code>栏的隐私模式按钮，可以在显示和隐藏数据之间切换，保护您的隐私信息。</li>
<li>开启隐私模式后，站点数据将被模糊处理显示</li>
</ul>
<h2 id="📋-数据字段说明" tabindex="-1"><a class="header-anchor" href="#📋-数据字段说明"><span>📋 数据字段说明</span></a></h2>
<h3 id="📌-基础信息" tabindex="-1"><a class="header-anchor" href="#📌-基础信息"><span>📌 基础信息</span></a></h3>
<ul>
<li>🌐 <strong>站点</strong>：显示站点图标、名称和用户名</li>
<li>🏆 <strong>等级</strong>：显示用户在站点的等级或图标</li>
<li>📈 <strong>分享率</strong>：上传量与下载量的比值</li>
<li>✨ <strong>魔力值</strong>：站点的魔力值或积分</li>
</ul>
<h3 id="📂-数据量信息" tabindex="-1"><a class="header-anchor" href="#📂-数据量信息"><span>📂 数据量信息</span></a></h3>
<ul>
<li>📤 <strong>上传量</strong>：用户在站点的总上传数据量</li>
<li>📥 <strong>下载量</strong>：用户在站点的总下载数据量</li>
<li>🌱 <strong>做种数</strong>：当前正在做种的种子数量</li>
<li>💾 <strong>做种体积</strong>：当前做种的总数据量</li>
</ul>
<h3 id="📅-时间信息" tabindex="-1"><a class="header-anchor" href="#📅-时间信息"><span>📅 时间信息</span></a></h3>
<ul>
<li>📆 <strong>加入时间</strong>：用户注册站点的时间</li>
<li>🕒 <strong>最近活动</strong>：用户最近在站点的活动时间</li>
<li>📅 <strong>统计日期</strong>：本次统计数据的日期</li>
<li>🕐 <strong>创建时间</strong>：数据记录的创建时间</li>
</ul>
<h3 id="🔘-状态信息" tabindex="-1"><a class="header-anchor" href="#🔘-状态信息"><span>🔘 状态信息</span></a></h3>
<ul>
<li>🔌 <strong>登录状态</strong>：显示站点的登录状态（已登录/未登录/未进行）</li>
<li>📝 <strong>签到状态</strong>：显示站点的签到状态（已签到/未签到/未进行）</li>
</ul>
<h2 id="🧩-站点数据列表操作" tabindex="-1"><a class="header-anchor" href="#🧩-站点数据列表操作"><span>🧩 站点数据列表操作</span></a></h2>
<ul>
<li>点击站点图标可以单独刷新该站点的数据</li>
<li>点击站点名称可以跳转到站点首页</li>
<li>表格支持按各字段排序，点击表头即可切换排序方式</li>
<li>可以通过站点名称搜索特定站点的数据</li>
</ul>
<h2 id="⚠️-注意事项" tabindex="-1"><a class="header-anchor" href="#⚠️-注意事项"><span>⚠️ 注意事项</span></a></h2>
<ul>
<li>站点数据获取依赖于站点的Cookie配置，确保Cookie有效才能正确获取数据</li>
<li>部分站点可能需要特殊配置才能获取完整数据</li>
<li>数据获取频率过高可能会被站点限制访问，请合理设置刷新周期</li>
<li>若站点显示未登录状态，请检查站点维护中的Cookie配置</li>
</ul>
</div></template>


