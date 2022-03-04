import Head from 'next/head'
import { AppLayout } from '../components/AppLayout'

export default function Home() {
  return (
    <>
      <Head>
        <html lang="es-AR" />
        <title>Mercado Libre</title>
        <meta
          name="description"
          content="Comprá productos con Envío Gratis en el día en Mercado Libre Argentina. Encontrá miles de marcas y productos a precios increíbles."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AppLayout></AppLayout>
    </>
  )
}
