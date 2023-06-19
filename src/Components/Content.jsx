import { Link } from "react-router-dom";
import Snippets from "../Components/json/Snippets.json";

const Content = () => {
  return (
    <section className="section-products">
      <div className="container" id="container">
        <div className="row">
          {/* Single product */}
          {Snippets.map((snippet) => (
            <div className="col-md-6 col-lg-4 col-xl-3">
              <Link to={`/snippet/${snippet.id}`}>
                <div id="product-1" className="single-product">
                  <div className="part-1">
                    <span className="new">HTML</span>
                    <ul>
                      <li>
                        <a href="#">
                          <i class="fa-regular fa-copy"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="part-2">
                    <h3 className="product-title">{snippet.title}</h3>
                    <p className="product-desc">
                      {snippet.description.substring(0, 50)}
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          ))}

          {/* Single product */}
        </div>
      </div>
    </section>
  );
};

export default Content;
