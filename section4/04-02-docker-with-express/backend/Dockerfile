# 1. 운영체제 및 프로그램 설치(일일이 입력하는 방식)
# FROM ubuntu:22.04

# RUN sudo apt install nodejs
# RUN sudo npm install -g yarn

# 1. 운영체제 및 프로그램 설치(이미 리눅스, NODE, NPM, NPM, YARN 까지 모두 깔려있는 컴퓨터(이미지) 다운로드하는 방식)
FROM node:14

# 2. 내 컴퓨터에 있는 폴더나 파일을 도커 컴퓨터 안으로 복사하기
# RUN mkdir myfolder    => 아래에서 COPY할 때, 자동으로 만들어주므로 굳이 필요 없음
COPY . /myfolder/
# RUN cd ./myfolder/    => RUN과 WORKDIR 둘 중 하나 고르면 됨
WORKDIR /myfolder/
RUN yarn install

# 3. 도커 안에서 index.js 실행시키기.
CMD yarn start:dev