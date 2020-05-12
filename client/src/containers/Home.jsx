import React, { Component } from 'react';

class Home extends Component {
  render() {
    return (
      <div>
      <main class="container">
        <section class="row">
          <div class="col-md-8">
            <article class="block">
              <h1 class="block-header">About Me</h1>
              <h3 id="contact-info">Email: mknoles78@gmail.com 
                <a href="https://drive.google.com/file/d/1GkMcbzEiEe9PxXyKLebmjYYc98p9kie9/view?usp=sharing" target="blank">Resume</a></h3>
              <h3 id="contact-info">gitHub: <a href="https://github.com/MKnoles78" target="_blank">github.com/MKnoles78</a></h3>
              <h3 id="contact-info">linkedIn: <a href="https://www.linkedin.com/in/michael-knoles-25b19259" target="_blank">linkedin.com/in/michael-knoles</a></h3>
              <hr />
              <img src="assets/imgs/portrait.jpg" alt="" id="about-self-image" />
              <p>Mike Knoles has an extensive background in financial services. This experience includes over 
                fifteen years of working within the retail, commercial, retirement, and institutional services
                sectors of the financial industry. Recently, he acquired new skillsets to further advance his
                career in either the financial industry or other technology related industries.
              </p>
              <br />
              <p>Mike is fueled by his passion and commitment to improving the financial well being of others 
                and introducing people to new technologies.  He considers himself to be open to changes as well
                as taking on new knowledge which continues to add to his existing skillsets.  His biggest 
                accomplishments was being able to start in entry level positions and rapidly advance upwards, 
                by working dynamically with diverse small and large teams.  He continues to be level headed 
                under pressure, and has a strong willingness to take on new task and leadership when possible.
              </p>
            </article>
          </div>
        </section>
      </main>
      </div>
    );
  }
}

export default Home;