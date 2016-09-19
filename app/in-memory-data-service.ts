import { InMemoryDbService } from 'angular2-in-memory-web-api'
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let heroes = [
      {id: 11, name: 'Mr. Cumin'},
      {id: 12, name: 'Hammer Thyme'},
      {id: 13, name: 'Sgt. Pepper'},
      {id: 14, name: 'Gochugaru!!'},
      {id: 15, name: 'Rosemary\'s Baby'},
      {id: 16, name: 'The Oregano Crue'},
      {id: 17, name: 'Garlic Breath'},
      {id: 18, name: 'Dr. Licorice'},
      {id: 19, name: 'Cardamom'},
      {id: 20, name: 'Tamarind'}
    ]
    return {heroes}
  }
}
