import React, { useState,useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import {
    Button,
    SafeAreaView,
    ScrollView,
    Image,
    StatusBar,
    StyleSheet,
    Text,
    TextInput,
    useColorScheme,
    View,
    TouchableOpacity,
    ActivityIndicator,
    Alert,
    Dimensions,
    FlatList,
    KeyboardAvoidingView
} from 'react-native';

import Defaults from './Defaults';

function Home({navigation}) {
    var search = useState("")
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
      };
      
      const getMovies = async () => {
        try {
        //  const response = await fetch('https://newsapi.org/v2/top-headlines?country=in&apiKey=fd91f23fd33f4e8da11d913561f85599');
        //  const json = await response.json();
        const json = jsonLocal
         setData(json.articles);
         console.log(json.articles)
       } catch (error) {
         console.error(error);
       } finally {
         setLoading(false);
       }
     }
   
    useEffect(() => {
        getMovies(); 
      }, []);
    
    return (
        <SafeAreaView style={{ flex: 1, alignItems: 'flex-start', justifyContent: 'flex-start', backgroundColor: Defaults.backgroundColor }}>

            {/* nav bar */}
            <View style={{
                flexDirection: "row",
                alignItems: "center",
                marginTop: 0, marginBottom: 0,
                height: 80,
                width: '100%',
                // backgroundColor: 'blue'
            }}>
                <TouchableOpacity style={{ margin: 20 }}>
                    <Image source={require('./images/Menu.png')} />
                </TouchableOpacity>
                <Text style={{ flexGrow: 2 }}>News</Text>
                <TouchableOpacity style={{ margin: 10, }}>
                    <Image source={require('./images/bell.png')} />
                </TouchableOpacity>
                <TouchableOpacity style={{ margin: 10, marginRight: 20 }}>
                    <Image source={require('./images/basket.png')} />
                </TouchableOpacity>
            </View>

            {/* search bar */}
            <TextInput
                style={styles.Textfield}
                onChangeText={onSearch}
                value={search}
                placeholder="🔍 What are you looking for?"
            />

            <View style={{ flexDirection: 'row', alignItems: 'center', alignSelf: 'center' }}>
                <TouchableOpacity style={{ margin: 10, }}>
                    <Text>Trending</Text>
                </TouchableOpacity>
                <Text>|</Text>
                <TouchableOpacity style={{ margin: 10, }}>
                    <Text>Sports</Text>
                </TouchableOpacity>
            </View>
            {isLoading ? <ActivityIndicator style={{alignSelf:'center'}}/> : (
            <FlatList style={{flexGrow : 2, width:'100%', alignContent:'center',}}
            // data = {data} 
            data={data} 
            keyExtractor={({ id }, index) => id}
            renderItem={({ item }) => (
              <Card article={item} >

                </Card> 
            )}
            >
               
            </FlatList>
)}
        </SafeAreaView >
    )
    function onSearch() {

    }
}

