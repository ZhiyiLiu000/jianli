const defaultState = {
    person: {
        name: "刘致驿",
        ename: "Liu Zhiyi",
        school: "东华大学",
        degree: "硕士研究生",
        IDCard: "430302199408303276",
        gender: "男",
        birthTime: "1994/8/30",
        phone: "13162757916",
        email: "13162757916@163.com",
        qq: "464918390",
        weChat: "liuzhiyi_7916,13162757916",
        institute: "信息科学与技术学院",
        major: "控制科学与工程",
        preMajor: "自动化",
        bachelorLesson: "自动控制原理、数据结构",
        masterLesson: "图像处理、机器学习、模式识别",
        bachelorRank: {degree: "0.75", text: "前30%"},
        masterRank: {degree: "0.75", text: "前30%"},
        researchDirection: "图像处理与模式识别",
        lastCompany: "百姓网",
        lastJob: "web前端实习生",
        graduateTime: "2020/4",
        // 展示的类目
        displayItem: [
            {title: 'about', url: '/', icon: ''},
            {title: 'education', url: '/education', icon: 'graduation-cap'},
            {title: 'experience', url: '/experience', icon: 'briefcase'}
            // {title: 'portfolio', url: '/portfolio', icon: 'photo'}
        ],
        // 联系方式----Card展示
        contact: [
            {icon: "phone", href: "tel:13162757916", title: "13162757916"},
            {icon: "envelope", href: "mailto:13162757916@163.com", title: "13162757916@163.com"},
            {icon: "qq", href: "", title: "464918390"},
            {icon: "wechat", href: "", title: "liuzhiyi_7916,13162757916"},
            {icon: "pencil-square", href: "https://blog.csdn.net/niuniu924", title: "博客"},
            {icon: "github", href: "https://github.com/ZhiyiLiu000", title: "github"}
        ],
        // 个人技能
        languageSkills: [
            {title: "Javascript", degree: 0.8},
            {title: "Html", degree: 0.7},
            {title: "CSS", degree: 0.7}
        ],
        frameworkSkills: [
            {title: "React", degree: 0.8},
            {title: "JQuery", degree: 0.8},
            {title: "Bootstrap", degree: 0.7},
            {title: "NodeJS", degree: 0.6}
        ],
        // 兴趣爱好
        interests: [
            {title: "唱歌", icon: "music"},
            {title: "游戏", icon: "gamepad"},
            {title: "跑步", icon: "paw"}
        ],
        // 荣誉证书
        awards: [
            {title: "中国研究生电子设计竞赛", img: "design_contest.jpg", text: "“兆易创新杯”第十三届中国研究生电子设计竞赛“上海赛区三等奖”"},
            {title: "应用光学期刊", img: "journal.jpg", text: "发表论文：基于改进DeepLabv3+的无人车夜间红外图像语义分割. 2020 Vol. 41 (1): 180-185"},
            {title: "学习优秀奖", img: "learn.jpg", text: "2013-2014学年学习优秀奖"},
            {title: "上海音协考级", img: "music.jpg", text: "声乐（通俗）七级"}
        ]
    }
};

export default (state = defaultState, action)=>{
    console.log(state, action);
    return state;
}