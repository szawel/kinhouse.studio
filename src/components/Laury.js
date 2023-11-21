import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

const Laury = ({ lauries }) => {
  const data = useStaticQuery(graphql`
    query {
      allFile {
        nodes {
          name
          relativePath
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  `);

  return (
    <div className="laury-container">
      {lauries.map((laury, index) => {
        const matchedFile = data.allFile.nodes.find(file => file.name === laury.hash);

        return (
          <div key={index} className="laury-item">
            {matchedFile && <Img fluid={matchedFile.childImageSharp.fluid} alt={`Laury ${index + 1}`} />}
            <p>Laury {index + 1}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Laury;
