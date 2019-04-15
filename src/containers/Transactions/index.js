import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import moment from 'moment';
import _ from 'underscore';

import { roundUpAmountCalculated } from '../../actions';
import Details from '../../components/Details';
import cardImage from '../../assets/images/weekly.png';
import content from '../../locale/default';
import Loading from '../../components/Loading';
import starling from '../../serviceprovider/starlingbank';
import classNames from 'classnames';

const transactionsText = content.transactionsText;

class Transactions extends Component {

    state = {
        loading: true,
        transactions: []
    }

    constructor(props){
        super(props);
        this.state = {
            loading: true,
            transactions: [],
            from: moment().startOf('week').format('YYYY-MM-DD'),
            to: moment().format('YYYY-MM-DD')
        }
    }

    /**
     * grab amount spent, turn it into a positive number,
     * per reduce call:
     * round up
     * round up - amount spent
     * Ensure type correction
     *
     * save a label version as localestring (would need to pass in the second option using i18)
     * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toLocaleString#Browser_Compatibility
     */
    calculateSavings = () => {
        const savings = this.state.transactions.reduce((pre, item) => {
            let spentAmount = Math.abs(item.amount);
            let roundedUp = Math.ceil(spentAmount);
            return pre + (roundedUp - spentAmount)
        }, 0);

        const savingsLabel =  (savings).toLocaleString("en-GB", {style: "currency", currency: "GBP", minimumFractionDigits: 2})
        this.setState({savings, savingsLabel});
        this.props.roundUpAmountCalculated({ amount: savings, label: savingsLabel });
    }

    /**
     * When we get a response from the service, we filter the array so that we are only dealing with outbound transactions
     * Could wrap the get request up a bit more to handle status etc.
     */
    componentDidMount() {
        starling().transactions(this.state.from, this.state.to)
            .then((response) => {
                if(response.status === 200)
                {
                    //only outbound transactions
                    this.setState({
                        transactions: _.filter(response.data._embedded.transactions, transaction => { return transaction.direction === "OUTBOUND" }),
                        loading: false
                    });
                    this.calculateSavings();
                }
                else
                {
                    this.setState({
                        errors: true,
                        loading: false
                    });
                }
            })
            .catch(() => {
                this.setState({
                    errors: true,
                    loading: false
                });
            });
    }

    getDetails = () => {
        let content = transactionsText.contentinitial;
        if(this.state.errors)
        {
            content = transactionsText.contentFailed;
        }
        if(!this.state.loading && !this.state.errors)
        {
            if(this.state.transactions.length > 0)
            {
                let singleOrPlural = (this.state.transactions.length > 1) ? 'transactions' : 'transaction'
                content = `We've found ${this.state.transactions.length} ${singleOrPlural} this week`;
            }
            else
            {
                content = "There were no transactions that we could find this week";
            }
        }
        return <Details cardImage={cardImage} title={transactionsText.title} content={content} />;
    }

    getSegmentContent = () => {
        if (this.state.loading)
        {
            return <Loading/>
        } else if (this.state.errors) {
            return ""
        }
        else
        {
            const buttonClass = classNames({
                'ui': true,
                'massive':true,
                'teal': true,
                'button': true,
                'disabled': (this.state.savings === 0)
            });
            return (
                <div>
                    <p>{ (this.state.savings > 0) ?  transactionsText.savingsSummary : transactionsText.saveNothing }</p>
                <div className="ui statistic">
                    <div className="value">
                        {this.state.savingsLabel}
                    </div>
                </div>
                <div>
                    <Link to="/accounts" className={buttonClass}>{transactionsText.roundUpButtonLabel}</Link>
                </div>
            </div>
            );
        }
    }

    render() {
        return (
            <div>
                <div className="row" style={{ paddingTop: '50px' }}>
                    {this.getDetails()}
                </div>
                <div className="row" style={{ paddingTop: '50px' }}>
                    <div className="ui two column centered grid">
                        <div className="column">
                            <div className="ui center aligned">
                                <div className="ui" style={{minHeight: '250px', textAlign: 'center', padding: '50px'}}>
                                    {this.getSegmentContent()}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
   return state;
}

export default connect(mapStateToProps, { roundUpAmountCalculated })(Transactions);