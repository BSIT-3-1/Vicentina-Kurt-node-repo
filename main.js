let a= 10;
let shape = "";
 
for (let i = 0; i <= a; i++) {

  for (let b = a; b > i; b--) {
    shape += " ";
  }
  for (let c = 0; c < i* 2 - 1; c++) {
    shape += "*";
  }
  shape += "\n";
}
for (let i = 1; i <= a - 1; i++) {
  for (let b = 0; b < i; b++) {
    shape += " ";
  }
  for (let c = (a - i) * 2 - 1; c > 0;
      c--) {
   shape += "*";
  }
  shape += "\n";
}
console.log(shape);
