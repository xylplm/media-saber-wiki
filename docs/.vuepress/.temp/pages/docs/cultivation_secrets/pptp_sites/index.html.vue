<template><div><h1 id="🌐-pptp-站点" tabindex="-1"><a class="header-anchor" href="#🌐-pptp-站点"><span>🌐 PPTP 站点</span></a></h1>
<p><strong>PPTP 站点</strong> 是一个用于导入PPTP（PT Plugin Plus Tool）站点配置的插件，可以批量导入站点信息和Cookie，快速配置Media Saber的站点设置。</p>
<h2 id="⚙️-功能特点" tabindex="-1"><a class="header-anchor" href="#⚙️-功能特点"><span>⚙️ 功能特点</span></a></h2>
<h3 id="📁-批量导入" tabindex="-1"><a class="header-anchor" href="#📁-批量导入"><span>📁 批量导入</span></a></h3>
<ul>
<li><strong>站点配置导入</strong>：批量导入PPTP的站点配置文件</li>
<li><strong>Cookie导入</strong>：自动导入站点的Cookie信息</li>
<li><strong>配置解析</strong>：智能解析PPTP配置格式</li>
<li><strong>错误处理</strong>：提供详细的导入结果和错误信息</li>
</ul>
<h3 id="🔧-兼容性" tabindex="-1"><a class="header-anchor" href="#🔧-兼容性"><span>🔧 兼容性</span></a></h3>
<ul>
<li><strong>PPTP格式支持</strong>：完全兼容PPTP导出的配置格式</li>
<li><strong>多站点支持</strong>：支持同时导入多个站点配置</li>
<li><strong>数据验证</strong>：导入前验证站点配置的有效性</li>
<li><strong>安全处理</strong>：安全地处理敏感的Cookie信息</li>
</ul>
<h2 id="🚀-配置指南" tabindex="-1"><a class="header-anchor" href="#🚀-配置指南"><span>🚀 配置指南</span></a></h2>
<h3 id="基础配置" tabindex="-1"><a class="header-anchor" href="#基础配置"><span>基础配置</span></a></h3>
<ol>
<li>
<p><strong>配置文件准备</strong>：</p>
<ul>
<li>从PPTP导出站点配置文件</li>
<li>确保配置文件格式正确</li>
<li>检查文件完整性</li>
</ul>
</li>
<li>
<p><strong>导入操作</strong>：</p>
<ul>
<li>在插件配置页面选择配置文件路径</li>
<li>点击&quot;运行一次&quot;执行导入操作</li>
<li>查看导入结果和状态</li>
</ul>
</li>
</ol>
<h3 id="支持的配置格式" tabindex="-1"><a class="header-anchor" href="#支持的配置格式"><span>支持的配置格式</span></a></h3>
<p><strong>PPTP站点配置</strong>：</p>
<ul>
<li><strong>站点信息</strong>：名称、URL、描述等</li>
<li><strong>Cookie数据</strong>：登录凭证和会话信息</li>
<li><strong>站点选项</strong>：搜索配置、用户信息等</li>
<li><strong>标签和分类</strong>：站点标签和分类信息</li>
</ul>
<p><strong>Cookie格式</strong>：</p>
<div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json"><pre v-pre><code class="language-json"><span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">"domain"</span><span class="token operator">:</span> <span class="token string">"example.com"</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"session_id"</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">"value"</span><span class="token operator">:</span> <span class="token string">"cookie_value"</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">"path"</span><span class="token operator">:</span> <span class="token string">"/"</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">"secure"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">"httpOnly"</span><span class="token operator">:</span> <span class="token boolean">true</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="📖-使用说明" tabindex="-1"><a class="header-anchor" href="#📖-使用说明"><span>📖 使用说明</span></a></h2>
<h3 id="导入流程" tabindex="-1"><a class="header-anchor" href="#导入流程"><span>导入流程</span></a></h3>
<ol>
<li>
<p><strong>文件选择</strong>：</p>
<ul>
<li>选择PPTP导出的配置文件</li>
<li>支持ZIP压缩文件格式</li>
<li>验证文件格式和内容</li>
</ul>
</li>
<li>
<p><strong>配置解析</strong>：</p>
<ul>
<li>解析站点配置信息</li>
<li>提取Cookie数据</li>
<li>验证数据完整性</li>
</ul>
</li>
<li>
<p><strong>批量导入</strong>：</p>
<ul>
<li>创建站点配置记录</li>
<li>设置Cookie信息</li>
<li>配置站点选项</li>
</ul>
</li>
</ol>
<h3 id="导入结果" tabindex="-1"><a class="header-anchor" href="#导入结果"><span>导入结果</span></a></h3>
<p><strong>成功导入</strong>：</p>
<ul>
<li>显示成功导入的站点列表</li>
<li>提供站点配置摘要</li>
<li>确认Cookie设置状态</li>
</ul>
<p><strong>失败处理</strong>：</p>
<ul>
<li>列出导入失败的站点</li>
<li>显示具体错误原因</li>
<li>提供修复建议</li>
</ul>
<h2 id="⚙️-配置参数" tabindex="-1"><a class="header-anchor" href="#⚙️-配置参数"><span>⚙️ 配置参数</span></a></h2>
<h3 id="导入设置" tabindex="-1"><a class="header-anchor" href="#导入设置"><span>导入设置</span></a></h3>
<ol>
<li>
<p><strong>文件路径</strong>：</p>
<ul>
<li>PPTP配置文件的完整路径</li>
<li>支持本地文件和网络路径</li>
<li>自动检测文件格式</li>
</ul>
</li>
<li>
<p><strong>导入选项</strong>：</p>
<ul>
<li>覆盖现有站点配置</li>
<li>保留原有Cookie设置</li>
<li>跳过重复站点</li>
</ul>
</li>
<li>
<p><strong>验证规则</strong>：</p>
<ul>
<li>Cookie有效性检查</li>
<li>站点URL可访问性验证</li>
<li>配置格式合规性检查</li>
</ul>
</li>
</ol>
<h3 id="站点配置" tabindex="-1"><a class="header-anchor" href="#站点配置"><span>站点配置</span></a></h3>
<p><strong>导入的站点信息包括</strong>：</p>
<ul>
<li><strong>基础信息</strong>：站点名称、URL、描述</li>
<li><strong>认证信息</strong>：Cookie、用户凭证</li>
<li><strong>功能配置</strong>：搜索设置、用户信息获取</li>
<li><strong>高级选项</strong>：CDN设置、时区偏移</li>
</ul>
<h2 id="⚠️-注意事项" tabindex="-1"><a class="header-anchor" href="#⚠️-注意事项"><span>⚠️ 注意事项</span></a></h2>
<h3 id="安全考虑" tabindex="-1"><a class="header-anchor" href="#安全考虑"><span>安全考虑</span></a></h3>
<ol>
<li>
<p><strong>Cookie安全</strong>：</p>
<ul>
<li>Cookie包含敏感的登录信息</li>
<li>确保配置文件安全存储</li>
<li>定期更新过期的Cookie</li>
</ul>
</li>
<li>
<p><strong>文件处理</strong>：</p>
<ul>
<li>验证配置文件来源</li>
<li>避免导入恶意配置</li>
<li>备份现有站点配置</li>
</ul>
</li>
<li>
<p><strong>权限管理</strong>：</p>
<ul>
<li>确保有足够权限读取配置文件</li>
<li>验证站点访问权限</li>
<li>检查网络连接状态</li>
</ul>
</li>
</ol>
<h3 id="使用建议" tabindex="-1"><a class="header-anchor" href="#使用建议"><span>使用建议</span></a></h3>
<ol>
<li>
<p><strong>导入前准备</strong>：</p>
<ul>
<li>备份当前站点配置</li>
<li>检查PPTP配置文件完整性</li>
<li>确认网络连接稳定</li>
</ul>
</li>
<li>
<p><strong>分批导入</strong>：</p>
<ul>
<li>对于大量站点，建议分批导入</li>
<li>验证每批导入结果</li>
<li>及时处理导入错误</li>
</ul>
</li>
<li>
<p><strong>后续验证</strong>：</p>
<ul>
<li>导入后测试站点访问</li>
<li>验证Cookie有效性</li>
<li>检查搜索功能是否正常</li>
</ul>
</li>
</ol>
<h3 id="故障排除" tabindex="-1"><a class="header-anchor" href="#故障排除"><span>故障排除</span></a></h3>
<ol>
<li>
<p><strong>导入失败</strong>：</p>
<ul>
<li>检查配置文件格式</li>
<li>确认文件路径正确</li>
<li>验证文件权限设置</li>
</ul>
</li>
<li>
<p><strong>Cookie无效</strong>：</p>
<ul>
<li>检查Cookie过期时间</li>
<li>确认站点登录状态</li>
<li>重新获取有效Cookie</li>
</ul>
</li>
<li>
<p><strong>站点无法访问</strong>：</p>
<ul>
<li>验证站点URL正确性</li>
<li>检查网络连接状态</li>
<li>确认代理设置</li>
</ul>
</li>
</ol>
<h2 id="📊-导入统计" tabindex="-1"><a class="header-anchor" href="#📊-导入统计"><span>📊 导入统计</span></a></h2>
<h3 id="导入报告" tabindex="-1"><a class="header-anchor" href="#导入报告"><span>导入报告</span></a></h3>
<ul>
<li><strong>总站点数</strong>：配置文件中的站点总数</li>
<li><strong>成功导入数</strong>：成功导入的站点数量</li>
<li><strong>失败导入数</strong>：导入失败的站点数量</li>
<li><strong>跳过站点数</strong>：因重复等原因跳过的站点</li>
</ul>
<h3 id="站点分析" tabindex="-1"><a class="header-anchor" href="#站点分析"><span>站点分析</span></a></h3>
<ul>
<li><strong>站点类型分布</strong>：按类型统计导入的站点</li>
<li><strong>Cookie状态</strong>：有效/无效Cookie统计</li>
<li><strong>配置完整性</strong>：配置项完整度分析</li>
</ul>
<h2 id="🔄-pptp集成" tabindex="-1"><a class="header-anchor" href="#🔄-pptp集成"><span>🔄 PPTP集成</span></a></h2>
<h3 id="兼容版本" tabindex="-1"><a class="header-anchor" href="#兼容版本"><span>兼容版本</span></a></h3>
<ul>
<li><strong>PPTP 1.x</strong>：支持早期版本的配置格式</li>
<li><strong>PPTP 2.x</strong>：完全支持最新版本功能</li>
<li><strong>自定义格式</strong>：支持自定义的配置格式</li>
</ul>
<h3 id="数据映射" tabindex="-1"><a class="header-anchor" href="#数据映射"><span>数据映射</span></a></h3>
<ul>
<li><strong>站点信息映射</strong>：PPTP字段到Media Saber字段的映射</li>
<li><strong>Cookie转换</strong>：Cookie格式的自动转换</li>
<li><strong>配置适配</strong>：配置选项的智能适配</li>
</ul>
<h2 id="🔗-相关链接" tabindex="-1"><a class="header-anchor" href="#🔗-相关链接"><span>🔗 相关链接</span></a></h2>
<ul>
<li><RouteLink to="/docs/cultivation_secrets/main/">修仙秘籍主页</RouteLink></li>
<li><RouteLink to="/docs/advanced/site_management/">站点管理配置</RouteLink></li>
<li><RouteLink to="/docs/advanced/cookie_management/">Cookie管理指南</RouteLink></li>
</ul>
<hr>
<p>🎯 <strong>提示</strong>：PPTP站点导入功能可以大大简化站点配置过程，建议在导入前备份现有配置。</p>
</div></template>


