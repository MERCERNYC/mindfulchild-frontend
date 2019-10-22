import React from  'react'
import Activity from './Activity';

const Activities = (props) => {
   
    console.log(props)

    return (
        <div>
         {props.activities && props.activities.map(activity => {
             return (
                <Activity activity={activity} key={activity.id} />
             )
         })}
        </div> 
    );
}

export default Activities;
