import React from 'react'


function Footer() {

  const handleCopyrightClick = () => {
    console.log('Devsite.com/dklsafjaosuidfjasdkfjksdlhf98342huriewso8');
  }

  return (
    <footer>
      <p>
        <span onDoubleClick={handleCopyrightClick}>&copy;</span> 2024 Gordon Lin. Licensed under the Apache License, Version 2.0.
      </p>
    </footer>
  );
}

export default Footer;