
import PropTypes from 'prop-types';
import { Separator } from './ui/separator';

import { LuFuel } from "react-icons/lu";
import { TbBrandSpeedtest } from "react-icons/tb";
import { GiGearStickPattern } from "react-icons/gi";

const CarItems = ({ car }) => {
  return (
    <div>
      <img src={car?.image} alt={car.name} width={300} height={250} className='rounded-t-xl' />
      <div className='p-4'>
        <h2 className='font-bold text-black text-sm text-center'>{car?.name}</h2>

        <Separator className=' text-blue-500' />

        <div className='grid grid-cols-3 mt-5 text-[12px]'>
          <div className='flex flex-col items-center'>
            <LuFuel className='iconColor' />
            <h2>{car.miles} Miles</h2>
          </div>

          <div className='flex flex-col items-center'>
            <TbBrandSpeedtest className='iconColor' />
            <h2>{car.fuelType}</h2>
          </div>

          <div className='flex flex-col items-center'>
            <GiGearStickPattern className='iconColor' />
            <h2>{car.gearType}</h2>
          </div>
        </div>
      </div>
    </div>
  )
}

CarItems.propTypes = {
  car: PropTypes.shape({
    image: PropTypes.string,
    name: PropTypes.string,
    miles: PropTypes.number,
    price: PropTypes.number,
    fuelType: PropTypes.string,
    gearType: PropTypes.string,
  }).isRequired
};

export default CarItems