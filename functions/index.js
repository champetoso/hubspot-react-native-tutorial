const functions = require("firebase-functions");
const hubspot = require("@hubspot/api-client");
const axios = require("axios");

exports.createCRMContact = functions.https
  //.runWith({ secrets: ["HS_PRIVATE_APP_KEY"] })
  .onCall((data, context) => {
    const hubspotClient = new hubspot.Client({
      apiKey: process.env.HS_PRIVATE_APP_KEY,
    });
    const properties = data;
    const SimplePublicObjectInput = { properties };

    const hsCall = new Promise((resolve, reject) => {
      hubspotClient.crm.contacts.basicApi
        .create(SimplePublicObjectInput)
        .then((response) => {
          console.log("Response, ", response);
          resolve({
            result: "Function called successfully",
            hubspot: response,
          });
        })
        .catch((e) => {
          console.log("Error, ", e);
          e.message === "HTTP request failed"
            ? console.error(JSON.stringify(e.response, null, 2))
            : console.error(e);
          reject({
            result: "Function error",
            hubspot: e.message,
          });
        });
    });

    return hsCall;
  });

exports.sendCBE = functions.https.onCall((data, context) => {
  axios.defaults.baseURL = "https://api.hubapi.com";
  axios.defaults.headers.post["Content-Type"] = "application/json";
  const options = {
    params: {
      hapikey: process.env.HS_PRIVATE_APP_KEY,
    },
  };

  console.log("Testing CBEs....");

  const httpReq = new Promise((resolve, reject) => {
    axios
      .post("/events/v3/send", data, options)
      .then((response) => {
        console.log("Axios response", response.status);
        resolve({
          result: "Function called successfully",
          hubspot: response.status,
        });
      })
      .catch((e) => {
        e.message === "HTTP request failed"
          ? console.error(JSON.stringify(e.response, null, 2))
          : console.error(e);
        reject({
          result: "Function error",
          hubspot: e.message,
        });
      });
  });

  return httpReq;
});

/* exports.sendLegEvent = functions.https.onCall((data, context) => {
  axios.defaults.baseURL = "https://api.hubapi.com";
  axios.defaults.headers.post["Content-Type"] = "application/json";
  const options = {
    params: {
      hapikey: process.env.HS_PRIVATE_APP_KEY,
    },
  };

  console.log("Testing Timeline Events....");

  const httpReq = new Promise((resolve, reject) => {
    axios
      .post("/crm/v3/timeline/events", data, options)
      .then((response) => {
        console.log("Axios response", response.status);
        resolve({
          result: "Function called successfully",
          hubspot: response.status,
        });
      })
      .catch((e) => {
        e.message === "HTTP request failed"
          ? console.error(JSON.stringify(e.response, null, 2))
          : console.error(e);
        reject({
          result: "Function error",
          hubspot: e.message,
        });
      });
  });

  return httpReq;
}); */

exports.loadProducts = functions.https.onCall((data, context) => {
  const hubspotClient = new hubspot.Client({
    apiKey: process.env.HS_PRIVATE_APP_KEY,
  });

  const limit = 10;
  const after = undefined;
  const properties = undefined;
  const propertiesWithHistory = undefined;
  const associations = undefined;
  const archived = false;

  const hsCall = new Promise((resolve, reject) => {
    hubspotClient.crm.products.basicApi
      .getPage(
        limit,
        after,
        properties,
        propertiesWithHistory,
        associations,
        archived
      )
      .then((response) => {
        console.log("Response, ", response);
        resolve({
          result: "Function called successfully",
          hubspot: response,
        });
      })
      .catch((e) => {
        console.log("Error, ", e);
        e.message === "HTTP request failed"
          ? console.error(JSON.stringify(e.response, null, 2))
          : console.error(e);
        reject({
          result: "Function error",
          hubspot: e.message,
        });
      });
  });
  return hsCall;
});

/* exports.createCRMDeal = functions.https
  //.runWith({ secrets: ["HS_PRIVATE_APP_KEY"] })
  .onCall((data, context) => {
    const hubspotClient = new hubspot.Client({
      apiKey: process.env.HS_PRIVATE_APP_KEY,
    });
    const properties = data;
    const SimplePublicObjectInput = { properties };

    const hsCall = new Promise((resolve, reject) => {
      hubspotClient.crm.deals.basicApi
        .create(SimplePublicObjectInput)
        .then((response) => {
          console.log("Response, ", response);
          resolve({
            result: "Function called successfully",
            hubspot: response,
          });
        })
        .catch((e) => {
          console.log("Error, ", e);
          e.message === "HTTP request failed"
            ? console.error(JSON.stringify(e.response, null, 2))
            : console.error(e);
          reject({
            result: "Function error",
            hubspot: e.message,
          });
        });
    });

    return hsCall;
  });

  exports.createCRMLineItem = functions.https
    //.runWith({ secrets: ["HS_PRIVATE_APP_KEY"] })
    .onCall((data, context) => {
      const hubspotClient = new hubspot.Client({
        apiKey: process.env.HS_PRIVATE_APP_KEY,
      });
      const properties = data;
      const SimplePublicObjectInput = { properties };

      const hsCall = new Promise((resolve, reject) => {
        hubspotClient.crm.deals.basicApi
          .create(SimplePublicObjectInput)
          .then((response) => {
            console.log("Response, ", response);
            resolve({
              result: "Function called successfully",
              hubspot: response,
            });
          })
          .catch((e) => {
            console.log("Error, ", e);
            e.message === "HTTP request failed"
              ? console.error(JSON.stringify(e.response, null, 2))
              : console.error(e);
            reject({
              result: "Function error",
              hubspot: e.message,
            });
          });
      });

      return hsCall;
    });

    exports.associateCRMLineItem = functions.https
      //.runWith({ secrets: ["HS_PRIVATE_APP_KEY"] })
      .onCall((data, context) => {
        const hubspotClient = new hubspot.Client({
          apiKey: process.env.HS_PRIVATE_APP_KEY,
        });
        const properties = data;
        const SimplePublicObjectInput = { properties };

        const lineItemId = "lineItemId";
        const toObjectType = "toObjectType";
        const toObjectId = "toObjectId";
        const associationType = "associationType";

        try {
          const apiResponse =
            await hubspotClient.crm.lineItems.associationsApi.create(
              lineItemId,
              toObjectType,
              toObjectId,
              associationType
            );
          console.log(JSON.stringify(apiResponse.body, null, 2));
        } catch (e) {
          e.message === "HTTP request failed"
            ? console.error(JSON.stringify(e.response, null, 2))
            : console.error(e);
        }

        const hsCall = new Promise((resolve, reject) => {
          hubspotClient.crm.deals.basicApi
            .create(SimplePublicObjectInput)
            .then((response) => {
              console.log("Response, ", response);
              resolve({
                result: "Function called successfully",
                hubspot: response,
              });
            })
            .catch((e) => {
              console.log("Error, ", e);
              e.message === "HTTP request failed"
                ? console.error(JSON.stringify(e.response, null, 2))
                : console.error(e);
              reject({
                result: "Function error",
                hubspot: e.message,
              });
            });
        });

        return hsCall;
      }); */
