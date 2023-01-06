import * as React from "react"
import { Link,graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { Grid, Card, CardActionArea, CardContent, CardMedia, Typography,Box } from '@mui/material';
import Layout from "../components/layout"
import Seo from "../components/seo"


const IndexPage = ({data: {wpPage:{homeFields:{featuredCommanders,description,title,picture}}}}) => {


  return(
    <Layout>
      <Seo title="Home" />
      <Box display="flex" flexDirection="column" alignItems="center" margin={2}>
        <img src={picture.sourceUrl} alt={title} />
        <Typography variant="h2" component="h1">{title}</Typography>
        <Typography variant="body1" component="p" dangerouslySetInnerHTML={{__html:description}}  ></Typography>
        <Typography variant="h4" component="h2">Featured commanders:</Typography>
      </Box>
      <Grid container spacing={3}>
        {featuredCommanders.map((featuredCommander) => {
          const commander = featuredCommander.commanderMeta;
          const html = commander.description;
          const slug = (featuredCommander.slug).toString();

          return <Grid item xs={12} sm={6} md={4} key={commander.name} >
            <Card sx={{maxWidth:345}} >
              {/* Tried to use <Link> here but mui href was integrated. */}
              <CardActionArea href={`/commanders/${slug}`}>
                <CardMedia
                  sx={{height:140}}
                  image={commander.art.sourceUrl}
                  title={commander.name}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2" sx={{Height:200}}>
                    {commander.name} 
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
