# groupomania_backend

Groupomania est un réseau social de partage de gifs.

Les technologies utilisées sont Node.js, MySQL et Vue.js.

Pour commencer, il faut cloner le repository du backend à cette adresse : https://github.com/hoarjer/groupomania_backend/
Et celui du front-end ici: https://github.com/hoarjer/Groupomania/

Dans un terminal de commande allez à la racine du répertoire du back-end et tappez : npm install

Connectez vous à votre MySQL et créez une nouvelle base de données.

Importez le fichier db_groupomania.sql qui se trouve à la racine du back-end, dans votre base de données.

Dans le fichier .env qui se trouve à la racine du back-end, renseignez les champs relatifs à votre MySQL, tel que
votre NAME, PASSWORD, puis le nom de votre nouvelle base de données dans DATABASE.

Dans le terminal de commande, dans le backend, tappez : nodemon serve

Ainsi vous serez connectés au serveur qui écoute le port 3000.

Toujours avec votre terminal de commande, allez dans groupomania_front, puis tappez : npm install -g @vue/cli
puis : npm install
et enfin : npm run serve


Ainsi vous serez connectés au serveur de developpement puis cliquez sur http://localhost:8080/

Pour l'admin, renseignez les informations suivantes:
email : PierrePaul@admin.com
mot de passe: AdminAdmin!1

De cette façon vous serez connectés à groupomania en tant qu'admin.
