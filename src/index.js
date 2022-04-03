// ###### 変数について ############

// var val1 = "実際に入力したい値";
// console.log(val1);

// val1 = "上書き";
// console.log(val1);

// var val1 = "再宣言";
// console.log(val1);

// let val2 = "let 変数";
// console.log(val2);

// val2 = "let は上書き可能";
// console.log(val2);

// let val2 = "再宣言";
// console.log(val2);

// const val3 = "const で宣言";
// console.log(val3);
// val3 = "上書き";
// console.log(val3);

// const val4 = {
//   name: "名前",
//   age:  28
// };
// console.log(val4);

// val4.name = "jak";
// val4.addres = "Hiroshima"

// const val5 = ["dog", "cat"];
// val5[0] = "bird";

// console.log(val5);

// ###### テンプレート文字列 #######
// const name = "海老名";
// const age = 26;

// const message = "私の名前は" + name + "です。年齢は" + age + "です";
// console.log(message);

// // バッククォートで囲む。
// console.log(`私の名前は${name}です。年齢は${age}です`);

// ##### アロー関数 ##########
// 従来
// const func1 = function (arg) {
//   console.log(`func1 が実行されました。引数は${arg}です`);
// };

// func1("えびな");

// const func2 = (arg2) => {
//   console.log(`func2 が実行されました。引数は${arg2}です`);
// };

// func2("しょうへい");

// const func3 = (num1, num2) => num1 + num2;

// console.log(func3(10, 20));

// ########### 分割代入 ##########
// const myProfile = {
//   name: "えびな",
//   age: 26
// };

// const message = `私の名前は${myProfile.name}です。年齢は${myProfile.age}です。`;
// console.log(message);

// // ### 分割代入 ###
// const { name, age } = myProfile;
// const message2 = `私の名前は${name}です。年齢は${age}です。`;
// console.log(message2);

// const myProfile = ["えびな", 26];
// const [name, age] = myProfile;
// const message3 = `私の名前は${name}です。年齢は${age}です。`;
// console.log(message3);

// ####### デフォルト値 ##########
// const sayHello = (name = "えびな") => console.log(`こんにちは${name}さん`);
// sayHello("いけめん");

// ####### スプレッド構文 ########
// 配列の展開

// const array1 = [1, 2, 3];
// console.log(array1);
// console.log(...array1);

// const sumFunc = (num1, num2) => console.log(num1 + num2);
// sumFunc(array1[0], array1[1]);

// sumFunc(...array1);

// ### まとめる ###
// const array2 = [1, 2, 3, 4, 5];
// const [num1, num2, ...array3] = array2;
// console.log(num1)
// console.log(num2)

// 配列のコピーや結合
// const arr4 = [10, 20];
// const arr5 = [30, 40];

// const arr6 = [...arr4];
// console.log(arr6);

// ##### Map, filter ###
const names = ["tanaka", "yamada", "ebina"];
// for (let index = 0; index < names.length; index++) {
//   console.log(names[index]);
// }
// names.forEach((e) => console.log(e));

// const names2 = names.map((name) => {
//   return "shohei";
// });
// console.log(names2)

// const mapName = names.map((name) => console.log(name));
// console.log(mapName)

// const numbers = [1, 2, 3, 4, 5];
// const newNums = numbers.filter((num) => {
//   return num % 2 === 0;
// });
// console.log(newNums);

// names.map((name, index) => console.log(`${index + 1}は${name}`));

// const newNames = names.map((name) => {
//   if (name !== "ebina") {
//     return `${name}さん`;
//   } else {
//     return name;
//   }
// });
// console.log(newNames);

// Ruby でいうと map は map + each, filter は select

// ##### 三項演算子 ######
// const val1 = 1 > 0 ? "trueです" : "falseです";
// console.log(val1);

// const num = 1300;
// console.log(num.toLocaleString());

// const formattedNum =
//   typeof num === "number" ? num.toLocaleString() : "数値を入力してください";
// console.log(formattedNum);

// const checkSum = (num1, num2) => {
//   return num1 + num2 > 100 ? "100を超えています" : "許容範囲内です。";
// };

// console.log(checkSum(40, 70));

// ### 論理演算子のほんとうの意味を知る ###
// const flag1 = true;
// const flag2 = false;

// if (flag1 || flag2) {
//   console.log("1か2は true です");
// }

// if (flag1 && flag2) {
//   console.log("1も2も true です");
// }

// const num = 100;
// const fee = num || "金額未設定です";
// console.log(fee);

const num2 = null;
const fee2 = num2 && "なにか設定されています";
console.log(fee2);
