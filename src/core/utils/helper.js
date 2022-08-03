// services helper //
import web from '../../assets/images/services/web_development.jpg';
import mobile from '../../assets/images/services/mobile_app.jpg';
import desktop from '../../assets/images/services/desktop_app.jpg';

// social media icons
import {FiFacebook, FiLinkedin, FiGithub} from 'react-icons/fi';

export const ServicesData = [ 
    {
        img: web,
        title: 'Web App Development',
        description: 'lorem ipsum dolor'
    },
    {
        img: desktop,
        title: 'Desktop App Development',
        description: 'lorem ipsum dolor'
    },
    {
        img: mobile,
        title: 'Mobile App Development',
        description: 'lorem ipsum dolor'
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
        link: 'Services',
        to: 'services',
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
        icon: <FiFacebook />,
        link: 'https://facebook.com',
    },
    {
        icon: <FiLinkedin/>,
        link: 'https://linkedin.com',
    },
    {
        icon: <FiGithub/>,
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