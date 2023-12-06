import Navbar from "../components/AuthNavbar";
import Footer from "../components/Footer";
import StepOne from "../components/Steps/StepOne";
import StepThree from "../components/Steps/StepThree";
import StepTwo from "../components/Steps/StepTwo";

function LandingPage() {
  return (
    <>
      <Navbar />
      <main>
        <StepOne />
        <StepTwo />
        <StepThree />
        {/* <StepFour /> */}
        {/* <StepFive /> */}
        {/* <StepSix /> */}
      </main>
      <Footer />
    </>
  );
}

export default LandingPage;
