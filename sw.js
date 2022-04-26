// Change this to your repository name
var GHPATH = '.';

// Choose a different app prefix name
var APP_PREFIX = 'gppwa_';

// The version of the cache. Every time you change any of the files
// you need to change this version (version_01, version_02…). 
// If you don't change the version, the service worker will give your
// users the old files!
var VERSION = 'version_00';

// The files to make available for offline use. make sure to add 
// others to this list
var URLS = [
  `https://cdn.jsdelivr.net/npm/@mdi/font@latest/css/materialdesignicons.min.css`,
  `${GHPATH}/index.html`,
  `${GHPATH}/css/books.f92109e4.css`,
  `${GHPATH}/css/books~distribute~logs~reports~return~singleBook~singleMember.2090ba31.css`,
  `${GHPATH}/css/bulkUpload.3435b2aa.css`,
  `${GHPATH}/css/dashboard.d68b03f1.css`,
  `${GHPATH}/css/distribute.bdf4d8f4.css`,
  `${GHPATH}/css/logs.50511716.css`,
  `${GHPATH}/css/members.aa35bca3.css`,
  `${GHPATH}/css/reports.2bbd3e78.css`,
  `${GHPATH}/css/return.bdf4d8f4.css`,
  `${GHPATH}/css/settings~singleMember.e1fb5b87.css`,
  `${GHPATH}/css/singleBook.b7d93eaa.css`,
  `${GHPATH}/css/singleMember.7d3f0686.css`,
  `${GHPATH}/css/chunk-vendors.268fc779.css`,
  `${GHPATH}/css/app.52088615.css`,
  `${GHPATH}/js/books.644e3a9a.js`,
  `${GHPATH}/js/books~distribute~logs~reports~return~singleBook~singleMember.724eecc9.js`,
  `${GHPATH}/js/bulkUpload.8b088511.js`,
  `${GHPATH}/js/dashboard.7e8ae08a.js`,
  `${GHPATH}/js/distribute.eed3a1a8.js`,
  `${GHPATH}/js/logs.5090b6dc.js`,
  `${GHPATH}/js/members.65c2b2ee.js`,
  `${GHPATH}/js/notFound.5e2f363b.js`,
  `${GHPATH}/js/reports.41aa6a61.js`,
  `${GHPATH}/js/return.f3b465c5.js`,
  `${GHPATH}/js/settings.5724e33f.js`,
  `${GHPATH}/js/settings~singleMember.402e47a7.js`,
  `${GHPATH}/js/singleBook.0850081d.js`,
  `${GHPATH}/js/singleMember.2f7a4992.js`,
  `${GHPATH}/css/app.52088615.css`,
  `${GHPATH}/css/chunk-vendors.268fc779.css`,
  `${GHPATH}/js/app.c9fd12dd.js`,
  `${GHPATH}/js/chunk-vendors.5b7cac77.js`
]