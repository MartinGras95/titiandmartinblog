import React from 'react'

import Layout from '../components/layout'
import { graphql} from 'gatsby'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import Head from '../components/head'

export const query = graphql`
  query($slug: String!) {
    contentfulEvents(slug: {eq: $slug}){
      title
      eventDate(formatString: "MMMM Do, YYYY")
      eventDescription{
        json
      }
    }
  }
`

const Event = (props) => {
  const options = {
    // override how nodes are rendered
    renderNode: {
      "embedded-asset-block": (node) => {
        const alt = node.data.target.fields.title['en-US']
        const url = node.data.target.fields.file['en-US'].url
        return <img alt={alt} src={url} />
      }
    }
  }
    return(
        <Layout>
          <Head title={props.data.contentfulEvents.title}/>
            <h1>{props.data.contentfulEvents.title}</h1>
            <p>{props.data.contentfulEvents.eventDate}</p>
            {documentToReactComponents(props.data.contentfulEvents.eventDescription.json,options)}
        </Layout>
    )
}

export default Event