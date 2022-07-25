import React from "react";
import data from '../data/projects.json';


import Project from './project';

class Portfolio extends React.Component {
  render() {
    return (
      <section id="work" className="portfolio-mf sect-pt4 route">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="title-box text-center">
                <h3 className="title-a">Projects</h3>
                <p className="subtitle-a">
                  Take a look at my work
                </p>
                <div className="line-mf"></div>
              </div>
            </div>
          </div>
          <div className="row">


            {data.projects.map((project, i) => {

              return (

                <Project projectName={project.title} tools={project.tools} desc={project.desc} images={project.images} key={i} link={project.link} />
              )
            })}


          </div>
        </div>
      </section>
    );
  }
}

export default Portfolio;
