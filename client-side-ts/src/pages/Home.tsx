import { Footer } from "@/components/common/Footer";
// import { Header } from "@/components/common/Header";
import { GetInvolvedSection } from "@/components/sections/get-involved/GetInvolvedSection";
import { InstitutionalIdentitySection } from "@/components/sections/institutional-identity/InstitutionalIdentitySection";

export const Home = () => {
  return (
    <div className="clear-fix min-h-screen flex flex-col">
      {/* <Header /> */}

      <InstitutionalIdentitySection department="uc" />
      <InstitutionalIdentitySection department="ccs" />
      <GetInvolvedSection />

      <Footer />
    </div>
  );
};
