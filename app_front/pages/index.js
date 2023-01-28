import Head from 'next/head';
import Nav from '../components/Nav'
import Search from '../components/Search'
import styles from '../styles/Home.module.css';

export default function Home() {

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <script async
          src="https://maps.googleapis.com/maps/api/js?key=AIzaSyA5a1yuBzFkict5S_G1W4IXrmGyPlONkpc">
        </script>
      </Head>

      <Nav />

      <main>
        <Search />
      </main>

      <style jsx>{`
        main {
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        footer img {
          margin-left: 0.5rem;
        }
        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
          text-decoration: none;
          color: inherit;
        }
        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }
        body{
          background: url('https://source.unsplash.com/G8rRItjrwkA') no-repeat center center fixed;
          -webkit-background-size: cover;
          -moz-background-size: cover;
          background-size: cover;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
