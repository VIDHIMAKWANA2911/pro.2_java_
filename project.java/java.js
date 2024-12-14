let basesalary = 50000;
let HRA = 20;
let DA = 7;
let TA = 3;

let Totalsalary = basesalary + HRA + DA + TA;

let hrabasesalary = (HRA / 100) * basesalary;
let dabasesalary = (DA / 100) * basesalary;
let tabasesalary = (TA / 100) * basesalary;

document.write("basesalary :" + basesalary + "<br>");
document.write("HRA:" + HRA + "<br>");
document.write("DA:" + DA + "<br>");
document.write("TA:" + TA + "<br>");
document.write("Totalsalary:" + Totalsalary);
