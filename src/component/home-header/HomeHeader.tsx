import { useRouter } from "next/navigation";
import styles from "./HomeHeader.module.scss";
import Image from "next/image";
const Logo = "/assets/logo/logo.svg";
const SearchIcon = "/assets/icons/white-search.svg";
const UserIcon = "/assets/icons/white-user-icon.svg"
export default function HomeHeader() {
  const router = useRouter();
  return (
    <div className={styles.headerSection}>
      <div className="container">
        <div className={styles.headerAlignment}>
          <div className={styles.headerLogo}>
          <Image unoptimized height={0} width={0} src={Logo} alt="Logo" />
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
              <div className={styles.searchIcon}>
                <Image unoptimized height={0} width={0} src={SearchIcon} alt="SearchIcon" />
              </div>
              <div className={styles.searchButtonAlignment}>
                <button>
                  <Image unoptimized height={0} width={0} src={UserIcon} alt="UserIcon" /> Login</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>);
}
