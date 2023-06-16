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
          <h1>Cake Supplies</h1>

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



// import React from "react";
// import { useState } from "react";
// import { useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import "./Login.css"

// export const Login = () => {

//   const [userName, setUserName] = useState("");


//   const navigate = useNavigate();


//   const Login = async () => {
//     try {
//       const response = await fetch(
//         `https://localhost:7229/api/Login/loginvalidate`,
//         {
//           body: JSON.stringify({
//             email: userName,

//           }),
//           credentials: "include",
//           method: "post",
//           headers: { "Content-Type": "application/json" },
//         }
//       );

//       const loginResponse = await response.json();

//       if (response.ok) {
//         const userData = { ...loginResponse?.user };
//         userData.isStaff = userData.userType === "Admin" ? true : false;
//         localStorage.setItem("project_user", JSON.stringify(userData));
//         navigate("/home");
//       } else {
//         console.log(response);
//         window.alert("Invalid login");
//         throw new Error(`Error! status: ${response.status}`);
//       }


//     } catch (error) {
//       console.log(error);
//       // setErrors(error);
//     }
//   };
//   const submissionHandler = (event) => {
//     event.preventDefault();

//   };

//   return (
//     <>
//       <div className="Container">
//         <div className="ImageContainer">
//           <div className="shadow"></div>
//           <h1 className="LoginHeader">Cake supplies</h1>
//           {/* <img className="LoginImage" src={LoginBackGroundPhoto} /> */}
//           <div className="LoginQuote">"Today’s Premium Cake and Candy Supply Store with worldwide shipping located in Nashville,Cake and sweet Supplies ™ carries an extensive selection of the most relevant cake decorating supplies in todays market. You will find top of the line fondant cutters, rolled fondant, tylose powder, chocolate and candy making supplies, as well as the best icing and fondant tools, the highest quality cake pans, and much more."<br /> -Norman Cousins</div>
//         </div>
//         <div className="InputContainer">
//           <div className="emailInput">
//             <h3>Email</h3>
//             <input
//               type="text"
//               className='input'
//               value={userName}
//               onChange={(event) => setUserName(event.target.value)}
//             ></input>
//           </div>
//           <div className="buttonContainer">
//             <div className="button" onClick={(e) => submissionHandler(e)}>
//               Login
//             </div>
//           </div>
//         </div>
//       </div>

//     </>
//   );
// };

