import React from 'react';
import UserGuide from 'react-user-guide';
import './userguide.css';

const buttonConfig = {
  yesText: 'Yes',
  noText: 'No',
  nextText: 'Next',
  skipText: 'Skip',
  finishText: 'Finish'
};

const title = 'Project Features Guide 🔍';

const content = 'Would you like us to walk you through project features?';

const guides = [
  {
    querySelector: '.unique-classname',
    position: 'west',
    title: 'Selected budget price',
    message: "The app features will depend on your set price."
  },
  {
    querySelector: '.unique-classnameTwo',
    position: 'east',
    title: 'Selected Project Type',
    message: "Available features will depend on the project type."
  },
  {
    querySelector: '.unique-classnameThree',
    position: 'north',
    title: 'Available Features for your system',
    message: 'Please select and drag it to your project features box.'
  },
  {
    querySelector: '.unique-classnameFour',
    tooltipWidth: 500,
    position: 'south',
    title: 'Your Project Features',
    message: 'Built-in and selected features drop here.'
  }
];

const SystemUserGuide = (props) => {
    const {targetOne, targetTwo, targetThree, targetFour, children} = props
  return (
    <>
      <UserGuide title={title} content={content} buttonConfig={buttonConfig}guides={guides}>
        <div> 
            <div style={{position: 'relative', display: 'flex', justifyContent: 'space-around', width: '100%'}}>
                <div style={{backgroundColor: 'white'}} className="unique-classname">{targetOne}</div>
                <div style={{backgroundColor: 'white'}} className="unique-classnameTwo">{targetTwo}</div>
            </div>
            {children}
            <div style={{backgroundColor: 'white'}} className="unique-classnameThree">{targetThree}</div>
            <div style={{backgroundColor: 'white'}} className="unique-classnameFour">{targetFour}</div>
        </div>
      </UserGuide>  
    </>
  )
}

export default SystemUserGuide