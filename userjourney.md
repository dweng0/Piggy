## Global components
- header component "hey {user}"

# User Journey

## return account details -container
Rest call `/api/v2/identity/individual` for header <--- "hey {user}" or somthing

Rest call: `/v1/accounts`
returns array of accounts, grab all the accountUids and fetch the account details:
Rest call: `/v1
router url: `/`

- details component
- List component

user selects account
selected account becomes `{accountUid}`

## user selects

## Return goals for selected account

Rest call: `account/{accountUid}/savings-goals`
router url: `/{accountUid}/goals`

list all goals 
- details component
- list component

user selects a goal
selected goal becomes `{savingsgoaluid}`






account id now = {accountUid}

list all savings goals... u
/api/v2/account/{accountUid}/savings-goals


list savings goals
get savings goals
list them
if none, create saving goal
