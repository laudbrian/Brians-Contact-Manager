ContactManager.module("ContactsApp.Edit", function(Edit, 
ContactManager, Backbone, Marionette, $, _){
  Edit.Contact = Marionette.ItemView.extend({
    template: "#contact-form",

    events: {
      "click button.js-submit": "submitClicked"
    },

    submitClicked: function(e){
      e.preventDefault();
      var data =Backbone.Syphon.serialize(this);
      this.trigger("form:submit", data);

    onFormDataInvalid: function(errors){
      var $view = this.$el;

      var clearFormErrors = function(){
        var $form = $view.find("form");
        $form.find(".help-inline.error").each(function(){
          $(this).remove();
        });
      }

      var markErrors = function(value, key){
        var $controlGroup = $view.find("#contact-" + key).parent();
        var $errorE1 = $("<span>", { class: "help-inline error", text: value });
        $controlGroup.append($errorE1).addClass("error");
      }

      clearFormErrors();
      _.each(errors, markErrors);
    }
  });
});
