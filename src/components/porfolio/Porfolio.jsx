import React from 'react';

import './porfolio.scss';
import temp  from '../../assets/guardians.jpg'


function Porfolio() {
  return (
    <section id='porfolio'>
      <div className="container sm:text-center md:text-left ">
        <div  className='porfolio__des sm:text-center'>
        <h5>My Recent Work</h5>
        <h2>My Porfolio</h2>
        </div>
        <div className="porfolio__container grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <article className='porfolio__item'>
            <div className="porfolio__item-img">
              <img src={temp} alt="img" />
            </div>
            <h3>Tis is porfolio item title</h3>
            <p className='mt-3 mb-3'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint illo veniam praesentium blanditiis soluta! Ipsa consectetur dolore dolor explicabo corporis!</p>
            <a href="" classNam target='_blank' className='btn  mr-5'>Git Hub</a>
            <a href="" className='btn btn-primary'>Live Demo</a>
          </article>
          <article className='porfolio__item'>
            <div className="porfolio__item-img">
              <img src={temp} alt="img" />
            </div>
            <h3>Tis is porfolio item title</h3>
            <p className='mt-3 mb-3'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint illo veniam praesentium blanditiis soluta! Ipsa consectetur dolore dolor explicabo corporis!</p>
            <a href="" className='btn mr-5' target='_blank'>Git Hub</a>
            <a href="" className='btn btn-primary'>Live Demo</a>
          </article><article className='porfolio__item'>
            <div className="porfolio__item-img">
              <img src={temp} alt="img" />
            </div>
            <h3>Tis is porfolio item title</h3>
            <p className='mt-3 mb-3'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint illo veniam praesentium blanditiis soluta! Ipsa consectetur dolore dolor explicabo corporis!</p>
            <a href="" className='btn mr-5' target='_blank'>Git Hub</a>
            <a href="" className='btn btn-primary'>Live Demo</a>
          </article><article className='porfolio__item'>
            <div className="porfolio__item-img">
              <img src={temp} alt="img" />
            </div>
            <h3>Tis is porfolio item title</h3>
            <p className='mt-3 mb-3'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint illo veniam praesentium blanditiis soluta! Ipsa consectetur dolore dolor explicabo corporis!</p>
            <a href="" className='btn mr-5' target='_blank'>Git Hub</a>
            <a href="" className='btn btn-primary'>Live Demo</a>
          </article>
        </div>
      </div>
    </section>
  )
}

export default Porfolio