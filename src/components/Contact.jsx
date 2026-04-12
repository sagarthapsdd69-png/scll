export default function Contact() {
  return (
    <section id="contact" className="section">
      <div className="container">
        <h2>Contact Us</h2>
        <div className="contact-grid">
          <div className="contact-card">
            <h3>Address</h3>
            <p>Arjundhara-06, Chhata Chowk<br />Jhapa, Nepal</p>
          </div>
          <div className="contact-card">
            <h3>Phone</h3>
            <p>
              <a href="tel:023-591636">023-591636</a> / <a href="tel:+9779852690711">9852690711</a><br />
              <a href="tel:+9779814905409">9814905409</a> / <a href="tel:+9779806051135">9806051135</a><br />
              <a href="tel:+9779806027120">9806027120</a>
            </p>
          </div>
          <div className="contact-card">
            <h3>Email</h3>
            <p>bpss2057@gmail.com</p>
          </div>
          <div className="contact-card">
            <h3>Office Hours</h3>
            <p>Sunday – Friday<br />9:00 AM – 5:00 PM</p>
          </div>
        </div>
        <div className="map-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3565.5766476389867!2d87.99654397543084!3d26.662034076797536!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e5bbcfe65682df%3A0x5bcd2dd2c6b9d23c!2sBrilliant%20Pupils'%20Secondary%20School!5e0!3m2!1sen!2snp!4v1769655034424!5m2!1sen!2snp"
            width="100%"
            height="450"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Brilliant Pupils' Secondary School Location"
          />
        </div>
      </div>
    </section>
  )
}
