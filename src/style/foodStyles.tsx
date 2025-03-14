import foodbgImage from '../assets/foodbg.jpg';

export const foodStyles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",  // Ensure text is positioned over the background image
    color: "white",
    fontSize: "20px",
    margin: "0px",
    height: "600px",  // Default height for large screens
    width: "100%",  // Full width of the container
    backgroundImage: `url(${foodbgImage})`,  // Set the background image
    backgroundSize: "cover",  // Ensure the image covers the full container
    backgroundPosition: "center",  // Center the image in the container
    backgroundRepeat: "no-repeat",  // Prevent repeating the background image
    padding: "10px",  // Added padding for small screens

    [`@media (maxWidth: 1024px)`]: {
      height: "500px", // Reduced height for medium screens
    },

    [`@media (maxWidth: 768px)`]: {
      height: "450px", // Reduced further for tablets
    },

    [`@media (maxWidth: 480px)`]: {
      height: "400px", // Reduced for mobile screens
    },
  },

  overlayText: {
    position: "absolute",  // To position the text above the background
    color: "white",  // White text color for better contrast
    textAlign: "center",  // Center the text horizontally
    fontSize: "30px",  // Default font size for text
    fontWeight: "bold",  // Bold the text
    maxWidth: "60%",  // Limit the text width for better readability
    margin: "0px 0px",  // Center align the text
    zIndex: 1,  // Make sure text is above the background image

    [`@media (maxWidth: 768px)`]: {
      fontSize: "24px",  // Adjust font size for medium screens
      maxWidth: "70%",   // Slightly wider text area on tablets
    },

    [`@media (maxWidth: 480px)`]: {
      fontSize: "20px",  // Smaller font size for mobile
      maxWidth: "80%",   // Allow more width for text on mobile
    },
  },

  searchbox: {
    color: "black",
    fontSize: "20px",
    position: "relative",
    width: "100%",  // Ensure it uses full width
    maxWidth: "300px",  // Limit maximum width for better control
    padding: "5px",  // Added padding for small screens

    [`@media (maxWidth: 768px)`]: {
      width: "80%",  // Allow more width on smaller screens
    },

    [`@media (maxWidth: 480px)`]: {
      width: "100%",  // Full width on mobile for easier interaction
    },
  },

  donutchart: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "50px",
    fontFamily: "Roboto",
    fontWeight: "bold",
    gap: "10px",
    margin: "30px 0px",
    width: "100%",  // Ensure full width for responsiveness
    flexWrap: "wrap",  // Allow content to wrap on smaller screens

    [`@media (maxWidth: 1024px)`]: {
      fontSize: "40px",  // Adjust font size for medium screens
    },

    [`@media (maxWidth: 768px)`]: {
      fontSize: "35px",  // Further reduce for tablets
    },

    [`@media (maxWidth: 480px)`]: {
      fontSize: "28px",  // Smaller font size for mobile
    },
  },

  water:{
    marginRight:" 1000px",
    marginLeft:"10px",
    marginBottom:"10px",
    alignItem: "left",
    flex:"display",
    justifyCenter:"center",
  }
};
