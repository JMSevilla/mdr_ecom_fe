// services helper //
import web from '../../assets/images/services/web_development.jpg';
import mobile from '../../assets/images/services/mobile_app.jpg';
import desktop from '../../assets/images/services/desktop_app.jpg';
import { SSP_Feature1 } from '../../components/__dump__/__field_dump';

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

export const features = []

export const destinationArray = []