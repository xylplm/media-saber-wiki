"""生成 ESP32-S3 桌面小助手接线示意图（屏幕与触摸、音频）。

输出：
  src/client/esp32/images/wiring-screen.png
  src/client/esp32/images/wiring-audio.png

运行：python media-saber-wiki/scripts/gen_esp32_wiring.py
（脚本以自身所在 scripts 目录的上一级 wiki 根为基准定位输出目录）
"""
from pathlib import Path as FsPath

import matplotlib
matplotlib.use("Agg")
import matplotlib.pyplot as plt
from matplotlib.patches import FancyBboxPatch, FancyArrowPatch
from matplotlib.path import Path

# 中文字体
plt.rcParams["font.sans-serif"] = ["Microsoft YaHei", "SimHei"]
plt.rcParams["axes.unicode_minus"] = False

# 颜色规范
COL_POWER = "#E53935"   # 电源 3V3 红
COL_GND = "#546E7A"     # 地 灰蓝
COL_SIG = "#1E88E5"     # 信号 蓝
COL_SIG2 = "#43A047"    # 信号2 绿
COL_NC = "#BDBDBD"      # 未接 浅灰

# 输出目录：脚本在 <wiki-root>/scripts/ 下，输出到 <wiki-root>/src/client/esp32/images
OUT_DIR = FsPath(__file__).resolve().parent.parent / "src" / "client" / "esp32" / "images"


def draw_board(ax, x, y, w, h, title, color="#263238", title_color="white"):
    """画一块板卡（圆角矩形 + 标题栏）。返回内容区基线 y。"""
    box = FancyBboxPatch(
        (x, y - h), w, h,
        boxstyle="round,pad=0.02,rounding_size=0.25",
        linewidth=1.6, edgecolor=color, facecolor="#FFFFFF",
        mutation_aspect=1,
    )
    ax.add_patch(box)
    # 标题栏
    title_h = 0.7
    title_box = FancyBboxPatch(
        (x, y - title_h), w, title_h,
        boxstyle="round,pad=0.02,rounding_size=0.25",
        linewidth=0, facecolor=color, mutation_aspect=1,
    )
    ax.add_patch(title_box)
    ax.text(x + w / 2, y - title_h / 2, title,
            ha="center", va="center", color=title_color,
            fontsize=15, fontweight="bold")
    return y - title_h  # 标题栏底部 = 内容区顶部


def draw_pin(ax, x, y, label, gpio="", side="right",
             pin_color="#263238", label_color="#263238", pin_radius=0.09):
    """在板卡边缘画一个引脚点 + 标签。返回引脚坐标 (px, py)。"""
    ax.plot([x], [y], "o", markersize=8,
            markerfacecolor=pin_color, markeredgecolor=pin_color)
    if side == "right":
        # 标签在板内右侧（x 左侧），文字右对齐到引脚附近
        ax.text(x - 0.18, y, label, ha="right", va="center",
                fontsize=11.5, color=label_color, fontweight="bold")
        if gpio:
            ax.text(x + 0.18, y, gpio, ha="left", va="center",
                    fontsize=11.5, color="#37474F")
    else:  # left
        ax.text(x + 0.18, y, label, ha="left", va="center",
                fontsize=11.5, color=label_color, fontweight="bold")
        if gpio:
            ax.text(x - 0.18, y, gpio, ha="right", va="center",
                    fontsize=11.5, color="#37474F")
    return (x, y)


def draw_wire(ax, p1, p2, color, label="", label_xy=None, dashed=False,
              lw=2.0, bus=False):
    """画两点之间的连接线（曼哈顿走线 + 标签）。"""
    x1, y1 = p1
    x2, y2 = p2
    mid_x = (x1 + x2) / 2
    verts = [(x1, y1), (mid_x, y1), (mid_x, y2), (x2, y2)]
    codes = [Path.MOVETO, Path.LINETO, Path.LINETO, Path.LINETO]
    path = Path(verts, codes)
    ls = "--" if dashed else "-"
    ax.add_patch(matplotlib.patches.PathPatch(
        path, fill=False, edgecolor=color, linewidth=lw, linestyle=ls,
        capstyle="round", joinstyle="round"))
    if label:
        lx, ly = label_xy if label_xy else (mid_x, (y1 + y2) / 2)
        ax.text(lx, ly + 0.12, label, ha="center", va="bottom",
                fontsize=10, color=color, fontweight="bold",
                bbox=dict(boxstyle="round,pad=0.18", fc="white",
                          ec=color, lw=1))


