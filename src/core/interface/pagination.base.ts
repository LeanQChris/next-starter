export interface PaginationMetaDTO{
  limit:number;
  total:number;
  page_total:number;
  total_pages:number;
  next?:number|null,
  previous?:number|null,
  page?:number|null,
  onPageChange?:()=>{} |null
}