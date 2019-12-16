import React from 'react'
import Rainbow from '../hoc/Rainbow'

const About = () => {
    return (
        <div className="container">
            <h4 className="center">About</h4>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem cumque porro atque totam blanditiis earum quibusdam, aperiam quis quidem, laboriosam modi dolore, iste ipsam illo consequatur quae quo molestias? Placeat!</p>
        </div>
    )
}

export default Rainbow(About)