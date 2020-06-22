// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyB2Vw5dRkTmspLJ5g8jhcmyW0FnOvS1A_g",
    authDomain: "beautytruth-34727.firebaseapp.com",
    databaseURL: "https://beautytruth-34727.firebaseio.com",
    projectId: "beautytruth-34727",
    storageBucket: "beautytruth-34727.appspot.com",
    messagingSenderId: "44797291280",
    appId: "1:44797291280:web:648a47facc3f8beea61395"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//create reference
var emailStore =  firebase.database().ref('emailAddresses');
//email regex
var email_regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i;

//listen for form submit
document.getElementById('earlyAccessEmail').addEventListener('submit', submitForm);

//submit form
function submitForm(e) {
    e.preventDefault();
    console.log(123);
    //get values
    var email = getInputVal('email');
    //save message
    saveMessage(email);
}

//function to get form values
function getInputVal(id) {
    return document.getElementById(id).value;
}

// Save message to firebase
function  saveMessage(email) {
    updateButtonMsg();
    try {
//write email verification shit
        }

    }
    catch(err) {
        window.alert(err);
    }
    //show success alert
    setTimeout(finalButtonMsg, 500);
}


const button   = document.querySelector('.button.stroke'),
    stateMsg = document.querySelector('.pre-state-msg');

//set to sending...
const updateButtonMsg = function() {
    button.classList.add('state-1', 'animated');
};

//set to done
const finalButtonMsg = function() {
    button.classList.add('state-2');
    setTimeout(setInitialButtonState, 2000);
};

//reset to normal
const setInitialButtonState = function() {
    button.classList.remove('state-1', 'state-2', 'animated');
};