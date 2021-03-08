module.exports = function toReadable (number) {
  let ones = ['one','two','three','four','five','six','seven','eight','nine','ten','eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen'];
  let tens = ['twenty','thirty','forty','fifty','sixty','seventy','eighty','ninety'];
  let res = '';
  let temp = 0;
  if (number === 0) {
      return 'zero';
  }
  if (number%100 !== 0) {
    if (number%100 < 20) {
        res = ones[number%100-1];
      } else {
        if (number%10 > 0) {
            res = ones[number%10-1];
        }
        temp = Math.trunc(number/10);
        if (temp%10 > 0) {
            res = tens[temp%10-2] + ' ' + res.trim();
        }
      }    
  }
  temp = Math.trunc(number/100);
  if (temp%10 > 0) {
      res = ones[temp%10-1] + ' hundred ' + res.trim();
  }
  return res.trim();
}
