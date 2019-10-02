This is an Unofficial API of bitly.com [VERSION 4]

[![Build Status](https://travis-ci.org/kishanmadhesiya/bitly4api.svg?branch=master)](https://travis-ci.org/kishanmadhesiya/bitly4api/)
[![npm version](https://badge.fury.io/js/bitly4api.svg)](https://badge.fury.io/js/bitly4api)

## Installation

Using NPM `npm install bitly4api`

Using GIT `git clone https://github.com/kishanmadhesiya/bitly4api.git`

## Usage

You need 'ACCESS TOKEN' from bitly.com. Visit: https://bitly.com/a/oauth_apps

Check http://dev.bitly.com/ for more info.

#### Code

```js
// For ES2015/ES6

import Bitly from 'bitly4api';

let bitly = new Bitly('<ACCESS TOKEN>');

bitly.shorten('http://nodejs.org', (response) => {
  console.log(response);
}, (error) => {
  console.log(error);
});


// For ES5

var Bitly = require('bitly4api');
var bitly = new Bitly('<ACCESS TOKEN>');

bitly.shorten('https://github.com/kishanmadhesiya/bitly4api')
  .then(function(response) {
    console.log(response);
  }, function(error) {
    console.log(error);
  });
```

### Bit.ly Api Methods

* shorten(LONG_URL,DOMAIN) required: LONG_URL
* Retrieve_Tags_by_Group(GU_ID) required: GU_ID
* Get_Metrics_Group(GU_ID) required: GU_ID
* Retrieve_Group_Shorten_Counts(GU_ID) required: GU_ID
* Retrieve_Group()
* Retrieve_Group_Preferences(GU_ID) required: GU_ID
* Update_Group_Preferences(GU_ID,GROUP_GU_ID,DOMAIN_PREFERENCE) required: GU_ID
* Retrieve_Bitlinks_by_Group(GU_ID) required: GU_ID
* Click_Metrics_Countries_by_Group(GU_ID) required: GU_ID
* Retrieve_Sorted_Bitlinks_for_Group(GU_ID,SORT) required: GU_ID, SORT {clicks}
* Update_Group(GU_ID,SORT,BSDS,NAME,ORGANIZATION_GUID) required: GU_ID
* Retrieve_Group(GU_ID) required: GU_ID
* Delete_Group(GU_ID) required: GU_ID
* Retrieve_Organizations()
* Retrieve_Organizations_Shorten_Counts(ORG_ID) required: ORG_ID
* Retrieve_an_Organization(ORG_ID) required: ORG_ID
* Update_User(DEFAULT_GROUP_GUID,NAME)
* Retrieve_User()
* Get_Metrics_by_Countries(BITLINK) required: BITLINK
* Get_Clicks_for_Bitlink(BITLINK) required: BITLINK
* Expand_Bitlink(BITLINK)
* Create_Bitlink(DOMAIN, TITLE, GROUP_GU_ID, TAGS, DEEPLINKS, LONG_URL)
* Get_Metrics_for_Bitlink_by_Referring_by_Domain(BITLINK) required: BITLINK
* Get_Metrics_for_Bitlink_by_Referrers(BITLINK) required: BITLINK
* Retrieve_Bitlink(BITLINK) required: BITLINK
* Update_Bitlink(REFERENCES, ARCHIEVED, TAGS, CREATED_AT, TITLE, DEEPLINKS, CREATED_BY, LONG_URL, CLIENT_ID, CUSTOM_BITLINKS, LINK, ID)
* Get_Clicks_Summary_for_Bitlink(BITLINK) required: BITLINK
* Get_BSDS()
* getPaymentInvoices(ORG_GUID) required: ORG_GUID

### DOCUMENTATION VERSION 4

[DOCUMENTATION](https://dev.bitly.com/v4_documentation.html)

#### For More Help

* Mail me @ kishanmadhesiya@gmail.com

* You can also [PayPal Me](https://paypal.me/kishanmadhesiya)

## Tests
To run tests type `npm test`.
For coverage type `npm run coverage`
