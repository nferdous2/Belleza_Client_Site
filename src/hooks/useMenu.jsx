
import { useEffect, useState } from "react";

const useMenu = () => {
  const [services, setServices] = useState({ haircuts: [], makeupServices: [], browServices: [], nailServices: [] });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://belleza-server.vercel.app/data')
      .then(res => res.json())
      .then(data => {
        const services = {
          haircuts: [],
          makeupServices: [],
          browServices: [],
          nailServices: [],
        };
  
        data.forEach(item => {
          if (item.category === 'haircuts') services.haircuts = item.items;
          else if (item.category === 'makeupServices') services.makeupServices = item.items;
          else if (item.category === 'browServices') services.browServices = item.items;
          else if (item.category === 'nailServices') services.nailServices = item.items;
        });
  
        setServices(services);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching services:', error);
        setLoading(false);
      });
  }, []);
  


  return [services, loading];
};

export default useMenu;
