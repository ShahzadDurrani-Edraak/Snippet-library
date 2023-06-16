const AddSnippet = ({ onChangeContent }) => {
  function handleAdd() {
    const selection = document.getElementById("snippet-language");
    let selection_value = selection.value;
    const div_snippet = document.getElementById("container-snippet");
    let snippet = "";
    snippet = snippet.concat(
      "<div class='textarea-snippet'><small class='snippetTag'>",
      selection_value,
      "</small><textarea class='form-control' snippet='",
      selection_value,
      "' placeholder='Add snippet here' ></textarea></div>"
    );
    selection_value !== ""
      ? div_snippet.insertAdjacentHTML("beforeend", snippet)
      : document.getElementById("snippet-language").focus();
    selection_value = "";
  }

  return (
    <>
      <div className="container mt-5 mb-5">
        <div className="row d-flex justify-content-center">
          <a onClick={onChangeContent}>Back Home</a>
          <form>
            <div className="row mb-3">
              <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">
                Language
              </label>
              <div className="col-sm-10 padding-none">
                <select
                  className="form-select form-select-lg mb-3"
                  aria-label=".form-select-lg example"
                >
                  <option defaultValue="">Select language</option>
                  <option value="html">Html</option>
                  <option value="scss">Scss</option>
                  <option value="js">JavaScript</option>
                </select>
              </div>
            </div>
            <div className="row mb-3">
              <label htmlFor="input-title" className="col-sm-2 col-form-label">
                Title
              </label>
              <div className="col-sm-10 padding-none">
                <input type="title" className="form-control" id="input-title" />
              </div>
            </div>
            <div className="row mb-3">
              <label htmlFor="input-desc" className="col-sm-2 col-form-label">
                Description
              </label>
              <div className="col-sm-10 padding-none">
                <input type="desc" className="form-control" id="input-desc" />
              </div>
            </div>

            <div className="row mb-3">
              <label htmlFor="input-code" className="col-sm-2 col-form-label">
                Add Snippet
              </label>
              <div className="col-sm-10">
                <div className="row container-snippet" id="container-snippet">
                  <div className="select-lang col-md-4">
                    <select
                      className="form-select form-select-md mb-3 col-md-5"
                      id="snippet-language"
                      aria-label=".form-select-lg example"
                    >
                      <option defaultValue="null" placeholder="Select Language">
                        {" "}
                      </option>
                      <option value="html">Html</option>
                      <option value="scss">Scss</option>
                      <option value="js">JavaScript</option>
                    </select>
                  </div>
                  <div className="btn-add col-md-2">
                    <button
                      type="button"
                      className="btn btn-primary"
                      onClick={handleAdd}
                    >
                      Add
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <button
              type="submit"
              className="btn btn-primary float-end btn-post"
            >
              Post
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddSnippet;
