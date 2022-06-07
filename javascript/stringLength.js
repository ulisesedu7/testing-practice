function stringLength (str) {
  let charCount = str.length;

  if (charCount >= 1 && charCount <= 10) {
    return charCount;
  } else {
    return ('String is either big than 10 or smaller than 1');
  }

  
}

module.exports = stringLength;