# Webpack React Express Boilerplate

### Ejecución de la Aplciación

Instlación de dependencias:

    $ npm install

Arrancar backend modo de desarrollo:

    $ npm run start:dev

Arrancar webpack modo producción:

    $ npm run webpack:build   

Arrancar webpack modo desarrollo:

    $ npm run webpack:dev

Solucionar problema nodemon ENOSPC

    $ echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p

---

Fuentes:

+ https://github.com/pepeul1191/webpack-aprendiendo3
+ https://www.valentinog.com/blog/babel/
+ http://file.allitebooks.com/20180830/Getting%20Started%20with%20React.pdf
+ https://es.reactjs.org/docs/react-dom.html
+ https://create-react-app.dev/docs/importing-a-component/