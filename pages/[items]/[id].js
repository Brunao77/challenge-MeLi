import Head from 'next/head'
import { AppLayout } from '../../components/AppLayout'
import { Button } from '../../components/Button'
import { breakpoints, colors } from '../../styles/theme'
import { server } from '../../config'

const Item = ({ product }) => {
  const { title, picture, description, condition, sold_quantity, price } =
    product.item
  return (
    <>
      <Head>
        <html lang="es-AR" />
        <title>{title}</title>
        <meta
          name="description"
          content={`Envíos gratis en el día ✓ Comprá online de manera segura con Compra Protegida © ${title} ❤`}
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AppLayout>
        <aside>
          Aquí {'>'} Irían {'>'} Categorías
        </aside>
        <section>
          <div className="left-content">
            <img src={picture} alt={title} />
            <h3>Descripcion del producto</h3>
            <p>{description}</p>
          </div>
          <div className="right-content">
            <div className="info-content">
              <h4>
                {condition === 'new' ? 'Nuevo' : 'Usado'} - {sold_quantity}{' '}
                vendidos
              </h4>
              <h1>{title}</h1>
              <h2>
                {price.currency === 'ARS' ? '$' : 'U$S'}{' '}
                {new Intl.NumberFormat('de-DE').format(price.amount)}
              </h2>
            </div>
            <Button>Comprar</Button>
          </div>
        </section>
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
        aside {
          margin: 5px;
          color: ${colors.secondaryBold};
          font-size: max(0.8vw, 10px);
        }
        div {
          display: flex;
          flex-direction: column;
        }
        .left-content {
          display: flex;
          flex-direction: column;
          gap: max(1vw, 5px);
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
          height: max(25vw, 200px);
          object-fit: contain;
          user-select: none;
        }
        p {
          color: ${colors.secondaryBold};
          font-size: max(1vw, 10px);
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
          font-size: max(1.3vw, 15px);
          margin: 0;
        }
        h2 {
          font-weight: 500;
          font-size: max(2.1vw, 15px);
          margin: 0;
        }
        h3 {
          font-weight: 500;
          font-size: max(1.4vw, 15px);
          color: ${colors.black};
          margin: 0;
        }
        h4 {
          font-weight: 500;
          font-size: max(0.8vw, 10px);
          color: ${colors.black};
          margin: 0;
        }
        @media (max-width: ${breakpoints.mobile}) {
          section {
            width: 100vw;
            padding: 10px;
          }
        }
      `}</style>
    </>
  )
}
export default Item

export async function getServerSideProps(context) {
  const { params } = context
  const { id } = params
  const response = await fetch(`${server}/api/items/${id}`)
  const data = await response.json()
  return {
    props: { product: data }
  }
}
