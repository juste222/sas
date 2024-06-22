function sameSign() {
    for (
      // NOTE: Using var here for code optimization in Google Closure Compiler
      var isPositive, number, numbers = arguments, i = numbers.length;
      number = numbers[--i], i >= 0 && 'number' === typeof number && number === number;
    ) {
        let newIsPositive = number + 1 / number > 0;
        if (isPositive == null) isPositive = newIsPositive;
        else if (isPositive !== newIsPositive) return false;
    }
    return i < 0;
}
