import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Button } from 'react-admin';

import { startUndoable as startUndoableAction } from 'ra-core';

// import { push } from 'react-router-redux';


// import DataProvider from './lib/DataProvider';

import { commentApprove } from './commentActions';

class ApproveButton extends Component {
    handleClick = () => {
        const { startUndoable, record } = this.props;
        startUndoable(commentApprove(record.id, record));
        // const updatedRecord = { ...record, is_approved: true };
        // fetchStart();
        // DataProvider(UPDATE, 'comments', { id: record.id, data: updatedRecord })
        //      .then(() => {
        //          showNotification('Comment approved');
        //          push('/comments');
        //      })
        //      .catch((e) => {
        //          console.error(e);
        //          showNotification('Error: comment not approved', 'warning')
        //
        //    })
        //    .finally(fetchEnd);
        // commentApprove(record.id, record);
    }

    render() {
        return <Button onClick={this.handleClick}>Approve</Button>;
    }
}

ApproveButton.propTypes = {

    // fetchStart: PropTypes.func,
    // fetchEnd: PropTypes.func,
    // push: PropTypes.func,
    // record: PropTypes.object,
    // showNotification: PropTypes.func,
    // commentApprove: PropTypes.func.isRequired,
    startUndoable: PropTypes.func,
    record: PropTypes.object,
};

export default connect(null, {

    // commentApprove
     startUndoable: startUndoableAction,
})(ApproveButton);
