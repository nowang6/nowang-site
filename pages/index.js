import Head from 'next/head'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Norman Wang - Senior AI Engineer</title>
        <meta name="description" content="Personal website of Norman Wang, Senior AI Engineer with 6+ years in NLP & LLM development" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <section className="hero">
          <div className="container">
            <h1>Norman Wang</h1>
            <h2>Senior AI Engineer</h2>
            <p>6+ years in NLP & LLM development | 10+ years software development experience</p>
            <div className="contact-info">
              <p>📧 <a href="mailto:norman6.wang@gmail.com">norman6.wang@gmail.com</a></p>
              <p>🌐 <a href="https://github.com/nowang6" target="_blank" rel="noopener noreferrer">GitHub</a> | 🚀 <a href="https://nowang-site.vercel.app/" target="_blank" rel="noopener noreferrer">Personal Website</a></p>
            </div>
          </div>
        </section>

        <section className="profile">
          <div className="container">
            <h3>Profile</h3>
            <div className="profile-content">
              <p><strong>6+ years in NLP & LLM development</strong> with strong expertise in Python, TypeScript, and Java. Led multiple AI deployments including:</p>
              <ul>
                <li><strong>Huawei Cloud DSC NLP Algorithms</strong> – Replaced StanfordCoreNLP with proprietary NLP, boosting processing efficiency.</li>
                <li><strong>Huawei IT Knowledge Q&A System</strong> – Cut IT ticket response time by &gt;40% for 20,000+ employees.</li>
                <li><strong>China Merchants Bank AI Coding Assistant</strong> – Developed IDE-integrated AI assistant for 8,000+ developers, achieving 28% adoption and 63% retention.</li>
                <li><strong>TD Tech Xiaoqiao Intelligent Agent</strong> – Enhanced AI on police smart terminals; integrated facial recognition, successfully assisting fugitive capture; awarded Second-Class Merit.</li>
              </ul>
              <p><strong>10+ years software development experience</strong> in Python, TypeScript/NextJS, DevOps, and Kubernetes.</p>
              <p><strong>Strong English communication skills</strong> (CET-6), experienced in international collaborations.</p>
            </div>
          </div>
        </section>

        <section className="skills">
          <div className="container">
            <h3>Technical Skills</h3>
            <div className="skills-grid">
              <div className="skill-category">
                <h4>Frameworks & Libraries</h4>
                <p>PyTorch, HuggingFace, LangChain, LlamaIndex, NextJS</p>
              </div>
              <div className="skill-category">
                <h4>LLM & AI Tools</h4>
                <p>Qwen LLM/VLM, DeepSeek, AST, TTS, LLaMA Factory, Pydantic AI, Vercel AI SDK, Model Context Protocol, Agent2Agent, AG-UI</p>
              </div>
              <div className="skill-category">
                <h4>Deep Learning Models</h4>
                <p>BERT, YOLO</p>
              </div>
              <div className="skill-category">
                <h4>Hardware Platforms</h4>
                <p>NVIDIA Ampere/Hopper GPUs, Huawei Ascend 310P/910B NPUs, Huawei Kirin NPUs</p>
              </div>
              <div className="skill-category">
                <h4>Cloud & DevOps</h4>
                <p>AWS, Kubernetes, Docker, CI/CD</p>
              </div>
            </div>
          </div>
        </section>

        <section className="experience">
          <div className="container">
            <h3>Work Experience</h3>
            <div className="experience-list">
              <div className="experience-item">
                <h4>TD Tech Ltd. — Senior AI Engineer</h4>
                <p className="period">Apr 2025 – Present | Chengdu</p>
                <p>Enhanced AI capabilities of police smart terminals, including on-device intent recognition and NPU deployment.</p>
              </div>
              <div className="experience-item">
                <h4>NANTIAN Electronics — Senior AI Engineer</h4>
                <p className="period">Aug 2024 – Apr 2025 | Chengdu</p>
                <p>Built IDE-integrated AI coding assistant for 8,000+ developers, improving code completion, Q&A, bug fixing, and NL2SQL efficiency.</p>
              </div>
              <div className="experience-item">
                <h4>Huawei Technologies — Principal Engineer</h4>
                <p className="period">Dec 2018 – Apr 2024 | Beijing</p>
                <p>Developed IT knowledge Q&A and NER systems, replacing foreign NLP solutions with domestic alternatives.</p>
              </div>
              <div className="experience-item">
                <h4>JD Cloud — Software Engineer</h4>
                <p className="period">Jun 2018 – Dec 2018 | Beijing</p>
                <p>Contributed to JD Cloud's microservice framework development.</p>
              </div>
              <div className="experience-item">
                <h4>Oracle R&D Center — Software Engineer</h4>
                <p className="period">Mar 2013 – Jun 2018 | Beijing</p>
                <p>Developed IAM Suite lifecycle tools and federated login modules supporting OIDC/SAML.</p>
              </div>
              <div className="experience-item">
                <h4>Hewlett-Packard China — Software Engineer</h4>
                <p className="period">Jul 2008 – Mar 2013 | Beijing</p>
                <p>Delivered IT systems for clients including Volkswagen, Alcatel-Lucent, and Ericsson.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="education">
          <div className="container">
            <h3>Education</h3>
            <div className="education-item">
              <h4>Southwest University</h4>
              <p>Bachelor of Software Engineering | 2004 – 2008</p>
            </div>
          </div>
        </section>

        <section className="certifications">
          <div className="container">
            <h3>Certifications & Honors</h3>
            <div className="certifications-list">
              <div className="certification-item">
                <h4><a href="https://www.hiascend.com/edu/certification/query" target="_blank" rel="noopener noreferrer">Ascend C Operator Development Certification (Intermediate)</a></h4>
                <p>ADC1120250004729</p>
              </div>
              <div className="certification-item">
                <h4><a href="https://www.credly.com/badges/79e54634-5780-4bcb-bab7-7f5499009a9b/linked_in_profile" target="_blank" rel="noopener noreferrer">NVIDIA-Certified Associate: Generative AI LLMs</a></h4>
              </div>
              <div className="certification-item">
                <h4><a href="https://www.credly.com/badges/2d8b1e4e-e552-47b4-a913-daf7b9e3eed2?source=linked_in_profile" target="_blank" rel="noopener noreferrer">AWS Certified Security – Specialty</a></h4>
              </div>
              <div className="certification-item">
                <h4><a href="https://www.credly.com/badges/e53ec849-1dbb-4cef-b31b-0f2c6367c489/linked_in_profile" target="_blank" rel="noopener noreferrer">Certified Kubernetes Administrator</a></h4>
              </div>
            </div>
          </div>
        </section>

        <section className="interests">
          <div className="container">
            <h3>Interests</h3>
            <p>Programming, Cycling, Badminton, Swimming, Open Source Contributions</p>
          </div>
        </section>
      </main>
    </div>
  )
}