import { BookModel } from '@/modules/book/book-model';

const { fields } = BookModel;

export default [
  fields.title,
  fields.isbn,
  fields.author,
  fields.numberOfCopies,
  fields.images,
];