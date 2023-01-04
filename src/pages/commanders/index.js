import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Card, CardActionArea, CardContent, CardMedia, Typography } from '@material-ui/core';
import Seo from "../../components/seo";
import Layout from '../../components/layout';

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

const CommandersPage = ({data: {allWpCommander: {edges}}}) => {
  const classes = useStyles();

  return (
    <Layout>
      <Grid container spacing={3} wrap='wrap' justifyContent='center'>
        {edges.map((edge) => {
          const commander = edge.node.commanderMeta;
          const html = commander.description;
          const slug = edge.node.slug;
          console.log(slug);
          console.log(edge.node)
          return <Grid item xs={12} sm={6} md={4} key={commander.name} >
            <Card className={classes.card}>
              <CardActionArea href={"/commanders/"+{slug}}>
                <CardMedia
                  className={classes.media}
                  image={commander.art.sourceUrl}
                  title={commander.name}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {commander.name}
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p" dangerouslySetInnerHTML={{__html:html}}/>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
      })}
      </Grid>
    </Layout>
    
  );
};

export const query = graphql`
  query {
    allWpCommander {
      edges {
        node {
          id
          slug
          commanderMeta {
            name
            description
            art {
              sourceUrl
            }
          }
        }
      }
    }
  }

`

export default CommandersPage;