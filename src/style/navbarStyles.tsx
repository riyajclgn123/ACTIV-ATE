export const navbarStyles = {
  container: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop:"10px",
    paddingLeft:"10px",
    backgroundColor: "#4263eb", // Dark theme background
    color: "#ffffff",
    fontSize: "25px",
    width: "100%",  // Ensure the navbar takes full width of the screen
    flexWrap: "wrap", // Allow content to wrap when there’s not enough space

    [`@media (maxWidth: 1024px)`]: {
      fontSize: "22px",  // Reduce font size for medium screens (laptops/tablets)
      padding: "12px 15px",  // Adjust padding for smaller screens
    },

    [`@media (maxWidth: 768px)`]: {
      fontSize: "20px",  // Reduce font size further for tablets
      padding: "10px 12px", // Further adjust padding
    },

    [`@media (maxWidth: 480px)`]: {
      fontSize: "18px",  // Smaller font size for mobile
      padding: "10px 10px",  // Less padding for mobile
      flexDirection: "column", // Stack logo and links vertically on small screens
      gap: "10px",  // Provide some gap between stacked items
      textAlign: "center",  // Center align content for small screens
      overflowX: "hidden", // Prevent horizontal scrolling
    },
  },

  mobilemenu: {
    display: "block",
    flexDirection: "column",
    justifyCenter: "center",
    alignItem: "center",
    gap: "10px",
    padding: "10px",
    position: "absolute",
    top: "60px",
    right: "10px",
    borderRadius: "8px",
    width: "200px",
    zIndex: 10,
    backgroundColor: "black",
  },

  mobilemenuVisible: {
    display: "flex", // Show when hamburger is clicked
  },

  hamburger:{
    fontSize: "24px",
    cursor: "pointer",
    display: "flex",
    marginRight: "15px",
 
  },

  logo: {
    gap: "10px",
    display: "flex",
    alignItems: "center",
    fontSize: "20px",

    [`@media (maxWidth: 480px)`]: {
      fontSize: "30px",  // Reduce logo size for small screens
       // Reduce the gap between logo and text
    },
  },

  navLinks: {
    display: "flex",
    gap: "15px",
    alignItems: "center",  // Align buttons vertically and horizontally
    flexWrap: "wrap",  // Ensure links wrap when space is limited
    marginLeft: "auto",  // Align links to the right

    },
  

  link: {
    textDecoration: "none",
    color: "white",
    fontSize: "25px",
    transition: "background-color 0.3s ease",  // Smooth hover transition

    [`@media (maxWidth: 480px)`]: {
      fontSize: "20px",  // Adjust font size of links for mobile
      padding: "10px",  // Make the clickable area bigger for mobile devices
    },

    ":hover": {
      backgroundColor: "#2c5ed1", // Add hover effect for better user interaction
      borderRadius: "5px", // Optional: give hover effect a nice rounded corner
    },
  },
};
