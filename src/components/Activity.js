import React from 'react';
import { Player, ControlBar } from 'video-react';
import { Link } from 'react-router-dom'

const Activity = ({activity}) => {

    return (
        <div>
           {activity.name}
           {activity.description}    
           <Player playsInline fluid={false} width={853} height={480}>
              <source src={activity.url} />
           <ControlBar autoHide={false} className="my-class" />
           </Player>

           <Link to="/categories">Back to Categories</Link>

        </div>



    );
  }
  
  export default Activity;
  
