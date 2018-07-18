import React from 'react';
import Link from 'gatsby-link';
import Header from '../components/header/header';
import Footer from '../components/footer/Footer';
import Hero from '../components/hero/Hero';
import { Flex, FlexContent } from '../components/FlexBox/FlexBox';
import BlockContent from '../components/block-content/block-content';

const IndexPage = () => (
  <div>
    <Header title="Ricardo Ibarra"/>
    <Hero title="Full stack javascript developer" subTitle="I love building React and Angular apps"></Hero>
    <main>
      <Flex>
          <FlexContent flexGrow="1">
            <BlockContent
              title="Experience"
              paragraph=" Along the years i have develop project of all sizes,
                         going from complex custom newspapers CMS to single page applications.
                         I also got to design workflows and develop applications to manage them.">
            </BlockContent>
          </FlexContent>
      </Flex>
      <Flex>
          <FlexContent flexGrow="1">
            <BlockContent
              title="Education"
              paragraph="Got my college degree and masters on Information Technology with a specialty on database design.
                        Mostly worked with data warehouse designs and Business intelligence tools.">
            </BlockContent>
          </FlexContent>
          <FlexContent flexGrow="1">
            <BlockContent
              title="Technologies"
              paragraph="On my early years i worked with the LAMP stack, then moved to C# & Sql Server mostly for webapps.
                        The last couple of years i have worked with node and i have a few MEAN deployments.">
            </BlockContent>
          </FlexContent>
      </Flex>
      <Flex>
          <FlexContent flexGrow="1">
            <BlockContent
              title="Also..."
              paragraph="I like to do R&D on cutting edge web technologies to see how they can improve/fit on the projects i'm currently working on.">
            </BlockContent>
          </FlexContent>
      </Flex>
    </main>
    <Footer></Footer>
  </div>
);

export default IndexPage
