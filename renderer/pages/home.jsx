import React, { useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import puppeteer from 'puppeteer';

function Home() {
  async function pupp() {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    await page.goto('https://search.11st.co.kr/Search.tmall?kwd=%ED%82%A4%EB%B3%B4%EB%93%9C');

    const n = await page.$('#layBodyWrap > div > div > div.l_search_content > div');

    const text = await page.evaluate( t => t.textContent, n);
    console.log(text);

  }

  useEffect(() => {
    pupp();
  })

  return (
    <React.Fragment>
      <Head>
        <title>Home - Nextron (with-javascript)</title>
      </Head>
      <div>
      
      </div>
    </React.Fragment>
  );
};

export default Home;
