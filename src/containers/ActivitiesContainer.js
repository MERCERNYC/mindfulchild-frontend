import React from 'react';
import Activities from '../components/Activities'


class ActivitiesContainer extends React.Component {
    
    render () {
        const {activities} = this.props;

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

export default ActivitiesContainer