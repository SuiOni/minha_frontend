import React from 'react';
import styled from 'styled-components';

import {
  FacebookShareButton,
  GooglePlusShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  TelegramShareButton,
  RedditShareButton,
  FacebookShareCount,
  GooglePlusShareCount,
  LinkedinShareCount,
  RedditShareCount,
  FacebookIcon,
  TwitterIcon,
  TelegramIcon,
  GooglePlusIcon,
  LinkedinIcon,
  RedditIcon,
} from 'react-share';
import { EntypoArrowBoldRight, EntypoCalculatork, EntypoFacebook } from 'react-entypo';

import config from '../../../data/SiteConfig';

const SocialLinks = ({ postNode, postPath, mobile }) => {
  const post = postNode.frontmatter;
  const realPrefix = config.pathPrefix === '/' ? '' : config.pathPrefix;
  const url = config.siteUrl + realPrefix + postPath;

  const iconSize = mobile ? 36 : 48;
  const filter = count => (count > 0 ? count : '');
  const SocialLinksDiv = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-content: center;
    align-items: center;
    margin: 15px 0;

    > div {
      margin: 5px 15px;
    }

    .share-count {
    }
  `;
  const ShareCountDiv = styled.div`
    text-align: center;
  `;
  return (
    <SocialLinksDiv>
      <RedditShareButton url={url} title={post.title}>
        <RedditIcon logoFillColor="black" iconBgStyle={{ fill: 'white' }} round size={iconSize} />
        <RedditShareCount url={url}>{count => <div className="share-count">{filter(count)}</div>}</RedditShareCount>
      </RedditShareButton>
      <TwitterShareButton url={url} title={post.title}>
        <TwitterIcon logoFillColor="black" iconBgStyle={{ fill: 'white' }} round size={iconSize} />
      </TwitterShareButton>
      <GooglePlusShareButton url={url}>
        <GooglePlusIcon logoFillColor="black" iconBgStyle={{ fill: 'white' }} round size={iconSize} />
        <GooglePlusShareCount url={url}>{count => <ShareCountDiv>{filter(count)}</ShareCountDiv>}</GooglePlusShareCount>
      </GooglePlusShareButton>
      <FacebookShareButton url={url} quote={postNode.excerpt}>
        {/* <FacebookIcon logoFillColor="black" iconBgStyle={{ fill: 'white' }}  round size={iconSize} /> */}
        <EntypoFacebook valign style={{ fill: 'black', width: `${iconSize}px`, height: `${iconSize}px` }} />
        <FacebookShareCount url={url}>{count => <ShareCountDiv>{filter(count)}</ShareCountDiv>}</FacebookShareCount>
      </FacebookShareButton>
      <LinkedinShareButton url={url} title={post.title} description={postNode.excerpt}>
        <LinkedinIcon logoFillColor="black" iconBgStyle={{ fill: 'white' }} round size={iconSize} />
        <LinkedinShareCount url={url}>{count => <ShareCountDiv>{filter(count)}</ShareCountDiv>}</LinkedinShareCount>
      </LinkedinShareButton>
      <TelegramShareButton url={url}>
        <TelegramIcon logoFillColor="black" iconBgStyle={{ fill: 'white' }} round size={iconSize} />
      </TelegramShareButton>
    </SocialLinksDiv>
  );
};

export default SocialLinks;
