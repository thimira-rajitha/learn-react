import React from 'react'

const Content = () => {
    const handleNameChange = () => {
        const names = ['Thimira', 'Rajitha'];
        const int = Math.floor(Math.random() * 2);
        return names[int];
      };

const handleClick = ()=>{
  console.log('You Clicked it');
}
const handleClick2 = (name)=>{
  console.log(`${name} Clicked it`);
}
const handleClick3 = (e)=>{
  console.log(e);
  console.log(e.target);
  console.log(e.target.innerText);
}

  return (
    <main>
        <p onDoubleClick={handleClick}>Hello {handleNameChange()}!</p>
        <button onClick={handleClick}>Click It</button>

        {/* 
        for pass parameters we need an anonymous function
        although anonymous functions have {}, this function it's not 
        compulsory, bcz this is one line 
        */}
        <button onClick={()=>handleClick2('Rajitha')}>Click It</button>
        <button onClick={(e)=>handleClick3(e)}>Click It</button>
    </main>
  )
}

export default Content