function Card({
    article
  }){
    const navigation = useNavigation();
    return(
        <TouchableOpacity style={styles.CardBox} onPress={() => navigation.navigate('NewsDetail',{article})}>
            <View flexDirection='row'>
                <View width='45%'>
                <Text numberOfLines={3} style = {{height:'45%', fontSize:15}}>{article.title}</Text>
            <Text numberOfLines={5} style = {{height:'45%',fontSize:11,numberOfLines:3}}>{article.description}</Text>
                </View>
                <Image source={{uri: article.urlToImage}}
       style={{width: '45%', height: '90%',marginLeft:20}} />
            </View>
            
            
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    Textfield: {
        height: 45,
        width: '80%',
        marginTop: 8,
        marginBottom: 8,
        paddingHorizontal: 24,
        borderWidth: 1,
        borderRadius: 45,
        borderColor: 'gray',
        alignSelf: 'center'
    },
    CardBox:{
        alignSelf:'center',
        margin: 8,
        padding:15,
        width: '90%',
        height: 200,
        justifyContent: "center",
        alignItems: "flex-start",
        borderStyle: 'solid',
        borderWidth:0,
        borderTopColor: 'black',
        borderBottomEndRadius : 8,
        borderTopStartRadius: 8,
        borderTopEndRadius: 8,
        borderBottomStartRadius: 8,
        borderBottomLeftRadius:8,
        borderBottomRightRadius:8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.5,
        shadowRadius: 5,
        elevation: 5,
        backgroundColor:'#F6EBDB',
    },

});
export default Home;
var jsonLocal = {
    "status": "ok",
    "totalResults": 38,
    "articles": [
        {
            "source": {
                "id": null,
                "name": "Moneycontrol"
            },
            "author": "Rakesh Patil",
            "title": "Closing Bell: Nifty ends around 17,200, Sensex gains 684 pts led by IT, financials - Moneycontrol",
            "description": "Bank, Capital Goods, Healthcare and Information Technology indices up 0.5-1.7 percent, while Auto, Power, Realty and Oil &amp; Gas indices down 0.5-1 percent each.",
            "url": "https://www.moneycontrol.com/news/business/markets/share-market-live-updates-stock-market-today-october-14-latest-news-bse-nse-sensex-nifty-covid-coronavirus-shree-cement-bajaj-auto-hdfc-bank-avenue-supermarts-infosys-mindtree-chemcon-speciality-9326611.html",
            "urlToImage": "https://images.moneycontrol.com/static-mcnews/2022/07/SensexBSENSE-770x433.jpg",
            "publishedAt": "2022-10-14T10:20:51Z",
            "content": "October 14, 2022 / 03:31 PM IST\r\nMarket Close: Benchmark indices ended on positive note on October 14 with Nifty around 17,200 \r\nAt Close, the Sensex was up 684.64 points or 1.20% at 57,919.97, and t… [+485 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "News18"
            },
            "author": "News Desk",
            "title": "LIVE: Himachal Pradesh Assembly Elections to be Held on Nov 12, Counting of Votes on Dec 8; Gujarat Dates N - News18",
            "description": "EC to Announce Gujarat, Himachal Election Dates LIVE Updates: The term of the Gujarat Assembly ends on February 18 next year while that of Himachal Pradesh on January 8, 2023",
            "url": "https://www.news18.com/news/politics/ec-election-dates-live-updates-gujarat-himachal-pradesh-polls-2022-bjp-aap-congress-livenews-6162757.html",
            "urlToImage": "https://images.news18.com/ibnlive/uploads/2022/10/voting-166574238316x9.jpeg",
            "publishedAt": "2022-10-14T10:19:00Z",
            "content": "the two states to take stock of poll preparedness. The previous assembly elections were held in December 2017. After the election, BJP emerged victorious and had formed the state government, with Vij… [+1646 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Hindustan Times"
            },
            "author": "HT Entertainment Desk",
            "title": "Kantara becomes highest-rated Indian film on IMDb, Dhanush calls it a must-watch - Hindustan Times",
            "description": "Kantara, helmed by Rishab Shetty, has been praised by Dhanush. The film has become the highest-rated Indian film on IMDb.",
            "url": "https://www.hindustantimes.com/entertainment/others/kantara-becomes-highest-rated-indian-film-on-imdb-dhanush-calls-it-a-mustwatch-101665734211215.html",
            "urlToImage": "https://images.hindustantimes.com/img/2022/10/14/1600x900/Kantara_1665561452874_1665735059166_1665735059166.jpg",
            "publishedAt": "2022-10-14T08:16:49Z",
            "content": "Kannada action-drama Kantara is not just raking in the moolah but also earning praise from all quarters. Actor Dhanush on Friday took to Twitter to call Kantara 'mind blowing' and a 'must watch'. He … [+1786 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "NDTV News"
            },
            "author": null,
            "title": "Watch: Army's Tribute To Military Dog 'Zoom', Who Died Fighting Terrorists - NDTV",
            "description": "Army on Friday paid rich tribute to its canine warrior 'Zoom', who succumbed on Thursday to gunshot injuries received during an encounter in Anantnag district of Jammu and Kashmir earlier this week.",
            "url": "https://www.ndtv.com/india-news/watch-armys-tribute-to-military-dog-zoom-who-died-fighting-terrorists-3430598",
            "urlToImage": "https://c.ndtvimg.com/2022-10/pkaei4m8_army-dog-zoom_625x300_14_October_22.jpg",
            "publishedAt": "2022-10-14T08:11:00Z",
            "content": "Army dog 'Zoom' was a veteran of multiple counter-terror operations, said an official.\r\nSrinagar: Army on Friday paid rich tribute to its canine warrior 'Zoom', who succumbed on Thursday to gunshot i… [+2472 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Hindustan Times"
            },
            "author": "Swati Bhasin",
            "title": "Fifth Vande Bharat Express to be launched next month, will connect these cities - Hindustan Times",
            "description": "The services for the fourth Vande Bharat Express were flagged off on Thursday. | Latest News India",
            "url": "https://www.hindustantimes.com/india-news/fifth-vande-bharat-train-to-be-launched-next-month-will-connect-these-cities-101665734739772.html",
            "urlToImage": "https://images.hindustantimes.com/img/2022/10/14/1600x900/69bcc25c-4644-11ed-93d4-1233adb273d2_1665149882706_1665734845418_1665734845418.jpg",
            "publishedAt": "2022-10-14T08:07:47Z",
            "content": "The services for the fifth Vande Bharat Express - the semi high-speed train which is said to have given a facelift to the Indian Railways - are set to be launched next month on November 10. The train… [+1583 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "The Indian Express"
            },
            "author": "Express Web Desk",
            "title": "Russia Ukraine War News Live Updates: Putin’s missiles hit Mykolaiv; civilians in ‘annexed’ Kherson flee to Russia as Ukrainians advance - The Indian Express",
            "description": "Ukraine War, Russia-Ukraine News Live Updates: Ukrainian port city of Mykolaiv came under massive Russian bombardment Thursday, with civilian facilities hit, said agency reports quoting local officials.",
            "url": "https://indianexpress.com/article/world/russia-ukraine-war-live-updates-india-putin-zelenskyy-moscow-kyiv-8205401/",
            "urlToImage": "https://images.indianexpress.com/2022/10/melitopol.jpg",
            "publishedAt": "2022-10-14T08:04:31Z",
            "content": "Kyiv residents add basements to regular life\r\nAs Kyiv residents scrambled for refuge in shelters and basements on Tuesday morning where they lingered for hours bracing for an attack that never came m… [+1291 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Telangana Today"
            },
            "author": "IANS",
            "title": "Lucy spacecraft set to swing by Earth to reach Jupiter asteroids - Telangana Today",
            "description": "The Trojan asteroids are trapped in orbits around the Sun at the same distance as Jupiter, either far ahead of or behind the giant planet.",
            "url": "https://telanganatoday.com/lucy-spacecraft-set-to-swing-by-earth-to-reach-jupiter-asteroids",
            "urlToImage": "https://cdn.telanganatoday.com/wp-content/uploads/2022/10/Lucy-spacecraft-set-to-swing-by-Earth-to-reach-Jupiter-asteroids.jpg",
            "publishedAt": "2022-10-14T08:00:18Z",
            "content": null
        },
        {
            "source": {
                "id": null,
                "name": "India TV News"
            },
            "author": "Written by India TV Entertainment Desk",
            "title": "Doctor G Review & Twitter Reaction: Ayushmann Khurrana's 'funny' film gets a thumbs up from netizens - India TV News",
            "description": "Doctor G Review & Twitter Reaction: Ayushmann portrays the role of a Gynaecologist in a medical campus comedy-drama. 'Doctor G' cast includes Rakul Preet Singh, Shefali Shah and Sheeba Chadha. Here's what netizens have to say about it.",
            "url": "https://www.indiatvnews.com/entertainment/bollywood/doctor-g-review-twitter-reaction-ayushmann-khurrana-funny-film-gets-a-thumbs-up-from-netizens-2022-10-14-816151",
            "urlToImage": "https://resize.indiatvnews.com/en/resize/newbucket/1200_-/2022/10/doctor-g-1-1665731882.jpg",
            "publishedAt": "2022-10-14T07:22:07Z",
            "content": "Doctor G Review &amp; Twitter Reaction: Ayushmann Khurrana's latest film has hit the theaters. Once again the Bollywood actor has taken up a story that has a different approach and topic that many mu… [+2142 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Zoom"
            },
            "author": "ET Now Digital",
            "title": "Infosys will not end work from home; \"current approach works\", says CEO - Times Now",
            "description": "Infosys CEO Salil Parekh said the company will continue with its flexible approach with respect to work from home.",
            "url": "https://www.timesnownews.com/business-economy/companies/infosys-will-not-end-work-from-home-current-approach-works-says-ceo-article-94853755",
            "urlToImage": "https://static.tnn.in/thumb/msid-94853755,imgsize-100,width-1280,height-720,resizemode-75/94853755.jpg",
            "publishedAt": "2022-10-14T06:56:00Z",
            "content": "Karwa Chauth 2022: Check out the Moonrise time in Delhi, Gurgaon, Noida, Mumbai, Pune and other Indian cities"
        },
        {
            "source": {
                "id": null,
                "name": "Tech Explorist"
            },
            "author": "Amit Malewar",
            "title": "A unique black hole discovered spewing a fiery jet at another galaxy - Tech Explorist",
            "description": "The black hole is hosted by a galaxy around one billion light years away from Earth.",
            "url": "https://www.techexplorist.com/unique-black-hole-discovered-spewing-fiery-jet-another-galaxy/54262/",
            "urlToImage": "https://www.techexplorist.com/wp-content/uploads/2022/10/galaxy-RAD12.jpg",
            "publishedAt": "2022-10-14T06:52:00Z",
            "content": "Galaxies are typically divided into two major classes based on their morphology: spirals and ellipticals. In spiral galaxies, new stars form at an average rate of one Sun-like star per year. In contr… [+2817 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Cricbuzz"
            },
            "author": null,
            "title": "Travelling to Pakistan for 2023 Asia Cup in the plans for BCCI | Cricbuzz.com - Cricbuzz - Cricbuzz",
            "description": "Get Live Cricket Score, Scorecard, Schedules of International and Domestic cricket matches along with Latest News, Videos and ICC Cricket Rankings of Players on Cricbuzz.",
            "url": "https://www.cricbuzz.com/cricket-news/124115/travelling-to-pakistan-for-2023-asia-cup-in-the-plans-for-bcci",
            "urlToImage": null,
            "publishedAt": "2022-10-14T06:41:39Z",
            "content": "India last visited Pakistan for the 2008 Asia Cup © AFP\r\nIndia's visit to Pakistan for the Asia Cup in 2023 will, of course, be subject to the clearance of the government of the time, but right now, … [+3588 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Cricketaddictor.com"
            },
            "author": "More by Vicky Singh",
            "title": "AUS vs ENG Dream11 Prediction, Fantasy Cricket Tips, Dream11 Team, Playing XI, Pitch Report, Injury Update- England Tour of Australia, 3rd T20I - Cricket Addictor",
            "description": "AUS vs ENG Dream11 Prediction, Fantasy Cricket Tips, Dream11 Team, Playing XI, Pitch Report, Injury Update- England Tour of Australia, 3rd T20I",
            "url": "https://cricketaddictor.com/fantasy-cricket/aus-vs-eng-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-injury-update-england-tour-of-australia-3rd-t20i/",
            "urlToImage": "https://i0.wp.com/cricketaddictor.com/wp-content/uploads/2022/10/Australia-vs-England-2022-1.jpeg",
            "publishedAt": "2022-10-14T06:31:20Z",
            "content": "AUS vs ENG Dream11 Prediction, Fantasy Cricket Tips, Dream11 Team, Playing XI, Pitch Report, Injury Update of the match between Australia and England. They will play against each other for the last t… [+4497 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "NDTV News"
            },
            "author": null,
            "title": "\"Her Only Crime... She Gave Birth To Narendra Modi\": BJP Slams AAP Over Video - NDTV",
            "description": "The BJP on Friday sharpened its attack on the Aam Aadmi Party after its Gujarat chief Gopal Italia was heard purportedly mocking the prime minister's mother in a video, and said people of the state will make it pay for \"abusing\" her.",
            "url": "https://www.ndtv.com/india-news/gujaratis-will-make-you-pay-for-abusing-pm-modis-mother-bjp-to-aap-3430390",
            "urlToImage": "https://c.ndtvimg.com/2022-03/b3trdj5o_pm-modi-mother-dinner_625x300_12_March_22.jpg",
            "publishedAt": "2022-10-14T06:31:00Z",
            "content": "Mr Italia was on Thursday detained in New Delhi for more than 2.5 hours by the Delhi Police.\r\nNew Delhi: The BJP on Friday sharpened its attack on the Aam Aadmi Party after its Gujarat chief Gopal It… [+2936 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Deccan Herald"
            },
            "author": null,
            "title": "GlucoTrust Customer Reviews [Be Informed] - Deccan Herald",
            "description": "People neglect their health and don't properly care for their bodies because they are too preoccupied with their daily lives. Bad eating habits, consumption of junk food, lack of sleep, exercise regimen, and stressful lives have seriously impacted people's wa…",
            "url": "https://www.deccanherald.com/brandspot/pr-spot/glucotrust-customer-reviews-be-informed-1153466.html",
            "urlToImage": "https://www.deccanherald.com/sites/dh/files/p1-1153466-1665728108.png",
            "publishedAt": "2022-10-14T06:15:08Z",
            "content": "People neglect their health and don't properly care for their bodies because they are too preoccupied with their daily lives. Bad eating habits, consumption of junk food, lack of sleep, exercise regi… [+17173 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Hindustan Times"
            },
            "author": "Parmita Uniyal",
            "title": "Superfoods for your heart: 5 best foods to boost heart health - Hindustan Times",
            "description": "The foods you eat every day can have an impact on a variety of factors that can lead to heart diseases. Here are 5 foods you must eat for improving your heart health. | Health",
            "url": "https://www.hindustantimes.com/lifestyle/health/superfoods-for-your-heart-5-best-foods-to-boost-heart-health-101665726967989.html",
            "urlToImage": "https://images.hindustantimes.com/img/2022/10/14/1600x900/heart_foods_1665726982099_1665726991517_1665726991517.jpg",
            "publishedAt": "2022-10-14T06:07:45Z",
            "content": "What you eat every day impacts your heart health gradually. Junk, deep-fried, processed, sugar-laden and salty foods slowly but surely contribute in damaging your heart. Add to it smoking, sedentary … [+4804 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "India.com"
            },
            "author": null,
            "title": "Bigg Boss 16, Day 13 Highlights: Maun Vrat For Archana Gautam, Ankit Calls Shalin-Tina's Romance Fake | Oct 1 - India.com",
            "description": "Bigg Boss 16, Day 13 Highlights, October 13: Archana Gautam is under Bigg Boss' radar for 'talking too much.' The episode sees Shalin Bhanot and Gautam Vig sorting out their differences while Ankit Gupta calls Shalin-Tina Datta's love angle fake in confession…",
            "url": "https://www.india.com/photos/entertainment/bigg-boss-16-day-13-highlights-maun-vrat-for-archana-gautam-ankit-calls-shalin-tinas-romance-fake-oct-13-254664/",
            "urlToImage": "https://st1.photogallery.ind.sh/wp-content/uploads/indiacom/archana-gautam-silenced-by-bigg-boss-202210-1665726646-825x510.jpg",
            "publishedAt": "2022-10-14T05:55:20Z",
            "content": "Image credit: Colors TVArchana Gautam was finally reprimanded for her talkative nature by Bigg Boss. When he asked the housemates whose voice irritates them the most, everyone took Archana's name. Fo… [+57 chars]"
        },
        {
            "source": {
                "id": "google-news",
                "name": "Google News"
            },
            "author": null,
            "title": "Third time’s a charm? NASA’s Artemis mission scheduled for November 14 take-off after repeated setbacks - The Financial Express",
            "description": null,
            "url": "https://news.google.com/__i/rss/rd/articles/CBMipAFodHRwczovL3d3dy5maW5hbmNpYWxleHByZXNzLmNvbS9saWZlc3R5bGUvc2NpZW5jZS90aGlyZC10aW1lcy1hLWNoYXJtLW5hc2FzLWFydGVtaXMtbWlzc2lvbi1zY2hlZHVsZWQtZm9yLW5vdmVtYmVyLW5ic3AxNC10YWtlLW9mZi1hZnRlci1yZXBlYXRlZC1zZXRiYWNrcy8yNzEwMDE1L9IBAA?oc=5",
            "urlToImage": null,
            "publishedAt": "2022-10-14T05:51:34Z",
            "content": null
        },
        {
            "source": {
                "id": "google-news",
                "name": "Google News"
            },
            "author": null,
            "title": "Bombay High Court acquits former DU professor G.N. Saibaba in Maoist links case - The Hindu",
            "description": null,
            "url": "https://news.google.com/__i/rss/rd/articles/CBMiiQFodHRwczovL3d3dy50aGVoaW5kdS5jb20vbmV3cy9jaXRpZXMvbXVtYmFpL2JvbWJheS1oaWdoLWNvdXJ0LWFjcXVpdHMtZXgtZHUtcHJvZmVzc29yLWduLXNhaWJhYmEtaW4tbWFvaXN0LWxpbmtzLWNhc2UvYXJ0aWNsZTY2MDA4ODE0LmVjZdIBAA?oc=5",
            "urlToImage": null,
            "publishedAt": "2022-10-14T05:51:00Z",
            "content": null
        },
        {
            "source": {
                "id": null,
                "name": "NDTV News"
            },
            "author": null,
            "title": "Karwa Chauth 2022: From Priyanka Chopra's Festivities - Mehendi Pic Inside - NDTV Movies",
            "description": "Priyanka Chopra posted a picture of her mehendi",
            "url": "https://www.ndtv.com/entertainment/karwa-chauth-2022-from-priyanka-chopra-festivities-mehendi-pic-inside-3430402",
            "urlToImage": "https://c.ndtvimg.com/2022-10/1vuoeb_-priyanka-_625x300_14_October_22.jpg",
            "publishedAt": "2022-10-14T05:41:42Z",
            "content": "A throwback of Priyanka Chopra. (courtesy: priyankachopra)\r\nNew Delhi: Priyanka Chopra loves to go big on festivals and she did that on Karwa Chauth too this year. The actress, on Friday, shared a pi… [+1801 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "India.com"
            },
            "author": null,
            "title": "Flipkart diwali sale 2022 iphone 13: BIG DISCOUNTS on the iPhone 13 Pro and Mini, Check benefits, discounts, more - msnNOW",
            "description": "During the sale, iPhone 13 is coming under Rs 50000. iPhone 13 is available for Rs 59,990 on Flipkart during Big Diwali Sale, you can also enjoy exchange discount of up to Rs 16,900 bringing the price further down to Rs 43,090.",
            "url": "https://zeenews.india.com/technology/flipkart-diwali-sale-2022-iphone-13-big-discounts-on-the-iphone-13-pro-and-mini-check-benefits-discounts-more-2521641.html",
            "urlToImage": "https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA12WQqn.img?h=315&w=600&m=6&q=60&o=t&l=f&f=jpg",
            "publishedAt": "2022-10-14T05:39:51Z",
            "content": "© Provided by Zee NewsNew Delhi: Flipkart Big Diwali Sale, which starts from October 11, is offering good discounts on the wide range of products including smartphones, laptops, earbuds, smartwatches… [+1379 chars]"
        }
    ]
}