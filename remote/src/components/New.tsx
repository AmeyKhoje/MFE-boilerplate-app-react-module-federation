import { useNavigate } from 'react-router-dom';

const New = () => {
  const navigate = useNavigate();
  return (
    <button onClick={() => (window.location.href = '/opportunity')}>
      Opportunity
    </button>
  );
};

export default New;
