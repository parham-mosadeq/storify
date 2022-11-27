import React from 'react';
//icons
import { FaGithub, FaLinkedin, FaMailBulk } from 'react-icons/fa';
// styles
import { MainAboutUsContainer } from '../../shared/AboutUsComponentStyled';
const AboutUs = () => {
  return (
    <MainAboutUsContainer>
      <div>
        <h1>need to contact us?</h1>
        <p>here is how you can reach out to us:</p>
        <span>
          <FaMailBulk /> pmosadeqzadeh@gmail.com
        </span>
      </div>

      <div>
        <ul>
          <li>
            <a
              target='_blank'
              rel='noreferrer'
              href='https://www.linkedin.com/in/parham-mosadeqzadeh-01253b1b7'
            >
              <FaLinkedin />
            </a>
          </li>
          <li>
            <a
              target='_blank'
              rel='noreferrer'
              href='https://github.com/parham-mosadeq'
            >
              <FaGithub />
            </a>
          </li>
        </ul>
      </div>
    </MainAboutUsContainer>
  );
};

export default AboutUs;
