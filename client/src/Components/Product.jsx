import ProductCard from './ProductCard'
function Product({ data }) {
  return (
    <div className="products-wrapper">
      <div className="products-grid">
        {data && data?.map((el) => <ProductCard key={el.id} product={el} />)}
      </div>
    </div>
  )
}

export default Product
