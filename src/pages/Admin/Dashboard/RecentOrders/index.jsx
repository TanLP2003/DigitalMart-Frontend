import { useNavigate } from 'react-router-dom'
import './style.scss'

const RecentOrders = () => {
    const navigate = useNavigate()
    return (
        <div className='recentord'>
            <div className='recentord-title'>
                <h5>Recent Orders</h5>
                <div onClick={() => navigate('order')}>View All</div>
            </div>
            <table className='recentord-table'>
                <thead>
                    <tr>
                        <th colSpan={3}>Name</th>
                        <th colSpan={3}>Price</th>
                        <th colSpan={3}>Created At</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Product 1</td>
                        <td>$10.00</td>
                        <td>2024-05-11</td>
                    </tr>
                    <tr>
                        <td>Product 2</td>
                        <td>$15.00</td>
                        <td>2024-05-10</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

const RecentOrderItem = () => {
    return (
        <div></div>
    )
}

export default RecentOrders;