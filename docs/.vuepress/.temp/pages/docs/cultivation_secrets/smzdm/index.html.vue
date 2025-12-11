<template><div><h2 id="什么值得买签到插件使用指南" tabindex="-1"><a class="header-anchor" href="#什么值得买签到插件使用指南"><span>什么值得买签到插件使用指南</span></a></h2>
<h3 id="一、概述" tabindex="-1"><a class="header-anchor" href="#一、概述"><span>一、概述</span></a></h3>
<p>“什么值得买签到”是MR的一款插件，用于实现什么值得买平台的自动签到功能。为确保流程顺利，请严格按照以下步骤配置：</p>
<hr>
<h3 id="二、使用步骤" tabindex="-1"><a class="header-anchor" href="#二、使用步骤"><span>二、使用步骤</span></a></h3>
<ol>
<li>
<p><strong>进入签到界面</strong><br>
登录MS系统，打开<strong>修仙秘籍</strong>插件管理界面，安装“什么值得买签到”插件并启动，进入配置页面。</p>
</li>
<li>
<p><strong>开启功能开关</strong></p>
<ol>
<li><strong>插件开关</strong>：启用后激活签到功能。</li>
<li><strong>通知开关</strong>：如需接收签到结果通知，需提前配置通知渠道并开启此选项。<br>
<em>（注意：启用通知开关前，请确认通知渠道内勾选了对应插件消息的<strong>通知选项</strong>。）</em></li>
</ol>
</li>
<li>
<p><strong>填写基础信息</strong></p>
<ol>
<li><strong>Cookie</strong>：按格式粘贴从什么值得买平台获取的有效Cookie：<div class="language-plaintext line-numbers-mode" data-highlighter="prismjs" data-ext="plaintext"><pre v-pre><code class="language-plaintext"><span class="line">device_id=xxxx; ad_json_feed=xxxx; HMACCOUNT=xxxx; footer_floating_layer=xxxx; user=xxxx; smzdm_id=xxxx; _zdmA.uid=xxxx; _zdmA.time=xxxx; smzdm_user_source=xxxx; Hm_lvt_9b7ac3d38f30fe89ff0b8a0546904e58=xxxx; _zdmA.vid=xxxx; ad_date=xxxx; sess=xxxx; Hm_lpvt_9b7ac3d38f30fe89ff0b8a0546904e58=xxxx; bannerCounter=xxxx; __ckguid=xxxx; homepage_sug=xxxx; r_sort_type=xxxx; sensorsdata2015jssdkcross=xxxx  </span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><em>（注意：Cookie信息必须完整且有效，否则可能导致签到失败或无法获取奖励）</em></li>
</ol>
</li>
<li>
<p><strong>设置定时任务</strong></p>
<ol>
<li><strong>方式一</strong>：手动输入cron表达式（格式：秒 分 时 日 月 周），例如 <code v-pre>0 9 * * * ?</code> 表示每天9点执行。</li>
<li><strong>方式二</strong>：使用插件内置的cron生成器简化配置。</li>
</ol>
</li>
<li>
<p><strong>保存配置</strong><br>
完成所有设置后，点击“保存”按钮以应用配置。</p>
</li>
<li>
<p><strong>手动触发签到</strong><br>
点击“立即签到”按钮可手动执行一次签到操作。</p>
</li>
</ol>
<hr>
<h3 id="三、注意事项" tabindex="-1"><a class="header-anchor" href="#三、注意事项"><span>三、注意事项</span></a></h3>
<blockquote>
<p>[!CAUTION]</p>
<ol>
<li><strong>Cookie有效期</strong>
<ul>
<li>必须从什么值得买平台网页获取，确保信息完整且有效。</li>
<li>Cookie可能因登录状态过期或异地登录失效，需定期检查更新。</li>
</ul>
</li>
<li><strong>Cron表达式格式</strong>
<ul>
<li>严格遵循“秒 分 时 日 月 周”顺序，建议通过生成器配置避免错误。</li>
<li>具体取值范围：
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
</li>
<li><strong>签到时间限制</strong>
<ul>
<li>确保签到操作在平台规定的有效时间段内执行，避免错过奖励。</li>
<li>如因网络问题导致失败，请检查网络后重试。</li>
</ul>
</li>
<li><strong>签到频率限制</strong>
<ul>
<li>单日多次签到可能触发平台风控，建议每日仅设置一次定时任务。</li>
</ul>
</li>
</ol>
</blockquote>
<hr>
<h3 id="四、示例配置图" tabindex="-1"><a class="header-anchor" href="#四、示例配置图"><span>四、示例配置图</span></a></h3>
<div align="center"><img src="@source/02.使用文档/12.修仙秘籍/images/什么值得买.png" width="800"/></div> 
*（图示包含Cookie填写示例及开关状态)*  
<p>通过以上配置，插件将自动完成签到操作。如遇问题，请检查网络及Cookie状态后重试。</p>
<hr>
<div align="center">
  <span style="font-size: 16px;">🎉 本篇 Wiki 由热心大佬 <span style="color: #2196f3; font-weight: bold;">Estara</span> 提供支持与贡献，感谢他的无私分享与帮助！</span>
</div>
<hr>
</div></template>


