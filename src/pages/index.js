// IndexPage.js
import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import slugify from "slugify"; // Make sure you have slugify installed

// import Menu from "../components/Menu";
import MenuBar from "../components/MenuBar";
import Categories from "../components/Categories";
import CategoriesCollapsible from "../components/CategoriesCollapsible";
import Gallery from "../components/Gallery";
import Project from "../components/Project";
import IntroDescription from "../components/IntroDescription";
import IntroTeamCollapsible from "../components/IntroTeamCollapsible";
import FooterNote from "../components/FooterNote";

import "../styles/global.css";

const IndexPage = () => {
  const data = useStaticQuery(graphql`
  query {
    allStrapiProject(sort: {Year: DESC}) {
      nodes {
        Name
        Title
        Categories
        id
        SubTitle
        Superscription
        Year
        Genre
      }
    }
    strapiMain {
      IntroGalery {
        localFile {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
      IntroDescription{
        data {
          childMarkdownRemark{
            html
            rawMarkdownBody
          }
        }
      }
    }
    allStrapiTeam {
      nodes {
        Name
        Position
        Email
        Bio {
          data {
            childMarkdownRemark {
              html
            }
          }
        }
        Photo {
          localFile {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
      }
    }
  }
  `)

  const introDescriptionMarkdown = data.strapiMain.IntroDescription.data.childMarkdownRemark.rawMarkdownBody;
  const teamData = data.allStrapiTeam.nodes;



  return (
    <div className="mainWrapper">
    <div id="index">

      {/* <Dummy />*/}

      <MenuBar />
      <div className="space" id="studio"></div>
      {/* <Gallery imagesData={data.strapiMain.IntroGalery} /> */}
      <section>
        <div id="movies"></div>
        <CategoriesCollapsible text="Movies">
          {data.allStrapiProject.nodes.filter(project => project.Categories.includes("Movie")).map((project, index) => (
            <Link to={`/project/${slugify(project.Name, { lower: true, strict: true })}`} key={index}>
              <Project id={project.Year} title={project.Title} categories={project.Genre} />
            </Link>
          ))}
        </CategoriesCollapsible>

        
+        {/* 
+        Filter out projects with "Animation" category and map each project to a link to its project page. 
+        The link includes a slugified version of the project's name, and the Project component is given the project's ID, title, and categories.
+        The functionality of this section is currently disabled, but can be re-enabled by removing the comment markers.
+        */}
        {/* <div id="animation"></div>
        <CategoriesCollapsible text="Animation">
          {data.allStrapiProject.nodes.filter(project => project.Categories.includes("Animation")).map((project, index) => (
            <Link to={`/project/${slugify(project.Name, { lower: true, strict: true })}`} key={index}>
              <Project key={index} id={project.Year} title={project.Title} categories={project.Genre} />
            </Link>
          ))}
        </CategoriesCollapsible> */}

        <div id="immersive"></div>
        <CategoriesCollapsible text="Immersive">
          {data.allStrapiProject.nodes.filter(project => project.Categories.includes("Immersive")).map((project, index) => (
            <Link to={`/project/${slugify(project.Name, { lower: true, strict: true })}`} key={index}>
              <Project key={index} id={project.Year} title={project.Title} categories={project.Genre} />
            </Link>
          ))}
        </CategoriesCollapsible>
        <div className="space" />
      </section>
      <section>
        <div id="about us"></div>
        <Categories text="About us" />
        <IntroDescription markdownData={introDescriptionMarkdown} />
        <IntroTeamCollapsible teamData={teamData} />


        <div className="space" />
      </section>
      <FooterNote />

    </div>
    </div>
  );
};

export default IndexPage
