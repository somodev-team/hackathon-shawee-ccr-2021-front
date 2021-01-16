import Knex from 'knex'
import { validadeObject } from '../../utils/validation-functions'
import { ICompanyProfile, CompanyProfile } from './company-profile.model'

export interface ICompanyProfileRepository {
  findByUserId(userId: string): Promise<CompanyProfile | undefined>
  insert(companyProfileData: ICompanyProfile): Promise<CompanyProfile>
  update(companyProfileData: ICompanyProfile): Promise<CompanyProfile>
}

export class CompanyProfileRepository implements ICompanyProfileRepository {
  constructor(private database: Knex) {}

  companyProfileToTableObject(companyProfile: CompanyProfile) {
    return {
      user_id: companyProfile.userId,
      name: companyProfile.name,
      bio: companyProfile.bio,
      phone: companyProfile.phone,
      address_state: companyProfile.addressState,
      address_city: companyProfile.addressCity,
      areas_of_actuation: JSON.stringify(companyProfile.areasOfActuation),
    }
  }

  async findByUserId(userId: string): Promise<CompanyProfile | undefined> {
    const result = await this.database
      .select('*')
      .from<CompanyProfile>('company_profile')
      .where('user_id', userId)
      .first()
    return result
  }

  async insert(companyProfileData: ICompanyProfile): Promise<CompanyProfile> {
    const companyProfile = new CompanyProfile(companyProfileData)

    await validadeObject(companyProfile)

    await this.database
      .insert(this.companyProfileToTableObject(companyProfile))
      .into('company_profile')

    return companyProfile
  }

  async update(companyProfileData: ICompanyProfile): Promise<CompanyProfile> {
    const companyProfile = new CompanyProfile(companyProfileData)

    await validadeObject(companyProfile)

    await this.database('company_profile')
      .update(this.companyProfileToTableObject(companyProfile))
      .where({
        user_id: companyProfile.userId,
      })

    return companyProfile
  }
}
