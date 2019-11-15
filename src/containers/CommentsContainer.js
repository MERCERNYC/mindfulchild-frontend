import React from 'react';
import Comments from '../components/Comments'


class CommentsContainer extends React.Component {

    componentDidMount() {
        fetch('http://localhost:3000/api/v1/messages')
        .then(resp => resp.json())
    }

    render() {

        const {comments} = this.props;

        return (
            <div>
                <Comments comments={comments} />
            </div>
            );
        }
      }

export default CommentsContainer;
