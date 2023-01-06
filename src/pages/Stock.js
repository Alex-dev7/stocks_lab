import { useLoaderData } from 'react-router-dom'

function Stock(props){

    const stock = useLoaderData()[0]
    
    const arr = []

    for(let item in stock) {
        // console.log(item + " : " + stock[item])
        arr.push(item + ": " + stock[item])
    }

    console.log(arr)

    console.log(stock)

    return ( <div className="show">

        <img src={stock.image} />
        <div>
            
            <h3>{stock.companyName}  <i>{stock.symbol}</i></h3>
            <p>Price: <span>{stock.price} {stock.currency}</span> </p>
            <p>CEO: <span>{stock.ceo}</span> </p>
            
            <p>Changes: <span>{stock.changes}</span> </p>
            <p>Industry: <span>{stock.industry}</span> </p>
            <p>WEB Site: <i><span>{stock.website}</span></i> </p>
            <p>Sector: <span>{stock.sector}</span> </p>
            <p>{stock.description}</p>
        </div>
    
    </div>

    )
}

export default Stock

