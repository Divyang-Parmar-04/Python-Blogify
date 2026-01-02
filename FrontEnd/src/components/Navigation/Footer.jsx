import {Link} from 'react-router-dom'


function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">

                <div className="footer-brand">
                    <h3>BlogiFy</h3>
                    <p>
                        BlogiFy is a modern blogging platform where ideas, stories, and
                        knowledge come together. Explore articles on travel, technology,
                        fitness, food, and more.
                    </p>
                </div>

                <div className="footer-links">
                    <h4>Quick Links</h4>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/createblog">Create Blog</Link></li>
                        <li><Link to="/myblogs">My Blogs</Link></li>
                    </ul>
                </div>

                {/* <!-- Categories --> */}
                <div className="footer-links">
                    <h4>Categories</h4>
                    <ul>
                        <li>Travel</li>
                        <li>Technology</li>
                        <li>Fitness</li>
                        <li>Food</li>
                    </ul>
                </div>

            </div>

            {/* <!-- Bottom --> */}
            <div className="footer-bottom">
                <p>© 2025 <span>BlogiFy</span>. All rights reserved.</p>
            </div>
        </footer>
  )
}

export default Footer