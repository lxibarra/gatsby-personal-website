import React from 'react'
import '../404.scss';
import Footer from '../components/footer/Footer';

const NotFoundPage = () => (
  <div className="text-center">
    <div className="parallax">
    <div id="group1" className="parallax__group">
      <div className="parallax__layer parallax__layer--base">
        <div className="title">
          <h2 className="title">404 <small>.catch</small></h2>
        </div>
      </div>
    </div>
    <div id="group2" className="parallax__group">
      <div className="parallax__layer parallax__layer--base">
        <div className="title"><a href="//doitfy.com">Go to home page instead</a></div>
      </div>
      <div className="parallax__layer parallax__layer--back">
        <div className="title">Are you Lost?</div>
      </div>
    </div>
  </div>
  <Footer></Footer>
</div>
);

export default NotFoundPage
