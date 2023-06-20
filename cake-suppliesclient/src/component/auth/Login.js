import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import { LoggingInUser } from "../../API/LoginAPI";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [user, setUser] = useState({});

  // const localProjectUser = localStorage.getItem("project_user")
  // const localUserObject = JSON.parse(localProjectUser)
  const navigate = useNavigate();


  const LoginUser = async () => {
    let LoginData = await LoggingInUser(email);
    if (LoginData === false) {
      console.log("failed login")
    }
    else {
      console.log("succes")
      setUser(LoginData)

      localStorage.setItem(
        "project_user",
        JSON.stringify({
          id: LoginData.id,
          name: LoginData.name,
          email: LoginData.email,
          isStaff: LoginData.isStaff,
        })
      );
      navigate("/")
    }

  }

  const handleLogin = (e) => {
    e.preventDefault();

    return fetch(`https://localhost:7005/api/Users/GetByEmail/${email}`)
      .then((res) => res.json())
      .then((foundUsers) => {
        if (foundUsers.length === 1) {
          const user = foundUsers[0];
          localStorage.setItem(
            "project_user",
            JSON.stringify({
              id: user.id,
              isStaff: user.isStaff,
            })
          );

          navigate("/");
        } else {
          window.alert("Invalid login");
        }
      });
  };

  return (
    <div className="background-Image">
          <div className="projectName">
            {/* <div className="LoginQuote">"Today’s Premium Cake and Candy Supply Store with worldwide shipping located in Nashville,Cake and sweet Supplies ™ carries an extensive selection of the most relevant cake decorating supplies in todays market. You will find top of the line fondant cutters, rolled fondant, tylose powder, chocolate and candy making supplies, as well as the best icing and fondant tools, the highest quality cake pans, and much more."</div> */}
          <h1 className="nameHeader">Cake Supplies</h1>

          </div>
      <main className="container--login">
        <div className="logo-cake">
        </div>
        <section>
          <div className="form--login" >
            <h2>Sign in</h2>
            <div className="loginStyle">
              <fieldset>
                <label htmlFor="inputEmail"> Email address </label>
                <input
                  type="email"
                  //value={email}
                  onChange={(evt) => setEmail(evt.target.value)}
                  className="form-control"
                  placeholder="Email address"
                  required
                  autoFocus
                />
              </fieldset>
              <fieldset className="sign-in">
                <button type="submit" onClick={() => LoginUser()}>Sign in</button>
              </fieldset>
              <section className="link--register">
                <Link to="/register">Not a member yet?</Link>
              </section>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};




