import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import SmallBanner from "../components/SmallBanner";
import TextAndImage from "../components/TextAndImage";
import SectionTitle from "../components/SectionTitle";
import SectionItems from "../components/SectionItems";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";
import DeveloperSignature from "../components/DeveloperSignature";
function Home() {
  return (
    <div className="bg-gray-50">
      <div className="h-screen">
        <Navbar />
        <Banner />
      </div>
      <SmallBanner message="Lawn care that's is a cut above the rest..." />
      <div id="about">
        <TextAndImage />
      </div>

      <div>
        <hr />
      </div>
      <div id="services"></div>
      <SectionTitle
        title="SERVICES"
        subtitle="From meticulous mowing to expert landscaping, our services guarantee a vibrant and well-maintained lawn you'll love."
      />
      <SectionItems />
      <div className="bg-gray-900" id="contact">
        <SectionTitle
          title="CONTACT US"
          subtitle="Feel free to reach out to us with any questions or inquiries. We're here to help!"
          color="white"
        />
        <ContactSection />
        <Footer />
      </div>
      <DeveloperSignature />
    </div>
  );
}

export default Home;
