import { useEffect, useMemo, useState } from 'react'
import { academicCalendarData, academicYears, categoryColors } from '../data/academicEvents.js'

const CATEGORY_OPTIONS = [
  'All',
  'Exams',
  'Holidays',
  'Sports',
  'Cultural Programs',
  'Admissions',
  'School Events',
  'Parent Meetings',
  'Results',
  'Competitions'
]

function formatDateLabel(value) {
  const date = new Date(value)
  return date.toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  })
}

function formatMonthLabel(date) {
  return date.toLocaleDateString('en-GB', { month: 'long', year: 'numeric' })
}

function getMonthDays(year, month) {
  const firstDay = new Date(year, month, 1)
  const lastDay = new Date(year, month + 1, 0)
  const startDay = firstDay.getDay()
  const totalDays = lastDay.getDate()
  const leadingDays = (startDay + 6) % 7
  const totalCells = Math.ceil((leadingDays + totalDays) / 7) * 7
  const cells = []

  for (let i = 0; i < totalCells; i += 1) {
    const dayIndex = i - leadingDays + 1
    const date = new Date(year, month, dayIndex)
    cells.push({
      key: `${year}-${month + 1}-${dayIndex}`,
      date,
      inMonth: date.getMonth() === month,
      isToday: date.toDateString() === new Date().toDateString()
    })
  }

  return cells
}

