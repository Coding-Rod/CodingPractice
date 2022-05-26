// Closure
const moneyBox = () => {
    var saveCoins = 0;
    const countCoins = (coins = 0) => { // The parameter is recieved here
        saveCoins += coins;
        console.log(`MoneyBox: $${saveCoins}`);
    }
    return countCoins;
};

let myMoneyBox = moneyBox();

myMoneyBox(4);
myMoneyBox(6);
myMoneyBox(10);
myMoneyBox();

// Lexical

const buildCount = (i) => {
    let count = i;
    const displayCount = () => {
        console.log(count++);
    }
    return displayCount;
};

const myCount = buildCount(1);
myCount();
myCount();
myCount();

const myOtherCount = buildCount(10);
myOtherCount();
myOtherCount();

// Private methods
const person = () => {
    var saveName = "Name";
    return {
        getName: () => saveName,
        setName: (name) => {
            saveName = name;
        }
    }
}

let newPerson = person();
console.log(newPerson)
newPerson.setName("Rodrigo")
console.log(newPerson.getName());
console.log(newPerson);