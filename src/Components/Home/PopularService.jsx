import { useEffect, useState } from "react";
import Service from "../../Shared/Service";
import Title from "../../Shared/Title";
import img from "../../assets/home/tra-bg.png"

const PopularService = () => {
  const [services, setServices] = useState([]);
  // eslint-disable-next-line no-unused-vars
  const [error, setError] = useState(null);
  useEffect(() => {
    fetch("https://belleza-server.vercel.app/data")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((data) => {
        // Initialize an empty array for popular services
        const popularServices = [];
        // Iterate over each category and filter the popular services
        data.forEach(item => {
          item.items.forEach(service => {
            if (service.popular === "yes") {
              popularServices.push(service);
            }
          });
        });

        // Set the state with popular services
        setServices(popularServices);
        // setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        // setLoading(false);
      });
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="w-full bg-cover mb-20" style={{
      backgroundImage: `url(${img})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',

    }}>
    <Title
    heading="Our Popular Services"
    description="Discover the range of services that our clients love the most. From personalized treatments to exceptional care, explore what makes our offerings stand out."
/>

      <div className="flex justify-center">
        <div className="grid md:grid-cols-2 gap-10" >
          {services.map((item, index) => (
            <Service key={index} item={item} showDescription={false}/>
          ))}
        </div>
      </div>

    </div>
  );
};

export default PopularService;
