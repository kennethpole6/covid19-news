import React, { useState, useEffect } from "react";
import { Divider, Grid, Pagination, Text } from "@nextui-org/react";
import CardsData from "./components/newsInfo";
import Footer from "./components/Footer";

function App() {
  const [news, setNews] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages] = useState(15);

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

  // pagination using slice(initalvalue, endvalue)
  const lastPost = currentPage * totalPages;
  const firstPost = lastPost - totalPages;
  const currentPosts = news.slice(firstPost, lastPost);

  // onClick handle pagination
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <Grid.Container gap={1} justify="flex-start" alignItems="center">
        <Grid md={12} xs={12}>
          <h1>Top Headlines.</h1>
        </Grid>
        <Grid md={12} xs={12}>
          <Text>Latest COVID-19 news from around the world.</Text>
        </Grid>
        {news.map((item) => {
          return (
            <Grid md={6} xs={12} key={item.news_id}>
              <CardsData
                title={item.title}
                reference={item.reference}
                date={item.pubDate}
                content={item.content}
                link={item.link}
              />
            </Grid>
          );
        })}

        <Grid md={12} xs={12}>
          <Pagination
            css={{ margin: ".5rem auto" }}
            total={totalPages}
            loop={true}
            controls={false}
            initialPage={currentPosts}
            onChange={paginate}
          />
        </Grid>
      </Grid.Container>
      <Divider />
      <Footer />
    </>
  );
}

export default App;
