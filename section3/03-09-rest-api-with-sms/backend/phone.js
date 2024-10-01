import coolsms from 'coolsms-node-sdk';
const mysms = coolsms.default;

import 'dotenv/config';

export function checkPhone(myphone){
    if(myphone.length < 10 || myphone.length > 11){
        console.log("에러 발생!!! 핸드폰 번호를 제대로 입력해 주세요!!!")
        return false
    } else {
        return true
    }
}

export function getToken(){
    const result = String(Math.floor(Math.random() * 1000000)).padStart(6, "0")
    console.log(result)
    return(result)
}

export async function sendTokenToSMS(myphone, result){

    // apiKey, apiSecret 설정
    const messageService = new mysms(process.env.MY_SMS_API_KEY, process.env.MY_SMS_API_SECRET);


    // 2건 이상의 메시지를 발송할 때는 sendMany, 단일 건 메시지 발송은 sendOne을 이용해야 합니다. 
    await messageService.sendOne({ // <- sendOne은 하나만 보내기 때문에 ({}) 객체 형태이지만 sendMany에서는 배열이여야 하기 때문에 ([])이다. 
    
    to: myphone,
    from: process.env.MY_REAL_NUMBER,
    text: `[BI] 안녕하세요! 요청하신 인증번호는 ${result} 입니다.`
    
    // sendMany일 때는 1만건까지 추가 가능
    })
    .then(res => console.log(res))
    .catch(err => console.error(err));

    // console.log(myphone + "번호로 인증번호 " + result + "를 전송합니다.")
}