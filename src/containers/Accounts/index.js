import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import _ from 'underscore';

import { goalSelected } from '../../actions';
import GoalForm from '../../components/GoalForm';
import Details from '../../components/Details';
import List from '../../components/List';
import starling from '../../serviceprovider/starlingbank';
import cardImage from '../../assets/images/accounts.svg';
import loadingImage from '../../assets/images/loading.svg';
import errorImage from '../../assets/images/warning.svg';
import content from '../../locale/default';


const accountContent = content.accountContent;

/**
 * Load user accounts so that they can pick one to put savings into
 */
class Accounts extends Component {
  state = {
    loading: true,
    account:null,
    errors: false,
  }

  renderDetails = () => {
    if(!this.props.saving)
    {
      return <Redirect to="/"/>
    }
    else
    {
      const detailContent = {
        imgSrc: loadingImage,
        title: accountContent.loadingTitle,
        content: accountContent.loadingContent
      };

      if(this.state.errors)
      {
        detailContent.imgSrc = errorImage;
        detailContent.title = accountContent.errorTitle;
        detailContent.content = accountContent.errorContent;
      }
      else if(!this.state.loading)
      {
        detailContent.imgSrc = cardImage;
        detailContent.title = accountContent.loadedTitle;
        detailContent.content = accountContent.loadedContent;
      }

      return <Details cardImage={detailContent.imgSrc} title={detailContent.title} content={detailContent.content} />
    }
  }

  getGoals = () =>{
    starling().accounts()
      .then((response) => {
        if(response.status === 200)
        {
          //accounts comes back as an array indicating more than one, however v1 comes back as an object
          starling().savingGoals(response.data.accounts[0].accountUid)
            .then((goalResponse) =>{

                switch(goalResponse.status)
                {
                  case 200:
                  case 404:
                  {
                    this.setState({
                      loading: false,
                      account:  response.data.accounts[0],
                      savingGoals: goalResponse.data.savingsGoalList
                    });
                    break;
                  }
                  default:
                  {
                    this.setState({
                      errors: true,
                      loading: false
                    });
                    break
                  }
                }

            })
            .catch( err => {
              if(err.response.status === 404)
              {
                this.setState({
                  loading: false,
                  account:  response.data.accounts[0],
                  savingGoals: []
                });
              }
              else
              {
                this.setState({loading: false, errors: true})
              }
            });
        }
        else
        {
          this.setState({
            errors: true,
            loading: false
          });
        }

      })
      .catch( () => {
            this.setState({
              errors: true,
              loading: false
          });
        }
      );
  }

  componentDidMount() {
    this.getGoals();
  }

  renderAccountsArea = () => {
    if(!this.state.loading && !this.state.errors && !_.isEmpty(this.state.savingGoals))
    {
      const percentCompleteJSX = (percent) => {
        return(
          <div className="ui indicating progress">
            <progress value={percent} max="100" className="bar"></progress>
            <div className="label">Funded</div>
          </div>
        );
      }
      let savingViewData = this.state.savingGoals.map(goal => {
        return {
          savingsGoalUid: goal.savingsGoalUid,
          title: goal.name,
          content: percentCompleteJSX(goal.savedPercentage)
        }
      })
      return (
        <div className="ui two column centered grid">
          <div className="column">
                <List items={savingViewData} onListItemClicked={(selectedData)=> { this.props.goalSelected(selectedData)}} />
          </div>
        </div>
      );
    }
    if(!this.state.loading && _.isEmpty(this.state.savingGoals))
    {
      return (
        <div className="row" style={{ paddingTop: '50px' }}>
            <div className="ui two column centered grid">
                <div className="column">
                  <div className="ui icon message">
                    <i className="inbox icon"></i>
                    <div className="content">
                      <div className="header">
                        {accountContent.noSavingGoal}
                      </div>
                      <p>{accountContent.noSavingGoalSummary}</p>
                    </div>
                  </div>
                </div>
            </div>
        </div>
      );
    }
    return ""
  }

  afterGoalSubmit = (newGoal) => {
    if(!_.isEmpty(newGoal))
    {
      starling().createGoal(this.state.account.accountUid, newGoal)
        .then(() =>{ this.getGoals(); this.loadCreateForm();})
        .catch(this.loadCreateForm(true));
    }
  }

  loadCreateForm = (errors) => {
    if(errors)
    {
      return (
        <div>
          <div className="ui two column centered grid">
            <div className="column">
              <div className="ui negative message">
                <div className="header">
                  Failed to save goal
                </div>
                <p>There was a problem saving your goal, please try again.</p>
              </div>
            </div>
          </div>
          <GoalForm afterGoalSubmit={this.afterGoalSubmit}/>
        </div>
      );
    }
    else
    {
      return  <GoalForm afterGoalSubmit={this.afterGoalSubmit}/>
    }

  }

  render() {
    return (
      <div>
        {this.renderDetails()}
        {this.renderAccountsArea()}
        {this.loadCreateForm()}
      </div>

    );
  }
}

const mapStateToProps = (state) => {
  return state;
}

export default connect(mapStateToProps, {goalSelected})(Accounts);