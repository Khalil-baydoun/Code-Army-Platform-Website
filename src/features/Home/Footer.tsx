import { observer } from "mobx-react-lite";
import React from "react";
import { Link } from "react-router-dom";
import { Container, Grid, Header, Segment, List, Icon } from "semantic-ui-react";

const Footer =() =>(
    <Segment  inverted vertical style={{marginTop:"1.5em", padding: '2em 0em', backgroundColor: "#2f4858" }}>
    <Container>
      <Grid divided inverted stackable>
        <Grid.Row>
          <Grid.Column width={3}>
            <Header inverted as='h4' content='About' />
            <List link inverted>
              <List.Item as={'a'} href={"mailto: baydounkhalil1@gmail.com"} >
              <Icon name="mail"></Icon>
                Contact Us</List.Item>
              <List.Item as='a' href="https://github.com/Khalil-baydoun/Code-Army-Platform-Website">
                <Icon name="github"></Icon>
                Github</List.Item>
            </List>
          </Grid.Column>
          <Grid.Column width={3}>
            <Header inverted as='h4' content='Company' />
            <List link inverted >
              <List.Item as='a'>
              <Icon name="privacy"></Icon>
                Privacy Policy</List.Item>
                <List.Item as='a'>
              <Icon name="cubes"></Icon>
                Terms of Service</List.Item>
            </List>
          </Grid.Column>
          <Grid.Column width={7}>
          <List link inverted>
            <div style={{marginTop:"2.7em"}}>
            <List.Item as='a'>
              <Icon name="copyright outline"></Icon>
              2022 Code Army, All rights reserved.
              </List.Item>
            </div>

            </List>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  </Segment>
    
  )

  export default observer(Footer);