// 8 ball - Positive Random Message Generator
// This script randomly generates a message from 3 different arrays.
// Very simple implementation using nested arrays of static datasets
// 3/28/2023
const eightballArray = [[1,2,3,4,5,6,7,8],
[
    "Today is a day of fortune",
    "Today is a day of appreciation",
    "Today is a day of service to others",
    "Today, go thank someone for being who they are",
    "Today, go spread some love. I'm sure someone needs it",
    "Today, go have some fun. You deserve it.",
    "Today, take the day to relax, and take a breather",
    "Today, take the time to practice your favorite hobby"
],
[
    "You are awesome, continue doing what you're doing",
    "You are a beautiful human being",
    "Someone's thinking about you today",
    "You will have a good day today",
    "Relax, everything will be ok.",
    "You are strong, and capable of more than you know",
    "Have faith that you will accomplish your goals",
    "Believe in yourself. Take care of yourself before taking care of others"
]
];

const outputMessage = () => {
    let randOne = Math.floor(Math.random() * 8);
    let randTwo = Math.floor(Math.random() * 8);
    let randThree = Math.floor(Math.random() * 8);
    console.log(`${eightballArray[0][randOne]} was rolled.`);
    console.log(`${eightballArray[1][randTwo]}`);
    console.log(`${eightballArray[2][randThree]}`);
}

outputMessage();