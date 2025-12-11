<template><div><h3 id="申请-tmdb-api" tabindex="-1"><a class="header-anchor" href="#申请-tmdb-api"><span>申请 TMDB API</span></a></h3>
<p>Media Saber 需要使用 TMDB 提供的元数据接口服务，首次使用前请按以下步骤申请 API Key。</p>
<hr>
<h4 id="_1-注册-tmdb-账号" tabindex="-1"><a class="header-anchor" href="#_1-注册-tmdb-账号"><span>1. 注册 TMDB 账号</span></a></h4>
<p>访问 <a href="https://www.themoviedb.org/" target="_blank" rel="noopener noreferrer">TMDB 官网</a>，点击右上角 <strong>加入 TMDB</strong></p>
<div align="center"><img src="@source/01.新手指引/01.开始/images/tmdb/tmdb01.png" width="800"/></div>
<p>填写相关信息完成注册：</p>
<div align="center"><img src="@source/01.新手指引/01.开始/images/tmdb/tmdb02.png" width="800"/></div>
<p>注册成功后，系统会发送一封验证邮件，点击 <strong>ACTIVATE MY ACCOUNT</strong> 激活账户：</p>
<div align="center"><img src="@source/01.新手指引/01.开始/images/tmdb/tmdb03.png" width="800"/></div>
<hr>
<h4 id="_2-登录-tmdb" tabindex="-1"><a class="header-anchor" href="#_2-登录-tmdb"><span>2. 登录 TMDB</span></a></h4>
<p>使用注册信息登录：</p>
<div align="center"><img src="@source/01.新手指引/01.开始/images/tmdb/tmdb04.png" width="800"/></div>
<p>点击右上角头像，进入 <strong>帐户设置</strong>：</p>
<div align="center"><img src="@source/01.新手指引/01.开始/images/tmdb/tmdb05.png" width="800"/></div>
<p>左侧点击 <strong>API</strong>，进入 API 页面，点击 <strong>请求 API 密钥</strong> 下方的 <code v-pre>click here</code> 链接：</p>
<div align="center"><img src="@source/01.新手指引/01.开始/images/tmdb/tmdb06.png" width="800"/></div>
<hr>
<h4 id="_3-创建-api-key" tabindex="-1"><a class="header-anchor" href="#_3-创建-api-key"><span>3. 创建 API Key</span></a></h4>
<p>选择用途为 <strong>Developer（开发者）</strong>：</p>
<div align="center"><img src="@source/01.新手指引/01.开始/images/tmdb/tmdb07.png" width="800"/></div>
<p>协议页面滑到底部，勾选接受条款：</p>
<div align="center"><img src="@source/01.新手指引/01.开始/images/tmdb/tmdb08.png" width="800"/></div>
<p>填写申请信息：</p>
<ul>
<li><strong>名称</strong>：自定义名称，如 <code v-pre>Media Saber</code></li>
<li><strong>应用 URL</strong>：可填写你的局域网 IP 或绿联地址，如 <code v-pre>http://192.168.x.x</code></li>
<li><strong>用途描述</strong>：建议填写英文（可翻译）</li>
</ul>
<p>示例用途（英文）：<br>
<code v-pre>Meet personalized needs, enrich website interfaces and functions.</code></p>
<div align="center"><img src="@source/01.新手指引/01.开始/images/tmdb/tmdb09.png" width="800"/></div>
<hr>
<h4 id="_4-获取-api-key" tabindex="-1"><a class="header-anchor" href="#_4-获取-api-key"><span>4. 获取 API Key</span></a></h4>
<p>提交后即可看到你的 API Key（V3 auth）。复制保存，后续在 Media Saber 初始化配置中填写。</p>
<div align="center"><img src="@source/01.新手指引/01.开始/images/tmdb/tmdb10.png" width="800"/></div>
<div class="hint-container tip">
<p class="hint-container-title">提示</p>
<p>如页面未立即显示 API Key，可刷新页面或重新进入“API”菜单。</p>
</div>
</div></template>


