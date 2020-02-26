import React from "react";
import {connect} from "react-redux";

class About extends React.Component {
    render() {
        const {person} = this.props;
        return (
            <div className="padd-box clear-mrg">
                <section className="section brd-btm">
                    <div className="row">
                        <div className="col-sm-12 clear-mrg text-box">
                            <h2 className="title-lg text-upper">About Me</h2>
                            <p>
                                <b>Helo, I’m {person.ename}!</b><br/>
                                我为人友善、真诚，做事细致专注，富有处女座色彩~
                                工作中有很强的责任心，学习和适应能力较强，也享受与人合作、一起努力的过程~
                                热爱生活，爱运动，最大的爱好是唱歌~
                                作为本硕皆为计算机相关专业，努力学习前端知识的工科生，对web前端方向有一定的了解，想要以此为基础，加入互联网行业。
                            </p>
                            <p className="text-right">
                                <img src="img/uploads/qianming.png" alt="签名" width="100"/>
                            </p>
                        </div>
                    </div>
                </section>

                <section className="section brd-btm">
                    <h2 className="title-thin text-muted">基本信息</h2>
                    <div className="row">
                        <div className="col-sm-6 clear-mrg">
                            <dl className="dl-horizontal clear-mrg">
                                <dt className="text-upper">姓名</dt>
                                <dd>{person.name}</dd>
                                <dt className="text-upper">证件号码</dt>
                                <dd>{person.IDCard}</dd>
                                <dt className="text-upper">性别</dt>
                                <dd>{person.gender}</dd>
                                <dt className="text-upper">出生日期</dt>
                                <dd>{person.birthTime}</dd>
                                <dt className="text-upper">手机</dt>
                                <dd>
                                    <a href={"tel:"+person.phone}>{person.phone}</a>
                                </dd>
                                <dt className="text-upper">电子邮箱</dt>
                                <dd>
                                    <a href={"mailto:"+person.email}>{person.email}</a>
                                </dd>
                                <dt className="text-upper">QQ</dt>
                                <dd>{person.qq}</dd>
                                <dt className="text-upper">微信</dt>
                                <dd>{person.weChat}</dd>
                            </dl>
                        </div>
                        <div className="col-sm-6 clear-mrg">
                            <dl className="dl-horizontal clear-mrg">
                                <dt className="text-upper">最高学历</dt>
                                <dd>{person.degree}</dd>
                                <dt className="text-upper">学校</dt>
                                <dd>{person.school}</dd>
                                <dt className="text-upper">学院</dt>
                                <dd>{person.institute}</dd>
                                <dt className="text-upper">专业</dt>
                                <dd>{person.major}</dd>
                                <dt className="text-upper">研究方向</dt>
                                <dd>{person.researchDirection}</dd>
                                <dt className="text-upper">毕业时间</dt>
                                <dd>{person.graduateTime}</dd>
                                <dt className="text-upper">最近实习</dt>
                                <dd>{person.lastCompany}</dd>
                                <dt className="text-upper">职位</dt>
                                <dd>{person.lastJob}</dd>
                            </dl>
                        </div>
                    </div>
                </section>

                <section className="section brd-btm">
                    <div className="row">
                        <div className="col-sm-6 clear-mrg">
                            <h2 className="title-thin text-muted">专业技能</h2>
                            <div className="row">
                                {
                                    person.languageSkills.map((item, index)=>(
                                        <div className="col-xs-4" key={index}>
                                            <div className="progress-chart ace-animate"
                                                 role="progressbar" aria-valuenow={item.degree*100} aria-valuemin="0"
                                                 aria-valuemax="100">
                                                <div className="progress-bar" data-text={item.degree*100+"%"}
                                                     data-value={item.degree}></div>
                                                <strong className="progress-title">{item.title}</strong>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                        <div className="col-sm-6 clear-mrg">
                            {
                                person.frameworkSkills.map((item, index)=>(
                                    <div key={index} className="progress-line ace-animate" role="progressbar"
                                         aria-valuenow={item.degree*100} aria-valuemin="0" aria-valuemax="100">
                                        <strong className="progress-title">{item.title}</strong>
                                        <div className="progress-bar" data-text={item.degree*100+"%"}
                                             data-value={item.degree}></div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </section>

                <section className="section brd-btm">
                    <div className="row">
                        <div className="col-sm-12 clear-mrg">
                            <h2 className="title-thin text-muted">兴趣爱好</h2>
                            <ul className="icon-list icon-list-col3 clearfix">
                                {
                                    person.interests.map((item, index)=>(
                                        <li key={index}>
                                            <span className={"ace-icon ace-icon-"+item.icon}></span>
                                            {item.title}
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>
                </section>

                <section className="section">
                    <h2 className="title-thin text-muted">获得奖励or证书</h2>
                    <div className="row">
                        {
                            person.awards.map((item, index)=>(
                                <div className="col-sm-6 clear-mrg" key={index}>
                                    <div className="award-box">
                                        <figure className="award-img">
                                            <img src={"img/uploads/awards/"+item.img} alt={item.title}/>
                                        </figure>
                                        <h3 className="award-title">{item.title}</h3>
                                        <div className="award-text text-muted clear-mrg">
                                            <p>{item.text}</p>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </section>
            </div>
        )
    }
}

const mapStateToProps = (state)=>{
    return {
        person: state.person
    }
};

export default connect(mapStateToProps, null)(About);