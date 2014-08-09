ContactManager.module("ContactApps.New", function(New, ContactManager,
Backbone, Marionette, $, _){
  New.Contact = ContactManager.ContactsApp.Common.Views.Form.extend({
    title: "New Contact"
  });
});
