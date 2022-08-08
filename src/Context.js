import React, { useState, useEffect, createContext } from "react";

const Context = createContext();

function StateProvider({ children }) {
  const [news, setNews] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages] = useState(15);

  const lastPost = currentPage * totalPages;
  const firstPost = lastPost - totalPages;
  const currentPosts = news.slice(firstPost, lastPost);

  //   onClick handle pagination
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "b3af1c2478msh77279a75dc3acbep13f2d7jsna957a919a1f1",
        "X-RapidAPI-Host":
          "vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com",
      },
    };
    const getData = async () => {
      const response = await fetch(
        `https://vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com/api/news/get-coronavirus-news/${currentPage}`,
        options
      );
      const data = await response.json();
      setNews(data.news);
    };

    getData();

    return () => {
      console.log("fetching data...");
    };
  }, [currentPage]);
  return (
    <Context.Provider value={{ news, paginate, totalPages, currentPosts }}>
      {children}
    </Context.Provider>
  );
}

export { Context, StateProvider };
