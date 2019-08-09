import React from 'react';

import {
  Tags,
  ProjectContent,
  ProjectDetail,
  ProjectLinks,
  ProjectPreview,
  ProjectWrapper
} from './Project.style'
import Button from '../UI/Button';

function Project() {
  return (
    <ProjectWrapper>
      <ProjectContent>
        <ProjectDetail>
          <div className="project__detail-container">
            <h2>Evolution Aquerium</h2>
            <p>
              Evolution Aquerium is based on Craig Reynold's Steering Behaviors and Flocking System. It's also implements Genetic Algorithm and mutations.
            <br />
              <br />
              My Mentor Daniel Shiffman showcased this on his Youtube Channel at TheCodingTrain.
            <br />
              <br />
              And i was very happy about the humble feedback sir Daniel Shiffman gave to me. it just boosted my confidence more and more. and motivated me to make this project better.
          </p>
            <ProjectLinks>
              <Button to="/">Case Study</Button>
              <Button to="/">Live Demo</Button>
              <Button to="/">github</Button>
            </ProjectLinks>
          </div>
        </ProjectDetail>

        <ProjectPreview>
          <div className="aspect-ratio">
            <iframe src="https://www.youtube.com/embed/GKIhVrOsQCI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen />
          </div>
          <Tags>
            <i className="fab fa-js" />
            <i className="fab fa-html5" />
            <i className="fab fa-css3" />
          </Tags>
        </ProjectPreview>
      </ProjectContent>

    </ProjectWrapper>
  );
}

export default Project;