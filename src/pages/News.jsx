import { useState, useCallback } from "react";
import NewsList from "../component/NewsList";
import Categories from "../component/Categories";

const News = () => {
    const [category, setCategory] = useState("all");
    const onSelect = useCallback(category => setCategory(category), []);
    return (
        <>
            <Categories category={category} onSelect={onselect} />
            <NewsList category={category}/>
        </>
    );
};

export default News;