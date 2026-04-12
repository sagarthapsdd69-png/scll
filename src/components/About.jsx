const ABOUT_CARDS = [
  { title: 'Our Mission',          text: 'To provide quality education that empowers students to become responsible, creative, and critical thinkers who contribute positively to society.' },
  { title: 'Our Vision',           text: 'To be a leading educational institution that nurtures academic excellence, character development, and lifelong learning.' },
  { title: 'Academic Excellence',  text: 'Our rigorous curriculum and dedicated teachers ensure students achieve their full potential in all subjects.' },
  { title: 'Character Development',text: 'We focus on building strong moral values and leadership skills that prepare students for life.' },
]

const WHY_ITEMS = [
  'Professionalized teaching and learning',
  'Digitalized smart classrooms',
  'Highly qualified faculty',
  'Life-skills based projects and assignments',
  'Learner-centric training, seminars, and presentations',
  'Academic excellence and career opportunities',
  'Peaceful and disciplined learning environment',
  'Educational tours and excursions',
  'Guest lectures and special classes',
  'Scholarship schemes and student facilities',
  'ECAs and CCAs',
  'Sports, games, and cultural activities',
  'Noticeable student transformation toward excellence',
]

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <h2>About Our School</h2>
        <div className="grid">
          {ABOUT_CARDS.map(({ title, text }) => (
            <div className="card" key={title}>
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          ))}
        </div>
        <div className="why-choose-section">
          <h2>Why Choose BPSS?</h2>
          <p className="section-subtitle">Excellence in Education, Character, and Innovation</p>
          <div className="why-choose-grid">
            {WHY_ITEMS.map(item => (
              <div className="why-choose-item" key={item}>
                <div className="luxury-check-icon" />
                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
