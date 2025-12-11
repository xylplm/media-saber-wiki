<template><div><div class="hint-container tip">
<p class="hint-container-title">提示</p>
<h3 id="一、申请-tmdb-api-key" tabindex="-1"><a class="header-anchor" href="#一、申请-tmdb-api-key"><span>一、申请 TMDB API Key</span></a></h3>
<p>Media Saber 使用 TMDB 提供的电影和电视剧元数据服务，需先申请 TMDB API Key。</p>
<h4 id="步骤如下" tabindex="-1"><a class="header-anchor" href="#步骤如下"><span>步骤如下：</span></a></h4>
<ol>
<li>访问 <a href="https://www.themoviedb.org/" target="_blank" rel="noopener noreferrer">TMDB 官网</a> 并注册账号</li>
<li>登录后，点击右上角头像 &gt; 选择 <strong>Settings（设置）</strong></li>
<li>左侧导航栏点击 <strong>API</strong>，进入 API 页面</li>
<li>点击 <strong>&quot;Create&quot;</strong> 创建新 API 密钥，选择用途为 <strong>Developer</strong></li>
<li>填写基本信息（例如应用名称、用途说明等），提交申请</li>
<li>提交后即可在 API 页面看到你的 <strong>API Key（v3 auth）</strong></li>
</ol>
<blockquote>
<p>⚠️ 注意：申请过程通常无需审核，Key 会即时生成，但请妥善保管，避免泄露。</p>
</blockquote>
</div>
<h3 id="二、进入初始化页面" tabindex="-1"><a class="header-anchor" href="#二、进入初始化页面"><span>二、进入初始化页面</span></a></h3>
<p>在浏览器输入 <code v-pre>IP:port</code>，进入 Media Saber 初始化页面，点击 <strong>系统初始化配置</strong>。</p>
<div align="center"><img src="@source/01.新手指引/04.初始化配置/images/cshsz/csh01.png" width="800"/></div>
<h4 id="_1-填写配置信息" tabindex="-1"><a class="header-anchor" href="#_1-填写配置信息"><span>1. 填写配置信息</span></a></h4>
<p>在弹出的对话框中输入以下信息：</p>
<ul>
<li>昵称</li>
<li>用户名</li>
<li>密码</li>
<li>TMDB API KEY （<RouteLink to="/guide/start/tmdb/">TMDB详细注册教程</RouteLink> ）</li>
<li>代理服务器（可选）</li>
</ul>
<div align="center"><img src="@source/01.新手指引/04.初始化配置/images/cshsz/csh02.png" width="800"/></div>
<h4 id="_2-保存配置" tabindex="-1"><a class="header-anchor" href="#_2-保存配置"><span>2. 保存配置</span></a></h4>
<p>点击保存后，系统将自动跳转至登录页面，并弹出提示：</p>
<blockquote>
<p>系统初始化配置保存成功！请使用管理员账号登录吧！</p>
</blockquote>
<div align="center"><img src="@source/01.新手指引/04.初始化配置/images/cshsz/csh03.png" width="800"/></div>
<h4 id="_3-登录管理员账号" tabindex="-1"><a class="header-anchor" href="#_3-登录管理员账号"><span>3. 登录管理员账号</span></a></h4>
<p>使用设置好的管理员账号登录，开始配置各项基本参数。</p>
<div align="center"><img src="@source/01.新手指引/04.初始化配置/images/cshsz/csh04.png" width="800"/></div>
<div align="center"><img src="@source/01.新手指引/04.初始化配置/images/cshsz/csh05.png" width="800"/></div>
</div></template>


