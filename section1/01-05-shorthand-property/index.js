function qqq(aaa){
    console.log(aaa)
    console.log(aaa.name)
    console.log(aaa.age)
    console.log(aaa.school) 
}

const name = "철수"
const age = 12
const school = "다람쥐초등학교"

const profile = {name, age, school} // 키와 밸류가 같아서, 밸류를 생략. -> shorthand-property

qqq(profile) // 1. 변수에 담아서 보내주기
qqq({name, age, school}) // 2. 그냥 통째로 보내주기