import React from 'react';

// const Header = (props) => {
//   return (
//     <header>
//       <h1>{props.title}</h1>
//     </header>
//   );
// };

//OR

//instead of always referring to props, we can destructuring the props
const Header = ({title}) => {
  return (
    <header>
      <h1>{title}</h1>
    </header>
  );
};
/*
Default props allow us to set values for the props expected in th component
and if those are not provided then the default values will take over instead 
of receiving an error. This is great to do when you're specking a component 
in other words when you're first designing the component and maybe you're not receiving the data
from an api or even a local storage list.
*/
Header.defaultProps={
  title:'Default Title'
}
export default Header;
