import { useState, useEffect } from 'react';

export default function useFetchFromApi(){

  const [projects, setProjects] = useState([]);
  const [url, setUrl] = useState(`https://libraries.io/api/search?q=grunt&api_key=fa203ef05e60f974b8999be7bb8a3d79`);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
      const fetchData = () => {
      fetch(url)
        .then((setIsLoading(true)))
        .then((setIsError(false)))
        .then((response) => response.json())
        .then((data) => {
            setProjects(data);
            setIsLoading(false);
        })
        .catch((err) => {
            console.log(err.message);
            setIsError(true);
        });

        }
        fetchData();
  }, [url]);

  return [{ projects, isLoading, isError}, setUrl];
}
