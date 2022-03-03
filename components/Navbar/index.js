import { colors } from '../../styles/theme'
import { AiOutlineSearch } from 'react-icons/ai'
import { useState } from 'react'
import { useRouter } from 'next/router'

export const Navbar = ({ title }) => {
  const [message, setMessage] = useState('')
  const router = useRouter()

  const handleChange = (event) => {
    const { value } = event.target
    setMessage(value)
  }

  const handleSumbit = () => {
    router.push(`/items?search=${message}`)
  }

  return (
    <>
      <nav>
        <div className="container">
          <img
            src="https://http2.mlstatic.com/frontend-assets/ui-navigation/5.18.9/mercadolibre/logo__large_plus@2x.png"
            onClick={() => router.push('/')}
          />
          <section>
            <input
              type="text"
              onChange={handleChange}
              placeholder="Nunca dejes de buscar"
              defaultValue={title}
              onKeyPress={(e) => ['Enter'].includes(e.code) && handleSumbit()}
            />
            <div className="search-icon" onClick={handleSumbit}>
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
            box-shadow: 0 1px 0 0 rgb(0 0 0 / 10%);
          }
          .container {
            width: 62vw;
            display: flex;
            justify-content: space-between;
            align-items: center;
          }
          img {
            width: max(6.5vw, 50px);
            user-select: none;
            cursor: pointer;
          }
          section {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 4vh;
            width: 54vw;
            border-radius: 5px;
            box-shadow: 0 1px 2px 0 rgb(0 0 0 / 20%);
          }
          input {
            width: 96%;
            height: 100%;
            padding: 10px;
            border: 0;
            color: ${colors.black};
            border-radius: 5px 0 0 5px;
            font-size: max(1vw, 10px);
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
          @media (max-width: 850px) {
            input {
              width: 80%;
            }
            .search-icon {
              width: 20%;
            }
          }
        `}
      </style>
    </>
  )
}
