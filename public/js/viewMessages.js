const passcode = document.querySelector("#passcode");

const getMessages = () => {
    console.log("running");
    const messagesRef = firebase.database().ref();
        messagesRef.on('value', (snapshot) => {
        const data = snapshot.val();
        // console.log(messagesRef);
        // console.log(data);
        // for (const property in data) {
        //     console.log(`${property}: ${data[property]}`);
        // }
        console.log(passcode.value);
    });
}

const renderMessageAsHtml = (message) => {
    // Hide Input Form

    // Render messageas HTML
}