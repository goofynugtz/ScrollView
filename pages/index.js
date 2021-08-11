export default function Home() {

  return (
    <div className='container'>
      <nav>
        <ul>
          <li className="home active"><a href="#home"></a></li>
          <li className="description"><a href="#description"></a></li>
          <li className="about"><a href="#about"></a></li>
          <li className="contact"><a href="#contact"></a></li>
          <li className="footer"><a href="#footer"></a></li>
        </ul>
      </nav>

      <section id="home">
        <span>Home</span>
      </section>
      
      <section id="description">
        <span>Description</span>
      </section>

      <section id="about">
        <span>About</span>
      </section>

      <section id="contact">
        <span>Contact</span>
      </section>

      <section id="footer">
        <span>Footer</span>
      </section>
    </div>
  )
}

