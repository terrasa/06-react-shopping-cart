import './Footer.css'

export function Footer ({ filters, filterPrice }) {
  // const { filters } = useFilters()

  return (
    <footer className='footer'>
      {
        JSON.stringify(filters, null, 2)
      }
      {
        JSON.stringify(filterPrice, null, 2)
      }
      {/* <h4>Prueba técnica de React ⚛️ － <span>@midudev</span></h4>
      <h5>Shopping Cart con useContext & useReducer</h5> */}
    </footer>
  )
}
