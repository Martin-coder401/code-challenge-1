function estimateTransactionFee(amountToSend) {
  const feePercentage = 0.015;
  const minFee = 10;
  const maxFee = 70;

  // Calculate 1.5% fee
  let fee = amountToSend * feePercentage;

  // Enforce fee limits
  if (fee < minFee) {
    fee = minFee;
  } else if (fee > maxFee) {
    fee = maxFee;
  }

  const totalDebited = amountToSend + fee;

  console.log(`Sending KES ${amountToSend}:`);
  console.log(`Calculated Transaction Fee: KES ${fee}`);
  console.log(`Total amount to be debited: KES ${totalDebited}\n`);
  console.log(`Send Money Securely!`);
}

// Prompt the user for input
const input = prompt("Unatuma Ngapi? (KES):");
const amountToSend = Number(input);

// Validate input and call the function
if (!isNaN(amountToSend) && amountToSend > 0) {
  estimateTransactionFee(amountToSend);
} else {
  console.log("Tafadhali andika kiasi halisi cha kutuma.");
}