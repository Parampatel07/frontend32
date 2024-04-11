// function expression ( 2nd method )

var getInput = function () {
     var foot = parseInt(document.getElementById('foot').value);
     var inch = parseInt(document.getElementById('inch').value);
     var weight = parseFloat(document.getElementById('weight').value);
     var answer = [foot, inch, weight]
     console.log(` the value of foot is ${foot} inch is ${inch} and weight is ${weight} `);
     // var meter = foot / 3.281 ;

     return answer;
}

var footToMeter = function () {
     var answer2 = getInput();
     console.log(answer2);
     var meter = foot / 3.281;
}
// footToMeter();