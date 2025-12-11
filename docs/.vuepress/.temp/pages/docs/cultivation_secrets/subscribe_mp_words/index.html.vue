<template><div><h1 id="📝-订阅mp共享识别词" tabindex="-1"><a class="header-anchor" href="#📝-订阅mp共享识别词"><span>📝 订阅MP共享识别词</span></a></h1>
<p><strong>订阅MP共享识别词</strong> 是一个通过网络下载MP共享识别词文件并自动导入到本地识别词库的插件。支持定时同步多个远程识别词源，提升媒体文件的识别准确性。</p>
<h2 id="⚙️-功能特点" tabindex="-1"><a class="header-anchor" href="#⚙️-功能特点"><span>⚙️ 功能特点</span></a></h2>
<h3 id="📚-远程订阅" tabindex="-1"><a class="header-anchor" href="#📚-远程订阅"><span>📚 远程订阅</span></a></h3>
<ul>
<li><strong>多源支持</strong>：支持同时订阅多个远程识别词文件</li>
<li><strong>自动下载</strong>：定时从远程URL下载最新识别词</li>
<li><strong>格式验证</strong>：自动验证下载文件的格式和内容</li>
<li><strong>安全检查</strong>：过滤HTML内容，仅处理纯文本识别词</li>
</ul>
<h3 id="🔄-数据管理" tabindex="-1"><a class="header-anchor" href="#🔄-数据管理"><span>🔄 数据管理</span></a></h3>
<ul>
<li><strong>定时更新</strong>：支持Cron表达式定时自动更新</li>
<li><strong>完整替换</strong>：每次更新完全替换订阅的识别词数据</li>
<li><strong>数据清理</strong>：支持一键删除所有订阅的识别词数据</li>
<li><strong>智能解析</strong>：自动解析MP识别词格式并导入</li>
</ul>
<h2 id="🚀-配置指南" tabindex="-1"><a class="header-anchor" href="#🚀-配置指南"><span>🚀 配置指南</span></a></h2>
<h3 id="基础配置" tabindex="-1"><a class="header-anchor" href="#基础配置"><span>基础配置</span></a></h3>
<p>插件配置包含以下参数：</p>
<h3 id="📋-必填参数" tabindex="-1"><a class="header-anchor" href="#📋-必填参数"><span>📋 必填参数</span></a></h3>
<ol>
<li><strong>下载链接 (urls)</strong>：
<ul>
<li>远程识别词文件的下载地址</li>
<li>支持多个链接，每行一个</li>
<li>必须是以<code v-pre>.txt</code>结尾的文本文件</li>
</ul>
</li>
</ol>
<h3 id="⚙️-可选参数" tabindex="-1"><a class="header-anchor" href="#⚙️-可选参数"><span>⚙️ 可选参数</span></a></h3>
<ol>
<li><strong>周期 (cron)</strong>：
<ul>
<li>定时下载的Cron表达式</li>
<li>默认：<code v-pre>0 * * * *</code>（每小时执行一次）</li>
<li>留空则仅支持手动执行</li>
</ul>
</li>
</ol>
<h2 id="📖-使用说明" tabindex="-1"><a class="header-anchor" href="#📖-使用说明"><span>📖 使用说明</span></a></h2>
<h3 id="下载链接配置" tabindex="-1"><a class="header-anchor" href="#下载链接配置"><span>下载链接配置</span></a></h3>
<h4 id="url格式要求" tabindex="-1"><a class="header-anchor" href="#url格式要求"><span>URL格式要求</span></a></h4>
<ul>
<li><strong>协议支持</strong>：仅支持<code v-pre>http://</code>和<code v-pre>https://</code>协议</li>
<li><strong>文件格式</strong>：必须以<code v-pre>.txt</code>结尾的纯文本文件</li>
<li><strong>文件大小</strong>：限制在1MB以内</li>
<li><strong>内容类型</strong>：必须是纯文本，不能是HTML页面</li>
</ul>
<h4 id="配置示例-以下只是参考格式-不是真实的url" tabindex="-1"><a class="header-anchor" href="#配置示例-以下只是参考格式-不是真实的url"><span>配置示例(以下只是参考格式，不是真实的URL)</span></a></h4>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code class="language-text"><span class="line">https://raw.githubusercontent.com/user/repo/main/movie_words.txt</span>
<span class="line">https://example.com/tv_words.txt</span>
<span class="line">https://cdn.example.org/anime_words.txt</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="执行流程" tabindex="-1"><a class="header-anchor" href="#执行流程"><span>执行流程</span></a></h3>
<ol>
<li>
<p><strong>文件下载</strong>：</p>
<ul>
<li>逐个访问配置的下载链接</li>
<li>验证URL格式和文件类型</li>
<li>下载文件内容并检查大小限制</li>
</ul>
</li>
<li>
<p><strong>内容验证</strong>：</p>
<ul>
<li>检查文件是否为纯文本格式</li>
<li>过滤HTML内容和无效数据</li>
<li>验证识别词格式的正确性</li>
</ul>
</li>
<li>
<p><strong>数据导入</strong>：</p>
<ul>
<li>解析MP识别词格式</li>
<li>删除旧的订阅识别词数据</li>
<li>导入新的识别词到本地库</li>
</ul>
</li>
<li>
<p><strong>结果通知</strong>：</p>
<ul>
<li>发送执行结果通知</li>
<li>显示成功导入的识别词组数量</li>
</ul>
</li>
</ol>
<h3 id="定时任务配置" tabindex="-1"><a class="header-anchor" href="#定时任务配置"><span>定时任务配置</span></a></h3>
<h4 id="cron表达式示例" tabindex="-1"><a class="header-anchor" href="#cron表达式示例"><span>Cron表达式示例</span></a></h4>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code class="language-bash"><span class="line"><span class="token comment"># 每小时执行一次</span></span>
<span class="line"><span class="token number">0</span> * * * *</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 每天凌晨2点执行</span></span>
<span class="line"><span class="token number">0</span> <span class="token number">2</span> * * *</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 每周日凌晨3点执行</span></span>
<span class="line"><span class="token number">0</span> <span class="token number">3</span> * * <span class="token number">0</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 每月1日凌晨4点执行</span></span>
<span class="line"><span class="token number">0</span> <span class="token number">4</span> <span class="token number">1</span> * *</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>📖 <strong>详细说明</strong>：关于Cron表达式的完整语法和更多示例，请参考：<a href="/docs/other/cron_rule">Cron表达式说明文档</a></p>
</blockquote>
<h3 id="操作功能" tabindex="-1"><a class="header-anchor" href="#操作功能"><span>操作功能</span></a></h3>
<h4 id="运行一次" tabindex="-1"><a class="header-anchor" href="#运行一次"><span>运行一次</span></a></h4>
<ul>
<li>立即执行一次识别词下载和导入</li>
<li>不受定时任务设置影响</li>
<li>可用于测试配置或手动更新</li>
</ul>
<h4 id="删除数据" tabindex="-1"><a class="header-anchor" href="#删除数据"><span>删除数据</span></a></h4>
<ul>
<li>删除所有通过订阅导入的识别词</li>
<li>不影响手动添加的本地识别词</li>
<li>操作不可逆，请谨慎使用</li>
</ul>
<h2 id="⚠️-注意事项" tabindex="-1"><a class="header-anchor" href="#⚠️-注意事项"><span>⚠️ 注意事项</span></a></h2>
<h3 id="使用前提" tabindex="-1"><a class="header-anchor" href="#使用前提"><span>使用前提</span></a></h3>
<ol>
<li>
<p><strong>网络要求</strong>：</p>
<ul>
<li>Media Saber能正常访问互联网</li>
<li>目标服务器稳定可访问</li>
<li>网络连接超时设置为30秒</li>
</ul>
</li>
<li>
<p><strong>文件要求</strong>：</p>
<ul>
<li>识别词文件必须是纯文本格式</li>
<li>文件大小不能超过1MB</li>
<li>文件扩展名必须是<code v-pre>.txt</code></li>
</ul>
</li>
</ol>
<h3 id="重要提醒" tabindex="-1"><a class="header-anchor" href="#重要提醒"><span>重要提醒</span></a></h3>
<ol>
<li>
<p><strong>URL正确性</strong>：</p>
<ul>
<li>确保使用正确的原始文件地址</li>
<li>GitHub文件要使用包含<code v-pre>raw</code>的地址</li>
<li>避免使用页面地址或重定向链接</li>
</ul>
</li>
<li>
<p><strong>数据安全</strong>：</p>
<ul>
<li>订阅操作会完全替换原有数据</li>
<li>建议在首次使用前备份重要的本地识别词</li>
<li>删除数据操作不可逆</li>
</ul>
</li>
<li>
<p><strong>更新频率</strong>：</p>
<ul>
<li>不建议设置过于频繁的更新周期</li>
<li>考虑远程服务器的负载和限制</li>
<li>建议每日或每周更新一次</li>
</ul>
</li>
</ol>
<h3 id="故障排除" tabindex="-1"><a class="header-anchor" href="#故障排除"><span>故障排除</span></a></h3>
<ol>
<li>
<p><strong>下载失败</strong>：</p>
<ul>
<li>检查URL地址是否正确</li>
<li>确认网络连接正常</li>
<li>验证目标服务器是否可访问</li>
</ul>
</li>
<li>
<p><strong>格式错误</strong>：</p>
<ul>
<li>确保文件是纯文本格式</li>
<li>检查文件扩展名是否为<code v-pre>.txt</code></li>
<li>避免下载HTML页面内容</li>
</ul>
</li>
<li>
<p><strong>导入失败</strong>：</p>
<ul>
<li>检查识别词文件格式是否正确</li>
<li>确认文件内容符合MP识别词标准</li>
<li>查看错误日志获取详细信息</li>
</ul>
</li>
</ol>
<h2 id="📊-使用效果" tabindex="-1"><a class="header-anchor" href="#📊-使用效果"><span>📊 使用效果</span></a></h2>
<h3 id="操作统计" tabindex="-1"><a class="header-anchor" href="#操作统计"><span>操作统计</span></a></h3>
<ul>
<li><strong>下载成功数</strong>：成功下载的识别词文件数量</li>
<li><strong>导入识别词组数</strong>：实际导入的识别词组数量</li>
<li><strong>处理耗时</strong>：完整执行流程的时间消耗</li>
</ul>
<h3 id="数据管理" tabindex="-1"><a class="header-anchor" href="#数据管理"><span>数据管理</span></a></h3>
<ul>
<li><strong>订阅数据类型</strong>：标记为&quot;订阅&quot;类型的识别词</li>
<li><strong>自动替换机制</strong>：每次更新完全替换订阅数据</li>
<li><strong>本地数据保护</strong>：不影响手动添加的识别词</li>
</ul>
<h2 id="🔗-相关链接" tabindex="-1"><a class="header-anchor" href="#🔗-相关链接"><span>🔗 相关链接</span></a></h2>
<ul>
<li><RouteLink to="/docs/cultivation_secrets/main/">修仙秘籍主页</RouteLink></li>
<li><a href="/docs/other/cron_rule">Cron表达式说明</a></li>
<li><RouteLink to="/docs/cultivation_secrets/douban_subject_subscribe/">豆瓣榜单订阅</RouteLink></li>
</ul>
<hr>
<p>🎯 <strong>提示</strong>：使用GitHub等平台的识别词文件时，确保使用原始文件地址（包含raw的链接）而不是页面地址。</p>
</div></template>


