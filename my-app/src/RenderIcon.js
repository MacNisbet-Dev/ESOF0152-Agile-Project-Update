import styled from 'styled-components';

// Similar setup to the renderLogo but automatically returns the image name as the alt label by removing everything after the file extension
export function RenderIcon({size, image}){
    return(
        <RenderLogo>
             <img src={image} alt={`${image.split('.')[0]} Icon`} 
             width={size} 
             height={size}
             />        
        </RenderLogo>
    )
}

const RenderLogo = styled.div`
  padding-right: 5px;
  height: ${(props) => props.size}px;
  width: ${(props) => props.size}px;
`