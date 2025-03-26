import Search from './Search';

const Hero = () => {
  return (
    <div>
        <div className='flex flex-col items-center p-10 py-20 h-[600px] w-full bg-[#eef0fc]'>
            <h2 className='text-lg'>Find cars for sale and for rent near you</h2>
            <h2 className='md:text-[60px] font-bold text-[40px]'>Find your car dream</h2>
            <Search className='w-10 h-10' />
            <img src='/tesla.png' alt='hero' className='w-[full] h-[full] mt-10' />
        </div>
    </div>
  )
}

export default Hero