export function createDateTime() {
  const stringDate: string[] = [];
  const date = new Date();
  const month = date.getMonth() + 1;

  for (let i = 3; i >= 0; i--) {
    const day = date.getDate() - i;
    const concatDate12 = `${day}/${month} 12.00`;
    const concatDate00 = `${day}/${month} 00.00`;
    stringDate.push(concatDate12);
    stringDate.push(concatDate00);
  }

  return stringDate;
}
