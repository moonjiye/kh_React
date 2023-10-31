import { useState } from "react";
import axios from "axios"; // 비동기 통신 라이브러리

const Axios = () => {
    const [data, setData] = useState(null);
    const onClick = async () => { // 비동기 함수
        const response = await axios.get("https://jsonplaceholder.typicode.com/todos/1") //대신 대기를 맡아주는 놈
        setData(response.data); // 값이 들어올때 렌더링
    };
    return (
        <>
            <div>
                <button onClick={onClick}>블러오기</button>
            </div>
            {data && (
            <textarea row={7} value={JSON.stringify(data)}></textarea>
            )}
        </>
    );
};

export default Axios;