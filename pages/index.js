import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>QA Maverick - Code Explorer</title>
        <meta name="description" content="QA Engineer turned full-stack builder—exploring, learning, shipping anonymously." />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>QA Maverick</h1>
        <p className={styles.description}>
          From testing the limits to building the future—never stop, always ship.
        </p>
        <div className={styles.grid}>
          <a href="https://proto-engine.onrender.com" className={styles.card}>
            <h2>Proto-Engine Risk Dash →</h2>
            <p>Real-time risk tracking: Flask, Chart.js, CI/CD. Live on Render.</p>
          </a>
          <a href="https://mvp-demo-ic5p.onrender.com" className={styles.card}>
            <h2>Selenium-Jira Sprint Predictor →</h2>
            <p>Predicts sprint delays with Python, Flask, Selenium, and Jira. Live on Render.</p>
          </a>
          <div className={styles.card}>
            <h2>Skill Matrix →</h2>
            <p>QA | Python | Flask | Next.js | Cypress | Selenium | Jira | GitHub Actions | Render | Vercel</p>
          </div>
          <div className={styles.card}>
            <h2>Connect →</h2>
            <p>
              <a href="mailto:willy.iglesias@gmail.com">Get Connected</a> |{' '}
              <a href="https://github.com/BCLion">GitHub</a>
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}