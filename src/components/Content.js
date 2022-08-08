import React, { useContext } from "react";
import { Grid, Pagination } from "@nextui-org/react";
import CardsData from "./newsInfo";
import { Context } from "../Context";

const Content = () => {
  const { news, paginate, totalPages, currentPosts } = useContext(Context);
  return (
    <div>
      <Grid.Container gap={2}>
        {news?.map((item) => {
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
            initialPage={currentPosts}
            onChange={paginate}
          />
        </Grid>
      </Grid.Container>
    </div>
  );
};

export default Content;
