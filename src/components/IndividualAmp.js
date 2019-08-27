import React, {useState,useEffect} from 'react'
import axios from "axios"
import DisplaySingleItem from "./DisplaySingleItem"




export default function IndividualAmp(props) {

    
   const [item, setItem] = useState([])

    useEffect(() => {
        axios.get(`/api/amp/${props.match.params.id}`).then(res =>{
            console.log(res);
            setItem(res.data)
        }).catch(err =>{console.log(err)})

      },[]);
    
      const displayitem = item.map(amp =>{
         return <DisplaySingleItem key={amp.amp_id} image={amp.image} price={amp.price} title={amp.title} details={amp.details} />
      })

    return (
        <div>
          {displayitem}
        </div>
    )
}
