import { validadeObject } from '../../../../utils/validation-functions';
import { IPersonProfile, PersonProfile } from '../../person-profile.model';
import { IPersonProfileRepository } from '../../person-profile.repository';
import { IPersonProfileUpdateDTO } from './person-profile-update.dto';

export class PersonProfileUpdateService {
  constructor(private personProfileRepository: IPersonProfileRepository) {}

  async execute(data: IPersonProfileUpdateDTO): Promise<IPersonProfile> {
    try {
      // Validate Data
      const personProfile = new PersonProfile(data);
      await validadeObject(personProfile);

      // To Do (Update or Insert)
      const createdPersonProfile = await this.personProfileRepository.insert(
        personProfile
      );
      return createdPersonProfile;
    } catch (error) {
      throw error;
    }
  }
}
