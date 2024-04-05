import './Button.css'

export default function Button(props){

    const openLink = () => {
        window.open(props.link);
      };

    return(
        <button className='button' style={{borderImage:`linear-gradient(45deg ,${props.gradient})1`}} onClick={openLink}>
            {props.icon}
            {props.name}
        </button>
    )
}