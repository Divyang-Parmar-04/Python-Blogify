import React from 'react'
import { motion } from "framer-motion"

function SkeletonHeroCard() {
    return (
        <>
            <motion.div
                initial={{ opacity: 0, x: -200 }}
                whileInView={{ opacity: 1, x: 0, transition: { duration: 0.6 } }}>
                <div className="left-card skeleton">
                    <img src="#" alt="" className='skeleton-img' />
                    <div className="skeleton-content">
                        <button className='skeleton-btn'></button>
                        <h2  className='skeleton-title'></h2>
                        <p className='skeleton-text'></p>
                    </div>
                </div>
            </motion.div >
            <div className="right-card skeleton">
                <motion.div
                    initial={{
                        opacity: 0,
                        y: -200
                    }}
                    whileInView={{
                        opacity: 1,
                        y: 0,
                        transition: {
                            duration: 0.5
                        }
                    }}
                >
                    <div className="top-card skeleton">
                        <img src="#" alt=""  className='skeleton-img'/>
                        <div className="skeleton-content">
                            <button className='skeleton-btn'></button>
                            <h2 className='skeleton-title'></h2>
                            <p className='skeleton-text'></p>
                        </div>
                    </div>
                </motion.div>
                {/* buttom animation */}
                <motion.div
                    initial={{
                        opacity: 0,
                    }}
                    whileInView={{
                        opacity: 1,
                        scale: 1,
                        transition: {
                            duration: 0.5
                        }
                    }}
                >
                    <div className="bottom-card skeleton">
                        <img src="#" alt="" className='skeleton-img' />
                        <div className="skeleton-content">
                            <button className='skeleton-btn' ></button>
                            <h2 className='skeleton-title'></h2>
                            <p className='skeleton-text'></p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </>
    )
}

export default SkeletonHeroCard