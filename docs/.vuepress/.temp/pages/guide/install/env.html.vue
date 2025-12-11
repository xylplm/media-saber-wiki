<template><div><h2 id="环境变量说明" tabindex="-1"><a class="header-anchor" href="#环境变量说明"><span>环境变量说明</span></a></h2>
<table>
<thead>
<tr>
<th>变量名称</th>
<th>作用</th>
<th>值示例</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>TZ</code></td>
<td>时区设置</td>
<td><code v-pre>Asia/Shanghai</code></td>
</tr>
<tr>
<td><code v-pre>MS_PORT</code></td>
<td>前端端口</td>
<td><code v-pre>8888</code></td>
</tr>
<tr>
<td><code v-pre>MS_AUTH_EMAIL</code></td>
<td>邮箱</td>
<td><code v-pre>xxx@example.com</code></td>
</tr>
<tr>
<td><code v-pre>MS_AUTH_SLOGAN</code></td>
<td>授权码</td>
<td><code v-pre>xxx</code></td>
</tr>
<tr>
<td><code v-pre>MS_LOG_LEVEL</code></td>
<td>日志级别</td>
<td><code v-pre>debug</code> （可选：<code v-pre>debug</code>、<code v-pre>info</code>、<code v-pre>error</code>、<code v-pre>severe</code>）</td>
</tr>
<tr>
<td><code v-pre>MS_LOG_KEEP_DAYS</code></td>
<td>日志保留天数（文件模式生效）</td>
<td><code v-pre>14</code></td>
</tr>
<tr>
<td><code v-pre>MS_LOG_MAX_SIZE</code></td>
<td>日志文件最大值（mb）</td>
<td><code v-pre>10</code></td>
</tr>
<tr>
<td><code v-pre>MS_REDIS_HOST</code></td>
<td>Redis 连接地址</td>
<td><code v-pre>redis:6379</code></td>
</tr>
<tr>
<td><code v-pre>MS_REDIS_PASS</code></td>
<td>Redis 密码</td>
<td><code v-pre>&lt;空或密码&gt;</code></td>
</tr>
<tr>
<td><code v-pre>MS_TIMEOUT</code></td>
<td>接口请求超时（毫秒）</td>
<td><code v-pre>60000</code></td>
</tr>
<tr>
<td><code v-pre>MS_PGSQL_DBNAME</code></td>
<td>PostgreSQL 数据库名</td>
<td><code v-pre>ms</code></td>
</tr>
<tr>
<td><code v-pre>MS_PGSQL_USERNAME</code></td>
<td>PostgreSQL 用户名</td>
<td><code v-pre>postgres</code></td>
</tr>
<tr>
<td><code v-pre>MS_PGSQL_PASSWORD</code></td>
<td>PostgreSQL 密码</td>
<td><code v-pre>ms888888</code></td>
</tr>
<tr>
<td><code v-pre>MS_PGSQL_PATH</code></td>
<td>PostgreSQL 容器名</td>
<td><code v-pre>pgsql</code></td>
</tr>
<tr>
<td><code v-pre>MS_PGSQL_PORT</code></td>
<td>PostgreSQL 端口</td>
<td><code v-pre>5432</code></td>
</tr>
<tr>
<td><code v-pre>MS_PGSQL_LOG_MODE</code></td>
<td>数据库日志模式</td>
<td><code v-pre>prod</code>（可选：<code v-pre>dev</code>、<code v-pre>test</code>、<code v-pre>prod</code>、<code v-pre>silent</code>）</td>
</tr>
<tr>
<td><code v-pre>MS_MCP_SERVER_HTTP_ADDR</code></td>
<td>mcp streamable http 地址, 容器端口记得映射</td>
<td>0.0.0.0:22696</td>
</tr>
<tr>
<td><code v-pre>MS_MQ_CONCURRENCY</code></td>
<td>MQ 最大并发数，默认 10</td>
<td>10</td>
</tr>
<tr>
<td><code v-pre>MS_PATH_WATCH_TIME</code></td>
<td>目录监听间隔时间(秒)，默认 30s</td>
<td>30</td>
</tr>
</tbody>
</table>
</div></template>


