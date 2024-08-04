import React, { useEffect, useState } from "react";
import { fetchArticlesData } from "./api";

const ApiTask = () => {
  const [data, setData] = useState<any>();

  useEffect(() => {
    const getUsers = async () => {
      try {
        const articlesData = await fetchArticlesData();
        setData(articlesData);
      } catch (err) {
        //handle err
      }
    };

    getUsers();
  }, []);

  return (
    <>
      <p>API Data</p>
      {data?.response?.docs.map((el) => {
        return <div key={el.id}>{el.abstract}</div>;
      })}
    </>
  );
};

export default ApiTask;
