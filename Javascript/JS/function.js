function printChai(){
    console.log("Hello from chai")
}

function bringBrush(itne){
    console.log(`Hanji, le aaya ${itne} brush`)
}

function add2(num1, num2){
    return num1+num2
}

bringBrush(4)
printChai()

console.log(add2(1,1));

// marks = (>=90, A grade),(>=80, B),(>=70,C),(>=60,D),(F)

function calculateGrade(marks){
    if(marks >= 90){
        return "A";
    }
    else if(marks >= 80){
        return "B";
    }
    else if(marks >= 70){
        return "C";
    }
    else if(marks >= 60){
        return "D";
    }
    else{
        return "F";
    }
}

let grade = calculateGrade(69);
console.log(grade);