// Inspired by this tutorial from Caleb Curry https://www.youtube.com/watch?v=Mnz_Qpl5Q_s

// import axios from 'axios';
// import { useEffect, useState } from 'react';


// function DropdownList() {
//     const [locations, setLocation] = useState<Location | null>(null);
//     const [selected, setSelected] = useState<Location | null>(null);
//     useEffect(() => {
//         const url =
//             "https://worldviews-api1-2fa5e8a86642.herokuapp.com/locations";
//         axios.get(url).then((response) => {
//             setLocation(response.data)
//         });
//     }, []);

//     return (
//         <>
//             <div className="DropdownList">
//                 <select 
//                     onChange={(e) => {
//                         const c = locations?.find((x) => x.id === e.target.value)
//                         setSelected(c);
//                     }}
//                     defaultValue='default'
//                 >
//                     <option value='default'>Choose a location</option>
//                     {locations
//                         ? locations.map((location) => {
//                             return 
//                                 <option key={location.id} value={location.id}>{location.name}
//                                 </option>
//                         })
//                         : null}
//                 </select>
//             </div>
//             {selected ? <LocationSummary location={selected} /> : null}
//         </>
//     )
// }

// export default DropdownList

// This dropdown menu code is inspired by https://stackoverflow.com/questions/72301355/how-to-populate-select-options-from-an-api-call-in-react-js-on-page-load
// And this was helpful for fetching data from objects rather than arrays: https://rapidapi.com/guides/axios-async-await

import Form from "react-bootstrap/Form";
// import Alert from "react-bootstrap/Alert";
import axios from "axios";
import { useEffect, useState } from 'react';


function DropdownList(props) {
  const [locations, setLocation] = useState([]);

  useEffect(() => {
    async function fetchData() {
    // Fetch data from objects in API
      const response = await axios.get(
        "https://worldviews-api1-2fa5e8a86642.herokuapp.com/locations"
      );
      const results = response.data.results; 

      const allLocations = results.map(location => ({
        key: location.name,
        value: location.location_id
      }));
    
      // Update the options state
      setLocation([
        { key: 'Select a location', value: '' },
        ...allLocations
      ]);
    }

    // Trigger fetch
    fetchData();
  }, []);

  const { label, name, ...rest } = props;

  return (
    <Form.Group className="mb-2">
      <Form.Label htmlFor={name}>{label}</Form.Label>
      <div id={name} name={name} {...rest} as={Form.Select}>
        {locations.map((location) => {
          return (
            <option key={location.value} value={location.value}>
              {location.key}
            </option>
          );
        })}
      </div>
    </Form.Group>
  );
}

export default DropdownList;