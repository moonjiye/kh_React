import { Link, Outlet } from "react-router-dom";
// 자식 컴포넌트 렌더링되는 위치를 잡아줌

const Articles = () => {
  return (
    <>
        <Outlet />

        <ul>
        <li>
            <Link to="/articles/1">게시글 1</Link>
        </li>
        <li>
            <Link to="/articles/2">게시글2</Link>
        </li>
        <li>
            <Link to="/articles/3">게시글3</Link>
        </li>
        </ul>
    </>
  );
};

export default Articles;