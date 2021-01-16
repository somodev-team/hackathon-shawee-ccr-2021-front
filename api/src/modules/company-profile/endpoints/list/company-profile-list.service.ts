import { IPaginateParams, IWithPagination } from 'knex-paginate'
import { ICompanyProfileRepository } from '../../company-profile.repository'
import { ICompanyProfileListDTO } from './company-profile-list.dto'

export class CompanyProfileListService {
  constructor(private companyProfileRepository: ICompanyProfileRepository) {}

  async execute(
    userId: string,
    params: IPaginateParams
  ): Promise<IWithPagination<ICompanyProfileListDTO[]>> {
    const result = await this.companyProfileRepository.list(params)
    return result
  }
}
