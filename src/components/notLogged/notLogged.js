import GoogleLogin from "../googleLogin/googleLogin";
import "./notLogged.scss";
function NotLogged({setUser}) {
  return (
    <div className="c-container">
      <div className="c-login-request l-flex l-flex--center l-flex--vertical">
        <div className="c-login-request__info">
        <h2>Faça login na conta google para utilizar o aplicativo!</h2>
        <GoogleLogin setUser={setUser}/>
        </div>
      </div>
    </div>
  );
}

export default NotLogged;
