
export const stockLoader = async ({params}) => {

    // console.log(params)
    const symbol = params.symbol;
    const apiKey = 'ed710dc0e9ae0c48a704371e936c682b'

    const response = await fetch(`https://financialmodelingprep.com/api/v3/profile/${symbol}?apikey=${apiKey}`)
   
    const data = await response.json()

    // console.log(data)

    return data

    
}