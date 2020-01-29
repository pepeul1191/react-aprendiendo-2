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

Video Tutorial:

    https://www.youtube.com/watch?v=QFaFIcGhPoM&list=PLC3y8-rFHvwgg3vaYJgHGnModB54rxOk3&index=1

Estructura de Folder:

    https://github.com/electron-react-boilerplate/electron-react-boilerplate/tree/master/app
    https://hackernoon.com/structuring-projects-and-naming-components-in-react-1261b6e18d76

React router

    https://www.youtube.com/watch?v=QUz3k2O3ZJU

Visual Studio Code - Extensions:

    https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets

### Migraciones

Migraciones con DBMATE - accesos:

    $ dbmate -d "db/migrations" -e "DB" new <<nombre_de_migracion>>
    $ dbmate -d "db/migrations" -e "DB" up
    $ dbmate -d "db/migrations" -e "DB" new <<nombre_de_migracion>>
    $ dbmate -d "db/migrations" -e "DB" up
    $ dbmate -d "db/migrations" -e "DB" rollback

---

Fuentes:

+ https://github.com/pepeul1191/webpack-aprendiendo3
+ https://www.valentinog.com/blog/babel/
+ http://file.allitebooks.com/20180830/Getting%20Started%20with%20React.pdf
+ https://es.reactjs.org/docs/react-dom.html
+ https://create-react-app.dev/docs/importing-a-component/
+ https://react-bootstrap.github.io/getting-started/introduction/
+ https://reacttraining.com/react-router/web/guides/quick-start
+ https://www.youtube.com/watch?v=QUz3k2O3ZJU
+ https://www.valentinog.com/blog/await-react/
+ https://es.reactjs.org/docs/typechecking-with-proptypes.html