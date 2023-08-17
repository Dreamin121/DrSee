import BLOG from '@/blog.config';
import DarkModeButton from '@/components/DarkModeButton';
import Vercel from '@/components/Vercel';
//import React, { useEffect } from 'react';

export const Footer = (props) => {
  //  useEffect(() => {
  //   // 动态加载外部JS
  //   const script = document.createElement('script');
  //   script.src = 'https://dl.lancdn.com/landian/dev/high/src/high.js';
  //   script.async = true;
  //   document.body.appendChild(script);
  //   // 清除操作
  //   return () => {
  //     document.body.removeChild(script);
  //   };
  // }, []);

  // // 确保 hig 函数在 high.js 文件中被正确定义
  // const handleHighClick = () => {
  //   if (window.hig) {
  //     window.hig();
  //   } else {
  //     console.error('hig function is not defined.');
  //   }
  // };
    // <button type="button" onClick={handleHighClick}>
          //   High一下
          // </button>


  const d = new Date();
  const currentYear = d.getFullYear();
  const { post } = props;
  const fullWidth = post?.fullWidth ?? false;

  const copyrightDate = (function() {
    if (Number.isInteger(BLOG.SINCE) && BLOG.SINCE < currentYear) {
      return BLOG.SINCE + '-' + currentYear;
    }
    return currentYear;
  })();

  return (
    <footer
      className={`z-10 relative mt-6 flex-shrink-0 m-auto w-full text-gray-500 dark:text-gray-400 transition-all ${
        !fullWidth ? 'max-w-2xl px-4' : 'px-4 md:px-24'
      }`}
    >
      <DarkModeButton className='text-center pt-4'/>
      <p align="center" >   
        <img src="https://profile-counter.glitch.me/xmelon.cafe/count.svg" />  
      </p>
      <hr className="border-gray-200 dark:border-gray-600" />
      <div className="my-4 text-sm leading-6">
        <div className="flex align-baseline justify-between flex-wrap">
          <p>
            © {BLOG.AUTHOR} {copyrightDate}
          </p>
        
          <Vercel />
        </div>
      </div>
    </footer>
  );
};
