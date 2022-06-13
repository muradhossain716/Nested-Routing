import { useParams } from 'react-router-dom';

export default function SpecificData() {
    const {dataId}=useParams();
  return (
    <h2>Specific Data id : {dataId}</h2>
  )
}
