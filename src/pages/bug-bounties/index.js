import React from "react";
import Layout from "../../components/Layout";
import Seo from "../../components/Seo";
import Container from "../../components/Container";
import Callout from "../../components/Callout";

const BugBountiesPage = ({ data }) => {
  return (
    <Layout>
      <Seo
        title="Bug bounties"
        description="Found a software security issue? Report it to us and earn
                  rewards by finding bugs that affect the Vega Network."
      />
      <Container>
        <div>
          <div className="border-t border-current">
            <div className="md:grid md:grid-cols-12 pt-4">
              <div className="md:col-span-5 lg:col-span-4 md:pr-12">
                <h1 className="title-l mb-6 max-w-[25rem]">Bug bounties</h1>
              </div>
              <div className="md:col-span-7 lg:col-span-8">
                <div className="prose dark:prose-invert max-w-none prose-headings:border-0 mb-16">
                  <h2>
                    Found a software security issue? Report it to us and earn
                    rewards by finding bugs that affect the Vega Network.
                  </h2>
                  <p>
                    If you believe that you have spotted a vulnerability in
                    either the Vega protocol software (node, data node, wallet,
                    etc.) or network or any supporting systems or code used by
                    the project, please submit a bug report by email or the
                    web-form as described below to have this situation resolved
                    as soon as possible.
                  </p>
                  <h2>How to</h2>
                  <p>
                    Prevent a potential vulnerability being abused by others:
                  </p>
                  <ul>
                    <li>
                      Submit a bug through email or, if you prefer, anonymously
                      via the contact form below. If you want to send an
                      encrypted message, use the Vega PGP key and send the email
                      to security@vega.xyz.
                    </li>

                    <li>
                      Provide sufficient information (for example, a detailed
                      description including logs, how to reproduce the
                      vulnerability, scripts, screenshots, etc.) so that the
                      security issue can be addressed as effectively as
                      possible.
                    </li>
                  </ul>
                  <p>
                    Please do not share knowledge about the vulnerability with
                    others, until the issue has been fixed or we have worked out
                    some safe and coordinated way of publication with you. Do
                    not abuse the vulnerability. After a vulnerability has been
                    reported, you will be contacted within 2 working days to
                    make arrangements for a reasonable period of recovery, a
                    possible coordinated publication of the vulnerability and
                    reward.
                  </p>
                  <h2>Eligibility</h2>
                  <p>
                    Reward eligibility may be constrained by legal factors
                    (e.g., not being allowed to make payments to certain
                    countries or to transfer assets to anonymous accounts). We
                    will do our best to find a way to reward submitters fairly
                    for their discoveries, but may not be able to under all
                    circumstances. Also, vulnerability abuse or sharing with
                    third parties may disqualify you from any reward payment.
                  </p>
                  <h2>We are not network operators</h2>
                  <p>
                    As a decentralized system, we are entirely separate from any
                    validators running the Vega protocol and vulnerabilities
                    relevant to specific validators should be reported to them
                    directly (though feel free to let us know if you think a
                    validator is not responding appropriately). In addition, we
                    have no influence on how the validators (or their cloud
                    providers) might react if you poke their systems, so we
                    cannot help you if you do so in any way that upsets them.
                    For testing your discoveries, using a separate protocol
                    instance that you can run for yourselves is advised. The
                    best way to do this is via the{" "}
                    <a
                      href="https://docs.vega.xyz/docs/mainnet/tools#vega-capsule"
                      target="_blank"
                    >
                      Vega Capsule tool
                    </a>
                    .
                  </p>
                  <h2>Encrypted or anonymous submissions</h2>
                  <p>
                    If you want to send an encrypted message to
                    security@vegaprotocol.io, you can use our PGP key, which is
                    detailed below.
                  </p>
                  <p>For anonymous submissions, you can use the form below</p>
                  <p>FORM</p>
                </div>
                <Callout
                  title="PGP Key"
                  text="This is the PGP key that can be used to securely submit security issues to the project team. Please note that this
                    is the only usage of the key; especially, this key will never be used to issue signatures that are in any way meaningful or binding. We also may change the key at any time, so please make sure to check here for the current version."
                >
                  <div className="font-mono whitespace-pre pt-6">
                    &lt;0xFF...&gt;
                  </div>
                </Callout>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Layout>
  );
};

export default BugBountiesPage;
