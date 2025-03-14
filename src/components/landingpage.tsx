
import { landingStyles } from "../style/landingStyles";
import { Button, Drawer } from "@mantine/core";
import food from "../assets/foodtracking.jpg";
import exercise from "../assets/fitnesstracking.png";
import setup from "../assets/setup1.jpg";
import transform from "../assets/transform.jpg";
import protein from "../assets/okay11.jpg";
import pregnancy from "../assets/pregnancy1.jpg";
import meal from "../assets/meal.png";
import intermediate from "../assets/intermediate.jpg";
import '@mantine/carousel/styles.css';
import { Carousel } from '@mantine/carousel';
import '@mantine/charts/styles.css';
import { useDisclosure } from '@mantine/hooks';



const LandingPage = () => {
  const [opened, { open, close }] = useDisclosure(false);
  return (
    <>
    <section id="backgrounddesign">
    <div style={landingStyles.container1}>
      {/* Text overlay on background */}
      <div style={landingStyles.overlayText}>
        <p style={landingStyles.quote}>
          "Your Journey to a Healthier You Starts Here!"
        </p>
        <p>
          Welcome to your personalized fitness companion!
        </p>
        <p style={landingStyles.threeword}>
          Track. Plan. Achieve.
        </p>
        <Drawer 
        offset={8} 
        radius="md" 
        opened={opened} 
        onClose={close} 
        title="Authentication" 
        overlayProps={{ backgroundOpacity: 0.5, blur: 4 }}
        transitionProps={{ transition: 'rotate-left', duration: 150, timingFunction: 'linear' }}
        >
    <div>
      <h2> Register an account</h2>
      <form>
            <div style={landingStyles.authentication}>
              <label>First Name: </label>
              <input
                type="text"
                name="firstName"
                required
              />
            </div>

            <div style={landingStyles.authentication}>
              <label>Last Name: </label>
              <input
                type="text"
                name="lastName"
                required
              />
            </div>

        <div style={landingStyles.authentication}>
          <label>Email: </label>
          <input
            type="email"
            name="email"
            required
          />
        </div>
            <div style={landingStyles.authentication}>
              <label>Create Password: </label>
              <input
                type="password"
                name="password"
                required
              />
            </div>

            <div style={landingStyles.authentication}>
              <label>Verify Password: </label>
              <input
                type="password"
                name="verifyPassword"
                required
              />
            </div>

            <div style={landingStyles.authentication}>
              <label>Height (in cm): </label>
              <input
                type="number"
                name="height"
                required
              />
            </div>

            <div style={landingStyles.authentication}>
              <label>Age: </label>
              <input
                type="number"
                name="age"
                required
              />
            </div>

            <div style={landingStyles.authentication}>
              <label>Weight (kg): </label>
              <input
                type="number"
                name="weight"
                required
              />
            </div>
            <div style={landingStyles.authentication}>
            <Button type="submit" >Register</Button>
            </div>
        
      </form>

      <p>
          <span style={landingStyles.authentication}>
            Already have an account? 
            
          </span>
          <div style={landingStyles.authentication}>
          <Button >Login here</Button>
          </div>
          
      </p>
    </div>

      </Drawer>

      <Button variant="default" onClick={open} style={landingStyles.button} size="lg" color="blue">
        Login || Register 
      </Button>
       
      </div>
    </div>
    </section>

    <section id="after background design">
        <div style={landingStyles.container2}>Start your Journey with adding your Exercise and Food to track our health </div>
        <div style={landingStyles.photocontainer}>
          <div style={landingStyles.box}><img src={exercise} style={{width:"400px", height:"400px"}} /><p>Explain photo</p></div>
          <div style={landingStyles.box}><img src={food} style={{width:"400px", height:"400px"}} /><p>Explain photo</p></div>
        </div>

    </section>
    <section id="carousel">
      <div>
      <Carousel
      withIndicators
      height={700}
      slideSize={{ base: '100%', sm: '50%', md: '33.333333%' }}
      slideGap={{ base: 0, sm: 'lg' }}
      loop
  
      align="start"
      slidesToScroll={1}
      style={{margin:"100px 0px 50px 0px", backgroundColor:"rgb(212, 198, 207)", }}
>
      <Carousel.Slide style={landingStyles.coursel}>
        <img src={setup} style={{width:"100%", height:"100%"}}/>
      </Carousel.Slide>
      <Carousel.Slide style={landingStyles.coursel}>
      <img src={transform} style={{width:"100%", height:"100%"}}/>
      </Carousel.Slide>
      <Carousel.Slide style={landingStyles.coursel}>
      <img src={protein} style={{width:"100%", height:"100%"}}/>
      </Carousel.Slide>
      <Carousel.Slide style={landingStyles.coursel}>
      <img src={pregnancy} style={{width:"100%", height:"100%"}}/>
      </Carousel.Slide>
      <Carousel.Slide style={landingStyles.coursel}>
      <img src={intermediate} style={{width:"100%", height:"100%"}}/>
      </Carousel.Slide>
      <Carousel.Slide style={landingStyles.coursel}>
      <img src={meal} style={{width:"100%", height:"100%"}}/>
      </Carousel.Slide>
      {/* ...other slides */}
    </Carousel>
      </div>
    </section>

   
    </>
  );
};

export default LandingPage;
