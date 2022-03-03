export default async function handler(req, res) {
  const { search } = req.query
  const response = await fetch(
    `https://api.mercadolibre.com/sites/MLA/search?q=${search}`
  )
  const data = await response.json()
  const { results } = data

  res.json({
    author: {
      name: '',
      lastname: ''
    },
    categories: [],
    items: results.slice(0, 4).map((product) => {
      const {
        id,
        title,
        price,
        currency_id,
        thumbnail,
        condition,
        shipping,
        address
      } = product
      const { free_shipping } = shipping
      const { state_name } = address
      return {
        id,
        title,
        price: { currency: currency_id, amount: price, decimals: '00' },
        picture: thumbnail,
        condition,
        free_shipping,
        state_name
      }
    })
  })
}
