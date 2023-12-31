import { Router } from 'express';
import sessionsRouter, { logout } from '../api/sessions.router.js';


const router = Router();

//Acceso público y privado
const publicAccess = (req, res, next) => {
    next();
}

const privateAccess = (req, res, next) => {
    if(!req.session.user) return res.redirect('/login');
    next();
}

router.get('/register', publicAccess, (req, res) => {
    res.render('register');
});

router.get('/reset', publicAccess, (req, res) => {
    res.render('reset');
});

router.get('/login', publicAccess, (req, res) => {
    res.render('login');
});

router.get('/', publicAccess, (req, res) => {
    res.render('login');
});

router.get('/chat', (req, res) => {
    res.render("chat");
});

export default router;