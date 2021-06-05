import Map from "./components/Map";
import { useState, useEffect } from "react";
import Loader from "./components/Loader";
import Hdr from "./components/Hdr";

function App() {
  const [eventData, setEventData] = useState([]);
  const [loading, setloading] = useState(false);
  useEffect(() => {
    const fetchEvents = async () => {
      setloading(true);
      const res = await fetch(
        "https://eonet.sci.gsfc.nasa.gov/api/v2.1/events"
      );
      const { events } = await res.json();
      setEventData(events);
      console.log(events);
      setloading(false);
    };
    fetchEvents();
  }, []);
  return (
    <div>
      <Hdr />
      <div>{!loading ? <Map eventData={eventData} /> : <Loader />}</div>
    </div>
  );
}

export default App;
