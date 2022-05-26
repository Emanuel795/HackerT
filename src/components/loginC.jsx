import React from "react";
import "../styles/loginStyle.css";

export function LoginC() {
  return (
    <div class="container">
      <div class="frame">
        <div ng-app ng-init="checked = false">
          <form class="form-signin" action="" method="post" name="form">
            <label for="username">Username</label>
            <input
              class="form-styling"
              type="text"
              name="username"
              placeholder=""
            />
            <label for="password">Password</label>
            <input
              class="form-styling"
              type="password"
              name="password"
              placeholder=""
            />
            <input type="checkbox" id="checkbox" />
            <label for="checkbox">
              <span class="ui"></span>Keep me signed in
            </label>
            <div class="btn-animate">
              <a class="btn-signin">Sign in</a>
            </div>
          </form>
        </div>
      </div>

      <a id="refresh" value="Refresh" onClick="history.go()" />
    </div>
  );
}
