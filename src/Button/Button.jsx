import './Button.css'

export default function Button(props){
    return(
        <button className='button' style={{borderImage:`linear-gradient(45deg ,${props.gradient})1`}}>
            {props.icon}
            {props.name}
        </button>
    )
}