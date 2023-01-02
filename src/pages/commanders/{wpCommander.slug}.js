import * as React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Layout from "../../components/layout"
import { Card, CardContent, Typography } from "@material-ui/core";

const CommanderPage = ({
    data: {
      wpCommander: { commanderMeta: commander },
    },
  }) => {

  const image = getImage(commander.art.localFile);
  const html = commander.description;

  return (
    <Layout>
       <Card>
      <CardContent>
        <Typography variant="h5" component="h2">
          {commander.name}
        </Typography>
        <Typography variant="body2" component="p">
          Manacost: {commander.manacost}
        </Typography>
        <Typography variant="body2" component="p">
          Type: {commander.type}
        </Typography>
        <Typography variant="body2" component="p"  dangerouslySetInnerHTML={{__html:html}}>
          
        </Typography>
        <Typography variant="body2" component="p">
          Release date: {commander.releaseDate}
        </Typography>
        <Typography variant="body2" component="p">
          Set: {commander.set}
        </Typography>
        <Typography variant="body2" component="p">
          {/* Rarity: {commander.rarity} */}
        </Typography>
        <Typography variant="body2" component="p">
          {/* Color: {commander.color} */}
        </Typography>
        <Typography variant="body2" component="p">
          <GatsbyImage image={image}  />
        </Typography>
      </CardContent>
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