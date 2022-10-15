import { css } from "@emotion/css"
import Moon from "../icons/moon.svg"


interface HeaderProps {
  toggleTheme: () => void
}

export const Header = ({toggleTheme}: HeaderProps): JSX.Element => {
  return (
    <div>
      <button onClick={toggleTheme} className={styles.button}>
        <Moon height={24} width={24}/>
      </button>
    </div>
  )
}


const styles = {
  button: css`
    all: unset;
  `
}
