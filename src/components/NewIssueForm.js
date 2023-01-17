import React from "react";

class NewIssueForm extends React.Component {
  descRef = React.createRef();
  natureRef = React.createRef();
  severityRef = React.createRef();
  priorityRef = React.createRef();
  assignedToRef = React.createRef();
  dateCreatedRef = React.createRef();
  expectedCompletedDateRef = React.createRef();
  status = React.createRef();

  createIssue = (event) => {
    event.preventDefault();

    const issue = {
      desc: this.descRef.current.value,
      nature: this.natureRef.current.value,
      severity: this.severityRef.current.value,
      priority: this.priorityRef.current.value,
      assignedTo: this.assignedToRef.current.value,
      dateCreated: new Date(Date.now()).toString(),
      expectedCompleteDate: this.expectedCompletedDateRef.current.value,
      status: "active",
    };
    this.props.addIssue(issue);

    // refresh the form
    event.currentTarget.reset();
  };

  render() {
    return (
      <form
        onSubmit={this.createIssue}
        className='new-issue-form'
      >
        <h2 className='issue-form-title'>Add a new issue</h2>
        <div className='input-wrapper desc'>
          <label
            htmlFor='desc'
            className='form-label'
          >
            Please describe the bug.
          </label>
          <input
            className='desc-text-are'
            name='desc'
            ref={this.descRef}
            placeholder='Desc'
          />
        </div>

        <div className='input-wrapper'>
          <label
            htmlFor='nature'
            className='form-label'
          >
            What is the nature of the bug?
          </label>
          <select
            name='nature'
            ref={this.natureRef}
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
            How <strong>severe</strong> is the bug?
          </label>
          <select
            name='severity'
            ref={this.severityRef}
            type='text'
            placeholder='Severity'
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
            What priority should this bug fix take?
          </label>
          <select
            name='priority'
            ref={this.priorityRef}
            type='text'
            placeholder='Priority'
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
            What is the expected date the bug will be fixed?
          </label>
          <input
            className='expected-complete-date-text-area'
            name='expectedCompleteDate'
            ref={this.expectedCompletedDateRef}
            placeholder='YYYY/MM/DD'
          />
        </div>

        <div className='input-wrapper'>
          <label
            htmlFor='assignedTo'
            className='form-label'
          >
            Who is responsible for fixing this bug?
          </label>
          <input
            className='assigned-to-input'
            name='assignedTo'
            ref={this.assignedToRef}
            type='text'
            placeholder='Assigned to'
          />
        </div>

        <button className='new-issue-submit-button'>Submit New Issue</button>
      </form>
    );
  }
}

export default NewIssueForm;
