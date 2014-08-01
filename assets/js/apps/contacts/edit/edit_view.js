ContactManager.module("ContactsApp.Edit", function(Edit, 
ContactManager, Backbone, Marionette, $, _){
  Edit.Contact = Marionette.ItemView.extend({
    template: "#contact-form",

    initialize: function(){
      this.title = "Edit " + this.model.get("firstName");
      this.title = this.title + " " + this.model.get("lastName");
    },

    events: {
      "click button.js-submit": "submitClicked"
    },

    submitClicked: function(e){
      e.preventDefault();
      var data =Backbone.Syphon.serialize(this);
      this.trigger("form:submit", data);

    onRender: function(){
      if( ! this.options.asModal){
        var $title = $("<h1>", { text: this.title });
        this.$el.prepend($title);
      }
    },

    onShow: function(){
      if(this.options.asModal){
        this.$el.dialog({
          modal: true,
          title: this.title,
          width: "auto"
        });
      }
    },

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
