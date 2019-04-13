import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import _ from 'underscore';

import Details from '../../components/Details/Details';
import cardImage from '../../assets/images/weekly.png';
import content from '../../locale/default';
import Loading from '../../components/Loading/loading';
import starling from '../../serviceprovider/starlingbank/interface';

const transactionsText = content.transactionsText;

export default class Accounts extends Component {

    state = {
        loading: true,
        transactions: [] //redux this thing
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
    }

    async componentDidMount() {      
        const response = await starling().transactions(this.state.from, this.state.to);

        if(response.status === 200)
        {
            //only outbound transactions please
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
    }

    getDetails = () => {
        
        let content = transactionsText.contentinitial;
        if(this.state.errors)
        {
            content = transactionsText.contentFailed;
        }
        if(!this.state.loading)
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
            return (
                <div>
                    <p>If you round up all your transactions, you could make a tidy saving of</p>
                <div className="ui statistic">
                    <div className="value">
                        {this.state.savingsLabel}
                    </div>
                </div>
                <div>
                    <Link to="/accounts" className="massive teal ui button">Round up my transactions</Link>
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