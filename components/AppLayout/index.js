import { colors, fonts } from '../../styles/theme'
import { Navbar } from '../Navbar'

export const AppLayout = ({ children, title }) => {
  return (
    <>
      <Navbar title={title} />
      <main>
        <div>{children}</div>
      </main>
      <style jsx global>{`
        main {
          display: flex;
          align-items: center;
          height: 100vh;
          flex-direction: column;
          background: ${colors.background};
        }
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: ${fonts.base};
          background-color: black;
          color: white;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </>
  )
}
