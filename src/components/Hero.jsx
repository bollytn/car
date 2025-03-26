import Search from './Search';

const Hero = () => {
  return (
    <div>
        <div className='flex flex-col items-center p-10 py-20 h-[600px] w-full bg-[#eef0fc]'>
            <h2 className='text-xl md:text-2xl mb-10'>Find cars for sale and for rent near you</h2>
            <h2 className='mb-14 md:text-[60px] font-bold text-[45px] text-center'>Find your car dream</h2>
            <Search className='w-10 h-10' />
            <img src='/tesla.png' alt='hero' className='w-[full] h-[full] mt-10' />
        </div>
    </div>
  )
}

export default Hero