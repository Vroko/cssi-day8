let attemptedLoanCount = 0;

const getMessages = () => {
 const messagesRef = firebase.database().ref();
 messagesRef.on('value', (snapshot) => {
     const data = snapshot.val();
     console.log(data.records);
     const records = data.records;

     const recordNumber = document.querySelector('#passcode').value;
     const allowedRecord = 0;
     
     console.log(attemptedLoanCount);
     if(attemptedLoanCount >= 3)
     {
         // Hide the passcode view
             const passcodeInput = document.querySelector("#passcodeInput");
             passcodeInput.style.display = 'none';

             // Show the record
             const messageDiv = document.querySelector('#message');
             messageDiv.innerHTML = "You are not allowed to attempt any more loans!";
             return
     }
     for (record in records) {
        if (recordNumber == record && recordNumber == allowedRecord){
             console.log(records[record]);

             // Hide the passcode view
             const passcodeInput = document.querySelector("#passcodeInput");
             passcodeInput.style.display = 'none';

             // Show the record
             const messageDiv = document.querySelector('#message');
             messageDiv.innerHTML = records[record].artist + " " + records[record].name;
        }
     }
     attemptedLoanCount++;
 });
 
}



// const passcodeAttempt = document.querySelector('#passcode').value;
//  for (message in messages) {
//     const messageData = messages[message];
//     if (messageData.passcode === passcodeAttempt) {
//         // Code to hide input form, and render message as HTML

//         // Hide the passcode view
//         const passcodeInput = document.querySelector("#passcodeInput");
//         passcodeInput.style.display = 'none';

//         // Show the message
//         const messageDiv = document.querySelector('#message');
//         messageDiv.innerHTML = message;
//     }
// }




