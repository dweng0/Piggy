export default {
    currency :{
        short: "GBP",
        format: {style: "currency", currency: "GBP", minimumFractionDigits: 2}
    },
    splash: {
        welcome: "Welcome to Piggy!",
        subTitle: "Start saving",
        description: "Roundup your weekly transactions",
        alreadySaved: "Looks like you've already saved this week"
    },
    success: {
        welcome: "Nice one",
        subTitle: "You've made a nice saving this week, come back next take make more savings",
        button: "Thanks"
    },
    header: {
        greet: "Welcome",
        title: "piggy",
        accountLinkLabel: "Accounts",
        failedToConnect: "failed to connect to service"
    },
    noMatchedRoute: {
        missing: "Looks like the page you are looking for is missing",
        returnButton: "Go home"
    },
    accountContent: {
        successTitle: "Nice one",
        successContent: "We've added those savings for you",
        loadingTitle: "Loading your account",
        loadingContent: "You're only a few steps away from stashing away that loose change",
        errorTitle: "There was an error",
        errorContent: "We were unable to process the request",
        loadedTitle: "Account loaded",
        loadedContent: "Select a saving goal to save your money into",
        noSavingGoal: "You have no saving goals",
        noSavingGoalSummary: "Help reach your saving targets by creating a goal today"
    },
    transactionsText: {
        title : "Weekly round up",
        contentinitial: "Grabbing this weeks transactions",
        contentFailed: "Couldn't get this weeks transactions",
        contentSuccess: "Ok, we're all set!",
        savingsSummary: "If you round up all your transactions, you could make a tidy saving of",
        saveNothing: "We couldn't find any savings for you this week. Lets try again next week",
        roundUpButtonLabel: "Choose a savings goal"
    },
    saveGoal: {
        submit: "Submit",
        name: {
            placeHolder: "Name",
            label: "Give your goal a meaningful name",
            validation: "Alphanumeric characters only"
        },
        file: {
            label: "Add a picture to your goal",
            uploadingPicture: "Uploading picture",
            uploadSuccess: "Picture uploaded"
        },
        amount: {
            placeHolder: "Amount",
            label: "",
            validation: "Numbers only, no decimal places"
        }
    }
}
