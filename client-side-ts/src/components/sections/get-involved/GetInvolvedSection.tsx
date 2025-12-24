import { Card, CardDescription, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { Bell, Code2, Users2, ArrowRight } from 'lucide-react';
import { GetInvolvedCard } from './GetInvolvedCard';

export const GetInvolvedSection = () => {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden bg-background">
      {/* Background Ornamentation */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none -z-10">
        <div className="absolute -top-[10%] -left-[5%] w-[40%] h-[40%] bg-primary/5 blur-[120px] rounded-full" />
        <div className="absolute -bottom-[10%] -right-[5%] w-[30%] h-[30%] bg-primary/10 blur-[100px] rounded-full" />
      </div>

      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Header Area */}
          <div className="lg:col-span-5 space-y-8 sticky lg:top-32">
            <div className="space-y-4">
              <h2
                className={cn(
                  'text-sm font-bold uppercase tracking-[0.2em] text-primary/80'
                )}
              >
                Join the Community
              </h2>
              <h1
                className={cn(
                  'text-4xl sm:text-5xl md:text-6xl lg:text-7xl',
                  'font-black uppercase tracking-tighter leading-[0.9]',
                  'bg-gradient-to-br from-foreground via-foreground to-foreground/70 bg-clip-text text-transparent'
                )}
              >
                Get <br className="hidden md:block" /> Involved
              </h1>
            </div>

            <p className="text-lg text-muted-foreground max-w-md leading-relaxed">
              Learning, collaborating, and connecting within the organization.
              Join our community and shape the future of technology together.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <div className="flex -space-x-3 overflow-hidden">
                {[1, 2, 3, 4].map(i => (
                  <div
                    key={i}
                    className="inline-block h-10 w-10 rounded-full ring-2 ring-background bg-muted border border-border"
                  />
                ))}
              </div>
              <p className="flex items-center text-sm font-medium text-muted-foreground">
                <span className="text-foreground font-bold mr-1">500+</span> ICT
                Students already joined
              </p>
            </div>
          </div>

          {/* Cards Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <GetInvolvedCard
              title="Announcements"
              description="Don't miss out! Stay updated on PSITS-hosted workshops, hackathons, and more events. Follow us for more details!"
              icon={Bell}
              className="h-full"
            />
            <GetInvolvedCard
              title="Collaborations"
              description="Unleash your potential! Aspiring Developers, collaborate with us on cutting-edge projects on GitHub."
              icon={Code2}
              className="h-full"
            />
            <GetInvolvedCard
              title="Social Connections"
              description="Build friendships, find mentors, and grow your network. Connect with like-minded peers and future colleagues!"
              icon={Users2}
              className="sm:col-span-2"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
