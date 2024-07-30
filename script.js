const currentTimeElement = document.getElementById('currentTime');
const taskInput = document.getElementById('taskInput');
const timeInput = document.getElementById('timeInput');
const dateInput = document.getElementById('dateInput');
const taskList = document.getElementById('taskList');

// বর্তমান সময় আপডেট করার ফাংশন
function updateClock() {
    const now = new Date();
    const options = { hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true };
    const formattedTime = now.toLocaleTimeString('en-US', options);
    currentTimeElement.textContent = formattedTime;
}

function addTask() {
    const task = taskInput.value;
    const time = timeInput.value;
    const date = dateInput.value 

    if (task !== '') {
        const li = document.createElement('li');
        li.textContent = `${task} - Due at ${time} - ${date}`;
        taskList.appendChild(li);
        
         // Here, you'll implement the logic to set a timeout or use a library like moment.js
        // to schedule a notification based on the specified time.
        // For browser notifications, you'll need to handle user permission requests and
        // use the Notification API.

        taskInput.value = '';
        timeInput.value = '';
        dateInput.value = '';
        
    }
}
   
   // প্রতি সেকেন্ডে ঘড়ি আপডেট করা
setInterval(updateClock, 1000);

// পেজ লোড হলে প্রথমবারের জন্য ঘড়ি আপডেট করা
updateClock();