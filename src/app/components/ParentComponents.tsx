import React from 'react';
import ChildComponents from './ChildComponents';
import Image from 'next/image';

const ArrayMap = () => {
    const ParentComponent = [
        { 
            carName: "Toyota", 
            price: 2800000, 
            image: <Image src="/toyota-corolla.png" alt="TOYOTA COROLLA" width={160} height={160} />, 
            reviews: 460 
        },
        { 
            carName: "Civic", 
            price: 3500000, 
            image: <Image src="/honda-civic.png" alt="HONDA CIVIC" width={160} height={160} />,
            reviews: 600 
        },
        { 
            carName: "Alto", 
            price: 1900000, 
            image: <Image src="/suzuki-alto.png" alt="SUZUKI ALTO" width={160} height={160} />, 
            reviews: 400 
        }
    ];

    return (
        <div className="min-h-screen bg-gray-100 py-10 px-5">
            <div className="max-w-4xl mx-auto">
                {ParentComponent.map((veh, index) => (
                    <div 
                        key={index} 
                        className="bg-white shadow-md rounded-lg p-4 border border-gray-300 mb-6 hover:shadow-lg transition duration-300 ease-in-out"
                    >
                        <div className="mb-4">
                            <p>Car Image: {veh.image}</p>
                        </div>
                        <h4 className="text-xl font-semibold text-gray-800 mb-2">Car Name: {veh.carName}</h4>
                        <p>Car Price: <span className="text-green-400">Rs. {veh.price.toLocaleString()}</span></p>
                        <p>Car Reviews: <span className="text-orange-400">{veh.reviews}</span></p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ArrayMap;
