import Header from '../components/header'
import Footer from '../components/footer'
import Name from '../components/name'
import Image from 'next/image'
import Newsletter from '../components/newsletter'
import Comments from '../comments/comments'
import Link from 'next/link'
import FiveCard1 from "../components/5Gc1"
import FiveCard2 from "../components/5Gc2"




// issues:
// 
// 
// 3. image importing


export default function Home(){
  return(
    <div>
      <Name />
      <Header />
      {/* <div className='m-20 bg-gray-300 w-auto h-48 text-center text-slate-50'>
          Ad Space
      </div> */}
      <div className="grid grid-cols-6 gap-6 m-20">
        
        <div className="col-span-4">
          <div className='bg-violet-200 h-16 w-3/4 text-gray-800 m-0 shadow-xl'>
            <div className='inline-block align-text-bottom text-xl m-5 font-mono'>
              All About 5G
            </div>
          </div>
          <div className='py-12'>
          <FiveCard1/>
          </div>
          <div className='py-12'>
          <FiveCard2/>
          </div>
          
        </div>
        <div className="col-span-2 text-left">
          <div className='sticky top-10 left-0 right-0 bg-violet-200 w-auto h-160 w-80 shadow-xl'>
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
        </div>
      </div> 
      
      <Newsletter />
      <Footer />
    </div>  
  )
}