export default async function handler(req, res) {
  const { id } = req.query
  const responseItem = await fetch(`https://api.mercadolibre.com/items/${id}`)
  const responseDescription = await fetch(
    `https://api.mercadolibre.com/items/${id}/description`
  )
  const dataItem = await responseItem.json()
  const dataDescription = await responseDescription.json()
  res.json({ item: dataItem, description: dataDescription })
}
