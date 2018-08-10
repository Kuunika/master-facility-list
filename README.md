# Master Health Facility Register

At its very core, the MFL is a comprehensive database of all the Health Facilities in the country (Malawi). From Private Hospitals to Village Clinics, the system keeps track of resources, utilities and services available in each one of these facilities just to mention a few.

This project is the first deliverable under the [Kuunika Data For Action](http://www.kuunika.org/) Initiative and aims at serving the general users, District Health Officers and any other stakeholders in the Malawi Healthcare Sector. Additionally, the facilities and their information will be available via a REST API for other services and systems to consume, such as [Baoabab Health Trust](http://baobabhealth.org/) Electronic Management Record Systems (EMRs) or the District Health Information System (DHIS).

# Dependancies

* [NodeJS > v8.11.3](https://nodejs.org/en/download/ "node")
* [MySQL v5.5](https://dev.mysql.com/downloads/mysql/ "mysql")

# Setup

The project is generated by [LoopBack](http://loopback.io), a rapid API development framework. For more information, see the Loopback documentation. There is a `client-src` directory that has a [create-react-app](https://github.com/facebookincubator/create-react-app) setup from which the User Interface will be built. The idea is to build static files from `create-react-app` into the `client` folder so that the API and front-end can run on the same node server.

# Installation

## Step 1 clone

Clone this repository into your local directory, Use the command below:

```sh
# Clone project to a computer
git clone https://github.com/BaobabHealthTrust/master-facility-list

# Navigate to the project root directory
cd master-facility-list
```

## Step 2 dependancies

Install all the dependancies for the main (backend project).
```sh
# install backend dependancies
npm install
```

### setup front-end dependancies

set up the frontend dependancies by following the commands bellow:

```sh
# navigate to the frontend directory
cd client-src

# install frontend dependancies
npm install

# navigate back to root directory
cd ..
```

NOTE: use `sudo npm install` if you have permission issues.
This applies to both the backend and the frontend.

## Step 3 tests

Run the tests and make sure they are all passing:
```sh
# Run tests
npm test
```
If they are not passing, please check whether your environment has all the dependancies installed correctly.

## Step 4 database

Create a schema in mysql database called `mflApi`: <br />

```sh
# connect to mysql database
# replace 'user' with your mysql user name in the command bellow
mysql -u user -p

# enter the specified user password in the prompt

# create the database
mysql> CREATE DATABASE mflApi;


# exist from mysql
mysql> \q
```

Create a `.env` file with the contents of your .env.example file.

```sh
# copy the .env.example to .env file
cp .env.example .env
```

Modify the `.env` file and make sure it reflects your MySQL Database Settings. 
Furthermore, set the port  and the host of the server in the same file `.env` <br />

Run the database migration by install a loopback-migration-tool, i.e `npm i -g loopback-migration-tool`
followed by running the migration., i.e `lb-migration migrate`.

```sh
# set node environment to staging
export NODE_ENV=staging

# install the migration tool
sudo npm i -g loopback-migration-tool

# run the migration
lb-migration migrate
```

## Step 5 User

Run `node seed.js` to generate an admin user.

```sh
# create admin user.
node seed.js
```

## Step 6 run backend server

Once the admin user has been generated, you are now ready to start the backend server by running `node .`

```sh
# run the master facility server
node .
```

## Step 7 frontend server settings

```sh
# navigate to frontend source directory.
cd client-src/src

# copy the settings to settings.js file
cp settings.example.js settings.js

# Modify settings.example.js in the terminal or text editor
# Set the hostname in settings.js file to the url of the backend server `192.168.12.252:3000`.

# navigate to frontend root directory
cd ..
```

## Step 8 run frontend server

You are now ready to start the front end application as follows, `npm start` (while in `client-src` directory)
```sh
# start frontend server
npm start
```

# Contribution

Once you have followed the installation step, you are ready to contribute to the source code. When working on the API, you will mostly use the Loopback _Model Generator_, as well as make changes to files in `common/models`.  When working on the Front-end, you will be modifying files in `client-src`. Make sure to add tests for every generated model, covering the major enpoints and relationships that will be hit via the API. From the root, running `npm start` will start the API on port 3000. Tests are not mandatory for the React Project, but highly encouraged.

## Reporting Issues

If you have noticed a bug, you can open an issue in [github web](https://github.com/BaobabHealthTrust/master-facility-list/issues) and attempt to fix (see below), otherwise we will do our best to look at it.

## Fixing Issues

From the issue list, you can select an issue, and create a branch in your local directory describing the issue you are fixing. Once the issue is fixed and all the tests are running, you can publish your local branch to the repository. From there, you may open a pull request describing how you have solved the issue. Remember to explicity say which issue number it solves, i.e. "solves issue #41" so that the issue is automatically closed upon merge

## Adding Features

If you have any features to add, please follow the instructions in the previous step to create a new feature branch and publish it to the remote repository upon completion of the feature. Every additional feature on the backend must have tests to go along with it.

Enjoy, and feel free to contact [jeremiahchienda@baobabhealth.org](mailto://jeremiahchienda@baobabhealth.org)
