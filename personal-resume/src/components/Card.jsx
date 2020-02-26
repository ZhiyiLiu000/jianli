import React from 'react';
import {connect} from "react-redux";

class Card extends React.Component {
    render() {
        const {person} = this.props;
        return (
            <article id="ace-card" className="ace-card bg-primary">
                <div className="ace-card-inner text-center">
                    <img className="avatar avatar-195" src="img/uploads/avatar/avatar-195x195.jpg" width="195"
                         height="195" alt=""/>
                    <h1>{person.name}</h1>
                    <p className="text-muted">{person.school} | {person.degree}</p>

                </div>
                <footer className="ace-card-footer">
                    <ul className="ace-social clear-list">
                        {
                            person.contact.map((item, index)=>{
                                if(item.href){
                                    return (
                                        <li key={index}>
                                            <a href={item.href} title={item.title} target="_blank" rel="noopener noreferrer">
                                                <span className={"ace-icon ace-icon-"+item.icon}></span>
                                            </a>
                                        </li>
                                    )
                                }else{
                                    return (
                                        <li key={index}>
                                            <a href="#" title={item.title} onClick={e=>e.preventDefault()}>
                                                <span className={"ace-icon ace-icon-"+item.icon}></span>
                                            </a>
                                        </li>
                                    )
                                }
                            })
                        }
                    </ul>
                </footer>
            </article>
        )
    }
}

const mapStateToProps = (state)=>{
    return {
        person: state.person
    }
};

export default connect(mapStateToProps, null)(Card);

