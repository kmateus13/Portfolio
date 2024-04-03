import './Toggle.css'

export default function Toggle(props){
    return(
        <label htmlFor={props.chk} className='switch'>
            <span className='slider'></span>
        </label>
    )
}