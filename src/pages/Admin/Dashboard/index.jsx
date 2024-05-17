import RecentOrders from './RecentOrders'
import Statistic from './Statistic'
import './style.scss'

const Dashboard = () => {
    return (
        <div className='dashboard'>
            <Statistic />
            <RecentOrders />
        </div>
    )
}

export default Dashboard