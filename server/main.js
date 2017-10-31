import { Meteor } from 'meteor/meteor';
import SimpleSchema from 'simpl-schema';
import {Accounts} from 'meteor/accounts-base';

Meteor.startup(() => {

  Accounts.validateNewUser((user)={
    console.log('this is the user',user);
    return true;
  });


  // const petSchema = new SimpleSchema({
  //   name: {
  //     type: String,
  //     min: 1,
  //     max: 200,
  //     optional:true
  //   },
  //   age: {
  //     type: Number,
  //     min: 0
  //   },
  //   contactNumber:{
  //     type:String,
  //     optional:true,
  //     regEx: SimpleSchema.RegEx.Phone
  //   }
  // });
  //
  // petSchema.validate({
  //   age:21,
  //   contactNumber:'abc1234'
  // });
  // const employeeSchema = new SimpleSchema({
  //   name:{
  //     type:String,
  //     min:1,
  //     max:200
  //   },
  //   hourlyWage:{
  //     type:Number,
  //     min:0
  //   },
  //   email:{
  //     type:String,
  //     regEx:SimpleSchema.RegEx.Email
  //   }
  // });
  //
  // employeeSchema.validate({
  //   name:'Khushal',
  //   hourlyWage:35,
  //   email:'mike@gmail.com'
  // });

});
