import { Op } from "sequelize";

class ApiFeatures {
  model: any;
  queryStr: any;

  constructor(model: any, queryStr: any) {
    this.model = model;
    this.queryStr = queryStr;
  }

  async applyFilters() {
    const filters = { ...this.queryStr };
    const excludedFields = ["page", "sort", "limit", "fields", "keywords"];
    excludedFields.forEach((el) => delete filters[el]);

    if (filters.keywords) {
      const keywords = filters.keywords.split(",");
      const orConditions = keywords.map((keyword: string) => ({
        [Op.or]: [
          { columnName1: { [Op.like]: `%${keyword}%` } },
          { columnName2: { [Op.like]: `%${keyword}%` } },
        ],
      }));
      filters[Op.or] = orConditions;
      delete filters.keywords;
    }

    return filters;
  }

  async sort() {
    if (this.queryStr.sort) {
      const sortBy = this.queryStr.sort.split(",");
      return sortBy.map((item: string) => {
        if (item.startsWith("-")) {
          return [item.substring(1), "DESC"];
        } else {
          return [item, "ASC"];
        }
      });
    } else {
      return [["createdAt", "DESC"]];
    }
  }

  async fields() {
    if (this.queryStr.fields) {
      const fields = this.queryStr.fields.split(",");
      return fields;
    }
    return [];
  }

  async pagination() {
    const page = +this.queryStr.page || 1;
    const limit = +this.queryStr.limit || 10;
    const offset = (page - 1) * limit;

    return {
      offset,
      limit,
    };
  }

  async getPaginationInfo(totalCount: number) {
    const page = +this.queryStr.page || 1;
    const limit = +this.queryStr.limit || 10;
    const totalPages = Math.ceil(totalCount / limit);

    return {
      currentPage: page,
      totalPages: totalPages,
      totalResults: totalCount,
      resultsPerPage: limit,
    };
  }

  async run() {
    const filters = await this.applyFilters();
    const sorting = await this.sort();
    const selectedFields = await this.fields();
    const pagination = await this.pagination();

    const { count, rows } = await this.model.findAndCountAll({
      where: filters,
      order: sorting,
      attributes: selectedFields.length > 0 ? selectedFields : undefined,
      ...pagination,
    });

    const paginationInfo = await this.getPaginationInfo(count);

    return {
      data: rows,
      pagination: paginationInfo,
    };
  }
}

export default ApiFeatures;
