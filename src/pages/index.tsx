import Navbar from "../components/AuthNavbar";
import Footer from "../components/Footer";
import StepFive from "../components/Steps/StepFive";
import StepFour from "../components/Steps/StepFour";
import StepOne from "../components/Steps/StepOne";
import StepSix from "../components/Steps/StepSix";
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
