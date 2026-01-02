
import { useNavigate } from 'react-router-dom'
import { motion, } from 'framer-motion'
import SkeletonCard from './SkeletonCard'

function Card(props) {

  const blogs = props.blogs
  const navigate = useNavigate()

  return (

    <div className="card-container">
      {blogs.length==0 && (
        <div className='note-msg'>
          <h4> 🚨 Some Time it Take more then 1 minute to Load the content , so Be Patient 😊</h4>
        </div>
      )}
      {blogs.length > 0 ?
        blogs.map((blog) => (
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.8
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
              transition: {
                duration: 0.6
              }
            }}
            key={blog._id}
          >
            <div className='card' onClick={() => navigate(`/blog/${blog._id}`)}>
              <div className='card-img-box'>
                <img src={blog.imgUrl} alt="" />

              </div>
              <div className="card-info">
                <h3 id='title'>{blog.title}</h3>
                <p>{blog.summary}</p>
                <button onClick={() => navigate(`/blog/${blog._id}`)}>Read</button>
              </div>
            </div>
          </motion.div>
        ))
        : (
          Array(4).fill(0).map((_,i)=>(<SkeletonCard  key={i} />))
        )}
    </div>
  )
}

export default Card