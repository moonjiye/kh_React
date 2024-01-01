import React from "react";
import { useNavigate } from "react-router-dom";

const MyPage = () => {
    const navigate = useNavigate();
    const isLogin = false;

    if(isLogin) {
        return (
            <>
                <h1>MyPage</h1>
                <p>여기는 MyPage 입니다.</p>
                {/* <Link to="/">Home으로 이동</Link> */}
                <button onClick={() => navigate(-1)}>뒤로 가기</button>
            </>
        );
    } else {
        return <navigate to="/login" replace={true} />
    }
    
};

export default MyPage;