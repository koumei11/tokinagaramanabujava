// 2-1
class SumDiff {
  main() {
    console.log("82 + 17 = " + (87 + 17));
    console.log("82 - 17 = " + (82 - 17));
  }
}

let sumDiff = new SumDiff();
sumDiff.main();

// 2-2
class SumAve1 {
  main() {
    let x;
    let y;

    x = 63;
    y = 18;

    console.log("xの値は" + x + "です。");
    console.log("yの値は" + y + "です。");
    console.log("合計は" + (x + y) + "です。");
    console.log("平均は" + (x + y) / 2 + "です。");
  }
}

let sumAve1 = new SumAve1();
sumAve1.main();

// 2-3
class SumAveError {
  main() {
    let x;
    let y;

    x = 63.4;
    y = 18.3;

    console.log("xの値は" + x + "です。");
    console.log("yの値は" + y + "です。");
    console.log("合計は" + (x + y) + "です。");
    console.log("平均は" + (x + y) / 2 + "です。");
  }
}

let sumError = new SumAve1();
sumError.main();

// 2-4
class SumAve3A {
  main() {
    let x, y, z;

    x = 63;
    y = 18;
    z = 52;

    console.log("xの値は" + x + "です。");
    console.log("yの値は" + y + "です。");
    console.log("zの値は" + z + "です。");
    console.log("合計は" + (x + y + z) + "です。");
    console.log("平均は" + (x + y + z) / 3 + "です。");
  }
}

let sumAve3A = new SumAve3A();
sumAve3A.main();

class SumAve3B {
  main() {
    let x, y, z;
    let sum;

    x = 63;
    y = 18;
    z = 52;

    sum = x + y + z;
    console.log("xの値は" + x + "です。");
    console.log("yの値は" + y + "です。");
    console.log("zの値は" + z + "です。");
    console.log("合計は" + sum + "です。");
    console.log("平均は" + sum / 3 + "です。");
  }
}

let sumAve3B = new SumAve3B();
sumAve3B.main();

class SumAve3C {
  main() {
    let x = 63;
    let y = 18;
    let z = 52;
    let sum = x + y + z;

    console.log("xの値は" + x + "です。");
    console.log("yの値は" + y + "です。");
    console.log("zの値は" + z + "です。");
    console.log("合計は" + sum + "です。");
    console.log("平均は" + sum / 3 + "です。");
  }
}

let sumAve3C = new SumAve3C();
sumAve3C.main();

// 2-5
class ScanInteger {
  main() {
    let x = prompt("整数値：");
    console.log(x + "と入力しました。");
  }
}

let scanInteger = new ScanInteger();
scanInteger.main();

// 2-6
class PlunMinus10 {
  main() {
    let x = prompt("整数値：");
    console.log("10を加えた値は" + (parseInt(x) + 10) + "です。");
    console.log("10を減じた値は" + (x - 10) + "です。");
  }
}

let plunMinus10 = new PlunMinus10();
plunMinus10.main();

// 2-7
class LowestDigit {
  main() {
    let x = prompt("整数値：");
    console.log("最下位桁を除いた値は" + parseInt(parseInt(x) / 10) + "です。");
    console.log("10を減じた値は" + (x % 10) + "です。");
  }
}

let lowestDigit = new LowestDigit();
lowestDigit.main();

// 2-8
class SumAveDouble {
  main() {
    let x = prompt("xの値：");
    let y = prompt("yの値：");
    console.log("合計は" + (parseFloat(x) + parseFloat(y)));
    console.log("平均は" + (parseFloat(x) + parseFloat(y)) / 2);
  }
}

let sumAveDouble = new SumAveDouble();
sumAveDouble.main();

2 - 10;
class Globe {
  main() {
    const PI = 3.1416;

    console.log("球の表面積と面積を求めます。");
    let r = parseFloat(prompt());
    console.log("半径：" + r);

    console.log("表面積は" + 4 * PI * r * r + "です。");
    console.log("体積は" + (4 / 3.0) * PI * r * r * r + "です。");
  }
}

let globe = new Globe();
globe.main();

// 2-11
class RandomInteger {
  main() {
    let n1 = Math.floor(Math.random() * 9) + 1;
    let n2 = Math.floor(Math.random() * -9);
    let n3 = Math.floor(Math.random() * 90) + 10;
    console.log("3個の乱数を生成しました。");
    console.log("1桁の正の整数：" + n1);
    console.log("1桁の負の整数：" + n2);
    console.log("2桁の正の整数：" + n3);
  }
}

let randomInteger = new RandomInteger();
randomInteger.main();

// 2-12
class RandomPlusMinus5 {
  main() {
    let x = prompt("整数値：");

    console.log("その値+-5の値を生成しました。");
    console.log("値は" + (parseInt(x) - 5 + Math.floor(Math.random() * 11)));
  }
}

let randomPlusMinus5 = new RandomPlusMinus5();
randomPlusMinus5.main();

// 2-13
class RandomDouble {
  main() {
    console.log("3個の乱数を生成しました。");
    console.log("0.0以上 1.0未満" + Math.random());
    console.log("0.0以上10.0未満" + Math.random() * 10);
    console.log("-1.0以上1.0未満" + (2 * Math.random() - 1));
  }
}

let randomDouble = new RandomDouble();
randomDouble.main();

// 2-14
class Greeting {
  main() {
    let lastName = prompt("姓：");
    let firstName = prompt("名：");
    console.log("こんにちは" + lastName + firstName + "さん。");
  }
}

let greeting = new Greeting();
greeting.main();

// 2-15
class Address {
  main() {
    let address = prompt("住所：");
    console.log("お住まいは" + address + "ですね。");
  }
}

let address = new Address();
address.main();

// 2-16
class StringTester {
  main() {
    let s1 = "ABC";
    let s2 = "XYZ";

    console.log("文字列s1は" + s1 + "です。");
    console.log("文字列s2は" + s2 + "です。");

    s1 = "FBI";
    console.log("文字列s1は" + s1 + "です。");
    console.log("文字列s2は" + s2 + "です。");
  }
}

let stringTester = new StringTester();
stringTester.main();
