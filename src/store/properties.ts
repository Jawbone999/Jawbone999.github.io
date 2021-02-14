/* eslint-disable no-param-reassign */

import { MutationTree, ActionTree } from 'vuex';
import { AxiosRequestConfig } from 'axios';
import { State } from './types';
import { axiosCall } from '../services/axiosService';

export const state: State = {
  error: false,
  errorMessage: '',
  isLoading: false,
};

export const mutations: MutationTree<State> = {
  updateError(theState: State, payload: string) {
    theState.error = true;
    theState.errorMessage = payload;
  },
  clearError(theState: State) {
    theState.error = false;
    theState.errorMessage = '';
  },
  updateLoading(theState: State, payload: boolean) {
    theState.isLoading = payload;
  },
};

export const actions: ActionTree<State, State> = {

};
