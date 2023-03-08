import CupAlpha from './CupAlpha.png'

export function RenderLogo({size}){
    return(
        <div>
             <img src={CupAlpha} alt="Company Logo" 
             width={size} 
             height={size}
             />        
        </div>
    )
}
