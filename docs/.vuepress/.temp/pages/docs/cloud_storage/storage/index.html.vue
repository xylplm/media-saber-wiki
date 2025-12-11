<template><div><h1 id="🗃️-存储管理" tabindex="-1"><a class="header-anchor" href="#🗃️-存储管理"><span>🗃️ 存储管理</span></a></h1>
<p>存储管理页面用于配置和管理各种云存储服务，支持多种云存储协议。</p>
<h2 id="📋-页面功能" tabindex="-1"><a class="header-anchor" href="#📋-页面功能"><span>📋 页面功能</span></a></h2>
<p><strong>顶部操作按钮</strong></p>
<ul>
<li>🔄 <strong>刷新</strong>：重新加载云存储列表</li>
<li>➕ <strong>添加</strong>：添加新的云存储配置</li>
<li>🔄 <strong>全部重新加载</strong>：重新加载所有云存储的连接状态</li>
<li>⚙️ <strong>基础设置</strong>：打开云存储基础设置</li>
<li>🔧 <strong>工具菜单</strong>：包含以下工具：
<ul>
<li>115扫码获取Token：用于115网盘的扫码登录认证</li>
<li>115扫码获取Cookie：用于115网盘的扫码获取Cookie</li>
</ul>
</li>
</ul>
<h2 id="📊-存储配置字段详解" tabindex="-1"><a class="header-anchor" href="#📊-存储配置字段详解"><span>📊 存储配置字段详解</span></a></h2>
<p>每条存储配置包含以下信息：</p>
<h3 id="🔧-基本配置字段" tabindex="-1"><a class="header-anchor" href="#🔧-基本配置字段"><span>🔧 基本配置字段</span></a></h3>
<ul>
<li><strong>挂载路径</strong>：云存储在系统中的挂载点路径，用于在文件系统中访问该存储</li>
<li><strong>驱动</strong>：云存储服务的类型，如阿里云盘、夸克网盘、百度网盘等</li>
<li><strong>状态</strong>：云存储的连接状态
<ul>
<li>✔️ 正常：连接成功，可以正常使用</li>
<li>❌ 错误：连接失败，需要检查配置</li>
<li>⚠️ 未知：尚未建立连接或状态异常</li>
<li>🚫 已禁用：存储已被手动禁用</li>
</ul>
</li>
<li><strong>备注</strong>：用户自定义的备注信息，用于标识该存储的用途或其他说明</li>
</ul>
<h3 id="⚙️-高级配置字段" tabindex="-1"><a class="header-anchor" href="#⚙️-高级配置字段"><span>⚙️ 高级配置字段</span></a></h3>
<ul>
<li><strong>缓存过期时间</strong>：设置云存储内容的缓存时间（分钟），避免频繁请求云服务</li>
<li><strong>排序</strong>：存储在列表中的显示顺序</li>
<li><strong>禁用</strong>：是否禁用该存储配置，禁用后将不会显示在文件列表中</li>
</ul>
<h3 id="🔄-操作选项" tabindex="-1"><a class="header-anchor" href="#🔄-操作选项"><span>🔄 操作选项</span></a></h3>
<p>通过点击每条记录末尾的操作按钮，可以执行以下操作：</p>
<ul>
<li>✏️ <strong>编辑</strong>：修改云存储配置参数</li>
<li>▶️ <strong>启用/禁用</strong>：切换云存储的启用状态（根据当前状态显示启用或禁用按钮）</li>
<li>🗑️ <strong>删除</strong>：删除该云存储配置</li>
</ul>
<h2 id="🛠-添加-编辑存储配置" tabindex="-1"><a class="header-anchor" href="#🛠-添加-编辑存储配置"><span>🛠 添加/编辑存储配置</span></a></h2>
<p>添加或编辑云存储时需要填写以下配置信息：</p>
<h3 id="基本信息" tabindex="-1"><a class="header-anchor" href="#基本信息"><span>基本信息</span></a></h3>
<ul>
<li><strong>挂载路径</strong>：必填项，指定云存储在系统中的访问路径</li>
<li><strong>驱动</strong>：选择云存储服务类型</li>
<li><strong>备注</strong>：可选项，用于标识该存储的用途</li>
</ul>
<h3 id="高级设置" tabindex="-1"><a class="header-anchor" href="#高级设置"><span>高级设置</span></a></h3>
<ul>
<li><strong>缓存过期时间</strong>：默认值通常为30分钟，可根据需要调整</li>
<li><strong>排序</strong>：默认值为0，数值越小越靠前</li>
<li><strong>禁用</strong>：默认为关闭状态</li>
</ul>
<h3 id="驱动特定配置" tabindex="-1"><a class="header-anchor" href="#驱动特定配置"><span>驱动特定配置</span></a></h3>
<p>不同驱动类型需要不同的认证和配置信息：</p>
<ul>
<li><RouteLink to="/02.%E4%BD%BF%E7%94%A8%E6%96%87%E6%A1%A3/11.%E4%BA%91%E7%AB%AF%E5%AD%98%E5%82%A8/07.%E7%BD%91%E7%9B%98%E9%85%8D%E7%BD%AE%E6%8C%87%E5%8D%97.html#_115-%E7%BD%91%E7%9B%98%E5%BC%80%E6%94%BE%E5%B9%B3%E5%8F%B0"><strong>115 网盘开放平台</strong></RouteLink>：需要配置应用ID、访问令牌和刷新令牌</li>
<li><RouteLink to="/02.%E4%BD%BF%E7%94%A8%E6%96%87%E6%A1%A3/11.%E4%BA%91%E7%AB%AF%E5%AD%98%E5%82%A8/07.%E7%BD%91%E7%9B%98%E9%85%8D%E7%BD%AE%E6%8C%87%E5%8D%97.html#_115-%E7%BD%91%E7%9B%98%E5%88%86%E4%BA%AB"><strong>115 网盘分享</strong></RouteLink>：需要配置分享链接ID和密码</li>
<li><RouteLink to="/02.%E4%BD%BF%E7%94%A8%E6%96%87%E6%A1%A3/11.%E4%BA%91%E7%AB%AF%E5%AD%98%E5%82%A8/07.%E7%BD%91%E7%9B%98%E9%85%8D%E7%BD%AE%E6%8C%87%E5%8D%97.html#_123-%E4%BA%91%E7%9B%98%E5%BC%80%E6%94%BE%E5%B9%B3%E5%8F%B0"><strong>123 云盘开放平台</strong></RouteLink>：需要配置用户名和密码</li>
<li><RouteLink to="/02.%E4%BD%BF%E7%94%A8%E6%96%87%E6%A1%A3/11.%E4%BA%91%E7%AB%AF%E5%AD%98%E5%82%A8/07.%E7%BD%91%E7%9B%98%E9%85%8D%E7%BD%AE%E6%8C%87%E5%8D%97.html#%E4%B8%AD%E5%9B%BD%E7%A7%BB%E5%8A%A8%E4%BA%91%E7%9B%98"><strong>中国移动云盘</strong></RouteLink>：需要手机号、密码和Authorization信息</li>
<li><RouteLink to="/02.%E4%BD%BF%E7%94%A8%E6%96%87%E6%A1%A3/11.%E4%BA%91%E7%AB%AF%E5%AD%98%E5%82%A8/07.%E7%BD%91%E7%9B%98%E9%85%8D%E7%BD%AE%E6%8C%87%E5%8D%97.html#%E5%A4%A9%E7%BF%BC%E4%BA%91%E7%9B%98"><strong>天翼云盘</strong></RouteLink>：需要账号、密码和Cookie信息</li>
<li><RouteLink to="/02.%E4%BD%BF%E7%94%A8%E6%96%87%E6%A1%A3/11.%E4%BA%91%E7%AB%AF%E5%AD%98%E5%82%A8/07.%E7%BD%91%E7%9B%98%E9%85%8D%E7%BD%AE%E6%8C%87%E5%8D%97.html#%E9%98%BF%E9%87%8C%E4%BA%91%E7%9B%98-oauth2"><strong>阿里云盘（Oauth2）</strong></RouteLink>：需要填写刷新令牌等信息</li>
<li><RouteLink to="/02.%E4%BD%BF%E7%94%A8%E6%96%87%E6%A1%A3/11.%E4%BA%91%E7%AB%AF%E5%AD%98%E5%82%A8/07.%E7%BD%91%E7%9B%98%E9%85%8D%E7%BD%AE%E6%8C%87%E5%8D%97.html#%E7%99%BE%E5%BA%A6%E7%BD%91%E7%9B%98"><strong>百度网盘</strong></RouteLink>：需要配置应用密钥和访问令牌</li>
<li><RouteLink to="/02.%E4%BD%BF%E7%94%A8%E6%96%87%E6%A1%A3/11.%E4%BA%91%E7%AB%AF%E5%AD%98%E5%82%A8/07.%E7%BD%91%E7%9B%98%E9%85%8D%E7%BD%AE%E6%8C%87%E5%8D%97.html#onedrive"><strong>OneDrive</strong></RouteLink>：需要OAuth认证</li>
<li><RouteLink to="/02.%E4%BD%BF%E7%94%A8%E6%96%87%E6%A1%A3/11.%E4%BA%91%E7%AB%AF%E5%AD%98%E5%82%A8/07.%E7%BD%91%E7%9B%98%E9%85%8D%E7%BD%AE%E6%8C%87%E5%8D%97.html#%E5%A4%B8%E5%85%8B%E7%BD%91%E7%9B%98-open"><strong>夸克网盘 Open</strong></RouteLink>：需要配置Cookie等认证信息</li>
<li><strong>FTP/SFTP</strong>：需要服务器地址、端口、用户名、密码等</li>
<li><strong>WebDAV</strong>：需要服务器地址、用户名、密码等</li>
</ul>
<h3 id="快捷获取认证信息" tabindex="-1"><a class="header-anchor" href="#快捷获取认证信息"><span>快捷获取认证信息</span></a></h3>
<p>在添加或编辑存储配置时，系统提供了快捷获取认证信息的功能：</p>
<h4 id="浏览器扩展" tabindex="-1"><a class="header-anchor" href="#浏览器扩展"><span>浏览器扩展</span></a></h4>
<p>对于部分网盘（如115、阿里云盘等），可以通过 <RouteLink to="/03.%E5%AE%A2%E6%88%B7%E7%AB%AF/04.%E6%B5%8F%E8%A7%88%E5%99%A8%E6%8F%92%E4%BB%B6/01.%E6%B5%8F%E8%A7%88%E5%99%A8%E6%89%A9%E5%B1%95.html">浏览器扩展</RouteLink> 来快速获取认证信息。浏览器扩展可以自动从浏览器中提取已登录站点的Cookie或Token，并将其导入到Media Saber中，大大简化了配置过程。</p>
<h4 id="_115网盘" tabindex="-1"><a class="header-anchor" href="#_115网盘"><span>115网盘</span></a></h4>
<p>对于115网盘，提供了两种快捷获取认证信息的方式：</p>
<ol>
<li><strong>扫码授权</strong>：通过扫码获取Token（access_token和refresh_token）</li>
<li><strong>扫码获取Cookie</strong>：通过扫码获取Cookie信息</li>
</ol>
<h4 id="_139云盘和天翼云盘" tabindex="-1"><a class="header-anchor" href="#_139云盘和天翼云盘"><span>139云盘和天翼云盘</span></a></h4>
<p>对于139云盘和天翼云盘，提供了浏览器插件辅助获取认证信息的功能：</p>
<ol>
<li>点击&quot;获取Authorization&quot;（139云盘）或&quot;获取Cookie&quot;（天翼云盘）按钮</li>
<li>系统将打开对应的登录页面</li>
<li>在浏览器中登录账号</li>
<li>系统将自动提取所需的认证信息并填入表单</li>
</ol>
<blockquote>
<p>⚠️ 注意：使用浏览器插件获取认证信息需要先安装<RouteLink to="/client/brower_tool/">Media Saber Tools</RouteLink>浏览器扩展</p>
</blockquote>
<h2 id="🔧-115扫码工具" tabindex="-1"><a class="header-anchor" href="#🔧-115扫码工具"><span>🔧 115扫码工具</span></a></h2>
<p>对于115网盘用户，系统提供了专门的扫码工具来获取认证信息：</p>
<h3 id="_115扫码获取token" tabindex="-1"><a class="header-anchor" href="#_115扫码获取token"><span>115扫码获取Token</span></a></h3>
<ol>
<li>点击顶部工具菜单中的&quot;115扫码获取Token&quot;</li>
<li>选择或填写应用ID（可使用系统提供的第三方应用ID）
<ul>
<li>爆米花(第三方提供)</li>
<li>vidhub(第三方提供)</li>
<li>MSGO(群友提供)</li>
</ul>
</li>
<li>点击&quot;获取二维码&quot;按钮生成登录二维码</li>
<li>使用115手机APP扫描二维码进行登录</li>
<li>扫码完成后点击&quot;已扫码&quot;按钮</li>
<li>系统将显示accessToken和refreshToken</li>
<li>将获取的Token信息填入115网盘的存储配置中</li>
</ol>
<blockquote>
<p>⚠️ 注意：第三方提供的应用ID不保证持续可用，建议申请自己的应用ID以确保稳定性。</p>
</blockquote>
<h3 id="_115扫码获取cookie" tabindex="-1"><a class="header-anchor" href="#_115扫码获取cookie"><span>115扫码获取Cookie</span></a></h3>
<ol>
<li>点击顶部工具菜单中的&quot;115扫码获取Cookie&quot;</li>
<li>选择客户端类型（默认为支付宝小程序）
<ul>
<li>网页版</li>
<li>115生活(Android端)</li>
<li>115(Android端)</li>
<li>115生活(iOS端)</li>
<li>115(iPad端)</li>
<li>115网盘(Android电视端)</li>
<li>115生活(支付宝小程序)</li>
<li>115生活(微信小程序)</li>
<li>115管理(Android端)</li>
<li>115(iOS端)</li>
</ul>
</li>
<li>点击&quot;获取二维码&quot;按钮生成登录二维码</li>
<li>使用115手机APP扫描二维码进行登录</li>
<li>扫码完成后点击&quot;已扫码&quot;按钮</li>
<li>系统将显示用户信息和Cookie内容</li>
<li>将获取的Cookie信息填入115网盘的存储配置中</li>
</ol>
<blockquote>
<p>⚠️ 重要提示：</p>
<ol>
<li>扫码登录后，所选设备之前的登录将会失效，所以请尽量选不常用的设备。</li>
<li>请注意，扫码得到的Cookie会跟随发起扫码的设备，如果发起扫码的设备退出登录，扫码得到的Cookie也会随之失效。</li>
<li>如要避免上述问题，可以考虑使用手机验证码登录小程序并获取其Cookie。</li>
</ol>
</blockquote>
<h2 id="💡-使用建议" tabindex="-1"><a class="header-anchor" href="#💡-使用建议"><span>💡 使用建议</span></a></h2>
<ol>
<li>
<p><strong>合理设置缓存时间</strong>：根据云存储内容更新频率合理设置缓存过期时间，平衡性能和数据新鲜度</p>
</li>
<li>
<p><strong>正确配置驱动参数</strong>：仔细填写各驱动所需的认证信息，确保连接正常</p>
</li>
<li>
<p><strong>115网盘用户建议</strong>：</p>
<ul>
<li>优先申请自己的115应用ID以确保长期稳定使用</li>
<li>使用115扫码工具快速获取认证Token或Cookie</li>
<li>定期检查Token有效性，必要时重新获取</li>
<li>根据需要选择合适的客户端类型获取Cookie</li>
</ul>
</li>
<li>
<p><strong>139云盘和天翼云盘用户建议</strong>：</p>
<ul>
<li>安装Media Saber Tools浏览器扩展以方便获取认证信息</li>
<li>定期更新认证信息，确保连接正常</li>
</ul>
</li>
<li>
<p><strong>定期检查连接状态</strong>：定期查看存储状态，及时发现和解决连接问题</p>
</li>
<li>
<p><strong>使用有意义的备注</strong>：为每个存储配置添加清晰的备注，便于后续管理</p>
</li>
<li>
<p><strong>合理排序</strong>：根据使用频率对存储进行排序，将常用的存储放在前面</p>
</li>
<li>
<p><strong>适时重新加载</strong>：当存储连接出现问题时，可以使用&quot;全部重新加载&quot;功能尝试恢复连接</p>
</li>
</ol>
</div></template>


