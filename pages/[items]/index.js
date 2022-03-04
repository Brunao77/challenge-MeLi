import Head from 'next/head'
import { useRouter } from 'next/router'
import { AppLayout } from '../../components/AppLayout'
import { breakpoints, colors } from '../../styles/theme'
import { FaShippingFast } from 'react-icons/fa'
import { server } from '../../config'

const Items = ({ products, search }) => {
  const router = useRouter()
  const handleClick = (id) => {
    router.push(`/items/${id}`)
  }
  const { categories, items } = products
  const categoriesToShow = categories.slice(0, 4)
  return (
    <>
      <Head>
        <html lang="es-AR" />
        <title>{search} | Mercado Libre</title>
        <meta
          name="description"
          content={`Envíos Gratis en el día ✓ Comprá ${search} en cuotas sin interés! Conocé nuestras increíbles ofertas y promociones en millones de productos.`}
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AppLayout title={search}>
        <aside>
          {categoriesToShow.map((category, index) =>
            index !== categoriesToShow.length - 1 ? (
              <p key={index}>
                {category} {'>'}
              </p>
            ) : (
              <p key={index}>{category}</p>
            )
          )}
        </aside>
        <section>
          {items.map((product) => {
            const { id, title, price, picture, free_shipping, state_name } =
              product
            const { amount, currency } = price
            return (
              <div key={id} className="card" onClick={() => handleClick(id)}>
                <img src={picture} alt={title} />
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
          aside {
            display: flex;
            gap: 5px;
            width: 100%;
            color: ${colors.secondaryBold};
          }
          p {
            font-size: max(0.8vw, 10px);
            gap: 5px;
            display: flex;
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
            width: max(8vw, 50px);
            height: max(8vw, 50px);
            object-fit: contain;
            user-select: none;
          }
          .info-container {
            width: 70%;
            padding: 10px;
            display: flex;
            flex-direction: column;
            gap: max(0.8vw, 5px);
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
            font-size: max(1.2vw, 10px);
            margin: 0;
          }
          h2 {
            font-weight: 400;
            font-size: max(1.3vw, 10px);
            margin: 0;
            display: flex;
            flex-direction: row;
            align-items: center;
            gap: 10px;
          }
          h3 {
            font-weight: 400;
            font-size: max(0.8vw, 5px);
            color: ${colors.secondaryBold};
          }
          @media (max-width: ${breakpoints.mobile}) {
            section {
              width: 100vw;
              padding: 10px;
            }
            .card {
              padding: 0;
            }
          }
        `}
      </style>
    </>
  )
}

export default Items

export async function getServerSideProps(context) {
  const { query } = context
  const { search } = query
  const response = await fetch(`${server}/api/items?search=${search}`)
  const data = await response.json()
  return {
    props: { products: data, search }
  }
}
