import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import { AppLayout } from '../../components/AppLayout'
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

  if (!product) return <h1>Loading</h1>

  return (
    <>
      <AppLayout>
        <h1>Hola</h1>
        <section>
          <div className="left-content">
            <img src={product.item.thumbnail} />
            <h3>Descripcion del producto</h3>
            <p>{product.description.plain_text}</p>
          </div>
          <div className="right-content">
            <h4>
              {product.item.condition === 'new' && 'Nuevo'} -{' '}
              {product.item.sold_quantity} vendidos
            </h4>
            <h1>{product.item.title}</h1>
            <h2>
              $ {new Intl.NumberFormat('de-DE').format(product.item.price)}
            </h2>
            <button>Comprar</button>
          </div>
        </section>
      </AppLayout>
      <style jsx>{`
        section {
          background: ${colors.white};
          display: flex;
          flex-direction: row;
          width: 62vw;
          padding: 20px;
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
          gap: 10px;
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
        button {
          background: ${colors.tertiary};
          color: ${colors.white};
          border: 0;
          border-radius: 5px;
          font-size: 20px;
          width: 100%;
          padding: 10px;
          cursor: pointer;
          user-select: none;
        }
        button:hover {
          opacity: 80%;
        }
      `}</style>
    </>
  )
}
export default Item
