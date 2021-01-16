import Knex from 'knex';
import { IPersonProfile, PersonProfile } from './person-profile.model';

export interface IPersonProfileRepository {
  insert(personProfileData: IPersonProfile): Promise<PersonProfile>;
}

export class PersonProfileRepository implements IPersonProfileRepository {
  constructor(private database: Knex) {}

  async insert(personProfileData: IPersonProfile): Promise<PersonProfile> {
    const personProfile = new PersonProfile(personProfileData);

    // Insert person profile
    await this.database
      .insert({
        user_id: personProfile.userId,
        name: personProfile.name,
        born_date: personProfile.born_date,
        phone: personProfile.phone,
        address_state: personProfile.address_state,
        address_city: personProfile.address_city,
        pwd: personProfile.pwd,
      })
      .into('person_profile');

    return personProfile;
  }
}
