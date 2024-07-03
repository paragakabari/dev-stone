import { useRouter } from "next/navigation";
import styles from "./header.module.scss";
import Image from "next/image";
import { useEffect, useState } from "react";
import AdvanceFilter from "@/app/dashboard/advanceFilter";
import { getUserInfo } from "@/utils/auth.util";
const SearchIcon = "/assets/icons/blue-search-icon.svg";
const TonggleIcon = "/assets/icons/tonggle-icon.svg";
const EmailIcon = "/assets/icons/email-icon.svg";
const NotificationIcon = "/assets/icons/notification-icon.svg";
const ProfileImg = "/assets/images/profile-img.png";
export default function Header({ onToggleSidebar }) {
  const router = useRouter();
  const [isModalOpen, setModalOpen] = useState(false);
  const [userInfo, setUserInfo] = useState({ user_info: { first_name: '', last_name: '' } })

  const toggleModal = () => {
    setModalOpen(!isModalOpen);
  };
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setUserInfo(getUserInfo())
    }
  }, [router])

  const displayText = (userInfo?.user_info?.first_name?.substring(0, 1).toUpperCase() + userInfo?.user_info?.last_name?.substring(0, 1).toUpperCase())

  return (
    <div className={styles.headerSection}>
      <div className={styles.headerLeft}>
        <div
          className={styles.toggleBtn}
          onClick={onToggleSidebar}
        >
          <Image
            unoptimized
            height={0}
            width={0}
            src={TonggleIcon}
            alt="TonggleIcon"
          />
        </div>
        <div className={styles.headerSearch}>
          <Image
            unoptimized
            height={0}
            width={0}
            src={SearchIcon}
            alt="SearchIcon"
          />
          <input type="text" placeholder="Search PE firms..." />
        </div>

        <div
          className={styles.toggleBtn}
          onClick={toggleModal}
        >
          <Image
            unoptimized
            height={0}
            width={0}
            src={TonggleIcon}
            alt="TonggleIcon"
          />
        </div>
      </div>

      <div className={styles.headerRight}>
        <div className={styles.headerOption}>
          <Image
            unoptimized
            height={0}
            width={0}
            src={EmailIcon}
            alt="EmailIcon"
          />
          <Image
            unoptimized
            height={0}
            width={0}
            src={NotificationIcon}
            alt="NotificationIcon"
          />
        </div>
        <div className={styles.profieAlignment}>
          <div className={styles.profileName}>
            <p>{userInfo?.user_info?.first_name} {userInfo?.user_info?.last_name}</p>
          </div>
          <div className={styles.profileImg}>
            {/* <Image
              unoptimized
              height={0}
              width={0}
              src={ProfileImg}
              alt="ProfileImg"
            /> */}
            {/* <div className="avatar"> */}
              <span>{displayText || '-'}</span>
            {/* </div> */}
          </div>
        </div>
      </div>
      <AdvanceFilter isOpen={isModalOpen} onClose={toggleModal} />
    </div>
  );
}
