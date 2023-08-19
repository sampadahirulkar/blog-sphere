import Header from '../../components/header'
import Footer from '../../components/footer'
import Name from '../../components/name'
import Image from 'next/image'
import Newsletter from '../../components/newsletter'
import Comments from '../../comments/comments'

// issues:
// 
// 
// 3. image importing


export default function Home(){
  return(
    <div>
      <Name />
      <Header /> 
      <div className='container mx-auto md:px-2 py-16 w-1/2'>
        <div className='flex justify-center'>
          <div className='py-10 text-center'>
            <span className="text-4xl text-fuchsia-950 tracking-tight text-center font-serif">
              AI in Healthcare: Transforming Diagnostics and Patient Care
            </span>
            <div className="py-5 text-fuchsia-950 text-sm">
              <p>dummy author</p>
              <p>14 July 23</p>
            </div>      
          </div>
        </div>
        <Image className='w-full h-full object-cover rounded-ig ml-4'
             src={"/AI1.jpg"}
             alt="Blogsphere"
             width={450}
             height={250}
             />
        <div className='py-10 text-slate-700'>
          <p className='py-5'>
            Amidst the swirling chaos of the city, a lone figure 
            walked the rain-soaked streets. Their footsteps echoed through the empty 
            alleyways, a symphony of solitude. The neon lights flickered overhead, 
            casting an ethereal glow on the damp pavement.Lost in their own thoughts,
            the figure meandered aimlessly, seeking solace in the night's embrace. Ea
            ch step was a release, a cathartic rhythm that echoed their inner tur
            moil. Memories danced like shadows, fragments of a life once lived.
          </p>
          <p className='py-5'>
            The scent of freshly brewed coffee wafted from a nearby café, enticing t
            he senses and luring the figure closer. A moment of respite awaited withi
            n those familiar walls, a temporary escape from the enigmatic puzzle of ex
            istence.Sitting by the window, a steaming cup in hand, the figure watched 
            the world go by. Strangers passed like fleeting glimpses of parallel unive
            rses, each with their own stories and secrets. The ebb and flow of humanit
            y echoed in the cacophony of voices and the symphony of car horns.Outside,
            raindrops painted a shimmering canvas on the glass, blurring the line bet
            ween reality and dreams. The figure's mind wandered through realms unknown, exploring the vast expanses of imagination. Ideas swirled like galaxies, waiting to be grasped and transformed into something tangible.
          </p>
          <p className='py-5'>
            Time slipped away, unnoticed and unheeded. The night wore on, and the figu
            re reluctantly bid farewell to the refuge of the café. With a renewed sense
            of purpose, they stepped back into the labyrinthine city, ready to navigate 
            its maze once more.Guided by the distant glow of the moon, the figure walk
            ed into the unknown, embracing the uncertainty that lay ahead. Every step 
            was a testament to resilience, a declaration of defiance against the chao
            s that sought to engulf them.
          </p>
          <p className='py-5'>
            And so, the figure vanished into the night, becoming a part of the ever-
            changing tapestry of existence. Their story intertwined with countless ot
            hers, a testament to the boundless potential of the human spirit."Please 
            note that this text was randomly generated by an AI model and may not hav
            e a coherent meaning or storyline.
          </p>
        </div>
      </div>
      <Comments
        commentsUrl="/"
        currentUserId = "1"/>
      <Newsletter />
      <Footer />
    </div>
  )
}
