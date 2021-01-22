//Problem 1 converting kilometer into meter

function kilometerToMeter(kilometer) {

    if (kilometer < 0) {
        console.log("Your input should be a countable value");
    }
    else {
        var meter = kilometer * 1000;
        return meter;
    }

}
var result = kilometerToMeter(7);
console.log(result);

//Problem 2 making a budget calculator

function budgetCalculator(watch, phone, laptop) {
    if (watch % 1 != 0 || phone % 1 != 0 || laptop % 1 != 0) {
        console.log("Your input should be an integer number");

    }
    else {
        var watchCost = watch * 50;
        var phoneCost = phone * 100;
        var laptopCost = laptop * 500;
        var totalCost = watchCost + phoneCost + laptopCost;
        return totalCost;
    }

}
var result2 = budgetCalculator(2, 4, 1);
console.log(result2);



//Problem 3 counting hotel cost

function hotelCost(days) {
    var totalCost = 0;

    if (days <= 10) {
        totalCost = days * 100;
    }
    else if (days <= 20) {
        var primaryCost = 10 * 100;
        var extraDays = days - 10;
        var secondaryCost = extraDays * 80;
        totalCost = primaryCost + secondaryCost;

    }
    else {

        var primaryCost = 10 * 100;
        var secondaryCost = 10 * 80;
        var extraDays = days - 20;
        var thirdCost = extraDays * 50;
        totalCost = primaryCost + secondaryCost + thirdCost;

    }

    return totalCost;

}
var result3 = hotelCost(13);
console.log(result3);


//Problem 4 finding the largest string from an array

function megaFriend(friends) {

    var mega = 0;
    for (var i = 0; i < friends.length; i++) {

        /**as we are finding largest string from array so we have to compare with each string
         element length with another */

        if (friends[i].length > mega) {

            mega = friends[i].length;

            /**Founded max element will be store here */
            var maxElement = friends[i];
        }
    }
    return maxElement;

}
var friends = ['junayed', 'ambbani', 'kalam', 'robi'];
var result4 = megaFriend(friends);
console.log(result4);