Package.describe({
  name: 'gabdsg:reactive-fullcalendar',
  summary: "Meteor Reactive - Fullcalendar.io v3.0.1",
  version: "1.0.4",
  git: "https://github.com/gabdsg/reactive-fullcalendar.git",
  documentation: 'README.md'  
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@1.0');
  api.use('reactive-var', 'client');
  api.use('templating', 'client');
  api.addFiles([
      'lib/jquery.min.js',
      'lib/moment.min.js',
      'fullcalendar.min.js',
      'fullcalendar.min.css',
      'locale-all.js',
      'gcal.js',
      'reactive-fullcalendar.js',
      'reactive-fullcalendar-template.html',
      'reactive-fullcalendar-template.js',
  ],'client');
});
