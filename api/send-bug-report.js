exports.default = async (event) => {
  require(`dotenv`).config({
    path: `.env.${process.env.NODE_ENV}`,
  });

  const AWS = require("aws-sdk");
  const openpgp = require("openpgp");
  const fs = require("fs");

  let requestParams = JSON.parse(event.body);
  let message = requestParams.message;
  const emailAddress = process.env.BUG_SUBMISSION_EMAIL;

  const publicKeyArmored = fs.readFileSync("./vega-public-key.asc", {
    encoding: "utf8",
    flag: "r",
  });

  AWS.config.update({
    accessKeyId: process.env.VEGA_AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.VEGA_AWS_SECRET_ACCESS_KEY,
    region: process.env.VEGA_AWS_REGION,
  });

  const ses = new AWS.SES({ apiVersion: "2010-12-01" });
  const publicKey = await openpgp.readKey({ armoredKey: publicKeyArmored });

  const encryptedMessage = await openpgp.encrypt({
    message: await openpgp.createMessage({ text: message }),
    encryptionKeys: publicKey,
  });

  const params = {
    Destination: {
      ToAddresses: [emailAddress],
    },
    Message: {
      Body: {
        Text: {
          Charset: "UTF-8",
          Data: encryptedMessage,
        },
      },
      Subject: {
        Charset: "UTF-8",
        Data: "Security issue submission from vega.xyz",
      },
    },
    Source: process.env.BUG_SUBMISSION_FROM_EMAIL,
  };

  return ses
    .sendEmail(params)
    .promise()
    .then((data) => {
      return {
        statusCode: 200,
        body: `Message sent`,
      };
    })
    .catch((error) => {
      return {
        statusCode: 500,
        body: `Message could not be sent`,
      };
    });
};
