import Head from 'next/head'
import styles from '../../styles/Home.module.css'

export default function Home() {

  const today = () => {
    const thisDay = new Date()
    return thisDay.getFullYear()+'-'+(thisDay.getMonth()+1)+'-'+thisDay.getDate();
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Next TS TW</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          React/next
        </h1>
        <p className="p-4 medium--font">This Next boiler plate use:</p>
        <p className="small--font">React in Next framework with Typescript, TailwindCss and Sass </p>
      </main>

      <footer className={styles.footer}>
        {today()}
      </footer>
    </div>
  )
}
