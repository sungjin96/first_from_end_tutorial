import React, { useState } from "react";
import axios from "axios";

const Signin = ({ onRouteChange }) => {
  const [inputs, setInputs] = useState({});

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
  };

  const onSignIn = (e) => {
    console.log(inputs);

    fetch("http://localhost:3000/signin", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: inputs.email,
        password: inputs.password,
      }),
    })
      .then((res) => {
        console.log(res);
        return res.json();
      })
      .then((data) => {
        if (data === "success") {
          onRouteChange("home");
        } else {
          alert("로그인 실패!");
        }
      });
    // axios
    //   .post("http://localhost:3000/signin", {
    //     email: inputs.email,
    //     password: inputs.password,
    //   })
    //   .then((res) => {
    //     if (res.statusText === "OK") {
    //       onRouteChange("home");
    //     }
    //   })
    //   .catch((err) => console.log(err));
  };

  return (
    <article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
      <main className="pa4 black-80">
        <div className="measure">
          <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
            <legend className="f1 fw6 ph0 mh0">Sign In</legend>
            <div className="mt3">
              <label className="db fw6 lh-copy f6" htmlFor="email">
                Email
              </label>
              <input
                className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                type="email"
                name="email"
                id="email"
                onChange={onChangeHandler}
              />
            </div>
            <div className="mv3">
              <label className="db fw6 lh-copy f6" htmlFor="password">
                Password
              </label>
              <input
                className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                type="password"
                name="password"
                id="password"
                onChange={onChangeHandler}
              />
            </div>
          </fieldset>
          <div className="">
            <input
              onClick={onSignIn}
              className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
              type="submit"
              value="Sign in"
            />
          </div>
          <div className="lh-copy mt3">
            <p
              onClick={() => onRouteChange("register")}
              className="f6 link dim black db pointer"
            >
              Register
            </p>
          </div>
        </div>
      </main>
    </article>
  );
};

export default Signin;
