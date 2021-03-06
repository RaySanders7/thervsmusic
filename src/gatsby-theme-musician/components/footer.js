/** @jsx jsx */
// eslint-disable-next-line no-unused-vars
import React from "react"
import { Styled, jsx } from "theme-ui"

import useSiteMetadata from "gatsby-theme-musician/src/use-site-metadata"
import Social from "gatsby-theme-musician/src/components/social"

export default ({ children }) => {
  const { title, social, artist } = useSiteMetadata()

  const formatCopyright = (title) => (
    artist.recordLabel ? artist.recordLabel : title
  );


  let hasSocial = false
  if (social.length) {
    if (typeof social[0].name !== "undefined") {
      if (social[0].name.length) {
        hasSocial = true
      }
    }
  }

  return (
    <footer role="contentinfo" sx={{ variant: "layout.footer" }}>
      {hasSocial && (
        <>
          <strong
            className="GtmFooter__social-heading"
            sx={{ variant: "styles.caps" }}
          >
            Follow &amp; Subscribe
          </strong>
          <div className="GtmFooter__social-wrapper">
            <Social />
          </div>
        </>
      )}
      <hr sx={{ variant: "layout.footer.hr" }} />
      {children ? (
        <div sx={{ variant: "layout.footer.copyright" }}>{children}</div>
      ) : (
        <small sx={{ variant: "layout.footer.copyright" }}>
          Copyright © {new Date().getFullYear()} {formatCopyright(title)}. All rights reserved.
          <br />
          Built with{" "}
          <Styled.a href="https://gatsbyjs.org" rel="external nofollow">
            Gatsby
          </Styled.a>{" "}
          and{" "}
          <Styled.a
            href="https://www.npmjs.com/package/gatsby-theme-musician"
            rel="external nofollow"
          >
            gatsby-theme-musician
          </Styled.a>
          .
        </small>
      )}
    </footer>
  )
}