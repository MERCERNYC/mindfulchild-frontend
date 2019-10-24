import React from 'react';
import Badge from 'react-bootstrap/Badge'
import { Link } from 'react-router-dom'

const Activity = ({activity}) => {


  console.log(activity)


    return (
      <div className="container text-center">

      <iframe title="video" width="853" height="480" src={activity.url}/>
           {/* <Player playsInline fluid={false} width={853} height={480}>
               <source src={activity.url} />
               <ControlBar autoHide={false} className="my-class" />
           </Player> */}
          <br/>
          <h2>{activity.name}</h2>
          <h4>{activity.description}</h4> 
          <br/>
          <h4 className="text-center">
            <Badge  pill variant="light" as={Link} to='/categories'>Back to Categories</Badge>
          </h4>
        </div>         
    );
  }
  
  export default Activity;
  
