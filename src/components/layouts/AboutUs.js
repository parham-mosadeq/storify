import React from 'react';
//router
import { Link } from 'react-router-dom';
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
      </div>

      <div>
        <ul>
          <li>
            <Link href='#'>
              <FaMailBulk />
            </Link>
          </li>
          <li>
            <Link href='#'>
              <FaLinkedin />
            </Link>
          </li>
          <li>
            <Link href='#'>
              <FaGithub />
            </Link>
          </li>
        </ul>
      </div>
    </MainAboutUsContainer>
  );
};

export default AboutUs;
