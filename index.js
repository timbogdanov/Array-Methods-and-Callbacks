import { fifaData } from './fifa.js';
// console.log(fifaData);

// console.log('its working');
// ⚽️ M  V P ⚽️ //

/* Task 1: Investigate the data above. Practice accessing data by console.log-ing the following pieces of data

(a) Home Team name for 2014 world cup final
(b) Away Team name for 2014 world cup final
(c) Home Team goals for 2014 world cup final
(d) Away Team goals for 2014 world cup final
(e) Winner of 2014 world cup final */


fifaData.forEach(function(element) {
    if (element["Year"] === 2014 && element["Stage"] === "Final") {
        // console.log(element["Home Team Name"]);
        // console.log(element["Away Team Name"]);
        // console.log(element["Home Team Goals"]);
        // console.log(element["Away Team Goals"]);
        // console.log(element["Win conditions"]);
    }
});


/* Task 2: Create a function called  getFinals that takes `data` as an argument and returns an array of objects with only finals data */

function getFinals(data) {
    return data.filter(function(item) {
        return item["Stage"] === "Final";
    });
};

// const filter = data => data.filter(item => item.Stage === "Final");

// console.log(getFinals(fifaData));


/* Task 3: Implement a higher-order function called `getYears` that accepts the callback function `getFinals`, and returns an array called `years` containing all of the years in the dataset */

function getYears(callback, data) {
    return callback(data).map(function(item){
        return item.Year;
    });

    // return callback(data).map(item => item.Year)
};

// console.log(getYears(getFinals, fifaData));


/* Task 5: Implement a higher-order function called `getWinners`, that accepts the callback function `getFinals()` and determine the winner (home or away) of each `finals` game. Return the name of all winning countries in an array called `winners` */

function getWinners(callback, data) {
    return callback(data).map(function(item){
        if (item["Home Team Goals"] > item["Away Team Goals"]) {
            return `${item["Home Team Name"]}`;
        } else if (item["Home Team Goals"] < item["Away Team Goals"]) {
            return `${item["Away Team Name"]}`;
        } else {
            return `It was a tie`;
        }
    });
};

const winners = getWinners(getFinals, fifaData);
// console.log(winners);

/* Task 6: Implement a higher-order function called `getWinnersByYear` that accepts the following parameters and returns a set of strings "In {year}, {country} won the world cup!"

Parameters:
 * callback function getWinners
 * callback function getYears
 */

function getWinnersByYear(winner, year, data) {
    const winners = winner(getFinals, data);
    const years = year(getFinals, data);

    // return winners.map((winner, index) => `In ${years[index]}, ${winner} won!`);

    return years.map(function(year, index) {
        return `In ${year}, ${winners[index]} won!`
    });
};

// console.log(getWinnersByYear(getWinners, getYears, fifaData));

/* Task 6: Write a function called `getAverageGoals` that accepts a parameter `data` and returns the the average number of home team goals and away team goals scored per match (Hint: use .reduce and do this in 2 steps) */

function getAverageGoals(data) {

    const getHomeScores = data.map(function(item) {
        return item["Home Team Goals"];
    });

    const getAwayScores = data.map(function(item) {
        return item["Away Team Goals"];
    });

    const resultAway = getAwayScores.reduce(function(accumulator, item) {
        return (accumulator + item);
    });

    const resultHome = getHomeScores.reduce(function(accumulator, item) {
        return (accumulator + item);
    });

    console.log(resultHome/getHomeScores);
    console.log(resultAway/getAwayScores);

};

console.log(getAverageGoals(fifaData));

/// STRETCH 🥅 //

/* Stretch 1: Create a function called `getCountryWins` that takes the parameters `data` and `team initials` and returns the number of world cup wins that country has had.

Hint: Investigate your data to find "team initials"!
Hint: use `.reduce` */

function getCountryWins(/* code here */) {

    /* code here */

};

getCountryWins();


/* Stretch 3: Write a function called getGoals() that accepts a parameter `data` and returns the team with the most goals score per appearance (average goals for) in the World Cup finals */

function getGoals(/* code here */) {

    /* code here */

};

getGoals();


/* Stretch 4: Write a function called badDefense() that accepts a parameter `data` and calculates the team with the most goals scored against them per appearance (average goals against) in the World Cup finals */

function badDefense(/* code here */) {

    /* code here */

};

badDefense();

/* If you still have time, use the space below to work on any stretch goals of your chosing as listed in the README file. */
