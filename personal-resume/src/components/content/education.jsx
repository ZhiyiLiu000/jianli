import React from "react";
import {connect} from "react-redux";
import { Card } from 'antd';
import { Timeline, Icon } from 'antd';

class Education extends React.Component {
    render() {
        const {person} = this.props;
        return (
            <div className="padd-box clear-mrg">
                <section className="section">
                    <div className="row">
                        <div className="col-sm-12 clear-mrg text-box">
                            <h2 className="title-lg text-upper">Education</h2>
                        </div>
                    </div>
                </section>
                <section className="section">
                    <div className="row">
                        <div className="col-sm-12">
                            <Card cover={<img alt={person.school} src="img/uploads/school.jpg"/>}>
                                <Timeline mode="alternate" pending>
                                    <Timeline.Item dot={<Icon type="clock-circle-o" style={{ fontSize: '16px' }} />} position={"right"}>
                                        {person.school} 本科 2012.9-2016.6
                                    </Timeline.Item>
                                    <Timeline.Item position={"left"} dot={<Icon type="read" style={{ fontSize: '16px' }} />}>
                                        <p><b>学院:</b> {person.institute}</p>
                                        <p><b>专业:</b> {person.preMajor}</p>
                                        <p><b>课程:</b> {person.bachelorLesson}</p>
                                        <p><b>荣誉:</b> 2013-2014学年学习优秀奖</p>
                                        <div>
                                            <b>排名:</b>
                                            <div style={{display:"inline-block",width:"80%",margin:"0 0.45em"}} className="progress-line ace-animate" role="progressbar"
                                                 aria-valuenow={person.bachelorRank.degree*100} aria-valuemin="0" aria-valuemax="100">
                                                <div className="progress-bar" data-text={person.bachelorRank.text}
                                                     data-value={person.bachelorRank.degree}></div>
                                            </div>
                                        </div>
                                    </Timeline.Item>
                                    <Timeline.Item dot={<Icon type="clock-circle-o" style={{ fontSize: '16px' }} />} position={"right"}>{person.school} 硕士研究生 2017.9-2020.4</Timeline.Item>
                                    <Timeline.Item position={"left"} color={"green"} dot={<Icon type="read" style={{ fontSize: '16px' }} />}>
                                        <p><b>学院:</b> {person.institute}</p>
                                        <p><b>专业:</b> {person.major}</p>
                                        <p><b>课程:</b> {person.masterLesson}</p>
                                        <p><b>方向:</b> {person.researchDirection}</p>
                                        <p><b>发表论文:</b> 《基于改进DeepLabv3+的无人车夜间红外图像语义分割》</p>
                                        <p><b>毕业论文:</b> 《无人车场景的图像语义分割与语义SLAM研究》</p>
                                        <p><b>竞赛获奖:</b> “兆易创新杯”第十三届中国研究生电子设计竞赛“上海赛区三等奖”</p>
                                        <div>
                                            <b>成绩排名:</b>
                                            <div style={{display:"inline-block",width:"72%",margin:"0 0.45em"}} className="progress-line ace-animate" role="progressbar"
                                                 aria-valuenow={person.masterRank.degree*100} aria-valuemin="0" aria-valuemax="100">
                                                <div className="progress-bar" data-text={person.masterRank.text}
                                                     data-value={person.masterRank.degree}></div>
                                            </div>
                                        </div>
                                    </Timeline.Item>
                                </Timeline>
                            </Card>
                        </div>
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

export default connect(mapStateToProps, null)(Education);