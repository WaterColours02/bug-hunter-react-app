import React from "react";

// import { formatDate } from "../utility";

import EditIssue from "./EditIssue";

class Issue extends React.Component {
  render() {
    const {
      desc,
      nature,
      severity,
      priority,
      assignedTo,
      dateCreated,
      status,
      expectedCompleteDate,
    } = this.props.details;

    // const editOpen = this.props.editOpen;

    return (
      <div className='issue-wrapper'>
        <li className='list-issue'>
          <h3 className='issue-desc'>{desc}</h3>

          <div>
            {status === "active" ? (
              <p className='issue-active'>Active</p>
            ) : (
              <p className='issue-completed'>Completed</p>
            )}
          </div>

          <div className='issue-line-div'>
            <p className='title'>Nature: </p>
            <p>{nature}</p>
          </div>
          <div className='issue-line-div'>
            <p className='title'>Severity:</p>
            <p>{severity}</p>
          </div>
          <div className='issue-line-div'>
            <p className='title'>Priority:</p>
            <p>{priority}</p>
          </div>
          <div className='issue-line-div'>
            <p className='title'>Assigned to:</p>
            <p>{assignedTo}</p>
          </div>
          <div className='issue-line-div'>
            <p className='title'>Expected Date of Completion:</p>
            <p>{expectedCompleteDate}</p>
          </div>
          <div className='issue-line-div'>
            <p className='date-created-title'>Date created:</p>
            <p className='date-created'>{dateCreated}</p>
          </div>
          <div className='buttons-wrapper'>
            <button
              className='complete-issue'
              onClick={() => this.props.completeIssue(this.props.index)}
            >
              Complete
            </button>
            <EditIssue
              details={this.props.details}
              addIssue={this.props.addIssue}
              updateIssue={this.props.updateIssue}
              index={this.props.index}
            />
            <button
              className='delete-issue'
              onClick={() => this.props.deleteIssue(this.props.index)}
            >
              Delete
            </button>
          </div>
        </li>
      </div>
    );
  }
}

export default Issue;
