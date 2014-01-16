Router.configure({
  layoutTemplate: 'layout'
});

Router.map(function () {
  /**
   * The route's name is "home"
   * The route's template is also "home"
   * The default action will render the home template
   */
  this.route('home', {
    path: '/',
    before: [
      function () {
        this.subscribe('unconferences').wait();
      },

      function () {
        // we're done waiting on all subs
        if (this.ready()) {
          NProgress.done(); 
        } else {
          NProgress.start();
          this.stop(); // stop downstream funcs from running
        }
      }
    ]
  });

  /**
   * The route's name is "posts"
   * The route's path is "/posts"
   * The route's template is inferred to be "posts"
   */

  this.route('unconference', {
    path: '/unconference/:_id',

    load: function () {
      // called on first load
    },

    data: function () {
      return Unconferences.findOne({_id: this.params._id});
    },

    // before hooks are run before your action
    before: [
      function () {
        this.subscribe('unconference', this.params._id).wait();
      },

      function () {
        // we're done waiting on all subs
        if (this.ready()) {
          NProgress.done(); 
        } else {
          NProgress.start();
          this.stop(); // stop downstream funcs from running
        }
      }
    ],

    /*action: function () {
      var params = this.params; // including query params
      var hash = this.hash;
      var isFirstRun = this.isFirstRun;

      this.render(); // render all
      this.render('specificTemplate', {to: 'namedYield'});
    },

    unload: function () {
      // before a new route is run
    }*/
  });
});