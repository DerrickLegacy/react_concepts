import { useEffect, useState } from "react"
import axios from "axios"

const UseQueryData = (url) => {
    const [data, setData] = useState(null)
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(null)

    useEffect(() => {
        if (!url) {
            return;
        }

        const source = axios.CancelToken.source()

        const fetchData = async () => {
            setIsLoading(true);

            try {
                const response = await axios.get(url, { cancelToken: source.token });

                if (response.status === 200) {
                    setData(response.data);
                } else {
                    throw new Error(`Error : ${response.status}, ${response.statusText}`);
                }

            } catch (error) {
                if (axios.isCancel(error)) {
                    console.log("Request canceled ", error.message);
                } else {
                    console.error(error.message);
                    setError(error);
                }
            } finally {
                setIsLoading(false);
            }
        }

        fetchData();

        return () => {
            source.cancel("Operation Canceled by User");
        };

    }, [url])

    return [data, error, isLoading];
}

export default UseQueryData;