import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { Grid, Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';
import Seo from "../../components/seo";
import Layout from '../../components/layout';
import styles from "./index.module.css"


const CommandersPage = ({data: {allWpCommander: {edges}}}) => {

  return (
    <Layout>
      <Grid container spacing={3} wrap='wrap' justifyContent='center'>
        {edges.map((edge) => {
          const commander = edge.node.commanderMeta;
          const html = commander.description;
          const slug = edge.node.slug;
          console.log(slug);
          console.log(edge.node);
          return <Grid item xs={12} sm={6} md={4} key={commander.name} >
            <Card className={styles.card}>
              <CardActionArea href={`/commanders/${slug}`}>
                <CardMedia
                  className={styles.media}
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