import { Link } from 'react-router-dom'
import stockData from '../stock-data'


function Dashboard(props){



    return <table className='stock'>
         <tr>
            <th>Company Name</th>
            <th>Price</th>
            <th>Change</th>
         </tr>
        {
         stockData.map(stock => {
            const { name, symbol, lastPrice, change } = stock

            const color = change < 0 ? 'red' : 'green'

            return (
                <tr>

                    <td>
                        <Link className='list-item' to={`/stocks/${symbol}`} ><p>{name} {symbol}</p></Link>
                    </td>
                    <td>
                        {lastPrice}
                    </td>
                    <td className={color}>
                        {change}
                    </td>

                </tr>

            )
         })   
        }
    </table>
}

export default Dashboard