def setup_fig(title):
    fig, ax = plt.subplots(figsize=(14, 9))
    fig.patch.set_facecolor("#FAFBFC")
    ax.set_facecolor("#FAFBFC")
    ax.set_xlim(0, 28)
    ax.set_ylim(0, 18)
    ax.set_aspect("equal")
    ax.axis("off")
    ax.text(14, 17.2, title, ha="center", va="top",
            fontsize=20, fontweight="bold", color="#1A237E")
    return fig, ax


def legend_box(ax, x, y):
    """画一个图例小框。"""
    items = [
        (COL_POWER, "电源 / 3V3"),
        (COL_GND, "接地 GND"),
        (COL_SIG, "信号线"),
    ]
    bx, by, bw, bh = x, y - 1.7, 4.6, 1.7
    ax.add_patch(FancyBboxPatch(
        (bx, by), bw, bh,
        boxstyle="round,pad=0.02,rounding_size=0.15",
        linewidth=1, edgecolor="#90A4AE", facecolor="white"))
    ax.text(bx + 0.25, by + bh - 0.32, "图例",
            fontsize=11, fontweight="bold", color="#37474F")
    for i, (c, t) in enumerate(items):
        yy = by + bh - 0.85 - i * 0.42
        ax.plot([bx + 0.35], [yy], "-", color=c, linewidth=3)
        ax.text(bx + 0.7, yy, t, fontsize=10.5, va="center", color="#37474F")


