import { useEffect } from "react";

const Home = () => {
    const fullHeight = () => {
        const elements = document.querySelectorAll('.js-fullheight');
  
        const setFullHeight = () => {
          const windowHeight = window.innerHeight || document.documentElement.clientHeight;
          elements.forEach(element => {
            element.style.height = windowHeight + 'px';
          });
        };
  
        setFullHeight();
  
        window.addEventListener('resize', setFullHeight);
      };

      function handleNav() {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('active');

      console.log('click')
      }

    useEffect(() => {
        
      
          fullHeight();


    },[])

    return(
        <>


<div className="wrapper d-flex align-items-stretch js-fullheight" >
  <nav id="sidebar" className="active ">
    <h1><a href="index.html" className="logo">Snippet.</a></h1>
    <ul className="list-unstyled components mb-5">
      <li className="active">
      <h5>Categories</h5>
    <div className="form-check">
        <input className="form-check-input" type="checkbox" defaultValue id="flexCheckDefault" />
        <label className="form-check-label" htmlFor="flexCheckDefault">
            HTML
        </label>
    </div>
    <div className="form-check">
        <input className="form-check-input" type="checkbox" defaultValue id="flexCheckDefault" />
        <label className="form-check-label" htmlFor="flexCheckDefault">
            SCSS
        </label>
    </div>
    <div className="form-check">
        <input className="form-check-input" type="checkbox" defaultValue id="flexCheckDefault" />
        <label className="form-check-label" htmlFor="flexCheckDefault">
            JAVASCRIPT
        </label>
    </div>
    <div className="form-check">
        <input className="form-check-input" type="checkbox" defaultValue id="flexCheckDefault" />
        <label className="form-check-label" htmlFor="flexCheckDefault">
            PHP
        </label>
    </div>
      </li>
    </ul>
  </nav>
  {/* Page Content  */}
  <div id="content" className="p-4 p-md-5">
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <button type="button" onClick={handleNav} id="sidebarCollapse" className="btn btn-primary">
          <i className="fa fa-bars" />
          <span className="sr-only">Toggle Menu</span>
        </button>
        
      </div>
    </nav>
    <h2 className="mb-4">Sidebar #07</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
  </div>
</div>


        </>
    )
}

export default Home;