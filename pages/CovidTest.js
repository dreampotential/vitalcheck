const Covidtest = () => {
    return (
        <div>
            <div className="section section--top">
                <div className="top__decoration"></div>
                <div className="container container--top">
                    <div className="container__inner">
                        <h1 className="top__title">VitalCheck Wellness COVID Tracking System</h1>
                        <div className="top__text">Fully automate the process of collecting proof of vaccination and testing with our revolutionary tracking solution.</div>
                    </div>
                </div>
            </div>

            <div class="section section--form">
                <div class="container container--form">
                    <div class="form-text">
                        <p>Our customized solution will facilitate the safe reopening of your workplace or campus. Collect proof of vaccination and test track your staff/students with verification uploaded by your personal.</p>
                    </div>
                    <div class="form-image"></div>
                    <div class="form-container">
                        <div class="form__title">Get in touch</div>
                        <form action="/ContactSubmission" method="post">
                            <input type="text" name="your-name" placeholder="Your Full Name" />
                            <input type="email" name="your-email" placeholder="Email Address" />
                            <input type="text" name="your-company" placeholder="Company" />
                            <input type="tel" name="your-phone" placeholder="Phone Number" />
                            <input type="submit" name="your-message" value="Request More Information" />
                        </form>                        
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Covidtest;