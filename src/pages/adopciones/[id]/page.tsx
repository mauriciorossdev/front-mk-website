'use client';
import { useSearchParams,usePathname } from 'next/navigation'


export const AdoptionPage = (props) => {
    console.log(props.params.id)
  return (
    <div>
      <h1>Adoption Page {props.params.id} </h1>
    </div>
  );
};

export default AdoptionPage;
