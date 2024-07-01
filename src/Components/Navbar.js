import '../App.css'; // Adjust the path based on your actual folder structure
import News from './News'; // Corrected import path for News component

import React, { Component } from 'react';

export default class Navbar extends Component {
  render() {
    return (
      <>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">NewsPanda</a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="https://www.moneycontrol.com/news/business/">Business</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="https://www.hindustantimes.com/entertainment/latest-entertainment-today-live-updates-july-1-2024-101719773925120.html">Entertainment</a>
                </li>
              
                <li className="nav-item">
                  <a className="nav-link" href="https://www.healthline.com/health-news">Healthcare</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="https://www.livemint.com/sports">Sports</a>
                </li>
              </ul>
              {/* <form className="d-flex" role="search">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-outline-success" type="submit">Search</button>
              </form> */}
            </div>
          </div>
        </nav>
      </>
    );
  }
}

// import '../App.css'; // Adjust the path based on your actual folder structure

// import React,{Component} from 'react';

// export default class Navbar extends  Component {
//     render()
//     {
//   return (
//     <>
//     <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
//       <div className="container-fluid">
//         <La className="navbar-brand" to="#">NewsPanda</a>
//         <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//           <span className="navbar-toggler-icon"></span>
//         </button>
//         <div className="collapse navbar-collapse" id="navbarSupportedContent">
//           <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//             <li className="nav-item">
//               <a className="nav-a href active" aria-current="page" href="/">Home</a>
//             </li>
            
//             <li className="nav-item"><a href className="nav-a href" to="/about">Business</a></li>
//             <li className="nav-item"><a href className="nav-a href" to="/entertainment">Entertainment</a ></li>
//             <li className="nav-item"><a href className="nav-a href" to="/general">General</a></li>
//             <li className="nav-item"><a href className="nav-a href" to="/health"> Healthcare</a></li>
//             <li className="nav-item"><a href className="nav-a href" to="/sports">Sports Facility</a></li>
            
//           </ul>
//           {/* <form className="d-flex" role="search">
//             <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
//             <button className="btn btn-outline-success" type="submit">Search</button>
//           </form> */}
//         </div>
//       </div>
//     </nav>
//     </>
//   );
// }
// }


// // import React, { Component } from 'react';
// //  // Adjust the path based on your actual folder structure
// // import News from './Components/News';
// // import {
// //     BrowserRouter as Router,
// //     Routes,
// //     Route
// // } from "react-router-dom";

// // export default class App extends Component {
// //   render() {
// //     return (
// //       <div>
// //         <Router>
// //           <Navbar />
// //           <Routes>
// //             <Route path="/" element={<News key="general" pageSize={5} country="in" category="general" />} />
// //             <Route path="/business" element={<News key="business" pageSize={5} country="in" category="business" />} />
// //             <Route path="/entertainment" element={<News key="entertainment" pageSize={5} country="in" category="entertainment" />} />
// //             <Route path="/general" element={<News key="general" pageSize={5} country="in" category="general" />} />
// //             <Route path="/health" element={<News key="health" pageSize={5} country="in" category="health" />} />
// //             <Route path="/science" element={<News key="science" pageSize={5} country="in" category="science" />} />
// //             <Route path="/sports" element={<News key="sports" pageSize={5} country="in" category="sports" />} />
// //             <Route path="/technology" element={<News key="technology" pageSize={5} country="in" category="technology" />} />
// //           </Routes>
// //         </Router>
// //       </div>
// //     );
// //   }
// // }

