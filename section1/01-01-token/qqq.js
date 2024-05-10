console.log("안녕하세요!!");

function getToken() {
    // 숫자 결과를 먼저 문자열로 변환
    const result = String(Math.floor(Math.random() * 1000000)).padStart(6, "0");
    console.log(result);
}

getToken();
