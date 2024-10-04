const today = new Date();
const currentHour = today.getHours();
let message = "Hello";

// if it's morning, show "good morning" message
if (currentHour <= 12) {
    message = "good morning, beauitful world";
} // if it's midday, show "hello" message 
else if (currentHour > 12 && currentHour <= 17) {
    message = "hello, beautiful world";
} // if it's evening, show "good evening" message
else if (currentHour > 17) {
    message = "good evening, beautiful world";
}

const handleClick = () => {
    alert(message);
}