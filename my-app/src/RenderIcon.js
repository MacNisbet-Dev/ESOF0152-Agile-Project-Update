import styled from 'styled-components';

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