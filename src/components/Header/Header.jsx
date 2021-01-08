import React, { useRef, useEffect, useState } from 'react';

const Header = () => {
  //   const [sticky, setSticky] = useState({ isSticky: false, offset: 0 });
  //   const headerRef = useRef(null);

  // handle scroll event
  //   const handleScroll = (elTopOffset, elHeight) => {
  //     if (window.pageYOffset > elTopOffset + elHeight) {
  //       setSticky({ isSticky: true, offset: elHeight });
  //     } else {
  //       setSticky({ isSticky: false, offset: 0 });
  //     }
  //   };

  // add/remove scroll event listener
  //   useEffect(() => {
  //     var header = headerRef.current.getBoundingClientRect();
  //     const handleScrollEvent = () => {
  //       handleScroll(header.top, header.height);
  //     };

  //     window.addEventListener('scroll', handleScrollEvent);

  //     return () => {
  //       window.removeEventListener('scroll', handleScrollEvent);
  //     };
  //   }, []);

  return (
    <></>
    // <div
    //   id="header"
    //   ref={headerRef}
    //   className={`${sticky.isSticky ? 'sticky' : 'unsticky'}`}
    //   //   style={{ marginTop: sticky.offset }}
    // >
    //   <div className="logo">AH</div>
    //   <div className="flex">
    //     <div className="option">
    //       <div>portfolio</div>
    //     </div>
    //     <div className="option">
    //       <div>Recent work</div>
    //     </div>
    //     <div className="option">
    //       <div>About</div>
    //     </div>

    //     <div className="option">
    //       <div>Contact</div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default Header;
