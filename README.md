# Getting started

1) npm install
2) npm start

## To deploy to shared hosting site
1) change homepage url to your own domain in package.json
2) npm run build
3) use ftp manager such as FileZilla to upload the all the files in build to webserver
4) edit .htmaccess file with the following code
<IfModule mod_rewrite.c>

  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteCond %{REQUEST_FILENAME} !-l
  RewriteRule . /index.html [L]

</IfModule>

Note : ./index.html if the index.html if your file is in root directory, else do add ./foldername/index.html

Demo url : https://magna-somnium.com/jj/
