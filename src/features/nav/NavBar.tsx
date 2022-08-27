import { observer } from "mobx-react-lite";
import React, { Fragment, useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { NavItem } from "reactstrap";
import { Container, Dropdown, Menu, Segment } from "semantic-ui-react";
import { RootStoreContext } from "../../app/stores/rootStore";
import LoginForm from "../forms/LoginForm";
import SignUpForm from "../forms/SignUpForm";

const NavBar = () => {
  const rootStore = useContext(RootStoreContext);
  const { user, logout } = rootStore.userStore;
  const { openModal } = rootStore.modalStore;

  const SettingsDropdown = () => (
    <Dropdown
      style={{ color: "#ffd62f", fontSize: "12pt" }}
      trigger={<span>{user?.FirstName}</span>}
    >
      <Dropdown.Menu>
      <Dropdown.Item
          color="#ffd62f"
          icon="student"
          text="My Courses"
          as={Link}
          to="/course"
        />
        <Dropdown.Item
          color="#ffd62f"
          icon="pie chart"
          text="My Statistics"
          as={Link}
          to="/statistics"
        />
        <Dropdown.Item
          color="#ffd62f"
          text="My Submissions"
          icon="code"
          as={Link}
          to="/submissions/page/1"
        />
        <Dropdown.Item
          color="#ffd62f"
          text="Verdicts Guide"
          icon="help"
          as={Link}
          to="/verdictsGuide"
        />
        <Dropdown.Item onClick={logout} text="Logout" icon="power" />
      </Dropdown.Menu>
    </Dropdown>
  );
  const LoginOptions = () => (
    <Fragment>
    <Menu.Item onClick={()=> openModal(<LoginForm />)}>
    <span className ="LoginOptions" >
      Login
    </span>
    </Menu.Item>
    <Menu.Item onClick={()=> openModal(<SignUpForm />)}>
    <span  className ="LoginOptions" >
      SignUp
    </span>
    </Menu.Item>
    </Fragment>
  );

  return (
    <Menu fixed="top" inverted className="Nav">
      <Container className="hcont">
        <Menu.Item header as={Link} exact="true" to="/course">
          <img
            src="/assets/images/logo3.png"
            alt="logo"
            style={{ marginRight: "10px" }}
          />
          <span
            style={{
              fontWeight: 300,
              letterSpacing: "1px",
              color: "#ffd62f",
              fontSize: "120%",
            }}
          >
            Code Army
          </span>
        </Menu.Item>

        <Menu.Menu position="right">
        {!user && <LoginOptions/>}
        <Menu.Item>{user && <SettingsDropdown />}</Menu.Item>
        </Menu.Menu>
      </Container>
    </Menu>
  );
};
export default observer(NavBar);
