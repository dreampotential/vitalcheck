import Image from 'next/image'
import deposit_img from '../Images/covid/deposit.png'
import advantage1_img from '../Images/covid/advantage1.png'
import advantage2_img from '../Images/covid/advantage2.png'
import advantage3_img from '../Images/covid/advantage3.png'

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

            <div className="section section--form">
                <div className="container container--form">
                    <div className="form-text">
                        <p>Our customized solution will facilitate the safe reopening of your workplace or campus. Collect proof of vaccination and test track your staff/students with verification uploaded by your personal.</p>
                    </div>
                    <div className="form-image">
                        <Image src = {deposit_img} layout="responsive" objectFit="contain" quality={100} />
                    </div>
                    <div className="form-container">
                        <div className="form__title">Get in touch</div>
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

            <div className="section section--advantages">
                <div className="container container--advantages">
                    <div className="advantage advantage--one">
                        <div className="advantage__icon">
                            <Image src = {advantage1_img} />
                        </div>
                        <div className = "advantage_title">
                            Fully Automated
                        </div>
                        <div className="advantage__description">Our proprietary technology will simplify the verification review process.</div>
                    </div>

                    <div className="advantage advantage--two">
                        <div className="advantage__icon">
                            <Image src = {advantage2_img} />
                        </div>
                        <div className = "advantage_title">
                            Easy Verification
                        </div>
                        <div className="advantage__description">Staff and students will receive a text and email request every 7 days to update their vaccination status.</div>
                    </div>

                    <div className="advantage advantage--three">
                        <div className="advantage__icon">
                            <Image src = {advantage3_img} />
                        </div>
                        <div className = "advantage_title">
                            HIPAA-compliant
                        </div>
                        <div className="advantage__description">Get the ultimate control with 1-click validation of the results by your administration team.</div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Covidtest;