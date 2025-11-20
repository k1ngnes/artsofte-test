export type TSorting = {
  sortType: string;
  order: 'asc' | 'desc';
}

export type TCompanyItem = {
  id: number;
  uid: string;
  business_name: string;
  suffix: string;
  industry: string;
  type: string;
  catch_phrase: string;
  phone_number: string;
  full_address: string;
  lattitude: number;
  longitude: number;
  logo: string;
};

export type TCompanyItemRequest = {
  page: number;
  per_page: number;
  count?: number;
  limit?: number;
  q?: string;
  industry?: string;
  company_type?: string;
  sort_by: string;
  sort_order: string;
};

export type TCompanyItemResponse = {
  data: TCompanyItem[];
  page: number;
  per_page: number;
  offset: number;
  limit: number;
  total: number;
  has_prev: boolean;
  has_next: boolean;
};
