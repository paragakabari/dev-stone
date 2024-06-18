import { useRouter } from "next/navigation";
import styles from "./HomeHeader.module.scss";
const Logo = "/assets/logo/logo.svg";
const SearchIcon = "/assets/icons/white-search.svg";
export default function HomeHeader() {
  const router = useRouter();
  return (
    <div className={styles.headerSection}>
      <div className="container">
        <div className={styles.headerAlignment}>
          <div className={styles.headerLogo}>
            <img src={Logo} alt="Logo" />
          </div>
          <div className={styles.headerRightSide}>
            <div className={styles.headerMenu}>
              <a>Investment</a>
              <a>Focus Areas</a>
              <a>Team</a>
              <a>Portfolio</a>
              <a>About</a>
              <a>News</a>
              <a>Contact</a>
            </div>
            <div className={styles.headerSearchAlignment}>
              <div>
                <img src={SearchIcon} alt="SearchIcon" />
              </div>
              <div className={styles.searchButtonAlignment}>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>);
}
