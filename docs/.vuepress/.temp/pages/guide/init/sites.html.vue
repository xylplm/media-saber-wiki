<template><div><div class="hint-container tip">
<p class="hint-container-title">提示</p>
<p>Media Saber 不提供任何资源！但有热心网友贡献了站点文件，可点击访问：<a href="https://github.com/mantou568/pre-dessert-sites" target="_blank" rel="noopener noreferrer">pre-dessert-sites GitHub</a>。<br>
配置文件会在环境启动时读取，修改配置后需要重启容器或环境，或点击 <strong>站点维护 - 站点配置订阅 - 拉取</strong> 按钮，重新加载站点配置。</p>
</div>
<h3 id="一、站点配置订阅" tabindex="-1"><a class="header-anchor" href="#一、站点配置订阅"><span>一、站点配置订阅</span></a></h3>
<p>路径：<strong>站点管理 → 站点维护 → 站点配置订阅</strong></p>
<div align="center"><img src="@source/01.新手指引/04.初始化配置/images/zdgl/zd01.png" width="800"/></div>  
<div align="center"><img src="@source/01.新手指引/04.初始化配置/images/zdgl/zd02.png" width="800"/></div>
<p>如果初始化设置中填写了代理，可以在 URL 中直接使用以下地址获取站点配置文件：<br>
<code v-pre>https://github.com/mantou568/pre-dessert-sites/archive/main.zip</code></p>
<div align="center"><img src="@source/01.新手指引/04.初始化配置/images/zdgl/zd03.png" width="800"/></div>
<p>未配置代理的用户，使用默认参数即可。</p>
<div align="center"><img src="@source/01.新手指引/04.初始化配置/images/zdgl/zd04.png" width="800"/></div>
<p>在 <strong>cron</strong> 栏中输入定时更新时间，例如：<code v-pre>0 9 * * *</code>每天上午9点自动拉取</p>
<div align="center"><img src="@source/01.新手指引/04.初始化配置/images/zdgl/zd05.png" width="800"/></div>  
<div align="center"><img src="@source/01.新手指引/04.初始化配置/images/zdgl/zd06.png" width="800"/></div>
<p>点击保存后，再点击“拉取”，成功后将提示：</p>
<blockquote>
<p>站点配置更新成功！</p>
</blockquote>
<div align="center"><img src="@source/01.新手指引/04.初始化配置/images/zdgl/zd07.png" width="800"/></div>  
<div align="center"><img src="@source/01.新手指引/04.初始化配置/images/zdgl/zd08.png" width="800"/></div>
<hr>
<h3 id="二、导入旧版站点数据" tabindex="-1"><a class="header-anchor" href="#二、导入旧版站点数据"><span>二、导入旧版站点数据</span></a></h3>
<p>站点添加方式有两种：<strong>手动添加</strong> 或 <strong>导入旧版 <code v-pre>media-saber</code> 站点数据</strong>。<br>
本节仅介绍导入方法。</p>
<ul>
<li>
<h4 id="导出旧版站点数据" tabindex="-1"><a class="header-anchor" href="#导出旧版站点数据"><span>导出旧版站点数据</span></a></h4>
</li>
</ul>
<p>在旧版 <code v-pre>media-saber</code> 中点击 <strong>导出站点数据</strong>：</p>
<div align="center"><img src="@source/01.新手指引/04.初始化配置/images/zdgl/zd09.png" width="800"/></div>  
<div align="center"><img src="@source/01.新手指引/04.初始化配置/images/zdgl/zd10.png" width="800"/></div>
<p>点击复制内容，准备粘贴到新版中。</p>
<ul>
<li>
<h4 id="导入至新版站点数据" tabindex="-1"><a class="header-anchor" href="#导入至新版站点数据"><span>导入至新版站点数据</span></a></h4>
</li>
</ul>
<p>点击新版中的 <strong>站点导入</strong> 按钮，在弹出的对话框中粘贴刚复制的站点数据：</p>
<div align="center"><img src="@source/01.新手指引/04.初始化配置/images/zdgl/zd11.png" width="800"/></div>  
<div align="center"><img src="@source/01.新手指引/04.初始化配置/images/zdgl/zd12.png" width="800"/></div>
<p>点击 <strong>导入</strong>，稍等片刻后刷新网页，即可看到导入的站点信息。</p>
<div class="hint-container caution">
<p class="hint-container-title">警告</p>
<p>注：站点信息涉及隐私及访问规则，导入效果不予展示，请大家务必遵守站点使用规定。</p>
</div>
</div></template>


