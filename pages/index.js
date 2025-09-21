import Head from 'next/head'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Norman Wang - AI Engineer</title>
        <meta name="description" content="Personal website of Norman Wang, AI Engineer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <section className="hero">
          <div className="container">
            <h1>Norman Wang</h1>
            <h2>AI Engineer</h2>
            <p>Passionate about artificial intelligence, machine learning, and building intelligent systems</p>
          </div>
        </section>

        <section className="about">
          <div className="container">
            <h3>About Me</h3>
            <p>
              I'm an AI engineer with expertise in machine learning, deep learning, and software development.
              I enjoy solving complex problems and building innovative AI solutions.
            </p>
          </div>
        </section>

        <section className="contact">
          <div className="container">
            <h3>Contact</h3>
            <p>Email: your.email@example.com</p>
            <p>GitHub: github.com/yourusername</p>
            <p>LinkedIn: linkedin.com/in/yourprofile</p>
          </div>
        </section>
      </main>
    </div>
  )
}