# ============================================================
# 图 1：屏幕与触摸接线
# ============================================================
def gen_screen_wiring():
    fig, ax = setup_fig("ESP32-S3 桌面小助手 · 屏幕与触摸接线图")

    # 左：屏幕模块（含触摸）
    bx, by, bw, bh = 1.2, 16.0, 7.6, 12.0
    base = draw_board(ax, bx, by, bw, bh, "TK020F1131 屏幕模块", color="#00695C")

    pins_left = [
        ("3V3", "", COL_POWER),
        ("GND", "", COL_GND),
        ("TP SDA", "触摸 I²C 数据", COL_SIG),
        ("TP SCL", "触摸 I²C 时钟", COL_SIG),
        ("LCD MOSI", "SPI 数据", COL_SIG),
        ("LCD DC", "数据/命令", COL_SIG),
        ("LCD SCLK", "SPI 时钟", COL_SIG),
        ("LCD CS", "SPI 片选", COL_SIG),
        ("LCD RST", "(未接)", COL_NC),
        ("LCD BL", "(未接)", COL_NC),
        ("TP RST", "(未接)", COL_NC),
        ("TP INT", "(未接)", COL_NC),
    ]
    y_top = base - 0.7
    gap = (bh - 0.7 - 1.0) / (len(pins_left) - 1)
    left_points = {}
    for i, (label, sub, color) in enumerate(pins_left):
        yy = y_top - i * gap
        lbl = label if not sub else f"{label}\n{sub}"
        draw_pin(ax, bx, yy, lbl, side="right", pin_color=color)
        left_points[label] = (bx, yy)

    # 右：ESP32-S3
    rx, ry, rw, rh = 18.0, 16.0, 7.6, 12.0
    rbase = draw_board(ax, rx, ry, rw, rh, "ESP32-S3 主控", color="#1565C0")
    ax.text(rx + rw / 2, rbase - 0.45, "N16R8 · 16MB Flash + 8MB PSRAM",
            ha="center", va="top", fontsize=10, color="#546E7A")

    # 右侧引脚（与左侧信号对应），GPIO 标在引脚右侧
    pins_right = [
        ("3V3", "GPIO —", COL_POWER),
        ("GND", "GPIO —", COL_GND),
        ("GPIO 1", "触摸 SDA", COL_SIG),
        ("GPIO 2", "触摸 SCL", COL_SIG),
        ("GPIO 42", "LCD MOSI", COL_SIG),
        ("GPIO 41", "LCD DC", COL_SIG),
        ("GPIO 40", "LCD SCLK", COL_SIG),
        ("GPIO 39", "LCD CS", COL_SIG),
        ("NC", "LCD RST", COL_NC),
        ("NC", "LCD BL", COL_NC),
        ("NC", "TP RST", COL_NC),
        ("NC", "TP INT", COL_NC),
    ]
    right_points = {}
    for i, (gpio, sub, color) in enumerate(pins_right):
        yy = y_top - i * gap
        lbl = gpio if sub == "GPIO —" else f"{gpio}\n{sub}"
        if gpio == "NC":
            lbl = "NC\n(不接)"
        draw_pin(ax, rx + rw, yy, lbl, side="left", pin_color=color)
        right_points[pins_left[i][0]] = (rx + rw, yy)

    # 连线（按信号分组偏移 mid_x，避免重叠）
    wire_map = [
        ("3V3", COL_POWER, "3V3"),
        ("GND", COL_GND, "GND"),
        ("TP SDA", COL_SIG, "SDA"),
        ("TP SCL", COL_SIG, "SCL"),
        ("LCD MOSI", COL_SIG, "MOSI"),
        ("LCD DC", COL_SIG, "DC"),
        ("LCD SCLK", COL_SIG, "SCLK"),
        ("LCD CS", COL_SIG, "CS"),
        ("LCD RST", COL_NC, "NC", True),
        ("LCD BL", COL_NC, "NC", True),
        ("TP RST", COL_NC, "NC", True),
        ("TP INT", COL_NC, "NC", True),
    ]
    for item in wire_map:
        label = item[0]
        p1 = left_points[label]
        p2 = right_points[label]
        if len(item) == 4:
            _, color, txt, dashed = item
        else:
            _, color, txt = item
            dashed = False
        draw_wire(ax, p1, p2, color, label=txt, dashed=dashed,
                  lw=2.4 if not dashed else 1.4)

    # NC 说明框
    ax.text(14, 2.6,
            "[注意] LCD RST / LCD BL / TP RST / TP INT 当前硬件未引出：\n"
            "  • LCD 走软件复位，BL 背光直连 3V3 常亮\n"
            "  • TP 用轮询模式读坐标，不需要 INT 中断脚",
            ha="center", va="center", fontsize=10.5, color="#BF360C",
            bbox=dict(boxstyle="round,pad=0.5", fc="#FFF3E0", ec="#FFB74D"))

    legend_box(ax, 0.8, 4.6)
    fig.tight_layout()
    fig.savefig(f"{OUT_DIR}/wiring-screen.png", dpi=150,
                facecolor=fig.get_facecolor(), bbox_inches="tight")
    plt.close(fig)
    print(f"saved {OUT_DIR}/wiring-screen.png")


