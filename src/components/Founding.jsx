import kailash from '/images/Mr.Kailash Pokhrel.jpeg'
import tara    from '/images/Mr.Tara Prasad Nepal.jpeg'
import ramesh  from '/images/Mr.Ramesh Kumar Nepal.jpeg'
import kishor  from '/images/Mr.Kishor Kumar Poudyal.jpeg'
import kalpana from '/images/Mrs.Kalpana Nepal.jpeg'
import prakash from '/images/Mr.Prakash Thapa.jpeg'
import mahesh  from '/images/Mr.Mahesh Bhattarai.jpeg'

const MEMBERS = [
  { name: 'Mr. Kailash Pokhrel',      img: kailash },
  { name: 'Mr. Tara Prasad Nepal',    img: tara,    imgStyle: { transform: 'scale(0.95)' } },
  { name: 'Mr. Ramesh Kumar Nepal',   img: ramesh,  imgStyle: { objectPosition: 'center 25%', transform: 'scale(1.1)' } },
  { name: 'Mr. Kishor Kumar Poudyal', img: kishor },
  { name: 'Mrs. Kalpana Nepal',       img: kalpana, imgStyle: { objectPosition: 'center 20%' } },
  { name: 'Mr. Prakash Thapa',        img: prakash, imgStyle: { objectPosition: 'center 30%' } },
  { name: 'Mr. Mahesh Bhattarai',     img: mahesh },
]

export default function Founding() {
  return (
    <section id="founding" className="section">
      <div className="container">
        <h2>Founding Members</h2>
        <div className="grid">
          {MEMBERS.map(({ name, img, imgStyle }) => (
            <div className="card" key={name}>
              <div className="member-photo">
                <img src={img} alt={name} style={imgStyle} />
              </div>
              <h4>{name}</h4>
              <p><strong>Founding Member</strong></p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
