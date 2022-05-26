import React from "react";
import "../styles/signupStyle.css";

export function Signup() {
  return (
    <div className="container">
      <div className="frame">
        <div ng-app ng-init="checked = false">
          <form className="form-signin" action="" method="post" name="form">
          <label for="fullname">Full name</label>
          <input className="form-styling" type="text" name="fullname" placeholder=""/>
          <label for="email">Email</label>
          <input className="form-styling" type="text" name="email" placeholder=""/>
          <label for="password">Password</label>
          <input className="form-styling" type="text" name="password" placeholder=""/>
          <label for="confirmpassword">Confirm password</label>
          <input className="form-styling" type="text" name="confirmpassword" placeholder=""/>
          <a ng-click="checked = !checked" class="btn-signup">Sign Up</a>
          </form>
        </div>
      </div>

      <a id="refresh" value="Refresh" onClick="history.go()" />
    </div>
  );
}
