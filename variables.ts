/*
Difference between var, let const
const: cannot redefine, cannot reassign in scope  
let: cannot redefine, can reassign in scope
var: can redefine if type is same, can reassign in scope
*/
var printName = (f, l) => {
  let gr: string = "hi there";
  console.log(gr, f, l);
  // let gr : string ="5"; //doesnt work
  gr = "5";
  console.log(gr, f, l);

  // var gr : string = "hi there";
  // console.log(gr,f,l);
  // var gr : string ="5";
  // console.log(gr,f,l);
};
printName("jessita", "coutinho");
