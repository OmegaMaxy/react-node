import axios from '../lib/axios';
import { Suggestion, Response } from '../types';

export default class SuggestionService {

  constructor() {
    
  }

  public getAll = () => axios.get<Suggestion[]>('/suggestion');

  public get = (id: number) => axios.get<Suggestion>(`/suggestio/${id}`);

  public getByName = (name: string) => axios.get<Suggestion>(`/suggestion/name/${name}`);

  public add = (suggestion: Suggestion) => axios.post<Response>('/suggestion', suggestion);

  public update = (id: number, data: any) => axios.put<Response>(`/suggestion/${id}`, {data: data});
}
/*
const SuggestionService = {
    getAll,
    getUser,
    getUserByName,
    addUser,
    loginUser,
    updateUserStatus,
    getFriendsFromUserByName,
    addFriendToUser,
};*/

//export default SuggestionService;
