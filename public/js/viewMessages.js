const passcode = document.querySelector("#passcode");

const getMessages = () => {
    const messagesRef = firebase.database().ref(); //shorthand to get a reference to the firebase database
        messagesRef.on('value', (snapshot) => {
        const data = snapshot.val();
        // console.log(messagesRef);
        // console.log(data);
        for (let key in data) {
            console.log(key, data[key]);
        }
        console.log(passcode.value);
    });
}

const renderMessageAsHtml = (message) => {
    // Hide Input Form

    // Render messageas HTML
}