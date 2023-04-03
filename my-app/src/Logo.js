import CupAlpha from './logorcp.png'
import styled from 'styled-components';

/**
 * RenderLogo is used to render the companies logo
 * The size prop is passed when the child compoennt is used
 * Had to scale the height down a bit for our particular logo since I cropped it...
 * and the new logo wasn't the same ratio as the uncropped logo
 */

export function RenderLogo({size}){
    return(
        <AppLogo>
             <img src={CupAlpha} alt="Company Logo" 
             width={size} 
             height={size * .75}
             />        
        </AppLogo>
    )
}

const AppLogo = styled.div`
  padding-left: 10px;
  padding-top: 10px;
  height: ${(props) => props.size}px;
  width: ${(props) => props.size}px;
`