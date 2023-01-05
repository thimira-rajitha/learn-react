import React from 'react';
import { useState } from 'react';

//----------- 01 -----------------
//Every time show Helo Rajitha
//--------------------------------
// const Content = () => {
// const [name,setName] = useState('Rajitha');

//   const handleNameChange = () => {
//     const names = ['Thimira', 'Rajitha'];
//     const int = Math.floor(Math.random() * 2);
//     return names[int];
//   };

//   const handleClick = () => {
//     console.log('You Clicked it');
//   };
//   return (
//     <main>
//       <p>Hello {name}!</p>
//       <button onClick={handleClick}>Click It</button>

//     </main>
//   );
// };

//----------- 02 -----------------
const Content = () => {
  const [name, setName] = useState('Dave');
  const [count, setCount] = useState(0);

  const handleNameChange = () => {
    const names = ['Thimira', 'Rajitha'];
    const int = Math.floor(Math.random() * 2);
    setName(names[int]);
  };

  const handleClick = () => {
    setCount(count + 1); //expected: 1{0+1}... real:1 -->(0+1)
    setCount(count + 1); //expected: 2{1+1}... real:1 -->(0+1)
    console.log(count); //expected: 2... real:0 -->(0)

    //it doesn't change the value of count within this function
    //even after we set the count
  };
  const handleClick2 = () => {
    console.log(count);
  };

  return (
    <main>
      <p>Hello {name}!</p>
      <button onClick={handleNameChange}>Change Name</button>
      <button onClick={handleClick}>Click to get count</button>
      <button onClick={handleClick2}>Click to get new count</button>
    </main>
  );
};
export default Content;
