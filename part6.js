// 6-1
class Hello {
  main() {
    console.log("初めてのJavaプログラム。");
    console.log("画面に出力しています。");
  }
}

let hello = new Hello();
hello.main();

// 6-3
class Hello1A {
  main() {
    console.log("初めてのJavaプログラム。画面に出力しています。");
  }
}

class Hello1C {
  main() {
    console.log("初めてのJavaプログラム。" + "画面に出力しています。");
  }
}

let hello1A = new Hello1A();
hello1A.main();

let hello1C = new Hello1C();
hello1C.main();

// 6-4
class PrintName1A {
  main() {
    console.log("金");
    console.log("城");
    console.log("宏");
    console.log("明");
  }
}

let printName1A = new PrintName1A();
printName1A.main();

class PrintName1B {
  main() {
    console.log("金\n城\n宏\n明");
  }
}

let printName1B = new PrintName1B();
printName1B.main();

// 6-5
class PrintName2A {
  main() {
    console.log("金");
    console.log("城");
    console.log("\n");
    console.log("宏");
    console.log("明");
  }
}

class PrintName2B {
  main() {
    console.log("金\n城\n\n宏\n明");
  }
}

let printName2A = new PrintName2A();
printName2A.main();

let printName2B = new PrintName2B();
printName2B.main();

// 6-6
class PlunMinus10 {
  main() {
    let x = prompt("整数値：");
    console.log("10を加えた値は" + (parseInt(x) + 10) + "です。");
    console.log("10を減じた値は" + (x - 10) + "です。");
  }
}

let plunMinus10 = new PlunMinus10();
plunMinus10.main();

// 6-7
class LowestDigit {
  main() {
    let x = prompt("整数値：");
    console.log("最下位桁を除いた値は" + parseInt(parseInt(x) / 10) + "です。");
    console.log("10を減じた値は" + (x % 10) + "です。");
  }
}

let lowestDigit = new LowestDigit();
lowestDigit.main();

// 6-8
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

// 6-9
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

// 6-11
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

// 6-12
class RandomPlusMinus5 {
  main() {
    let x = prompt("整数値：");

    console.log("その値+-5の値を生成しました。");
    console.log("値は" + (parseInt(x) - 5 + Math.floor(Math.random() * 11)));
  }
}

let randomPlusMinus5 = new RandomPlusMinus5();
randomPlusMinus5.main();

// 6-13
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

// 6-14
class Greeting {
  main() {
    let lastName = prompt("姓：");
    let firstName = prompt("名：");
    console.log("こんにちは" + lastName + firstName + "さん。");
  }
}

let greeting = new Greeting();
greeting.main();

// 6-15
class Address {
  main() {
    let address = prompt("住所：");
    console.log("お住まいは" + address + "ですね。");
  }
}

let address = new Address();
address.main();

// 6-16
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
