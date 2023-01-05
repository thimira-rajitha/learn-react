import React from 'react'

const Content = () => {
    const handleNameChange = () => {
        const names = ['Thimira', 'Rajitha'];
        const int = Math.floor(Math.random() * 2);
        return names[int];
      };

  return (
    <main>
        <p>Hello {handleNameChange()}!</p>
    </main>
  )
}

export default Content