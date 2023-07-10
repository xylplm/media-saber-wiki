import json
import asyncio
from aiohttp import web, web_request
from khl import Bot, Cert


def open_file(path: str):
    """打开path对应的json文件"""
    with open(path, 'r', encoding='utf-8') as f:
        tmp = json.load(f)
    return tmp


# 打开config.json
config = open_file('./config/config.json')

# 初始化机器人
bot = Bot(token=config['token'])  # 默认采用 websocket
"""main bot"""
if not config['using_ws']:  # webhook
    # 当配置文件中'using_ws'键值为false时，代表不使用websocket
    # 此时采用webhook方式初始化机器人
    print(f"[BOT] using webhook at port {config['webhook_port']}")
    bot = Bot(cert=Cert(token=config['token'],
                        verify_token=config['verify_token'],
                        encrypt_key=config['encrypt_token']),
              port=config['webhook_port'])

# 初始化aiohttp节点
routes = web.RouteTableDef()


# 请求routes的根节点
@routes.get('/')
async def hello_world(request: web_request.Request):
    return web.Response(body="hello")


# 添加routes到app中
app = web.Application()
app.add_routes(routes)

# 屏蔽报错
import warnings
# ignore warning 'DeprecationWarning: There is no current event loop'
warnings.filterwarnings("ignore", category=DeprecationWarning)

# 同时运行 aiohttp的app 和 khl.py的bot
HOST, PORT = '0.0.0.0', 14725
if __name__ == '__main__':
    asyncio.get_event_loop().run_until_complete(
        asyncio.gather(web._run_app(app, host=HOST, port=PORT), bot.start()))