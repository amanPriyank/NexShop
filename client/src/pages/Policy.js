import React from "react";
import Layout from "./../components/Layout/Layout";

const Policy = () => {
  return (
    <Layout title={"Privacy Policy"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/contactus.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          
          <p>Welcome to Priyank's ecommerce app. We are committed to protecting the privacy and security of our customers and visitors. This Privacy Policy outlines how we collect, use, protect, and share personal information gathered through our websites.</p>
          <p>We use cookies and similar tracking technologies to enhance your browsing experience and collect information about website usage. You can set your browser to refuse all or some cookies, or to alert you when cookies are being sent.</p>
          <p>We implement a variety of security measures to maintain the safety of your personal information, including SSL encryption for data transmission and secure storage practices.</p>
          <p>If you have any questions about this Privacy Policy, please contact us at amanpriyank2@gmail.com </p>
          
        </div>
      </div>
    </Layout>
  );
};

export default Policy;