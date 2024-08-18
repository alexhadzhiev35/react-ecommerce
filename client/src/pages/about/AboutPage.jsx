import { Link } from "react-router-dom";
import "./AboutPage.css";

const AboutPage = () => {
  return (
    <>
      <div className="about-page">
        <h1>About TrendyTech</h1>
        <p>
          Welcome to <strong>TrendyTech</strong>—your one-stop solution for
          cutting-edge tech products. We pride ourselves on being more than just
          a web shop. At TrendyTech, we are committed to providing innovative
          solutions that meet the dynamic needs of our customers.
        </p>

        <section className="mission">
          <h2>Our Mission</h2>
          <p>
            Our mission is to make the latest and greatest in technology
            accessible to everyone. We carefully curate our selection of
            products to ensure that every item we sell meets our high standards
            of quality and innovation. Whether you’re a tech enthusiast, a
            business professional, or someone just looking to upgrade their
            devices, we have something for you.
          </p>
        </section>

        <section className="values">
          <h2>Our Values</h2>
          <ul>
            <li>
              <strong>Innovation:</strong> We constantly seek out the latest
              trends and innovations in the tech world to bring you products
              that make life easier, more productive, and more enjoyable.
            </li>
            <li>
              <strong>Quality:</strong> We only offer products that we believe
              in—products that are built to last and deliver outstanding
              performance.
            </li>
            <li>
              <strong>Customer Focus:</strong> Your satisfaction is our top
              priority. We strive to provide an excellent shopping experience,
              from easy navigation on our site to reliable customer support.
            </li>
            <li>
              <strong>Trust:</strong> We believe in building long-term
              relationships with our customers based on trust and transparency.
              That’s why we’re committed to offering fair prices, honest
              descriptions, and a no-nonsense return policy.
            </li>
          </ul>
        </section>

        <section className="why-us">
          <h2>Why Choose TrendyTech?</h2>
          <p>
            At TrendyTech, we don’t just sell products—we offer solutions.
            Whether you’re looking to upgrade your office with the latest tech
            or find the perfect gift for a tech-savvy friend, our team of
            experts is here to help. We provide personalized recommendations,
            exclusive deals, and a seamless shopping experience from start to
            finish.
          </p>
          <p>
            We also understand that technology is an ever-evolving field. That’s
            why we offer a wide range of products that cater to different needs,
            from budget-friendly gadgets to high-end devices. Our inventory is
            constantly updated to reflect the latest advancements, so you can
            always find the most current and innovative products on the market.
          </p>
        </section>

        <section className="contact-info_about">
          <h2>Get in Touch</h2>
          <p>
            Have questions or need help finding the right product? Our customer
            support team is here to assist you.{" "}
            <Link to="/contact">Contact us</Link> today to learn more about how
            we can help you stay ahead of the tech curve.
          </p>
        </section>
      </div>
    </>
  );
};

export default AboutPage;
