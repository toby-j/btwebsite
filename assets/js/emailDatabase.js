function writeEmail() {
    firebase.database().ref("User").set({
        email: document.getElementById("emailSub").value,
    });
}