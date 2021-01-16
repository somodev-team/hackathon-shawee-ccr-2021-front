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
      })
      .into('person_profile');

    return personProfile;
  }
}
