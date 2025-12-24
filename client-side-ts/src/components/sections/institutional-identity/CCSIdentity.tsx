import type { CCSData } from "./InstitutionalIdentitySection";
import imageLogo from "@/assets/ccsidentity.png";
import announcement from "@/assets/announcement.png"
import { InsitutionalIdentityContent } from "./InsitutionalIdentityContent";
import { Card } from "@/components/ui/card";


interface Props {
  data: CCSData;
}

export const CCSIdentity = ({ data }: Props) => {
  return (
    <section className="relative min-h-[60vh] md:min-h-[700px] bg-background z-20 flex items-center">
      {/* Background Image - Subtle & Faded */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center select-none -z-10">
        <img
          src={imageLogo}
          alt=""
          className="w-[150%] h-[150%] md:w-[130%] md:h-[130%] object-cover opacity-50 md:opacity-100"
        />
      </div>

      <div className="container relative py-12 md:py-24 px-4 md:px-6 z-10">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-center lg:items-start">
          {/* Left Column: Title */}
          <Card className="w-full lg:flex-3 border-none shadow-none bg-transparent">
            <InsitutionalIdentityContent
              title={data.title}
              subtitle={data.subtitle}
              mission={data.mission}
              vision={data.vision}
              headerClassName="text-center lg:text-left"
            />
          </Card>

          {/* Right Column: Content */}
          <div className="relative w-full lg:flex-2 h-[400px] sm:h-[500px] lg:h-auto lg:self-stretch">

            {/* Clipped Background Area */}
            <div className="absolute inset-0 rounded-[2rem] overflow-hidden z-10 w-full h-full lg:translate-x-0">
              <div
                className="w-full h-full bg-black relative"
                style={{
                  clipPath: `polygon(
                    /* Top Left vertical edge */
                    0% 0%, 
                    0% calc(20% - 2rem),
                    
                    /* Top-Left Rounded Corner (Transition to indentation) */
                    /* Center at (2rem, 20% - 2rem) is wrong geometry, 
                       Corner is 'Bottom-Left' of the top block.
                       Center at (2rem, 20% - 2rem) gives x=0 at y=Cy.
                    */
                    0.1rem calc(20% - 1.4rem),
                    0.27rem calc(20% - 1.0rem),
                    0.59rem calc(20% - 0.54rem),
                    1.0rem calc(20% - 0.27rem),
                    1.46rem calc(20% - 0.07rem),
                    2.0rem 20%,

                    /* Indentation Channel */
                    3.0rem 20%,
                    3.0rem 80%,
                    2.0rem 80%,

                    /* Bottom-Left Rounded Corner (Transition from indentation) */
                    /* Corner is 'Top-Left' of the bottom block.
                       Center at (2rem, 80% + 2rem).
                    */
                    1.46rem calc(80% + 0.07rem),
                    1.0rem calc(80% + 0.27rem),
                    0.59rem calc(80% + 0.54rem),
                    0.27rem calc(80% + 1.0rem),
                    0.1rem calc(80% + 1.4rem),
                    0rem calc(80% + 2rem),

                    /* Bottom Left vertical edge */
                    0% 100%, 
                    100% 100%, 
                    100% 0%
                  )`
                }}
              >
                {/* Background Image */}
                <img
                  src={announcement}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Floating Card */}
            <div className="absolute left-[-20px] sm:left-[-40px] lg:left-[-100px] top-1/2 h-[60%] w-[70%] lg:w-[60%]
                  -translate-y-1/2 rounded-[2rem]
                  bg-primary border outline outline-background outline-[0.5rem]
                  z-20 shadow-xl overflow-hidden transition-all duration-300">

              {/* Inner Image */}
              <img
                src={announcement}
                alt=""
                className="relative z-40 w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
