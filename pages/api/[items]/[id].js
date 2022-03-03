export default async function handler(req, res) {
  const { id } = req.query
  const responseItem = await fetch(`https://api.mercadolibre.com/items/${id}`)
  const responseDescription = await fetch(
    `https://api.mercadolibre.com/items/${id}/description`
  )
  const dataItem = await responseItem.json()
  const dataDescription = await responseDescription.json()
  const idItem = dataItem.id
  const {
    title,
    price,
    currency_id,
    thumbnail,
    condition,
    shipping,
    sold_quantity
  } = dataItem
  const { free_shipping } = shipping
  const { plain_text } = dataDescription
  res.json({
    author: {
      name: '',
      lastname: ''
    },
    item: {
      id: idItem,
      title,
      price: { currency: currency_id, amount: price, decimals: '00' },
      picture: thumbnail,
      condition,
      free_shipping,
      sold_quantity,
      description: plain_text
    }
  })
}
