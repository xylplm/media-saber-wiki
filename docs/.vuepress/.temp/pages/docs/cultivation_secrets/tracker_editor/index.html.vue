<template><div><h1 id="🔄-tracker替换" tabindex="-1"><a class="header-anchor" href="#🔄-tracker替换"><span>🔄 Tracker替换</span></a></h1>
<p><strong>Tracker替换</strong> 是一个对下载器中所有种子的Tracker进行字符串替换的插件，支持批量替换和可选的周期性巡检功能，帮助修复失效Tracker或迁移到新的Tracker地址。</p>
<h2 id="⚙️-功能特点" tabindex="-1"><a class="header-anchor" href="#⚙️-功能特点"><span>⚙️ 功能特点</span></a></h2>
<h3 id="🎯-字符串替换" tabindex="-1"><a class="header-anchor" href="#🎯-字符串替换"><span>🎯 字符串替换</span></a></h3>
<ul>
<li><strong>精确替换</strong>：基于字符串匹配进行Tracker替换</li>
<li><strong>批量处理</strong>：一次性处理下载器中的所有种子</li>
<li><strong>规则配置</strong>：支持多条替换规则同时生效</li>
<li><strong>即时生效</strong>：替换后立即在下载器中生效</li>
</ul>
<h3 id="📊-可选巡检" tabindex="-1"><a class="header-anchor" href="#📊-可选巡检"><span>📊 可选巡检</span></a></h3>
<ul>
<li><strong>周期执行</strong>：可设置定时巡检（不推荐）</li>
<li><strong>消息推送</strong>：支持替换结果通知</li>
<li><strong>操作日志</strong>：记录详细的替换过程</li>
</ul>
<h2 id="🚀-配置指南" tabindex="-1"><a class="header-anchor" href="#🚀-配置指南"><span>🚀 配置指南</span></a></h2>
<h3 id="基础配置" tabindex="-1"><a class="header-anchor" href="#基础配置"><span>基础配置</span></a></h3>
<p>插件配置包含以下参数：</p>
<h3 id="📋-必填参数" tabindex="-1"><a class="header-anchor" href="#📋-必填参数"><span>📋 必填参数</span></a></h3>
<ol>
<li>
<p><strong>下载器 (downloaderId)</strong>：</p>
<ul>
<li>选择要处理的下载器</li>
<li>支持qBittorrent和Transmission</li>
</ul>
</li>
<li>
<p><strong>Tracker替换配置 (trackerConfig)</strong>：</p>
<ul>
<li>每一行一个替换规则</li>
<li>格式：<code v-pre>待替换文本|替换的文本</code></li>
<li>支持多条规则</li>
</ul>
</li>
</ol>
<h3 id="⚙️-可选参数" tabindex="-1"><a class="header-anchor" href="#⚙️-可选参数"><span>⚙️ 可选参数</span></a></h3>
<ol>
<li>
<p><strong>周期执行 (cron)</strong>：</p>
<ul>
<li><strong>不推荐使用</strong>：会增加下载器负载</li>
<li>Cron表达式，留空则禁用周期执行</li>
<li>示例：<code v-pre>* * * * *</code>（每分钟执行一次）</li>
</ul>
</li>
<li>
<p><strong>消息推送 (notice)</strong>：</p>
<ul>
<li>开启后将替换结果进行消息推送</li>
<li>默认关闭</li>
</ul>
</li>
</ol>
<h2 id="📖-使用说明" tabindex="-1"><a class="header-anchor" href="#📖-使用说明"><span>📖 使用说明</span></a></h2>
<h3 id="替换规则配置" tabindex="-1"><a class="header-anchor" href="#替换规则配置"><span>替换规则配置</span></a></h3>
<h4 id="配置格式" tabindex="-1"><a class="header-anchor" href="#配置格式"><span>配置格式</span></a></h4>
<p>每行一个替换规则，使用<code v-pre>|</code>分隔待替换文本和替换文本：</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code class="language-text"><span class="line">待替换文本|替换的文本</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h4 id="配置示例" tabindex="-1"><a class="header-anchor" href="#配置示例"><span>配置示例</span></a></h4>
<p><strong>域名替换</strong>：</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code class="language-text"><span class="line">baidu.com|qq.com</span>
<span class="line">https://baidu.com|https://qq.com</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>完整地址替换</strong>：</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code class="language-text"><span class="line">https://old-tracker.com:8080/announce|https://new-tracker.com:443/announce</span>
<span class="line">tracker.oldsite.com|tracker.newsite.org</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>端口修改</strong>：</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code class="language-text"><span class="line">:8080/|:443/</span>
<span class="line">http://tracker.site.com|https://tracker.site.com</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="替换逻辑" tabindex="-1"><a class="header-anchor" href="#替换逻辑"><span>替换逻辑</span></a></h4>
<p><strong>字符串替换</strong>：使用标准的字符串<code v-pre>replace</code>操作</p>
<ul>
<li>原Tracker：<code v-pre>https://baidu.com/announce.php?passkey=xxxx</code></li>
<li>待替换：<code v-pre>baidu.com</code></li>
<li>替换文本：<code v-pre>qq.com</code></li>
<li>结果：<code v-pre>https://qq.com/announce.php?passkey=xxxx</code></li>
</ul>
<p><strong>完整示例</strong>：</p>
<ul>
<li>原Tracker：<code v-pre>https://baidu.com/announce.php?passkey=xxxx</code></li>
<li>待替换：<code v-pre>https://baidu.com</code></li>
<li>替换文本：<code v-pre>https://qq.com</code></li>
<li>结果：<code v-pre>https://qq.com/announce.php?passkey=xxxx</code></li>
</ul>
<h3 id="执行流程" tabindex="-1"><a class="header-anchor" href="#执行流程"><span>执行流程</span></a></h3>
<ol>
<li>
<p><strong>连接下载器</strong>：</p>
<ul>
<li>连接到指定的下载器</li>
<li>获取所有种子的Tracker信息</li>
</ul>
</li>
<li>
<p><strong>应用替换规则</strong>：</p>
<ul>
<li>逐条应用配置的替换规则</li>
<li>对每个种子的每个Tracker进行字符串替换</li>
</ul>
</li>
<li>
<p><strong>更新Tracker</strong>：</p>
<ul>
<li>将替换后的Tracker更新到下载器</li>
<li>记录替换操作结果</li>
</ul>
</li>
<li>
<p><strong>结果通知</strong>：</p>
<ul>
<li>统计替换结果</li>
<li>发送通知（如开启）</li>
</ul>
</li>
</ol>
<h3 id="周期执行配置" tabindex="-1"><a class="header-anchor" href="#周期执行配置"><span>周期执行配置</span></a></h3>
<h4 id="⚠️-重要提醒" tabindex="-1"><a class="header-anchor" href="#⚠️-重要提醒"><span>⚠️ 重要提醒</span></a></h4>
<ul>
<li><strong>不推荐开启周期巡检</strong></li>
<li>会增加下载器的负载</li>
<li>可能影响下载器性能</li>
</ul>
<h4 id="cron表达式示例-仅供参考" tabindex="-1"><a class="header-anchor" href="#cron表达式示例-仅供参考"><span>Cron表达式示例（仅供参考）</span></a></h4>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code class="language-bash"><span class="line"><span class="token comment"># 每分钟执行一次（极不推荐）</span></span>
<span class="line">* * * * *</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 每小时执行一次（不推荐）</span></span>
<span class="line"><span class="token number">0</span> * * * *</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 每天执行一次（谨慎使用）</span></span>
<span class="line"><span class="token number">0</span> <span class="token number">2</span> * * *</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>📖 <strong>详细说明</strong>：关于Cron表达式的完整语法和更多示例，请参考：<a href="/docs/other/cron_rule">Cron表达式说明文档</a></p>
</blockquote>
<h3 id="操作功能" tabindex="-1"><a class="header-anchor" href="#操作功能"><span>操作功能</span></a></h3>
<h4 id="运行一次" tabindex="-1"><a class="header-anchor" href="#运行一次"><span>运行一次</span></a></h4>
<ul>
<li>立即执行一次Tracker替换</li>
<li><strong>强烈建议先保存配置后再运行</strong></li>
<li>不受周期执行设置影响</li>
</ul>
<h2 id="⚠️-注意事项" tabindex="-1"><a class="header-anchor" href="#⚠️-注意事项"><span>⚠️ 注意事项</span></a></h2>
<h3 id="使用建议" tabindex="-1"><a class="header-anchor" href="#使用建议"><span>使用建议</span></a></h3>
<ol>
<li>
<p><strong>测试验证</strong>：</p>
<ul>
<li><strong>强烈建议</strong>先添加一个测试种子验证替换效果</li>
<li>确认程序是否正常运行</li>
<li>验证替换规则是否符合预期</li>
</ul>
</li>
<li>
<p><strong>配置保存</strong>：</p>
<ul>
<li>请先确认保存配置，再点击&quot;运行一次&quot;</li>
<li>配置变更后需要重新保存</li>
</ul>
</li>
<li>
<p><strong>规则设计</strong>：</p>
<ul>
<li>替换规则要尽可能精确</li>
<li>避免过于宽泛的匹配模式</li>
<li>考虑可能的副作用</li>
</ul>
</li>
</ol>
<h3 id="重要提醒" tabindex="-1"><a class="header-anchor" href="#重要提醒"><span>重要提醒</span></a></h3>
<ol>
<li>
<p><strong>操作不可逆</strong>：</p>
<ul>
<li>Tracker替换操作无法撤销</li>
<li>建议事先备份重要种子信息</li>
<li>谨慎设置替换规则</li>
</ul>
</li>
<li>
<p><strong>下载器负载</strong>：</p>
<ul>
<li>大量种子替换可能影响下载器性能</li>
<li>避免在下载器繁忙时执行</li>
<li><strong>不建议开启周期执行</strong></li>
</ul>
</li>
<li>
<p><strong>网络影响</strong>：</p>
<ul>
<li>替换后的Tracker需要能正常访问</li>
<li>确认新Tracker地址的有效性</li>
<li>考虑网络环境对访问的影响</li>
</ul>
</li>
</ol>
<h3 id="故障排除" tabindex="-1"><a class="header-anchor" href="#故障排除"><span>故障排除</span></a></h3>
<ol>
<li>
<p><strong>替换不生效</strong>：</p>
<ul>
<li>确认已保存配置后再运行</li>
<li>检查替换规则格式是否正确</li>
<li>验证下载器连接状态</li>
</ul>
</li>
<li>
<p><strong>规则匹配问题</strong>：</p>
<ul>
<li>检查待替换文本是否完全匹配</li>
<li>注意大小写敏感性</li>
<li>确认特殊字符的处理</li>
</ul>
</li>
<li>
<p><strong>性能问题</strong>：</p>
<ul>
<li>暂停周期执行功能</li>
<li>减少同时处理的种子数量</li>
<li>选择下载器空闲时执行</li>
</ul>
</li>
</ol>
<h2 id="📊-使用效果" tabindex="-1"><a class="header-anchor" href="#📊-使用效果"><span>📊 使用效果</span></a></h2>
<h3 id="操作统计" tabindex="-1"><a class="header-anchor" href="#操作统计"><span>操作统计</span></a></h3>
<ul>
<li><strong>处理种子数</strong>：检查的种子总数</li>
<li><strong>替换成功数</strong>：成功替换的Tracker数量</li>
<li><strong>替换规则数</strong>：应用的替换规则数量</li>
<li><strong>执行耗时</strong>：完整替换过程的时间</li>
</ul>
<h3 id="实际效果" tabindex="-1"><a class="header-anchor" href="#实际效果"><span>实际效果</span></a></h3>
<ul>
<li><strong>Tracker更新</strong>：失效Tracker得到修复</li>
<li><strong>连接改善</strong>：种子连接状态提升</li>
<li><strong>维护简化</strong>：批量维护Tracker地址</li>
</ul>
<h2 id="🔗-相关链接" tabindex="-1"><a class="header-anchor" href="#🔗-相关链接"><span>🔗 相关链接</span></a></h2>
<ul>
<li><RouteLink to="/docs/cultivation_secrets/main/">修仙秘籍主页</RouteLink></li>
<li><a href="/docs/other/cron_rule">Cron表达式说明</a></li>
<li><RouteLink to="/docs/cultivation_secrets/downloader_site_tag/">下载器站点标签</RouteLink></li>
<li><RouteLink to="/docs/cultivation_secrets/auto_delete_torrent/">自动删种</RouteLink></li>
</ul>
<hr>
<p>🎯 <strong>提示</strong>：使用前请先用单个种子测试替换规则，确认效果正确后再批量执行。不建议开启周期执行以避免影响下载器性能。</p>
</div></template>


