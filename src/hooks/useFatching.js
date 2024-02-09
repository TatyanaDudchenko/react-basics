import { useState, useCallback } from "react";

export const useFetching = (callback) => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState();

    const fetching = useCallback((...args) => {
        return new Promise((resolve) => {
            setIsLoading(true);
            callback(...args)
            .then(() => {
                setIsLoading(false);
                resolve();
            })
            .catch((e) => {
                setError(e instanceof Error ? e.message : 'Ой, что-то пошло не так');
                setIsLoading(false);
                resolve();
            })
        })
    }, [callback])

    return [fetching, isLoading, error];

}