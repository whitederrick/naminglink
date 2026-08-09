import type { DocPage, NoticeCopy } from "./types";
import type { DocKey } from "./ko";

/** 中文 — `scripts/translate-doc-content.ts`가 만든다. 손으로 고치지 말 것. */
export const ZH_DOCS = {
  "about": {
    "eyebrow": "关于",
    "title": "关于 Inyeon-Link",
    "summary": "我们比较两个出生图，基于韩国的 saju 传统。以下是我们计算的内容，以及我们拒绝声称的内容。",
    "backLabel": "首页",
    "sections": [
      {
        "title": "我们的工作",
        "blocks": [
          {
            "p": "Inyeon-Link 根据出生日期和时间构建两个出生图，并展示 **这两组能量如何相遇。** 您也可以单独阅读自己的图表，看看哪些气质更适合您。"
          },
          {
            "p": "屏幕上的阅读是 **免费的，无需账户。** 付费项目是 PDF 报告，包含屏幕上从未显示的数字 — 元素强度、十神配对以及四柱之间的关系。"
          }
        ]
      },
      {
        "title": "我们计算的内容",
        "blocks": [
          {
            "p": "图表是根据 **韩国的阴阳历** 构建的，出生时间被修正为出生地的 **真实太阳时间** — 相同的时钟时间在不同的出生地点意味着不同的太阳位置。"
          },
          {
            "p": "分数仅来自固定规则。传统概念 — 十神、支干关系、支持元素 — 以规则的形式表达，因此 **相同的输入总是给出相同的结果。** 当规则发生变化时，我们会进行回归测试，以确保旧的读数没有变化。"
          },
          {
            "p": "**不涉及人工智能。** 屏幕上的每一句话都是固定文本，附加在计算结果上。"
          }
        ]
      },
      {
        "title": "我们不会声称的内容",
        "blocks": [
          {
            "ul": [
              "**我们不算命。** 这里没有任何内容告诉您追求或避免任何人。这是从传统中提取的参考。",
              "**我们不存储您输入的内容。** 出生细节仅用于计算时刻，绝不会被记录；结果链接存在于浏览器不发送到服务器的 URL 部分。",
              "**分数不是对一个人的裁决。** 低分并不否定一段关系。"
            ]
          }
        ]
      },
      {
        "kind": "note",
        "blocks": [
          {
            "p": "该方法的详细描述在 [指南](/guide) 中。公司详情和联系方式在 [联系页面](/contact) 上。"
          }
        ]
      }
    ]
  }
} satisfies Record<DocKey, DocPage>;

export const ZH_NOTICES = {
  "kindLabels": {
    "service": "服务",
    "product": "产品",
    "policy": "政策",
    "support": "支持"
  },
  "intro": "使用条款的变更 — 价格、政策 — 在生效前会在此发布。内部改进不会列出：这里出现的内容是您需要知道的。",
  "empty": {
    "title": "尚无通知",
    "body": "当有变更时，将在此处出现。"
  },
  "effective": "生效日期 {date}",
  "pager": {
    "label": "通知页面",
    "newer": "← 更新",
    "older": "旧的 →"
  },
  "items": {}
} satisfies NoticeCopy;
