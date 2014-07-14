ContactManager.module("ContactsApp.List", function(List, ContactManager, 
Backbone, Marionette, $, _){
    List.Contact = Marionette.ItemView.extend({
      tagName: "tr",
      template: "#contact-list-item",

      // event handling code is here
      events: {
        "click": "highlightName"
      },

      highlightName: function(){
        this.$el.toggleClass("warning");
      }
    });

    List.Contacts = Marionette.CompositeView.extend({
      tagName: "table",
      className: "table table-hover",
      template: "#contact-list",
      childView: List.Contact,
      childViewContainer: "tbody"
    });
});
  
