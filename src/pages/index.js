import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { Grid, Card, CardActionArea, CardContent, CardMedia, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"


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

const IndexPage = ({data: {wpPage:{homeFields:{featuredCommanders,description,title,picture}}}}) => {

  const classes = useStyles();

  return(
    <Layout>
      <Seo title="Home" />
      <Grid container spacing={3}>
        {featuredCommanders.map((featuredCommander) => {
          const commander = featuredCommander;
          const html = commander.description;
          const slug = commander.slug;
          console.log(slug);
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
                  <Typography variant="body2" color="textSecondary" component="p" dangerouslySetInnerHTML={{__html:html}}>
                    
                  </Typography>
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
query HomeQuery {
  wpPage(slug: {eq: "home"}) {
    homeFields {
      featuredCommanders {
        ... on WpCommander {
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
      description
      title
      picture {
        sourceUrl
      }
    }
  }
}

`


export const Head = () => <Seo title="Home" />

export default IndexPage
