import { useRouter } from "next/navigation";
import styles from "./HomeHeader.module.scss";
import Image from "next/image";
import { useState } from "react";
import classNames from "classnames";
const Logo = "/assets/logo/logo.svg";
const SearchIcon = "/assets/icons/white-search.svg";
const UserIcon = "/assets/icons/white-user-icon.svg";
const MoreIcon = "/assets/icons/menu.png";
const CoseIcon = "/assets/icons/close.png";
export default function HomeHeader() {
  const [mobileViewSidebar, setMobileViewSidebar] = useState(false);
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
            <div className={styles.moreIcon} onClick={() => setMobileViewSidebar(true)}>
              <Image unoptimized height={0} width={0} src={MoreIcon} alt="MoreIcon" />
            </div>
          </div>
        </div>
      </div>
      {mobileViewSidebar && (

        <div className={styles.headerSidebarViewWrapper}>
        </div>
      )}
      <div className={mobileViewSidebar ? classNames(styles.headerSidebarViewBox, styles.openMobileVIew) : classNames(styles.headerSidebarViewBox, styles.closeMobileView)}>
        <div className={styles.headerSidebarViewBox}>
          <div className={styles.headerTopHeadingAlignment}>
            <div className={styles.mobileViewLogo}>
              <Image src={Logo} alt="Logo" unoptimized height={0} width={0} />
            </div>

            <div className={styles.mobileViewCloseIcon} onClick={() => setMobileViewSidebar(false)}>
              <Image src={CoseIcon} alt="CoseIcon" unoptimized height={0} width={0} />
            </div>
          </div>

          <div className={styles.mobileViewMenuAlignment}>
            <a>Investment</a>
            <a>Focus Areas</a>
            <a>Team</a>
            <a>Portfolio</a>
            <a>About</a>
            <a>News</a>
            <a>Contact</a>

            <div className={styles.mobileSearchButtonAlignment}>
              <button>
                <Image unoptimized height={0} width={0} src={UserIcon} alt="UserIcon" /> Login</button>
            </div>
          </div>
        </div>
      </div>
    </div>);
}
