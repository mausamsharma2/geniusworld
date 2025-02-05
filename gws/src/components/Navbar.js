import React, { useEffect } from "react";

function Navbar() {
    useEffect(() => {
        const dropdown = document.querySelector(".nav-item.dropdown");
    
        if (dropdown) {
          dropdown.addEventListener("mouseover", function () {
            const dropdownMenu = this.querySelector(".dropdown-menu");
            dropdownMenu.classList.add("show");
          });
    
          dropdown.addEventListener("mouseleave", function () {
            const dropdownMenu = this.querySelector(".dropdown-menu");
            dropdownMenu.classList.remove("show");
          });
        }
      }, []);
      
        
  return (
    <nav className="navbar navbar-expand-lg bg-transparent fixed-top">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">GeniusWorld</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            
            <li className="nav-item dropdown">
              <a className="nav-link " href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Admission
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">Fee Structure</a></li>  
                <li><a className="dropdown-item" href="#">Online Admission Form</a></li>
                <li><a className="dropdown-item" href="#">Admission Policy</a></li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link " href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                About Us
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">History</a></li>  
                <li><a className="dropdown-item" href="#">Facalities</a></li>
                <li><a className="dropdown-item" href="#">Directors message</a></li>
              </ul>
            </li>
            <li className="nav-item dropdown">
          <a className="nav-link " href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Activities
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Academics</a></li>  
            <li><a className="dropdown-item" href="#">Events</a></li>
            <li><a className="dropdown-item" href="#">Functions</a></li>
          </ul>
        </li>
            
            <li className="nav-item dropdown">
              <a className="nav-link " href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Parents
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">Parents Suggestions</a></li>  
                <li><a className="dropdown-item" href="#">Sllybus</a></li>
                <li><a className="dropdown-item" href="#">Querries & complaints</a></li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link " href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                More
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">Gallery</a></li>  
                <li><a className="dropdown-item" href="#">Documentation</a></li>
                <li><a className="dropdown-item" href="#">Transfer Certificate</a></li>
              </ul>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Blogs</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Career</a>
            </li>
        </ul>
         
          <ul className="navbar-nav ms-auto">
         <li className="nav-item">
    <button autoFocus className="btn btn-success me-2">Login</button> 
  </li>
  <li className="nav-item">
    <button className="btn btn-dark">SignUp</button>
  </li>
</ul>

        </div>
      </div>
    </nav>
  );
}

export default Navbar;
