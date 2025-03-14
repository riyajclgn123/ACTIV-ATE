export const footerStyles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#4263eb", // Dark theme background
    color: "#ffffff",
    fontSize: "20px",
    //margin: "0px",
    //padding: "0px", // Added padding for spacing around the text
    width: "100%",  // Ensures the footer takes full width of the screen

    [`@media (maxWidth: 1024px)`]: {
      fontSize: "18px",  // Slightly reduce font size for medium screens (laptops/tablets)
    },

    [`@media (maxWidth: 768px)`]: {
      fontSize: "16px",  // Reduce font size further for tablets
      padding: "12px",   // Reduce padding for smaller screens
    },

    [`@media (maxWidth: 480px)`]: {
      fontSize: "14px",  // Even smaller font size for mobile
      padding: "10px",   // Less padding on mobile for space efficiency
      textAlign: "center",  // Ensure text is centered on small screens
    },
  },
};
