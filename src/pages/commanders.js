import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Card, CardActionArea, CardContent, CardMedia, Typography } from '@material-ui/core';
import Seo from "../components/seo";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  card: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
}));

const CommandersPage = () => {
  const classes = useStyles();

  //todo: Fix query
  const data = useStaticQuery(graphql`
    query {
      allFile(filter: { extension: { eq: "jpg" } }) {
        edges {
          node {
            childImageSharp {
              fluid {
                src
              }
            }
            name
          }
        }
      }
    }
  `);

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        {data.allFile.edges.map((edge) => (
          <Grid item xs={12} sm={6} md={4} key={edge.node.name}>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image={edge.node.childImageSharp.fluid.src}
                  title={edge.node.name}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {edge.node.name}
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Mauris volutpat nisl at justo faucibus, eu egestas tellus
                    aliquet. In hac habitasse platea dictumst.
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export const Head = () => <Seo title="Commanders" />

export default CommandersPage;