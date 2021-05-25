import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
    <div className="Footer" id="footer">
    <footer class="site-footer">
      <div class="container">
        <div class="row">
          <div class="col-sm-12 col-md-6">
            <h6>⦁ ჩვენ შესახებ</h6>
            <p class="text-justify">
            მოგესალმებით, EF academy არის არასამთავრობო ორგანიზაცია „განათლება თავისუფლებისთვის“ შვილობილი კომპანია.
            ჩვენს ორგანიზაციაში უკვე უამრავი ტრენინგი, მასტერკლასი თუ პროფესიული კურსი წარმატებით ჩატარდა, 
            შესაბამისად გადავწყვიტეთ მივიღოთ აკადემიის ფორმა და სასწავლო კურსები გავხადოთ უფრო ინტენსიური. </p>
          </div>

          <div class="col-xs-6 col-md-3">
            <h6>⦁	კონტაქტი</h6>
            <ul class="footer-links">
            effgeorgia@gmail.com<br />
            +995 599 990 265
            </ul>
          </div>

        </div>
      </div>
      <div class="container">
        <div class="row">
          <div class="col-md-8 col-sm-6 col-xs-12">
            <p class="copyright-text">2021 &copy; All Rights Reserved by 
         <Link to="https://www.facebook.com/sichinavailia/"> Ilia Sichinava</Link>
            </p>
          </div>

          <div class="col-md-4 col-sm-6 col-xs-12">
            <ul class="social-icons">
              <li><a class="facebook" href="https://www.facebook.com/EFFgeorgia"><i class="fa fa-facebook"></i></a></li>
              <li><a class="twitter" href="https://www.instagram.com/effgeorgia/"><i class="fa fa-instagram"></i></a></li>
              <li><a class="linkedin" href="https://www.linkedin.com/company/education-for-freedom/"><i class="fa fa-linkedin"></i></a></li>   
            </ul>
          </div>
        </div>
      </div>
        </footer>        
    </div>
    );
}

export default Footer;