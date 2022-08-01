// services helper //
import web from '../../assets/images/services/web_development.jpg';
import mobile from '../../assets/images/services/mobile_app.jpg';
import desktop from '../../assets/images/services/desktop_app.jpg';

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
        dropdown: false,
    },
];

/* data helper */

export const customerStepper = [
    'Personal Information',
    'Credentials',
    'Verification',
    'Finish'
]