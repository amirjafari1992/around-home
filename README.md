![alt text](https://about.aroundhome.de/wp-content/uploads/2021/09/Aroundhome-Logo-horizontal-RGB_Zeichenfla%CC%88che-1-2.jpg)
# Assignment
Author: Amir Jafari <jafari.work@gmail.com>

## Description

1. Create a simple REST API that serves the time slots from the JSON file. Feel free to
use an existing package that solves this task (e.g. json-server). The attached JSON
file represents data of:
a. 3 companies
b. each company contains id, name, type and time_slots
c. each time_slot contains a start_time and end_time
d. start_time and end_time are represented in
https://en.wikipedia.org/wiki/ISO_8601

2. Create a React application to fetch time_slots for companies from the api you
created in step 1.
3. Display the time_slots
a. in a human readable way (please see the attached sketches):
b. sorted by date and time
c. grouped by date
d. scrollable
4. Allow users to set a reservation for a time_slot by
a. clicking on one of the time_slots
b. display the reservation above with the time of the selected time_slot
c. highlight the selected time_slot
d. allow to deselect a time_slot to remove the reservation
e. only allow one reservation per company at once
5. Block all time_slots in the same time range for other companies

## Technologies & Tools

* React
* NodeJs
* Express
* TypeScript
* SCSS
* React-testing-library
* Eslint

### Requirements:

* Node 16 installed

### Steps:
1. Clone repo on your local machine:
```
$ git clone git@github.com:amirjafari1992/around-home.git
```
2. Install dependencies:
```
$ cd around-home
$ yarn
```
> If you had any error please remove <b>package-lock.json</b> or <b>yarn.lock</b> and <b>node_modules</b> folder. Then run `yarn` again.

3. Running the APP:<br/>
```
$ yarn dev
```
4. App running on ```localhost:3000``` (usually)
