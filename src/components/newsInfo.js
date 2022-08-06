import React from "react";
import { Card, Grid, Text, Link } from "@nextui-org/react";
import { IoNewspaperOutline } from "react-icons/io5";

const newsInfo = ({ title, content, reference, date, link }) => {
  return (
    <div>
      <Card
        variant="bordered"
        isHoverable
        css={{ p: "0.8rem", minHeight: "18rem", width: "100%" }}
      >
        <Card.Header>
          <IoNewspaperOutline size={40} />
          <Grid.Container css={{ padding: "0.5rem" }}>
            <Grid xs={12}>
              <Link color="primary" href={link} css={{ fontWeight: "500" }}>
                {title}
              </Link>
            </Grid>
            <Grid xs={12}>
              <Text css={{ color: "$accents8" }}>{date}</Text>
            </Grid>
          </Grid.Container>
        </Card.Header>

        <Card.Body css={{ width: "90%" }}>
          <Text css={{ lineHeight: "1.5rem" }}>{content}</Text>
        </Card.Body>

        <Card.Footer>
          <Text css={{ color: "#707070", fontWeight: "500" }}>{reference}</Text>
        </Card.Footer>
      </Card>
    </div>
  );
};

export default newsInfo;
