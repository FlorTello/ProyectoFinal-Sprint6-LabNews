'use strict';

const Footer = () => {
  const contenedor = $(`<footer class="container-fluid footer">
                    <div class="footer__container container">
                        <div class="col-xs-4">
                          <p>© Editado por Laboratoria
                              Av. José Pardo #601 Lima 1 Perú
                              Copyright © Laboratoria.la
                              Todos los derechos reservados.</p>
                        </div>
                        <div class="col-xs-4">
                          <p>DIRECTOR GENERAL:
                              Francisco Miró Quesada Cantuarias 
                              DIRECTOR PERIODÍSTICO:
                              Fernando Berckemeyer Olaechea 
                              SUSCRIPCIONES:
                              suscriptores@comercio.com.pe 
                              PUBLICIDAD ONLINE:
                              fonoavisos@comercio.com.pe 
                              CLUB EL COMERCIO:
                              clubelcomercio@comercio.com.pe
                              Compromiso de Autorregulación Comercial</p>
                        </div>
                        <div class="col-xs-4">
                          <p>TÉRMINOS Y CONDICIONES DE USO
                            TRABAJA CON NOSOTROS
                            LIBRO DE RECLAMACIONES
                            SEDES PRINCIPALES
                            POLÍTICAS DE PRIVACIDAD
                            Síguenos
                            </p>
                        </div>
                </div>
          </footer>`);
  return contenedor;
}
