var submit = document.getElementById("calcButton");
var assignmentWeight = .5;
var projextQuizIntexWeight = .1;
var examWeight = .2;
var finalPercent;
var finalGrade;

submit.addEventListener("click", function () {
    finalPercent = (document.getElementById("assignments").value * assignmentWeight) + (document.getElementById("project").value * projextQuizIntexWeight) +
        (document.getElementById("quizzes").value * projextQuizIntexWeight) + (document.getElementById("exams").value * examWeight) +
        (document.getElementById("intex").value * projextQuizIntexWeight)

    if (finalPercent >= 94) {
        finalGrade = "A";
    } else if (finalPercent >= 90) {
        finalGrade = "A-"
    } else if (finalPercent >= 87) {
        finalGrade = "B+"
    } else if (finalPercent >= 84) {
        finalGrade = "B"
    } else if (finalPercent >= 80) {
        finalGrade = "B-"
    } else if (finalPercent >= 77) {
        finalGrade = "C+"
    } else if (finalPercent >= 74) {
        finalGrade = "C"
    } else if (finalPercent >= 70) {
        finalGrade = "C-"
    } else if (finalPercent >= 67) {
        finalGrade = "D+"
    } else if (finalPercent >= 64) {
        finalGrade = "D"
    } else if (finalPercent >= 60) {
        finalGrade = "D-"
    } else {
        finalGrade = "E"
    }

    alert("Final Grades: " + finalPercent + "% " + finalGrade)
});
