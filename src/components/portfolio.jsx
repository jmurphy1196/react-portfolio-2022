import React from "react";
import data from '../data/projects.json';

//import stock
import stock from "../img/image1.jpg";
//codedoc imgs
import codeDocImg from '../img/code-doc.png';
import codeDoc1 from '../img/codedoc/codedoc-1.png';
import codeDoc2 from '../img/codedoc/codedoc-2.png';
import codeDoc3 from '../img/codedoc/codedoc-3.png';
import codeDoc4 from '../img/codedoc/codedoc-4.png';
//clipz imgs
import clipzImg from '../img/clips-1.png';
import clipz1 from '../img/clipz/clipz-1.png';
import clipz2 from '../img/clipz/clipz-2.png';
import clipz3 from '../img/clipz/clipz-3.png';
import clipz4 from '../img/clipz/clipz-4.png';
//soundoff imgs
import soundOffImg from '../img/sound-off-1.png'
import soundOff1 from '../img/soundoff/soundoff-1.png'
import soundOff2 from '../img/soundoff/soundoff-2.png'
import soundOff3 from '../img/soundoff/soundoff-3.png'
import stock4 from "../img/image5.jpg";
import stock5 from "../img/image6.jpg";
import tester from '../data/projects.json';

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
