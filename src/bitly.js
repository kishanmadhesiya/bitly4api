'use strict';

const url = require('url');
const isUri = require('valid-url').isUri;
const fetch = require('node-fetch').default;


class Bitly {

  constructor(accessToken) {
    this.accessToken = accessToken;
    this.headers = {
      'Authorization': 'Bearer ' + accessToken,
      'Content-Type': 'application/json'
    };
    this.api_url = 'https://api-ssl.bitly.com/v4/';
    this.domain = 'bit.ly';
  }

  //------Shorten URL----------------

  shorten(longUrl, domain) {
    var query = {
      long_url: longUrl,
      domain: domain ? domain : this.domain
    };

    return this.makeRequestPostToAPI(query, 'shorten');
  }

  //------Retrieve Tags by Group----------------

  Retrieve_Tags_by_Group(group_guid) {
    return this.makeRequestGetToAPI({}, 'groups/' + group_guid + '/tags');
  }

  //-------Get Click Metrics for a Group by referring networks-----------------

  Get_Metrics_Group(group_guid) {
    return this.makeRequestGetToAPI({}, 'groups/' + group_guid + '/referring_networks');
  }

  //-------Retrieve Group Shorten Counts--------------------

  Retrieve_Group_Shorten_Counts(group_guid) {
    return this.makeRequestGetToAPI({}, 'groups/' + group_guid + '/shorten_counts');
  }

  //-------Retrieve Groups-------------------------

  Retrieve_Group() {
    return this.makeRequestGetToAPI({}, 'groups/');
  }

  //-------Retrieve Group Preferences-------------------------

  Retrieve_Group_Preferences(group_guid) {
    return this.makeRequestGetToAPI({}, 'groups/' + group_guid + '/preferences/');
  }

  //-------Update Group Preferences-------------------------

  Update_Group_Preferences(group_guid, preference_guid, domain_preference) {
    var query = {
      "group_guid": preference_guid,
      "domain_preference": domain_preference
    }
    return this.makeRequestPatchToAPI({}, 'groups/' + group_guid + '/preferences/');
  }

  //-------Retrieve Bitlinks by Group-------------------------

  Retrieve_Bitlinks_by_Group(group_guid) {
    return this.makeRequestGetToAPI({}, 'groups/' + group_guid + '/bitlinks/');
  }

  //-------Get Click Metrics for a Group by countries-------------------------

  Click_Metrics_Countries_by_Group(group_guid) {
    return this.makeRequestGetToAPI({}, 'groups/' + group_guid + '/countries/');
  }

  //-------Retrieve Sorted Bitlinks for Group-------------------------

  Retrieve_Sorted_Bitlinks_for_Group(group_guid, sort) {
    return this.makeRequestGetToAPI({}, 'groups/' + group_guid + '/bitlinks/' + sort);
  }

  //-------Update a Group-------------------------

  Update_Group(group_guid, bsds, name, organization_guid) {
    var query = {
      "bsds": bsds,
      "name": name,
      "organization_guid": organization_guid
    }
    return this.makeRequestPatchToAPI(query, 'groups/' + group_guid);
  }

  //-------Retrieve a Group-------------------------

  Retrieve_Group(group_guid) {
    return this.makeRequestGetToAPI({}, 'groups/' + group_guid);
  }

  //-------Delete a Group-------------------------

  Delete_Group(group_guid) {
    return this.makeRequestDeleteToAPI({}, 'groups/' + group_guid);
  }

  //-------Retrieve Organizations-------------------------

  Retrieve_Organizations() {
    return this.makeRequestGetToAPI({}, 'organizations/');
  }

  //-------Retrieve Organization Shorten Counts-------------------------

  Retrieve_Organizations_Shorten_Counts(organization_guid) {
    return this.makeRequestGetToAPI({}, 'organizations/' + organization_guid + '/shorten_counts');
  }

  //-------Retrieve an Organization-------------------------

  Retrieve_an_Organization(organization_guid) {
    return this.makeRequestGetToAPI({}, 'organizations/' + organization_guid);
  }

  //-------Update a User-------------------------

  Update_User(default_group_guid, name) {
    var query = {
      "default_group_guid": default_group_guid,
      "name": name
    }
    return this.makeRequestPatchToAPI(query, 'user');
  }

  //-------Retrieve a User-------------------------

  Retrieve_User() {
    return this.makeRequestGetToAPI({}, 'user/');
  }

  //-------Get Metrics for a Bitlink by countries-------------------------

