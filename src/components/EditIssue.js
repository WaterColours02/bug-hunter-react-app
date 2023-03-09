import React from "react";

class EditIssue extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editOpen: false,
      issue: { ...this.props.details }, // Spread the details object into the state
    };
    this.toggleEditModal = this.toggleEditModal.bind(this);
  }

  toggleEditModal() {
    this.setState({ editOpen: !this.state.editOpen });
  }

  submitUpdatedIssue(event) {
    event.preventDefault();

    console.log("updating issue", event);

    const key = this.props.index;

    const issue = {
      desc: "",
      nature: "",
      severity: "",
      priority: "",
      assignedTo: "",
      expectedCompleteDate: "",
      status: "",

      // desc: this.state.issue.desc,
      // nature: this.state.issue.nature,
      // severity: this.state.issue.severity,
      // priority: this.state.issue.priority,
      // assignedTo: this.state.issue.assignedTo,
      // expectedCompleteDate: this.state.issue.expectedCompletedDate,
      // status: this.state.issue.status,
    };

    issue.desc = this.state.issue.desc;
    issue.nature = this.state.issue.nature;
    issue.severity = this.state.issue.severity;
    issue.priority = this.state.issue.priority;
    issue.assignedTo = this.state.issue.assignedTo;
    issue.expectedCompleteDate = this.state.issue.expectedCompleteDate;
    issue.status = this.state.issue.status;

    this.props.updateIssue(key, issue);

    // refresh the form
    event.currentTarget.reset();
  }

  handleUpdateSubmit = (event) => {
    event.preventDefault();
    this.submitUpdatedIssue(event);
    this.toggleEditModal();
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    const issue = { ...this.state.issue };
    issue[name] = value;
    this.setState({ issue });
  };

  render() {
    return (
      <div>
        <button
          className='edit-issue'
          onClick={this.toggleEditModal}
        >
          Edit
        </button>

        {this.state.editOpen && (
          <div className='edit-issue-form'>
            <div
              className='modal-overlay'
              // onClick={this.toggleEditModal}
            >
              <form
                onSubmit={this.handleUpdateSubmit}
                className='edit-issue-form'
              >
                <h2 className='edit-issue-form-title'>Edit Issue</h2>
                <div className='input-wrapper desc'>
                  <label
                    htmlFor='desc'
                    className='form-label'
                  >
                    Description
                  </label>
                  <input
                    className='desc-text-area'
                    name='desc'
                    value={this.state.issue.desc}
                    onChange={this.handleChange}
                  />
                </div>

                <div className='input-wrapper'>
                  <label
                    htmlFor='status'
                    className='form-label'
                  >
                    Status
                  </label>
                  <select
                    name='status'
                    value={this.state.issue.status}
                    onChange={this.handleChange}
                  >
                    <option value='active'>Active</option>
                    <option value='completed'>Completed</option>
                  </select>
                </div>

                <div className='input-wrapper'>
                  <label
                    htmlFor='nature'
                    className='form-label'
                  >
                    Nature
                  </label>
                  <select
                    name='nature'
                    value={this.state.issue.nature}
                    onChange={this.handleChange}
                  >
                    <option value='security'>Security</option>
                    <option value='functionality'>Functionality</option>
                    <option value='stability'>Stability</option>
                    <option value='design'>Design</option>
                  </select>
                </div>

                <div className='input-wrapper'>
                  <label
                    htmlFor='severity'
                    className='form-label'
                  >
                    Severity
                  </label>
                  <select
                    name='severity'
                    type='text'
                    value={this.state.issue.severity}
                    onChange={this.handleChange}
                  >
                    <option value='low'>Low</option>
                    <option value='medium'>Medium</option>
                    <option value='high'>High</option>
                  </select>
                </div>

                <div className='input-wrapper'>
                  <label
                    htmlFor='priority'
                    className='form-label'
                  >
                    Priority
                  </label>
                  <select
                    name='priority'
                    type='text'
                    value={this.state.issue.priority}
                    onChange={this.handleChange}
                  >
                    <option value='low'>Low</option>
                    <option value='medium'>Medium</option>
                    <option value='high'>High</option>
                  </select>
                </div>

                <div className='input-wrapper'>
                  <label
                    htmlFor=''
                    className='form-label'
                  >
                    Expected date of completion
                  </label>
                  <input
                    className='expected-complete-date-text-area'
                    name='expectedCompleteDate'
                    value={this.state.issue.expectedCompleteDate}
                    onChange={this.handleChange}
                  />
                </div>

                <div className='input-wrapper'>
                  <label
                    htmlFor='assignedTo'
                    className='form-label'
                  >
                    Assigned to:
                  </label>
                  <input
                    className='assigned-to-input'
                    name='assignedTo'
                    type='text'
                    value={this.state.issue.assignedTo}
                    onChange={this.handleChange}
                  />
                </div>

                <button
                  type='submit'
                  className='new-issue-submit-button'
                >
                  Update Issue
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default EditIssue;
