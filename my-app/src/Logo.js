import CupAlpha from './logorcp.png'
import styled from 'styled-components';

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