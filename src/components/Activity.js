import React from 'react';

const Activity = ({activity}) => {
    console.log({activity})
  
    return (
        <div>
           {activity.name}
           {activity.description}
           {activity.url}
        </div>
    );
  }
  
  export default Activity;
  
