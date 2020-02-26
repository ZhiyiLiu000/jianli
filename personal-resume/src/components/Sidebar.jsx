import React from 'react';
import {connect} from "react-redux";
import {Link} from "react-router-dom";

class Sidebar extends React.Component {
    render() {
        const {person} = this.props;
        return (
             <div id="ace-sidebar">
                <button id="ace-sidebar-close" className="btn btn-icon btn-light btn-shade">
                    <span className="ace-icon ace-icon-close"></span>
                </button>
                <div id="ace-sidebar-inner">
                    <nav id="ace-main-nav-sm" className="visible-xs visible-sm text-center">
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
                    <article className="ace-card bg-primary">
                        <div className="ace-card-inner text-center">
                            <img className="avatar avatar-195" src="img/uploads/avatar/avatar-195x195.jpg"
                                 width="195" height="195" alt="#" onClick={e=>e.preventDefault()}/>
                            <h2>{person.name}</h2>
                            <p className="text-muted">{person.school} | {person.degree}</p>
                            <ul className="ace-social clear-list">
                                {
                                    person.contact.map((item, index)=>{
                                        if(item.href){
                                            return (
                                                <li key={index} style={{margin: "5px 8px"}}>
                                                    <a href={item.href} title={item.title} target="_blank" rel="noopener noreferrer">
                                                        <span className={"ace-icon ace-icon-"+item.icon}></span>
                                                    </a>
                                                </li>
                                            )
                                        }else{
                                            return (
                                                <li key={index} style={{margin: "5px 8px"}}>
                                                    <a href="#" title={item.title} onClick={e=>e.preventDefault()}>
                                                        <span className={"ace-icon ace-icon-"+item.icon}></span>
                                                    </a>
                                                </li>
                                            )
                                        }
                                    })
                                }
                            </ul>
                        </div>
                    </article>
                    <aside className="widget-area">
                        <section className="widget widget_posts_entries">
                            <h2 className="widget-title">LIFE</h2>
                            <ul>
                                <li>
                                    <span className="post-image">
                                        <img src="img/uploads/life/dog.jpg"
                                             alt="DOG" width="70" height="70"/>
                                    </span>
                                    <div className="post-content">
                                        <h3>
                                            <strong>
                                                MY DOG
                                                "白粒圆"
                                            </strong>
                                        </h3>
                                    </div>
                                    <div className="post-category-comment">
                                        <a href="#" className="post-category" onClick={e=>e.preventDefault()}>Work</a>
                                        <a href="#" className="post-comments" onClick={e=>e.preventDefault()}>256 comments</a>
                                    </div>
                                </li>
                                <li>
                                    <a className="post-image" href="#" onClick={e=>e.preventDefault()}>
                                        <img src="img/uploads/life/me1.jpg"
                                             alt="ME" width="70" height="70"/>
                                    </a>
                                    <div className="post-content">
                                        <h3>
                                            <strong>
                                                ME YOUNG
                                            </strong>
                                        </h3>
                                    </div>
                                    <div className="post-category-comment">
                                        <a href="#" onClick={e=>e.preventDefault()} className="post-category">Work</a>
                                        <a href="#" onClick={e=>e.preventDefault()} className="post-comments">256 comments</a>
                                    </div>
                                </li>
                                <li>
                                    <a className="post-image" href="#" onClick={e=>e.preventDefault()}>
                                        <img src="img/uploads/life/me2.jpg"
                                             alt="ME" width="70" height="70"/>
                                    </a>
                                    <div className="post-content">
                                        <h3>
                                            <strong>
                                                ME NOW
                                            </strong>
                                        </h3>
                                    </div>
                                    <div className="post-category-comment">
                                        <a href="#" className="post-category" onClick={e=>e.preventDefault()}>Work</a>
                                        <a href="#" className="post-comments" onClick={e=>e.preventDefault()}>256 comments</a>
                                    </div>
                                </li>
                            </ul>
                        </section>
                    </aside>
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

export default connect(mapStateToProps, null)(Sidebar);

