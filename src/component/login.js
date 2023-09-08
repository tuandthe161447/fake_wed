const Login = () => {
    return ( 
        <div class="container" id="container">
      <div class="form-container register-container">
        <form>
          <h1>Register here</h1>
          <div class="form-control">
            <input type="text" id="username" placeholder="Name" />
            <small id="username-error"></small>
            <span></span>
          </div>
          <div class="form-control">
            <input type="email" id="email" placeholder="Email" />
            <small id="email-error"></small>
            <span></span>
          </div>
          <div class="form-control">
            <input type="password" id="password" placeholder="Password" />
            <small id="password-error"></small>
            <span></span>
          </div>
          <button type="submit" value="submit">Register</button>
          <span>or use your account</span>
          <div class="social-container">
            <a href="#" class="social"
              ><i class="fa-brands fa-facebook-f"></i
            ></a>
            <a href="#" class="social"><i class="fa-brands fa-google"></i></a>
            <a href="#" class="social"><i class="fa-brands fa-tiktok"></i></a>
          </div>
        </form>
      </div>

      <div class="form-container login-container">
        <form class="form-lg">
          <h1>Login here.</h1>
          <div class="form-control2">
            <input type="email" class="email-2" placeholder="Email" />
            <small class="email-error-2"></small>
            <span></span>
          </div>
          <div class="form-control2">
            <input type="password" class="password-2" placeholder="Password" />
            <small class="password-error-2"></small>
            <span></span>
          </div>

          <div class="content">
            <div class="checkbox">
              <input type="checkbox" name="checkbox" id="checkbox" />
              <label for="">Remember me</label>
            </div>
            <div class="pass-link">
              <a href="#">Forgot password</a>
            </div>
          </div>
          <button type="submit" value="submit">Login</button>
          <span>Or use your account</span>
          <div class="social-container">
            <a href="#" class="social"
              ><i class="fa-brands fa-facebook-f"></i
            ></a>
            <a href="#" class="social"><i class="fa-brands fa-google"></i></a>
            <a href="#" class="social"><i class="fa-brands fa-tiktok"></i></a>
          </div>
        </form>
      </div>

      <div class="overlay-container">
        <div class="overlay">
          <div class="overlay-panel overlay-left">
            <h1 class="title">
              Hello <br />
              friends
            </h1>
            <p>If you have an account, login here and have fun</p>
            <button class="ghost" id="login">
              Login
              <i class="fa-solid fa-arrow-left"></i>
            </button>
          </div>

          <div class="overlay-panel overlay-right">
            <h1 class="title">
              Start your <br />
              journey now
            </h1>
            <p>
              If you don'n have an account yet, join us and start your journey
            </p>
            <button class="ghost" id="register">
              Register
              <i class="fa-solid fa-arrow-right"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
     );
}

export default Login;