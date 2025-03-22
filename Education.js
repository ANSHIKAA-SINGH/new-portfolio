import { HiAcademicCap } from 'react-icons/hi2';

function ImageAndTextExample() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '30px',
        marginTop: '20px',
      }}
    >
      <h1 style={{ color: 'rgb(136, 80, 6)', textShadow: '2px 2px white' }}>
        EDUCATION
      </h1>

      {/* Container for boxes - keeps them in a row */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '30px',
          flexWrap: 'wrap',
        }}
      >
        {/* Education Box 1 */}
        <div
          className="education-box"
          style={{
            backgroundColor: 'rgb(136, 80, 6)',
            width: '300px',
            height: '300px',
            borderRadius: '30px',
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            padding: '20px',
            transition: 'all 0.3s ease-in-out',
            boxShadow: '5px 5px 15px rgba(0, 0, 0, 0.5)',
          }}
        >
          <HiAcademicCap
            style={{
              position: 'absolute',
              top: '15px',
              left: '15px',
              fontSize: '50px',
              color: 'white',
            }}
          />
          <h5 style={{ color: 'burlywood' }}>2022 - 2026</h5>
          <h3 style={{ fontSize: '18px', color: 'white' }}>B.Tech - EE</h3>
          <h4
            style={{
              fontSize: '16px',
              fontWeight: 'normal',
              opacity: '0.9',
              color: 'white',
            }}
          >
            National Institute of Technology, Patna
          </h4>
        </div>

        {/* Education Box 2 */}
        <div
          className="education-box"
          style={{
            backgroundColor: 'rgb(136, 80, 6)',
            width: '300px',
            height: '300px',
            borderRadius: '30px',
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            padding: '20px',
            transition: 'all 0.3s ease-in-out',
            boxShadow: '5px 5px 15px rgba(0, 0, 0, 0.5)',
          }}
        >
          <HiAcademicCap
            style={{
              position: 'absolute',
              top: '15px',
              left: '15px',
              fontSize: '50px',
              color: 'white',
            }}
          />
          <h5 style={{ color: 'burlywood' }}>2020 - 2021</h5>
          <h3 style={{ fontSize: '18px', color: 'white' }}>
            Intermediate - 86.6%
          </h3>
          <h4
            style={{
              fontSize: '16px',
              fontWeight: 'normal',
              opacity: '0.9',
              color: 'white',
            }}
          >
            Gurukul Vidyapeeth, Hajipur
          </h4>
        </div>

        {/* Education Box 3 */}
        <div
          className="education-box"
          style={{
            backgroundColor: 'rgb(136, 80, 6)',
            width: '300px',
            height: '300px',
            borderRadius: '30px',
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            padding: '20px',
            transition: 'all 0.3s ease-in-out',
            boxShadow: '5px 5px 15px rgba(0, 0, 0, 0.5)',
          }}
        >
          <HiAcademicCap
            style={{
              position: 'absolute',
              top: '15px',
              left: '15px',
              fontSize: '50px',
              color: 'white',
            }}
          />
          <h5 style={{ color: 'burlywood' }}>2019 - 2019</h5>
          <h3 style={{ fontSize: '18px', color: 'white' }}>Matric - 93.4%</h3>
          <h4
            style={{
              fontSize: '16px',
              fontWeight: 'normal',
              opacity: '0.9',
              color: 'white',
            }}
          >
            Novel Creative Academy, Hajipur
          </h4>
        </div>
      </div>

      {/* CSS for Hover Effect */}
      <style>
        {`
          .education-box:hover {
            transform: scale(1.05);
            box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.7);
          }
        `}
      </style>
    </div>
  );
}

export default ImageAndTextExample;
