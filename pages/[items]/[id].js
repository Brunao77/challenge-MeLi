import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import { AppLayout } from '../../components/AppLayout'
import { Button } from '../../components/Button'
import { Spinner } from '../../components/Spinner'
import { colors } from '../../styles/theme'

const Item = () => {
  const router = useRouter()
  const [product, setProduct] = useState(null)
  const { id } = router.query

  useEffect(() => {
    id &&
      fetch(`/api/items/${id}`)
        .then((res) => res.json())
        .then(setProduct)
  }, [id])

  return (
    <>
      <AppLayout>
        {!product ? (
          <Spinner />
        ) : (
          <>
            <h1>Hola</h1>
            <section>
              <div className="left-content">
                <img src={product.item.thumbnail} />
                <h3>Descripcion del producto</h3>
                <p>{product.description.plain_text}</p>
              </div>
              <div className="right-content">
                <div className="info-content">
                  <h4>
                    {product.item.condition === 'new' && 'Nuevo'} -{' '}
                    {product.item.sold_quantity} vendidos
                  </h4>
                  <h1>{product.item.title}</h1>
                  <h2>
                    ${' '}
                    {new Intl.NumberFormat('de-DE').format(product.item.price)}
                  </h2>
                </div>
                <Button>Comprar</Button>
              </div>
            </section>
          </>
        )}
      </AppLayout>
      <style jsx>{`
        section {
          background: ${colors.white};
          display: flex;
          flex-direction: row;
          width: 62vw;
          padding: 40px;
          box-shadow: 0 1px 1px 0 rgb(0 0 0 / 10%);
          border-radius: 5px;
          color: ${colors.black};
        }
        div {
          display: flex;
          flex-direction: column;
        }
        .left-content {
          display: flex;
          flex-direction: column;
          gap: 20px;
          width: 75%;
        }
        .right-content {
          display: flex;
          flex-direction: column;
          gap: 40px;
          width: 25%;
        }
        img {
          width: 100%;
          height: 25vw;
          object-fit: contain;
          user-select: none;
        }
        p {
          color: ${colors.secondaryBold};
          margin: 0;
        }
        .info-content {
          display: flex;
          flex-direction: column;
          gap: 10px;
          width: 100%;
        }
        h1 {
          font-weight: 700;
          font-size: 25px;
          margin: 0;
        }
        h2 {
          font-weight: 500;
          font-size: 40px;
          margin: 0;
        }
        h3 {
          font-weight: 500;
          font-size: 25px;
          color: ${colors.black};
          margin: 0;
        }
        h4 {
          font-weight: 500;
          font-size: 15px;
          color: ${colors.black};
          margin: 0;
        }
      `}</style>
    </>
  )
}
export default Item
