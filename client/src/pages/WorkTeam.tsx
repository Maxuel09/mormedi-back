import PopUp from "../components/PopUp"
import SearchBar from "../components/Searchbar"
import axios from "axios";
import { useState, useEffect } from "react";

const WorkTeam = () => {

const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:5173/clients'");
        setData(response.data);
        console.log(data)
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [data]);
  return (
    <div className="containerMain">
       <h1>Work Team</h1>
       <SearchBar data={data} />
       <PopUp/>
    </div>
  )
}


export default WorkTeam



