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
  // const synopsisHtml = synopsis?.data?.childMarkdownRemark?.html;

  return (
    <div>
      <MenuHeightProvider>
        <ContentWrapper>
          <MenuBar />
          <ProjectHeader superscription={Superscription} title={Title} subTitle={SubTitle} headerPhoto={HeaderPhoto} />
          {images.length > 0 && <ProjectLaurels imageData={laurels} />}

          <div className="container">
            {basicInfo && basicInfo.data &&
              <ProjectBasicInformation htmlContent={basicInfo.data.childMarkdownRemark.html} />
            }
            {productionStructure && productionStructure.data &&
              <ProjectProductionInformation htmlContent={productionStructure.data.childMarkdownRemark.html} />
            }

            {images.length > 0 && <ProjectPoster imageData={poster} />}

            {synopsis && synopsis.data &&
              <ProjectSynopsis htmlContent={synopsis.data.childMarkdownRemark.html} />
            }



            {images.length > 0 && <ProjectGallery imageData={images} />}
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
