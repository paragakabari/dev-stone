"use client"

import Header from "@/component/header/Header";
import Sidebar from "@/component/sidebar/Sidebar";
import { useRouter } from "next/navigation"

export default function Dashboard(){
    const router = useRouter();
    return(
        <>
        <Header/>
        <Sidebar/>
       Dashboard

        </>
    )
}