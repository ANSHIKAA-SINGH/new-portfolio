import './App.css';

function UpdateProduct() {
  return (
    <div className="profile-container">
      {/* Circular Image */}
      <div className="profile-image">
        <img src="/image.png" alt="me?" />
      </div>

      {/* Title */}

      {/* About Text */}
      <div className="profile-description">
        <p>
          I am <strong>Anshika Singh</strong>, born and raised in Hajipur,
          Bihar. I achieved <strong>93.4%</strong> in my 10th grade and{' '}
          <strong>86.6%</strong> in my 12th grade. Currently, I am pursuing{' '}
          <strong>B.Tech in Electrical Engineering</strong>.
        </p>
        <p>
          Beyond academics, I actively participate in college activities and
          have joined multiple clubs and societies. I have contributed to
          various events and successfully balanced my electrical studies with my
          passion for <strong>data structures & algorithms</strong> and{' '}
          <strong>web development</strong>.
        </p>
        <p>
          I strongly believe in innovation and continuously strive to learn new
          technologies. My goal is to leverage my skills to bring{' '}
          <strong>positive change to society</strong>.
        </p>
      </div>
    </div>
  );
}

export default UpdateProduct;
