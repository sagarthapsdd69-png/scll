import { Link } from 'react-router-dom'

export default function HomepageCalendarCard() {
  return (
    <section className="section">
      <div className="container">
        <div className="homepage-calendar-card">
          <div>
            <p className="section-eyebrow">Academic Calendar</p>
            <h2>Stay updated with key school dates and events</h2>
            <p>Browse the latest academic milestones, examinations, holidays, sports events, admissions updates, and more.</p>
          </div>
          <div className="hero-actions">
            <Link className="cta-button primary" to="/academic-calendar">View Academic Calendar</Link>
            <a className="cta-button secondary" href="/documents/academic-calendar-2083-2084.pdf" download>
              Download PDF
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
