import ContentHeader from '../ContentHeader/ContentHeader'
import Navbar from '../Navbar/Navbar'
import './Header.css'

export default function Header() {
    return (
        <div className='Header'>
            <Navbar />
            <ContentHeader/>
        </div>
    )
}