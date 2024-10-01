import axios from 'axios'

const fetchAsync = () => {
    const result = axios.get("https://koreanjson.com/posts/1")
    console.log("비동기 방식: ", result) // Promise { <pending> }
}

fetchAsync()

/* async function fetchSync() {  함수 중복 선언 문제를 피하자(화살표 함수로 변경)
    const result = await axios.get("https://koreanjson.com/posts/1")
    console.log("동기 방식: ", result) // 제대로된 결과 => { status: 200, ... }
    console.log("동기 방식: ", result.data.title)
    console.log("동기 방식: ", result.data.content)
    console.log("동기 방식: ", result.data.id)
    console.log("동기 방식: ", result.data.createdAt)
    console.log("동기 방식: ", result.data.updatedAt)
    console.log("동기 방식: ", result.data.UserId)
} */

const fetchSync = async () =>  {  
    const result = await axios.get("https://koreanjson.com/posts/1")
    console.log("동기 방식: ", result) // 제대로된 결과 => { status: 200, ... }
    console.log("동기 방식: ", result.data.title)
    console.log("동기 방식: ", result.data.content)
    console.log("동기 방식: ", result.data.id)
    console.log("동기 방식: ", result.data.createdAt)
    console.log("동기 방식: ", result.data.updatedAt)
    console.log("동기 방식: ", result.data.UserId)
    }

fetchSync()