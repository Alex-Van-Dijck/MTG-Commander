import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Card, CardActionArea, CardContent, CardMedia, Typography } from '@material-ui/core';
import Seo from "../components/seo";
import Layout from '../components/layout';

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

    <Layout pageTitle="Artists of Inghelbrecht Agency">
      {edges.map((item) => {
        const commander = item.node.commanderMeta;
        return <p key={item.node.id}>{commander.name},{commander.description} test</p>
      })}
    </Layout>

    // <div className={classes.root}>
    //   <Grid container spacing={3}>
    //     {edges.map((edge) => {
    //       const commander = edge.node.commanderMeta;
    //       <Grid item xs={12} sm={6} md={4} key={commander.name} >
    //         <Card className={classes.card}>
    //           <CardActionArea>
    //             <CardMedia
    //               className={classes.media}
    //               image={commander.art.sourceUrl}
    //               title={commander.name}
    //             />
    //             <CardContent>
    //               <Typography gutterBottom variant="h5" component="h2">
    //                 {commander.name}
    //               </Typography>
    //               <Typography variant="body2" color="textSecondary" component="p">
    //                 {commander.node.description}
    //               </Typography>
    //             </CardContent>
    //           </CardActionArea>
    //         </Card>
    //       </Grid>
    //   })}
    //   </Grid>
    // </div>
  );
};

export const query = graphql`
  query {
    allWpCommander {
      edges {
        node {
          id
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

export const Head = () => <Seo title="Commanders" />

export default CommandersPage;