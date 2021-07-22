const passcode = document.querySelector("#passcode");

const getMessages = () => {
    const messagesRef = firebase.database().ref(); //shorthand to get a reference to the firebase database
        messagesRef.on('value', (snapshot) => {
        const data = snapshot.val();
        // console.log(messagesRef);
        // console.log(data);
        for (let key in data) {
            if (key === passcode.value){
                console.log(key, data[key]);
                // alert(data[key]);
                const passcodeInput = document.querySelector("#passcodeInput");
                passcodeInput.innerHTML = `<h1 class="title">${data[key]}</h1>`
            }
        }
        // console.log(passcode.value);
    });
}

const renderMessageAsHtml = (message) => {
    // Hide Input Form

    // Render messageas HTML
}