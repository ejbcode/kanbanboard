import styled from 'styled-components';
import {
  SiReact,
  SiRedux,
  SiFirebase,
  SiStyledComponents,
} from 'react-icons/si';

const FooterStyle = styled.footer`
  position: absolute;
  color: lightgray;
  bottom: 0;
  width: 100%;
  font-size: 1.8rem;
  text-align: center;
  padding: 0 rem 0;
  padding-bottom: 1.5rem;
  .logos > * {
    margin: 0 2rem;
  }
`;

const Footer = () => (
  <FooterStyle>
    <div>
      <span>Made with</span>
    </div>
    <hr />
    <div className="logos">
      <SiReact /> <SiRedux /> <SiFirebase />
      <SiStyledComponents />
    </div>
  </FooterStyle>
);

export default Footer;
