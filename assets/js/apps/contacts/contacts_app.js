ContactManager.module("ContactsApp",function(ContactsApp,ContactManager,
Backbone,Marionette,$,_){
  ContactsApp.Router = Marionette.AppRouter.extend({
    appRoutes: {
      "contacts": "listContacts"
    }
  });

  varAPI={
    listContacts: function(){
      ContactsApp.List.Controller.listContacts();
    }
  };

  ContactManager.addInitializer(function(){ 
    new ContactsApp.Router({
      controller: API
    });
  }); 
});
