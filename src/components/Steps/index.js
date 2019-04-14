import React from 'react'
import { connect } from 'react-redux';

const content = {
    stepOne: {
        title: "Work out your savings",
        description: "Round up your weekly transactions"
    },
    stepTwo: {
        title: "Choose an account",
        description: "Choose an account with a savings goal or create one"
    },
    stepThree: {
        title: "Pick savings goal",
        description: "Choose a savings goal to save against"
    },
    stepFour: {
        title: "Confirm Transasction",
        description: "Review and confirm transaction details"
    }
}
class Steps extends React.Component {
    render(){
        return (
            <div className="ui ordered steps">
                <div className="completed step">
                    <div className="content">
                    <div className="title">{content.stepOne.title}</div>
                    <div className="description">{content.stepOne.description}</div>
                    </div>
                </div>
                <div className="active step">
                    <div className="content">
                    <div className="title">{content.stepTwo.title}</div>
                    <div className="description">{content.stepTwo.description}</div>
                    </div>
                </div>
                <div className="disabled step">
                    <div className="content">
                    <div className="title">{content.stepThree.title}</div>
                    <div className="description">{content.stepThree.description}</div>
                    </div>
                </div>
                <div className="disabled step">
                    <div className="content">
                    <div className="title">{content.stepFour.title}</div>
                    <div className="description">{content.stepFour.description}</div>
                    </div>
                </div>
            </div>
        );        
    }
}

const mapStateToProps = (state) => {
    return state;
}

export default connect(mapStateToProps)(Steps);
