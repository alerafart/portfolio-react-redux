import React from "react";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
// import {WorkIcon} from '../src/assets/work.svg';
//import {workIcon} from './Timeline/workIcon.svg';
// import {StarIcon} from './src/assets/school.svg';
// styles
import "./timeline.scss"

function Timeline() {
  return (
    <div className="timeline">
      
      <VerticalTimeline>
      {/* <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2010 - 2011"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          //icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">Formation Développeur Web et web Mobile</h3>
          <h4 className="vertical-timeline-element-subtitle">O'Clock</h4>
          <p>
              déc. 2021 - juil. 2022
              6 mois – 798 heures intensives de formation en télé présentiel

              ● 3 mois de socle : #HTML #CSS #PHP #JavaScript #Linux #Git/GitHub #ClientServeur #DOM #POO #SQL #RWD #Bootstrap #MVC #Composer #Lumen Laravel #SEO #GitAvancé #BackOffice #Sécurité #Framework #ORM #API #AJAX #Adminer #SSH #Deploy #CMS #SCRUM

              ● 1 mois de spécialisation : #React #React-Redux #React-Router - Architecture complexe - Pure functions - Reducers -Action creators - Containers Component - React- ReactDOM - JSX
              React Stateless Component - React Stateful Component - React DevTools - Gestion des événements - Lifecycles - Forms- controlled components - React Hooks - useState - useEffect - Tests, TDD / BDD
              Jest - Enzyme

              ● 1 mois de projet de fin d'études: #MeetDev -> Site de recrutement pour développeurs web
          </p>
        </VerticalTimelineElement> */}

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
          date="2008 - present"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          //icon={workIcon}
        >
          <h3 className="vertical-timeline-element-title">Formation Développeur Web et web Mobile</h3>
          <h4 className="vertical-timeline-element-subtitle">O'Clock</h4>
          <p>
              déc. 2021 - juil. 2022
              6 mois – 798 heures intensives de formation en télé présentiel

              ● 3 mois de socle : #HTML #CSS #PHP #JavaScript #Linux #Git/GitHub #ClientServeur #DOM #POO #SQL #RWD #Bootstrap #MVC #Composer #Lumen Laravel #SEO #GitAvancé #BackOffice #Sécurité #Framework #ORM #API #AJAX #Adminer #SSH #Deploy #CMS #SCRUM

              ● 1 mois de spécialisation : #React #React-Redux #React-Router - Architecture complexe - Pure functions - Reducers -Action creators - Containers Component - React- ReactDOM - JSX
              React Stateless Component - React Stateful Component - React DevTools - Gestion des événements - Lifecycles - Forms- controlled components - React Hooks - useState - useEffect - Tests, TDD / BDD
              Jest - Enzyme

              ● 1 mois de projet de fin d'études: #MeetDev -> Site de recrutement pour développeurs web
          </p>
        </VerticalTimelineElement>
        
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
          date="2008 - present"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          //icon={workIcon}
        >
          <h3 className="vertical-timeline-element-title">Photographe Responsable Studio</h3>
          <h4 className="vertical-timeline-element-subtitle">Groupe Otelo, Saint Ouen l'Aumône</h4>
          <p>
            Gestion de projet photo e-commerce, photographie esn studio, retouche des images, optimisation des processus, automatisation des taches, création des scripts.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2006 - 2008"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          // icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">Web Designer</h3>
          <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
          <p>
            User Experience, Visual Design
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="April 2013"
          iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
          // icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">Lorem ipsum</h3>
          <h4 className="vertical-timeline-element-subtitle">Online Course</h4>
          <p>
          Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="November 2012"
          iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
          // icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">Agile Development Scrum Master</h3>
          <h4 className="vertical-timeline-element-subtitle">Certification</h4>
          <p>
            Creative Direction, User Experience, Visual Design
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2002 - 2006"
          iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
          //icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">Bachelor of Science in Interactive Digital Media Visual Imaging</h3>
          <h4 className="vertical-timeline-element-subtitle">Bachelor Degree</h4>
          <p>
            Creative Direction, Visual Design
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
          //icon={<StarIcon />}
        />
      </VerticalTimeline>
    </div>
  );
}

export default Timeline;
