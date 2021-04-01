import { GetServerSideProps } from "next";
import React from "react";
import NavBar from "../components/NavBar";

import UserList from '../components/UserList'
//import WithAuth from "../Util/WithAuth";
import api from "../services/api";
import styles from '../styles/pages/Home.module.css'


export default function Home(){
  return(
    <div>
      <NavBar />
      <UserList />
      </div>
  )
}
export const getServerSideProps: GetServerSideProps =async ({req}) =>{
  const {token} = req.cookies

  if (!token) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  }
  return {
    props: {}
  }
}


