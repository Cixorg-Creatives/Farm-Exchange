import { useState } from "react";
import Button from "../Button";

const LoadMore = ({ state, fetchDataFun }) => {
    const [loading, setLoading] = useState(false);

    if (!state || state.totalDocs <= state.results.length) {
        return null;
    }

    const handleLoadMore = async () => {
        setLoading(true);
        await fetchDataFun();
        setLoading(false);
    };

    return (
        <div className="flex justify-center mt-6">
            <Button onClick={handleLoadMore} title="Load More" variant="primary" icon={loading ? "show" : ""} loading={loading} />
        </div>
    );
};

export default LoadMore;
