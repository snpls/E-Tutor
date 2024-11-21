import heroImg from '../../assets/hero.png'
import { FaPlay } from "react-icons/fa";

const Hero = () => {
  return (
    <div className='container flex flex-col py-14 font-poppins space-y-10 md:flex-row'>
        {/* left side */}
        <div className='md:w-1/2 my-auto text-center md:text-start'>
            <div className='md:pr-[62px]'>
                <h4 className='text-[20px] font-semibold text-red-500'>100% Satisfaction Guarantee</h4>
                <h1 className='text-[46px] md:text-[48px] lg:text-[60px] font-semibold mt-3'>Find Your Perfect <span className='text-yellow-500'>Tutor</span></h1>
                <p className='my-7'>We help you find perfect tutor for 1-on-1 lessons. It is completely free and private</p>
                <div className='flex gap-10'>
                    <button className='px-4 py-2 bg-yellow-400 rounded-full font-semibold transition-all duration-300 hover:scale-110 hover:shadow-lg'>Get Started</button>
                    <div className='flex items-center gap-3 cursor-pointer'>
                        <span className='bg-blue-200 p-2 rounded-full'><FaPlay /></span>
                        <p className='font-semibold'>See how it works</p>
                    </div>
                </div>
            </div>
        </div>
        {/* right side */}
        <div className='md:w-1/2 flex items-center justify-center'>
            <img src={heroImg} alt="" />
        </div>
    </div>
  )
}

export default Hero