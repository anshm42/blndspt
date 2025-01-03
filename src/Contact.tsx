import NavbarShop from "./NavbarShop";
import Footer from "./Footer";
import "./Contact.css";

export default function Contact() {
  return (
    <>
      <NavbarShop />
      <div className="contactouter">
        <div className="contactcon">CONTACT</div>
        <div className="contactcon">
          <div className="contactinner">General inquiries:</div>
          <div>gordonz0913@gmail.com</div>
          <div className="contactinner">Wholesale inquiries:</div>
          <div>gordonz0913@gmail.com</div>

          <div className="contactinner">Customer Care:</div>
          <div>gordonz0913@gmail.com</div>

          <div className="contactinner">Press:</div>
          <div>gordonz0913@gmail.com</div>

          <div className="contactinner"></div>
        </div>
        <div className="contactcon"></div>
      </div>
      <Footer />
    </>
  );
}
