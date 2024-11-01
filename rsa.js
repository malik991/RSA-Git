const primeArray = [2, 3, 5, 7, 11, 13];

// let a = 2;
// let b = 7;
//Select two distinct primes a and b
let a, b;
do {
  const AprimeIndex = Math.floor(Math.random() * primeArray.length);
  a = primeArray[AprimeIndex];

  const BprimeIndex = Math.floor(Math.random() * primeArray.length);
  b = primeArray[BprimeIndex];
} while (a === b); // Ensure they are different
console.log(a, b);

const multipleOfaAndb = a * b;
console.log(multipleOfaAndb);
const fieN = (a - 1) * (b - 1);
console.log("Euler's Totient (φ(n)): ", fieN);

const arrayOfFactors = [];
for (let index = 2; index < fieN; index++) {
  arrayOfFactors.push(index);
}
console.log("Array of factors: ", arrayOfFactors);

// a number which is bw 1 and fieN and co-prime of multipleOfaAndb and fieN
const oddNumbers = arrayOfFactors.filter((num) => num % 2 !== 0);
console.log("not even inculede: ", oddNumbers);
const coprimeNumbers = oddNumbers.filter((num) =>
  isCoprime(num, multipleOfaAndb, fieN)
);
let encryptedKey;
if (coprimeNumbers.length > 0) {
  encryptedKey = [coprimeNumbers[0], multipleOfaAndb];
  console.log("Encrypted key (e, n): ", encryptedKey);
  generateDecipherKey(encryptedKey[0]);
} else {
  console.log("No coprime numbers found.");
}

// Function to calculate GCD using the Euclidean algorithm
function gcd(a, b) {
  return b === 0 ? a : gcd(b, a % b);
}

// Function to check if a number is coprime to both numbers
function isCoprime(num, a, b) {
  return gcd(num, a) === 1 && gcd(num, b) === 1;
}

// generate decipher key
function generateDecipherKey(eKey) {
  let multiple = eKey;
  let result = multiple;
  let findDivider = 0;
  while (result % fieN !== 1) {
    findDivider++;
    //console.log(result);
    result += multiple;
  }
  const decipherKey = [findDivider, multipleOfaAndb];
  console.log("Decepher Key (d,n)", decipherKey);
}
