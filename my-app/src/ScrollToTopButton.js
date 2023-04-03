import React, { useState, useEffect } from "react";
import styled from "styled-components";

/**
 * Used to render the scroll to top button component
 * isVisible is toggled if the page is scrolled below 200 pixels, and turns off if above 200 pixels
 * Should probably readjust for mobile but works for now
 * Eases in and out and moves the cursor smoothly 
 */

const ScrollToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);
  
    // Use effect react hook is used to determine the position and if the component should be toggled on/off
    useEffect(() => {
      const handleScroll = () => {
        const scrollTop = window.pageYOffset;
        if (scrollTop > 200) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      };
      // Stores the current scroll value
      window.addEventListener("scroll", handleScroll);
  
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);
    
    // handleScrollToTop moves the scroll back to the exact top of the screen, this function is called when the component is clicked
    const handleScrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    };
  
    return (
      <>
        <ButtonContainer
          onClick={handleScrollToTop}
          style={{ opacity: isVisible ? 1 : 0, transition: "opacity 0.3s ease-in-out" }}
        >
          <span>Scroll to top</span>
        </ButtonContainer>
      </>
    );
  };
  
  const ButtonContainer = styled.div`
    position: fixed;
    bottom: 20px;
    right: 20px;
    z-index: 99;
    cursor: pointer;
    background-color: #333;
    color: #fff;
    padding: 10px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100px;
    height: 100px;
    text-align: center;
    font-size: 20px;
    transition: opacity 0.3s ease-in-out;
  
    &:hover {
      background-color: #555;
    }
  `;
  
  export default ScrollToTopButton;