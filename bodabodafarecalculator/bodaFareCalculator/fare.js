const prompt = require('prompt-sync')({ sigint: true });

function calculateBodaFare(distanceInKm) {
  const baseFare = 50; //kenyan shillings        
  const chargePerKm = 15; // kenyan shillings

  const distanceFare = distanceInKm * chargePerKm;
  const totalFare = baseFare + distanceFare;

  console.log(`Uko kwote? Io ni ${distanceInKm} km:`);
  console.log(`Ukikalia Pikipiki: KES ${baseFare}`);
  console.log(`Mpaka Uko: KES ${distanceFare}`);
  console.log(`Total: KES ${totalFare}\n`);
  console.log(`Panda Pikipiki!`);
}

// Prompt user for input
const input = prompt("Unafika wapi Mkubwa? Kilometer ngapi?:");
const distanceInKm = Number(input);

// Validate input and call the function
if (!isNaN(distanceInKm) && distanceInKm > 0) {
  calculateBodaFare(distanceInKm);
} else {
  console.log("Tafadhali andika nambari halisi ya kilomita.");
}