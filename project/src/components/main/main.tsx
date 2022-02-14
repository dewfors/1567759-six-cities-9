import * as React from 'react';


type MainProps = {
  className: string,
  children: React.ReactNode,
}

function Main(props: MainProps):JSX.Element {
  const {className, children} = props;

  return (
    <div className={`page__main ${className}`}>
      {children}
    </div>
  );
}

export default Main;
