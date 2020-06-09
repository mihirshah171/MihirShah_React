import React from 'react';
import Users from '../Child/Users';
const data = 
{
    firstname : "Mihir",
    lastname : "Shah",
    email : "mihir.shah@theonetechnologies.co.in",
    phone : "7016661953",
    hobby : "XYZ",
    address : "Naroda",
    city : "Ahmedabad",
    pincode : "382330",
    state : "Gujarat"
}
const App = () =>
{
    return(
        <div>
        <Users value = {data} />
        </div>
    )
}
export default App;
