import React from 'react'

const Landing = () => {
    return (
        <section className="landing">
      <div className="dark-overlay">
        <div className="landing-inner">
          <h1 className="x-large">Better-Together</h1>
          <p className="lead">
            Web application to connect the elderly members of the community in order to encourage doing activities together
          </p>
          <div className="buttons">
            <a href="register.html" class="btn btn-primary">Sign Up</a>
            <a href="login.html" class="btn btn-light">Login</a>
          </div>
        </div>
      </div>
    </section>
    )
}

export default Landing
