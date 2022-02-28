
type PremiumProps = {
  isPremium: boolean;
}

function Premium(props: PremiumProps): JSX.Element {
  const {isPremium} = props;

  if (isPremium) {
    return (
      <div className="place-card__mark">
        <span>Premium</span>
      </div>
    );
  }

  return (<> </>);
}

export default Premium;
