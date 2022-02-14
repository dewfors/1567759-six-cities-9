import Citylist from '../page-home/city-list';
import HomeContent from '../page-home/home-content';

type MainProps = {
  className: string,
}

function Main(props: MainProps):JSX.Element {
  const {className} = props;

  return (
    <div className={`page__main ${className}`}>
      <h1 className="visually-hidden">Cities</h1>
      <Citylist />
      <HomeContent />
    </div>
  );
}

export default Main;
