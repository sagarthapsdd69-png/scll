import tara from '/images/Mr.Tara Prasad Nepal.jpeg'

const PARAGRAPHS = [
  "At Brilliant Pupils' Secondary School (BPSS), we strongly believe that education is not only about acquiring academic knowledge but also about shaping character, values, and life skills. Our mission is to nurture young minds into confident, responsible, and capable individuals who are prepared to face the challenges of the modern world.",
  "Located in Arjundhara, Jhapa, BPSS has been established with a clear vision to provide quality, practical, and learner-centered education. Through professional teaching, digitalized smart classrooms, and skill-based learning, we ensure that our students receive an education that goes beyond textbooks.",
  "We emphasize academic excellence, discipline, creativity, and holistic personality development. Our experienced and dedicated faculty members work tirelessly to guide students, encourage critical thinking, and help them discover their true potential. Alongside academics, we actively promote life-skills, extracurricular activities, sports, seminars, presentations, and educational tours, which play a vital role in shaping a well-rounded personality.",
  "At BPSS, we prepare students not only for examinations but also for life. We aim to instill values such as integrity, respect, and responsibility while providing a supportive and serene learning environment.",
  'I warmly invite parents and students to join Brilliant Pupils\' Secondary School and become part of a learning community that believes in "Engage today, Enjoy tomorrow, Secure future."',
  "Together, let us build a brighter future.",
]

export default function Principal() {
  return (
    <section id="principal" className="section">
      <div className="container">
        <h2>Message from the Principal</h2>

        <div className="pm-card">
          {/* Left column — profile */}
          <aside className="pm-profile">
            <div className="pm-avatar">
              <img src={tara} alt="Mr. Tara Prasad Nepal" />
            </div>
            <h3 className="pm-name">Mr. Tara Prasad Nepal</h3>
            <p className="pm-title">Founder &amp; Principal</p>
            <div className="pm-divider" />
            <p className="pm-school">Brilliant Pupils' Secondary School</p>
            <p className="pm-location">Arjundhara-06, Jhapa, Nepal</p>
          </aside>

          {/* Right column — message */}
          <div className="pm-body">
            <blockquote className="pm-quote">
              "Engage today, Enjoy tomorrow, Secure future."
            </blockquote>

            <div className="pm-text">
              {PARAGRAPHS.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>

            <div className="pm-signature">
              <div className="pm-sig-line" />
              <p className="pm-sig-name">Mr. Tara Prasad Nepal</p>
              <p className="pm-sig-role">Founder / Principal, BPSS</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
