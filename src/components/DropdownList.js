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

// from https://stackoverflow.com/questions/72301355/how-to-populate-select-options-from-an-api-call-in-react-js-on-page-load

import { Form } from "react-bootstrap";
// import { Field, ErrorMessage } from 'formik';
import axios from "axios";
import { useEffect, useState } from 'react';
// import Alert from "react-bootstrap/Alert";

function DropdownList(props) {
  const [locations, setLocation] = useState([]);

  useEffect(() => {
    async function fetchData() {
      // Fetch data
      const { data } = await axios.get("https://worldviews-api1-2fa5e8a86642.herokuapp.com/locations");
      const results = []
      // Store results in the results array
      data.forEach((value) => {
        results.push({
          key: location.name,
          value: location.id,
        });
      });
      // Update the options state
      setLocation([
        {key: 'Select a location', value: ''}, 
        ...results
      ])
    }

    // Trigger the fetch
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
      {/* <ErrorMessage className="text-danger" name={name} component={Form.Text} /> */}
      {/* {errors?.content?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
          {message}
        </Alert>
      ))} */}
    </Form.Group>
  );
}

export default DropdownList;