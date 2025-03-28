import FakeData from "@/data/FakeData";
import CarItems from "./CarItems";

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"


const MostSearchCar = () => {

    return (
        <div className="mx-24">
            <h2 className="title">Most Search</h2>

            <Carousel>
                <CarouselContent>
                    {FakeData.carList.slice(0, 6).map((car, index) => (
                        <CarouselItem key={index} className="basis-1/1 sm:basis-1/2 md:basis-1/3 ">
                            <CarItems car={{
                                ...car,
                                price: Number(car.price) // Ensure price is a number
                            }} />
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>




        </div>
    )
}

export default MostSearchCar