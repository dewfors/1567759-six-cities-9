import React, {FormEvent, useEffect, useRef } from 'react';
import Header from '../../components/header/header';
import {useAppDispatch, useAppSelector} from '../../hooks';
import { loginAction } from '../../store/api-actions';
import { AuthData } from '../../types/user-data';
import {getRandomCity} from '../../utils/utils';
import {setCityName} from '../../store/reducers/city-reducer';
import {Link} from 'react-router-dom';
import browserHistory from '../../services/browser-history';
import {AppRoute, AuthorizationStatus} from '../../utils/const';
import { redirectToRoute } from '../../store/reducers/actions';


function PageLogin(): JSX.Element {

  const dispatch = useAppDispatch();

  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);

  useEffect(() => {
    if (authorizationStatus.status === AuthorizationStatus.Auth) {
      dispatch(redirectToRoute(AppRoute.Root));
    }
  }, [dispatch, authorizationStatus]);


  const randomCity = getRandomCity();

  const loginRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);

  const onSubmit = (authData: AuthData) => {
    dispatch(loginAction(authData));
  };

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if (loginRef.current !== null && passwordRef.current !== null) {
      onSubmit({
        login: loginRef.current.value,
        password: passwordRef.current.value,
      });
    }};

  return (
    <div className="page page--gray page--login">
      <Header />

      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">Sign in</h1>
            <form onSubmit={handleSubmit} className="login__form form" action="#" method="post">
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">E-mail</label>
                <input
                  ref={loginRef}
                  className="login__input form__input"
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                />
              </div>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">Password</label>
                <input
                  ref={passwordRef}
                  className="login__input form__input"
                  type="password"
                  name="password"
                  placeholder="Password"
                  required
                />
              </div>
              <button className="login__submit form__submit button" type="submit">Sign in</button>
            </form>
          </section>
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <Link
                className="locations__item-link"
                to={`/#${randomCity}`}
                onClick={(evt) => {
                  evt.preventDefault();
                  dispatch(setCityName(randomCity));
                  browserHistory.push(AppRoute.Root);
                }}
              >
                <span>{randomCity}</span>
              </Link>

            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default PageLogin;
