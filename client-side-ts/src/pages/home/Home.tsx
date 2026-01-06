import { HomeBanner } from './sections/HomeBanner';
import { CoreValuesSection } from './sections/CoreValuesSection';
import { DeansMessageSection } from './sections/DeansMessageSection';
// import { Header } from "@/components/common/Header";
import { GetInvolvedSection } from './sections/GetInvolvedSection';
import GoalsSection from './sections/GoalSection';
import { InstitutionalIdentitySection } from './sections/InstitutionalIdentitySection';

export const Home = () => {
  return (
    <>
      {/* <Header /> */}
      <HomeBanner />
      <DeansMessageSection />
      <InstitutionalIdentitySection department="uc" />
      <InstitutionalIdentitySection department="ccs" />
      <GoalsSection />
      <CoreValuesSection />
      <GetInvolvedSection />
    </>
  );
};
