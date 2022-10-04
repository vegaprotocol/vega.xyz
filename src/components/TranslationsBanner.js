import React from "react";
import Container from "../components/Container";
import Globe from "../components/Svg/Globe";
import { Trans, useTranslation } from "gatsby-plugin-react-i18next";

const TranslationsBanner = ({ targeti18n }) => {
  const { t } = useTranslation("component.translations-banner");

  return (
    <div className="bg-vega-purple p-5">
      <Container>
        <div className="flex justify-between items-center gap-x-8">
          <div className="grow text-base md:text-[1.125rem] leading-[1.4] text-white">
            <Trans t={t}>
              Fluent in this language? Help us translate the page.
            </Trans>
            <br className="hidden xl:block" />{" "}
            <Trans t={t}>
              <a
                href="https://github.com/vegaprotocol/vega.xyz/tree/i18n#internationalisation"
                target="_blank"
                rel="noreferrer"
                className="underline hover:no-underline"
              >
                Click here to contribute
              </a>
              .
            </Trans>
          </div>
          <div className="shink-0">
            <Globe />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default TranslationsBanner;
