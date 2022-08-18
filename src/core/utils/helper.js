// services helper //
import web from '../../assets/images/services/web_development.jpg';
import mobile from '../../assets/images/services/mobile_app.jpg';
import desktop from '../../assets/images/services/desktop_app.jpg';
import { SSP_Feature1 } from '../../components/__dump__/__field_dump';

// social media icons
import {FiFacebook, FiLinkedin, FiGithub} from 'react-icons/fi';

// mission and vision icon 
import {BiRocket} from 'react-icons/bi';
import {MdOutlineInsights} from 'react-icons/md'

// contact us icons 
import { TbPhone } from "react-icons/tb";
import { FiMail, FiMapPin } from "react-icons/fi";

// import hero banner images 
import herobanner from '../../assets/images/herobanner/herobanner.jpg';
import herobanner2 from '../../assets/images/herobanner/herobanner2.jpg';
import herobanner3 from '../../assets/images/herobanner/herobanner3.jpg';

// import Testimonials Image
import testimonials from '../../assets/images/testimonials/testimonial.jpg'
import testimonials2 from '../../assets/images/testimonials/testimonial2.jpg'
import testimonials3 from '../../assets/images/testimonials/testimonial3.jpg'

export const heroBannerData = [
    {
        img: herobanner
    },
    {
        img: herobanner2
    },
    {
        img: herobanner3
    }
];

// mission and vision data 
export const missionAndVisionData = [
    {
        title: 'Our Mission',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        icon: <BiRocket style={{fontSize: '30px', color: 'red'}}/>
    },
    {
        title: 'Our Vision',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        icon: <MdOutlineInsights style={{fontSize: '30px', color: 'red'}}/>
    },
];

// techstacks 
export const techStacksData = [ 
    {
        stack: 'fa-html5'
    },
    {
        stack: 'fa-css3-alt'
    },
    {
        stack: 'fa-js'
    },
    {
        stack: 'fa-vuejs'
    },
    {
        stack: 'fa-react'
    },
    {
        stack: 'fa-python'
    },
    {
        stack: 'fa-php'
    },
    {
        stack: 'fa-laravel'
    },
    {
        stack: 'fa-java'
    },
    {
        stack: 'fa-aws'
    },
    {
        stack: 'fa-npm'
    },
    {
        stack: 'fa-html5'
    },
    {
        stack: 'fa-css3-alt'
    },
    {
        stack: 'fa-js'
    },
    {
        stack: 'fa-vuejs'
    },
    {
        stack: 'fa-react'
    },
    {
        stack: 'fa-python'
    },
    {
        stack: 'fa-php'
    },
    {
        stack: 'fa-laravel'
    },
    {
        stack: 'fa-java'
    },
    {
        stack: 'fa-aws'
    },
    {
        stack: 'fa-npm'
    },
];

// services data //
export const ServicesData = [ 
    {
        img: web,
        title: 'Web App Development',
        description: 'description about our website app development'
    },
    {
        img: desktop,
        title: 'Desktop App Development',
        description: 'description about our desktop app development'
    },
    {
        img: mobile,
        title: 'Mobile App Development',
        description: 'description about our mobile app development'
    },

];

// contact us data //
export const contactUsData = [
    {
        icon: <FiMail style={{fontSize: '25px'}}/>,
        title: "Want to buy a system?",
        subtitle: "We are selling any kind of app...",
        description: "Email us at modernresolve@gmail.com",
      },
      {
        icon: <FiMapPin style={{fontSize: '25px'}}/>,
        title: "Current Location",
        subtitle: "Our office address...",
        description: "Brgy. Banlic, Cabuyao Laguna 4025",
      },
      {
        icon: <TbPhone style={{fontSize: '25px'}}/>,
        title: "Phone Number",
        subtitle: "You can call / text us at...",
        description: "+63-912-345-6789",
      },
];

export const projectCategory = [
    {
        label : 'Point Of Sales & Inventory System',
        value : 'POS_INV'
    },
    {
        label : 'ECommerce',
        value : 'ECOM'
    },
    {
        label : 'Inventory System',
        value : 'INV'
    },
    {
        label : 'Payroll System',
        value : 'PYRLL'
    },
    {
        label : 'Dynamic Forms Studio',
        value : 'DFS'
    },
    {
        label : 'Personal Savings Bank',
        value : 'PSB'
    },
    {
        label : 'Enrollment System',
        value : 'ES'
    }
]

