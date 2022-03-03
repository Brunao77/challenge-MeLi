import { colors } from '../../styles/theme'

export const Button = ({ children }) => {
  return (
    <>
      <button>{children}</button>
      <style jsx>
        {`
          button {
            background: ${colors.tertiary};
            color: ${colors.white};
            border: 0;
            border-radius: 5px;
            font-size: max(1.1vw, 10px);
            width: 100%;
            padding: 10px;
            cursor: pointer;
            user-select: none;
          }
          button:hover {
            opacity: 80%;
          }
        `}
      </style>
    </>
  )
}
