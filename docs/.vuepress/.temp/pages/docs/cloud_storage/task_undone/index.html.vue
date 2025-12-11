<template><div><h1 id="🚧-进行中任务" tabindex="-1"><a class="header-anchor" href="#🚧-进行中任务"><span>🚧 进行中任务</span></a></h1>
<p>进行中任务页面用于监控当前正在执行的云存储相关任务，包括上传、离线下载、复制、移动等操作。</p>
<h2 id="📋-页面功能" tabindex="-1"><a class="header-anchor" href="#📋-页面功能"><span>📋 页面功能</span></a></h2>
<p>页面采用标签页形式组织不同类型的任务：</p>
<h3 id="📤-上传任务" tabindex="-1"><a class="header-anchor" href="#📤-上传任务"><span>📤 上传任务</span></a></h3>
<p>显示当前正在进行的文件上传任务</p>
<h3 id="🧲-离线下载任务" tabindex="-1"><a class="header-anchor" href="#🧲-离线下载任务"><span>🧲 离线下载任务</span></a></h3>
<p>显示当前正在进行的离线下载任务</p>
<h3 id="📋-复制任务" tabindex="-1"><a class="header-anchor" href="#📋-复制任务"><span>📋 复制任务</span></a></h3>
<p>显示当前正在进行的文件复制任务</p>
<h3 id="🚚-移动任务" tabindex="-1"><a class="header-anchor" href="#🚚-移动任务"><span>🚚 移动任务</span></a></h3>
<p>显示当前正在进行的文件移动任务</p>
<h2 id="📊-任务详情字段" tabindex="-1"><a class="header-anchor" href="#📊-任务详情字段"><span>📊 任务详情字段</span></a></h2>
<p>每个任务卡片显示以下信息：</p>
<h3 id="📁-基本信息" tabindex="-1"><a class="header-anchor" href="#📁-基本信息"><span>📁 基本信息</span></a></h3>
<ul>
<li><strong>文件名</strong>：正在处理的文件或文件夹名称</li>
<li><strong>状态</strong>：任务当前执行状态
<ul>
<li>等待中：任务已创建，等待执行</li>
<li>进行中：任务正在执行</li>
<li>暂停中：任务被暂停</li>
<li>错误：任务执行出错</li>
<li>重试中：任务出错后正在重试</li>
</ul>
</li>
</ul>
<h3 id="📈-进度信息" tabindex="-1"><a class="header-anchor" href="#📈-进度信息"><span>📈 进度信息</span></a></h3>
<ul>
<li><strong>文件大小</strong>：处理文件的总大小</li>
<li><strong>开始时间</strong>：任务开始执行的时间</li>
<li><strong>已用时间</strong>：任务已执行的时间</li>
<li><strong>处理速度</strong>：当前处理速度（如：2.5 MB/s）</li>
<li><strong>进度条</strong>：可视化显示任务完成进度</li>
</ul>
<h3 id="📍-路径信息" tabindex="-1"><a class="header-anchor" href="#📍-路径信息"><span>📍 路径信息</span></a></h3>
<ul>
<li><strong>源路径</strong>：文件的原始位置</li>
<li><strong>目标路径</strong>：文件的目标位置</li>
</ul>
<h3 id="⚠️-错误信息" tabindex="-1"><a class="header-anchor" href="#⚠️-错误信息"><span>⚠️ 错误信息</span></a></h3>
<ul>
<li><strong>错误详情</strong>：如果任务执行出错，显示具体的错误信息</li>
</ul>
<h2 id="🔄-操作选项" tabindex="-1"><a class="header-anchor" href="#🔄-操作选项"><span>🔄 操作选项</span></a></h2>
<h3 id="批量操作模式" tabindex="-1"><a class="header-anchor" href="#批量操作模式"><span>批量操作模式</span></a></h3>
<ul>
<li><strong>批量操作</strong>：进入批量操作模式，可同时管理多个任务</li>
<li><strong>全选</strong>：选择当前页面所有任务</li>
<li><strong>取消选中的</strong>：取消选中已选择的任务</li>
<li><strong>退出批量操作</strong>：退出批量操作模式</li>
</ul>
<h3 id="单任务操作" tabindex="-1"><a class="header-anchor" href="#单任务操作"><span>单任务操作</span></a></h3>
<ul>
<li>🗑️ <strong>取消</strong>：取消正在执行的任务</li>
</ul>
<h2 id="💡-状态说明" tabindex="-1"><a class="header-anchor" href="#💡-状态说明"><span>💡 状态说明</span></a></h2>
<p>任务可能处于以下状态：</p>
<ul>
<li><strong>等待中</strong>：任务已添加到队列，等待系统资源执行</li>
<li><strong>进行中</strong>：任务正在正常执行</li>
<li><strong>暂停中</strong>：任务被用户或系统暂停</li>
<li><strong>重试中</strong>：任务执行出错，正在尝试重新执行</li>
<li><strong>错误</strong>：任务执行失败，需要查看错误信息进行处理</li>
</ul>
<h2 id="📈-进度监控" tabindex="-1"><a class="header-anchor" href="#📈-进度监控"><span>📈 进度监控</span></a></h2>
<p>通过进度条和详细信息可以实时监控任务执行情况：</p>
<ul>
<li><strong>进度百分比</strong>：显示任务完成的百分比</li>
<li><strong>传输速度</strong>：显示当前的数据传输速度</li>
<li><strong>预计剩余时间</strong>：根据当前速度估算任务完成时间</li>
</ul>
<h2 id="💡-使用建议" tabindex="-1"><a class="header-anchor" href="#💡-使用建议"><span>💡 使用建议</span></a></h2>
<ol>
<li>
<p><strong>合理安排任务优先级</strong>：</p>
<ul>
<li>重要或紧急的任务可以优先执行</li>
<li>大文件任务可以选择在网络空闲时执行</li>
</ul>
</li>
<li>
<p><strong>监控任务状态</strong>：</p>
<ul>
<li>定期查看任务状态，及时发现和处理错误任务</li>
<li>对于长时间无进展的任务，可以尝试取消后重新执行</li>
</ul>
</li>
<li>
<p><strong>批量管理任务</strong>：</p>
<ul>
<li>需要对多个任务进行操作时，使用批量操作模式提高效率</li>
</ul>
</li>
<li>
<p><strong>处理错误任务</strong>：</p>
<ul>
<li>查看错误信息，根据提示解决问题</li>
<li>必要时取消错误任务，解决根源问题后重新执行</li>
</ul>
</li>
<li>
<p><strong>网络环境考虑</strong>：</p>
<ul>
<li>在网络不稳定的环境中，适当降低并发任务数量</li>
<li>大文件传输建议在网络条件良好的时候进行</li>
</ul>
</li>
</ol>
</div></template>


