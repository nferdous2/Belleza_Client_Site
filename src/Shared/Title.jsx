/* eslint-disable react/prop-types */

const Title = ({heading,description}) => {

    return (
        <div className=" text-basic mx-auto text-center md:w-1/2 my-8">
            <p className=" lg:text-5xl sm:text-2xl tracking-wide mb-2 font-bold text-4xl">{heading}</p>
            <p className="text-xl mt-5">{description}</p>
        </div>
    );
};


export default Title;