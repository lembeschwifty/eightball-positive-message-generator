// 8 ball - Positive Random Message Generator
// This script randomly generates a message from 3 different arrays.
// Very simple implementation using nested arrays of static datasets
// 3/28/2023
const eightballArray = [['1 was rolled','2 was rolled','3 was rolled','4 was rolled','5 was rolled','6 was rolled','7 was rolled','8 was rolled'],
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
    for(let i=0;i<eightballArray.length; i++) {
        let randNumb = Math.floor(Math.random() * 8);
        console.log(eightballArray[i][randNumb]);        
    };
};

outputMessage();