import './style.scss'
import { IoEyeOutline } from "react-icons/io5";

const Statistic = () => {
    return (
        <div className='statistic'>
            <div className='statistic-item'>
                <div>
                    <div style={{fontSize: 30}}>1500</div>
                    <div style={{color: '#888'}}>Daily Views</div>
                </div>
                <IoEyeOutline className='statistic-item-icon'/>
            </div>
            <div className='statistic-item'>
                <div>
                    <div style={{ fontSize: 30 }}>1500</div>
                    <div style={{ color: '#888' }}>Daily Views</div>
                </div>
                <IoEyeOutline className='statistic-item-icon'/>
            </div>
            <div className='statistic-item'>
                <div>
                    <div style={{ fontSize: 30 }}>1500</div>
                    <div style={{ color: '#888' }}>Daily Views</div>
                </div>
                <IoEyeOutline className='statistic-item-icon' />
            </div>
            <div className='statistic-item'>
                <div>
                    <div style={{ fontSize: 30 }}>1500</div>
                    <div style={{ color: '#888' }}>Daily Views</div>
                </div>
                <IoEyeOutline className='statistic-item-icon' />
            </div>

        </div>
    )
}

const StatisticItem = () => {
    return (
        <div></div>
    )
}

export default Statistic;