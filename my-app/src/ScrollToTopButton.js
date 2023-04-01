import React, { useState, useEffect } from "react";
import styled from "styled-components";

const ScrollToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);
  
    useEffect(() => {
      const handleScroll = () => {
        const scrollTop = window.pageYOffset;
        if (scrollTop > 200) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      };
  
      window.addEventListener("scroll", handleScroll);
  
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);
  
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