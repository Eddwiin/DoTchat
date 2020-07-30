import Head from 'next/head'
import dynamic from 'next/dynamic'
import { useEffect } from 'react';
import { Router, useRouter } from 'next/router';
import APP_ROUTES from '../configs/routes';


export default function Home() {

  const router = useRouter();

  useEffect(() => {
    const { pathname } = Router;
    if (pathname === undefined) {
      router.push(APP_ROUTES.AUTH)
    }
  })

  return (
    <div>
      <Head>
        <title>DoTchat</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </div>
  )
}
