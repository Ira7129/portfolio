import { Container } from "./styles";
import githubIcon from "../../assets/github.svg"
// import DownloadApp from '../../assets/download.webp'

import ScrollAnimation from "react-animate-on-scroll";


export function Project() {
  return (
    <Container id="project">
      <h2>My Projects</h2>
      <div className="projects">

        {/* // er first project  */}

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                <title>Folder</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
              <div className="project-links">
                <a href="https://github.com/Ira7129/D-parking-/tree/main" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="GitHub" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Smart Parking Availability System</h3>
              <p>
                A computer vision-based project that monitors parking space availability in real-time. Using OpenCV for image processing and Streamlit for an interactive dashboard, this system detects whether parking spots are free or occupied and provides live updates.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Python</li>
                <li>Jupiter Notebook</li>
                <li></li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>




        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"> <title>Folder</title> <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path> </svg>
              <div className="project-links">
                <a href="https://github.com/Ira7129/E-Learning-Platform" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="Visit site" /></a>
                </div>
            </header>
            <div className="body">
              <h3>The website aims to provide a user-friendly and responsive platform for learners to access educational content.</h3>
              <p> E Learning Platform is an e-learning website designed to provide a user-friendly and responsive platform for learners to access educational content. The project incorporates HTML, CSS, Bootstrap 5, and JavaScript to create an interactive and visually appealing learning experience. </p>
            </div>
            <footer> <ul className="tech-list"> <li>AWS Lambda</li> <li>API Gateway</li> <li>HTML</li>
            <li>CSS</li> <li>Bootstrap 5</li> <li>JavaScript</li>
            </ul> 
            </footer>
          </div>
        </ScrollAnimation>
  
      </div>
    </Container>
  );
}
