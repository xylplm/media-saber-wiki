<template><div><h1 id="用户管理" tabindex="-1"><a class="header-anchor" href="#用户管理"><span>用户管理</span></a></h1>
<p>用户管理功能允许系统管理员创建、编辑和删除系统用户。通过用户管理，可以控制不同用户对系统功能的访问权限。</p>
<h2 id="用户列表" tabindex="-1"><a class="header-anchor" href="#用户列表"><span>用户列表</span></a></h2>
<p>在用户管理页面，系统会显示当前所有用户列表，包括用户名和昵称信息。列表中每个用户都有编辑和删除操作按钮。</p>
<p>如果系统中还没有用户，页面会显示提示信息&quot;您还未添加用户!&quot;。</p>
<p>页面提供分页功能，可以在大量用户的情况下方便地浏览用户列表。同时提供刷新按钮，用于重新加载用户列表数据。</p>
<h2 id="新增用户" tabindex="-1"><a class="header-anchor" href="#新增用户"><span>新增用户</span></a></h2>
<p>要新增用户，可以点击页面右上角的&quot;添加用户&quot;按钮，系统会弹出用户信息录入对话框。需要填写以下信息：</p>
<h3 id="用户名" tabindex="-1"><a class="header-anchor" href="#用户名"><span>用户名</span></a></h3>
<p><strong>说明：</strong> 用户登录系统时使用的名称</p>
<p><strong>要求：</strong></p>
<ul>
<li>必填项</li>
<li>长度为2-20个字符</li>
<li>只能包含字母、数字、下划线和减号</li>
</ul>
<h3 id="昵称" tabindex="-1"><a class="header-anchor" href="#昵称"><span>昵称</span></a></h3>
<p><strong>说明：</strong> 用户在系统中显示的名称</p>
<p><strong>要求：</strong></p>
<ul>
<li>必填项</li>
<li>长度为2-20个字符</li>
</ul>
<h3 id="密码" tabindex="-1"><a class="header-anchor" href="#密码"><span>密码</span></a></h3>
<p><strong>说明：</strong> 用户登录系统的密码</p>
<p><strong>要求：</strong></p>
<ul>
<li>新增用户时为必填项</li>
<li>长度为6-20个字符</li>
</ul>
<h3 id="确认密码" tabindex="-1"><a class="header-anchor" href="#确认密码"><span>确认密码</span></a></h3>
<p><strong>说明：</strong> 再次输入密码以确认</p>
<p><strong>要求：</strong></p>
<ul>
<li>新增用户时为必填项</li>
<li>必须与密码字段完全一致</li>
</ul>
<p>填写完所有必填信息后，点击&quot;保存&quot;按钮完成用户创建。如果需要取消操作，可以点击&quot;取消&quot;按钮关闭对话框。</p>
<h2 id="编辑用户" tabindex="-1"><a class="header-anchor" href="#编辑用户"><span>编辑用户</span></a></h2>
<p>要编辑现有用户信息，可以在用户列表中找到目标用户，然后点击该用户行的&quot;编辑&quot;按钮（铅笔图标）。编辑用户时的界面与新增用户类似，但有以下不同：</p>
<h3 id="用户名-1" tabindex="-1"><a class="header-anchor" href="#用户名-1"><span>用户名</span></a></h3>
<p>用户名在编辑时不可修改，仅显示当前值。</p>
<h3 id="密码-1" tabindex="-1"><a class="header-anchor" href="#密码-1"><span>密码</span></a></h3>
<p>编辑用户时密码字段为可选填，如果不需要修改密码则可以留空。如需修改密码，则需要同时填写密码和确认密码两个字段，且要求一致。</p>
<h3 id="昵称-1" tabindex="-1"><a class="header-anchor" href="#昵称-1"><span>昵称</span></a></h3>
<p>可以修改用户的昵称信息。</p>
<p>完成修改后，点击&quot;保存&quot;按钮保存更改，或点击&quot;取消&quot;按钮放弃更改。</p>
<h2 id="删除用户" tabindex="-1"><a class="header-anchor" href="#删除用户"><span>删除用户</span></a></h2>
<p>要删除用户，可以在用户列表中找到目标用户，然后点击该用户行的&quot;删除&quot;按钮（垃圾桶图标）。系统会弹出确认对话框询问是否确认删除该用户。</p>
<p><strong>注意：</strong> 删除操作不可恢复，请谨慎操作。一旦确认删除，该用户的所有信息将从系统中移除。</p>
<p>删除操作需要确认用户的昵称以防止误删，确认无误后点击确认按钮完成删除操作。</p>
</div></template>


