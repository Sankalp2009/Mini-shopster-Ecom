import { fetcher } from '../services/API'
import useSWR from 'swr'
import Product from '../Components/Product'

function Dashboard() {
  const { data, error, isLoading } = useSWR(
    `https://dummyjson.com/products`,
    fetcher
  )
  console.log(data)
  if (error) return <div>failed to load</div>
  if (isLoading) return <div>loading...</div>
  return (
    <div>
      {data?.products?.length === 0 && <h2>No data Found</h2>}
      <Product data={data?.products} />
    </div>
  )
}

export default Dashboard
