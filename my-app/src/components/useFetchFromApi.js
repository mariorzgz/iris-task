import { useState, useEffect } from 'react';

export default function useFetchFromApi(){

  const [projects, setProjects] = useState([]);
  const [url, setUrl] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isInitial, setIsInitial] = useState(false)

  useEffect(() => {
      if(url !== ''){
      const fetchData = () => {
      fetch(url)
        .then((setIsInitial(false)))
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
      }else{
        setIsInitial(true)
      }
  }, [url]);

  return [{ projects, isLoading, isError, isInitial}, setUrl];
}
