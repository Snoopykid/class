# # 1. 운영체제 및 프로그램 설치(하나 하나 입력하는 방식)
# FROM ubuntu:22.04
# # 2. 위에 설치하는 우분투 컴퓨터에 설치하는 것. 권한이 필요할 수 있으니 sudo로 진행
# RUN sudo apt install nodejs
# RUN sudo npm install -g yarn



# 1. 운영체제 및 프로그램 설치(이미 리눅스, node, npm, yarn까지 모두 깔려있는 컴퓨터를 다운로드 하는 방식)
# ':'는 버전을 의미
FROM node:14

# 2. 내 컴퓨터에 있는 폴더나 파일을 도커 컴퓨터 안으로 복사하기
COPY . /myfolder/
WORKDIR /myfolder/
RUN yarn install

# 3. 도커 안에서 index.js 실행시키기. RUN과의 차이는 RUN은 도커이미지에 포함. CMD는 도커 이미지에 미포함.
#   CMD는 도커이미지가 다른 컴퓨터에 저장 완료되고 나서 실행될 때 진행됨. 또한 CMD는 하나의 DOCKER파일에서
#   한 번만 실행할 수 있음.
CMD yarn start:dev