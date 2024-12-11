import React from "react";
import Style from "./Home.module.css";
import Logo from "../Images/popkeyofficial-BQ3qTaDg.png";
import BottomLogo from "../Images/bottomlogo.png";
import Inovation from "../Images/download.svg";
import Customization from "../Images/download (1).svg";
import Conveniece from "../Images/download (2).svg";
import Security from "../Images/download (3).svg";
import Sustain from "../Images/sustain-BJ9E0GRZ.png";
import { Link } from "react-router-dom";
import Locker from "../Images/locker-pGlRC79B.png";
import Homeimage from "../Images/locker-B_w7mdUY.png";
import Logo1 from "../Images/UserIcon-D7wEP68e.png";
import Logo2 from "../Images/PageIcon-O8wnpuLU.png";
import Logo3 from "../Images/ClockIcon-9w_LXdr2.png";
import Logo4 from "../Images/Securityicon-2PziBDRt.png";
import Step1 from "../Images/scan.png-BEsbTtma.jpeg";
import Step2 from "../Images/mesaage-DDrtuVZK.png";
import Step3 from "../Images/amount-Q55J8mlB.png";
import Step4 from "../Images/pay-A48T31zm.png";
import Doorlock from "../Images/door lock.jpg";
import Step5 from "../Images/booking-COvdu3Tr.png";
import Image1 from "../Images/image1.jpg";
import Image2 from "../Images/image2.jpg";
import Image3 from "../Images/image3.jpg";
import Group1 from "../Images/group1.png";
import Group2 from "../Images/group2.png";
import Group3 from "../Images/group3.jpg";
import Group4 from "../Images/group4.png";
import Group5 from "../Images/group5.png";

