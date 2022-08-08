// services helper //
import web from '../../assets/images/services/web_development.jpg';
import mobile from '../../assets/images/services/mobile_app.jpg';
import desktop from '../../assets/images/services/desktop_app.jpg';

// social media icons
import {FiFacebook, FiLinkedin, FiGithub} from 'react-icons/fi';

// import hero banner images 
import herobanner from '../../assets/images/herobanner/herobanner.jpg';
import herobanner2 from '../../assets/images/herobanner/herobanner2.jpg';
import herobanner3 from '../../assets/images/herobanner/herobanner3.jpg';

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
    'Credentials',
    'Verification',
    'Finish'
]