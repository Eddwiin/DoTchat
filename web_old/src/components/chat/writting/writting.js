import React from "react";
import API from "../../../core/services/api";
import formattedFileForHttp from "./../../../core/services/upload";
import "./writting.scss";

const INITIAL_STATE = {
  file: undefined
};
export default class WrittingComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = INITIAL_STATE;
    this.handleUploadFile = this.handleUploadFile.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleUploadFile(e) {
    this.setState({ [e.target.name]: e.target.files[0] });
  }

  handleSubmit() {
    const fileFormatted = formattedFileForHttp(this.state.file);

    API.post(
      "/private/uploadImageMessage",
      fileFormatted.formData,
      fileFormatted.config
    )
      .then(res => {
        console.log(res);
      })
      .catch(e => {
        console.log(e);
      });
  }

  render() {
    return (
      <form
        onSubmit={e => {
          e.preventDefault();
          this.handleSubmit();
        }}
      >
        <div className="position-absolute">
          <div className="fixed-bottom">
            <div className="input-group type-msg mb-2 offset-4">
              <textarea
                type="text"
                className="form-control"
                placeholder="Type your message here..."
                aria-label="Type your message here..."
                aria-describedby="basic-addon2"
              />
              <div className="input-group-append">
                <input
                  name="file"
                  type="file"
                  onChange={this.handleUploadFile}
                />
                <button className="btn btn-primary" type="submit">
                  Send
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    );
  }
}
