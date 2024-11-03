'use client'

// import Parallax from '@/components/Parallax';
import dynamic from 'next/dynamic';

const Parallax = dynamic(() => import('../components/Parallax'), { ssr: false });

function Home() {
  return (
    <>
      <Parallax title="DM Xposure" />

      <div className='about'>
        <h2>
          About Section
        </h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit laborum ipsam corrupti asperiores magnam quos cumque animi tempore vero repellendus, harum odio neque quis, non temporibus. Inventore asperiores repudiandae praesentium ut, fugit quo esse, placeat ullam quibusdam perspiciatis delectus ducimus nihil. Dolorum nam veniam aperiam sapiente corporis! Quisquam, veritatis repellendus?</p>
      </div>

    </>
  )
}

export default Home;