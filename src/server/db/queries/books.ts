import { Query } from "..";
import { Books } from "../../../../types";

export const get_books = () => Query<Books[]>
    ('SELECT * FROM Books');
export const get_one_book = (id: number) => Query<Books[]>
    ('SELECT * FROM Books WHERE id=?', [id]);
export const post_book = (newBook: Books, id: number) => Query
    ('INSERT INTO Books SET ?', [newBook, id]);
export const edit_one_book = (editBook: Books, id: number) => Query
    ('UPDATE Books SET ? WHERE id=?', [editBook, id]);
export const delete_book = (id: number) => Query
    ('DELETE FROM Books WHERE id=?', [id]);