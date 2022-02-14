import Header from '../header/header';
import Main from '../main/main';

type PageProps = {
  className: string,
}

function Page(props: PageProps): JSX.Element {
  const {className} = props;

  return (
    <div className={`page ${className}`}>
      <Header />
      <Main className={'page__main--index'}/>
    </div>
  );
}

export default Page;
