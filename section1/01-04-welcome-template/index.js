function getWelcomeTemplate({name, age, school, createdAt}){ // 실무에서는 객체를 할당하여 변수 하나가 빠지더라도 안전하도록 설계한다.
    const mytemplate = `
    <html>
        <body>
            <h1>${name}님 가입을 환영합니다!!!</h1>
            <hr />
            <div>이름: ${name}</div>
            <div>나이: ${age}</div>
            <div>학교: ${school}</div>
            <div>가입일: ${createdAt}</div>
        </body>
    </html>
    `
    console.log(mytemplate)
}

const name = "철수"
const age = 10
const school = "다람쥐초등학교"
const createdAt = "2020-10-10"

getWelcomeTemplate({name, age, school, createdAt})