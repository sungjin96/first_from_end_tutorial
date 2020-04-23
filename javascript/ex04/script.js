/* ES7 (ES2016) */
// 제곱이 간편해진다!!!!!!!!
const cube = (y) => y ** 3;

/* ES8 (ES2017) */
// 앞 뒤에 뭔가 수정하기 편해짐
console.log("test".padStart(10)); // "          test"
console.log("test".padEnd(10)); // "test          "

let obj = {
  username0: "Santa",
  username1: "Rudolf",
  username2: "Mr.Grinch",
};

// 키와 인덱스 조회 가능
Object.keys(obj).forEach((key, index) => {
  console.log(key, obj[key]);
});

// Value만 조회 가능
Object.values(obj).forEach((value) => {
  console.log(value);
});

// 객체를 배열로 변환
Object.entries(obj).forEach((value) => {
  console.log(value);
});

/* ES10 (ES2019) */
// 중첩 배열 삭제 ( [] 이렇게 한 겹당 1!, 만약 [[[[[[[]]]]]]] 7겹이니 array.flat(7)를 입력하면 됌 )
const array = [1, [2, 3], [4, 5]];
array.flat(1); // 결과 : [1,2,3,4,5]
// 데이터 정리도 됨
const entries = ["bob", "sally", , , , , , , , "cindy"];
entries.flat(); // 결과 ['bob', 'sally', 'cindy']; r

const userProfiles = [
  ["commanderTom", 23],
  ["derekZlane", 20],
];
// 배열을 오브젝트로 변환
const obj = Object.fromEntries(userProfiles);
console.log(obj); // 결과 => [{commanderTom, 23}, {derekZlane, 20}]
// 오브젝트를 배열로 변환
console.log(obj.entries(obj)); // 결과 => [["commanderTom", 23], [derekZlane, 20]]
// JAVA의 tryCatch랑 똑같은 기능
try {

}catch(e) {

}
