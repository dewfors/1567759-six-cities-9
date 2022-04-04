import {useDispatch} from 'react-redux';
import type {AppDispatch} from '../types/stateType';

export const useAppDispatch = () => useDispatch<AppDispatch>();
