import * as React from "react"
import { graphql } from "gatsby"
import { Grid, Card, CardActionArea, CardContent, CardMedia, Typography,Box } from '@mui/material';
import Layout from "../components/layout"
import Seo from "../components/seo"
import { GatsbyImage, getImage } from "gatsby-plugin-image";


const IndexPage = ({data: {wpPage:{homeFields:{featuredCommanders,description,title,picture}}}}) => {

  const bannerimg = getImage(picture.localFile);

  return(
    <Layout>
      <Seo title="Home" />
      <Box display="flex" flexDirection="column" alignItems="center" margin={2}>
      <GatsbyImage image={bannerimg}  style={{height:'100%',width:'100'}} objectFit="cover"/>
        <Typography variant="h2" component="h1">{title}</Typography>
        <Typography variant="body1" component="p" dangerouslySetInnerHTML={{__html:description}}  ></Typography>
        <Typography variant="h4" component="h2">Featured commanders:</Typography>
      </Box>
      <Grid container spacing={3}>
        {featuredCommanders.map((featuredCommander) => {
          const commander = featuredCommander.commanderMeta;
          const html = commander.description;
          const slug = (featuredCommander.slug).toString();
          const image = getImage(commander.art.localFile);

          return <Grid item xs={12} sm={6} md={4} key={commander.name} >
            <Card sx={{maxWidth:345}} >
              {/* Tried to use <Link> here but mui href was integrated. */}
              <CardActionArea href={`/commanders/${slug}`}>
                <CardMedia sx={{height:140}}title={commander.name}>
                  <GatsbyImage image={image}  style={{height:'100%',width:'100'}} objectFit="cover"/>
                </CardMedia>
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
              localFile {
                childImageSharp {
                  gatsbyImageData(placeholder: BLURRED)
                }
              }
            }
          }
        }
      }
      description
      title
      picture {
        localFile {
          childImageSharp {
            gatsbyImageData(placeholder: BLURRED)
          }
        }
      }
    }
  }
}

`


export const Head = () => <Seo title="Home" />

export default IndexPage
