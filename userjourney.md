## Assumptions
- Its ok for uids to be on the url

## Global components
- header component "hey {user}"


# User Journey

router url: '/'

- Splash component

## return account details -container
Rest call `/api/v2/identity/individual` for header <--- "hey {user}" or something

Rest call: `/v1/accounts`
returns array of accounts, grab all the accountUids and fetch the account details:
router url: `/accounts`

- details component
- List component

user selects account
selected account becomes `accountUid`

user is routed to: `/accounts/accountUid/goals`

## user  account

return goals for account

Rest call: `account/accountUid/savings-goals`
router url: `/accounts/accountUid/goals`

list all goals
- details component
- list component

select route: Branch 1
create route: Branch 2
## user selects a goal - Branch 1

selected goal becomes `savingsgoaluid`
Rest call: `/api/v2/account/accountUid/savings-goals/savingsGoalUid`
router call: `/accounts/accountUid/goals/savingsGoalUid`

display goal details
 (stretch) --> graph js?

 -details component
 -graph component (stretch)

 ## user creates a goal - Branch 2

Router call: `/accounts/accountUid/goals/create`
Rest call: `/api/v2/account/accountUid/` < --- PUT request (why?), check the body in docs to see what to send

 - details component
 - form component

user it taken to their list of goals:

router url: `/accounts/accountUid/goals`

## user selects round up

Confirmation of round up of money into goal

1 (round up algorithm)
2 confirm round up
3 PUT amount to goal
4 success
5 success button takes user back to list of goals: `/accounts/accountUid/goals`

-confirmation component
- success component (like splash, but happier)
user confirms:

# Defined Components

- Splash
- Header
- Details
- List (and ListItem)
- Form
- Confirm
- Success

# Defined Component Containers

- Home `/`
- Accounts `/accounts`
- Goals `/account/accountUid/goals` <-- needs param {accountUid}
- CreateGoal `/accounts/accountUid/goals/create` <--- needs param {accountUid}
- GoalDetails `/account/accountUid/goals/savingsGoalUid` <--- needs param {accountUid}, {savingGoalUid}
- Roundup `/account/accountUid/goals/savingsGoalUid/roundup` <--- needs param {accountUid}, {savingGoalUid}
- Confirm `/account/accountUid/goals/savingsGoalUid/roundup` <--- needs param {accountUid}, {savingGoalUid}
- success `/account/accountUid/goals/savingsGoalUid/roundup`  <--- needs param {accountUid}, {savingGoalUid}
