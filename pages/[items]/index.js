import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { AppLayout } from '../../components/AppLayout'
import { colors } from '../../styles/theme'

const Items = () => {
  const router = useRouter()
  const [products, setProducts] = useState(null)
  const { search } = router.query

  useEffect(() => {
    search &&
      fetch(`/api/items?search=${search}`)
        .then((res) => res.json())
        .then((res) => setProducts(res.items))
  }, [search])

  if (!products) return <h1>Loading...</h1>

  const handleClick = (id) => {
    router.push(`/items/${id}`)
  }

  return (
    <>
      <AppLayout>
        <h1>GGGGGGG</h1>
        <section>
          {products.map((product) => (
            <div
              key={product.id}
              className="card"
              onClick={() => handleClick(product.id)}
            >
              <img src={product.thumbnail} />
              <div className="info-container">
                <h2>
                  ${' '}
                  {new Intl.NumberFormat('de-DE').format(
                    product.prices.prices[0].amount
                  )}
                </h2>
                {product.shipping.free_shipping && <h1>FREE</h1>}
                <h1>{product.title}</h1>
              </div>
              <h3>{product.address.state_name}</h3>
            </div>
          ))}
        </section>
      </AppLayout>
      <style jsx>
        {`
          section {
            background: ${colors.white};
            display: flex;
            flex-direction: column;
            width: 62vw;
            padding: 0 20px;
            box-shadow: 0 1px 1px 0 rgb(0 0 0 / 10%);
            border-radius: 5px;
          }
          .card {
            color: ${colors.black};
            padding: 20px 0;
            display: flex;
            border-bottom: 1px solid ${colors.secondaryLight};
            cursor: pointer;
          }
          .card:last-child {
            border: 0;
          }
          img {
            width: 150px;
            height: 150px;
          }
          .info-container {
            width: 40vw;
            padding: 10px;
            display: flex;
            flex-direction: column;
            gap: 10px;
          }
          h1 {
            font-weight: 400;
            font-size: 20px;
            margin: 0;
          }
          h2 {
            font-weight: 400;
            font-size: 25px;
            margin: 0;
          }
          h3 {
            font-weight: 400;
            font-size: 15px;
            color: ${colors.secondaryBold};
          }
        `}
      </style>
    </>
  )
}

export default Items
