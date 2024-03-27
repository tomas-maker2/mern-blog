import jwt from 'jsonwebtoken';
import { errorHandler } from './error.js';

export const verifyToken = (req, res, next) => {
  const token = req.cookies.access_token;
//   console.log("Token recibido:", token); // Agrega esta línea para imprimir el token recibido
  if (!token) {
    return next(errorHandler(401, 'Unauthorized'));
  }
  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) {
    //   console.error("Error al verificar el token:", err); // Agrega esta línea para imprimir el error de verificación
      return next(errorHandler(401, 'Unauthorized'));
    }
    // console.log("Token verificado, usuario:", user); // Agrega esta línea para imprimir el usuario extraído del token
    req.user = user;
    next();
  });
};
