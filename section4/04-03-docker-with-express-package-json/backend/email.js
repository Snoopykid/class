import { getToday } from "./utils.js"
import nodemailer from 'nodemailer'
import 'dotenv/config';

export function checkEmail(email){
    if(email === undefined || email.includes("@") === false){
        console.log("에러 발생!!! 이메일 주소를 제대로 입력해 주세요!!!")
        return false
    } else {
        return true
    }
}

export function getWelcomeTemplate({name, age, school}){
    const mytemplate = `
    <html>
        <body>
            <div style="display: flex; flex-direction: column; align-items: center;">
                <div style="width: 500px;">
                    <h1>${name}님 가입을 환영합니다!!!</h1>
                    <hr />
                    <div style="color: red;">이름: ${name}</div>
                    <div>나이: ${age}</div>
                    <div>학교: ${school}</div>
                    <div>가입일: ${getToday()}</div>
                </div>
            </div>
        </body>
    </html>
    `
    // console.log(mytemplate)
    return mytemplate
}

export async function sendTemplateToEmail(myemail, result){
    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.MY_GMAIL,
            pass: process.env.MY_GMAIL_PASS
        }
    })

    const res = await transporter.sendMail({
        from: process.env.MY_GMAIL,
        to: myemail,
        subject: "[BI] 가입을 축하합니다!",
        html: result
    })
    console.log(res)

    // console.log(myemail + "이메일로 가입환영 템플릿  " + result + "를 전송합니다.")
}
