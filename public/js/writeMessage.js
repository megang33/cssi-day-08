const onSubmit = () => {
    // console.log("submit button clicked");
    const passcodeInp = document.querySelector("#passcode").value;
    const messageInp = document.querySelector("#message").value;

    const payload = {
        passcode: passcodeInp,
        message: messageInp
    };

    firebase.database().ref().push(payload);
}