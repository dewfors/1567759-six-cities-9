import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';
import type {StateType, AppDispatch} from '../types/stateType';

export const useAppDispatch = () => useDispatch<AppDispatch>();

export const useAppSelector: TypedUseSelectorHook<StateType> = useSelector;
