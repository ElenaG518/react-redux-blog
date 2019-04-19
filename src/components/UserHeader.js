import React from 'react';
import { connect } from 'react-redux';

class UserHeader extends React.Component {
    
    render() {
     const {user } = this.props;
        if(!user) {
            return null;
        }
        
        return <div className="header">{user.name}</div>;
    }
};

//passing component's props as ownProps, in this case
// userId sent from PostList
const mapStateToProps = (state, ownProps) => {
    return {user: state.users.find(user => user.id === ownProps.userId)};
}

export default connect(mapStateToProps)(UserHeader);
