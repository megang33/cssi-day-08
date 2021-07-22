const passcode = document.querySelector("#passcode");
const passcodeInput = document.querySelector("#passcodeInput");
const message = document.querySelector("#message");
let count = 0;
let error = false;

const getMessages = () => {
    const messagesRef = firebase.database().ref(); //shorthand to get a reference to the firebase database
        messagesRef.on('value', (snapshot) => {
        const data = snapshot.val();
        console.log(data);
        // console.log(messagesRef);
        // console.log(data);
        for (let key in data) {
            if (data[key].passcode === passcode.value){
                console.log(data[key].passcode, data[key].message);
                // alert(data[key]);
                passcodeInput.classList.add("hidden");
                message.innerHTML = `
                <h1 class="title">${data[key].message}</h1>
                <button class="button is-block is-primary is-medium is-rounded" onClick="reset()">Enter Another Passcode!</button>`
            }
            else{
                error = true;
            }
        }
        // console.log(passcode.value);
    //  }
    //  passcode.value=null;
    //  count = 0;
    //  passcodeInput.innerHTML = `<div>
    //             <h1 class="title">You have entered the wrong passcode 3 times, you can no longer enter a passcode.</h1>
    //             </div>`
    });
    // if(count>3){
    //     alert("you are a hacker, you cannot enter a password anymore");
    //     passcodeInput.classList.add("hidden");
    // }
    if(error == true){
            alert("no message is bound to this passcode, please enter a valid passcode");
            passcode.value = null;
            count++;
    }
}

const reset = () =>{
    passcode.value = null;
    console.log("clicked");
}

const renderMessageAsHtml = (message) => {
    // Hide Input Form

    // Render messageas HTML
}