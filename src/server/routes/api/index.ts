import * as express from 'express';
import * as passport from 'passport';
import booksRouter from './books';
import usersRouter from './users';
import categoriesRouter from './categories';

const router = express.Router();

router.use('/books', booksRouter);
router.use('/users',passport.authenticate('jwt'), usersRouter);
router.use('/categories',passport.authenticate('jwt'), categoriesRouter);

export default router;