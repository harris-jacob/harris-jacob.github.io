import { css } from "@emotion/css";
import { useTheme } from "@emotion/react";
import Moon from "../icons/moon.svg";
import { baseTheme } from "../theme";

interface HeaderProps {
  toggleTheme: () => void;
}

export const Header = ({ toggleTheme }: HeaderProps): JSX.Element => {
  const theme = useTheme();

  return (
    <div className={styles.header}>
      <button onClick={toggleTheme} className={styles.button}>
        <Moon height={40} width={40} />
      </button>
    </div>
  );
};

const styles = {
  header: css`
    padding: ${baseTheme.spacing(3)};
  `,
  button: css`
    all: unset;
  `,
};
