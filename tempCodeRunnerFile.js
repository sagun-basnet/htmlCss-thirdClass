try {
  let a = 12;
  let b = 0;

  let c = a / b;
  console.log(c);
  if (b === 0) {
    throw new Error("Custom Error");
  }
} catch (error) {
  console.log("Error aayo: ", error);
}