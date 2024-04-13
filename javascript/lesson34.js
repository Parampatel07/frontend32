// function expression ( 2nd method )
// footToMeter();

let getInput = function () {
     let foot = parseInt(document.getElementById('foot').value);
     let inch = parseInt(document.getElementById('inch').value);
     let weight = parseFloat(document.getElementById('weight').value);
     let answer = [foot, inch, weight]
     console.log(` the value of foot is ${foot} inch is ${inch} and weight is ${weight} `);
     // let meter = foot / 3.281 ;
     // footToMeter(foot);
     // inchToMeter(inch);
     // getTotalMeter(foot, inch);
     // getBmi(weight, foot, inch);
     return answer;
}

let getBmi = function () {
     let input = getInput();
     let bmi = input[2] / (getTotalMeter(input[0], input[1]) * getTotalMeter(input[0], input[1]));
     console.log("the value of bmi is " + bmi);
     return bmi;
}

let getTotalMeter = function (foot, inch) {
     let total_meter = footToMeter(foot) + inchToMeter(inch);
     console.log("Total meter is : " + total_meter);
     return total_meter;
}

let footToMeter = function (foot) {
     let foot_meter = foot / 3.281;
     console.log("This is foot meter " + foot_meter);
     return foot_meter;
}


let inchToMeter = function (inch) {
     let inch_meter = inch / 39.37;
     console.log("This is inch meter " + inch_meter);
     return inch_meter;
}

// footToMeter();