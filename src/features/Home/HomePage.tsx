import { observer } from "mobx-react-lite";
import React from "react";
import { Button, Container, Grid, Header, Segment, Table, Image, Menu, Icon, List } from "semantic-ui-react";
import NavBar from "../nav/NavBar";
import Footer from "./Footer";

const HomepageHeading = () => (
  <Container text>
    <Header
      as='h1'
      content='Lets Start Coding!'
      style={{
        fontSize: '4em',
        fontWeight: 'normal',
        marginBottom: 0,
        color: "#2f4858" 
      }}
    />
    <Header
      as='h2'
      content='The coding platform that makes coding fun'
      style={{
        fontSize: '1.7em',
        fontWeight: 'normal',
        marginTop: '1.5em',
        marginBottom: '1.5em',
        color: "#2f4858" 
      }}
    />
    <Button
    size="huge"
      color="teal"
    >       
    Try With Guest Login
    <Icon name='arrow right' />

    </Button>
  </Container>
)


const HomePage = () => {
  return (
    <div className="flex-wrapper" style={{ marginTop: "8.5em" }}>
      <div>
      <NavBar />
      <Container>
      <HomepageHeading/>
        <Segment style={{ padding: '8em 0em' }} vertical>
          <Grid container stackable verticalAlign='middle'>
            <Grid.Row>
              <Grid.Column width={8}>
                <Header as='h3' style={{ fontSize: '2em' , color: "#2f4858" }}>
                  We Help Instructors and Students
                </Header>
                <p style={{ fontSize: '1.33em' }}>
                  We can give instructors the ability to manage their coding courses and make it eductional and fun!.
                  Let us make empower your coding course and make the coding learning experience very pleasent and fun.
                </p>
                <Header as='h3' style={{ fontSize: '2em', color: "#2f4858"  }}>
                  We Help Coders Enhance their Skills and Challenge their Friends
                </Header>
                <p style={{ fontSize: '1.33em' }}>
                  Do you want to sharpen or refresh your coding skills?<br/>
                  Do you want to create a coding problemset and challenge your friends?<br/>
                  If you answered yes, then site is for you!                  
                </p>
              </Grid.Column>
              <Grid.Column floated='right' width={7}>
                <Image bordered rounded size='large' src={require('./assets/programming.jpg')} />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
      </Container>
      </div>
      <Footer/>
    </div>
  );
};

export default observer(HomePage);
