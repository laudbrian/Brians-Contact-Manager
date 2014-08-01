ContactManager.module("ContactsApp.List", function(List, ContactManager, 
Backbone, Marionette, $, _){
  List.Controller = {
    listContacts: function(){
      var loadingView = new ContactManager.Common.Views.Loading();
      ContactManager.mainRegion.show(loadingView);
      
      var fetchingContacts = ContactManager.request("contact:entities");

      $.when(fetchingContacts).done(function(contacts){
        var contactsListView = new List.Contacts({
          collection: contacts
        });

        contactsListView.on("childview:contact:show", function(childView, model){
          ContactManager.trigger("contact:show", model.get("id"));
        });

        contactsListView.on("childview:contact:edit", function(childView, model){
          var view = new ContactManager.ContactsApp.Edit.Contact({
            model: model,
            asModal: true
          });

          view.on("show", function(){
            this.$el.dialog({
              modal: true,
              width: "auto"
            });
          });

          ContactManager.dialogRegion.show(view);
        });

        contactsListView.on("childview:contact:delete", function(childView, model){
          model.destroy();
        });

        ContactManager.mainRegion.show(contactsListView);
      });
    }
  }
});
  
