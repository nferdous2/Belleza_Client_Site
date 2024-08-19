

/* eslint-disable react/prop-types */
import Service from '../../../Shared/Service';
import Title from '../../../Shared/Title';


const ServiceCategory = ({ items = [], heading, description }) => {
  return (
    <>


      <div className="grid grid-cols-1 gap-10 justify-items-center mb-7">
        <Title heading={heading} description={description} />
        {
          Array.isArray(items) && items.map((item, index) => (
            <div key={item.name + index} className="bg-[#efeeee65]  border-0 border-b-4 border-basic  card w-full md:w-3/4 lg:w-1/2 lg:h-36 h-full  lg:card-side"
              data-aos="fade-left"
              data-aos-offset="200"
              data-aos-delay="50"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
              data-aos-once="false"
            >
              <Service item={item} />
            </div>
          ))
        }
      </div>



    </>
  );
};

export default ServiceCategory;