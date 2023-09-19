

function saturdayFun(activity="roller-skate")  {
    return `This Saturday, I want to ${activity}!`;
}
saturdayFun();

function mondayWork(work = "go to the office")  {
    return `This Monday, I will ${work}.`;
}

function wrapAdjective(visualflair = "*"){
    return function (adj = "special") {
        return `You are ${visualflair}${adj}${visualflair}!`
    }
}
const promptFunction = wrapAdjective("*");
const compliment = promptFunction("awesome");
console.log(compliment);



const finalcall = wrapAdjective("%")("a dedicated programmer");
console.log(finalcall);