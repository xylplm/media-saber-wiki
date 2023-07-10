import traceback
from khl import Bot, Message
from utils.file import open_file

# 打开config.json
config = open_file('./config/config.json')

# 初始化机器人
bot = Bot(token=config['token'])  # 默认采用 websocket


@bot.command(name='test')
async def test_cmd(msg: Message):
    try:
        print("test cmd recv!")
        ch = await bot.client.fetch_public_channel("3105208745392823"
                                                   )  # 获取指定频道

        # 使用channel对象的send
        ret = await ch.send("这是一个测试信息，使用了ch.send")  # 方法1
        print(f"ch.send | msg_id {ret['msg_id']}")  # 方法1 发送消息的id

        # 使用bot对象的client.send
        ret = await bot.client.send(ch, "这是一个测试信息，使用了bot.client.send")  # 方法2
        print(f"bot.client.send | msg_id {ret['msg_id']}")  # 方法2 发送消息的id
    except:
        print(traceback.format_exc())  # 打印报错详细信息


bot.run()