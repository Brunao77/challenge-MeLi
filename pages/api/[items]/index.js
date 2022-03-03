export default async function handler(req, res) {
  const { search } = req.query
  const response = await fetch(
    `https://api.mercadolibre.com/sites/MLA/search?q=${search}`
  )
  const data = await response.json()
  const { results } = data

  res.json({
    author: {
      name: 'br',
      lastName: 'asasd'
    },
    categories: [],
    items: results.slice(0, 4)
  })
}
