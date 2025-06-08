function calculateChaiIngredients(numberOfCups) {
  const sugarPerCup = 2;    
  const teaLeavesPerCup = 1;   
  const milkPerCup = 50;     
  const waterPerCup = 200; 

  const totalWater = waterPerCup * numberOfCups;
  const totalMilk = milkPerCup * numberOfCups;
  const totalTeaLeaves = teaLeavesPerCup * numberOfCups;
  const totalSugar = sugarPerCup * numberOfCups;

  console.log("number of cups")
  console.log("total milk")
  console.log("total tea leaves")
  console.log("totalsugar")
  
}
const input = prompt("How many cups of chai would you like to make?");
const numberOfCups = Number(input);

if (!isNaN(numberOfCups) && numberOfCups > 0) {
  calculateChaiIngredients(numberOfCups);
} else {
  console.log("Please enter a valid number of cups.");
}
