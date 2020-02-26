import React from "react";
import { Collapse, Descriptions, Timeline, Icon, Card } from 'antd';
const { Panel } = Collapse;

class Experience extends React.Component {
    render() {
        return (
            <div className="padd-box clear-mrg">
                <section className="section">
                    <div className="row">
                        <div className="col-sm-12 clear-mrg text-box">
                            <h2 className="title-lg text-upper">Experience</h2>
                        </div>
                    </div>
                </section>
                <section className="section brd-btm">
                    <h2 className="title-thin text-muted">课题项目</h2>
                    <Collapse>
                        <Panel header="基于改进DeepLabv3+的无人车夜间红外图像语义分割" key="1">
                            <div className="row">
                                <div className="col-sm-4 clear-mrg">
                                    <img src="img/uploads/topic/keti1.png" alt="原图" style={{display:"block", width:"100%"}}/>
                                </div>
                                <div className="col-sm-8 clear-mrg">
                                    <Descriptions column={2} layout={"vertical"} size={"middle"} bordered={true}>
                                        <Descriptions.Item label="时间">2019.4-2019.7</Descriptions.Item>
                                        <Descriptions.Item label="目标">对夜视红外图像实现语义分割</Descriptions.Item>
                                        <Descriptions.Item label="技术细节" span={2}>
                                            <ul style={{margin:0}}>
                                                <li>利用夜视红外图像作为数据集，采用 LabelMe 工具标注</li>
                                                <li>根据无人车场景和红外图像的特点，改进DeepLabv3+网络</li>
                                                <li>引入DenseASPP结构，Decode模块加入多层低级特征图</li>
                                            </ul>
                                        </Descriptions.Item>
                                        <Descriptions.Item label="职责">负责数据处理、模型训练（tensorflow）</Descriptions.Item>
                                    </Descriptions>
                                </div>
                            </div>
                        </Panel>
                        <Panel header="基于信息论的语义SLAM系统" key="2">
                            <div className="row">
                                <div className="col-sm-4 clear-mrg">
                                    <img src="img/uploads/topic/keti2.png" alt="原图" style={{display:"block", width:"100%"}}/>
                                </div>
                                <div className="col-sm-8 clear-mrg">
                                    <Descriptions column={2} layout={"vertical"} size={"middle"} bordered={true}>
                                        <Descriptions.Item label="时间">2019.8-2019.10</Descriptions.Item>
                                        <Descriptions.Item label="目标">改进SLAM系统特征选择方式</Descriptions.Item>
                                        <Descriptions.Item label="技术细节" span={2}>
                                            <ul style={{margin:0}}>
                                                <li>利用图像语义信息保证SLAM系统特征的静态性和稳定性</li>
                                                <li>利用信息论方法减少系统选取的冗余特征点</li>
                                                <li>ORB-SLAM2系统加入语义分割网络提取的图像语义信息</li>
                                            </ul>
                                        </Descriptions.Item>
                                        <Descriptions.Item label="职责">负责模型训练（tensorflow）、代码编写（c++）</Descriptions.Item>
                                    </Descriptions>
                                </div>
                            </div>
                        </Panel>
                    </Collapse>
                </section>
                <section className="section">
                    <h2 className="title-thin text-muted">工作 & 实习经历</h2>
                    <Timeline pending>
                        <Timeline.Item dot={<Icon type="desktop" style={{ fontSize: '16px' }} />} color="green">
                            <h4 className="text-green">2016.7-2017.4 万达信息股份有限公司 web前端工程师</h4>
                            <ul>
                                <li>负责基于bootstrap框架的页面设计开发以及demo页面的制作</li>
                                <li>参与长宁教育数据中心、金山综合服务平台等项目的开发</li>
                                <li>为区教育局提供线上服务，包括学校、师生、成绩统计等功能</li>
                            </ul>
                        </Timeline.Item>
                        <Timeline.Item dot={<Icon type="desktop" style={{ fontSize: '16px' }} />}>
                            <h4 className="text-blue">2019.4-2019.7 上海眼控科技股份有限公司 算法实习</h4>
                            <ul>
                                <li>
                                    <p>负责算法测试与维护，SSD 模型训练，车牌螺丝功能开发</p>
                                    <Card title="车牌螺丝功能" style={{ width: 400 }} size={"small"}>
                                        <ul className="ul-circle" style={{fontSize: "12px"}}>
                                            <li>车检根据拍摄的车牌图片识别车牌螺丝个数，2或4个为合格</li>
                                            <li>利用车牌识别模型定位车牌->训练SSD实现螺丝检测识别</li>
                                            <li>负责模型训练（caffe）、工程代码编写与算法维护（c++）</li>
                                        </ul>
                                    </Card>
                                </li>
                            </ul>
                        </Timeline.Item>
                        <Timeline.Item dot={<Icon type="desktop" style={{ fontSize: '16px' }} />} color="red">
                            <h4 className="text-red">2019.11-2020.1 百姓网 web前端实习</h4>
                            <ul>
                                <li>日常bug处理和小需求的开发</li>
                                <li>涉及技术jade、stylus、ajax、nodejs、git</li>
                                <li>百姓网微信小程序下线谷粒产品</li>
                                <li>牧野后台管理系统更改接口地址</li>
                                <li>收录查询：为用户提供帖子发布的收录查询前端交互入口，包括前端界面和打点方法</li>
                            </ul>
                        </Timeline.Item>
                    </Timeline>
                </section>
            </div>
        )
    }
}

export default Experience;