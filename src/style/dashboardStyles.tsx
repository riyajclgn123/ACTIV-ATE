

export const dashboardStyles ={
    container:{
        width: '100%',
      margin: 'auto',
      maxWidth:"1200px",
      padding: "20px",
      minWidth: "320px",
      [`@media (maxWidth: 1024px)`]: {
        maxWidth: "90%", // Adjust for medium screens
      },
      [`@media (maxWidth: 768px)`]: {
        maxWidth: "95%", // More fluidity for tablets
      },
      [`@media (maxWidth: 480px)`]: {
        maxWidth: "100%", // Full width for mobile
        padding: "10px",
       
      },
    },
    box:{
        backgroundColor: "#748ffc",
        color: "black",
        margin: "20px auto", // Centering the box
        padding: "20px",
        borderRadius: "8px",
        transition: "transform 0.3s ease",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        minHeight: "150px",
        width: "100%", // Ensures full width in container
    
        '&:hover': {
          transform: "scale(1.05)", // Slight zoom on hover

    },
},
text: {
    textAlign: "left", // Align text to the left
    fontWeight: "bold",
    fontSize: "18px",
    marginBottom: "10px",
   
  },

  buttonContainer: {
    display: "flex",
    gap: "10px", // Space between buttons
    marginTop: "auto", // Push buttons to bottom
    flexWrap: "wrap", // Ensures buttons don't overflow in small screens
    justifyContent: "center",
  },
  heading:{
    display:"flex",
    justifyContent:"center",
    alignItem:"center",
    fontSize:"40px",
    margin:"0px",
    fontWeight:"bold",
    textAlign: "center",
  },
  boxmanagement:{
    margin:"0px 70px",
    maxWidth: "90%", // Ensures proper scaling
  },
 
}
