import { ICompanyProfileRepository } from '../../company-profile.repository'
import { ICompanyProfileGetDTO } from './company-profile-get.dto'

export class CompanyProfileGetService {
  constructor(private companyProfileRepository: ICompanyProfileRepository) {}

  async execute(userId: string): Promise<ICompanyProfileGetDTO | undefined> {
    return await this.companyProfileRepository.findByUserId(userId)
  }
}
