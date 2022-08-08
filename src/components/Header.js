import { Grid, Text } from "@nextui-org/react";

const Header = () => {
  return (
    <div>
      <Grid.Container gap={1} justify="flex-start" alignItems="center">
        <Grid md={12} xs={12}>
          <h1>Top Headlines.</h1>
        </Grid>
        <Grid md={12} xs={12}>
          <Text>Latest COVID-19 news from around the world.</Text>
        </Grid>
      </Grid.Container>
    </div>
  );
};

export default Header;