export const projectType = [
    {
        label : 'Small Scale Project',
        value : 'SSP'
    },
    {
        label : 'Medium Scale Project',
        value : 'MSP'
    },
    {
        label : 'Large Scale Project',
        value : 'LSP'
    }
]

// navbar data helper //
export const navbarData = [ 
    {
        link: 'Home',
        to: 'home',
        dropdown: false,
    },
    {
        link: 'About',
        to: 'about',
        dropdown: false,
    },
    {
        link: 'What We Offer',
        to: 'services',
        dropdown: false,
    },
    {
        link: 'Testimonials',
        to: 'testimonials',
        dropdown: false,
    },
    {
        link: 'Contact Us',
        to: 'contactus',
        dropdown: false,
    },
    {
        link: 'Shop',
        to: 'shop',
        dropdown: true,
    },
];

// footer social media icons 
export const socialAccounts = [
    {
        icon: <FiFacebook className='social-icons'/>,
        link: 'https://facebook.com',
    },
    {
        icon: <FiLinkedin className='social-icons'/>,
        link: 'https://linkedin.com',
    },
    {
        icon: <FiGithub className='social-icons'/>,
        link: 'https://github.com',
    }
];

// footer terms and conditions etc.
export const businessRules = [
    {
        name: 'Terms and Conditions',
        link: '',
    },
    {
        name: 'Privacy Policy',
        link: '',
    },
    {
        name: 'Terms of Use',
        link: '',
    },
];

// dropdown shop button helper //
export const shopButton = [
    'Category',
    'Web App',
    'Desktop App',
    'Mobile App',
    'View All'
]

/* data helper */
export const customerStepper = [
    'Personal Information',
    'Project Details',
    'Project Features',
    'Credentials',
    'Verification',
    'Finish'
]

// hero banner button //
export const herobannerButton = [
    {
        to: "services",
        name: "Learn More",
        color: "button-white",
        dropdown: false
    },
    {
        name: "Pricing",
        color: "button-black",
        dropdown: false
    }
]


export const testimonialData = [
    {
        img: testimonials,
        feedbackDisc:"The success of every websites now depends on search engine optimisation and digital marketing strategy. If you are on first page of all major search engines then you are ahead among your competitors in terms of online sales.",
        creator:"― Dr. Christopher Dayagdag",
    },
    {
        img: testimonials2,
        feedbackDisc:"Your website is the center of your digital eco-system, like a brick and mortar location, the experience matters once a customer enters, just as much as the perception they have of you before they walk through the door.",
        creator:"― Leland Dieno",
    },
    {
        img: testimonials3,
        feedbackDisc:"If there’s one thing you learn by working on a lot of different Web sites, it’s that almost any design idea–no matter how appallingly bad–can be made usable in the right circumstances, with enough effort.",
        creator:"― Steve Krug",
    },
]

export const features = []

export const destinationArray = []

// security questions data //
export const security_questions = [
    {
        value : 'what is your dogs name ?',
        label : 'What is your dogs name ?'
    },
    {
        value : 'In what city were you born ?',
        label : 'In what city were you born ?'
    },
    {
        value : "What is your mother's maiden name ?",
        label : "What is your mother's maiden name ?"
    },
    {
        value : "What high school did you attend ?",
        label : "What high school did you attend ?"
    },
    {
        value : "What was the name of your elementary school ?",
        label : "What was the name of your elementary school ?"
    },
    {
        value : "What was the make of your first car ?",
        label : "What was the make of your first car ?"
    },
    {
        value : "What was your favorite food as a child ?",
        label : "What was your favorite food as a child ?"
    },
    {
        value : "Where did you meet your spouse?",
        label : "Where did you meet your spouse?"
    },
    {
        value : "What year was your father (or mother) born?",
        label : "What year was your father (or mother) born?"
    },
]

// REGEX //
export const validName = /^[a-zA-Z\s.]*$/;
export const validContactNumber = /^(09|\+639)\d{9}$/;
export const validEmailAddress = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;