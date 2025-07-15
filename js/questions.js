// 测试说明
const testInstructions = {
    title: "MBTI职业性格测试",
    description: `
1、参加测试的人员请务必诚实、独立地回答问题，只有如此，才能得到有效的结果。
2、《性格分析报告》展示的是你的性格倾向，而不是你的知识、技能、经验。
3、MBTI提供的性格类型描述仅供测试者确定自己的性格类型之用，性格类型没有好坏，只有不同。
4、本测试分为四部分，共93题；需时约18分钟。所有题目没有对错之分，请根据自己的实际情况选择。
    `,
    scoringRules: `
评分规则：
1. 当你完成所有题目后，系统会自动计算8项（E、I、S、N、T、F、J、P）的分数。
2. 每个维度中得分较高的那个特质，就是你的性格倾向。
3. 如果出现同分，按照以下规则处理：
   - E=I 取I
   - S=N 取N
   - T=F 取F
   - J=P 取P
    `
};

// 题目数据
const questions = [
    {
        id: 1,
        question: "当你要外出一整天，你会",
        options: {
            A: "计划你要做什么和在什么时候做",
            B: "说去就去"
        },
        type: "J-P"
    },
    {
        id: 2,
        question: "你认为自己是一个",
        options: {
            A: "较为随兴所至的人",
            B: "较为有条理的人"
        },
        type: "P-J"
    },
    {
        id: 3,
        question: "假如你是一位老师，你会选教",
        options: {
            A: "以事实为主的课程",
            B: "涉及理论的课程"
        },
        type: "S-N"
    },
    {
        id: 4,
        question: "你通常",
        options: {
            A: "与人容易混熟",
            B: "比较沉静或矜持"
        },
        type: "E-I"
    },
    {
        id: 5,
        question: "一般来说，你和哪些人比较合得来？",
        options: {
            A: "富于想象力的人",
            B: "现实的人"
        },
        type: "N-S"
    },
    {
        id: 91,
        question: "你倾向于",
        options: {
            A: "全心投入",
            B: "有决心的"
        },
        type: "F-T"
    },
    {
        id: 92,
        question: "你更欣赏的品质是",
        options: {
            A: "能干",
            B: "仁慈"
        },
        type: "T-F"
    },
    {
        id: 93,
        question: "你更倾向于",
        options: {
            A: "实际",
            B: "创新"
        },
        type: "S-N"
    },
    {
        id: 6,
        question: "你是否经常让",
        options: {
            A: "你的情感支配你的理智",
            B: "你的理智主宰你的情感"
        },
        type: "F-T"
    },
    {
        id: 7,
        question: "处理许多事情上，你会喜欢",
        options: {
            A: "凭兴所至行事",
            B: "按照计划行事"
        },
        type: "P-J"
    },
    {
        id: 8,
        question: "你是否",
        options: {
            A: "容易让人了解",
            B: "难于让人了解"
        },
        type: "E-I"
    },
    {
        id: 9,
        question: "按照程序表做事",
        options: {
            A: "合你心意",
            B: "令你感到束缚"
        },
        type: "J-P"
    },
    {
        id: 10,
        question: "当你有一份特别的任务，你会喜欢",
        options: {
            A: "开始前小心组织计划",
            B: "边做边找须做什么"
        },
        type: "J-P"
    },
    {
        id: 11,
        question: "在大多数情况下，你会选择",
        options: {
            A: "顺其自然",
            B: "按程序表做事"
        },
        type: "P-J"
    },
    {
        id: 12,
        question: "大多数人会说你是一个",
        options: {
            A: "重视自我隐私的人",
            B: "非常坦率开放的人"
        },
        type: "I-E"
    },
    {
        id: 13,
        question: "你宁愿被人认为是一个",
        options: {
            A: "实事求是的人",
            B: "机灵的人"
        },
        type: "S-N"
    },
    {
        id: 14,
        question: "在一大群人当中，通常是",
        options: {
            A: "你介绍大家认识",
            B: "别人介绍你"
        },
        type: "E-I"
    },
    {
        id: 15,
        question: "你会跟哪些人做朋友？",
        options: {
            A: "常提出新注意的",
            B: "脚踏实地的"
        },
        type: "N-S"
    },
    {
        id: 16,
        question: "你倾向",
        options: {
            A: "重视感情多于逻辑",
            B: "重视逻辑多于感情"
        },
        type: "F-T"
    },
    {
        id: 17,
        question: "你比较喜欢",
        options: {
            A: "坐观事情发展才作计划",
            B: "很早就作计划"
        },
        type: "P-J"
    },
    {
        id: 18,
        question: "你喜欢花很多的时间",
        options: {
            A: "一个人独处",
            B: "合别人在一起"
        },
        type: "I-E"
    },
    {
        id: 19,
        question: "与很多人一起会",
        options: {
            A: "令你活力培增",
            B: "常常令你心力憔悴"
        },
        type: "E-I"
    },
    {
        id: 20,
        question: "你比较喜欢",
        options: {
            A: "很早便把约会、社交聚集等事情安排妥当",
            B: "无拘无束，看当时有什么好玩就做什么"
        },
        type: "J-P"
    },
    {
        id: 21,
        question: "计划一个旅程时，你较喜欢",
        options: {
            A: "大部分的时间都是跟当天的感觉行事",
            B: "事先知道大部分的日子会做什么"
        },
        type: "P-J"
    },
    {
        id: 22,
        question: "在社交聚会中，你",
        options: {
            A: "有时感到郁闷",
            B: "常常乐在其中"
        },
        type: "I-E"
    },
    {
        id: 23,
        question: "你通常",
        options: {
            A: "和别人容易混熟",
            B: "趋向自处一隅"
        },
        type: "E-I"
    },
    {
        id: 24,
        question: "哪些人会更吸引你？",
        options: {
            A: "一个思想敏捷及非常聪颖的人",
            B: "实事求是，具丰富常识的人"
        },
        type: "N-S"
    },
    {
        id: 25,
        question: "在日常工作中，你会",
        options: {
            A: "颇为喜欢处理迫使你分秒必争的突发",
            B: "通常预先计划，以免要在压力下工作"
        },
        type: "P-J"
    },
    {
        id: 26,
        question: "你认为别人一般",
        options: {
            A: "要花很长时间才认识你",
            B: "用很短的时间便认识你"
        },
        type: "I-E"
    },
    {
        id: 27,
        question: "更合你心意的词语是",
        options: {
            A: "注重隐私",
            B: "坦率开放"
        },
        type: "I-E"
    },
    {
        id: 28,
        question: "更合你心意的词语是",
        options: {
            A: "预先安排的",
            B: "无计划的"
        },
        type: "J-P"
    },
    {
        id: 29,
        question: "更合你心意的词语是",
        options: {
            A: "抽象",
            B: "具体"
        },
        type: "N-S"
    },
    {
        id: 30,
        question: "更合你心意的词语是",
        options: {
            A: "温柔",
            B: "坚定"
        },
        type: "F-T"
    },
    {
        id: 31,
        question: "更合你心意的词语是",
        options: {
            A: "思考",
            B: "感受"
        },
        type: "T-F"
    },
    {
        id: 32,
        question: "更合你心意的词语是",
        options: {
            A: "事实",
            B: "意念"
        },
        type: "S-N"
    },
    {
        id: 33,
        question: "更合你心意的词语是",
        options: {
            A: "冲动",
            B: "决定"
        },
        type: "P-J"
    },
    {
        id: 34,
        question: "更合你心意的词语是",
        options: {
            A: "热衷",
            B: "文静"
        },
        type: "E-I"
    },
    {
        id: 35,
        question: "更合你心意的词语是",
        options: {
            A: "文静",
            B: "外向"
        },
        type: "I-E"
    },
    {
        id: 36,
        question: "更合你心意的词语是",
        options: {
            A: "有系统",
            B: "随意"
        },
        type: "J-P"
    },
    {
        id: 37,
        question: "更合你心意的词语是",
        options: {
            A: "理论",
            B: "肯定"
        },
        type: "N-S"
    },
    {
        id: 38,
        question: "更合你心意的词语是",
        options: {
            A: "敏感",
            B: "公正"
        },
        type: "F-T"
    },
    {
        id: 39,
        question: "更合你心意的词语是",
        options: {
            A: "令人信服",
            B: "感人的"
        },
        type: "T-F"
    },
    {
        id: 40,
        question: "更合你心意的词语是",
        options: {
            A: "声明",
            B: "概念"
        },
        type: "S-N"
    },
    {
        id: 41,
        question: "更合你心意的词语是",
        options: {
            A: "不受约束",
            B: "预先安排"
        },
        type: "P-J"
    },
    {
        id: 42,
        question: "更合你心意的词语是",
        options: {
            A: "矜持",
            B: "健谈"
        },
        type: "I-E"
    },
    {
        id: 43,
        question: "更合你心意的词语是",
        options: {
            A: "有条不紊",
            B: "不拘小节"
        },
        type: "J-P"
    },
    {
        id: 44,
        question: "更合你心意的词语是",
        options: {
            A: "意念",
            B: "实况"
        },
        type: "N-S"
    },
    {
        id: 45,
        question: "更合你心意的词语是",
        options: {
            A: "同情怜悯",
            B: "远见"
        },
        type: "F-T"
    },
    {
        id: 46,
        question: "更合你心意的词语是",
        options: {
            A: "利益",
            B: "祝福"
        },
        type: "T-F"
    },
    {
        id: 47,
        question: "更合你心意的词语是",
        options: {
            A: "务实的",
            B: "理论的"
        },
        type: "S-N"
    },
    {
        id: 48,
        question: "更合你心意的词语是",
        options: {
            A: "朋友不多",
            B: "朋友众多"
        },
        type: "I-E"
    },
    {
        id: 49,
        question: "更合你心意的词语是",
        options: {
            A: "有系统",
            B: "即兴"
        },
        type: "J-P"
    },
    {
        id: 50,
        question: "更合你心意的词语是",
        options: {
            A: "富想象的",
            B: "以事论事"
        },
        type: "N-S"
    },
    {
        id: 51,
        question: "更合你心意的词语是",
        options: {
            A: "亲切的",
            B: "客观的"
        },
        type: "F-T"
    },
    {
        id: 52,
        question: "更合你心意的词语是",
        options: {
            A: "客观的",
            B: "热情的"
        },
        type: "T-F"
    },
    {
        id: 53,
        question: "更合你心意的词语是",
        options: {
            A: "建造",
            B: "发明"
        },
        type: "S-N"
    },
    {
        id: 54,
        question: "更合你心意的词语是",
        options: {
            A: "文静",
            B: "爱合群"
        },
        type: "I-E"
    },
    {
        id: 55,
        question: "更合你心意的词语是",
        options: {
            A: "理论",
            B: "事实"
        },
        type: "N-S"
    },
    {
        id: 56,
        question: "更合你心意的词语是",
        options: {
            A: "富同情",
            B: "合逻辑"
        },
        type: "F-T"
    },
    {
        id: 57,
        question: "更合你心意的词语是",
        options: {
            A: "具分析力",
            B: "多愁善感"
        },
        type: "T-F"
    },
    {
        id: 58,
        question: "更合你心意的词语是",
        options: {
            A: "合情合理",
            B: "令人着迷"
        },
        type: "S-N"
    },
    {
        id: 59,
        question: "当你要在一个星期内完成一个大项目，你在开始的时候会",
        options: {
            A: "把要做的不同工作依次列出",
            B: "马上动工"
        },
        type: "J-P"
    },
    {
        id: 60,
        question: "在社交场合中，你经常会感到",
        options: {
            A: "与某些人很难打开话匣儿和保持对话",
            B: "与多数人都能从容地长谈"
        },
        type: "I-E"
    },
    {
        id: 61,
        question: "要做许多人也做的事，你比较喜欢",
        options: {
            A: "按照一般认可的方法去做",
            B: "构想一个自己的想法"
        },
        type: "S-N"
    },
    {
        id: 62,
        question: "你刚认识的朋友能否说出你的兴趣？",
        options: {
            A: "马上可以",
            B: "要待他们真正了解你之后才可以"
        },
        type: "E-I"
    },
    {
        id: 63,
        question: "你通常较喜欢的科目是",
        options: {
            A: "讲授概念和原则的",
            B: "讲授事实和数据的"
        },
        type: "N-S"
    },
    {
        id: 64,
        question: "哪个是较高的赞誉？",
        options: {
            A: "一贯感性的人",
            B: "一贯理性的人"
        },
        type: "F-T"
    },
    {
        id: 65,
        question: "你认为按照程序表做事",
        options: {
            A: "有时是需要的，但一般来说你不大喜欢这样做",
            B: "大多数情况下是有帮助而且是你喜欢做的"
        },
        type: "P-J"
    },
    {
        id: 66,
        question: "和一群人在一起，你通常会选择",
        options: {
            A: "跟你很熟悉的个别人谈话",
            B: "参与大伙的谈话"
        },
        type: "I-E"
    },
    {
        id: 67,
        question: "在社交聚会上，你会",
        options: {
            A: "是说话很多的一个",
            B: "让别人多说话"
        },
        type: "E-I"
    },
    {
        id: 68,
        question: "把周末期间要完成的事列成清单，这个主意会",
        options: {
            A: "合你意",
            B: "使你提不起劲"
        },
        type: "J-P"
    },
    {
        id: 69,
        question: "哪个是较高的赞誉？",
        options: {
            A: "能干的",
            B: "富有同情心"
        },
        type: "T-F"
    },
    {
        id: 70,
        question: "你通常喜欢",
        options: {
            A: "事先安排你的社交约会",
            B: "随兴之所至做事"
        },
        type: "J-P"
    },
    {
        id: 71,
        question: "总的说来，要做一个大型作业时，你会选择",
        options: {
            A: "边做边想该做什么",
            B: "首先把工作按步细分"
        },
        type: "P-J"
    },
    {
        id: 72,
        question: "你能否滔滔不绝地与人聊天",
        options: {
            A: "只限于跟你有共同兴趣的人",
            B: "几乎跟任何人都可以"
        },
        type: "I-E"
    },
    {
        id: 73,
        question: "你会",
        options: {
            A: "跟随一些证明有效的方法",
            B: "分析还有什么毛病，及针对尚未解决的难题"
        },
        type: "S-N"
    },
    {
        id: 74,
        question: "为乐趣而阅读时，你会",
        options: {
            A: "喜欢奇特或创新的表达方式",
            B: "喜欢作者直话直说"
        },
        type: "N-S"
    },
    {
        id: 75,
        question: "你宁愿替哪一类上司（或者老师）工作？",
        options: {
            A: "天性淳良，但常常前后不一的",
            B: "言词尖锐但永远合乎逻辑的"
        },
        type: "F-T"
    },
    {
        id: 76,
        question: "你做事多数是",
        options: {
            A: "按当天心情去做",
            B: "照拟好的程序表去做"
        },
        type: "P-J"
    },
    {
        id: 77,
        question: "你是否",
        options: {
            A: "可以和任何人按需求从容地交谈",
            B: "只是对某些人或在某种情况下才可以畅所欲言"
        },
        type: "E-I"
    },
    {
        id: 78,
        question: "要作决定时，你认为比较重要的是",
        options: {
            A: "据事实衡量",
            B: "考虑他人的感受和意见"
        },
        type: "T-F"
    },
    {
        id: 79,
        question: "更合你心意的词语是",
        options: {
            A: "想象的",
            B: "真实的"
        },
        type: "N-S"
    },
    {
        id: 80,
        question: "更合你心意的词语是",
        options: {
            A: "仁慈慷慨的",
            B: "意志坚定的"
        },
        type: "F-T"
    },
    {
        id: 81,
        question: "更合你心意的词语是",
        options: {
            A: "公正的",
            B: "有关怀心"
        },
        type: "T-F"
    },
    {
        id: 82,
        question: "更合你心意的词语是",
        options: {
            A: "制作",
            B: "设计"
        },
        type: "S-N"
    },
    {
        id: 83,
        question: "更合你心意的词语是",
        options: {
            A: "可能性",
            B: "必然性"
        },
        type: "N-S"
    },
    {
        id: 84,
        question: "更合你心意的词语是",
        options: {
            A: "温柔",
            B: "力量"
        },
        type: "F-T"
    },
    {
        id: 85,
        question: "更合你心意的词语是",
        options: {
            A: "实际",
            B: "多愁善感"
        },
        type: "T-F"
    },
    {
        id: 86,
        question: "更合你心意的词语是",
        options: {
            A: "制造",
            B: "创造"
        },
        type: "S-N"
    },
    {
        id: 87,
        question: "更合你心意的词语是",
        options: {
            A: "新颖的",
            B: "已知的"
        },
        type: "N-S"
    },
    {
        id: 88,
        question: "更合你心意的词语是",
        options: {
            A: "同情",
            B: "分析"
        },
        type: "F-T"
    },
    {
        id: 89,
        question: "更合你心意的词语是",
        options: {
            A: "坚持己见",
            B: "温柔有爱心"
        },
        type: "T-F"
    },
    {
        id: 90,
        question: "更合你心意的词语是",
        options: {
            A: "具体的",
            B: "抽象的"
        },
        type: "S-N"
    }
];


// 导出问题数据
if (typeof module !== 'undefined' && module.exports) {
    module.exports = questions;
}
