import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { AppLayout } from '../../components/AppLayout'
import { Spinner } from '../../components/Spinner'
import { colors } from '../../styles/theme'
import { FaShippingFast } from 'react-icons/fa'

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

  const handleClick = (id) => {
    router.push(`/items/${id}`)
  }

  console.log(products)
  return (
    <>
      <AppLayout title={search}>
        {!products ? (
          <Spinner />
        ) : (
          <>
            <h1>GGGGGGG</h1>
            <section>
              {products.map((product) => {
                const { id, title, price, picture, free_shipping, state_name } =
                  product
                const { amount, currency } = price
                return (
                  <div
                    key={id}
                    className="card"
                    onClick={() => handleClick(id)}
                  >
                    <img src={picture} />
                    <div className="info-container">
                      <h2>
                        {currency === 'ARS' ? '$' : 'U$S'}{' '}
                        {new Intl.NumberFormat('de-DE').format(amount)}
                        {free_shipping && (
                          <div className="shipping-icon">
                            <FaShippingFast size={13} />
                          </div>
                        )}
                      </h2>

                      <h1>{title}</h1>
                    </div>
                    <h3>{state_name}</h3>
                  </div>
                )
              })}
            </section>
          </>
        )}
      </AppLayout>
      <style jsx>
        {`
          section {
            background: ${colors.white};
            display: flex;
            flex-direction: column;
            width: 62vw;
            padding: 20px;
            box-shadow: 0 1px 1px 0 rgb(0 0 0 / 10%);
            border-radius: 5px;
          }
          .card {
            color: ${colors.black};
            padding: 20px 10px;
            display: flex;
            border-bottom: 1px solid ${colors.secondaryLight};
            cursor: pointer;
          }
          .card:last-child {
            border: 0;
          }
          .card:hover {
            box-shadow: 0 2px 2px 0 rgb(0 0 0 / 10%);
          }
          img {
            width: 170px;
            height: 170px;
            object-fit: contain;
            user-select: none;
          }
          .info-container {
            width: 40vw;
            padding: 10px;
            display: flex;
            flex-direction: column;
            gap: 10px;
          }
          .shipping-icon {
            border-radius: 999px;
            display: flex;
            align-items: center;
            justify-content: center;
            width: 20px;
            height: 20px;
            background: #91db69;
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
            display: flex;
            flex-direction: row;
            align-items: center;
            gap: 10px;
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