  Get_Metrics_by_Countries(bitlink) {
    return this.makeRequestGetToAPI({}, 'bitlinks/' + bitlink + '/countries');
  }

  //-------Get Clicks for a Bitlink-------------------------

  Get_Clicks_for_Bitlink(bitlink) {
    return this.makeRequestGetToAPI({}, 'bitlinks/' + bitlink + '/clicks');
  }

  //-------Expand a Bitlink-------------------------

  Expand_Bitlink(bitlink_id) {
    var query = {
      "bitlink_id": bitlink_id
    }
    return this.makeRequestPostToAPI(query, 'expand');
  }

  //-------Get Metrics for a Bitlink by referrers-------------------------

  Get_Metrics_for_Bitlink_by_Referrers(bitlink) {
    return this.makeRequestGetToAPI({}, 'bitlinks' + bitlink + '/referrers');
  }

  //-------Create a Bitlink-------------------------

  Create_Bitlink(domain, title, group_guid, tags, deeplinks, long_url) {
    var query = {
      "domain": domain,
      "title": title,
      "group_guid": group_guid,
      "tags": tags,
      "deeplinks": deeplinks,
      "long_url": long_url
    }
    return this.makeRequestPostToAPI(query, 'bitlinks');
  }

  //-------Get Clicks Summary for a Bitlink-------------------------

  Get_Clicks_Summary_for_Bitlink(bitlink) {
    return this.makeRequestGetToAPI({}, 'bitlinks/' + bitlink + '/clicks/summary');
  }

  //-------Update a Bitlink-------------------------

  Update_Bitlink(bitlink,references, archived, tags, created_at, title, deeplinks, created_by, long_url, client_id, custom_bitlinks, link, id) {
    var query = {
      "references": references,
      "archived": archived,
      "tags": tags,
      "created_at": created_at,
      "title": title,
      "deeplinks": deeplinks,
      "created_by": created_by,
      "long_url": long_url,
      "client_id": client_id,
      "custom_bitlinks": custom_bitlinks,
      "link": link,
      "id": id
    }
    return this.makeRequestPatchToAPI({}, 'bitlinks/' + bitlink);
  }

  //-------Retrieve a Bitlink-------------------------

  Retrieve_Bitlink(bitlink) {
    return this.makeRequestGetToAPI({}, 'bitlinks/' + bitlink);
  }

  //-------Get Metrics for a Bitlink by referrers by domain-------------------------

  Get_Metrics_for_Bitlink_by_Referrers_by_Domain(bitlink) {
    return this.makeRequestGetToAPI({}, 'bitlinks/' + bitlink+'/referrers_by_domains');
  }

  //-------Get Metrics for a Bitlink by referring by domain-------------------------

  Get_Metrics_for_Bitlink_by_Referring_by_Domain(bitlink) {
    return this.makeRequestGetToAPI({}, 'bitlinks/' + bitlink+'/referring_domains');
  }

  //-------GgetPaymentInvoices-------------------------

  getPaymentInvoices(organization_guid) {
    return this.makeRequestGetToAPI({}, 'organizations/' + organization_guid+'/payment_invoices');
  }

  //-------Get BSDs-------------------------

  Get_BSDS() {
    return this.makeRequestGetToAPI({}, 'bsds');
  }


  //------------METHODS CALL FOR API --------------------

  makeRequestPostToAPI(jsonData, endPoint) {
    return new Promise((resolve, reject) => {
      return fetch(this.api_url + endPoint, {
          body: JSON.stringify(jsonData),
          method: "POST",
          headers: this.headers
        })
        .then((response) => {
          return resolve(response.json());
        });
    });
  }

  makeRequestGetToAPI(jsonData, endPoint) {
    return new Promise((resolve, reject) => {
      return fetch(this.api_url + endPoint, {
          method: "GET",
          headers: this.headers
        })
        .then((response) => {
          return resolve(response.json());
        });
    });
  }

  makeRequestPatchToAPI(jsonData, endPoint) {
    return new Promise((resolve, reject) => {
      return fetch(this.api_url + endPoint, {
          body: JSON.stringify(jsonData),
          method: "PATCH",
          headers: this.headers
        })
        .then((response) => {
          return resolve(response.json());
        })
    });
  }

  makeRequestDeleteToAPI(jsonData, endPoint) {
    return new Promise((resolve, reject) => {
      return fetch(this.api_url + endPoint, {
          method: "DELETE",
          headers: this.headers
        })
        .then((response) => {
          return resolve(response.json());
        });
    });
  }

}
module.exports = Bitly;