export default function AcademicCalendar() {
  const [selectedYear, setSelectedYear] = useState(academicYears[0])
  const [currentMonth, setCurrentMonth] = useState(new Date(2026, 7, 1))
  const [search, setSearch] = useState('')
  const [activeCategory, setActiveCategory] = useState('All')
  const [selectedEvent, setSelectedEvent] = useState(null)

  useEffect(() => {
    document.title = 'Academic Calendar | Brilliant Education Foundation'
    const metaDescription = document.querySelector('meta[name="description"]')
    if (metaDescription) {
      metaDescription.setAttribute('content', 'View the Brilliant Education Foundation academic calendar, including examinations, holidays, sports, cultural programs, admissions, and important school events.')
    }
  }, [])

  const events = academicCalendarData[selectedYear] || []

  const filteredEvents = useMemo(() => {
    const query = search.trim().toLowerCase()
    return events.filter((event) => {
      const matchesCategory = activeCategory === 'All' || event.category === activeCategory
      const matchesSearch = !query || [event.title, event.description, event.category]
        .join(' ')
        .toLowerCase()
        .includes(query)
      return matchesCategory && matchesSearch
    })
  }, [activeCategory, events, search])

  const eventsByDate = useMemo(() => {
    return filteredEvents.reduce((acc, event) => {
      const key = event.date
      if (!acc[key]) acc[key] = []
      acc[key].push(event)
      return acc
    }, {})
  }, [filteredEvents])

  const monthDays = useMemo(() => getMonthDays(currentMonth.getFullYear(), currentMonth.getMonth()), [currentMonth])

  const upcomingEvents = useMemo(() => {
    const today = new Date()
    today.setHours(0, 0, 0, 0)
    return [...events]
      .filter((event) => new Date(event.date) >= today)
      .sort((a, b) => new Date(a.date) - new Date(b.date))
      .slice(0, 6)
  }, [events])

  const handlePrevMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1))
  }

  const handleNextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1))
  }

  const handleToday = () => {
    const today = new Date()
    setCurrentMonth(new Date(today.getFullYear(), today.getMonth(), 1))
  }

  return (
    <section className="section" id="academic-calendar-page">
      <div className="container">
        <div className="academic-calendar-hero">
          <div>
            <p className="section-eyebrow">Academic Calendar</p>
            <h1>Academic Calendar</h1>
            <p className="section-subtitle">Stay informed with academic dates, examinations, holidays, sports, cultural programs, admissions, and school events for the current academic session.</p>
            <div className="hero-actions">
              <a className="cta-button primary" href="/documents/academic-calendar-2083-2084.pdf" download>
                Download Academic Calendar PDF
              </a>
            </div>
          </div>
          <div className="academic-card-highlight">
            <h3>Academic Session</h3>
            <p className="highlight-value">2083/2084</p>
            <p>Use the interactive calendar below to explore upcoming academic events and important milestones.</p>
          </div>
        </div>

        <div className="academic-controls">
          <div className="academic-year-selector">
            <label htmlFor="academic-year">Academic Year</label>
            <select id="academic-year" value={selectedYear} onChange={(event) => setSelectedYear(event.target.value)}>
              {academicYears.map((year) => (
                <option key={year} value={year}>{year}</option>
              ))}
            </select>
          </div>

          <div className="search-box">
            <span aria-hidden="true">🔍</span>
            <input
              type="text"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Search academic events..."
              aria-label="Search academic events"
            />
          </div>
        </div>

        <div className="filter-row" role="tablist" aria-label="Event categories">
          {CATEGORY_OPTIONS.map((category) => (
            <button
              key={category}
              type="button"
              className={`filter-chip ${activeCategory === category ? 'active' : ''}`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="calendar-layout">
          <div className="calendar-card">
            <div className="calendar-header">
              <div className="calendar-nav">
                <button type="button" className="calendar-nav-button" onClick={handlePrevMonth} aria-label="Previous month">← Previous</button>
                <div className="calendar-month-title">{formatMonthLabel(currentMonth)}</div>
                <button type="button" className="calendar-nav-button" onClick={handleNextMonth} aria-label="Next month">Next →</button>
              </div>
              <button type="button" className="today-button" onClick={handleToday}>Today</button>
            </div>

            <div className="calendar-weekdays" aria-hidden="true">
              {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day) => (
                <div key={day} className="weekday">{day}</div>
              ))}
            </div>

            <div className="calendar-grid">
              {monthDays.map((cell) => {
                const dayEvents = eventsByDate[cell.date.toISOString().split('T')[0]] || []
                return (
                  <div key={cell.key} className={`calendar-cell ${cell.inMonth ? '' : 'muted'} ${cell.isToday ? 'today' : ''}`}>
                    <div className="calendar-day-number">{cell.date.getDate()}</div>
                    <div className="calendar-day-events">
                      {dayEvents.slice(0, 2).map((event) => (
                        <button
                          key={event.id}
                          type="button"
                          className={`event-dot ${categoryColors[event.category]}`}
                          onClick={() => setSelectedEvent(event)}
                          aria-label={`View details for ${event.title}`}
                        />
                      ))}
                      {dayEvents.length > 2 ? <span className="event-more">+{dayEvents.length - 2}</span> : null}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          <div className="calendar-sidebar">
            <div className="legend-card">
              <h3>Calendar Legend</h3>
              <ul className="legend-list">
                {CATEGORY_OPTIONS.filter((category) => category !== 'All').map((category) => (
                  <li key={category}>
                    <span className={`legend-swatch ${categoryColors[category]}`} />
                    {category}
                  </li>
                ))}
              </ul>
            </div>

            <div className="upcoming-card">
              <h3>Upcoming Events</h3>
              {upcomingEvents.length ? upcomingEvents.map((event) => (
                <div key={event.id} className="upcoming-item">
                  <div>
                    <strong>{event.title}</strong>
                    <p>{formatDateLabel(event.date)}</p>
                  </div>
                  <button type="button" className="text-button" onClick={() => setSelectedEvent(event)}>View Details</button>
                </div>
              )) : <p>No upcoming events in this academic year.</p>}
            </div>
          </div>
        </div>

        <div className="event-list-card">
          <div className="event-list-header">
            <h2>Upcoming Events</h2>
            <p>Sorted automatically by date.</p>
          </div>
          <div className="event-list-grid">
            {upcomingEvents.map((event) => (
              <article key={event.id} className="event-card">
                <div className="event-card-top">
                  <span className={`event-badge ${categoryColors[event.category]}`}>{event.category}</span>
                  <span className="event-date">{formatDateLabel(event.date)}</span>
                </div>
                <h3>{event.title}</h3>
                <p>{event.description}</p>
                <div className="event-meta">
                  {event.time ? <span>Time: {event.time}</span> : null}
                  {event.audience ? <span>Audience: {event.audience}</span> : null}
                </div>
                <button type="button" className="cta-button secondary" onClick={() => setSelectedEvent(event)}>View Details</button>
              </article>
            ))}
          </div>
        </div>
      </div>

      {selectedEvent ? (
        <div className="modal-backdrop" role="dialog" aria-modal="true" aria-labelledby="event-details-title" onClick={() => setSelectedEvent(null)}>
          <div className="modal-card" onClick={(event) => event.stopPropagation()}>
            <button type="button" className="modal-close" onClick={() => setSelectedEvent(null)} aria-label="Close event details">×</button>
            <p className="section-eyebrow">Event Details</p>
            <h3 id="event-details-title">{selectedEvent.title}</h3>
            <p><strong>Date:</strong> {formatDateLabel(selectedEvent.date)}</p>
            <p><strong>Time:</strong> {selectedEvent.time || 'Not specified'}</p>
            <p><strong>Category:</strong> {selectedEvent.category}</p>
            <p><strong>Description:</strong> {selectedEvent.description}</p>
            <p><strong>Audience:</strong> {selectedEvent.audience || 'All students'}</p>
            {selectedEvent.venue ? <p><strong>Venue:</strong> {selectedEvent.venue}</p> : null}
            {selectedEvent.instructions ? <p><strong>Instructions:</strong> {selectedEvent.instructions}</p> : null}
          </div>
        </div>
      ) : null}
    </section>
  )
}
