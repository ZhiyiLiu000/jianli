import React from 'react';
import {connect} from "react-redux";
import {Link, Switch, Route} from 'react-router-dom';
import About from "./content/About";
import Education from "./content/education";
import Experience from "./content/experience";
// import Portfolio from "./content/Portfolio";

class Contents extends React.Component {
    render() {
        const {person} = this.props;
        return (
            <div id="ace-content" className="ace-container-shift">
                <div className="ace-container">
                    <div id="ace-nav-wrap" className="hidden-sm hidden-xs">
                        <div className="ace-nav-cont">
                            <div id="ace-nav-scroll">
                                <nav id="ace-nav" className="ace-nav">
                                    <ul className="clear-list">
                                        {
                                            person.displayItem.map((item, index)=>{
                                                if(item.title === "about"){
                                                    return (
                                                        <li key={index}>
                                                            <Link to={item.url} data-tooltip={item.title.slice(0,1).toUpperCase()+item.title.slice(1)}>
                                                                <img className="avatar avatar-42" src="img/uploads/avatar/avatar-42x42.jpg" alt=""/>
                                                            </Link>
                                                        </li>
                                                    )
                                                }else{
                                                    return (
                                                        <li key={index}>
                                                            <Link to={item.url} data-tooltip={item.title.slice(0,1).toUpperCase()+item.title.slice(1)}>
                                                                <span className={"ace-icon ace-icon-"+item.icon}></span>
                                                            </Link>
                                                        </li>
                                                    )
                                                }
                                            })
                                        }
                                    </ul>
                                </nav>
                            </div>
                            <div className="ace-nav-btm"></div>
                        </div>
                    </div>
                    <div className="ace-paper-stock">
                        <main className="ace-paper clearfix">
                            <div className="ace-paper-cont clear-mrg">
                                <Switch>
                                    <Route path="/" exact>
                                        <About />
                                    </Route>
                                    <Route path="/education">
                                        <Education />
                                    </Route>
                                    <Route path="/experience">
                                        <Experience />
                                    </Route>
                                    {/*<Route path="/portfolio">*/}
                                    {/*    <Portfolio />*/}
                                    {/*</Route>*/}
                                </Switch>
                            </div>
                        </main>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state)=>{
    return {
        person: state.person
    }
};

export default connect(mapStateToProps, null)(Contents);
