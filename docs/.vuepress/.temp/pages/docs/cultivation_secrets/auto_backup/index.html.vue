<template><div><h1 id="💾-自动备份" tabindex="-1"><a class="header-anchor" href="#💾-自动备份"><span>💾 自动备份</span></a></h1>
<p><strong>自动备份</strong> 是一个用于自动备份Media Saber系统配置文件的插件，可以定期创建配置备份，自动管理备份数量，确保系统数据安全。</p>
<h2 id="⚙️-功能特点" tabindex="-1"><a class="header-anchor" href="#⚙️-功能特点"><span>⚙️ 功能特点</span></a></h2>
<h3 id="🔄-自动备份" tabindex="-1"><a class="header-anchor" href="#🔄-自动备份"><span>🔄 自动备份</span></a></h3>
<ul>
<li><strong>定时备份</strong>：按设定周期自动创建配置备份</li>
<li><strong>数量管理</strong>：自动控制备份文件数量，超出时删除最早备份</li>
<li><strong>一键备份</strong>：支持手动触发即时备份</li>
<li><strong>通知提醒</strong>：备份完成后可发送通知</li>
</ul>
<h3 id="📦-备份范围" tabindex="-1"><a class="header-anchor" href="#📦-备份范围"><span>📦 备份范围</span></a></h3>
<ul>
<li><strong>配置文件备份</strong>：备份当前系统配置</li>
<li><strong>不包含数据库</strong>：仅备份配置文件，不备份数据库</li>
<li><strong>服务器存储</strong>：备份文件保存在服务器上</li>
</ul>
<h2 id="🚀-配置指南" tabindex="-1"><a class="header-anchor" href="#🚀-配置指南"><span>🚀 配置指南</span></a></h2>
<h3 id="基础配置" tabindex="-1"><a class="header-anchor" href="#基础配置"><span>基础配置</span></a></h3>
<p>插件配置包含以下参数：</p>
<h3 id="📋-必填参数" tabindex="-1"><a class="header-anchor" href="#📋-必填参数"><span>📋 必填参数</span></a></h3>
<ol>
<li><strong>备份最大保存数量 (count)</strong>：
<ul>
<li>设置备份文件的最大保存数量</li>
<li>超过此数量后自动删除最早的备份</li>
<li>建议设置为7-30个</li>
</ul>
</li>
</ol>
<h3 id="⚙️-可选参数" tabindex="-1"><a class="header-anchor" href="#⚙️-可选参数"><span>⚙️ 可选参数</span></a></h3>
<ol>
<li>
<p><strong>定时任务 (cron)</strong>：</p>
<ul>
<li>设置自动备份的执行周期</li>
<li>使用Cron表达式格式</li>
<li>留空则仅支持手动备份</li>
</ul>
</li>
<li>
<p><strong>通知 (notice)</strong>：</p>
<ul>
<li>开启后发送备份结果通知</li>
<li>需要在消息通知渠道中勾选本插件</li>
</ul>
</li>
</ol>
<h2 id="📖-使用说明" tabindex="-1"><a class="header-anchor" href="#📖-使用说明"><span>📖 使用说明</span></a></h2>
<h3 id="备份内容" tabindex="-1"><a class="header-anchor" href="#备份内容"><span>备份内容</span></a></h3>
<h4 id="备份范围" tabindex="-1"><a class="header-anchor" href="#备份范围"><span>备份范围</span></a></h4>
<ul>
<li><strong>系统配置文件</strong>：包含系统的各种配置</li>
<li><strong>配置目录</strong>：相关的配置文件和设置</li>
<li><strong>不包含数据库</strong>：数据库需要单独备份</li>
</ul>
<h4 id="备份格式" tabindex="-1"><a class="header-anchor" href="#备份格式"><span>备份格式</span></a></h4>
<ul>
<li>备份文件自动打包为压缩格式</li>
<li>包含时间戳便于识别备份时间</li>
<li>存储在服务器指定目录中</li>
</ul>
<h3 id="定时任务配置" tabindex="-1"><a class="header-anchor" href="#定时任务配置"><span>定时任务配置</span></a></h3>
<h4 id="cron表达式示例" tabindex="-1"><a class="header-anchor" href="#cron表达式示例"><span>Cron表达式示例</span></a></h4>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code class="language-bash"><span class="line"><span class="token comment"># 每天凌晨2点备份</span></span>
<span class="line"><span class="token number">0</span> <span class="token number">2</span> * * *</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 每周日凌晨3点备份</span></span>
<span class="line"><span class="token number">0</span> <span class="token number">3</span> * * <span class="token number">0</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 每月1日凌晨4点备份</span></span>
<span class="line"><span class="token number">0</span> <span class="token number">4</span> <span class="token number">1</span> * *</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 每12小时备份一次</span></span>
<span class="line"><span class="token number">0</span> */12 * * *</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>📖 <strong>详细说明</strong>：关于Cron表达式的完整语法和更多示例，请参考：<a href="/docs/other/cron_rule">Cron表达式说明文档</a></p>
</blockquote>
<h3 id="操作功能" tabindex="-1"><a class="header-anchor" href="#操作功能"><span>操作功能</span></a></h3>
<h4 id="立即备份一次" tabindex="-1"><a class="header-anchor" href="#立即备份一次"><span>立即备份一次</span></a></h4>
<ul>
<li>手动触发一次完整备份</li>
<li>不受定时任务设置影响</li>
<li>立即执行备份操作</li>
</ul>
<h3 id="备份管理" tabindex="-1"><a class="header-anchor" href="#备份管理"><span>备份管理</span></a></h3>
<h4 id="自动清理机制" tabindex="-1"><a class="header-anchor" href="#自动清理机制"><span>自动清理机制</span></a></h4>
<ol>
<li>
<p><strong>数量控制</strong>：</p>
<ul>
<li>检查当前备份文件数量</li>
<li>超过设定最大数量时自动清理</li>
</ul>
</li>
<li>
<p><strong>清理策略</strong>：</p>
<ul>
<li>按时间顺序删除最早的备份</li>
<li>保留最新的备份文件</li>
</ul>
</li>
<li>
<p><strong>空间管理</strong>：</p>
<ul>
<li>避免备份文件无限增长</li>
<li>合理控制磁盘空间使用</li>
</ul>
</li>
</ol>
<h2 id="⚠️-注意事项" tabindex="-1"><a class="header-anchor" href="#⚠️-注意事项"><span>⚠️ 注意事项</span></a></h2>
<h3 id="重要提醒" tabindex="-1"><a class="header-anchor" href="#重要提醒"><span>重要提醒</span></a></h3>
<ol>
<li>
<p><strong>备份范围限制</strong>：</p>
<ul>
<li><strong>备份不包含数据库</strong></li>
<li>仅备份配置文件和设置</li>
<li>数据库需要通过其他方式单独备份</li>
</ul>
</li>
<li>
<p><strong>存储位置</strong>：</p>
<ul>
<li>备份文件保存在服务器上</li>
<li>请定期检查和清理备份文件</li>
<li>确保有足够的磁盘空间</li>
</ul>
</li>
<li>
<p><strong>定时任务设置</strong>：</p>
<ul>
<li>确保定时任务设置正确</li>
<li>避免错过重要的备份时间</li>
<li>建议设置合理的备份频率</li>
</ul>
</li>
</ol>
<h3 id="使用建议" tabindex="-1"><a class="header-anchor" href="#使用建议"><span>使用建议</span></a></h3>
<ol>
<li>
<p><strong>备份频率</strong>：</p>
<ul>
<li>根据配置变更频率设置备份周期</li>
<li>重要系统建议每日备份</li>
<li>测试环境可适当降低频率</li>
</ul>
</li>
<li>
<p><strong>数量设置</strong>：</p>
<ul>
<li>保留足够的备份版本用于回滚</li>
<li>避免设置过大数量占用过多空间</li>
<li>推荐保留7-30个备份</li>
</ul>
</li>
<li>
<p><strong>监控备份</strong>：</p>
<ul>
<li>开启通知功能监控备份状态</li>
<li>定期检查备份文件的完整性</li>
<li>确保备份操作正常执行</li>
</ul>
</li>
</ol>
<h3 id="故障排除" tabindex="-1"><a class="header-anchor" href="#故障排除"><span>故障排除</span></a></h3>
<ol>
<li>
<p><strong>备份失败</strong>：</p>
<ul>
<li>检查磁盘空间是否充足</li>
<li>确认文件权限设置正确</li>
<li>查看系统日志获取详细错误信息</li>
</ul>
</li>
<li>
<p><strong>通知不工作</strong>：</p>
<ul>
<li>确认通知渠道配置正确</li>
<li>检查是否勾选了插件通知</li>
<li>验证通知服务状态</li>
</ul>
</li>
<li>
<p><strong>自动清理异常</strong>：</p>
<ul>
<li>检查备份目录权限</li>
<li>确认文件是否被其他程序占用</li>
<li>手动清理异常的备份文件</li>
</ul>
</li>
</ol>
<h2 id="📊-使用效果" tabindex="-1"><a class="header-anchor" href="#📊-使用效果"><span>📊 使用效果</span></a></h2>
<h3 id="备份统计" tabindex="-1"><a class="header-anchor" href="#备份统计"><span>备份统计</span></a></h3>
<ul>
<li><strong>备份成功次数</strong>：成功执行的备份次数</li>
<li><strong>备份文件数量</strong>：当前保存的备份文件数</li>
<li><strong>磁盘空间使用</strong>：备份文件占用的存储空间</li>
<li><strong>最后备份时间</strong>：最近一次备份的执行时间</li>
</ul>
<h3 id="安全保障" tabindex="-1"><a class="header-anchor" href="#安全保障"><span>安全保障</span></a></h3>
<ul>
<li><strong>配置安全</strong>：防止配置丢失或损坏</li>
<li><strong>快速恢复</strong>：便于快速恢复到历史状态</li>
<li><strong>版本管理</strong>：保留多个版本便于选择</li>
</ul>
<h2 id="🔗-相关链接" tabindex="-1"><a class="header-anchor" href="#🔗-相关链接"><span>🔗 相关链接</span></a></h2>
<ul>
<li><RouteLink to="/docs/cultivation_secrets/main/">修仙秘籍主页</RouteLink></li>
<li><a href="/docs/other/cron_rule">Cron表达式说明</a></li>
</ul>
<hr>
<p>🎯 <strong>提示</strong>：自动备份仅备份配置文件，不包含数据库。数据库备份需要通过其他方式单独进行。</p>
</div></template>


