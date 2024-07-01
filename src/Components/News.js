import React, {Component} from 'react';
import NewsItem  from './NewsItem'
import PropTypes from 'prop-types';

export class News extends Component 
{
    articles=[ 
        {
            "source": {
                "id": null,
                "name": "ReadWrite"
            },
            "author": "Radek Zielinski",
            "title": "VanEck Set to Launch Spot Bitcoin ETF on Australia’s ASX",
            "description": "Prominent investment management firm VanEck announced that it is about to list Australia’s first spot Bitcoin (BTC) exchange-traded fund (ETF)… Continue reading VanEck Set to Launch Spot Bitcoin ETF on Australia’s ASX\nThe post VanEck Set to Launch Spot Bitcoi…",
            "url": "https://readwrite.com/vaneck-set-to-launch-spot-bitcoin-etf-on-australias-asx/",
            "urlToImage": "https://readwrite.com/wp-content/uploads/2024/06/ea85a934-c8fc-4d65-9279-ff85bb79fbae.webp",
            "publishedAt": "2024-06-17T15:43:51Z",
            "content": "Prominent investment management firm VanEck announced that it is about to list\r\n Australia’s first spot Bitcoin (BTC) exchange-traded fund (ETF) listed on the domestic Australian Securities Exchange … [+1968 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "ReadWrite"
            },
            "author": "Radek Zielinski",
            "title": "Bitcoin trades above supports, bank collapses are a good omen",
            "description": "Bitcoin (BTC) is nearing a potentially pivotal moment as its average price across three different time frames has converged within… Continue reading Bitcoin trades above supports, bank collapses are a good omen\nThe post Bitcoin trades above supports, bank col…",
            "url": "https://readwrite.com/bitcoin-trades-above-supports-bank-collapses-are-a-good-omen/",
            "urlToImage": "https://readwrite.com/wp-content/uploads/2024/06/fc23b9c7-9438-4ba4-a436-fabd4fed874e.webp",
            "publishedAt": "2024-06-05T11:32:13Z",
            "content": "Bitcoin (BTC) is nearing a potentially pivotal moment as its average price across three different time frames has converged within a narrow range, hinting at a possible breakout.\r\nJamie Coutts Real V… [+2258 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "ReadWrite"
            },
            "author": "Ali Rees",
            "title": "Japanese investment firm Metaplanet to sell $6m of bonds to buy Bitcoin",
            "description": "Japanese investment firm Metaplanet is planning to sell one billion yen in bonds to buy Bitcoin, as part of its… Continue reading Japanese investment firm Metaplanet to sell $6m of bonds to buy Bitcoin\nThe post Japanese investment firm Metaplanet to sell $6m …",
            "url": "https://readwrite.com/investment-firm-metaplanet-to-sell-bonds-to-buy-bitcoin/",
            "urlToImage": "https://readwrite.com/wp-content/uploads/2024/06/buying-bitcoin-EOjGRyFSSt2kLr3TzvPf4A-yRhAHjLMRUO9G2dq9yUp4g.jpeg",
            "publishedAt": "2024-06-24T13:47:08Z",
            "content": "Japanese investment firm Metaplanet is planning to sell one billion yen in bonds to buy Bitcoin, as part of its long-term strategy.\r\nThe move, which was approved by the company’s board of directors t… [+1764 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "ReadWrite"
            },
            "author": "Radek Zielinski",
            "title": "Winklevoss twins donate $1M in Bitcoin to Trump’s campaign",
            "description": "Gemini CEO Tyler Winklevoss and his twin brother Cameron donated $1 million worth of Bitcoin (BTC) each to Donald Trump’s… Continue reading Winklevoss twins donate $1M in Bitcoin to Trump’s campaign\nThe post Winklevoss twins donate $1M in Bitcoin to Trump’s c…",
            "url": "https://readwrite.com/winklevoss-twins-donate-1m-in-bitcoin-to-trumps-campaign/",
            "urlToImage": "https://readwrite.com/wp-content/uploads/2024/06/GQij8RdakAU8Vor-min-scaled.jpeg",
            "publishedAt": "2024-06-21T16:32:19Z",
            "content": "Gemini CEO Tyler Winklevoss and his twin brother Cameron donated $1 million worth of Bitcoin (BTC) each to Donald Trump’s 2024 presidential campaign.\r\nThe presumptive Republican nominee’s campaign re… [+3507 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "ReadWrite"
            },
            "author": "Olaleye Komolafe",
            "title": "Bitcoin and Ethereum Traders Flee Short-Term Bearish Trends, Rotating Funds To Alternative Cryptocurrencies",
            "description": "TLDR   Bitcoin (BTC) bears expect a prolonged negative trend for the leading cryptocurrency. Market experts believe Ethereum (ETH) could dip… Continue reading Bitcoin and Ethereum Traders Flee Short-Term Bearish Trends, Rotating Funds To Alternative Cryptocur…",
            "url": "https://readwrite.com/bitcoin-and-ethereum-traders-flee-short-term-bearish-trends-rotating-funds-to-alternative-cryptocurrencies/",
            "urlToImage": "https://readwrite.com/wp-content/uploads/2024/06/Featured-Image-for-Rebel-Satoshi.jpg",
            "publishedAt": "2024-06-20T03:37:47Z",
            "content": "TLDR  \r\n\u003Cul\u003E\u003Cli\u003EBitcoin (BTC) bears expect a prolonged negative trend for the leading cryptocurrency.\u003C/li\u003E\u003Cli\u003EMarket experts believe Ethereum (ETH) could dip below the $2,900 price mark.\u003C/li\u003E\u003Cli\u003ERebe… [+3670 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "ReadWrite"
            },
            "author": "Radek Zielinski",
            "title": "BlackRock’s Bitcoin ETF overtakes Grayscale’s GBTC",
            "description": "BlackRock’s spot Bitcoin (BTC) exchange-traded fund (ETF), IBIT, has overtaken Grayscale’s GBTC to become the largest product of its kind.… Continue reading BlackRock’s Bitcoin ETF overtakes Grayscale’s GBTC\nThe post BlackRock’s Bitcoin ETF overtakes Grayscal…",
            "url": "https://readwrite.com/blackrocks-bitcoin-etf-overtakes-grayscales-gbtc/",
            "urlToImage": "https://readwrite.com/wp-content/uploads/2024/05/7a340d79-5b46-4ae2-b016-80aff63a33cd.webp",
            "publishedAt": "2024-05-29T14:37:44Z",
            "content": "BlackRock’s spot Bitcoin (BTC) exchange-traded fund (ETF), IBIT, has overtaken Grayscale’s GBTC to become the largest product of its kind.\r\nAccording to data shared by the company, this shift occurre… [+2603 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "ReadWrite"
            },
            "author": "Radek Zielinski",
            "title": "Bitcoin futures trading sets another record as crypto confidence climbs",
            "description": "According to data shared by CoinGlass, Bitcoin (BTC) traders have set a new record for the highest-ever positions on BTC-tracked… Continue reading Bitcoin futures trading sets another record as crypto confidence climbs\nThe post Bitcoin futures trading sets an…",
            "url": "https://readwrite.com/bitcoin-futures-trading-sets-another-record-as-crypto-confidence-climbs/",
            "urlToImage": "https://readwrite.com/wp-content/uploads/2024/06/cf5c9062-2edb-4cce-afff-1410e6d7acce.webp",
            "publishedAt": "2024-06-07T19:56:27Z",
            "content": "According to data shared by CoinGlass, Bitcoin (BTC) traders have set a new record for the highest-ever positions on BTC-tracked futures, with open interest surpassing $37.7 billion on Thursday. This… [+1929 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "ReadWrite"
            },
            "author": "Alvin Hemedez",
            "title": "Why Should You Invest in This Learn-to-Earn Bitcoin Alternative? – Cilinix Crypto Presale Update",
            "description": "While Bitcoin is still struggling to reach the $70,000 level, retail investors are flocking to this Learn-to-Earn crypto presale, boosting… Continue reading Why Should You Invest in This Learn-to-Earn Bitcoin Alternative? – Cilinix Crypto Presale Update\nThe p…",
            "url": "https://readwrite.com/why-should-you-invest-in-this-learn-to-earn-bitcoin-alternative-cilinix-crypto-presale-update/",
            "urlToImage": "https://readwrite.com/wp-content/uploads/2024/06/cilinix-crypto-99btc-presale-update.jpg",
            "publishedAt": "2024-06-15T15:43:59Z",
            "content": "While Bitcoin is still struggling to reach the $70,000 level, retail investors are flocking to this Learn-to-Earn crypto presale, boosting it to $2 million.\r\nThe new 99Bitcoins (99BTC) token is perfo… [+4730 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "ReadWrite"
            },
            "author": "Radek Zielinski",
            "title": "Bitcoin and Ethereum stable despite leverage flush",
            "description": "Over the weekend, Bitcoin (BTC) and Ethereum (ETH) showed little price movement following a significant $400 million leverage flush out… Continue reading Bitcoin and Ethereum stable despite leverage flush\nThe post Bitcoin and Ethereum stable despite leverage …",
            "url": "https://readwrite.com/bitcoin-and-ethereum-stable-despite-leverage-flush/",
            "urlToImage": "https://readwrite.com/wp-content/uploads/2024/06/6fa97e87-0b76-4506-b3f6-2f1b460a8732.webp",
            "publishedAt": "2024-06-11T01:47:24Z",
            "content": "Over the weekend, Bitcoin (BTC) and Ethereum (ETH) showed little price movement following a significant $400 million leverage flush out on Friday, which led to a decline in open interest and trading … [+2043 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "ReadWrite"
            },
            "author": "Radek Zielinski",
            "title": "Louisiana passes pro-Bitcoin, anti-CBDC crypto bill",
            "description": "On June 19, Louisiana quietly enacted House Bill 488, a crypto bill known as the “Blockchain Basics Act” or “Bitcoin… Continue reading Louisiana passes pro-Bitcoin, anti-CBDC crypto bill\nThe post Louisiana passes pro-Bitcoin, anti-CBDC crypto bill appeared fi…",
            "url": "https://readwrite.com/louisiana-passes-pro-bitcoin-anti-cbdc-crypto-bill/",
            "urlToImage": "https://readwrite.com/wp-content/uploads/2024/06/6f67013b-b8ea-44cb-a656-b32460a85347.webp",
            "publishedAt": "2024-06-26T13:29:43Z",
            "content": "On June 19, Louisiana quietly enacted House Bill 488, a crypto bill known as the “Blockchain Basics Act” or “Bitcoin Rights” bill.\r\nThe legislation, set to take effect on August 1, 2024, marks a sign… [+2341 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "ReadWrite"
            },
            "author": "Radek Zielinski",
            "title": "Australia’s first spot Bitcoin ETF launches on CBOE exchange",
            "description": "Monochrome Asset Management has launched Australia’s first spot Bitcoin Exchange Traded Fund (ETF) on the CBOE exchange, providing investors with… Continue reading Australia’s first spot Bitcoin ETF launches on CBOE exchange\nThe post Australia’s first spot Bi…",
            "url": "https://readwrite.com/australias-first-spot-bitcoin-etf-launches-on-cboe-exchange/",
            "urlToImage": "https://readwrite.com/wp-content/uploads/2024/06/018cda41-fe86-45f3-a035-4c3326ca569a.webp",
            "publishedAt": "2024-06-04T14:39:11Z",
            "content": "Monochrome Asset Management has launched Australia’s first spot Bitcoin Exchange Traded Fund (ETF) on the CBOE exchange, providing investors with a regulated framework to access Bitcoin (BTC).\r\nThe E… [+1568 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "ReadWrite"
            },
            "author": "Radek Zielinski",
            "title": "Bitcoin ETF outflows reach $1.3B as price falls",
            "description": "Over the past two weeks, United States spot Bitcoin (BTC) exchange-traded funds (ETFs) have experienced outflows totaling $1.3 billion as… Continue reading Bitcoin ETF outflows reach $1.3B as price falls\nThe post Bitcoin ETF outflows reach $1.3B as price fall…",
            "url": "https://readwrite.com/bitcoin-etf-outflows-reach-1-3b-as-price-falls/",
            "urlToImage": "https://readwrite.com/wp-content/uploads/2024/06/304c4991-be59-40e6-8e3c-bed299286dbc.webp",
            "publishedAt": "2024-06-25T16:32:14Z",
            "content": "Over the past two weeks, United States spot Bitcoin (BTC) exchange-traded funds (ETFs) have experienced outflows totaling $1.3 billion as Bitcoin’s price continues to fall.\r\nFarside Investors reports… [+2047 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "ReadWrite"
            },
            "author": "Radek Zielinski",
            "title": "Snowden backs Bitcoin after NYSE technical glitch",
            "description": "In the wake of a significant market disruption caused by a technical glitch on the New York Stock Exchange (NYSE),… Continue reading Snowden backs Bitcoin after NYSE technical glitch\nThe post Snowden backs Bitcoin after NYSE technical glitch appeared first on…",
            "url": "https://readwrite.com/snowden-backs-bitcoin-after-nyse-technical-glitch/",
            "urlToImage": "https://readwrite.com/wp-content/uploads/2024/06/16793c62-15b1-41b6-bf15-8a79580832f7.jpeg",
            "publishedAt": "2024-06-04T15:09:13Z",
            "content": "In the wake of a significant market disruption caused by a technical glitch on the New York Stock Exchange (NYSE), NSA whistleblower Edward Snowden has once again voiced his support for Bitcoin (BTC)… [+2574 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Slashdot.org"
            },
            "author": "EditorDavid",
            "title": "US Justice Department Indicts Creators of Bitcoin-Anonymizing 'Samouri' Wallet",
            "description": "America's Justice Department \"indicted the creators of an application that helps people spend their bitcoins anonymously,\" writes Reason.com:\n\n \nThey're accused of \"conspiracy to commit money laundering.\" Why \"conspiracy to commit\" as opposed to just \"money l…",
            "url": "https://slashdot.org/story/24/06/09/0126246/us-justice-department-indicts-creators-of-bitcoin-anonymizing-samouri-wallet",
            "urlToImage": "https://a.fsdn.com/sd/topics/bitcoin_64.png",
            "publishedAt": "2024-06-09T01:35:00Z",
            "content": "They provided a privacy tool that may have enabled other people to do illegal things with their bitcoin\r\nThey were literally going around telling folks that they were gray and black market friendly. … [+516 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Slashdot.org"
            },
            "author": "BeauHD",
            "title": "Julian Assange Received $500,000 Bitcoin Donation To Cover Travel Costs",
            "description": "Earlier this week, WikiLeaks co-founder Julian Assange received a donation of 8.07 bitcoin (worth roughly $500,000) from an anonymous bitcoin whale, \"helping to cover the cost of a private jet that flew him out of the U.K. and ultimately to freedom in Austral…",
            "url": "https://slashdot.org/story/24/06/27/209220/julian-assange-received-500000-bitcoin-donation-to-cover-travel-costs",
            "urlToImage": "https://a.fsdn.com/sd/topics/bitcoin_64.png",
            "publishedAt": "2024-06-27T21:30:00Z",
            "content": "Initially, Assange's wife Stella made an \"emergency appeal\" to raise 520,000 British pounds to pay for the transport, setting up a crowdfunding page that allowed people to donate in fiat currency via… [+922 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "ReadWrite"
            },
            "author": "Radek Zielinski",
            "title": "Bitcoin plunge below $63k triggers wave of liquidations",
            "description": "The cryptocurrency market faced significant turbulence as Bitcoin’s (BTC) value fell below $63,000, leading to a surge in long position… Continue reading Bitcoin plunge below $63k triggers wave of liquidations\nThe post Bitcoin plunge below $63k triggers wave …",
            "url": "https://readwrite.com/bitcoin-plunge-below-63k-triggers-wave-of-liquidations/",
            "urlToImage": "https://readwrite.com/wp-content/uploads/2024/06/65e6f8d5-ef84-4b5c-84b6-e3ac21cedb77.webp",
            "publishedAt": "2024-06-24T16:38:30Z",
            "content": "The cryptocurrency market faced significant turbulence as Bitcoin’s (BTC) value fell below $63,000, leading to a surge in long position liquidations.\r\nCoinGlass data shows\r\n that over the past 24 hou… [+2379 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "ReadWrite"
            },
            "author": "Olaleye Komolafe",
            "title": "Up or Down For Bitcoin Next? Bonk Sees Fresh Interest; Rebel Satoshi Arcade Becomes New Meme Favorite",
            "description": "TLDR Bitcoin’s next move is set to be bullish amid ongoing consolidation. Bonk prepares for further upsides as demand picks… Continue reading Up or Down For Bitcoin Next? Bonk Sees Fresh Interest; Rebel Satoshi Arcade Becomes New Meme Favorite\nThe post Up or …",
            "url": "https://readwrite.com/up-or-down-for-bitcoin-next-bonk-sees-fresh-interest-rebel-satoshi-arcade-becomes-new-meme-favorite/",
            "urlToImage": "https://readwrite.com/wp-content/uploads/2024/05/Rebel-Satoshi-Arcade.jpg",
            "publishedAt": "2024-05-31T08:31:13Z",
            "content": "TLDR\r\n\u003Cul\u003E\u003Cli\u003EBitcoins next move is set to be bullish amid ongoing consolidation.\u003C/li\u003E\u003Cli\u003EBonk prepares for further upsides as demand picks up.\u003C/li\u003E\u003Cli\u003ERebel Satoshi Arcade is a new memecoin to watch… [+3933 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "ReadWrite"
            },
            "author": "Radek Zielinski",
            "title": "Bitcoin falls as far right candidates gain in EU elections",
            "description": "It was a risk-off day in Asia as concerns about the Chinese property market and potential changes to the Bank… Continue reading Bitcoin falls as far right candidates gain in EU elections\nThe post Bitcoin falls as far right candidates gain in EU elections appe…",
            "url": "https://readwrite.com/bitcoin-price-up-down-institutional-investment/",
            "urlToImage": "https://readwrite.com/wp-content/uploads/2024/06/01f80a58-cfc7-41a1-8477-31c99d2ed621.webp",
            "publishedAt": "2024-06-12T00:53:13Z",
            "content": "It was a risk-off day in Asia as concerns about the Chinese property market and potential changes to the Bank of Japan’s bond purchase program weighed on investor sentiment.\r\nBitcoin, the leading cry… [+2006 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "ReadWrite"
            },
            "author": "Petar Jovanović",
            "title": "Bitcoin Price Prediction as BTC Hits $71k – Time To Buy?",
            "description": "Bitcoin’s price performance this week has been pretty solid, with the BTC price now hovering around $71,000. After trading in… Continue reading Bitcoin Price Prediction as BTC Hits $71k – Time To Buy?\nThe post Bitcoin Price Prediction as BTC Hits $71k – Time …",
            "url": "https://readwrite.com/bitcoin-price-prediction-as-btc-hits-71k-time-to-buy/",
            "urlToImage": "https://readwrite.com/wp-content/uploads/2024/06/binance-delist-2.jpeg",
            "publishedAt": "2024-06-05T14:55:20Z",
            "content": "Bitcoin’s price performance this week has been pretty solid, with the BTC price now hovering around $71,000. After trading in the $67,000 to $68,000 range for several weeks, this surge has reignited … [+4860 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "ReadWrite"
            },
            "author": "Owen Good",
            "title": "Trump pledges more cryptocurrency support, putting distance between himself and Biden",
            "description": "Donald Trump is doubling down on cryptocurrency support, saying he wants all Bitcoin going forward to be mined in the… Continue reading Trump pledges more cryptocurrency support, putting distance between himself and Biden\nThe post Trump pledges more cryptocur…",
            "url": "https://readwrite.com/trump-pledges-more-cryptocurrency-support-putting-distance-between-himself-and-biden/",
            "urlToImage": "https://readwrite.com/wp-content/uploads/2024/06/5gPabAcZQ829oWArrj6otg.jpg",
            "publishedAt": "2024-06-12T21:56:40Z",
            "content": "Donald Trump is doubling down on cryptocurrency support, saying he wants all Bitcoin going forward to be mined in the United States.\r\nIn an all-caps rant posted to Trumps Truth Social platform, the R… [+961 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "ReadWrite"
            },
            "author": "James Spillane",
            "title": "Ethereum Mass Institutional Adoption An Enormous Tailwind For Kai Cat Coin",
            "description": "Ethereum is poised for a major rally, say many cryptocurrency market analysts. The second largest coin by market cap after… Continue reading Ethereum Mass Institutional Adoption An Enormous Tailwind For Kai Cat Coin\nThe post Ethereum Mass Institutional Adopti…",
            "url": "https://readwrite.com/ethereum-mass-institutional-adoption-an-enormous-tailwind-for-kai-cat-coin/",
            "urlToImage": "https://readwrite.com/wp-content/uploads/2024/05/Ethereum-1.jpg",
            "publishedAt": "2024-05-31T03:29:12Z",
            "content": "Ethereum is poised for a major rally, say many cryptocurrency market analysts. The second largest coin by market cap after Bitcoin, a recent May 14th report in Yahoo Finance said Ethereum among other… [+3994 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Gizmodo.com"
            },
            "author": "Matt Novak",
            "title": "Biden Veto Angers Crypto Industry as It Floods 2024 Election With Cash",
            "description": "President Joe Biden vetoed a resolution late Friday that passed through both the U.S. House and Senate and was widely supported by the cryptocurrency industry. And it’s just the latest move from a president who’s put himself firmly in the crosshairs of powerf…",
            "url": "https://gizmodo.com/biden-veto-angers-crypto-2024-election-trump-cash-money-1851516813",
            "urlToImage": "https://i.kinja-img.com/image/upload/c_fill,h_675,pg_1,q_80,w_1200/181d3375cd4f63fe5ded9cddb176293f.jpg",
            "publishedAt": "2024-06-03T20:40:00Z",
            "content": "President Joe Biden vetoed a resolution late Friday that passed through both the U.S. House and Senate and was widely supported by the cryptocurrency industry. And its just the latest move from a pre… [+4169 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "ReadWrite"
            },
            "author": "Olaleye Komolafe",
            "title": "Grayscale Survey Highlights Bitcoin’s Significance In 2024 US Elections; as New Meme Proves Popular",
            "description": "TLDR Grayscale’s report reveals Bitcoin’s (BTC) growing influence in the 2024 elections, with more voters considering candidates’ stances on crypto.… Continue reading Grayscale Survey Highlights Bitcoin’s Significance In 2024 US Elections; as New Meme Proves …",
            "url": "https://readwrite.com/grayscale-survey-highlights-bitcoins-significance-in-2024-us-elections-as-new-meme-proves-popular/",
            "urlToImage": "https://readwrite.com/wp-content/uploads/2024/11/RECQ-Investment-potential.jpg",
            "publishedAt": "2024-06-12T16:01:05Z",
            "content": "TLDR\r\n\u003Cul\u003E\u003Cli\u003EGrayscale’s report reveals Bitcoin’s (BTC) growing influence in the 2024 elections, with more voters considering candidates’ stances on crypto.\u003C/li\u003E\u003Cli\u003ERebel Satoshi Arcade (RECQ) is a … [+4862 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Fort Worth Star-Telegram"
            },
            "author": "Jaida Joyner",
            "title": "Elderly Texas woman withdrew $40K from bank for Bitcoin scam. Citizen, police intervened",
            "description": "A concerned bystander saw the woman depositing large amounts of money into a Bitcoin ATM. Here’s what the scammer did.",
            "url": "https://www.star-telegram.com/news/local/crime/article289280835.html",
            "urlToImage": "https://media.zenfs.com/en/fort_worth_star_telegram_mcclatchy_952/5c230a028d640b6d1938bc3cc8478e85",
            "publishedAt": "2024-06-14T18:50:11Z",
            "content": "A sharp-eyed citizens quick thinking saved an elderly North Texas woman from losing thousands of dollars in a Bitcoin scam, according to police.\r\nOfficers in White Settlement received a call from a c… [+1789 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "ReadWrite"
            },
            "author": "James Spillane",
            "title": "Did Altcoin Hunters Miss Meme Coin Season? KAI Cat Says Not Even Close.",
            "description": "Meme coins were absolutely soaring earlier this year, but are down in the dumps in June. Altcoins like Shiba Inu,… Continue reading Did Altcoin Hunters Miss Meme Coin Season? KAI Cat Says Not Even Close.\nThe post Did Altcoin Hunters Miss Meme Coin Season? KAI…",
            "url": "https://readwrite.com/did-altcoin-hunters-miss-meme-coin-season-kai-cat-says-not-even-close/",
            "urlToImage": "https://readwrite.com/wp-content/uploads/2024/06/KAI-Cat-Says-Not-Even-Close.jpg",
            "publishedAt": "2024-06-17T03:24:24Z",
            "content": "Meme coins were absolutely soaring earlier this year, but are down in the dumps in June. Altcoins like Shiba Inu, Dogwifhat, Bonk, Pepe, and PopCat were on top of the cryptocurrency leaderboards for … [+3105 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Yahoo Entertainment"
            },
            "author": null,
            "title": "MicroStrategy raises its bond sale to buy even more bitcoin",
            "description": null,
            "url": "https://consent.yahoo.com/v2/collectConsent?sessionId=1_cc-session_de419e95-ff2a-4ff9-98d8-6a6c716414a1",
            "urlToImage": null,
            "publishedAt": "2024-06-14T19:47:21Z",
            "content": "If you click 'Accept all', we and our partners, including 238 who are part of the IAB Transparency &amp; Consent Framework, will also store and/or access information on a device (in other words, use … [+678 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Yahoo Entertainment"
            },
            "author": "CoinDesk",
            "title": "Crypto Investment Products Saw Nearly $2B in Inflows Last Week: CoinShares",
            "description": "Crypto investment products took on nearly $2 billion in inflows last week, according to a new report from CoinShares. Bitcoin (BTC) led investment...",
            "url": "https://finance.yahoo.com/video/crypto-investment-products-saw-nearly-163514266.html",
            "urlToImage": "https://media.zenfs.com/en/coindesk_75/6cb7f867b53c51edd13e932a55c899d7",
            "publishedAt": "2024-06-10T16:35:14Z",
            "content": "Crypto investment products took on nearly $2 billion in inflows last week, according to a new report from CoinShares. Bitcoin (BTC) led investment activity at over $1.97 billion of inflows, as U.S.-l… [+231 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "ReadWrite"
            },
            "author": "Radek Zielinski",
            "title": "Joe Biden campaign engages with crypto industry ahead of US election",
            "description": "President Joe Biden has begun seeking input from the the cryptocurrency industry amid the presidential race. This crypto-friendly approach is… Continue reading Joe Biden campaign engages with crypto industry ahead of US election\nThe post Joe Biden campaign en…",
            "url": "https://readwrite.com/joe-biden-campaign-engages-with-crypto-industry-ahead-of-us-election/",
            "urlToImage": "https://readwrite.com/wp-content/uploads/2024/05/91caa6fd-1910-48a0-ab60-fd16436f7829.webp",
            "publishedAt": "2024-05-30T15:51:02Z",
            "content": "President Joe Biden has begun seeking input from the the cryptocurrency industry amid the presidential race. This crypto-friendly approach is a significant departure from when Biden proposed imposing… [+2158 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "ReadWrite"
            },
            "author": "Radek Zielinski",
            "title": "Elon Musk DeepFakes peddle crypto scams on YouTube",
            "description": "A five-hour YouTube Live broadcast featuring a deepfake of Elon Musk promoted a cryptocurrency scam today, continuing a recent trend… Continue reading Elon Musk DeepFakes peddle crypto scams on YouTube\nThe post Elon Musk DeepFakes peddle crypto scams on YouTu…",
            "url": "https://readwrite.com/elon-musk-deepfakes-peddle-crypto-scams-on-youtube/",
            "urlToImage": "https://readwrite.com/wp-content/uploads/2024/06/424075a0-319a-11ef-beed-a2f4c78a60bf.webp",
            "publishedAt": "2024-06-24T16:37:09Z",
            "content": "A five-hour YouTube Live broadcast featuring a deepfake of Elon Musk promoted a cryptocurrency scam today, continuing a recent trend of similar fraudulent streams.\r\nAccording to a June 23 Engadget re… [+1792 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "ReadWrite"
            },
            "author": "Owen Good",
            "title": "Brazil’s biggest bank opens investment app to crypto trades",
            "description": "Brazil’s largest bank has opened up cryptocurrency trading to all users of its investment platform, allowing them to sell Bitcoin… Continue reading Brazil’s biggest bank opens investment app to crypto trades\nThe post Brazil’s biggest bank opens investment app…",
            "url": "https://readwrite.com/brazil-cryptocurrency-crypto-trading-app/",
            "urlToImage": "https://readwrite.com/wp-content/uploads/2024/06/brazilCryopto.jpg",
            "publishedAt": "2024-06-12T19:16:39Z",
            "content": "Brazils largest bank has opened up cryptocurrency trading to all users of its investment platform, allowing them to sell Bitcoin and Ethereum directly.\r\nGuto Antunes, the chief executive of Itau Unib… [+924 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "ReadWrite"
            },
      
     
        }
     
    ]
  
    

        static defaultProps = {
            country: 'in',
            pageSize: 8,
            category: 'general', // Provide a default category
        };
    
        static propTypes = {
            country: PropTypes.string,
            pageSize: PropTypes.number,
            category: PropTypes.string,
        };
    
        constructor(props) {
            super(props);
            console.log("Hello, I am a constructor");
            this.state = {
                articles: [],
                loading: false,
                page: 1, // Start with page 1 instead of 0
            };
        }
    
        async componentDidMount() {
            console.log("CDM");
            this.fetchArticles();
        }
    
        fetchArticles = async () => {
            const { country, category, pageSize } = this.props;
            const { page } = this.state;
            let url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&pageSize=${pageSize}&page=${page}&apiKey=0d78e779ace7426a8c287e642da86b0e`;
    
            this.setState({ loading: true });
            let data = await fetch(url);
            let parseData = await data.json();
            console.log(parseData);
            this.setState({ articles: parseData.articles, loading: false });
        };
    
        handleNextClick = async () => {
            this.setState((prevState) => ({ page: prevState.page + 1 }), this.fetchArticles);
        };
    
        handlePrevClick = async () => {
            this.setState((prevState) => ({ page: prevState.page - 1 }), this.fetchArticles);
        };
    
        render() {
            return (
                <div className="container my-3">
                    <h1 className="text-center">NewsPanda - Top Headlines</h1>
                    {this.state.loading && <h2>Loading...</h2>}
                    <div className="row">
                        {!this.state.loading && this.state.articles.map((element, index) => {
                            console.log('Element:', element);
                            const title = element.title ? element.title : "No title";
                            const description = element.description ? element.description.slice(0, 88) : "No description";
                            return (
                                <div className="col-md-4" key={index}>
                                    <NewsItem 
                                        title={title} 
                                        description={description} 
                                        imageUrl={element.urlToImage} 
                                        url={element.url} 
                                    />
                                </div>
                            );
                        })}
                    </div>
                    <div className="container d-flex justify-content-between">
                        <button 
                            disabled={this.state.page <= 1} 
                            type="button" 
                            className="btn btn-dark"  
                            onClick={this.handlePrevClick}
                        >
                            &larr; Previous
                        </button>
                        <button 
                            disabled={this.state.page > 2} 
                            type="button" 
                            className="btn btn-dark" 
                            onClick={this.handleNextClick}
                        >
                            Next &rarr;
                        </button>
                    </div>
                </div>
            );
        }
    }
    
    export default News;
    