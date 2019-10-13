import React from  'react'
import Activity from './Activity';

const Activities = ({activities}) => {
    return (
        <div>
         {activities && activities.map(activity => {
             return (
                <Activity activity={activity} key={activity.id} />
             )
         })}
        </div> 
    );
}

export default Activities;
