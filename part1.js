// 1-1
class Hello {
  main() {
    console.log("初めてのJavaプログラム。");
    console.log("画面に出力しています。");
  }
}

let hello = new Hello();
hello.main();

// 1-3
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

// 1-4
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

// 1-5
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
