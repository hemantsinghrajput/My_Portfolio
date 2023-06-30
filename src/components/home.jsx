import React,{useState} from 'react'
import axios from 'axios';
import './js/meyawo.js'
import me from './imgs/hemant_bg.png'
import pencil from './imgs/pencil-case.svg'
import responsive from './imgs/responsive.svg'
import tool from "./imgs/toolbox.svg"
import analytic from "./imgs/analytics.svg"
import folio1 from "./imgs/movie.jpg"
import folio2 from "./imgs/pub.jpg"
import folio3 from "./imgs/digit.png"
import scooter from "./imgs/scooter.svg"
import startup from "./imgs/startup.svg"
import shipped from "./imgs/shipped.svg"
import avtar2 from "./imgs/avatar2.jpg"
import avtar3 from "./imgs/avatar3.jpg"
import blog1 from "./imgs/img-1.jpg"
import blog2 from "./imgs/img-2.jpg"



function Home() {
    const [isActive, setIsActive] = useState(false);

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    
    let handleSubmit = async (e) => {
      e.preventDefault();
      try {
        let res = await fetch("https://myapi-0j13.onrender.com/api/service", {
          method: "POST",
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify({
            name: e.target.name.value,
            email: e.target.email.value,
            message: e.target.message.value
          }),
        });
        console.log(name);
        let resJson = await res.json();
        console.log(res);
        if (res.status === 201) {
          setName("");
          setEmail("");
          setMessage("");
          console.log("success");
          alert("Success");
        } else {
          console.log("Some error occurred");
        }

      } catch (err) {
        console.log(err);
      }
    };
      
      
      




  return (
    <>
<body data-spy="scroll" data-target=".navbar" data-offset="40" id="home">

   
<nav className="custom-navbar" data-spy="affix" data-offset-top="20">
      <div className="container">
        <a className="logo" href="#">Portfolio.</a>
        <ul className={`nav ${isActive ? 'show' : ''}`}>
        <li class="item">
                    <a class="link" href="#home">Home</a>
                </li>
                <li class="item">
                    <a class="link" href="#about">About</a>
                </li>
                <li class="item">
                    <a class="link" href="#portfolio">Portfolio</a>
                </li>
                <li class="item">
                    <a class="link" href="#testmonial">Testmonial</a>
                </li>
                <li class="item">
                    <a class="link" href="#blog">Blog</a>
                </li>
                <li class="item">
                    <a class="link" href="#contact">Contact</a>
                </li>
        </ul>
        <a
          href="javascript:void(0)"
          id="nav-toggle"
          className="hamburger hamburger--elastic"
          onClick={() => setIsActive(!isActive)}
        >
          <span className="material-symbols-outlined">{isActive ? 'close' : 'menu'}</span>
        </a>
      </div>
    </nav>
    {/* <!-- End of Page Navbar --> */}

    {/* <!-- page header --> */}
    <header id="home" class="header">
        <div class="overlay"></div>
        <div class="header-content container">
            <h1 class="header-title">
                <span class="up">HI!</span>
                <span class="down">I am HEMANT SINGH RAJPUT</span>
            </h1>
            <p class="header-subtitle">FRONTEND WEB DESIGNER <br/>ASPIRING DATA SCIENTIST</p>

            <button class="btn btn-primary" >Visit My Works</button>
        </div>
    </header>
    {/* <!-- end of page header --> */}

    {/* <!-- about section --> */}
    <section class="section pt-0" id="about">
        {/* <!-- container --> */}
        <div class="container text-center">
            {/* <!-- about wrapper --> */}
            <div class="about">
                <div class="about-img-holder">
                    <img src={me} class="about-img"
                        alt="Download free bootstrap 4 landing page, free boootstrap 4 templates, Download free bootstrap 4.1 landing page, free boootstrap 4.1.1 templates, meyawo Landing page"/>
                </div>
                <div class="about-caption">
                    <p class="section-subtitle" style={{ color: 'white' }}>Who Am I ?</p>
                    <h2 class="section-title mb-3">About Me</h2>
                    <p style={{ color: 'white' }}>
                    My name is Hemant Rajput and I'm a final year undergraduate student pursuing B.Tech. in Information Technology from Madhav Institute of Technology & Science, Gwalior. With a strong passion for technology, my focus is on data science and artificial intelligence.
                    <br/><br/>
                    I have completed projects such as a Gradio Digit Recognizer,Movie Recommendation Web App, Salary Predictor and a Food Donation Web App, demonstrating my expertise in machine learning and web development. I have also gained practical experience as a Data Science Intern at Innomatics Research Lab. I possess strong skills in programming languages, frameworks, and databases, and have received recognition for my contributions. With a dedication to continuous learning and problem-solving, I am committed to making a positive impact in the field of technology.
                    </p>
                    <a href="https://drive.google.com/file/d/1ScjVl4qio08fPzXsgZx_meQSpeZhHyZq/view?usp=sharing" target="_blank">
                    <button class="btn-rounded btn btn-outline-primary mt-4" style={{ color: 'white' }}>
    Download CV
  </button>
</a>       
         </div>
            </div>
            {/* <!-- end of about wrapper --> */}
        </div>
        {/* <!-- end of container --> */}
    </section> 
    {/* <!-- end of about section --> */}




    {/* <!-- service section --> */}
    <section class="section" id="service">
        <div class="container text-center">
            <p class="section-subtitle">What I Do ?</p>
            <h6 class="section-title mb-6">Service</h6>
            {/* <!-- row --> */}
            <div class="row">
                <div class="col-md-6 col-lg-3">
                    <div class="service-card">
                        <div class="body">
                            <img src={pencil}
                                alt="Data Science"
                                class="icon"/>
                            <h6 class="title">Data Science</h6>
                            <p class="subtitle">Data Pre-processing, Data Analysis, Data Visualization, ML, NLP</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-lg-3">
                    <div class="service-card">
                        <div class="body">
                            <img src={responsive}
                                alt="Web Devloper"
                                class="icon"/>
                            <h6 class="title">Web Devloper</h6>
                            <p class="subtitle">HTML, CSS, JS, REACT, NODE JS, PYTHON, FLASK</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-lg-3">
                    <div class="service-card">
                        <div class="body">
                            <img src={tool}
                                alt="AIML"
                                class="icon"/>
                            <h6 class="title">AIML</h6>
                            <p class="subtitle">AI, DL, NLP, CV, ML</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-lg-3">
                    <div class="service-card">
                        <div class="body">
                            <img src={analytic}
                                alt="Compititive Programming"
                                class="icon"/>
                            <h6 class="title">Compititive Programming</h6>
                            <p class="subtitle">Python, C, C++</p>
                        </div>
                    </div>
                </div>
              </div>
            {/* <!-- end of row --> */}
        </div>
        {/* <!-- end of container --> */}
    </section> 
    {/* <!-- end of portfolio section --> */}


    {/* <!-- portfolio section --> */}
    <section class="section" id="portfolio">
        <div class="container text-center">
            <p class="section-subtitle">What I Did ?</p>
            <h6 class="section-title mb-6">Portfolio</h6>
            {/* <!-- row --> */}
            <div class="row">
  <div class="col-md-4">
    <a href="https://huggingface.co/spaces/hpratapsingh/Movie_Recommendation_system" class="portfolio-card">
      <img src={folio1} class="portfolio-card-img equal-size" alt="Movie Recommendation System" />
      <span class="portfolio-card-overlay">
        <span class="portfolio-card-caption">
          <h4>Movie Recommendation System</h4>
          <p class="font-weight-normal">Category: ML, NLP</p>
        </span>
      </span>
    </a>
  </div>
  <div class="col-md-4">
    <a href="https://hemantsinghrajput-pub-locator-pubhomepage-eg5hl5.streamlit.app/" class="portfolio-card">
      <img class="portfolio-card-img equal-size" src={folio2} alt="Pub Locator in UK" />
      <span class="portfolio-card-overlay">
        <span class="portfolio-card-caption">
          <h4>Pub Locator in UK</h4>
          <p class="font-weight-normal">Category: Data Science</p>
        </span>
      </span>
    </a>
  </div>
  <div class="col-md-4">
    <a href="https://huggingface.co/spaces/hpratapsingh/Digit?logs=build" class="portfolio-card">
      <img class="portfolio-card-img equal-size" src={folio3} alt="Gradio Digit Recognizer" />
      <span class="portfolio-card-overlay">
        <span class="portfolio-card-caption">
          <h4>Gradio Digit Recognizer</h4>
          <p class="font-weight-normal">Category: Deep Learning</p>
        </span>
      </span>
    </a>
  </div>
</div>
            {/* <!-- end of row --> */}
        </div>
        {/* <!-- end of container --> */}
    </section> 
    {/* <!-- end of portfolio section --> */}
 
    {/* <!-- pricing section --> */}
     {/* <section class="section" id="pricing">
        <div class="container text-center">
            <p class="section-subtitle">How Much I Charge ?</p>
            <h6 class="section-title mb-6">My Pricing</h6> */}
            {/* <!-- row --> */}
            {/* <div class="pricing-wrapper">
                <div class="pricing-card">
                    <div class="pricing-card-header">
                        <img class="pricing-card-icon" src={scooter}
                            alt="Download free bootstrap 4 landing page, free boootstrap 4 templates, Download free bootstrap 4.1 landing page, free boootstrap 4.1.1 templates, meyawo Landing page"/>
                    </div>
                    <div class="pricing-card-body">
                        <h6 class="pricing-card-title">Free</h6>
                        <div class="pricing-card-list">
                            <p>accusamus reprehenderit</p>
                            <p>provident dolorem </p>
                            <p>quos neque</p>
                            <p>fugiat quibusdam</p>
                            <p><i class="ti-close"></i></p>
                            <p><i class="ti-close"></i></p>
                        </div>
                    </div>
                    <div class="pricing-card-footer">
                        <span>$</span>
                        <span>0.00/Month</span>
                    </div>
                    <a href="#" class="btn btn-primary mt-3 pricing-card-btn">Subscribe</a>
                </div>
                <div class="pricing-card">
                    <div class="pricing-card-header">
                        <img class="pricing-card-icon" src={shipped}
                            alt="Download free bootstrap 4 landing page, free boootstrap 4 templates, Download free bootstrap 4.1 landing page, free boootstrap 4.1.1 templates, meyawo Landing page"/>
                    </div>
                    <div class="pricing-card-body">
                        <h6 class="pricing-card-title">Basic</h6>
                        <div class="pricing-card-list">
                            <p>accusamus reprehenderit</p>
                            <p>provident dolorem </p>
                            <p>quos neque</p>
                            <p>fugiat quibusdam</p>
                            <p>accusamus laboriosam</p>
                            <p><i class="ti-close"></i></p>
                        </div>
                    </div>
                    <div class="pricing-card-footer">
                        <span>$</span>
                        <span>9.99/Month</span>
                    </div>
                    <a href="#" class="btn btn-primary mt-3 pricing-card-btn">Subscribe</a>
                </div>
                <div class="pricing-card">
                    <div class="pricing-card-header">
                        <img class="pricing-card-icon" src={startup}
                            alt="Download free bootstrap 4 landing page, free boootstrap 4 templates, Download free bootstrap 4.1 landing page, free boootstrap 4.1.1 templates, meyawo Landing page"/>
                    </div>
                    <div class="pricing-card-body">
                        <h6 class="pricing-card-title">Premium</h6>
                        <div class="pricing-card-list">
                            <p>accusamus reprehenderit</p>
                            <p>provident dolorem </p>
                            <p>quos neque</p>
                            <p>fugiat quibusdam</p>
                            <p>accusamus laboriosam</p>
                            <p>inventore omnis</p>
                        </div>
                    </div>
                    <div class="pricing-card-footer">
                        <span>$</span>
                        <span>99.9/Month</span>
                    </div>
                    <a href="#" class="btn btn-primary mt-3 pricing-card-btn">Subscribe</a>
                </div>

            </div> */}
            {/* <!-- end of pricing wrapper --> */}
        {/* </div>  */}
        {/* <!-- end of container --> */}
    {/* </section>  */}
    {/* <!-- end of pricing section --> */}

    {/* <!-- section --> */}
    <section class="section-sm bg-primary">
        {/* <!-- container --> */}
        <div class="container text-center text-sm-left">
            {/* <!-- row --> */}
            <div class="row align-items-center">
                <div class="col-sm offset-md-1 mb-4 mb-md-0">
                    <h6 class="title text-light">Want to work with me?</h6>
                    <p class="m-0 text-light">Always feel Free to Contact & Hire me</p>
                </div>
                <div class="col-sm offset-sm-2 offset-md-3">
                    <button class="btn btn-lg my-font btn-light rounded">Hire Me</button>
                </div>
            </div> 
            {/* <!-- end of row --> */}
        </div> 
        {/* <!-- end of container --> */}
    </section>
     {/* <!-- end of section --> */}

    {/* <!-- testimonial section --> */}
    <section class="section" id="testmonial">
        <div class="container text-center">
            <p class="section-subtitle" style={{ color: 'white' }}>What Think Client About Me ?</p>
            <h6 class="section-title mb-6">Testmonial</h6>

            {/* <!-- row --> */}
            <div class="row">
                <div class="col-md-6">
                    <div class="testimonial-card">
                        <div class="testimonial-card-img-holder">
                            <img src={avtar2} class="testimonial-card-img"
                                alt="Download free bootstrap 4 landing page, free boootstrap 4 templates, Download free bootstrap 4.1 landing page, free boootstrap 4.1.1 templates, meyawo Landing page"/>
                        </div>
                        <div class="testimonial-card-body">
                            <p class="testimonial-card-subtitle">Updated Soon...</p>
                            <h6 class="testimonial-card-title">Client</h6>
                        </div>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="testimonial-card">
                        <div class="testimonial-card-img-holder">
                            <img src={avtar3} class="testimonial-card-img"
                                alt="Download free bootstrap 4 landing page, free boootstrap 4 templates, Download free bootstrap 4.1 landing page, free boootstrap 4.1.1 templates, meyawo Landing page"/>
                        </div>
                        <div class="testimonial-card-body">
                            <p class="testimonial-card-subtitle">Updated Soon...</p>
                            <h6 class="testimonial-card-title">Client</h6>
                        </div>
                    </div>
                </div>
            </div>
        </div> 
        {/* <!-- end of container --> */}
    </section> 
    {/* <!-- end of testimonial section --> */}

    {/* <!-- blog section --> */}
    <section class="section" id="blog">
        {/* <!-- container --> */}
        <div class="container text-center">
            <p class="section-subtitle">Recent Posts?</p>
            <h6 class="section-title mb-6">Blog</h6>
            {/* <!-- blog-wrapper --> */}
            <div class="blog-card">
                <div class="blog-card-header">
                    <img src={blog1} class="blog-card-img"
                        alt="Download free bootstrap 4 landing page, free boootstrap 4 templates, Download free bootstrap 4.1 landing page, free boootstrap 4.1.1 templates, meyawo Landing page"/>
                </div>
                <div class="blog-card-body">
                    <h5 class="blog-card-title">Blog 1</h5>

                        <p class="blog-card-caption">
                            <a href="#">By: Admin</a>
                            <a href="#"><i class="ti-heart text-danger"></i> 234</a>
                            <a href="#"><i class="ti-comment"></i> 123</a>
                        </p>
                        <p>Available Soon..</p>


                        <a href="#" class="blog-card-link">Read more <i class="ti-angle-double-right"></i></a>
                </div>
            </div>
            {/* <!-- end of blog wrapper --> */}

            {/* <!-- blog-wrapper --> */}
            <div class="blog-card">
                <div class="blog-card-header">
                    <img src={blog2} class="blog-card-img"
                        alt="Download free bootstrap 4 landing page, free boootstrap 4 templates, Download free bootstrap 4.1 landing page, free boootstrap 4.1.1 templates, meyawo Landing page"/>
                </div>
                <div class="blog-card-body">
                    <h5 class="blog-card-title">Blog 2</h5>

                        <p class="blog-card-caption">
                            <a href="#">By: Admin</a>
                            <a href="#"><i class="ti-heart text-danger"></i> 456</a>
                            <a href="#"><i class="ti-comment"></i> 264</a>
                        </p>

                        <p>Available Soon.</p>

                        <a href="#" class="blog-card-link">Read more <i class="ti-angle-double-right"></i></a>
                </div>
            </div>
            {/* <!-- end of blog wrapper --> */}

        </div>
        {/* <!-- end of container --> */}
    </section>
    {/* <!-- end of blog section --> */}

    {/* <!-- contact section --> */}
    <section class="section" id="contact">
        <div class="container text-center">
            <p class="section-subtitle" style={{ color: 'white' }}>How can you communicate?</p>
            <h6 class="section-title mb-5">Contact Me</h6>
            {/* <!-- contact form --> */}
            <form action="" class="contact-form col-md-10 col-lg-8 m-auto" onSubmit={handleSubmit}>
                <div class="form-row">
                    <div class="form-group col-sm-6">
                        <input type="text" name="name" size="50" class="form-control" placeholder="Your Name" required/>
                    </div>
                    <div class="form-group col-sm-6">
                        <input type="email" name="email" class="form-control" placeholder="Enter Email" requried/>
                    </div>
                    <div class="form-group col-sm-12">
                        <textarea name="message" id="comment" rows="6" class="form-control"
                            placeholder="Write Something"></textarea>
                    </div>
                    <div class="form-group col-sm-12 mt-3">
                        <input type="submit" value="Send Message" class="btn btn-outline-primary rounded"/>
                    </div>
                </div>
            </form>
            {/* <!-- end of contact form --> */}
        </div>
        {/* <!-- end of container --> */}
    </section>
    {/* <!-- end of contact section --> */}

    {/* <!-- footer --> */}
    <div class="container">
        <footer class="footer">
            <p class="mb-0">Copyright
                <script>document.write(new Date().getFullYear())</script> &copy; <a
                    href="http://www.devcrud.com">Hemant</a> Singh <a
                    href="https://themewagon.com">Panwar</a>
            </p>
            <div class="social-links text-right m-auto ml-sm-auto">
                <a href="https://www.facebook.com/HemantSinghDoadPanwar.047/" class="link"><i class="fab fa-facebook-f"></i></a>
                <a href="https://twitter.com/kunwarhemantpr1?lang=en" class="link"><i class="fab fa-twitter"></i></a>
                <a href="https://github.com/hemantsinghrajput/" class="link"><i class="fab fa-github"></i></a>
                <a href="https://www.instagram.com/hpratapsingh_47/" class="link"><i class="fab fa-instagram"></i></a>
                <a href="https://www.linkedin.com/in/hemantsinghrajput/" class="link"><i class="fab fa-linkedin-in"></i></a>
            </div>
        </footer>
    </div> 
    {/* <!-- end of page footer --> */}

    {/* <!-- core  --> */}
    {/* <script src="../vendors/jquery/jquery-3.4.1.js"></script>
    <script src="../vendors/bootstrap/bootstrap.bundle.js"></script>

    {/* <!-- bootstrap 3 affix --> */}
    {/* <script src="../vendors/bootstrap/bootstrap.affix.js"></script> */} 

    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    {/* <!-- Meyawo js --> */}
    <script src='./js/meyawo.js'></script>

</body>
    </>
  )
}

export default Home;