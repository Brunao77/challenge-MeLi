import { colors } from '../../styles/theme'
import { AiOutlineSearch } from 'react-icons/ai'

export const Navbar = () => {
  return (
    <>
      <nav>
        <div className="container">
          <img src="https://http2.mlstatic.com/frontend-assets/ui-navigation/5.18.9/mercadolibre/logo__large_plus@2x.png" />
          <section>
            <input type="text" placeholder="Nunca dejes de buscar" />
            <div className="search-icon">
              <AiOutlineSearch size={20} color={colors.black} />
            </div>
          </section>
        </div>
      </nav>
      <style jsx>
        {`
          nav {
            background: ${colors.primary};
            height: 7vh;
            display: flex;
            justify-content: center;
          }
          .container {
            width: 62vw;
            display: flex;
            justify-content: space-between;
            align-items: center;
          }
          img {
            width: max(6.5vw, 100px);
          }
          section {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 4vh;
            width: 54vw;
          }
          input {
            width: 96%;
            height: 100%;
            padding: 10px;
            border: 0;
            color: ${colors.black};
            border-radius: 5px 0 0 5px;
            font-size: 15px;
          }
          input::placeholder {
            color: ${colors.secondary};
          }
          input:focus {
            outline: 0;
          }
          .search-icon {
            background: ${colors.background};
            display: flex;
            justify-content: center;
            align-items: center;
            width: 4%;
            height: 100%;
            border-radius: 0 5px 5px 0;
            cursor: pointer;
          }
          .search-icon:hover {
            opacity: 91%;
          }
        `}
      </style>
    </>
  )
}
