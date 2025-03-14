import { footerStyles } from "../style/footerStyles";

const Footer = () => {

    return (
      <footer style={footerStyles.container}>
        <p>&copy; {new Date().getFullYear()} Fitness Tracker & Planner || All rights reserved.</p>
      </footer>
    );
  };
  
  export default Footer;