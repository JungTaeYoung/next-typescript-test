import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import axios from 'axios'
import { GetServerSideProps } from 'next'


interface TestInterface {
  dateTime: Number
}

function Home({ dateTime }: TestInterface) {
  return (
    <div>
      fsf
      {dateTime}
    </div>
  )
}

export default Home

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await axios.get("https://worldtimeapi.org/api/ip");
  console.log(res.data)
  return {
    props: { dateTime: res.data.datetime },
  };
};