function Home() {
  return (
    <div>
      <header id="home">
        <nav className={Style.navbar}>
          <div className={Style.logo}>
            <a href="#">
              <img src={Logo} />
            </a>
          </div>
          <ul className={Style.links}>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About Us</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
        <div className={Style.intro}>
          <div>
          <h1>POPKEY PRIVATE LIMITED</h1>
          <p className={Style.para1}>
            Experience the future of storage with our innovative <br />{" "}
            automated smart lockers,providing a seamless,
            <br /> no-contact solution for all your storage needs.
          </p>
          <div className={Style.points}>
            <h4>
              <i class="fa-regular fa-circle-check"></i>Incresed Security
            </h4>
            <h4>
              <i class="fa-regular fa-circle-check"></i>Durable solutions
            </h4>
            <h4>
              <i class="fa-regular fa-circle-check"></i>Individually
              customizale
            </h4>
          </div>
          <button>BOOK NOW</button>

          </div>
          
          <div className={Style.doorimage}>
            <img src={Doorlock} />
          </div>
        </div>
      </header>
      {/* MAIN CONTENT */}
      <div className={Style.middle}>
        <div className={Style.condition}>
          <h1>
            Hardware built for tough <br />
            conditions<span className={Style.orangeclr}>,</span> and smooth operations<span className={Style.orangeclr}>.</span>
          </h1>
          <p className={Style.conditionpara}>
            Be it indoor, outdoor, or anything in between.
            Our Lockers have been designed by our world-class engineers to
            withstand the toughest conditions and
            heavy use while being low maintenance, easy to transport, deploy and
            operate, bringing down the total cost
            of ownership significantly.
          </p>
          <div className={Style.imagesection}>
            <div className={Style.mediacontainer}>
              <img src={Image1} />
              <video muted loop width={390} height={290} autoPlay>
                <source
                  src="https://cdn.prod.website-files.com/65080d564070276c57b51ad1/652d50e43e27573a6c1ab73b_Modularity_webflow-transcode.mp4"
                  type="video/mp4"
                />
              </video>
            </div>

            <div className={Style.mediacontainer}>
              <img src={Image2} />
              <video muted loop width={390} height={290} autoPlay>
                <source
                  src="https://cdn.prod.website-files.com/65080d564070276c57b51ad1/652d4f0a810937d22b5a73e3_Durability%20and%20Resistance-transcode.mp4"
                  type="video/mp4"
                />
              </video>
            </div>

            <div className={Style.mediacontainer}>
              <img src={Image3} />
              <video muted loop width={390} height={290} autoPlay>
                <source
                  src="https://cdn.prod.website-files.com/65080d564070276c57b51ad1/652d49bb049e77287265fa26_Optimized%20for%20operations-transcode.mp4"
                  type="video/mp4"
                />
              </video>
            </div>
          </div>

          <div className={Style.contentsection}>
            <div className={Style.contentcontainer}>
              <h2>Adaptable & Scalable</h2>
              <p className={Style.contentpara}>
                The Bloq.it lockers are designed specifically for the type of
                operation where they will be implemented, from parcel size
                distribution, to total size needs. The lockers can be changed
                and optimised to fit your operational needs.
              </p>
            </div>

            <div className={Style.contentcontainer}>
              <h2>Durable & Long-lasting</h2>
              <p className={Style.contentpara}>
              Our lockers are designed and thoroughly tested to withstand the test of time, under heavy usage. All the components are carefully chosen taking into account their reliability and durability, providing the lowest cost of ownership in the industry.
              </p>
            </div>

            <div className={Style.contentcontainer}>
              <h2>Smart Operations</h2>
              <p className={Style.contentpara}>
                Designed for high operational efficiency from the very start.
                Our Smart Lockers are easy to transport, quick to deploy, and
                simple to maintain. Allowing you to reduce costs related to
                network expansion and maintenance, while moving swiftly.
              </p>
            </div>
          </div>
        </div>

        <div className={Style.authenticated}>
          <div className={Style.left1}>
            <img src={Group1} />
          </div>
          <div className={Style.right1}>
            <h2>
              AUTHENTICATED ACCESS TO SMART <br />
              LOCKERS
            </h2>
            <p>Smart Locker provides access only on user authentication.</p>
            <p>
              Locker can be reserved for high priority users or dynamically{" "}
              <br />
              allocated.
            </p>
            <p>Helps in sharing locker and also assets. eg. equipments</p>
            <h3>Easy For Your Users</h3>
            <p>
              Locker is quickly provided to authorized users. Users can Keep{" "}
              <br />
              or take assets from assigned locker .
            </p>
            <h3>Authenticate your way</h3>
            <li>
              User identification using RFID card, numeric pin code, or <br />
              Barcode
            </li>
            <li>
              Biometric identification using Fingerprint, Facial, or Iris <br />
              recognition
            </li>
            <li>Any other Wiegand input.</li>
          </div>
        </div>

        <div className={Style.secure}>
          <div className={Style.left2}>
            <h2>Secure and Strong</h2>
            <p>
              SMART LOCKER prevents unauthorized access to lockers and protects{" "}
              <br /> assets in the locker.
            </p>
            <h3>Tamper Resistant</h3>
            <li>
              Each locker is locked; open/close status of locker is sensed .
            </li>
            <li>Locker left open alarm.</li>
            <li>Senses tampering of locker. Built-in tamper alarm.</li>
            <h3>Robust Build</h3>
            <li>
              MS powder-coated cabinet with SS front plate. Durable in
              Industrial environments.
            </li>
            <li>Floor mounted .</li>
            <h3>Add more security</h3>
            <li>Dual Authentication</li>
            <li>Integrated Camera</li>
          </div>
          <div className={Style.right2}>
            <img src={Group2} />
          </div>
        </div>

        <div className={Style.reports}>
          <div className={Style.left3}>
            <img src={Group3} />
          </div>
          <div className={Style.right3}>
            <h2>Logs and Reports</h2>
            <h3>Activity Logging</h3>
            <li>
              Every locker operation is logged. Real-time tracking of free and{" "}
              <br />
              used lockers..
            </li>
            <li>
              Store events on the embedded server in the locker or an <br />
              external server.
            </li>
            <h3>Reports</h3>
            <li>
              Provides reports of all transactions. Logs and reports up to{" "}
              <br />
              2,000,000 Transaction Events.
            </li>
          </div>
        </div>

        <div className={Style.connected}>
          <div className={Style.left4}>
            <h2>Always Be Connected</h2>
            <p>All communication is encrypted.</p>
            <h3>Seamless Communication</h3>
            <li>Ethernet LAN</li>
            <li>GPRS connectivity for off-campus host</li>
            <li>Alerts over email, SMS</li>
            <h3>Add Inputs and Alarms</h3>
            <p>
              Two Programmable digital input/outputs. Uses include inputs and{" "}
              <br /> alarms.
            </p>
          </div>
          <div className={Style.right4}>
            <img src={Group4} />
          </div>
        </div>

        <div className={Style.size}>
          <div className={Style.left5}>
            <img src={Group5} />
          </div>
          <div className={Style.right5}>
            <h2>Size to Your Needs</h2>
            <p>Sizes range from 8 to 120 lockers, modular design.</p>
            <p>Mobile, laptop or baggage lockers.</p>
            <p>Customize size of locker as per requirement.</p>
            <p>Connect multiple smart lockers to manage by one software.</p>
            <p>Gym locker – another variant </p>
            <h3>Display and Input</h3>
            <li>Basic 3.5” graphic LCD with keypad</li>
            <h3>Pick your Color</h3>
            <li>Available in Black and Siemens Grey colors</li>
          </div>
        </div>

        <div className={Style.conactus} id="about">
          <div className={Style.leftcontact}>
            <img src={Locker} />
          </div>
          <div className={Style.rightcontact}>
            <h1>ABOUT POPKEY PRIVATE LIMITED</h1>
            <p>
              POPKEY PRIVATE LIMITED Automated Storage Keyless Lockers is a
              self-service <br /> that allows you to book lockers 24/7. Our
              facility provides storage for your bags, <br /> backpacks, and
              other personal items.
            </p>
            <br />
            <p>
              We envision a future where traditional lock and key systems are
              replaced by <br />
              seamless, automated storage solutions that enhance security,
              convenience, and <br />
              efficiency.
            </p>
          </div>
        </div>
        <div className={Style.features}>
          <h1>Features of POPKEY</h1>
          <div className={Style.featurestype}>
            <div className={Style.boxx}>
              <img src={Logo1} className={Style.image} />
              <h3>Self service</h3>
            </div>
            <div className={Style.boxx}>
              <img src={Logo2} className={Style.image} />
              <h3>Easy to access</h3>
            </div>
            <div className={Style.boxx}>
              <img src={Logo3} className={Style.image} />
              <h3>24/7 access</h3>
            </div>
            <div className={Style.boxx}>
              <img src={Logo4} className={Style.image} />
              <h3>Completely secure</h3>
            </div>
          </div>
        </div>

        <div className={Style.works}>
          <h1>HOW IT WORKS</h1>
          <div className={Style.workscontainer}>
            <div className={Style.workbox}>
              <h4>Step 1</h4>
              <img src={Step1} />
            </div>
            <div className={Style.workbox}>
              <h4>Step 2</h4>
              <img src={Step2} />
            </div>
            <div className={Style.workbox}>
              <h4>Step 3</h4>
              <img src={Step3} />
            </div>
            <div className={Style.workbox}>
              <h4>Step 4</h4>
              <img src={Step4} />
            </div>
            <div className={Style.workbox}>
              <h4>Step 5</h4>
              <img src={Step5} />
            </div>
          </div>
        </div>

        <div className={Style.heading}>
          <h1>Why Choose Us</h1>
          <div className={Style.container}>
            <div className={Style.box} id={Style.box1}>
              <img src={Inovation} />
              <br />
              <h3>Innovation</h3>
              <br />
              <p>
                We are committed to staying at the forefront of technology. Our
                lockers feature cutting-edge automation, touchless access, and
                user-friendly interfaces, ensuring that you have access to the
                latest advancements in the industry.
              </p>
            </div>

            <div className={Style.box} id={Style.box2}>
              <img src={Security} />
              <h3>Security</h3>
              <p>
                Your security is our top priority. Our lockers are built with
                robust materials and advanced locking mechanisms to protect your
                valuables and maintain your peace of mind.
              </p>
            </div>
            <div className={Style.box} id={Style.box3}>
              <img src={Customization} />
              <h3>Customization</h3>
              <p>
                We understand that every client’s needs are unique. That’s why
                we offer customizable locker solutions to suit your specific
                requirements, whether you’re a hotel, a business, or an
                individual.
              </p>
            </div>
            <div className={Style.box} id={Style.box4}>
              <img src={Conveniece} />
              <h3>Convenience</h3>
              <p>
                Say goodbye to lost keys and forgotten combinations. Our keyless
                entry systems make accessing your stored items as easy as a
                touch or a swipe.
              </p>
            </div>
            <div className={Style.box} id={Style.box5}>
              <img src={Sustain} />
              <h3>Sustainability</h3>
              <p>
                We are dedicated to eco-friendly practices. Our lockers are
                designed with sustainability in mind, featuring energy-efficient
                components and materials that minimize our environmental
                footprint.
              </p>
            </div>
            <div className={Style.box} id={Style.box6}></div>
          </div>
        </div>
      </div>

      {/* MAIN CONTENT */}

      <footer>
        <div className={Style.address} id="contact">
          <div className={Style.contactimage}>
            <img src={BottomLogo} />
          </div>
          <div className={Style.contactdetails}>
            <h1>Contact Information</h1>
            <h3>POPKEY PRIVATE LIMITED</h3>
            <p>
              <i class="fa-solid fa-location-dot"></i> Address: 43, Appadurai
              1st St, Vasantha nagar, Chinna Chembarambakkam, Ayanavaram,
              Chennai, Tamil Nadu 600023.
            </p>
            <p>
              <i class="fa-solid fa-phone"></i> Phone: (+91)-7400 500 200
            </p>
            <p>
              <i class="fa-solid fa-envelope"></i> Email: contact@popkey.in
            </p>
          </div>
        </div>
        <div className={Style.form}>
          <h1>Contact Us</h1>
          <input type="text" placeholder="Enter a Name" />
          <br />
          <input type="text" placeholder="Enter Email" />
          <br />
          <input type="text" placeholder="Phone Number" />
          <br />
          <textarea type="text" placeholder="Text Message" rows={5} />
          <br />
          <button>Submit</button>

          <div className={Style.terms}>
            <ul>
              <li>
                <Link to="privacy">Privacy Policy</Link>
              </li>
              <li>
                <Link to="privacy">Terms & Conditions</Link>
              </li>
              <li>
                <Link to="privacy">Prohibited Items Policy</Link>
              </li>
              <li>
                <Link to="privacy">Refund Policy</Link>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}
export default Home;
