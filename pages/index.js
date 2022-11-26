import Head from "next/head";
import { getProviders, getSession, useSession } from "next-auth/react";
import Sidebar from "../components/Sidebar";
import Feed from "../components/Feed";
import Login from "../components/Login";
import Image from "next/image";
import Modal from "../components/Modal";
import { useRecoilState } from "recoil";
import { modalState } from "../atoms/modalAtom";
import Widgets from "../components/Widgets";
export default function Home({ trendingResults, providers,followResults }) {
  const { data: session } = useSession();
  const [isOpen, setIsOpen] = useRecoilState(modalState);

  if (!session) return <Login providers={providers} />;
  return (
    <div className="">
      <Head>
        <title>Twitter</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-black min-h-screen flex max-h-[1500px] mx-auto">
        <Sidebar />

        <Feed />
        <Widgets trendingResults={trendingResults} followResults={followResults}/>
        {isOpen &&  <Modal />}
       
      </main>
    </div>
  );
}
 
export async function getServerSideProps(context) {
 

  const trendingResults = await fetch("https://api.npoint.io/fe85dcc8cbc4e387c403").then(
    (res) => res.json()
  );
  const followResults = await fetch("https://api.npoint.io/760cf642c22f88655aa4").then(
    (res) => res.json()
  ); 
  if (!trendingResults) {
    return {
      notFound: true,
    };
  }
  const providers = await getProviders();
  const session = await getSession(context);

  return {
    props: {
      trendingResults,
      followResults,
      providers,
      session,
    },
  };
}
