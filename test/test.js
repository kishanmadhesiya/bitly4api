'use strict';

const Bitly = require('../src/bitly');
const bitly_token = 'fbc73f4962d38a128aaa176453dac43f04018b8b';
const LONG_URL = 'http://www.kishanmadhesiya.com';
const SHORT_URL = 'http://bit.ly/2teiL78';
const BITLY_HASH = 'kIsh';

 describe('Shorten_URL', function() {
  describe('#shorten()', function() {
    it('should return a success', function(done) {
      var bitly = new Bitly(bitly_token);
      bitly.shorten(LONG_URL).then((result) => {
        done();
      }, done)
    });
  });
});

describe('Retrieve_Tags_by_Group', function() {
 describe('#Retrieve_Tags_by_Group()', function() {
   it('should return a success', function(done) {
     var bitly = new Bitly(bitly_token);
     bitly.Retrieve_Tags_by_Group("Bh727C6tvtc").then((result) => {
       done();
     }, done)
   });
 });
});

describe('Get_Metrics_Group', function() {
 describe('#Get_Metrics_Group()', function() {
   it('should return a success', function(done) {
     var bitly = new Bitly(bitly_token);
     bitly.Get_Metrics_Group("Bh727C6tvtc").then((result) => {
       done();
     }, done)
   });
 });
});

describe('Retrieve_Group_Shorten_Counts', function() {
 describe('#Retrieve_Group_Shorten_Counts()', function() {
   it('should return a success', function(done) {
     var bitly = new Bitly(bitly_token);
     bitly.Retrieve_Group_Shorten_Counts("Bh727C6tvtc").then((result) => {
       done();
     }, done)
   });
 });
});

describe('Retrieve_Group', function() {
 describe('#Retrieve_Group()', function() {
   it('should return a success', function(done) {
     var bitly = new Bitly(bitly_token);
     bitly.Retrieve_Group().then((result) => {
       done();
     }, done)
   });
 });
});

describe('Retrieve_Group_Preferences', function() {
 describe('#Retrieve_Group_Preferences()', function() {
   it('should return a success', function(done) {
     var bitly = new Bitly(bitly_token);
     bitly.Retrieve_Group_Preferences("Bh727C6tvtc").then((result) => {
       done();
     }, done)
   });
 });
});

describe('Update_Group_Preferences', function() {
 describe('#Update_Group_Preferences()', function() {
   it('should return a success', function(done) {
     var bitly = new Bitly(bitly_token);
     bitly.Update_Group_Preferences("Bh727C6tvtc","Bh727C6tvtc","bit.ly").then((result) => {
       done();
     }, done)
   });
 });
});

describe('Retrieve_Bitlinks_by_Group', function() {
 describe('#Retrieve_Bitlinks_by_Group()', function() {
   it('should return a success', function(done) {
     var bitly = new Bitly(bitly_token);
     bitly.Retrieve_Bitlinks_by_Group("Bh727C6tvtc").then((result) => {
       done();
     }, done)
   });
 });
});

describe('Click_Metrics_Countries_by_Group', function() {
 describe('#Click_Metrics_Countries_by_Group()', function() {
   it('should return a success', function(done) {
     var bitly = new Bitly(bitly_token);
     bitly.Click_Metrics_Countries_by_Group("Bh727C6tvtc").then((result) => {
       done();
     }, done)
   });
 });
});

describe('Retrieve_Sorted_Bitlinks_for_Group', function() {
 describe('#Retrieve_Sorted_Bitlinks_for_Group()', function() {
   it('should return a success', function(done) {
     var bitly = new Bitly(bitly_token);
     bitly.Retrieve_Sorted_Bitlinks_for_Group("Bh727C6tvtc","clicks").then((result) => {
       done();
     }, done)
   });
 });
});

describe('Update_Group', function() {
 describe('#Update_Group()', function() {
   it('should return a success', function(done) {
     var bitly = new Bitly(bitly_token);
     bitly.Update_Group("Bh727C6tvtc",[],"abcd","xyz").then((result) => {
       done();
     }, done)
   });
 });
});

describe('Retrieve_Group', function() {
 describe('#Retrieve_Group()', function() {
   it('should return a success', function(done) {
     var bitly = new Bitly(bitly_token);
     bitly.Retrieve_Group("Bh727C6tvtc").then((result) => {
       done();
     }, done)
   });
 });
});

describe('Delete_Group', function() {
 describe('#Delete_Group()', function() {
   it('should return a success', function(done) {
     var bitly = new Bitly(bitly_token);
     bitly.Delete_Group("Bh727C6tvtc").then((result) => {
       done();
     }, done)
   });
 });
});

describe('Retrieve_Organizations', function() {
 describe('#Retrieve_Organizations()', function() {
   it('should return a success', function(done) {
     var bitly = new Bitly(bitly_token);
     bitly.Retrieve_Organizations().then((result) => {
       done();
     }, done)
   });
 });
});

describe('Retrieve_Organizations_Shorten_Counts', function() {
 describe('#Retrieve_Organizations_Shorten_Counts()', function() {
   it('should return a success', function(done) {
     var bitly = new Bitly(bitly_token);
     bitly.Retrieve_Organizations_Shorten_Counts("Bh727C6tvtc").then((result) => {
       done();
     }, done)
   });
 });
});

