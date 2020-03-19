function variableTypeDeclare():string {
  //boolean
  let flag: boolean = true;
  //number
  let age: number = 5;
  let taxRate: number = 2.5;
  //string
  let name: string = "jessita";
  //array
  let ages: number[] = [5, 12, 11];
  //tuple - if you know types and number of variables
  let player:[number, string, number] = [3,'Jessi', 6];
  //enum
  enum Stage {Approved, Pending, Rejected};
  let job:Stage = Stage.Approved
  //Any
  var apiData:any[]=[123,"jess", false];
  //void
  function printOut(msg:string): void{
    console.log("void method")
  }
  return "Jess";
};
//alias
type PlayerArray = Array<String>;
let players : PlayerArray = ["Jess","john"]
//union type
