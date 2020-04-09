// 9-1
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

// 9-2
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

// 9-3
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

// 9-4
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

// 9-5
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

// 9-6
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

let sort2Descending = new Sort2Descending();
sort2Descending.main();

// 9-7
class Sort3 {
  main() {
    let a = parseInt(prompt("変数a："));
    let b = parseInt(prompt("変数b："));
    let c = parseInt(prompt("変数c："));

    if (a > b) {
      let t = a;
      a = b;
      b = t;
    }
    if (b > c) {
      let t = b;
      b = c;
      c = t;
    }
    if (a > b) {
      let t = a;
      a = b;
      b = t;
    }

    console.log("a<=b<=cとなるようにソートしました。");
    console.log("変数aは" + a + "です。");
    console.log("変数bは" + b + "です。");
    console.log("変数cは" + c + "です。");
  }
}
// 9-8
class Absolute1 {
  main() {
    let n = prompt("整数値：");
    if (n < 0) {
      n = -n;
    }
    console.log("その絶対値は" + n + "です。");
  }
}

let absolute1 = new Absolute1();
absolute1.main();

// 9-9
class Measure1 {
  main() {
    let a = prompt("変数A：");
    let b = prompt("変数B：");

    if (a % b === 0) {
      console.log("BはAの約数です。");
    } else {
      console.log("BはAの約数ではありません。");
    }
  }
}

let measure1 = new Measure1();
measure1.main();

// 9-10
class Measure2 {
  main() {
    let a = prompt("変数A：");
    let b = prompt("変数B：");

    if (!(a % b === 0)) {
      console.log("BはAの約数ではありません。");
    } else {
      console.log("BはAの約数です。");
    }
  }
}

let measure2 = new Measure2();
measure2.main();

// 9-11
class Sign {
  main() {
    let n = parseInt(prompt("整数値："));
    if (n > 0) {
      console.log("その値は正です。");
    } else if (n < 0) {
      console.log("その値は負です。");
    } else {
      console.log("その値は0です。");
    }
  }
}

let sign = new Sign();
sign.main();

// 9-12
class BalanceWrong {
  main() {
    let a = parseInt(prompt("変数a："));
    let b = parseInt(prompt("変数b："));

    let diff = a - b;
    if (diff > 0) {
      console.log("aの方が大きいです。");
    } else if (diff < 0) {
      console.log("bの方が大きいです。");
    } else {
      console.log("aとbは同値です。");
    }
  }
}

let balanceWrong = new BalanceWrong();
balanceWrong.main();

// 9-13
class GoInto5 {
  main() {
    let n = prompt("整数値：");
    if (n > 0) {
      n % 5 === 0
        ? console.log("その値は5で割り切れます。")
        : console.log("その値は5で割り切れません。");
    } else {
      console.log("正でない値が入力されました。");
    }
  }
}

let goInto5 = new GoInto5();
goInto5.main();

// 9-14
class MultipleOf10 {
  main() {
    let n = prompt("整数値：");
    if (n > 0) {
      n % 10 === 0
        ? console.log("その値は10の倍数です。")
        : console.log("その値は10の倍数ではありません。");
    } else {
      console.log("正でない値が入力されました。");
    }
  }
}

let multipleOf10 = new MultipleOf10();
multipleOf10.main();

// 9-15
class Modulo3 {
  main() {
    let n = prompt("整数値：");
    if (n > 0) {
      if (n % 3 === 0) {
        console.log("その値は3で割り切れます。");
      } else if (n % 3 === 1) {
        console.log("その値を3で割った余りは1です。");
      } else {
        console.log("その値を3で割った余りは2です。");
      }
    } else {
      console.log("正でない値が入力されました。");
    }
  }
}

let modulo3 = new Modulo3();
modulo3.main();

// 9-16
class Grade1 {
  main() {
    let point = parseInt(prompt("点数："));

    if (point >= 0 && point <= 59) {
      console.log("不可");
    } else if (point >= 60 && point <= 69) {
      console.log("可");
    } else if (point >= 70 && point <= 79) {
      console.log("良");
    } else if (point >= 80 && point <= 100) {
      console.log("優");
    } else {
      console.log("不正な点数です。");
    }
  }
}

let grade1 = new Grade1();
grade1.main();

// 9-17
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

// 9-18
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

// 9-19
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

// 9-20
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

// 9-21
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

// 9-22
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
