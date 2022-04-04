import {TypedUseSelectorHook, useSelector} from 'react-redux';
import type {StateType} from '../types/stateType';

export const useAppSelector: TypedUseSelectorHook<StateType> = useSelector;
