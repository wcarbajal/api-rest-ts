import { Request, Response, Router } from "express";
import { readdirSync } from "fs";

const PATH_ROUTER = `${ __dirname }`;
const router = Router();

const cleanFileName = ( fileName: string ) => {
  return fileName.replace( '.ts', '' );
};

// Cargador dinamico de rutas
readdirSync( PATH_ROUTER ).forEach( file => {
  const cleanName = cleanFileName( file );
  if ( cleanName !== 'index' ) {
    import(`./${cleanName}`).then( (moduleRouter) => {
      console.log( `Cargando ruta: ${cleanName}` );
      router.use(`/${ cleanName}`, moduleRouter.router );
    })
        
  }
} );
/* 
router.get('/', (req: Request, res: Response) => {
  res.send({data: 'aqui van los modelos del index'})
}) */

export { router };