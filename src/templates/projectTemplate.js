import React from "react"
import { graphql } from "gatsby"
import MenuBar from "../components/MenuBar";
import ContentWrapper from '../components/ContentWrapper';
import FooterNote from "../components/FooterNote";
import ProjectBasicInformation from "../components/ProjectBasicInformation"
import ProjectProductionInformation from "../components/ProjectProductionInformation"
import ProjectGallery from '../components/ProjectGallery';
import ProjectHeader from '../components/ProjectHeader'
import ProjectPoster from '../components/ProjectPoster';
import ProjectLaurels from '../components/ProjectLaurels';
import ProjectSynopsis from '../components/ProjectSynopsis';
import { MenuHeightProvider } from '../contexts/MenuHeightContext';

function mapImagesToGatsbyImageData(images) {
  return images ? images.map(image => image.localFile.childImageSharp.gatsbyImageData) : [];
}

export default function ProjectTemplate({ data: { strapiProject } }) {
  const {
    Title,
    SubTitle,
    Superscription,
    HeaderPhoto,
    BasicInformation: basicInfo,
    ProductionStructure: productionStructure,
    Synopsis: synopsis,
    ProjectGallery: galleryImages,
    Poster: posterImages,
    Laurels: laurelsImages,
  } = strapiProject;

  // Map the ProjectGallery data to an array of gatsbyImageData
  const images = mapImagesToGatsbyImageData(galleryImages);
  const poster = mapImagesToGatsbyImageData(posterImages);
  const laurels = mapImagesToGatsbyImageData(laurelsImages);

  return (
    <div>
      <MenuHeightProvider>
        <ContentWrapper>
          <MenuBar />
          <ProjectHeader superscription={Superscription} title={Title} subTitle={SubTitle} headerPhoto={HeaderPhoto} />
          <ProjectLaurels imageData={laurels} />

          <div className="container">
            <ProjectBasicInformation basicInfo={basicInfo} />
            <ProjectProductionInformation productionStructure={productionStructure} />
            <ProjectPoster imageData={poster} />
            <ProjectSynopsis synopsis={synopsis} />
            <ProjectGallery imageData={images} />
          </div>

        </ContentWrapper>
      </MenuHeightProvider>
      <FooterNote />
    </div>
  );
}


export const query = graphql`
  query GetSingleProject($id: String) {
    strapiProject(id: { eq: $id }) {
        Name
        Title
        id
        SubTitle
        Superscription
        HeaderPhoto{
          localFile{
            childImageSharp {
              gatsbyImageData
            }
          }
        }
        BasicInformation{
          data{
            BasicInformation
            childMarkdownRemark {
              html
            }
          }
        }
        ProductionStructure{
          data{
            ProductionStructure
            childMarkdownRemark {
              html
            }
          }
        }
        Synopsis{
          data{
            Synopsis
            childMarkdownRemark {
              html
            }
          }
        }
        ProjectGallery {
          localFile{
            childImageSharp{
              gatsbyImageData
            }
          }
        }
        Poster {
          localFile{
            childImageSharp{
              gatsbyImageData
            }
          }
        }
        Laurels{
          localFile{
            childImageSharp{
              gatsbyImageData
            }
          }
        }
      }
    }
  `
