import React from 'react';
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';

function Footer() {
  return (


  <footer className='h-10 w-full flex items-center justify-end px-5 my-1' id='footer'>
    <Link to="https://github.com/Wist118" className='flex justify-end px-2' id='github'><Icon icon="el:github" height='34'/></Link>
    <Link to="/" className='flex justify-end px-2' id='linkedin'><Icon icon="ant-design:linkedin-outlined" height='40'/></Link>
  </footer>

  );
}

export default Footer;