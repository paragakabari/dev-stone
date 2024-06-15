

import { useRouter } from "next/navigation"
import styles from "./sidebar.module.scss";
import Image from "next/image";
import classNames from "classnames";

const Logo = "/assets/logo/logo.svg";
const DashboradIcon = "/assets/icons/dashbord-icon.svg";
const PEFirmIcon = "/assets/icons/calculatore-icon.svg";
const ReportIcon = "/assets/icons/chart-icon.svg";
const ProfileIcon = "/assets/icons/member-list.svg";
const LogouIcon = "/assets/icons/sign-out-alt.svg";
export default function Sidebar() {
    const router = useRouter();
    return (
        // <div className={classNames(styles.sidebarSection, toggleSidebar ? styles.smallSidebar : "")}>
        <div className={(styles.sidebarSection)}>
            <div className={styles.sidebarTop}>

                <div className={styles.sidebarLogo}>
                    <Image unoptimized height={0} width={0} src={Logo} alt="Logo" />
                </div>

                <div className={styles.sidebarMenu}>
                    <div className={classNames(styles.menuList, styles.activeMenu)}>
                        <a> <Image unoptimized height={0} width={0} src={DashboradIcon} alt="DashboradIcon" /><p>Dashboard</p></a>
                    </div>
                    <div className={styles.menuList}>
                        <a> <Image unoptimized height={0} width={0} src={PEFirmIcon} alt="PEFirmIcon" /><p> PE Firms</p></a>
                    </div>
                    <div className={styles.menuList}>
                        <a> <Image unoptimized height={0} width={0} src={ReportIcon} alt="ReportIcon" /><p>Reports</p></a>
                    </div>
                    <div className={styles.menuList}>
                        <a> <Image unoptimized height={0} width={0} src={ProfileIcon} alt="ProfileIcon" /><p>Profile </p> </a>
                    </div>
                    <div className={styles.menuList}>
                        <a><Image unoptimized height={0} width={0} src={LogouIcon} alt="LogouIcon" /><p>Logout</p></a>
                    </div>

                </div>
            </div>

            <div className={styles.sidebarBottom}>
                <p>© 2024 Stone-Goff Partners.
                    All Rights Reserved.</p>
            </div>
        </div>
    )
}