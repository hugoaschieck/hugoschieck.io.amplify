import React from 'react';
import InvestBlog from './InvestBlogs';
import './Blogs.css';

const Blogs = props => {
    return (
        <div className="blogs">
            
            <h1>Web Log</h1>

            <InvestBlog/>

            <p className="blog-date">January 29, 2019</p>
            <h3>Tech Update</h3>
            <p> 
                I should add... I found <a href="https://youtu.be/l6nmysZKHFU">this tutorial</a> especially useful to get my project started.  Starting with a tutorial well beyond your typical "Hello World" example, is critical.
                Start by building something that's actually functional and setting the foundation for the rest of your site.  Anyway, for me this was a perfect place to start.  Moving to more complex concepts, I've been enjoying
                the <a href="https://www.youtube.com/channel/UCbGZKLIHpox2l0whz6_RYyg"> Techsiths</a> content.
            </p>
            <p>
                -Hugo
            </p>
            

            <p className="blog-date">January 21, 2019</p>

            <p> 
                I learn by doing, and so, here it is. I'm doing it. Doing what?  I wanted to learn ReactJS, and so I decided to build my own BLOG site to simply write about some of my personal interests out side of my work. 
                At the same time, I'll be learning React, which is the goal. Oh, and it's all going to be hosted on AWS using server-less technology, also something I want to learn more about.  This is not going to be a "how-to" 
                type of BLOG.  This will be a personal log.  I will write about my experiences in various interests from investing to permaculture practices.  I don't want to tell people how to do things, but just provide some 
                insight into my own experience and what I've learned along the way.
            </p>
            <p>
                I will try to publish something every week. No promises. 
            </p>
            <p>
                -Hugo
            </p>
            

        </div>
    )
}

export default Blogs;
