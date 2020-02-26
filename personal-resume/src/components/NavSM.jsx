import React from 'react';
import {connect} from 'react-redux';
import {Link} from "react-router-dom";

class NavSM extends React.Component {
    render() {
        const {person} = this.props;
        return (
            <nav id="ace-nav-sm" className="ace-nav hidden-lg hidden-md">
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
        )
    }
}

const mapStateToProps = (state)=>{
    return {
        person: state.person
    }
};

export default connect(mapStateToProps, null)(NavSM);
