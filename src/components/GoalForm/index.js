import React from 'react';

const content = {
    submit: "Submit",
    name: {
        placeHolder: "Name",
        label: "Give your saving goal a meaningful name",
        validation: "Alphanumeric characters only"
    },
    amount: {
        placeHolder: "Amount",
        label: "",
        validation: "Numbers only, no decimal places"
    }
}

/**
 * HTML5 validation:
 * min max (max is MAX_SAFE_INTEGER)
 * pattern match to only allow whole numbers, no decimals
 */
class GoalForm extends React.Component{
    render() {
        return (
            <div>
                <div className="row" style={{ paddingTop: '50px' }}>
                    <div className="ui two column centered grid">
                        <div className="column">
                            <div className="ui divider"></div>
                            <h2 class="ui header">
                               Create a new goal
                            </h2>
                            <form className="ui fluid form" onSubmit={(event) => { this.props.onGoalSubmit(event);}}>
                                <div className="field">
                                    <input type="text" pattern="[A-Za-z0-9]+" title={content.name.validation} name="name" placeholder={content.name.placeHolder} required/>
                                    <div className="ui pointing label">
                                        {content.name.label}
                                    </div>
                                </div>                                
                                <div className="ui right labeled input">
                                    <label for="amount" className="ui label">£</label>
                                    <input type="number" min="1" max={Number.MAX_SAFE_INTEGER} pattern="[1-9]+\d" title={content.amount.validation} name="amount" placeholder="Amount" required id="amount"/>
                                    <div className="ui basic label">.00</div>
                                </div>
                                <div className="ui divider"></div>
                                <div className="field">
                                    <button type="submit" className="large teal ui button">{content.submit}</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default GoalForm;