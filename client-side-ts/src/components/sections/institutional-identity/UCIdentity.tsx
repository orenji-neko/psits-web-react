import { InsitutionalIdentityContent } from "./InsitutionalIdentityContent";
import type { UCData } from "./InstitutionalIdentitySection";
import { Card } from "@/components/ui/card";

interface Props {
    data: UCData;
}

export const UCIdentity = ({ data }: Props) => {
    console.log(data)
    return (
        <section className="relative min-h-[60vh] md:min-h-[700px] bg-background z-20 flex items-center">
            <Card className="container border-none shadow-none bg-transparent">
                <InsitutionalIdentityContent
                    title={data.title}
                    subtitle={data.subtitle}
                    mission={data.mission}
                    vision={data.vision}
                    headerClassName="text-center"
                />
            </Card>

        </section>
    )
}
