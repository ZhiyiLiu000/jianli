import React from "react";
import {connect} from "react-redux";

class Portfolio extends React.Component {
    render() {
        const {person} = this.props;
        return (
            <div className="padd-box clear-mrg">
                <section className="section brd-btm">
                    <div className="row">
                        <div className="col-sm-12 clear-mrg text-box">
                            <h2 className="title-lg text-upper">Portfolio</h2>
                        </div>
                    </div>
                </section>
                <section className="section brd-btm">
                    <h2 className="title-thin text-muted">简历页面</h2>
                    <div className="row">
                        <div className="col-sm-12 clear-mrg">

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

export default connect(mapStateToProps, null)(Portfolio);