// Inspired by this tutorial from Caleb Curry https://www.youtube.com/watch?v=Mnz_Qpl5Q_s

import axios from 'axios';
import { useEffect, useState } from 'react';

function DropdownList() {
    const [location, setLocation] = useState<Location[] | null>(null);
    const [selected, setSelected] = useState<Location | null>();
    useEffect(() => {
        const url =
            "https://worldviews-api1-2fa5e8a86642.herokuapp.com/locations";
        axios.get(url).then((response) => {
            setLocation(response.data)
        });
    }, []);
    return (
        <>
            <div className="DropdownList">
                <select 
                    onChange={(e) => {
                        const c = locations?.find((x) => x.id === e.target.value)
                        setSelected(c);
                    }}
                    defaultValue='default'
                >
                    <option value='default'>Choose a location</option>
                    {locations
                        ? locations.map((location) => {
                            return 
                                <option key={location.id} {value=location.id}>{location.name}
                                </option>
                        })
                        : null}
                </select>
            </div>
            {selected ? <LocationSummary location={selected} /> : null}
        </>
    )
}

export default DropdownList
