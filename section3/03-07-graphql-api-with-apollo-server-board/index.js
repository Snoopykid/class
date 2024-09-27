import {ApolloServer} from '@apollo/server'
import {startStandaloneServer} from '@apollo/server/standalone'

const typeDefs = `#graphql
    input CreateBoardInput{
    writer: String
    title: String 
    contents: String
    }

    type MyResult {
        number: Int
        Writer: String
        title: String
        contents: String
    }

    type Query {
        # fetchBoards: MyResult # 객체 1개
        fetchBoards: [MyResult] # 배열 안에 객체 1개 이상을 의미!
    }

    type Mutation {
        # createBoard(writer: String, title: String, contents: String): String
        createBoard(createBoardInput: CreateBoardInput!): String
    }
`


const resolvers = {
    Query: {
        fetchBoards: (parent, args, context, info) => {
            // 1. DB에 접속 후, 데이터를 조회 => 데이터를 조회했다고 가정
    const result = [
        { number: 1, writer: "철수", title: "제목입니다~~", contents: "내용이에요!!!"},
        { number: 2, writer: "영회", title: "영희입니다~~", contents: "영희이에요!!!"},
        { number: 3, writer: "훈이", title: "훈이입니다~~", contents: "훈이에요!!!"}
    ]

    // 2. DB에서 꺼내온 결과를 브라우저에 응답(response) 전송
            return result
        }
    },

    Mutation: {
        createBoard: (parent, args, context, info) => {   
            // 1. 브라우저에서 보내준 데이터 확인하기
            console.log(args.createBoardInput.writer)
            console.log(args.createBoardInput.title)
            console.log(args.createBoardInput.contents)

            // 2. DB에 접속 후, 데이터를 저장 => 데이터 저장했다고 가정

            // 3. DB에 저장된 결과를 브라우저에 응답(response) 전송
            return "게시물 등록에 성공하였습니다."
        }
    }
}

const server = new ApolloServer({
    typeDefs,         // 객체에서 키와 밸류가 같은 경우가 있다. 이런 경우에는 밸류를 생략할 수 있다.
    resolvers: resolvers,
    cors: true,                                                             // 모든 사이트 허용하고 싶을 때
    // cors: {origin: ["http://localhost:4000/", "http://localhost:3000"]} // 특정 사이트만 지정하고 싶을 때
})

startStandaloneServer(server)