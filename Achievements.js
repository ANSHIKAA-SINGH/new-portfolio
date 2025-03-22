import './App.css';

function AddProduct() {
  return (
    <div className="container">
      {/* Left Section - Achievements */}
      <div className="left">
        <h1 className="section-title">Achievements</h1>
        <div className="boxes">
          <div className="box">
            <h2>Coding Excellence</h2>
            <p>
              Successfully solved <strong>300+ coding problems</strong> across
              various platforms, enhancing problem-solving and algorithmic
              skills.
            </p>
          </div>
          <div className="box">
            <h2>Hackathon Recognition</h2>
            <p>
              Participated in hackathons and secured{' '}
              <strong>notable positions</strong> by showcasing innovative
              solutions.
            </p>
          </div>
          <div className="box">
            <h2>Drone Development</h2>
            <p>
              Organized and led <strong>drone-building events</strong>.
              Developed a functional <strong>mini drone</strong> under the
              guidance of the <strong>T.E.S.L.A Club</strong>.
            </p>
          </div>
          <div className="box">
            <h2>IoT Certification</h2>
            <p>
              Earned a <strong>Silver Badge</strong> in{' '}
              <strong>Internet of Things (IoT)</strong> from{' '}
              <strong>NPTEL</strong>
            </p>
          </div>
        </div>
      </div>

      {/* Right Section - Positions */}
      <div className="right">
        <h1 className="section-title">Positions</h1>
        <div className="boxes">
          <div className="box">
            <h2>Web Team - T.E.S.L.A</h2>
            <p>
              Managed and coordinated <strong>technical events</strong> at
              college fests, ensuring smooth execution and active participation.
            </p>
          </div>
          <div className="box">
            <h2>Web Team - IEEE</h2>
            <p>
              Contributed to various <strong>web development projects</strong>,
              completing multiple tasks assigned by the club.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddProduct;
