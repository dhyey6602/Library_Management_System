import { LoanModel } from '@/modules/loan/loan-model';

const { fields } = LoanModel;

export default [
  fields.title,
  fields.member,
  fields.issueDate,
  fields.dueDate,
  fields.returnDate,
]; 