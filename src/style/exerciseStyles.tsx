import exercisebgImage from '../assets/exercisebg.jpg';
export const exerciseStyles = {
    container: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      position: "relative",  // Ensure text is positioned over the background image
      color: "white",
      fontSize: "20px",
      margin: "0px",
      height: "600px",  // Make sure the container takes full height of the screen
      width: "100%",  // Full width of the container
      backgroundImage: `url(${exercisebgImage})`,  // Set the background image
      backgroundSize: "cover",  // Ensure the image covers the full container
      backgroundPosition: "center",  // Center the image in the container
      backgroundRepeat: "no-repeat",  // Prevent repeating the background image
      padding: "10px",
      [`@media (max-width: 1024px)`]: {
        maxWidth: "500px", // Reduce width for medium screens
      },
  
      [`@media (max-width: 768px)`]: {
        maxWidth: "450px", // Further reduce for tablets
      },
  
      [`@media (max-width: 480px)`]: {
        height: "400px",
        padding: "5px",
    },
  },
    overlayText: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center", // Aligns content at the top
      alignItems: "center",
      position: "absolute",  // To position the text above the background
      color: "white",  // White text color for better contrast
      textAlign: "center",  // Center the text horizontally
      fontSize: "30px",  // Default font size for text
      fontWeight: "bold",  // Bold the text
      maxWidth: "80%",  // Limit the text width for better readability
      zIndex: 1,  // Make sure text is above the background image
      [`@media (max-width: 768px)`]: {
        fontSize: "24px",
      },
    },
    searchbox: {
      color:"black",
      fontSize: "20px",
      position: "relative",
      width:"100%",
      maxWidth: "300px", // Keeps it from stretching too much
      padding: "5px",

    },
    calorieburnestimator:{
     display: "flex",
     justifyContent: "center",
     alignItems: "center",
      color: "black",
      fontSize: "40px",
      marginTop: "30px",
      [`@media (max-width: 768px)`]: {
        fontSize: "30px",
      },
  
      [`@media (max-width: 480px)`]: {
        fontSize: "24px",
      },
    },
    userenter:{
      display: "flex",
     justifyContent: "center",
     alignItems: "center",
      color: "black",
      fontSize: "25px",
      margin: "40px 20px",
      flexWrap: "wrap", // ✅ Prevents text from breaking on small screens

      [`@media (max-width: 768px)`]: {
        fontSize: "22px",
      },
  
      [`@media (max-width: 480px)`]: {
        fontSize: "18px",
        textAlign: "center",
      },
    },
    donutchart:{
      display:"flex",
      justifyContent:"center",
      alignItems:"center",
      fontSize:"50px",
      fontFamily:"Roboto",
      fontWeight: "bold",
      gap:"10px",
      margin:"30px 0px",
    
      [`@media (maxWidth: 1024px)`]: {
        fontSize: "40px",
      },
  
      [`@media (maxWidth: 768px)`]: {
        fontSize: "35px",
      },
  
      [`@media (maxWidth: 480px)`]: {
        fontSize: "28px",
      },
  },
  }
