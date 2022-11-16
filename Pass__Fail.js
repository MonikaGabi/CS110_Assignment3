const grade = 95;
let letter_grade = "";
let pfMessege = ""


if(grade >= 93){
    letter_grade = "A"
}else if(grade< 93 && grade>= 90 ){
    letter_grade = "A-"
}
else if(grade< 90 && grade>= 87){
    letter_grade = "B"
}
else if(grade< 87 && grade>= 83){
    letter_grade = "B"
}
else if(grade< 83 && grade>= 80){
    letter_grade = "B-"
}
else if(grade< 80 && grade>= 77){
    letter_grade = "C+"
}
else if(grade< 77 && grade>= 73){
    letter_grade = "C"
}
else if(grade< 73 && grade>= 70){
    letter_grade = "C-"
}
else if(grade< 70 && grade>= 67){
    letter_grade = "D+"
}
else if(grade<67 && grade>= 60){
    letter_grade = "D"
}
else if (grade<60){
    letter_grade = "F"
}


if(grade >= 70){
    pfMessege = "passed"
}else{
    pfMessege = "failed"
}


console.log(`Your grade is ${grade} which corresponds to ${letter_grade}.`, `You ${pfMessege}!`)