/**
 * const, let
 */
var val01 = "hogehoge";
console.log(val01);
// var 上書き可能
val01 = "over over!!";
console.log(val01);
// var 再宣言
var val01 = "hogehoge2222";
console.log(val01);

//
let val02 = "変数22";
console.log(val02);
// let 上書き可能
val02 = "hogehoge222";
console.log(val02);
// let 再宣言はだめ
// let val02 = "aaa";

// const 上書き・再宣言不可
const val03 = "aaaaa";
console.log(val03);
// val03 = 'bbbbbb';

// object
const val04 = {
  name: "aaaaa",
  age: 30
};
console.log(val04);
// objectは データの中身を更新できる
val04.name = "bbbbb";
console.log(val04);
// constで定義したオブジェクトは
// プロパティの変更が可能

const val05 = ["dog", "cat"];
console.log(val05);
val05[0] = "bbbbbb";
console.log(val05);
val05.push("ggggg");
console.log(val05);
// object は 基本 const を使う
