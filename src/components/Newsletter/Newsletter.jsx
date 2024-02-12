import './Newsletter.css'

function Newsletter() {
    return (
        <section className='newsletter'>
            <div className="container">
                <div className="newsletter-content">
                    <h4>NEWSLETTER</h4>
                    <form>
                        <input placeholder='your@email.com' type="email" />
                        <button type='button'>Subscribe</button>
                    </form>
                </div>
            </div>
        </section>
    )
}
export default Newsletter