import React from 'react';
import { connect } from 'react-redux';//HOC

import Activities from '../components/Activities'

//connect to the store

class ActivitiesContainer extends React.Component {

 
    render () {
        
         // GET CATEGORYID
        let categoryId = this.props.match.params.id 
        

        console.log("Encontrou o categoryId: " + categoryId)

        const {activities} = this.props.categories[categoryId-1]

        console.log("Encontrou o categoryId: " + activities)
        // for (let i= 0; i < this.props.categories.length; i++) {
        //     if this.props.categories[i].id == categoryid {
        //         category = this.props.categories[i]
        //     }
        // }


        // Get Activities do Category

        if (!activities) {
            return <div> Loading ...</div>
        }

        return (
            <div>
                 <Activities activities={activities} />
            </div>
        )
    }
} 

const mapStateToProps = (state) => {
      
    return {
       categories: state.categories
    }
  }


export default connect(mapStateToProps)(ActivitiesContainer);