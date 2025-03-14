
import { Button, Container, Grid, Text, Space, Card } from '@mantine/core';
import { dashboardStyles } from '../style/dashboardStyles';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {

    const navigate = useNavigate();
    return (

        <Container>
            
      {/* <section style={dashboardStyles.container}>
        <div style={dashboardStyles.boxmanagement}>
        <div style={dashboardStyles.heading}>
            <p>Dashboard</p>
        </div>
         <Grid gutter="md">
         <Grid.Col span={6} sm={6} xs={12}>
          <div style={dashboardStyles.box}>
            <div style={dashboardStyles.text}>Exercise</div>
            <div style={dashboardStyles.buttonContainer}>
              <Button>Edit</Button>
              <Button color="red">Delete</Button>
            </div>
          </div>
        </Grid.Col>
        <Grid.Col span={6} sm={6} xs={12}>
          <div style={dashboardStyles.box}>
            <div style={dashboardStyles.text}>Food</div>
            <div style={dashboardStyles.buttonContainer}>
              <Button>Edit</Button>
              <Button color="red">Delete</Button>
            </div>
          </div>
        </Grid.Col>

        <Grid.Col span={6} sm={6} xs={12}>
          <div style={dashboardStyles.box}>
            <div style={dashboardStyles.text}>Meal Planner</div>
            <div style={dashboardStyles.buttonContainer}>
              <Button>Edit</Button>
              <Button color="red">Delete</Button>
            </div>
          </div>
        </Grid.Col>

        <Grid.Col span={6} sm={6} xs={12}>
          <div style={dashboardStyles.box}>
            <div style={dashboardStyles.text}>BMI Indicator</div>
            <div style={dashboardStyles.buttonContainer}>
              <Button>Edit</Button>
              <Button color="red">Delete</Button>
            </div>
          </div>
        </Grid.Col>
      </Grid>
      </div>
        </section> */}
        
        
        <section style={{
            position: "relative",
            boxSizing: "border-box",
            //overflow: "hidden",
           // height: "100vh",
            backgroundColor: "",
            marginBottom:"20px"
        }}>
        <Text size="40px" fw={700} style={{ 
            marginBottom: "20px" ,
            marginTop:"20px",
            display:"flex",
            justifyContent:"center",

        }}>
          Welcome to Dashboard
        </Text>

        <Grid>
          <Grid.Col span={4}>
            <Card
            shadow="sm"
              padding="lg"
              radius="md"
              style={{
               
                cursor: "pointer",
        backgroundColor:"#748ffc",
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
    "&:hover": {
      transform: "scale(1.05)",
      border: `2px solid white`,
    },
              }}
              onClick={() => navigate("/exercise")} // Navigate to Exercise page
              onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
              onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
            >
              <Text size="lg" fw={600}>
                Manage Exercise
              </Text>
              <Space h="md" />
              <Button size="md">Edit</Button>
              <Button size="md" color="red">Delete</Button>
            </Card>
          </Grid.Col>

          <Grid.Col span={4}>
            <Card
              shadow="sm"
              padding="lg"
              radius="md"
              style={{
                transition: "transform 0.3s",
                cursor: "pointer",
                backgroundColor: "#748ffc",
              }}
              onClick={() => navigate("/food")} // Navigate to Exercise page
              onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
              onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
            >
              <Text size="lg" fw={600}>
                Manage Food
              </Text>
              <Space h="md" />
              <Button size="md">Edit</Button>
              <Button size="md" color="red">Delete</Button>
            </Card>
          </Grid.Col>

          <Grid.Col span={4}>
            <Card
              shadow="sm"
              padding="lg"
              radius="md"
              style={{
                transition: "transform 0.3s",
                cursor: "pointer",
                backgroundColor: "#748ffc",
              }}
              onClick={() => navigate("/mealplanner")} 
              onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
              onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
            >
              <Text size="lg" fw={600}>
                Manage Meal Planner
              </Text>
              <Space h="md" />
              <Button size="md">Edit</Button>
              <Button size="md" color="red">Delete</Button>
            </Card>
          </Grid.Col>

          <Grid.Col span={6}>
            <Card
              shadow="sm"
              padding="lg"
              radius="md"
              style={{
                transition: "transform 0.3s",
                cursor: "pointer",
                backgroundColor: "#748ffc",
              }}
              onClick={() => navigate("/bmiindicator")} // Navigate to Exercise page
              onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
              onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
              >
              <Text size="lg" fw={600}>
                Manage BMI Indicator
              </Text>
              <Space h="md" />
              <Button size="md">Edit</Button>
              <Button size="md" color="red">Delete</Button>
            </Card>
          </Grid.Col>

          <Grid.Col span={6}>
            <Card
              shadow="sm"
              padding="lg"
              radius="md"
              style={{
                transition: "transform 0.3s",
                cursor: "pointer",
                backgroundColor: "#748ffc",
              }}
              onClick={() => navigate("/weeklyreport")} // Navigate to Exercise page
              onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
              onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
              >
              <Text size="lg" fw={600}>
                Manage weeklyreport
              </Text>
              <Space h="md" />
              <Button size="md">Edit</Button>
              <Button size="md" color="red">Delete</Button>
            </Card>
          </Grid.Col>
        </Grid>

        </section>
        </Container>
    );
  };
  
  export default Dashboard;