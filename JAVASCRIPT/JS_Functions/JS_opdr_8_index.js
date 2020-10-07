

function averageGrade(grade1, grade2, averageGradeResult) {
    console.log(grade1);
    let num1 = Number(grade1.innerHTML);
    let num2 = Number(grade2.innerHTML);
    // console.log(num2);
    let averageOfTwoGrades = ((num1 + num2) / 2);

    return averageGradeResult.innerHTML = averageOfTwoGrades;

}
averageGrade(document.getElementById("nedw"), document.getElementById("engw"), document.getElementById("gemTalenW"));
averageGrade(document.getElementById("nedj"), document.getElementById("engj"), document.getElementById("gemTalenJ"));
averageGrade(document.getElementById("nedk"), document.getElementById("engk"), document.getElementById("gemTalenK"));
averageGrade(document.getElementById("neds"), document.getElementById("engs"), document.getElementById("gemTalenS"));
averageGrade(document.getElementById("nedjo"), document.getElementById("engjo"), document.getElementById("gemTalenJo"));
averageGrade(document.getElementById("nedg"), document.getElementById("engg"), document.getElementById("gemTalenG"));


averageGrade(document.getElementById("ww"), document.getElementById("nw"), document.getElementById("gemBetaVakkenW"));
averageGrade(document.getElementById("wj"), document.getElementById("nj"), document.getElementById("gemBetaVakkenJ"));
averageGrade(document.getElementById("wk"), document.getElementById("nk"), document.getElementById("gemBetaVakkenK"));
averageGrade(document.getElementById("ws"), document.getElementById("ns"), document.getElementById("gemBetaVakkenS"));
averageGrade(document.getElementById("wjo"), document.getElementById("njo"), document.getElementById("gemBetaVakkenJo"));
averageGrade(document.getElementById("wg"), document.getElementById("ng"), document.getElementById("gemBetaVakkenG"));

averageGrade(document.getElementById("gemTalenW"),  document.getElementById("gemBetaVakkenW"), document.getElementById("gemTotaalW"));
averageGrade(document.getElementById("gemTalenJ"),  document.getElementById("gemBetaVakkenJ"), document.getElementById("gemTotaalJ"));
averageGrade(document.getElementById("gemTalenK"),  document.getElementById("gemBetaVakkenK"), document.getElementById("gemTotaalK"));
averageGrade(document.getElementById("gemTalenS"),  document.getElementById("gemBetaVakkenS"), document.getElementById("gemTotaalS"));
averageGrade(document.getElementById("gemTalenJo"),  document.getElementById("gemBetaVakkenJo"), document.getElementById("gemTotaalJo"));
averageGrade(document.getElementById("gemTalenG"),  document.getElementById("gemBetaVakkenG"), document.getElementById("gemTotaalG"));


// function grading(element) {   
//     gradeNum = element.innerHTML;   
//     if (gradeNum <= 5.5) {
//         element.style.background = "#ff6666";
//     } else if (gradeNum >= 5.6 && gradeNum <= 7.5) {
//         element.style.background = "#6B5";
//     } else if (gradeNum >= 7.6) {
//         element.style.background = "#556B2F";
//     }

// }
function grading(element) {
    // console.log(element);
    gradeNum = document.getElementById(element).value;
   
    if (gradeNum <= 5.5) {
        document.getElementById(element).style.background = "#ff6666";
    } else if (gradeNum >= 5.6 && gradeNum <= 7.5) {
        document.getElementById(element).style.background = "#6B5";
    } else if (gradeNum >= 7.6) {
        document.getElementById(element).style.background = "#556B2F";
    }

}
grading("ww");
grading("wj");
grading("wk");
grading("ws");
grading("wjo");
grading("wg");

grading(document.getElementById("nw"));
grading(document.getElementById("nj"));
grading(document.getElementById("nk"));
grading(document.getElementById("ns"));
grading(document.getElementById("njo"));
grading(document.getElementById("ng"));

grading(document.getElementById("nedw"));
grading(document.getElementById("nedj"));
grading(document.getElementById("nedk"));
grading(document.getElementById("neds"));
grading(document.getElementById("nedjo"));
grading(document.getElementById("nedg"));

grading(document.getElementById("engw"));
grading(document.getElementById("engj"));
grading(document.getElementById("engk"));
grading(document.getElementById("engs"));
grading(document.getElementById("engjo"));
grading(document.getElementById("engg"));


function pass(element) {
    let gradeNum = element.innerHTML;
    if (gradeNum < 6.5) {
        element.style.background = "#ff6666";
    } else if (gradeNum >= 6.5 && gradeNum <= 7.5) {
        element.style.background = "#6B5";
    } else if (gradeNum >= 7.6) {
        element.style.background = "#556B2F";
    }

}
pass(document.getElementById("gemTalenW"));
pass(document.getElementById("gemBetaVakkenW"));
pass(document.getElementById("gemTotaalW"));

pass(document.getElementById("gemTalenJ"));
pass(document.getElementById("gemBetaVakkenJ"));
pass(document.getElementById("gemTotaalJ"));

pass(document.getElementById("gemTalenK"));
pass(document.getElementById("gemBetaVakkenK"));
pass(document.getElementById("gemTotaalK"));

pass(document.getElementById("gemTalenS"));
pass(document.getElementById("gemBetaVakkenS"));
pass(document.getElementById("gemTotaalS"));

pass(document.getElementById("gemTalenJo"));
pass(document.getElementById("gemBetaVakkenJo"));
pass(document.getElementById("gemTotaalJo"));

pass(document.getElementById("gemTalenG"));
pass(document.getElementById("gemBetaVakkenG"));
pass(document.getElementById("gemTotaalG"));
