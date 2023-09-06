import { faSun } from "@fortawesome/free-regular-svg-icons";
import { faMoon } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface Props {
  darkMode: boolean;
  toggle: () => void;
  className?: string;
}

function DarkModeSwitcher({ darkMode, toggle, className }: Props) {
  return (
    <button
      onClick={toggle}
      className={className}
      aria-label="dark-mode-toggle"
    >
      <FontAwesomeIcon icon={darkMode ? faMoon : faSun} />
    </button>
  );
}

export default DarkModeSwitcher;
