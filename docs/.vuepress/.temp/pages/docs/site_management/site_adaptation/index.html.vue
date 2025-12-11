<template><div><h2 id="_1、说明" tabindex="-1"><a class="header-anchor" href="#_1、说明"><span>1、说明</span></a></h2>
<p>media saber 不提供任何站点资源服务，但支持网友自行适配站点配置文件。 适配很简单，只需要一个文本编辑器+浏览器即可适配。 技术栈也仅仅只需要会 HTML+CSS 基础知识，理解 CSS 选择器即可。</p>
<h2 id="_2、配置文件说明" tabindex="-1"><a class="header-anchor" href="#_2、配置文件说明"><span>2、配置文件说明</span></a></h2>
<p>文件名必须为站点id保证在配置文件目录中唯一</p>
<h2 id="目录" tabindex="-1"><a class="header-anchor" href="#目录"><span>目录</span></a></h2>
<ul>
<li><a href="#%E5%8E%9F%E7%90%86">原理</a></li>
<li><a href="#%E7%9B%AE%E5%BD%95%E7%BB%93%E6%9E%84">目录结构</a></li>
<li><a href="#%E5%90%8D%E8%AF%8D%E8%A7%A3%E9%87%8A">名词解释</a>
<ul>
<li><a href="#parser">parser</a></li>
<li><a href="#filter">filter</a></li>
<li><a href="#selection">selection</a></li>
<li><a href="#%E9%80%9A%E7%94%A8%E8%AF%B7%E6%B1%82%E5%AE%9A%E4%B9%89">通用请求定义</a></li>
<li><a href="#user_basic_info-%E5%AD%97%E6%AE%B5">user_basic_info 字段</a></li>
<li><a href="#user_details-%E5%AD%97%E6%AE%B5">user_details 字段</a></li>
<li><a href="#search-%E5%AD%97%E6%AE%B5">search 字段</a></li>
<li><a href="#seeding_statistics-%E5%AD%97%E6%AE%B5">seeding_statistics 字段</a></li>
<li><a href="#my_hr-%E5%AD%97%E6%AE%B5">my_hr 字段</a></li>
<li><a href="#messages-%E5%AD%97%E6%AE%B5">messages 字段</a></li>
<li><a href="#message_detail-%E5%AD%97%E6%AE%B5">message_detail 字段</a></li>
<li><a href="#notice-%E5%AD%97%E6%AE%B5">notice 字段</a></li>
<li><a href="#sign_in-%E5%AD%97%E6%AE%B5">sign_in 字段</a></li>
<li><a href="#details-%E5%AD%97%E6%AE%B5">details 字段</a></li>
</ul>
</li>
<li><a href="#json-%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84">JSON 数据结构</a>
<ul>
<li><a href="#%E7%AB%99%E7%82%B9%E9%85%8D%E7%BD%AE-json-%E8%AF%B4%E6%98%8E">站点配置 JSON 说明</a></li>
<li><a href="#%E7%AB%99%E7%82%B9%E5%85%AC%E5%85%B1%E9%85%8D%E7%BD%AE-json-%E8%AF%B4%E6%98%8E">站点公共配置 JSON 说明</a></li>
</ul>
</li>
<li><a href="#%E6%B3%A8%E6%84%8F%E4%BA%8B%E9%A1%B9">注意事项</a></li>
</ul>
<h2 id="原理" tabindex="-1"><a class="header-anchor" href="#原理"><span>原理</span></a></h2>
<div class="language-mermaid line-numbers-mode" data-highlighter="prismjs" data-ext="mermaid"><pre v-pre><code class="language-mermaid"><span class="line"><span class="token keyword">sequenceDiagram</span></span>
<span class="line">Alice<span class="token arrow operator">-></span>John<span class="token operator">:</span> Hello John, how are you?</span>
<span class="line"><span class="token keyword">loop</span> every minute</span>
<span class="line">    John<span class="token arrow operator">--></span>Alice<span class="token operator">:</span> Great!</span>
<span class="line"><span class="token keyword">end</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="站点适配流程图" tabindex="-1"><a class="header-anchor" href="#站点适配流程图"><span>站点适配流程图</span></a></h3>
<div class="language-mermaid line-numbers-mode" data-highlighter="prismjs" data-ext="mermaid"><pre v-pre><code class="language-mermaid"><span class="line"><span class="token keyword">flowchart</span> TB</span>
<span class="line">    Business<span class="token text string">(系统功能)</span> <span class="token arrow operator">&lt;==</span> 搜索、签到、查最新公告等等 <span class="token arrow operator">==></span> Engine</span>
<span class="line">    SiteConfig <span class="token inter-arrow-label"><span class="token arrow-head arrow operator">==</span> <span class="token label property">站点配置、请求定义</span> <span class="token arrow operator">==></span></span> Site</span>
<span class="line">    Engine <span class="token inter-arrow-label"><span class="token arrow-head arrow operator">==</span> <span class="token label property">读取适配文件</span> <span class="token arrow operator">==></span></span> SiteConfig</span>
<span class="line">    Engine <span class="token inter-arrow-label"><span class="token arrow-head arrow operator">==</span> <span class="token label property">请求站点</span> <span class="token arrow operator">==></span></span> Site</span>
<span class="line">    Site <span class="token inter-arrow-label"><span class="token arrow-head arrow operator">==</span> <span class="token label property">响应 HTML 或 JSON 数据</span> <span class="token arrow operator">==></span></span> Engine</span>
<span class="line">    <span class="token keyword">subgraph</span> SiteConfig</span>
<span class="line">        <span class="token keyword">subgraph</span> commons</span>
<span class="line">            <span class="token keyword">subgraph</span> NexusPHP</span>
<span class="line">                Favicon</span>
<span class="line">                UserBasicInfo</span>
<span class="line">                Search</span>
<span class="line">                other_rd<span class="token text string">[...]</span></span>
<span class="line">            <span class="token keyword">end</span></span>
<span class="line">        <span class="token keyword">end</span></span>
<span class="line">        <span class="token keyword">subgraph</span> sites</span>
<span class="line">            audiences.json</span>
<span class="line">            HDHome.json</span>
<span class="line">            other.json<span class="token text string">[...]</span></span>
<span class="line">        <span class="token keyword">end</span></span>
<span class="line">        sites <span class="token inter-arrow-label"><span class="token arrow-head arrow operator">--</span> <span class="token label property">继承、重写</span> <span class="token arrow operator">--></span></span> commons</span>
<span class="line">    <span class="token keyword">end</span></span>
<span class="line">    <span class="token keyword">subgraph</span> Site</span>
<span class="line">        audiences</span>
<span class="line">        HDHome</span>
<span class="line">        site_other<span class="token text string">[...]</span></span>
<span class="line">    <span class="token keyword">end</span></span>
<span class="line">    <span class="token keyword">subgraph</span> Engine</span>
<span class="line">        <span class="token keyword">direction</span> LR</span>
<span class="line">        <span class="token keyword">subgraph</span> Client</span>
<span class="line">            mtClient <span class="token operator">&amp;</span> startSpaceClient <span class="token inter-arrow-label"><span class="token arrow-head arrow operator">--</span> <span class="token label property">继承</span> <span class="token arrow operator">--></span></span> npClient</span>
<span class="line">        <span class="token keyword">end</span></span>
<span class="line">        <span class="token keyword">subgraph</span> parser</span>
<span class="line">            CssSelector</span>
<span class="line">            XPath</span>
<span class="line">            JsonPath</span>
<span class="line">            None</span>
<span class="line">        <span class="token keyword">end</span></span>
<span class="line">        <span class="token keyword">subgraph</span> filter</span>
<span class="line">            re_search</span>
<span class="line">            regex</span>
<span class="line">            case</span>
<span class="line">            timestamp</span>
<span class="line">            byte_size</span>
<span class="line">            ...</span>
<span class="line">        <span class="token keyword">end</span></span>
<span class="line">        Client <span class="token arrow operator">&lt;--></span> parser <span class="token arrow operator">&lt;--></span> filter</span>
<span class="line">    <span class="token keyword">end</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="目录结构" tabindex="-1"><a class="header-anchor" href="#目录结构"><span>目录结构</span></a></h2>
<div class="language-plaintext line-numbers-mode" data-highlighter="prismjs" data-ext="plaintext"><pre v-pre><code class="language-plaintext"><span class="line">/your_data_dir/site/configs</span>
<span class="line">├── common/                     # 架构公共配置，一般定义公共请求</span>
<span class="line">│   ├── NexusPhp.json           # NexusPhp 架构公共配置</span>
<span class="line">│   ├── NexusRabbit.json        # NexusRabbit 架构公共配置</span>
<span class="line">│   └── xxx.json                # 其他架构公共配置</span>
<span class="line">├── sites/                      # 站点配置，可以复用对应架构的公共配置</span>
<span class="line">│   ├── audiences.json          # 观众站点配置</span>
<span class="line">│   ├── cyanbug.json            # 大青虫站点配置</span>
<span class="line">│   └── xxx.json                # 其他站点配置</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="名词解释" tabindex="-1"><a class="header-anchor" href="#名词解释"><span>名词解释</span></a></h2>
<h3 id="parser" tabindex="-1"><a class="header-anchor" href="#parser"><span>parser</span></a></h3>
<p>解析器，用于解析站点的配置文件，目前支持以下解析器</p>
<table>
<thead>
<tr>
<th>名称</th>
<th>描述</th>
</tr>
</thead>
<tbody>
<tr>
<td>CssSelector</td>
<td>css 选择器。</td>
</tr>
<tr>
<td>XPath</td>
<td>XPath 选择器。</td>
</tr>
<tr>
<td>JsonPath</td>
<td>JsonPath，使用方法：https://github.com/tidwall/gjson。 注：这种方式可以不写 selector 表达式, 默认使用字段名</td>
</tr>
<tr>
<td>None</td>
<td>不解析，特殊站点需要写代码解析。</td>
</tr>
</tbody>
</table>
<h3 id="filter" tabindex="-1"><a class="header-anchor" href="#filter"><span>filter</span></a></h3>
<p>过滤器，用于对字段文本进行链式过滤转换，参数值部分支持 string、number、bool 类型，目前支持以下过滤器</p>
<table>
<thead>
<tr>
<th>名称</th>
<th>描述</th>
</tr>
</thead>
<tbody>
<tr>
<td>append_left</td>
<td>左边添加字符串</td>
</tr>
<tr>
<td>append_right</td>
<td>右边添加字符串</td>
</tr>
<tr>
<td>blank</td>
<td>判断是否为空</td>
</tr>
<tr>
<td>byte_size</td>
<td>体积转为字节数</td>
</tr>
<tr>
<td>case</td>
<td>同 switch case</td>
</tr>
<tr>
<td>constant</td>
<td>固定值</td>
</tr>
<tr>
<td>eq</td>
<td>判断是否相等，自动转换为 bool 类型，或者转换任一指定的文本</td>
</tr>
<tr>
<td>not_blank</td>
<td>判断是否不为空</td>
</tr>
<tr>
<td>querystring</td>
<td>搜索指定字符串索引，截取从索引开始的字符串部分</td>
</tr>
<tr>
<td>regex</td>
<td>正则匹配</td>
</tr>
<tr>
<td>replace</td>
<td>字符串替换</td>
</tr>
<tr>
<td>re_search</td>
<td>正则表达式搜索文本</td>
</tr>
<tr>
<td>split</td>
<td>分割文本，获取第 n 段的子文本</td>
</tr>
<tr>
<td>strip</td>
<td>去除字符串两端的空白字符（空格、制表符、换行符等）</td>
</tr>
<tr>
<td>timestamp</td>
<td>日期转为 unix 时间戳</td>
</tr>
</tbody>
</table>
<h4 id="append-left" tabindex="-1"><a class="header-anchor" href="#append-left"><span>append_left</span></a></h4>
<div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json"><pre v-pre><code class="language-json"><span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"append_left"</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">"args"</span><span class="token operator">:</span> <span class="token string">"str"</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="append-right" tabindex="-1"><a class="header-anchor" href="#append-right"><span>append_right</span></a></h4>
<div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json"><pre v-pre><code class="language-json"><span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"append_right"</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">"args"</span><span class="token operator">:</span> <span class="token string">"str"</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="blank" tabindex="-1"><a class="header-anchor" href="#blank"><span>blank</span></a></h4>
<p>三种方式<br>
第一种自动转 bool 类型
第二种转换为指定的 string 类型，如果不匹配则返回原始文本
第三种转换为指定的 string、number、bool 类型</p>
<div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json"><pre v-pre><code class="language-json"><span class="line"><span class="token punctuation">[</span></span>
<span class="line">  <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"blank"</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"blank"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">"args"</span><span class="token operator">:</span> <span class="token string">"if True"</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"blank"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">"args"</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">      <span class="token string">"if True"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token string">"if False"</span></span>
<span class="line">    <span class="token punctuation">]</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">]</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="byte-size" tabindex="-1"><a class="header-anchor" href="#byte-size"><span>byte_size</span></a></h4>
<div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json"><pre v-pre><code class="language-json"><span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"byte_size"</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="case" tabindex="-1"><a class="header-anchor" href="#case"><span>case</span></a></h4>
<p>value 支持 string、number、bool 类型</p>
<div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json"><pre v-pre><code class="language-json"><span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"case"</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">"args"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">"k1"</span><span class="token operator">:</span> <span class="token string">"v1"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">"k2"</span><span class="token operator">:</span> <span class="token string">"v2"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">"*"</span><span class="token operator">:</span> <span class="token string">"defaultValue"</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="constant" tabindex="-1"><a class="header-anchor" href="#constant"><span>constant</span></a></h4>
<div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json"><pre v-pre><code class="language-json"><span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"constant"</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">"args"</span><span class="token operator">:</span> <span class="token string">"str"</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="eq" tabindex="-1"><a class="header-anchor" href="#eq"><span>eq</span></a></h4>
<p>两种方式，第一种自动转 bool 类型，第二种转换为指定的 string、number、bool 类型</p>
<div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json"><pre v-pre><code class="language-json"><span class="line"><span class="token punctuation">[</span></span>
<span class="line">  <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"eq"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">"args"</span><span class="token operator">:</span> <span class="token string">"str"</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"eq"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">"args"</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">      <span class="token string">"str"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token string">"if True"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token string">"if False"</span></span>
<span class="line">    <span class="token punctuation">]</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">]</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="not-blank" tabindex="-1"><a class="header-anchor" href="#not-blank"><span>not_blank</span></a></h4>
<p>用法同 blank</p>
<div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json"><pre v-pre><code class="language-json"><span class="line"><span class="token punctuation">[</span></span>
<span class="line">  <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"not_blank"</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"not_blank"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">"args"</span><span class="token operator">:</span> <span class="token string">"if True"</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"not_blank"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">"args"</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">      <span class="token string">"if True"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token string">"if False"</span></span>
<span class="line">    <span class="token punctuation">]</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">]</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="querystring" tabindex="-1"><a class="header-anchor" href="#querystring"><span>querystring</span></a></h4>
<div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json"><pre v-pre><code class="language-json"><span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"querystring"</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">"args"</span><span class="token operator">:</span> <span class="token string">"str"</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="regex" tabindex="-1"><a class="header-anchor" href="#regex"><span>regex</span></a></h4>
<p>两种方式，第一种自动转 bool 类型，第二种转换为指定的 string、number、bool 类型</p>
<div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json"><pre v-pre><code class="language-json"><span class="line"><span class="token punctuation">[</span></span>
<span class="line">  <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"regex"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">"args"</span><span class="token operator">:</span> <span class="token string">"regex"</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"regex"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">"args"</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">      <span class="token string">"regex"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token string">"if True"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token string">"if False"</span></span>
<span class="line">    <span class="token punctuation">]</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">]</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="replace" tabindex="-1"><a class="header-anchor" href="#replace"><span>replace</span></a></h4>
<div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json"><pre v-pre><code class="language-json"><span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"replace"</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">"args"</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">    <span class="token string">"separator"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string">"old"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string">"new"</span></span>
<span class="line">  <span class="token punctuation">]</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="re-search" tabindex="-1"><a class="header-anchor" href="#re-search"><span>re_search</span></a></h4>
<p>以下文本获取上传量字节数，上传量: 1 TB</p>
<div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json"><pre v-pre><code class="language-json"><span class="line"><span class="token punctuation">[</span></span>
<span class="line">  <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"re_search"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">"args"</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">      <span class="token string">"上传量: (.*)"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token number">1</span></span>
<span class="line">    <span class="token punctuation">]</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"byte_size"</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">]</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="split" tabindex="-1"><a class="header-anchor" href="#split"><span>split</span></a></h4>
<p>分隔以下文本：hello world，结果为：world<br>
-1 为最后一段</p>
<div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json"><pre v-pre><code class="language-json"><span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"split"</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">"args"</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">    <span class="token string">" "</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token number">-1</span></span>
<span class="line">  <span class="token punctuation">]</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="strip" tabindex="-1"><a class="header-anchor" href="#strip"><span>strip</span></a></h4>
<div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json"><pre v-pre><code class="language-json"><span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"strip"</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="timestamp" tabindex="-1"><a class="header-anchor" href="#timestamp"><span>timestamp</span></a></h4>
<p>将时间格式： 2024-12-31 23:59:59，转为 unix 时间戳</p>
<div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json"><pre v-pre><code class="language-json"><span class="line"><span class="token punctuation">[</span></span>
<span class="line">  <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"timestamp"</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"timestamp"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">"args"</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">      <span class="token string">"2006-01-02 15:04:05"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token string">"2006-01-0215:04:05"</span></span>
<span class="line">    <span class="token punctuation">]</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">]</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="selection" tabindex="-1"><a class="header-anchor" href="#selection"><span>selection</span></a></h3>
<p>选择器文本类型</p>
<table>
<thead>
<tr>
<th>名称</th>
<th>描述</th>
</tr>
</thead>
<tbody>
<tr>
<td>text</td>
<td>取匹配节点的文本</td>
</tr>
<tr>
<td>html</td>
<td>取匹配节点的 html 源码</td>
</tr>
</tbody>
</table>
<h3 id="通用请求定义" tabindex="-1"><a class="header-anchor" href="#通用请求定义"><span>通用请求定义</span></a></h3>
<p>字段的数据类型支持字段转换，目前支持 string 转 int、int64、bool、float64、string，如需更多类型请在 client.decodeHookFunc
代码里添加。</p>
<table>
<thead>
<tr>
<th>名称</th>
<th>描述</th>
</tr>
</thead>
<tbody>
<tr>
<td>favicon</td>
<td>获取站点图标</td>
</tr>
<tr>
<td>user_basic_info</td>
<td>获取用户基础信息</td>
</tr>
<tr>
<td>user_details</td>
<td>获取用户详情</td>
</tr>
<tr>
<td>search</td>
<td>搜索种子列表</td>
</tr>
<tr>
<td>seeding_statistics</td>
<td>获取做种统计信息</td>
</tr>
<tr>
<td>my_hr</td>
<td>HR 考核中列表</td>
</tr>
<tr>
<td>messages</td>
<td>用户消息列表</td>
</tr>
<tr>
<td>message_detail</td>
<td>消息详情，根据消息链接查询</td>
</tr>
<tr>
<td>notice</td>
<td>公告</td>
</tr>
<tr>
<td>sign_in</td>
<td>签到</td>
</tr>
<tr>
<td>details</td>
<td>获取种子详情</td>
</tr>
<tr>
<td>download_file</td>
<td>下载文件，种子、字幕等等都可以下载</td>
</tr>
</tbody>
</table>
<h4 id="user-basic-info-字段" tabindex="-1"><a class="header-anchor" href="#user-basic-info-字段"><span>user_basic_info 字段</span></a></h4>
<table>
<thead>
<tr>
<th>名称</th>
<th>描述</th>
</tr>
</thead>
<tbody>
<tr>
<td>is_login</td>
<td>是否登录</td>
</tr>
<tr>
<td>signed_in</td>
<td>是否签到</td>
</tr>
<tr>
<td>id</td>
<td>用户 id</td>
</tr>
<tr>
<td>name</td>
<td>用户名称</td>
</tr>
<tr>
<td>ratio</td>
<td>分享率</td>
</tr>
<tr>
<td>uploaded</td>
<td>上传量</td>
</tr>
<tr>
<td>downloaded</td>
<td>下载量</td>
</tr>
<tr>
<td>bonus</td>
<td>魔力</td>
</tr>
<tr>
<td>gold</td>
<td>金币，特殊站点用，最终转换为魔力</td>
</tr>
<tr>
<td>silver</td>
<td>银币，同上</td>
</tr>
<tr>
<td>copper</td>
<td>铜币，同上</td>
</tr>
</tbody>
</table>
<h4 id="user-details-字段" tabindex="-1"><a class="header-anchor" href="#user-details-字段"><span>user_details 字段</span></a></h4>
<table>
<thead>
<tr>
<th>名称</th>
<th>描述</th>
</tr>
</thead>
<tbody>
<tr>
<td>level</td>
<td>用户等级</td>
</tr>
<tr>
<td>level_icon</td>
<td>用户等级 icon</td>
</tr>
<tr>
<td>join_at</td>
<td>加入时间，时间戳</td>
</tr>
<tr>
<td>last_accessed</td>
<td>最近动态，时间戳</td>
</tr>
</tbody>
</table>
<h4 id="search-字段" tabindex="-1"><a class="header-anchor" href="#search-字段"><span>search 字段</span></a></h4>
<table>
<thead>
<tr>
<th>名称</th>
<th>描述</th>
</tr>
</thead>
<tbody>
<tr>
<td>id</td>
<td>用户等级</td>
</tr>
<tr>
<td>category</td>
<td>类别</td>
</tr>
<tr>
<td>title</td>
<td>标题</td>
</tr>
<tr>
<td>description</td>
<td>描述</td>
</tr>
<tr>
<td>details</td>
<td>详情页地址，相对地址</td>
</tr>
<tr>
<td>download</td>
<td>下载地址，相对地址</td>
</tr>
<tr>
<td>size</td>
<td>体积</td>
</tr>
<tr>
<td>grabs</td>
<td>完成数</td>
</tr>
<tr>
<td>seeders</td>
<td>正在上传</td>
</tr>
<tr>
<td>leechers</td>
<td>正在下载</td>
</tr>
<tr>
<td>downloadvolumefactor</td>
<td>下载因子</td>
</tr>
<tr>
<td>uploadvolumefactor</td>
<td>上传因子</td>
</tr>
<tr>
<td>date_added</td>
<td>发布时间</td>
</tr>
<tr>
<td>date_elapsed</td>
<td>存活时间</td>
</tr>
<tr>
<td>hr_days</td>
<td>hr 天数</td>
</tr>
<tr>
<td>labels</td>
<td>标签</td>
</tr>
</tbody>
</table>
<h4 id="seeding-statistics-字段" tabindex="-1"><a class="header-anchor" href="#seeding-statistics-字段"><span>seeding_statistics 字段</span></a></h4>
<table>
<thead>
<tr>
<th>名称</th>
<th>描述</th>
</tr>
</thead>
<tbody>
<tr>
<td>count</td>
<td>数量</td>
</tr>
<tr>
<td>size</td>
<td>体积</td>
</tr>
</tbody>
</table>
<h4 id="my-hr-字段" tabindex="-1"><a class="header-anchor" href="#my-hr-字段"><span>my_hr 字段</span></a></h4>
<table>
<thead>
<tr>
<th>名称</th>
<th>描述</th>
</tr>
</thead>
<tbody>
<tr>
<td>id</td>
<td>hr id</td>
</tr>
<tr>
<td>name</td>
<td>标题</td>
</tr>
<tr>
<td>uploaded</td>
<td>上传量</td>
</tr>
<tr>
<td>downloaded</td>
<td>下载量</td>
</tr>
<tr>
<td>share_ratio</td>
<td>分享率</td>
</tr>
<tr>
<td>download_time</td>
<td>下载时间</td>
</tr>
<tr>
<td>need_seed_time</td>
<td>需要做种时间</td>
</tr>
<tr>
<td>remaining_inspection_time</td>
<td>考核剩余时间</td>
</tr>
</tbody>
</table>
<h4 id="messages-字段" tabindex="-1"><a class="header-anchor" href="#messages-字段"><span>messages 字段</span></a></h4>
<table>
<thead>
<tr>
<th>名称</th>
<th>描述</th>
</tr>
</thead>
<tbody>
<tr>
<td>id</td>
<td>id</td>
</tr>
<tr>
<td>title</td>
<td>标题</td>
</tr>
<tr>
<td>date</td>
<td>时间</td>
</tr>
<tr>
<td>content</td>
<td>内容</td>
</tr>
<tr>
<td>link</td>
<td>消息链接，相对地址</td>
</tr>
</tbody>
</table>
<p>同 messages</p>
<h4 id="message-detail-字段" tabindex="-1"><a class="header-anchor" href="#message-detail-字段"><span>message_detail 字段</span></a></h4>
<table>
<thead>
<tr>
<th>名称</th>
<th>描述</th>
</tr>
</thead>
<tbody>
<tr>
<td>title</td>
<td>标题</td>
</tr>
<tr>
<td>date</td>
<td>时间</td>
</tr>
<tr>
<td>content</td>
<td>内容</td>
</tr>
</tbody>
</table>
<h4 id="notice-字段" tabindex="-1"><a class="header-anchor" href="#notice-字段"><span>notice 字段</span></a></h4>
<table>
<thead>
<tr>
<th>名称</th>
<th>描述</th>
</tr>
</thead>
<tbody>
<tr>
<td>title</td>
<td>标题</td>
</tr>
<tr>
<td>date</td>
<td>时间</td>
</tr>
<tr>
<td>content</td>
<td>内容</td>
</tr>
</tbody>
</table>
<h4 id="details-字段" tabindex="-1"><a class="header-anchor" href="#details-字段"><span>details 字段</span></a></h4>
<table>
<thead>
<tr>
<th>名称</th>
<th>描述</th>
</tr>
</thead>
<tbody>
<tr>
<td>absent</td>
<td>种子已不存在</td>
</tr>
<tr>
<td>free</td>
<td>是否免费</td>
</tr>
<tr>
<td>2x_free</td>
<td>是否双免</td>
</tr>
<tr>
<td>hr</td>
<td>是否是 HR 种子</td>
</tr>
<tr>
<td>peer_count</td>
<td>做种人数</td>
</tr>
</tbody>
</table>
<h4 id="sign-in-字段" tabindex="-1"><a class="header-anchor" href="#sign-in-字段"><span>sign_in 字段</span></a></h4>
<table>
<thead>
<tr>
<th>名称</th>
<th>描述</th>
</tr>
</thead>
<tbody>
<tr>
<td>signed_in</td>
<td>是否签到</td>
</tr>
</tbody>
</table>
<h4 id="details-字段-1" tabindex="-1"><a class="header-anchor" href="#details-字段-1"><span>details 字段</span></a></h4>
<table>
<thead>
<tr>
<th>名称</th>
<th>描述</th>
</tr>
</thead>
<tbody>
<tr>
<td>absent</td>
<td>种子是否已不存在</td>
</tr>
<tr>
<td>free</td>
<td>是否免费</td>
</tr>
<tr>
<td>2x_free</td>
<td>是否双免</td>
</tr>
<tr>
<td>hr</td>
<td>是否是 HR 种子</td>
</tr>
<tr>
<td>peer_count</td>
<td>做种人数</td>
</tr>
</tbody>
</table>
<h2 id="json-数据结构" tabindex="-1"><a class="header-anchor" href="#json-数据结构"><span>JSON 数据结构</span></a></h2>
<h3 id="站点配置-json-说明" tabindex="-1"><a class="header-anchor" href="#站点配置-json-说明"><span>站点配置 JSON 说明：</span></a></h3>
<ul>
<li>id: 唯一标识</li>
<li>name: 名称</li>
<li>domain: 域名地址</li>
<li>api: api 地址</li>
<li>public: 是否为公开站点</li>
<li>schema: 系统架构，见名词解释</li>
<li>reuse_schema: 复用系统架构</li>
<li>required: 是否必须
<ul>
<li>user_id: 是否需要手动填写用户的 id</li>
<li>sign_in: 是否需要签到</li>
<li>cookie: 是否需要手动填写 cookie</li>
</ul>
</li>
<li>category: 分类，此处省略</li>
<li>price: 价格
<ul>
<li>has_free: 是否免费</li>
<li>has_2x_free: 是否双免</li>
<li>has_hr: 是否有 HR 种子</li>
</ul>
</li>
<li>common_fields: 公共字段定义</li>
<li>requests: 请求定义，支持继承 schema 的配置，若 schema 无配置，则尝试使用 reuse_schema 的配置
<ul>
<li>parser: 解析器，见名词解释</li>
<li>method: 请求方法，GET、POST</li>
<li>path: 请求地址，非 http、https 开头则拼接 domain 或 api</li>
<li>use_api: 是否使用 api 地址</li>
<li>chrome: 使用 chrome</li>
<li>headers: 请求头</li>
<li>required_headers: 必填请求头，可以在站点管理自定义请求头里面配</li>
<li>params: url 请求参数，值必须为字符串类型</li>
<li>form_data: 表单数据，值必须为字符串类型</li>
<li>body: 请求体</li>
<li>success_status_codes: 成功状态码</li>
<li>list: 列表请求，用于获取列表数据
<ul>
<li>selector: 列表项选择器</li>
<li>next_page: 分页参数, 同 field</li>
</ul>
</li>
<li>fields: 字段定义
<ul>
<li>selector: 选择器</li>
<li>selection: 选择器文本类型，见名词解释</li>
<li>attribute: css 选择器属性</li>
<li>filters: 过滤器，链式处理，见名词解释</li>
<li>parent: 是否选择父元素</li>
<li>remove: css 选择器移除子元素，多个用英文逗号分隔</li>
<li>any: 按顺序匹配，直到匹配成功，同 fields</li>
<li>array: 是否为数组</li>
<li>fields: 字段嵌套</li>
<li>fields_ref: 字段嵌套引用</li>
<li>list: 字段嵌套列表参数</li>
<li>trim_chars: 是否去除特殊字符</li>
</ul>
</li>
<li>fields_ref: 引用当前文件指定 rd 的 fields</li>
<li>disabled_extends: 禁用继承，指定不需要继承的字段
<ul>
<li>path</li>
<li>headers</li>
<li>required_headers</li>
<li>params</li>
<li>form_data</li>
<li>body</li>
<li>success_status_codes</li>
<li>list</li>
<li>fields</li>
<li>field</li>
</ul>
</li>
</ul>
</li>
</ul>
<h3 id="站点公共配置-json-说明" tabindex="-1"><a class="header-anchor" href="#站点公共配置-json-说明"><span>站点公共配置 JSON 说明：</span></a></h3>
<ul>
<li>id: 架构</li>
<li>requests: 同上</li>
</ul>
<h2 id="注意事项" tabindex="-1"><a class="header-anchor" href="#注意事项"><span>注意事项</span></a></h2>
<ul>
<li>增加 sign_in_required 配置</li>
<li>馒头部分接口没有权限，可以通过自定义 authorization 来获取全权限</li>
<li>影分类太细，暂不适配分类</li>
<li>appendleft 过滤器名称改为 append_left</li>
<li>case 去掉，改为 any + not_blank filter</li>
<li>index 去掉，自己想办法</li>
</ul>
<h3 id="搜索接口事项" tabindex="-1"><a class="header-anchor" href="#搜索接口事项"><span>搜索接口事项</span></a></h3>
<ul>
<li>search td.rowfollow 统一去掉 rowfollow，提高 NexusPHP.json 重复利用率</li>
<li>table.torrents &gt; tr:has(&quot;table.torrentname&quot;) 统一改为 table.torrents tr:has(table.torrentname)</li>
<li>去除 date、free_deadline，貌似没有用到</li>
<li>去掉 tags、subject，以前用于渲染 description 的</li>
<li>title_optional title_default 合并为 title，使用 any 即可，但要确保 title_optional 在 title_default 前面，否则可能拿到
description 的文本</li>
<li>contents 使用 filter split</li>
<li>default_value 改为 constant filter</li>
</ul>
<h4 id="字段继承" tabindex="-1"><a class="header-anchor" href="#字段继承"><span>字段继承</span></a></h4>
<ul>
<li>基本上一致，建议确认后直接继承：id、category、title、details、download、downloadvolumefactor、uploadvolumefactor、size、
grabs、seeders、leechers、date_elapsed、date_added</li>
<li>重复率较低，请仔细确认：description、labels、hr_days、imdbid</li>
</ul>
<h3 id="myhr-接口事项" tabindex="-1"><a class="header-anchor" href="#myhr-接口事项"><span>MyHr 接口事项</span></a></h3>
<ul>
<li>增加 id 字段</li>
<li>downloaded_time 改为 download_time</li>
<li>renaming_inspect_time 改为 renaming_time</li>
</ul>
<h3 id="details-接口事项" tabindex="-1"><a class="header-anchor" href="#details-接口事项"><span>details 接口事项</span></a></h3>
<ul>
<li>以前的 price xpath 表达式迁移过来</li>
<li>修改 price free、2xFree、hr 相关配置</li>
</ul>
<h3 id="seeding-statistic-接口事项" tabindex="-1"><a class="header-anchor" href="#seeding-statistic-接口事项"><span>seeding_statistic 接口事项</span></a></h3>
<ul>
<li>重写了接口，如果不需要分页，请禁用 list 的继承，headers 视情况禁用</li>
</ul>
<h2 id="常见问题" tabindex="-1"><a class="header-anchor" href="#常见问题"><span>常见问题</span></a></h2>
<ul>
<li>css selector 要注意，使用 &gt; 时必须保证为直接下级，否则会失败。应该有很多地方需要修改。例如：table.torrentname &gt;
tr，这种情况应该修改为 table.torrentname tr，因为中间还有一层 tbody，一般搜索接口拿不到值大概率是这个原因导致。</li>
</ul>
</div></template>


