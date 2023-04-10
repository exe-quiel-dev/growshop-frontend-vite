
export function formatearMoneda (precio) {
  return precio.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD'
  })
}