import React from 'react';
import {connect} from 'react-redux';
import {Link} from "react-router-dom";

class Header extends React.Component {
    render() {
        const {person} = this.props;
        return (
            <header id="ace-header" className="ace-container-shift ace-logo-in ace-head-boxed ace-nav-right">
                <div className="ace-head-inner">
                    <div className="ace-head-container ace-container">
                        <div className="ace-head-row">
                            <div id="ace-head-col1" className="ace-head-col text-left">
                                <Link id="ace-logo" className="ace-logo" to="/">
                                    <img src="img/uploads/brand/logo.svg" alt="ace resume"/><span>{person.ename}</span>
                                </Link>
                            </div>
                            <div id="ace-head-col2" className="ace-head-col text-right">
                                <div className="ace-nav-container ace-container hidden-sm hidden-xs">
                                    <nav id="ace-main-nav">
                                        <ul className="clear-list">
                                            {
                                                person.displayItem.map((item, index)=>(
                                                    <li key={index}><Link to={item.url}>{item.title}</Link></li>
                                                ))
                                            }
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                            <div id="ace-head-col3" className="ace-head-col text-right">
                                <button id="ace-sidebar-btn" className="btn btn-icon btn-light btn-shade">
                                    <span className="ace-icon ace-icon-photo"></span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        )
    }
}

const mapStateToProps = (state)=>{
    return {
        person: state.person
    }
};

export default connect(mapStateToProps, null)(Header);


