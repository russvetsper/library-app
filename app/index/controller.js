import Ember from 'ember';

export default Ember.Controller.extend({

  isDisabled: true,

  emailAddress: '',

  actualEmailAddress: Ember.computed('emailAddress', function() {
    console.log('acctualEmailAddress function called: ', this.get('emailAddress'));
  }),

  emailAddressChanged: Ember.observer('emailAddress', function() {
    console.log('observer is called', this.get('emailAddress')); 
  })
});
