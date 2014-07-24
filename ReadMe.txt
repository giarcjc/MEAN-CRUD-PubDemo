Nothing too crazy, just learning MongoDB, Express, Angular and Node

To Start the app: 

1. First you need to have MongoDB installed. Instructions here: http://docs.mongodb.org/manual/installation/ (see also http://docs.mongodb.org/manual/tutorial/getting-started/)

2. Then open a terminal window (cmd for windows), cd to your MongoDB directory's bin folder, and run "mongod".
Ex. (Windows): C:\Program Files\MongoDB\bin\mongod.exe
You should see a bunch of text along the lines of "connection accepted from [ip address #], etc.  as opposed to errors.

3. Next you need to run the mongo shell.  Open another terminal window, cd to the same MongoDB/bin dir, and run "mongo"
Ex. (Windows): C:\Program Files\MongoDB\bin\mongo.exe
You should see "MongoDB shell version [whatever version you've installed]"

4. Now open a third terminal window, cd to the MEAN-CRUD-PubDemo dir (where this ReadMe is) and type "node server"
You should see "listening on port8080". If this doesn't work make sure nothing else is using port 8080. 

5.  Now open a browser to http://localhost:8080.  You should see the app in all it's glory.  You can add a publication Title, Date and a short description, save it, see a count and a list of publications saved, and filter the list of publications based on characters in any of the three fields you entered.