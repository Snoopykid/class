if(1+1 === 2) {
    console.log("정답입니다")
} else {
    console.log("틀렸습니다")
}
// 정답입니다
// undefined
const profile = {
    name : "철수",
    age : 12,
    school : "다람쥐초등학교"
}
// undefined
profile
// {name: '철수', age: 12, school: '다람쥐초등학교'}
if (profile.age >= 20) {
    console.log("성인입니다")
} else if ((profile.age >= 8) || (profile.age <= 19)) {
    console.log("학생입니다")
} else if(profile.age <= 7){
    console.log("어린이입니다")
} else  {
    console.log("잘못 입력하셨습니다")
}
// 학생입니다