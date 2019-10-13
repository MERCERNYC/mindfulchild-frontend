import React  from 'react'
import { connect } from 'react-redux';//HOC


class Newsletter extends React.Component{

    state = {
        email:''
    }

    render() { 
        return(
            <div>
                <form>
                    <label>Email:</label>
                    <input type='text'/>
                </form>
            
            </div>
        );
    }
}

export default connect(null)(Newsletter)







