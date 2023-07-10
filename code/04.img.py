import traceback
import io # 文件操作
from PIL import Image

from khl import Bot, Message, MessageTypes
from khl.card import Card,CardMessage,Module,Element
from utils.file import open_file

# 打开config.json
config = open_file('./config/config.json')

# 初始化机器人
bot = Bot(token=config['token'])  # 默认采用 websocket

IMG_URL = ''
"""图片链接"""

async def img_upload():
    # 方法1 文件路径
    img_url = await bot.client.create_asset('./config/logo.png')
    print("str path ",img_url) # 图片url

    # 方法2 文件io对象
    img = None
    with open('./config/logo.png','rb') as f:
        img = io.BytesIO(f.read())
        # 下面的方式也可以，但是在传入create_asset函数时，编译器可能会报参数不匹配的警告
        # img = io.BytesIO(f.read()).getvalue() 
    
    img_url = await bot.client.create_asset(img) 
    print("open ",img_url)

    # 方法3 和PIL库对接
    img = Image.open('./config/logo.png')
    img_byte_arr = io.BytesIO()
    img.save(img_byte_arr, format='PNG') # 保存到内存中
    # img.save('./test.png') # 保存到磁盘中（仅作测试）
    img_byte = io.BytesIO(img_byte_arr.getvalue()) # 获取到bytes对象，再套一层io避免报警告
    img_url = await bot.client.create_asset(img_byte) # 上传
    print("PIL ",img_url)

    return img_url


@bot.command(name='test')
async def test_cmd(msg:Message):
    try:
        print('get /test cmd')

        img_url = await img_upload()
        # 赋值给全局变量
        global IMG_URL
        IMG_URL = img_url
    except:
        print(traceback.format_exc()) # 打印错误信息


@bot.command(name='img')
async def img_cmd(msg:Message,type:int=0):
    try:
        print('get /img cmd',type)
        if type == 0:
            # 直接上传图片
            await msg.reply(IMG_URL,type=MessageTypes.IMG) # 必须要指明 msg 的类型为 IMG 图片
            print("reply img only")
        else:
            # 卡片消息中的图片
            cm = CardMessage(Card(
                Module.Container(Element.Image(src=IMG_URL))
            ))
            # 使用了 Container 容器来存放 Image 元素，传入图片的 url 就可以了
            #  - 这里可以使用第三方图床的 url，但必须要保证该 url 能在国内被正常访问
            #  - 否则 kook 访问不到图片，会报卡片消息 json 格式不正确的错误
            await msg.reply(cm)
            print("reply img in cardmsg")
    except:
        print(traceback.format_exc()) # 打印错误信息


print('bot run')
bot.run()