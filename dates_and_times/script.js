let d;

//get today's date and time
d=new Date();

//set to string
d=d.toString();

//get a specific date
//important: the month is 0 based, so 0 is January and 11 is December
d=new Date(2021,0,10,12,30,0);

//pass in a string
d=new Date('2021-07-10T12:30:00');
d=new Date('07/10/2021 12:30:00');
d=new Date('2022-07-10');
d=new Date('07-10-2022');

//get current timestamp
d=Date.now();

//get the timestamp of a specific date
d=new Date();
d=d.getTime();
d=d.valueOf();

//create a date fom a timestamp
d=new Date(1666962049745);

//convert from miliseconds to seconds
d=Math.floor(date.now()/1000);

console.log(d);
