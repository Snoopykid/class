// index.js

import {
  checkValidationEmail,
  getWelcomeTemplate,
  sendTemplateToEmail,
} from "./email.js";

// ... 생략

app.post("/users", (req, res) => {
  const user = req.body.myuser;

  // 1. 이메일이 정상인지 확인(1-존재여부, 2-"@"포함여부)
  const isValid = checkValidationEmail(user.email);
  if (isValid) {
    // 2. 가입환영 템플릿 만들기
    const mytemplate = getWelcomeTemplate(user);

    // 3. 이메일에 가입환영 템플릿 전송하기
    sendTemplateToEmail(user.email, mytemplate);
    res.send("가입완료!!!");
  }
});

app.app.listen(3000, () => {
  console.log("백엔드 API 서버가 켜졌어요!!!");
});
