function Table(A, K) {
  let maxLength = Math.max(...A.map(num => num.toString().length));

  function Distance(length) {
    const distance = '+' + '-'.repeat(maxLength);
    const end = '+';
    console.log(distance + distance.repeat(length - 1) + end);
  }

  let rows = Math.ceil(A.length / K);
  for (let i = 0; i < rows; i++) {
    let columns = Math.min(K, A.length - i * K);
    Distance(columns);
    let row = '|';
    for (let j = 0; j < columns; j++) {
      let index = i * K + j;
      let element = A[index].toString();
      let padding = ' '.repeat(maxLength - element.length);
      row += `${element}${padding}|`;
    }
    console.log(row);
  }
  Distance(Math.min(K, A.length % K || K));
}

// Ví dụ với mảng A và số K
let A = [4, 5, 63, 123436777];
let B = 10;
Table(A, B);