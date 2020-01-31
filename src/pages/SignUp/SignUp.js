import React from "react";

import {
  Container,
  Title,
  Buttons,
  VectorContainer,
  Img
} from "../SignIn/styles";
import Card from "../../components/Card";
import M from "materialize-css";
import Input from "../../components/Input";
import Button from "../../components/Button";
import SizedBox from "../../components/SizedBox";
import signin_vector from "../../assets/img/flame-sign-up.png";
import BackLink from "../../components/BackLink";

export default function SignUp({ history }) {
  return (
    <Container>
      <VectorContainer>
        <Img src={signin_vector}></Img>
      </VectorContainer>
      <Title>Sign Up</Title>
      <Card width="50%">
        <BackLink onClick={() => history.push("/login")}>
          Back to Login
        </BackLink>
        <form class="col s12">
          <Input
            id="email"
            name="email"
            icon="mail_outline"
            type="email"
            label="Email Address"
          ></Input>
          <Input
            id="password"
            name="password"
            icon="lock_outline"
            type="password"
            label="Password"
          ></Input>
          <Input
            id="username"
            name="username"
            icon="mail_outline"
            type="text"
            label="Username"
          ></Input>
          <Input
            id="fullname"
            name="fullname"
            icon="mail_outline"
            type="email"
            label="Full Name"
          ></Input>
          <div class="input-field col s12">
            <select className="browser-default">
              <option value="" disabled selected>
                Role
              </option>
              <option value="1">Survey Respondent</option>
              <option value="2">Survey Coordinator</option>
            </select>
          </div>
        </form>
        <SizedBox height="20px" />
        <Buttons>
          <Button onClick={() => history.push("/")}>Sign In</Button>
          <SizedBox height="20px" />
          <Button color="purple">Create Account</Button>
        </Buttons>
      </Card>
    </Container>
  );
}