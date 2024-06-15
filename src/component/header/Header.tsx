import { useRouter } from "next/navigation";
import styles from "./header.module.scss";
import Image from "next/image";
import { useState } from "react";
import AdvanceFilter from "@/app/dashboard/advanceFilter";
const SearchIcon = "/assets/icons/blue-search-icon.svg";
const TonggleIcon = "/assets/icons/tonggle-icon.svg";
const EmailIcon = "/assets/icons/email-icon.svg";
const NotificationIcon = "/assets/icons/notification-icon.svg";
const ProfileImg = "/assets/images/profile-img.png";
export default function Header({ onToggleSidebar }) {
  const router = useRouter();
  const [isModalOpen, setModalOpen] = useState(true);

  const toggleModal = () => {
    setModalOpen(!isModalOpen);
  };
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
            <p>Robert Fox</p>
          </div>
          <div className={styles.profileImg}>
            <Image
              unoptimized
              height={0}
              width={0}
              src={ProfileImg}
              alt="ProfileImg"
            />
          </div>
        </div>
      </div>
      <AdvanceFilter isOpen={isModalOpen} onClose={toggleModal} />
    </div>
  );
}
