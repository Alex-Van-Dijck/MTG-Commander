import * as React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Layout from "../../components/layout"
import { Card, CardContent, Typography,CardMedia } from "@mui/material";


const CommanderPage = ({
    data: {
      wpCommander: { commanderMeta: commander },
    },
  }) => {

  const image = getImage(commander.art.localFile);
  const html = commander.description;

  console.log(commander.color);

  return (
    <Layout>
       <Card sx={{ display: 'flex'}}>
        <CardContent>
          <Typography variant="h5" component="h2">
            {commander.name}
          </Typography>
          <Typography variant="body2" component="p">
          <b>Manacost:</b> {commander.manacost}
          </Typography>
          <Typography variant="body2" component="p">
          <b>Type:</b> {commander.type}
          </Typography>
          <Typography variant="body2" component="p">
            <b>Release date:</b> {commander.releaseDate}
          </Typography>
          <Typography variant="body2" component="p">
            <b>Set:</b> {commander.set}
          </Typography>
          <Typography variant="body2" component="p">
            <b>Rarity:</b> {commander.rarity}
          </Typography>
          <Typography variant="body2" component="p">
            <b>Color(s):</b> {commander.color}
          </Typography>
          <Typography variant="body2" component="p"  dangerouslySetInnerHTML={{__html:html}}/>
          
        </CardContent>
        <CardMedia  sx={{ width: 151 }}>
            <GatsbyImage image={image}  />
        </CardMedia>
      </Card>
    </Layout>

  )
}

export const query = graphql`
query MyQuery($slug: String) {
    wpCommander(slug: {eq: $slug}) {
      commanderMeta {
        name
        type
        set
        releaseDate
        rarity
        manacost
        fieldGroupName
        description
        color
        art{
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

export default CommanderPage