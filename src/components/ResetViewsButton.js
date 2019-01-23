import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, crudUpdateMany, startUndoable } from 'react-admin';

class ResetViewsButton extends Component {
    handleClick = () => {
        const {  basePath, resource, selectedIds, startUndoable } = this.props;
        startUndoable(
            crudUpdateMany(resource, selectedIds, { views: 0 }, basePath)
        );
    };

    render() {
        return (
            <Button label="Reset Views" onClick={this.handleClick} />
        );
    }
}

export default connect(undefined, { startUndoable })(ResetViewsButton);
