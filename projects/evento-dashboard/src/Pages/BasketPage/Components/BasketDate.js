import React, { useState } from 'react';
// import Calendar from 'react-calendar';
import '../style/BasketDate.css';

// const  BasketDate = () => {

//     const [date,setDate] = useState(new Date());
//     const onChange = date => {
//         setDate(date);
//     };
//     return (
//         <div className='h'>
//         <Calendar
//         showWeekNumbers onChange={onChange}
//         value={date}
//         />
//         {console.log(date)}
//         {date.toString()}
//         </div>
//     );
// };
// export default BasketDate;


const  BasketDate = () => {
    const [date,setDate]= useState()
    console.log('Event Date',date);
    return (
        <div className='h'>
        <h1 className='a'>Event Day : {date}</h1>
        <input type="date" name='Book Date' onChange={e=>setDate(e.target.value)} />
        </div>
    );
};
export default BasketDate;