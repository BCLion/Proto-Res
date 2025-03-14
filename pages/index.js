import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Image from 'next/image';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>QA Maverick - Code Explorer</title>
        <meta name="description" content="QA Engineer turned full-stack builder—exploring, learning, shipping anonymously." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <header className={styles.header}>
        <div className={styles.headerImage}>
          <Image
            src="/retrowave-header.jpg"
            alt="Retrowave cityscape"
            layout="fill"
            objectFit="cover"
            priority
          />
        </div>
        <div className={styles.headerOverlay}>
          <h1 className={styles.title}>QA Maverick</h1>
          <p className={styles.description}>
            From testing the limits to building the future—never stop, always ship.
          </p>
        </div>
      </header>

      <main className={styles.main}>
        {/* Add blurb section here */}
        <section className={styles.intro}>
          <p>
            I’m a QA Engineer turned builder—using Python, Flask, and Selenium to automate and innovate. These projects showcase my journey from testing to creating impactful tools.
          </p>
        </section>

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
              <a href="mailto:willy.iglesias+github@gmail.com">Get Connected</a> |{' '}
              <a href="https://github.com/BCLion">GitHub</a>
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}