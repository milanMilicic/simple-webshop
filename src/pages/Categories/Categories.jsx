import { Link } from "react-router-dom"
import { FaChevronLeft } from 'react-icons/fa6'
import './Categories.css'
import { Outlet } from "react-router";

function Categories() {
    return (
        <>
            <section className="categories">
                <div className="container">
                    <div className="categories-content">
                        <div className="categories-title">
                            <Link to="/">
                                <FaChevronLeft /> Home
                            </Link>
                            <h3>ALL</h3>
                        </div>
                        <div className="categories-links">
                            <Link to='all'>All</Link>
                            <Link to='furniture'>Furniture</Link>
                            <Link to='electronics'>Electronics</Link>
                            <Link to='lamps'>Lamps</Link>
                            <Link to='kitchen'>Kitchen</Link>
                            <Link to='chairs'>Chairs</Link>
                            <Link to='skin-care'>Skin Care</Link>
                        </div>
                    </div>
                </div>
            </section>
            <Outlet />
        </>
    )
}
export default Categories