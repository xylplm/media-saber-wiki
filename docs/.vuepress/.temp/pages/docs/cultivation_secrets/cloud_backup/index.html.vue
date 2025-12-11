<template><div><h1 id="☁️-云备份" tabindex="-1"><a class="header-anchor" href="#☁️-云备份"><span>☁️ 云备份</span></a></h1>
<p><strong>云备份</strong> 插件用于定时将本地文件同步到云存储（例如挂载的对象存储目录），并可选启用本地加密 / 解密功能，提升重要数据的安全性。</p>
<blockquote>
<p>与「自动备份」插件偏向备份系统配置不同，「云备份」更偏向<strong>目录级文件备份与加解密</strong>。</p>
</blockquote>
<h2 id="⚙️-功能特点" tabindex="-1"><a class="header-anchor" href="#⚙️-功能特点"><span>⚙️ 功能特点</span></a></h2>
<ul>
<li>将本地指定目录的文件同步到云存储目录</li>
<li>支持基于 AES-GCM 的文件加密 / 解密</li>
<li>支持 <code v-pre>.gitignore</code> 语法的文件忽略规则</li>
<li>支持断点恢复与「恢复出厂」重置</li>
<li>支持定时任务和手动运行</li>
</ul>
<h2 id="🚀-配置指南" tabindex="-1"><a class="header-anchor" href="#🚀-配置指南"><span>🚀 配置指南</span></a></h2>
<p>以下字段对应插件配置页面中的选项：</p>
<h3 id="📋-通用选项" tabindex="-1"><a class="header-anchor" href="#📋-通用选项"><span>📋 通用选项</span></a></h3>
<ol>
<li>
<p><strong>消息推送 (notice)</strong></p>
<ul>
<li>选填，布尔开关</li>
<li>开启后会将本次任务结果通过通知渠道发送</li>
</ul>
</li>
<li>
<p><strong>跳过首次 (skipFirst)</strong></p>
<ul>
<li>选填，布尔开关</li>
<li>首次运行时忽略当前已有文件，只记录基线，从下一次开始增量备份</li>
</ul>
</li>
<li>
<p><strong>动态目录 (dynamicDir)</strong></p>
<ul>
<li>选填，布尔开关</li>
<li>适用于持续写入的大文件目录</li>
<li>开启后会额外检查文件写入状态，存在一定性能开销，不建议无必要时开启</li>
</ul>
</li>
<li>
<p><strong>周期 (cron)</strong></p>
<ul>
<li>选填</li>
<li>使用 Cron 表达式配置备份频率，例如：<code v-pre>0 * * * *</code> 每小时一次</li>
</ul>
</li>
</ol>
<h3 id="📂-路径与加密相关" tabindex="-1"><a class="header-anchor" href="#📂-路径与加密相关"><span>📂 路径与加密相关</span></a></h3>
<ol start="5">
<li>
<p><strong>备份路径 (localPath)</strong></p>
<ul>
<li>必填</li>
<li>要进行备份的本地目录</li>
<li>存储类型固定为本地（<code v-pre>selectedStorageType = 1</code>）</li>
</ul>
</li>
<li>
<p><strong>加密算法 (aesType)</strong></p>
<ul>
<li>选填，数字类型</li>
<li>通过下拉选项选择安全级别：常规 / 较高 / 最高安全等级等</li>
<li><strong>算法保存后不能更改</strong></li>
</ul>
</li>
<li>
<p><strong>密钥 (key)</strong></p>
<ul>
<li>选填，字符串</li>
<li>AES 加密密钥，建议使用「生成密钥」按钮自动生成</li>
<li><strong>保存后不能更改，请务必妥善备份！</strong></li>
</ul>
</li>
<li>
<p><strong>生成密钥 (genKey)</strong></p>
<ul>
<li>按钮</li>
<li>先选择算法并保存配置，再点击此按钮自动生成并填充密钥</li>
</ul>
</li>
<li>
<p><strong>加密路径 (encryptOutputPath)</strong></p>
<ul>
<li>选填</li>
<li>加密后文件存放目录，需要有写权限</li>
</ul>
</li>
<li>
<p><strong>一键加密 (encrypt)</strong></p>
<ul>
<li>按钮</li>
<li>将「备份路径」中的所有文件加密后输出到「加密路径」</li>
</ul>
</li>
<li>
<p><strong>备份成功删除加密文件 (deleteEncryptFileAfterBackup)</strong></p>
<ul>
<li>选填</li>
<li>开启后，在成功完成云备份后删除加密路径下的中间文件</li>
</ul>
</li>
<li>
<p><strong>云存储路径 (cloudPath)</strong></p>
<ul>
<li>必填</li>
<li>实际云存储挂载目录（例如对象存储挂载点），存放最终备份文件</li>
<li>存储类型固定为云存储（<code v-pre>selectedStorageType = 2</code>）</li>
</ul>
</li>
</ol>
<h3 id="🧹-忽略与解密" tabindex="-1"><a class="header-anchor" href="#🧹-忽略与解密"><span>🧹 忽略与解密</span></a></h3>
<ol start="13">
<li>
<p><strong>文件忽略 (ignorePatterns)</strong></p>
<ul>
<li>选填，多行文本</li>
<li>使用 <code v-pre>.gitignore</code> 规则过滤文件，多个规则用换行分隔</li>
<li>示例配置（界面中也有推荐）：<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code class="language-text"><span class="line">.DS_Store</span>
<span class="line">._*</span>
<span class="line">.Trashes/</span>
<span class="line">Thumbs.db</span>
<span class="line">desktop.ini</span>
<span class="line">logs/</span>
<span class="line">*.tmp</span>
<span class="line">**/cache/**</span>
<span class="line">!**/cache/config.json</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
</li>
<li>
<p><strong>要解密的路径 (decryptInputPath)</strong></p>
<ul>
<li>选填</li>
<li>需要解密的加密文件所在目录</li>
</ul>
</li>
<li>
<p><strong>解密输出路径 (decryptOutputPath)</strong></p>
<ul>
<li>选填</li>
<li>解密后文件输出目录，需要写权限</li>
</ul>
</li>
<li>
<p><strong>一键解密 (decrypt)</strong></p>
<ul>
<li>按钮</li>
<li>将「要解密的路径」中的文件全部按当前配置解密到「解密输出路径」</li>
</ul>
</li>
</ol>
<h3 id="🛠️-工具栏操作" tabindex="-1"><a class="header-anchor" href="#🛠️-工具栏操作"><span>🛠️ 工具栏操作</span></a></h3>
<ol start="17">
<li>
<p><strong>运行一次 (run)</strong></p>
<ul>
<li>立即执行一次完整备份流程（含加密 / 同步等）</li>
</ul>
</li>
<li>
<p><strong>异常中断恢复 (continueForBreak)</strong></p>
<ul>
<li>用于在重启或异常中断后继续未完成的备份任务</li>
</ul>
</li>
<li>
<p><strong>恢复出厂设置 (reset)</strong></p>
<ul>
<li>清空所有备份相关记录与元数据，将插件状态重置</li>
</ul>
</li>
<li>
<p><strong>温馨提示 (tips)</strong></p>
<ul>
<li>只读说明：当前采用 AES-GCM 算法，支持大文件自适应分块加解密</li>
</ul>
</li>
</ol>
<h2 id="⚠️-注意事项" tabindex="-1"><a class="header-anchor" href="#⚠️-注意事项"><span>⚠️ 注意事项</span></a></h2>
<ul>
<li>请务必妥善保管加密密钥，一旦遗失，将无法解密已加密的备份文件。</li>
<li>建议在正式使用前，选取小范围文件做加解密演练，确认流程正确。</li>
<li>云存储路径所在的挂载目录需要保证长期稳定可用，否则备份可能失败。</li>
<li>动态目录模式仅在确有大文件持续写入的情况才考虑开启，以免造成不必要的性能开销。</li>
</ul>
<h2 id="🔗-相关链接" tabindex="-1"><a class="header-anchor" href="#🔗-相关链接"><span>🔗 相关链接</span></a></h2>
<ul>
<li><RouteLink to="/docs/cultivation_secrets/main/">修仙秘籍主页</RouteLink></li>
<li><RouteLink to="/docs/other/cron_rule/">Cron 表达式说明</RouteLink></li>
</ul>
</div></template>


