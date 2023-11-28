'use client';
import { useSearchParams,usePathname } from 'next/navigation'

export interface AdoptionPageProps {
  params: {
    id: string;
  };
}

export const AdoptionPage = (props:AdoptionPageProps) => {
  return (
    <div>
      <h1>Adoption Page {props.params.id} </h1>
    </div>
  );
};

export default AdoptionPage;
