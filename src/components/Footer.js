import styled from 'styled-components';
import {
  SiReact,
  SiRedux,
  SiFirebase,
  SiStyledComponents,
} from 'react-icons/si';

const FooterStyle = styled.footer`
  position: absolute;
  bottom: 0;
  width: 100%;
  font-size: 1.8rem;
  text-align: center;
  padding: 0 rem 0;
  p > * {
    margin: 0 2rem;
  }
`;

const Footer = () => (
  <FooterStyle>
    <p>
      Made with <SiReact /> <SiRedux /> <SiFirebase />
      <SiStyledComponents />{' '}
    </p>
  </FooterStyle>
);

export default Footer;
