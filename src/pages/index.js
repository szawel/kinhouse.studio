// IndexPage.js
import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import slugify from "slugify"; // Make sure you have slugify installed

import Menu from "../components/Menu";
import Categories from '../components/Categories';
import CategoriesCollapsible from '../components/CategoriesCollapsible';
import Gallery from "../components/Gallery";
import Project from "../components/Project";
import FooterNote from "../components/FooterNote";

// import "../styles/MenuBar.css";
// import "../styles/Categories.css";
import "../styles/global.css";

const IndexPage = () => {
  const data = useStaticQuery(graphql`
  query {
    allStrapiProject(sort: {fields: Categories}) {
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
    }
  }
  `)


  return (
    <div id="index">
      <Menu />

      {/* <MenuBar /> */}

      <Gallery imagesData={data.strapiMain.IntroGalery} />
      <div id="movies"></div>
      {/* <Categories text="Movies" /> */}

      <CategoriesCollapsible text="Movies">
      {data.allStrapiProject.nodes.filter(project => project.Categories.includes("Movie")).map((project, index) => (
        <Link to={`/project/${slugify(project.Name, { lower: true, strict: true })}`} key={index}>
          <Project id={project.Year} title={project.Title} categories={project.Genre} />
        </Link>
      ))}
      </CategoriesCollapsible>

      <div id="animation"></div>
      <CategoriesCollapsible text="Animation">
      {data.allStrapiProject.nodes.filter(project => project.Categories.includes("Animation")).map((project, index) => (
        <Link to={`/project/${slugify(project.Name, { lower: true, strict: true })}`} key={index}>
          <Project key={index} id={project.Year} title={project.Title} categories={project.Genre} />
        </Link>
      ))}
      </CategoriesCollapsible>

      <div id="immersive"></div>
      <CategoriesCollapsible text="Immersive">
      {data.allStrapiProject.nodes.filter(project => project.Categories.includes("Immersive")).map((project, index) => (
        <Link to={`/project/${slugify(project.Name, { lower: true, strict: true })}`} key={index}>
          <Project key={index} id={project.Year} title={project.Title} categories={project.Genre} />
        </Link>
      ))}
      </CategoriesCollapsible>
      <div id="abount"></div>
      <Categories text="Abount us" />
      <div id="media"></div>
      <Categories text="Media" />
      <div id="contact"></div>
      <Categories text="Contact" />


      <FooterNote />
    </div>
  );
};

export default IndexPage