# ============================================================
# 图 2：音频接线
# ============================================================
def gen_audio_wiring():
    fig, ax = setup_fig("ESP32-S3 桌面小助手 · 音频接线图（LMD2718 + NS4168）")

    # 左：音频板
    bx, by, bw, bh = 1.2, 15.6, 7.6, 10.0
    base = draw_board(ax, bx, by, bw, bh, "音频板", color="#6A1B9A")

    pins_left = [
        ("VCC", "3.3V 供电", COL_POWER),
        ("GND", "接地", COL_GND),
        ("LRCLK", "扬声器 I2S LRCK", COL_SIG),
        ("BCLK", "扬声器 I2S BCLK", COL_SIG),
        ("SDA", "扬声器 I2S 数据", COL_SIG),
        ("DATA", "麦克风 DATA → ESP32", COL_SIG2),
        ("CLK", "麦克风时钟 ← ESP32", COL_SIG2),
    ]
    y_top = base - 0.9
    gap = (bh - 0.9 - 1.2) / (len(pins_left) - 1)
    left_points = {}
    for i, (label, sub, color) in enumerate(pins_left):
        yy = y_top - i * gap
        draw_pin(ax, bx, yy, f"{label}\n{sub}", side="right", pin_color=color)
        left_points[label] = (bx, yy)

    # 右：ESP32-S3
    rx, ry, rw, rh = 18.0, 15.6, 7.6, 10.0
    rbase = draw_board(ax, rx, ry, rw, rh, "ESP32-S3 主控", color="#1565C0")
    ax.text(rx + rw / 2, rbase - 0.45,
            "NS4168 扬声器 + LMD2718 数字麦 · 3.3V 逻辑",
            ha="center", va="top", fontsize=10, color="#546E7A")

    pins_right = [
        ("3V3", "", COL_POWER),
        ("GND", "", COL_GND),
        ("GPIO 15", "I2S LRCK", COL_SIG),
        ("GPIO 7", "I2S BCLK", COL_SIG),
        ("GPIO 6", "I2S 数据输出", COL_SIG),
        ("GPIO 5", "麦克风数据输入", COL_SIG2),
        ("GPIO 4", "麦克风时钟输出", COL_SIG2),
    ]
    right_points = {}
    for i, (gpio, sub, color) in enumerate(pins_right):
        yy = y_top - i * gap
        lbl = gpio if not sub else f"{gpio}\n{sub}"
        draw_pin(ax, rx + rw, yy, lbl, side="left", pin_color=color)
        right_points[pins_left[i][0]] = (rx + rw, yy)

    wire_map = [
        ("VCC", COL_POWER, "3V3"),
        ("GND", COL_GND, "GND"),
        ("LRCLK", COL_SIG, "LRCLK"),
        ("BCLK", COL_SIG, "BCLK"),
        ("SDA", COL_SIG, "SDA"),
        ("DATA", COL_SIG2, "DATA"),
        ("CLK", COL_SIG2, "CLK"),
    ]
    for label, color, txt in wire_map:
        draw_wire(ax, left_points[label], right_points[label], color,
                  label=txt, lw=2.4)

    # 方向分组说明
    ax.text(14, 6.2, "【扬声器输出】NS4168 · I2S 标准模式",
            ha="center", fontsize=11.5, fontweight="bold", color=COL_SIG)
    ax.text(14, 5.5, "LRCLK / BCLK / SDA 三根线，ESP32 → 扬声器",
            ha="center", fontsize=10.5, color="#37474F")

    ax.text(14, 4.4, "【麦克风输入】LMD2718 · PDM RX",
            ha="center", fontsize=11.5, fontweight="bold", color=COL_SIG2)
    ax.text(14, 3.7,
            "CLK 由 ESP32 输出到麦克风时钟脚，DATA 从麦克风回到 ESP32\n"
            "输入采样率 16 kHz，输出采样率 24 kHz",
            ha="center", fontsize=10.5, color="#37474F")

    ax.text(14, 2.0,
            "[注意] 全部按 3.3V 逻辑连接，禁止接到 5V；当前固件不走 ES8311 + I2C codec 路径",
            ha="center", va="center", fontsize=10.5, color="#BF360C",
            bbox=dict(boxstyle="round,pad=0.5", fc="#FFF3E0", ec="#FFB74D"))

    legend_box(ax, 0.8, 4.4)
    fig.tight_layout()
    fig.savefig(f"{OUT_DIR}/wiring-audio.png", dpi=150,
                facecolor=fig.get_facecolor(), bbox_inches="tight")
    plt.close(fig)
    print(f"saved {OUT_DIR}/wiring-audio.png")


if __name__ == "__main__":
    import os
    os.makedirs(OUT_DIR, exist_ok=True)
    gen_screen_wiring()
    gen_audio_wiring()
