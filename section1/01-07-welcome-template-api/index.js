function checkEmail(email){
    if(email === undefined || email.includes("@") === false){
        console.log("에러 발생!!! 이메일 주소를 제대로 입력해 주세요!!!")
        return false
    } else {
        return true
    }
}

function getWelcomeTemplate({name, age, school, createdAt}){
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
    // console.log(mytemplate)
    return mytemplate
}

function sendTemplateToEmail(myemail, result){
    console.log(myemail + "이메일로 가입환영 템플릿  " + result + "를 전송합니다.")
}

function createUser({ name, age, school, email, createdAt }){
    // 1. 이메일이 정상인지 확인(1-존재여부, 2-"@"포함여부)
    const isValid = checkEmail(email)
    if(isValid === false) return

    // 2. 가입환영 템플릿 만들기
    const myTemplate = getWelcomeTemplate({ name, age, school, createdAt })


    // 3. 이메일에 가입환영 템플릿 전송하기
    sendTemplateToEmail(email, myTemplate)

}

const name = "철수"
const age = 8
const school = "다람쥐초등학교"
const email = "a@a.com"
const createdAt = getToday()
createUser({ name, age, school, email, createdAt })

function getToday(){
    const today = new Date()

    const year = today.getFullYear()
    let month = today.getMonth() + 1
    let date = today.getDate()

    month = month < 10 ? '0' + month : month;
    date = date < 10 ? '0' + date : date;

    const dateForm = year + "-" + month + "-" + date

    return dateForm
}
