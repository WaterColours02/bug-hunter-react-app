import React from "react";
import NewIssueFrom from "./NewIssueForm";
import Issue from "./Issue.js";
import base from "../base";

class App extends React.Component {
  //state
  state = {
    issues: {},
    editOpen: false,
    searchString: "",
    filteredIssues: {},
  };

  // life-cycle
  // -----------------------------------------------------
  // THIS IS HOW YOU LOAD DATA FROM FIREBASE TO STATE
  // -----------------------------------------------------
  componentDidMount() {
    const { params } = this.props.match;
    this.ref = base.syncState(`${params.userId}/issues`, {
      context: this,
      state: "issues",
      then: () => {
        console.log(this.state.issues); // check if this.state.issues is getting populated with the data from firebase
        this.setState({ filteredIssues: { ...this.state.issues } }, () => {
          console.log(this.state.filteredIssues);
        });
      },
    });
  }

  filterIssues = () => {
    if (!this.state.searchString) {
      this.setState({ filteredIssues: { ...this.state.issues } });
    } else {
      const filteredIssues = Object.keys(this.state.issues)
        .filter((key) => {
          return Object.values(this.state.issues[key]).some((val) => {
            return (
              typeof val === "string" &&
              val.toLowerCase().includes(this.state.searchString)
            );
          });
        })
        .reduce((obj, key) => {
          obj[key] = this.state.issues[key];
          return obj;
        }, {});
      this.setState({ filteredIssues });
    }
  };

  // ------------------------------------------------------------

  //methods
  addIssue = (issue) => {
    console.log("adding an issue");
    // 1. take a copy of state
    const issues = { ...this.state.issues };
    // 2. add the new issue to the copy of state
    issues[`issue${Date.now()}`] = issue;
    // 3. update the state object
    this.setState({ issues }, this.filterIssues());
  };

  updateIssue = (key, issue) => {
    const issues = { ...this.state.issues };
    issues[key] = { ...issue };
    this.setState({ issues });
  };

  deleteIssue = (key) => {
    const issues = { ...this.state.issues };
    issues[key] = null;
    this.setState({ issues });
    console.log("issue deleted");
  };

  completeIssue = (key) => {
    const issues = { ...this.state.issues };
    issues[key].status = "completed";
    this.setState({ issues });
  };

  //  this needs to be completed

  onSearchChange = (event) => {
    const searchString = event.target.value.toLocaleLowerCase();
    this.setState({ searchString }, this.filteredIssues);
    this.filterIssues();
  };

  render() {
    return (
      <div className='wrapper'>
        <div className='header'>
          <h1 className='welcome-user'>
            WELCOME {this.props.match.params.userId}!
          </h1>
        </div>
        <div className='app-grid'>
          <NewIssueFrom addIssue={this.addIssue} />
          <div className='search-bar-container'>
            <input
              className='search-bar'
              type='text'
              placeholder='Search Issues...'
              onChange={this.onSearchChange}
            />
          </div>
          <div className='issues-list'>
            {Object.keys(this.state.filteredIssues).map((key) => (
              <Issue
                editOpen={this.state.editOpen}
                key={key}
                index={key}
                details={this.state.issues[key]}
                deleteIssue={this.deleteIssue}
                completeIssue={this.completeIssue}
                updateIssue={this.updateIssue}
                addIssue={this.addIssue}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
