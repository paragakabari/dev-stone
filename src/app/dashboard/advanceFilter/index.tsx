import React, { useState } from 'react'
import styles from "./advanceFilter.module.scss";
import classNames from 'classnames';
import Image from 'next/image';
const Dropdown = "/assets/icons/dropdown-icon.svg";
const SearchIcon = "/assets/icons/white-search.svg";
export default function AdvanceFilter() {
    const [dropdownBox, setdropdownBox] = useState(false);
    return (
        <div className={styles.advanceFilterWrapper}>
            <div className={styles.advanceFilterBox}>
                <div>
                    <div className={styles.dropdownALignment}>
                        <div className={styles.dropdown}>
                            <label>Industry</label>

                            <div className={styles.dropdownBox}>

                                <select>
                                    <option>Select 1</option>
                                    <option>Select 2</option>
                                    <option>Select 3</option>
                                    <option>Select 4</option>
                                    <option>Select 5</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className={styles.dropdownALignment}>
                        <div className={styles.dropdown}>
                            <label>Industry</label>
                            {/* 
                            <div className={styles.dropdownBox}>
                                <span>Select</span>
                                <div onClick={() => setdropdownBox(!dropdownBox)}>
                                    <Image unoptimized height={0} width={0} src={Dropdown} alt="Dropdown" />
                                </div>

                                <div className={classNames(styles.dropdownBoxAlignment, dropdownBox ? styles.openDropdown : styles.hiddenDropdown)}>
                                    {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((key) => {
                                        return (
                                            <p>span 1</p>
                                        )
                                    })}
                                </div>
                            </div> */}

                            <select>
                                <option>Select 1</option>
                                <option>Select 2</option>
                                <option>Select 3</option>
                                <option>Select 4</option>
                                <option>Select 5</option>
                            </select>
                        </div>
                    </div>

                    <div className={styles.investmentSize}>
                        <label>Investment Size</label>

                        <input type='range' />
                    </div>

                    <div className={styles.buttonAlignment}>
                        <button className={styles.outlineBtn}><Image unoptimized height={0} width={0} src={SearchIcon} alt='SearchIcon' />search</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
