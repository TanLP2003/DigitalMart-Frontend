import './Topbar.scss'
import { GoBell } from "react-icons/go";
import { Link } from 'react-router-dom';
const Topbar = () => {
    return (
        <div className="topbar">
            <div className='brand'>Digital Mart</div>
            <div className='topbar-list'>
                <Link to='/admin/profile'>
                    <div className='topbar-list-profile'>
                        <img className='avatar' src="https://res.cloudinary.com/dumhujhqd/image/upload/v1715091840/hello-world/default_avatar_cg2kax.jpg" alt="" />
                        <div>
                            <div>ADMIN</div>
                            <div>phutanle372@gmail.com</div>
                        </div>
                    </div>
                </Link>
                
                <GoBell size={30} className='topbar-list-bell'/>
            </div>
        </div>
    )
}

export default Topbar