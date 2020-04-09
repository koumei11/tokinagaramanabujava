// 4-1
class SignRepeat {
  main() {
    let retry;
    do {
      let n = parseInt(prompt("整数値："));
      if (n > 0) {
        console.log("その値は正です。");
      } else if (n < 0) {
        console.log("その値は負です。");
      } else {
        console.log("その値は0です。");
      }
      retry = parseInt(prompt("もう一度？ 1・・・Yes/0・・・No"));
    } while (retry === 1);
  }
}

let signRepeat = new SignRepeat();
signRepeat.main();

// 4-2
class ThreeDigits {
  main() {
    let x;
    do {
      x = parseInt(prompt("3桁の整数値："));
    } while (x < 100 || x > 999);
    console.log(x + "と入力しましたね。");
  }
}

let threeDigits = new ThreeDigits();
threeDigits.main();

// 4-3
class Kazuate2digits {
  main() {
    let rand = Math.floor(Math.random() * 90) + 10;
    let x;
    do {
      x = parseInt(prompt("いくつかな："));
      if (x > rand) {
        console.log("もっと小さい数だよ。");
      } else if (x < rand) {
        console.log("もっと大きい数だよ。");
      }
    } while (x !== rand);

    console.log("正解です。");
  }
}

let kazuate2digits = new Kazuate2digits();
kazuate2digits.main();

// 4-4
class EnumScope {
  main() {
    let a = parseInt(prompt("整数a："));
    let b = parseInt(prompt("整数b："));

    if (a > b) {
      let t = a;
      a = b;
      b = t;
    }

    do {
      console.log(a);
      a++;
    } while (a <= b);
  }
}

let enumScope = new EnumScope();
enumScope.main();

// 4-6
class CountDown {
  main() {
    console.log("カウントダウンします：");
    let x;
    do {
      console.log("正の値を入力してください。");
      x = parseInt(prompt("整数値："));
      console.log("整数値：" + x);
    } while (x <= 0);

    while (x > 0) {
      console.log(--x);
      console.log("現在のxの値：" + x);
    }
  }
}

let countDown = new CountDown();
countDown.main();

// 4-7
class PutAsterisk1 {
  main() {
    let n = parseInt(prompt("何個*を表示しますか："));
    if (n > 0) {
      let i = 0;
      while (i < n) {
        console.log("*");
        i++;
      }
    }
  }
}

let putAsterisk1 = new PutAsterisk1();
putAsterisk1.main();

// 4-8
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

// 4-9
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

// 4-10
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

// 4-11
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

// 4-12
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

// 4-13
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

// 4-14
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

// 4-15
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

// 4-16
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

// 4-17
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

// 4-18
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

// 4-19
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

// 4-20
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

// 4-21
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

// 4-22
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

// 4-23
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

// 4-24
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

// 4-25
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

// 4-26
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

// 4-27
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
