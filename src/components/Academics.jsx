const PROGRAMS = [
  { badge: 'Grade XI & XII', title: 'Computer Science',  text: 'Advanced computing skills and programming fundamentals for the digital age.' },
  { badge: 'Grade XI & XII', title: 'Hotel Management',  text: 'Comprehensive hospitality training with practical kitchen experience.' },
  { badge: 'Grade XI & XII', title: 'Business Studies',  text: 'Essential business knowledge and entrepreneurial skills development.' },
  { badge: 'PG - Grade X',   title: 'General Education', text: 'Complete foundational education from PG to Grade 10 with holistic development.' },
]

const FACILITIES = [
  'Advanced computer lab', 'Well-stocked library', 'Theatre and presentation hall',
  'Hotel Management practical kitchen', 'Project presentation rooms', 'Brilliant kinder world',
  'Hygienic canteen', 'Transportation service', 'Pure drinking water supply',
  'Generator and power back up', 'Green saplings plantation', 'Achievement and trophy display',
]

const LEARNING = [
  'Experienced and qualified teachers', 'Practical and skill-based education',
  'Continuous assessment system', 'Holistic personality development',
]

const CALENDAR_ITEMS = [
  { title: 'Admissions & Orientation', text: 'New academic sessions begin with student registration and orientation for families.' },
  { title: 'Mid-Term Assessments', text: 'Regular assessments and progress reviews are conducted to monitor academic growth.' },
  { title: 'Annual Examinations', text: 'Final exams and result declarations are scheduled at the end of each term.' },
  { title: 'Holidays & Events', text: 'Festivals, co-curricular activities, and school breaks are planned throughout the year.' },
]

export default function Academics() {
  return (
    <section id="classes" className="section">
      <div className="container">
        <h2>Academic Programs</h2>
        <p className="section-subtitle">Complete Education from PG to Grade 10 &amp; +2 Streams</p>
        <div className="grid">
          {PROGRAMS.map(({ badge, title, text }) => (
            <div className="card academic-card" key={title}>
              <div className="program-badge">{badge}</div>
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          ))}
        </div>

        <div className="facilities-section">
          <h2>School Facilities</h2>
          <p className="section-subtitle">World-Class Infrastructure for Excellence</p>
          <div className="facilities-grid">
            {FACILITIES.map(item => (
              <div className="facility-item" key={item}>
                <div className="luxury-facility-icon" />
                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>

        <div id="academic-calendar" className="facilities-section">
          <h2>Academic Calendar</h2>
          <p className="section-subtitle">Key milestones and important academic dates for the year</p>
          <div className="grid">
            {CALENDAR_ITEMS.map(({ title, text }) => (
              <div className="card academic-card" key={title}>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="learning-section">
          <h2>Faculty &amp; Learning Approach</h2>
          <p className="section-subtitle">Expert Guidance for Comprehensive Development</p>
          <div className="learning-grid">
            {LEARNING.map(item => (
              <div className="learning-item" key={item}>
                <div className="luxury-star-icon" />
                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
