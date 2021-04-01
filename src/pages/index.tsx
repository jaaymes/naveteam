import { GetServerSideProps } from "next";
import Head from "next/head";
import React from "react";
import { LoginBox } from "../components/LoginBox";
import styles from "../styles/pages/Home.module.css"

export default function home() {   
  return (
    <div className={styles.container}>
      
      <Head>
        <title>Login | NaveBin</title>
      </Head>
      <LoginBox />
      
    </div>
  )
}

export const getServerSideProps: GetServerSideProps =async ({req}) =>{
  const {token} = req.cookies

  if (token) {
    return { 
      redirect: {
        destination: '/home',
        permanent: false
      }
    }
  }
  return {
    props: {}
  }
}
