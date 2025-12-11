<template><div><h3 id="一、插件概述" tabindex="-1"><a class="header-anchor" href="#一、插件概述"><span>一、插件概述</span></a></h3>
<p>“音乐磁场签到”是 MR 系统中的一款插件，用于实现<strong>音乐磁场自动签到</strong>功能。为确保流程顺利，请严格按照以下步骤完成配置。</p>
<hr>
<h3 id="二、使用步骤" tabindex="-1"><a class="header-anchor" href="#二、使用步骤"><span>二、使用步骤</span></a></h3>
<h4 id="_1-进入签到界面" tabindex="-1"><a class="header-anchor" href="#_1-进入签到界面"><span>1.进入签到界面</span></a></h4>
<p>路径：<strong>修仙秘籍 → 插件管理 → 安装并启动“音乐磁场签到”插件</strong></p>
<div align="center"><img src="@source/02.使用文档/12.修仙秘籍/images/音乐磁场签到.png" width="800"/></div>  
<hr>
<h4 id="_2-开启功能开关" tabindex="-1"><a class="header-anchor" href="#_2-开启功能开关"><span>2.开启功能开关</span></a></h4>
<ul>
<li><strong>插件开关</strong>：启用后激活签到功能</li>
<li><strong>通知开关</strong>：启用后接收签到结果通知</li>
</ul>
<blockquote>
<p>启用通知开关前，请先配置好通知渠道，并勾选对应插件消息的通知选项。</p>
</blockquote>
<hr>
<h4 id="_3-填写基础信息" tabindex="-1"><a class="header-anchor" href="#_3-填写基础信息"><span>3.填写基础信息</span></a></h4>
<ul>
<li><strong>Cookie</strong>：粘贴从音乐磁场网页获取的完整 Cookie 信息：</li>
</ul>
<div class="language-plaintext line-numbers-mode" data-highlighter="prismjs" data-ext="plaintext"><pre v-pre><code class="language-plaintext"><span class="line">bbs_sid=xxx; bbs_token=xxx</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><blockquote>
<p>Cookie 信息必须完整且有效，否则签到可能失败或无法获取奖励。</p>
</blockquote>
<hr>
<h4 id="_4-设置定时任务" tabindex="-1"><a class="header-anchor" href="#_4-设置定时任务"><span>4.设置定时任务</span></a></h4>
<ul>
<li>
<p><strong>方式一</strong>：手动输入 cron 表达式（格式：秒 分 时 日 月 周）<br>
例如：<code v-pre>0 11 * * * ?</code> 表示每天 11 点执行</p>
</li>
<li>
<p><strong>方式二</strong>：使用插件内置的 cron 生成器简化配置</p>
</li>
</ul>
<blockquote>
<p>📖 <strong>详细语法</strong>：关于Cron表达式的完整说明，请参考 <a href="/docs/other/cron_rule">Cron表达式说明文档</a></p>
</blockquote>
<hr>
<h4 id="_5-保存配置" tabindex="-1"><a class="header-anchor" href="#_5-保存配置"><span>5.保存配置</span></a></h4>
<p>点击“保存”按钮，弹出提示：</p>
<blockquote>
<p>签到配置保存成功</p>
</blockquote>
<hr>
<h4 id="_6-手动触发签到" tabindex="-1"><a class="header-anchor" href="#_6-手动触发签到"><span>6.手动触发签到</span></a></h4>
<p>点击“立即签到”按钮，可手动执行一次签到操作。</p>
<hr>
<h3 id="三、注意事项" tabindex="-1"><a class="header-anchor" href="#三、注意事项"><span>三、注意事项</span></a></h3>
<blockquote>
<p><strong>Cookie 有效期</strong></p>
<ul>
<li><code v-pre>bbs_sid</code> 和 <code v-pre>bbs_token</code> 必须从网页版音乐磁场获取</li>
<li>Cookie 可能因登录过期或异地登录失效，需定期更新</li>
</ul>
</blockquote>
<blockquote>
<p><strong>Cron 表达式格式</strong></p>
<ul>
<li>格式为：秒 分 时 日 月 周</li>
<li>建议使用生成器，避免格式错误</li>
<li>取值范围：
<ul>
<li>秒：0 - 59</li>
<li>分：0 - 59</li>
<li>时：0 - 23</li>
<li>日：1 - 31</li>
<li>月：1 - 12</li>
<li>周：0 - 6（0 和 7 均代表周日）</li>
</ul>
</li>
</ul>
</blockquote>
<blockquote>
<p><strong>签到时间限制</strong></p>
<ul>
<li>签到需在平台有效时间段内执行</li>
<li>若失败，请检查网络后重试</li>
</ul>
</blockquote>
<blockquote>
<p><strong>签到频率限制</strong></p>
<ul>
<li>建议每日仅设置一次定时任务</li>
<li>频繁签到可能触发平台风控机制</li>
</ul>
</blockquote>
<hr>
<h3 id="四、示例配置图" tabindex="-1"><a class="header-anchor" href="#四、示例配置图"><span>四、示例配置图</span></a></h3>
<div align="center"><img src="@source/02.使用文档/12.修仙秘籍/images/音乐磁场签到.png" width="800"/></div>  
<div align="center">图示包含 Cookie 填写示例及开关状态</div>
<hr>
<p>配置完成后，插件将自动执行签到任务。如遇问题，请检查网络连接及 Cookie 有效性后重试。</p>
<hr>
<div align="center">
  <span style="font-size: 16px;">🎉 本篇 Wiki 由热心大佬 <span style="color: #2196f3; font-weight: bold;">Estara</span> 提供支持与贡献，感谢他的无私分享与帮助！</span>
</div>
<hr>
</div></template>


