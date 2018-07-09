import React from 'react';
import Link from 'gatsby-link';
import Header from '../components/header/header';
import Hero from '../components/hero/Hero';
import { Flex, FlexContent } from '../components/FlexBox/FlexBox';
import BlockContent from '../components/block-content/block-content';

const IndexPage = () => (
  <div>
    <Header title="Ricardo Ibarra"/>
    <Hero title="Full stack javascript developer" subTitle="I love building React and Angular apps"></Hero>
    <div style={{
       maxWidth: 960,
       margin: '0 auto',
       textAlign: 'left'
    }}>
      <Flex>
          <FlexContent flexGrow="1">
            <BlockContent
              title="Experience"
              paragraph="Along the years i have develop project of all sizes, going from complex custom newspapers CMS to single page applications. I also got to design workflows and develop applications to manage them.">
            </BlockContent>
          </FlexContent>
      </Flex>
      <Flex>
          <FlexContent flexGrow="1">
            <BlockContent
              title="Experience"
              paragraph="Along the years i have develop project of all sizes, going from complex custom newspapers CMS to single page applications. I also got to design workflows and develop applications to manage them.">
            </BlockContent>
          </FlexContent>
          <FlexContent flexGrow="1">
            <BlockContent
              title="Experience"
              paragraph="Along the years i have develop project of all sizes, going from complex custom newspapers CMS to single page applications. I also got to design workflows and develop applications to manage them.">
            </BlockContent>
          </FlexContent>
      </Flex>
    </div>
  </div>
);

export default IndexPage
