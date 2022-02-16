import React from 'react';
import Header from '../header/header';

type PageProps = {
  className: string,
  children: React.ReactNode,
}

function Page(props: PageProps): JSX.Element {
  const {className, children} = props;

  return (
    <div className={`page ${className}`}>
      <Header />
      {children}
    </div>
  );
}

export default Page;
