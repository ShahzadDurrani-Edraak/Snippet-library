//import image from "../code.jpg";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { Link, useParams } from "react-router-dom";
import Snippets from "../Components/json/Snippets.json";
import { useState } from "react";

const Single = () => {
  const { id } = useParams();
  const curr_snippet = Snippets.find((snippet) => snippet.id == id);
  const { title, description, image } = curr_snippet;
  const [copy, setCopy] = useState("false");
  const codeString = `<pre className="snippet-preview">
<small class="snippetTag">HTML</small>
Lorem Ipsum is simply dummy text of the printing and typesetting
industry. Lorem Ipsum has been the industry's standard dummy text
ever since <br />
the 1500s, when an unknown printer took a galley of type and
scrambled it to make a type specimen book. It has survived not
only five centuries,
<br />
but also the leap into electronic typesetting, remaining
essentially unchanged. It was popularised in the 1960s with the
release <br />
of Letraset sheets containing Lorem Ipsum passages, and more
recently with desktop publishing software like <br />
Aldus PageMaker including versions of Lorem Ipsum.
</pre>`;

  const handleCopy = () => {
    console.log(copy);
    navigator.clipboard.writeText(codeString);
    setCopy(true);
    setTimeout(() => {
      setCopy(false);
    }, 100);
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="snippet-card">
            <Link to="/">Back</Link>
            <div className="snippet-picture">
              <img src={image} alt="picture" />
            </div>
            <h1 className="snippet-title">{title}</h1>
            <p className="snippet-description">{description}</p>
            <div className="snippetCode">
              <div className="code-heeader d-flex justify-content-between items-center">
                <p className="text-sm">Html</p>
                {copy ? (
                  <button
                    className="inline-flex items-center gap-1"
                    onClick={handleCopy}
                  >
                    <span className="fa-regular fa-clipboard"></span>
                    copy code
                  </button>
                ) : (
                  <button className="inline-flex items-center gap-1">
                    <span className="fa-solid fa-check"></span>
                    copied
                  </button>
                )}
              </div>
              <SyntaxHighlighter
                language="jsx"
                customStyle={{ padding: "25px" }}
                wrapLongLines={true}
              >
                {codeString}
              </SyntaxHighlighter>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Single;
