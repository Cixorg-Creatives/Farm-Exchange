import { useState } from "react";
import Button from "../Button";

const LoadMore = ({ state, fetchDataFun, additionalParam }) => {
    const [loading, setLoading] = useState(false);

    if (state == null || state.totalDocs <= state.results.length) {
        return null;
    }

    const handleLoadMore = async () => {
        setLoading(true);
        await fetchDataFun({ ...additionalParam, page: state.page + 1 });
        setLoading(false);
    };

    return (
        <Button onClick={handleLoadMore} title="Load More" icon={loading ? "show" : ""} loading={loading} />
    );
};

export default LoadMore;
