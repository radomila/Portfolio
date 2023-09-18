import * as React from 'react';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const ExperienceTimeline = () => {
  return (
    <div>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          iconStyle={{ background: '#66bfbf', color: '#fff' }}
        >
          <h3 className="vertical-timeline-element-title">
            Frontend developer
          </h3>
          <h4 className="vertical-timeline-element-subtitle">Česko Digital</h4>
          <p>Práce na projektu Pomáhej Ukrajině.</p>
          <p>
            <i>
              {' '}
              <strong>Stack: </strong>React - NextJS - TypeScript - Tailwind{' '}
            </i>
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          iconStyle={{ background: '#66bfbf', color: '#fff' }}
        >
          <h3 className="vertical-timeline-element-title">Kouč</h3>
          <h4 className="vertical-timeline-element-subtitle">Czechitas</h4>
          <p>
            Účast na online kurzech zaměřených zejména na webový vývoj jako
            kouč.
            <p>
              <i>
                <strong>Kurzy: </strong>UX (Figma), HTML/CSS, JavaScript,
                Python.
              </i>{' '}
            </p>
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          iconStyle={{ background: '#66bfbf', color: '#fff' }}
        >
          <h3 className="vertical-timeline-element-title">
            Junior Software developer
          </h3>
          <h4 className="vertical-timeline-element-subtitle">Cyrkl</h4>
          <p>Vývoj na interních projektech společnosti.</p>
          <p>
            <i>
              <strong>Stack: </strong>React - JavaScript - TypeScript -
              styled-components
            </i>
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
};

export default ExperienceTimeline;
