import { useState, useEffect } from 'react'
import g1  from '/images/gallery1.jpg'
import g2  from '/images/gallery2.jpg'
import g4  from '/images/gallery4.jpg'
import gs  from '/images/gallery-school.jpg'
import c1  from '/images/campus1.jpg'
import c2  from '/images/campus2.jpg'
import c3  from '/images/campus3.jpg'
import c4  from '/images/campus4.jpg'
import m1  from '/images/more1.jpg'
import m2  from '/images/more2.jpg'
import m3  from '/images/more3.jpg'
import m4  from '/images/more4.jpg'
import m5  from '/images/more5.jpg'
import m6  from '/images/more6.jpg'
import m7  from '/images/more7.jpg'
import m8  from '/images/more8.jpg'
import m9  from '/images/more9.jpg'
import m10 from '/images/more10.jpg'
import m11 from '/images/more11.jpg'
import m12 from '/images/more12.jpg'

const PREVIEW = [
  { src: g1,  alt: 'School Photos',      modal: 'school', pos: 'center 30%' },
  { src: g2,  alt: 'Events',             pos: 'center 25%' },
  { src: g4,  alt: 'Academic Excellence',pos: 'center 35%' },
  { src: gs,  alt: 'School Building',    pos: 'center' },
]

const CAMPUS = [
  { src: c1, alt: 'Campus 1' },
  { src: c2, alt: 'Campus 2' },
  { src: c3, alt: 'Campus 3' },
  { src: c4, alt: 'Campus 4' },
]

const MORE = [
  { src: m1,  alt: 'Photo 1' },
  { src: m2,  alt: 'Photo 2' },
  { src: m3,  alt: 'Photo 3' },
  { src: m4,  alt: 'Photo 4' },
  { src: m5,  alt: 'Photo 5' },
  { src: m6,  alt: 'Photo 6', pos: 'center 30%' },
  { src: m7,  alt: 'Photo 7' },
  { src: m8,  alt: 'Photo 8' },
  { src: m9,  alt: 'Photo 9' },
  { src: m10, alt: 'Photo 10' },
  { src: m11, alt: 'Photo 11' },
  { src: m12, alt: 'Photo 12' },
]

function Modal({ title, images, onClose }) {
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  return (
    <div className="modal-overlay" onClick={e => { if (e.target === e.currentTarget) onClose() }}>
      <div className="modal-content">
        <button className="modal-close" onClick={onClose} aria-label="Close modal">&times;</button>
        <h2 className="modal-title">{title}</h2>
        <div className="modal-grid">
          {images.map(({ src, alt, pos }) => (
            <div className="modal-item" key={alt}>
              <img src={src} alt={alt} style={pos ? { objectPosition: pos } : undefined} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function Gallery() {
  const [modal, setModal] = useState(null)

  return (
    <section id="gallery" className="section">
      <div className="container">
        <h2>School Gallery</h2>
        <div className="grid">
          {PREVIEW.map(({ src, alt, modal: m, pos }) => (
            <div
              className={`card gallery-card${m ? ' gallery-card--clickable' : ''}`}
              key={alt}
              onClick={m ? () => setModal(m) : undefined}
            >
              <img src={src} alt={alt} style={{ objectPosition: pos }} />
            </div>
          ))}
        </div>
        <div className="gallery-cta">
          <button className="btn-primary" onClick={() => setModal('all')}>See More</button>
        </div>
      </div>

      {modal === 'school' && (
        <Modal title="School Photos" images={CAMPUS} onClose={() => setModal(null)} />
      )}
      {modal === 'all' && (
        <Modal title="All Gallery Photos" images={MORE} onClose={() => setModal(null)} />
      )}
    </section>
  )
}
