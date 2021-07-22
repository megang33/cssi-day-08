const passcode = document.querySelector("#passcode");
const passcodeInput = document.querySelector("#passcodeInput");
let count = 0;
let error = false;

const getMessages = () => {
    const messagesRef = firebase.database().ref(); //shorthand to get a reference to the firebase database
        messagesRef.on('value', (snapshot) => {
        const data = snapshot.val();
        // console.log(messagesRef);
        // console.log(data);
    // while(count < 3){
        for (let key in data) {
            if (key === passcode.value){
                console.log(key, data[key]);
                // alert(data[key]);
                passcodeInput.innerHTML = `<div>
                <h1 class="title">${data[key]}</h1>
                <button class="button is-block is-primary is-medium is-rounded" onClick="reset()">Enter Another Passcode!</button>
                </div>`
            }
            else{
                error = true;
            }
        }
        // console.log(passcode.value);
    //  }
    //  if(error == true){
    //         alert("no message is bound to this passcode, please enter a valid passcode");
    //         count++;
    //     }
    //  passcode.value=null;
    //  count = 0;
    //  passcodeInput.innerHTML = `<div>
    //             <h1 class="title">You have entered the wrong passcode 3 times, you can no longer enter a passcode.</h1>
    //             </div>`
    });
}

// const reset = () =>{
//     passcodeInput.innerHTML = `<div id="passcodeInput" class="hero-body has-text-centered">
//             <div class="login">
//             <form action="javascript:void(0);">
//                 <div class="field">
//                     <div class="control">
//                         <input class="input is-medium is-rounded" type="text" placeholder="What's the passcode?" id="passcode" required />
//                     </div>
//                 </div>
//                 <button class="button is-block is-fullwidth is-primary is-medium is-rounded" type="submit" onclick="getMessages()">
//                     Click Here
//                 </button>
//             </form>
//             <br>
//             </div>
//         </div>`
// }

const renderMessageAsHtml = (message) => {
    // Hide Input Form

    // Render messageas HTML
}