describe('Retrieve_an_Organization', function() {
 describe('#Retrieve_an_Organization()', function() {
   it('should return a success', function(done) {
     var bitly = new Bitly(bitly_token);
     bitly.Retrieve_an_Organization("Bh727C6tvtc").then((result) => {
       done();
     }, done)
   });
 });
});

describe('Update_User', function() {
 describe('#Update_User()', function() {
   it('should return a success', function(done) {
     var bitly = new Bitly(bitly_token);
     bitly.Update_User("Bh727C6tvtc","abcd").then((result) => {
       done();
     }, done)
   });
 });
});

describe('Retrieve_User', function() {
 describe('#Retrieve_User()', function() {
   it('should return a success', function(done) {
     var bitly = new Bitly(bitly_token);
     bitly.Retrieve_User().then((result) => {
       done();
     }, done)
   });
 });
});

describe('Get_Metrics_by_Countries', function() {
 describe('#Get_Metrics_by_Countries()', function() {
   it('should return a success', function(done) {
     var bitly = new Bitly(bitly_token);
     bitly.Get_Metrics_by_Countries("bitlink").then((result) => {
       done();
     }, done)
   });
 });
});

describe('Get_Clicks_for_Bitlink', function() {
 describe('#Get_Clicks_for_Bitlink()', function() {
   it('should return a success', function(done) {
     var bitly = new Bitly(bitly_token);
     bitly.Get_Clicks_for_Bitlink("bitlink").then((result) => {
       done();
     }, done)
   });
 });
});

describe('Expand_Bitlink', function() {
 describe('#Expand_Bitlink()', function() {
   it('should return a success', function(done) {
     var bitly = new Bitly(bitly_token);
     bitly.Expand_Bitlink("bitlink_id").then((result) => {
       done();
     }, done)
   });
 });
});

// describe('Get_Metrics_for_Bitlink_by_Referrers', function() {
//  describe('#Get_Metrics_for_Bitlink_by_Referrers()', function() {
//    it('should return a success', function(done) {
//      var bitly = new Bitly(bitly_token);
//      bitly.Get_Metrics_for_Bitlink_by_Referrers("bitlink_id").then((result) => {
//        done();
//      }, done)
//    });
//  });
// });

describe('Create_Bitlink', function() {
 describe('#Create_Bitlink()', function() {
   it('should return a success', function(done) {
     var bitly = new Bitly(bitly_token);
     bitly.Create_Bitlink("domain", "title", "group_guid", "tags", "deeplinks", "long_url").then((result) => {
       done();
     }, done)
   });
 });
});

// describe('Get_Clicks_Summary_for_Bitlink', function() {
//  describe('#Get_Clicks_Summary_for_Bitlink()', function() {
//    it('should return a success', function(done) {
//      var bitly = new Bitly(bitly_token);
//      bitly.Get_Clicks_Summary_for_Bitlink("bit.ly").then((result) => {
//        done();
//      }, done)
//    });
//  });
// });

// describe('Update_Bitlink', function() {
//  describe('#Update_Bitlink()', function() {
//    it('should return a success', function(done) {
//      var bitly = new Bitly(bitly_token);
//      bitly.Update_Bitlink("references", "archived", "tags", "created_at", "title", "deeplinks", "created_by", "long_url", "client_id", "custom_bitlinks", "link", "id").then((result) => {
//        done();
//      }, done)
//    });
//  });
// });

// describe('Retrieve_Bitlink', function() {
//  describe('#Retrieve_Bitlink()', function() {
//    it('should return a success', function(done) {
//      var bitly = new Bitly(bitly_token);
//      bitly.Retrieve_Bitlink("bit.ly").then((result) => {
//        done();
//      }, done)
//    });
//  });
// });

// describe('Get_Metrics_for_Bitlink_by_Referrers_by_Domain', function() {
//  describe('#Get_Metrics_for_Bitlink_by_Referrers_by_Domain()', function() {
//    it('should return a success', function(done) {
//      var bitly = new Bitly(bitly_token);
//      bitly.Get_Metrics_for_Bitlink_by_Referrers_by_Domain("bit.ly").then((result) => {
//        done();
//      }, done)
//    });
//  });
// });

describe('Get_Metrics_for_Bitlink_by_Referring_by_Domain', function() {
 describe('#Get_Metrics_for_Bitlink_by_Referring_by_Domain()', function() {
   it('should return a success', function(done) {
     var bitly = new Bitly(bitly_token);
     bitly.Get_Metrics_for_Bitlink_by_Referring_by_Domain("bit.ly").then((result) => {
       done();
     }, done)
   });
 });
});

describe('getPaymentInvoices', function() {
 describe('#getPaymentInvoices()', function() {
   it('should return a success', function(done) {
     var bitly = new Bitly(bitly_token);
     bitly.getPaymentInvoices("organization_guid").then((result) => {
       done();
     }, done)
   });
 });
});

describe('Get_BSDS', function() {
 describe('#Get_BSDS()', function() {
   it('should return a success', function(done) {
     var bitly = new Bitly(bitly_token);
     bitly.Get_BSDS().then((result) => {
       done();
     }, done)
   });
 });
});
