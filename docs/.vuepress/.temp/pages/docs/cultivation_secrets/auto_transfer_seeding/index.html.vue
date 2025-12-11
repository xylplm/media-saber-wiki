<template><div><h3 id="自动转移做种插件" tabindex="-1"><a class="header-anchor" href="#自动转移做种插件"><span>自动转移做种插件</span></a></h3>
<p>自动转移做种插件可以将下载完成的种子从一个下载器自动转移到另一个下载器继续做种，实现下载和做种的分离管理。</p>
<h4 id="插件功能" tabindex="-1"><a class="header-anchor" href="#插件功能"><span>插件功能</span></a></h4>
<ul>
<li><strong>自动转移</strong>：下载完成后自动转移种子文件</li>
<li><strong>多种处理方式</strong>：支持复制、移动等多种转移模式</li>
<li><strong>路径过滤</strong>：支持包含和排除路径规则</li>
<li><strong>标签管理</strong>：支持按标签筛选种子</li>
<li><strong>定时执行</strong>：支持定时自动检查和转移</li>
</ul>
<h4 id="配置选项" tabindex="-1"><a class="header-anchor" href="#配置选项"><span>配置选项</span></a></h4>
<h5 id="基础设置" tabindex="-1"><a class="header-anchor" href="#基础设置"><span>基础设置</span></a></h5>
<ul>
<li><strong>插件开关</strong>：启用或禁用自动转移功能</li>
<li><strong>通知开关</strong>：是否发送转移结果通知</li>
<li><strong>自动开始</strong>：转移后是否自动开始做种</li>
<li><strong>定时任务</strong>：设置检查转移的时间间隔
<blockquote>
<p>📖 <strong>Cron表达式</strong>：详细语法请参考 <a href="/docs/other/cron_rule">Cron表达式说明文档</a></p>
</blockquote>
</li>
</ul>
<h5 id="路径配置" tabindex="-1"><a class="header-anchor" href="#路径配置"><span>路径配置</span></a></h5>
<ul>
<li><strong>种子来源路径</strong>：监控下载完成种子的路径（必填）</li>
<li><strong>源下载器</strong>：下载种子的源下载器（必填）</li>
<li><strong>目标下载器</strong>：用于做种的目标下载器（必填）</li>
</ul>
<h5 id="处理方式" tabindex="-1"><a class="header-anchor" href="#处理方式"><span>处理方式</span></a></h5>
<p>种子处理方式选项：</p>
<ul>
<li><strong>复制文件</strong>：复制种子文件到目标位置</li>
<li><strong>移动文件</strong>：移动种子文件到目标位置</li>
<li><strong>硬链接</strong>：创建硬链接（节省空间）</li>
<li><strong>符号链接</strong>：创建符号链接</li>
</ul>
<h5 id="过滤规则" tabindex="-1"><a class="header-anchor" href="#过滤规则"><span>过滤规则</span></a></h5>
<ul>
<li><strong>标签过滤</strong>：指定需要转移的种子标签</li>
<li><strong>包含路径</strong>：只转移指定路径下的种子</li>
<li><strong>排除路径</strong>：排除指定路径下的种子</li>
</ul>
<h4 id="使用方法" tabindex="-1"><a class="header-anchor" href="#使用方法"><span>使用方法</span></a></h4>
<ol>
<li>
<p><strong>配置下载器</strong>：</p>
<ul>
<li>选择源下载器（用于下载）</li>
<li>选择目标下载器（用于做种）</li>
<li>确保两个下载器都正常配置</li>
</ul>
</li>
<li>
<p><strong>设置路径</strong>：</p>
<ul>
<li>填写种子来源路径</li>
<li>确保路径格式正确且可访问</li>
</ul>
</li>
<li>
<p><strong>选择处理方式</strong>：</p>
<ul>
<li>根据存储需求选择合适的处理方式</li>
<li>硬链接可节省磁盘空间</li>
</ul>
</li>
<li>
<p><strong>配置过滤</strong>：</p>
<ul>
<li>设置标签、包含和排除路径</li>
<li>实现精确的转移控制</li>
</ul>
</li>
<li>
<p><strong>测试运行</strong>：</p>
<ul>
<li>点击&quot;立即转种&quot;按钮测试配置</li>
<li>确认转移逻辑正确后启用定时任务</li>
</ul>
</li>
</ol>
<h4 id="处理方式详解" tabindex="-1"><a class="header-anchor" href="#处理方式详解"><span>处理方式详解</span></a></h4>
<h5 id="复制模式" tabindex="-1"><a class="header-anchor" href="#复制模式"><span>复制模式</span></a></h5>
<ul>
<li><strong>优点</strong>：安全性高，原文件保持不变</li>
<li><strong>缺点</strong>：占用双倍存储空间</li>
<li><strong>适用</strong>：存储空间充足的环境</li>
</ul>
<h5 id="移动模式" tabindex="-1"><a class="header-anchor" href="#移动模式"><span>移动模式</span></a></h5>
<ul>
<li><strong>优点</strong>：不占用额外空间</li>
<li><strong>缺点</strong>：原位置文件会被删除</li>
<li><strong>适用</strong>：需要节省空间的环境</li>
</ul>
<h5 id="硬链接模式" tabindex="-1"><a class="header-anchor" href="#硬链接模式"><span>硬链接模式</span></a></h5>
<ul>
<li><strong>优点</strong>：节省空间，文件实际只存储一份</li>
<li><strong>缺点</strong>：需要在同一文件系统内</li>
<li><strong>适用</strong>：推荐使用的方式</li>
</ul>
<h5 id="符号链接模式" tabindex="-1"><a class="header-anchor" href="#符号链接模式"><span>符号链接模式</span></a></h5>
<ul>
<li><strong>优点</strong>：灵活性高，可跨文件系统</li>
<li><strong>缺点</strong>：依赖原文件位置</li>
<li><strong>适用</strong>：特殊场景使用</li>
</ul>
<h4 id="使用场景" tabindex="-1"><a class="header-anchor" href="#使用场景"><span>使用场景</span></a></h4>
<ol>
<li>
<p><strong>下载做种分离</strong>：</p>
<ul>
<li>使用高速下载器下载</li>
<li>转移到专用做种下载器</li>
</ul>
</li>
<li>
<p><strong>存储优化</strong>：</p>
<ul>
<li>将种子文件整理到统一位置</li>
<li>便于管理和备份</li>
</ul>
</li>
<li>
<p><strong>多盘管理</strong>：</p>
<ul>
<li>下载到临时高速硬盘</li>
<li>转移到大容量存储硬盘</li>
</ul>
</li>
</ol>
<h4 id="注意事项" tabindex="-1"><a class="header-anchor" href="#注意事项"><span>注意事项</span></a></h4>
<ul>
<li>确保源和目标下载器都正常运行</li>
<li>路径配置必须准确，支持绝对路径</li>
<li>使用硬链接时需要在同一文件系统</li>
<li>建议先小范围测试再大规模使用</li>
<li>定期检查转移日志确保正常运行</li>
</ul>
<h4 id="常见问题" tabindex="-1"><a class="header-anchor" href="#常见问题"><span>常见问题</span></a></h4>
<p><strong>Q: 转移失败怎么办？</strong>
A: 检查路径配置、下载器状态和文件权限。</p>
<p><strong>Q: 硬链接创建失败？</strong>
A: 确保源和目标路径在同一文件系统内。</p>
<p><strong>Q: 如何避免重复转移？</strong>
A: 合理设置标签和路径过滤规则。</p>
<hr>
</div></template>


