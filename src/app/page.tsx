"use client";
import Header from '../app/components/header'
import Footer from '../app/components/footer'
import Name from '../app/components/name'
import Image from 'next/image'
import Newsletter from '../app/components/newsletter'
import Comments from '../app/comments/comments'
import Link from 'next/link'
import Logo from "../app/components/logo"
import Card1 from './components/card1'
import Card2 from './components/card2'
import { motion, AnimatePresence } from 'framer-motion'



// issues:
// 
// 
// 3. image importing


export default function Home(){
  return(
    <div>
      <div className='shadow-2xl'>
      <Name />
      </div>
      <div className='shadow-2xl'>
      <Header />
      </div>
      {/* 
      <div className='justify-center flex flex-col py-10 text-center grid grid-cols-3 gap-6'>
        <div className=' flex flex-col text-left px-20 '>
        <h1 className='text-pink-950 text-xl py-10 '>Browse our categories...</h1>
        <span className='py-3'>
           <Link href={"http://localhost:3000/All-about-5G"} className="bg-slate-400 px-5 py-2 rounded-full text-slate-50 text-sm ">
            All about 5G
          </Link>
        </span>
        <span className='py-3'>
          <Link href={"http://localhost:3000/Artificial-Intelligence"} className="bg-slate-400 px-5 py-2 rounded-full text-slate-50 text-sm ">
            Artificial Intelligence
          </Link>
        </span>
        <span className='py-3'>
          <Link href={"http://localhost:3000/Blockchain-and-Crypto"} className="bg-slate-400 px-5 py-2 rounded-full text-slate-50 text-sm ">
            Blockchain and Cryptocurrency
          </Link>
        </span>
        <span className='py-3 mb-20'>
          <Link href={"http://localhost:3000/Cybersecurity"} className="bg-slate-400 px-5 py-2 rounded-full text-slate-50 text-sm ">
            Cybersecurity and privacy
          </Link>
        </span>
        </div>
        
        
      </div> 
      <Comments
        commentsUrl="http://localhost:3000"
        currentUserId = "1"/>*/}
      <div className='m-auto'>
        <Image className='w-full h-full object-cover rounded-ig'
             src={"/Unknown.png"}
             alt="Blogsphere"
             width={100}
             height={750}
             />
      </div>
      








      <div className='m-20 bg-gray-300 w-auto h-48 text-center text-slate-50'>
          Ad Space
      </div>
      <div className="grid grid-cols-6 gap-6 m-20">
        <div>
          <div className="bg-gray-300 h-screen text-slate-50 text-center inline-block align-middle w-32">
            Ad Space
          </div>
          <div className="bg-gray-300 h-screen text-slate-50 text-center inline-block align-middle w-32 mt-5">
            Ad Space
          </div>
        </div>
        <div className="col-span-3">
          <div className='bg-violet-200 h-16 w-3/4 text-gray-800 m-0 shadow-xl'>
            <div className='inline-block align-text-bottom text-3xl m-5 font-mono'>
              Recent Posts...
            </div>
          </div>
          <div className='py-12'>
          <Card1/>
          </div>
          <div className='py-12'>
          <Card2/>
          </div>
          <div className='py-12'>
          <Card1/>
          </div>
          <div className='py-12'>
          <Card2/>
          </div>
          <div className='py-12'>
          <Card1/>
          </div>
        </div>
        <div className="col-span-2">
          <AnimatePresence>
            <motion.div initial={{opacity:0, y:15}}
                        animate={{opacity:1, y:0}}
                        exit={{opacity:0, y:15}}
                        transition={{delay: 0.25}}>
              <div className='sticky top-10 left-0 right-0 bg-violet-200 w-auto h-160 shadow-xl'>
                <div className='font-mono text-xl text-gray-800 text-center py-10'>
                  Browse by category
                </div>
                <div id="default-carousel" data-carousel="static" className='text-gray-800 flex flex-col text-center font-mono'>
                  <div className='py-4'><Link href={'/All-about-5G'}>All about 5G</Link></div>
                  <div className='py-4'><Link href={'/Blockchain-and-Crypto'}>Blockchain and Crypto</Link></div>
                  <div className='py-4'><Link href={'/Artificial-Intelligence'}>Artificial Intelligence</Link></div>
                  <div className='py-4'><Link href={'/Cybersecurity'}>Cybersecurity</Link></div>
                  <div className='py-4'><Link href={'/Blockchain-and-Crypto'}>Blockchain and Crypto</Link></div>
                  <div className='py-4'><Link href={'/Artificial-Intelligence'}>Artificial Intelligence</Link></div>
                  <div className='py-4 mb-10'><Link href={'/All-about-5G'}>All about 5G</Link></div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div> 

      <Newsletter />
      <Footer />
    </div>  
  )
}