var hour = 23;


if (hour < 12) {
    greeting = 'Good morning';
} else if (hour < 18 ) {
    greeting = 'Good afternoon';
} else if (hour < 22 ) {
    greeting = 'Good evening';
} else {
    greeting = 'Good night';
}

console.log(greeting);