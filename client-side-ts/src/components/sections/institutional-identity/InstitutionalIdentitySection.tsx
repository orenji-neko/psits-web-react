import { CCSIdentity } from './CCSIdentity';
import { UCIdentity } from './UCIdentity';

interface Props {
  department: 'uc' | 'ccs';
}

export interface UCData {
  title: string;
  subtitle: string;
  stats: { value: string; label: string }[];
  mission: string;
  vision: string;
}

export interface CCSData {
  title: string;
  subtitle: string;
  mission: string;
  vision: {
    intro: string;
    points: string[];
  };
}

export interface InstitutionalIdentityData {
  uc: UCData;
  ccs: CCSData;
}

export const institutionalIdentityData: InstitutionalIdentityData = {
  uc: {
    title: 'University of Cebu',
    subtitle: 'Mission & Vision',
    stats: [
      { value: '60,000+', label: 'students' },
      { value: '1964', label: 'founded' },
      { value: '9', label: 'departments' },
    ],
    mission:
      'The University offers affordable and quality education responsive to the demands of local and international communities.',
    vision:
      'Democratize quality education. Be the visionary and industry leader. Give hope and transform lives.',
  },
  ccs: {
    title: 'College of Computer Studies',
    subtitle: 'Mission & Vision',
    mission:
      'We envision being the hub of quality, globally-competitive and socially-responsive information technology education.',
    vision: {
      intro: 'We commit to continuously:',
      points: [
        'Offer relevant programs that mold well-rounded computing professionals',
        'Engage in accreditation and quality standards;',
        'Facilitate in building an IT-enabled nation.',
      ],
    },
  },
};

export const InstitutionalIdentitySection = ({ department }: Props) => {
  if (department === 'uc') {
    return <UCIdentity data={institutionalIdentityData.uc} />;
  }
  return <CCSIdentity data={institutionalIdentityData.ccs} />;
};
