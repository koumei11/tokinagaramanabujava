// 7-1
class SumDiff {
  main() {
    console.log("82 + 17 = " + (87 + 17));
    console.log("82 - 17 = " + (82 - 17));
  }
}

let sumDiff = new SumDiff();
sumDiff.main();

// 7-2
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

// 7-3
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

// 7-4
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

// 7-5
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

// 7-6
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

// 7-7
class Max2A {
  main() {
    let a = parseInt(prompt("実数a："));
    let b = parseInt(prompt("実数b："));

    let max;
    if (a > b) {
      max = a;
    } else {
      max = b;
    }

    console.log("大きい方の値は" + max + "です。");
  }
}

let max2A = new Max2A();
max2A.main();

// 7-8
class Diff2B {
  main() {
    let a = parseInt(prompt("整数a："));
    let b = parseInt(prompt("整数b："));

    let diff = a >= b ? a - b : b - a;
    console.log("それらの差は" + diff + "です。");
  }
}

let diff2B = new Diff2B();
diff2B.main();

// 7-9
class Diff2Digits1 {
  main() {
    let a = parseInt(prompt("整数A："));
    let b = parseInt(prompt("整数B："));

    let diff = a >= b ? a - b : b - a;
    diff <= 10
      ? console.log("それらの差は10以下です。")
      : console.log("それらの差は11以上です。");
  }
}

let diff2Digits1 = new Diff2Digits1();
diff2Digits1.main();

// 7-10
class Min3 {
  main() {
    let a = parseInt(prompt("整数a："));
    let b = parseInt(prompt("整数b："));
    let c = parseInt(prompt("整数c："));

    let min = a;
    if (b < min) min = b;
    if (c < min) min = c;
    console.log("最小値は" + min + "です。");
  }
}

let min3 = new Min3();
min3.main();

// 7-11
class Med3 {
  main() {
    let a = parseInt(prompt("整数a："));
    let b = parseInt(prompt("整数b："));
    let c = parseInt(prompt("整数c："));

    let mid;
    if (a >= b) {
      if (b >= c) {
        mid = b;
      } else if (a > c) {
        mid = c;
      } else {
        mid = a;
      }
    } else if (b <= c) {
      mid = b;
    } else {
      mid = c;
    }

    console.log("中央値は" + mid + "です。");
  }
}

let med3 = new Med3();
med3.main();

// 7-12
class MinMaxEq {
  main() {
    let a = parseInt(prompt("整数a："));
    let b = parseInt(prompt("整数b："));

    if (a == b) {
      console.log("2つの値は同じです。");
    } else {
      if (a - b < 0) {
        let t = a;
        a = b;
        b = t;
      }
      console.log("小さい方の値は" + b + "です。");
      console.log("大きい方の値は" + a + "です。");
    }
  }
}

let minMaxEq = new MinMaxEq();
minMaxEq.main();

// 7-13
class Sort2Descending {
  main() {
    let a = parseInt(prompt("変数a:"));
    let b = parseInt(prompt("変数b:"));

    if (a < b) {
      let t = a;
      a = b;
      b = t;
    }
    console.log("a>=bとなるようにソートしました。");
    console.log("変数aは" + a + "です。");
    console.log("変数bは" + b + "です。");
  }
}
