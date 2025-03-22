import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaBootstrap,
  FaReact,
  FaDatabase,
  FaJava,
} from 'react-icons/fa';
import { SiTailwindcss } from 'react-icons/si';
import './App.css';

function Skills() {
  return (
    <div className="skills-container">
      <h1 className="skills-title">My Skills</h1>

      {/* Skills Grid */}
      <div className="skills-grid">
        {/* Skill Boxes */}
        <div className="skill-box">
          <FaHtml5 className="skill-icon html" />
          <h3>HTML</h3>
        </div>
        <div className="skill-box">
          <FaCss3Alt className="skill-icon css" />
          <h3>CSS</h3>
        </div>
        <div className="skill-box">
          <FaJs className="skill-icon js" />
          <h3>JavaScript</h3>
        </div>
        <div className="skill-box">
          <FaBootstrap className="skill-icon bootstrap" />
          <h3>Bootstrap</h3>
        </div>
        <div className="skill-box">
          <SiTailwindcss className="skill-icon tailwind" />
          <h3>Tailwind CSS</h3>
        </div>
        <div className="skill-box">
          <FaReact className="skill-icon react" />
          <h3>ReactJS</h3>
        </div>
        <div className="skill-box">
          <FaDatabase className="skill-icon sql" />
          <h3>SQL</h3>
        </div>
        <div className="skill-box">
          <FaJava className="skill-icon java" />
          <h3>Java</h3>
        </div>
      </div>
    </div>
  );
}

export default Skills;
