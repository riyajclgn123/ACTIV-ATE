import { Button, Group } from "@mantine/core";
import { useState } from "react";
import { useMediaQuery } from "@mantine/hooks";
import logo from "../assets/logo.png";
import ProfileAvatar from "./ProfileAvatar";
import { navbarStyles } from "../style/navbarStyles";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useMediaQuery("(max-width: 768px)"); // Detect mobile screen size

  return (
    <section style={navbarStyles.container}>
      <div style={navbarStyles.logo}>
        <div>
          <a href="/" style={{ textDecoration: "none", color: "white" }}>
            <img src={logo} alt="logo" style={{ width: "50px", height: "40px" }} />
          </a>
        </div>
        <div>
          <a href="/" style={{ textDecoration: "none", color: "white" }}>
            Fitness Planner & Tracker
          </a>
        </div>
      </div>

      {/* Show navLinks only if not on mobile */}
      {!isMobile && (
        <div style={navbarStyles.navLinks}>
          <Button variant="subtle" component="a" href="/" style={navbarStyles.link}>
            Home
          </Button>
          <Button variant="subtle" component="a" href="/exercise" style={navbarStyles.link}>
            Exercise
          </Button>
          <Button variant="subtle" component="a" href="/food" style={navbarStyles.link}>
            Food
          </Button>
          <Button variant="subtle" component="a" href="/mealplanner" style={navbarStyles.link}>
            Meal Planner
          </Button>
          <Button variant="subtle" component="a" href="/bmiindicator" style={navbarStyles.link}>
            BMI Indicator
          </Button>
          <Group>
            <ProfileAvatar />
          </Group>
        </div>
      )}

      {/* Hamburger menu for mobile screens */}
      {isMobile && (
        <div style={navbarStyles.hamburger} onClick={() => setIsOpen(!isOpen)}>
          ☰
        </div>
      )}

      {/* Mobile Menu */}
      {isOpen && (
        <div style={navbarStyles.mobilemenu}>
          <Button variant="subtle" component="a" href="/" style={navbarStyles.link}>
            Home
          </Button>
          <Button variant="subtle" component="a" href="/exercise" style={navbarStyles.link}>
            Exercise
          </Button>
          <Button variant="subtle" component="a" href="/food" style={navbarStyles.link}>
            Food
          </Button>
          <Button variant="subtle" component="a" href="/mealplanner" style={navbarStyles.link}>
            Meal Planner
          </Button>
          <Button variant="subtle" component="a" href="/bmiindicator" style={navbarStyles.link}>
            BMI Indicator
          </Button>
          <Group>
            <ProfileAvatar />
          </Group>
        </div>
      )}
    </section>
  );
};

export default Navbar;
