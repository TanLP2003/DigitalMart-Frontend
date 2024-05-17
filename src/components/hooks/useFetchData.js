import { useEffect } from "react";
import { useState } from "react"

const useFetchData = (apiFuncs) => {
    const [isFetched, setFetched] = useState(false);
    useEffect(() => {
        Promise.all(apiFuncs())
            .then(() => {
                setFetched(true);
            })
    }, [])
    return isFetched;
}

export default useFetchData;